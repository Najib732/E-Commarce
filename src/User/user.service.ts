import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
    /*
  getAllUsers(): string {
    return 'All users returned from service';
  }
*/
  getUser(id: string): string {
    return `User with ID ${id} returned from service`;
  }

/*
  getUsersByName(name: string): string {
    return `Name: ${name} returned from service`;
  }
*/

  createUser(data: User): string {
    return `User created with name: ${data.username}, phoneno: ${data.phoneno}`;
  }

  updateUser(data: any): string {
  var id = data.id;
  var name = data.name;
  var username = data.username;
  return `User with ID ${id} updated. New name: ${name}, username: ${username}`;
 }


  deleteUser(id: string): string {
    return `User with ID ${id} deleted`;
  }

}