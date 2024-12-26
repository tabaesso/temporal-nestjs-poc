import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async findLastUser(): Promise<Users> {
    const users = await this.usersRepository.find({
      order: {
        created_at: 'DESC',
      },
      take: 1,
    });

    return users[0];
  }
}
