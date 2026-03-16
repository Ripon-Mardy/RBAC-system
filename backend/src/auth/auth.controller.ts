import { Body, Controller, Get, Post} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('login')
    login(@Body() body: any) {
        const {email, password} = body;

        return this.authService.login(email, password)
    }


    @Get('test')
    test() {
        return this.authService.test()
    }

}
