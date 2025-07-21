import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/auth.guard';
import { Public } from '../auth/auth.strategy';

@Controller('users')
@UseGuards(JwtAuthGuard) 
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Public()
  @Get()
  async findAll() {
    return this.usersService.getAll();
  }
}