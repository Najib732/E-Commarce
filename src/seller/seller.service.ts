import { Injectable } from '@nestjs/common';
import { SellerDTO } from './seller.sellerDTO';



@Injectable()
export class SellerService {

  addSeller(sellerData: SellerDTO): SellerDTO {
    return sellerData; 
  }

 getAllSellers(): SellerDTO[] {
    // This should return an array of SellerDTOs; replace with actual data source as needed
    return [];
  }

  updateSeller(sellerData: SellerDTO): SellerDTO {
    return sellerData; 
  }

  deleteSeller(): { message: string } {
    return { message: 'deleted seller)' };
  }
}