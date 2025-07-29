import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }
    
    @Get(':id')
    getUser(@Param('id') id: string): string {
        return this.userService.getUser(id);
    }
    

    @Post()
    createUser(@Body() data: User): string {
        return this.userService.createUser(data);
    }

    @Put()
    updateUser(@Body() data: any): string {
    return this.userService.updateUser(data);
    }


    @Delete(':id')
    deleteUser(@Param('id') id: string): string {
        return this.userService.deleteUser(id);
    }

    


    /*
      @Get()
      getAllUsers(): string {
        return this.userService.getAllUsers();
      }
    */
   /*
      @Get()
      getUsers(@Query('name') name: string): string {
        return this.userService.getUsersByName(name);
      }
    */

}




