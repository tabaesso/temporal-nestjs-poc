import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  async getUser(): Promise<string> {
    const user = await this.usersService.findLastUser();
    return `Hello ${user.email}`;
  }
}
