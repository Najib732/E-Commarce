import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { Seller } from './seller.sellerDTO';

@Injectable()
export class SellerService {
  constructor(
    @InjectRepository(Seller)
    private sellerRepo: Repository<Seller>,
  ) {}

  async createSeller(sellerData: Partial<Seller>): Promise<Seller> {
    const seller = this.sellerRepo.create(sellerData);
    return this.sellerRepo.save(seller);
  }

  async updatePhone(id: string, phone: number): Promise<Seller> {
    await this.sellerRepo.update(id, { phone });
    const updatedSeller = await this.sellerRepo.findOne({ where: { id } });
    if (!updatedSeller) {
      throw new Error(`Seller with id ${id} not found`);
    }
    return updatedSeller;
  }

 async getSellerId(): Promise<Seller[]> {
  return this.sellerRepo.find({
    where: {
      fullName: IsNull(),
    },
    select: ['id'], 
  });
}
  async deleteSeller(id: string): Promise<{ message: string }> {
    await this.sellerRepo.delete(id);
    return { message: `Seller with id ${id} deleted` };
  }
}