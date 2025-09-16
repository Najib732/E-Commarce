import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike, Like } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  
  async createUser(data: Partial<User>): Promise<User> {
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }
 
   async findByFullNameSubstring(substring: string): Promise<User[]> {
    return this.userRepository.find({
      where: {
 
       fullName: Like(`%${substring}%`),
       
      },
    });
  }
 
  async findByUsername(username: string): Promise<User> {
    const value = await this.userRepository.findOne({
      where: { username },
    });

    if (value !== null) {
      return value;
    } else {
      throw new Error('User not found');
    }

  }

  // Remove a user by unique username
  async deleteByUsername(username: string): Promise<void> {
    await this.userRepository.delete({ username });
  }
}
