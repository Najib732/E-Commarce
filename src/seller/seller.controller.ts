import {Body,Controller,Delete, Get,Param,Patch,Post} from '@nestjs/common';
import { SellerService } from './seller.service';
import { Seller } from './seller.sellerDTO';

@Controller('seller')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @Post()
  createUser(@Body() sellerData:Partial<Seller>): Promise<Seller> {
    return this.sellerService.createSeller(sellerData);
  }

  @Patch(':id/phone')
  updatePhone(
    @Param('id') id: string,
    @Body('phone') phone: number,
  ): Promise<Seller> {
    return this.sellerService.updatePhone(id, phone);
  }

  @Get('nullnames')
getSellerId(): Promise<Seller[]> {
  return this.sellerService.getSellerId();
}

  @Delete(':id')
  deleteUser(@Param('id') id: string): Promise<{ message: string }> {
    return this.sellerService.deleteSeller(id);
  }
}
