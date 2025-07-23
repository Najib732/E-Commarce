import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { SellerService } from './seller.service';

@Controller("seller")
export class SellerController {
    constructor(private readonly sellerService: SellerService) {}

    @Get('all')
    getSeller() {
        return this.sellerService.getSeller();
    }

    @Post("addseller")
    addSeller(@Body() sellerdata: object): object {
        return this.sellerService.addSeller(sellerdata);
    }

  
    @Delete('delete/:id')
    deleteSeller(@Param('id') id: number): String {
        return this.sellerService.deleteSeller(id);
    }
    
    @Delete('deleteAll')
    declareAllSeller(@Param('id')id :number): String {
        return "seller deleted";
    }

    @Put('edit/:id')
    editSeller(@Param('id') id: number, @Body() updatedData: object): String {
        return this.sellerService.editSeller(id, updatedData);
    }
}
