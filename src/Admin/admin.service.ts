import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './Admin.entity';
import { AdminDto } from './admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {}

  async addAdmin(adminDto: AdminDto & { nidImagePath?: string }): Promise<Admin> {
    const admin = this.adminRepository.create({
      name: adminDto.name,
      email: adminDto.email,
      nidNumber: adminDto.nidNumber,
      nidImagePath: adminDto.nidImagePath, 
    });

    return await this.adminRepository.save(admin);
  }

  getAdmin(): Promise<Admin[]> {
    return this.adminRepository.find();
  }

  getAdminByNameandID(name: string, id: number): Promise<Admin[]> {
    return this.adminRepository.find({
      where: { name, id },
    });
  }

  async deleteAdmin(id: number): Promise<string> {
    await this.adminRepository.delete(id);
    return `Admin with ID ${id} has been deleted`;
  }

  async editAdmin(id: number, updatedData: Partial<AdminDto>): Promise<string> {
    await this.adminRepository.update(id, updatedData);
    return `Admin with ID ${id} has been updated`;
  }
}
