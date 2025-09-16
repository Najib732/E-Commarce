import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() data: Partial<User>): Promise<User> {
    return this.userService.createUser(data);
  }

  
  @Get('search')
  findByFullNameSubstring(@Query('q') query: string): Promise<User[]> {
    return this.userService.findByFullNameSubstring(query);
  }


  @Get(':username')
  findByUsername(@Param('username') username: string): Promise<User> {
    return this.userService.findByUsername(username);
  }

 
  @Delete(':username')
  deleteByUsername(@Param('username') username: string): Promise<void> {
    return this.userService.deleteByUsername(username);
  }
}
