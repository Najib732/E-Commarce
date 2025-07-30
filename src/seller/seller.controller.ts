import { Body, Controller, Delete, Get, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';

import { SellerService } from './seller.service';
import { SellerDTO } from './seller.sellerDTO';

@Controller('seller')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  addSeller(@Body() sellerData: SellerDTO): SellerDTO {
   //console.log(sellerData);
    return this.sellerService.addSeller(sellerData);
  }

  @Get()
  getAllSellers() {
    
    return this.sellerService.getAllSellers();
  }

  @Put()
  @UsePipes(new ValidationPipe())
  updateSeller(@Body() sellerData: SellerDTO): SellerDTO {
    //console.log(sellerData);
    return this.sellerService.updateSeller(sellerData);
  }

  @Delete()
  deleteSeller(): { message: string } {
    
    return this.sellerService.deleteSeller();
  }
}