import { Injectable, UnauthorizedException } from '@nestjs/common';
import { users } from '../data/users';
import * as jwt from 'jsonwebtoken'
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private userservice: UsersService,
        private jwtService: JwtService,
    ) { }

    async login(email: string, password: string) {

        const user = this.userservice.findByEmail(email);

        if (!user || user.password !== password) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload = {
            sub: user.id,
            email: user.email,
            permissions: user.permissions,
        }

        const token = this.jwtService.sign(payload)

        return {
            access_token: token,
            permissions: user.permissions
        };
    } // login route


    test() {
        return 'Hello test'
    }


}
