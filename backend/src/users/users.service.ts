import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            email: 'admin@test.com',
            password: '123456',
            permissions: [
                'dashboard.view',
                'users.view',
                'reports.view',
            ],
        },
        {
            id: 2,
            email: 'agent@test.com',
            password: '123456',
            permissions: [
                'dashboard.view',
            ],
        },
    ];

    findByEmail(email: string) {
        return this.users.find(user => user.email === email);
    }

    findById(id: number) {
        return this.users.find(user => user.id === id);
    }
}