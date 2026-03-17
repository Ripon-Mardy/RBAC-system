import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt.guard';
import { PermissionsGuard } from './auth/permissions.guard';
import { Permissions } from './auth/permissions.decorator';
import { users } from './data/users';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }



  // dashboard 
  @UseGuards(JwtAuthGuard, PermissionsGuard)
  @Permissions('dashboard.view')
  @Get('dashboard')
  getDashboard() {
    return { message: "welcome to dashboard" }
  }


  //users 
  @UseGuards(JwtAuthGuard, PermissionsGuard)
  @Permissions('users.view')
  @Get('users')
  getUsers() {
    return { message: 'Users Data' }
  }


  // reports 
  @UseGuards(JwtAuthGuard, PermissionsGuard)
  @Permissions('reports.view')
  @Get('reports')
  getReports() {
    return { message: 'Reports Data' };
  }


  // get fake data 
  @Get('data')
  getData() {
    return {
      message: 'This is some fake data',
      users: users
    }
  }


}
