import { Injectable } from "@nestjs/common";

@Injectable()
export class SellerService {
    
    getSeller(): string {
        return "All seller";
    }

 
    addSeller(seller: object): object {
        return seller;
    }

    deleteSeller(id: number): string {
        
        return "Seller with ID ${id} has been deleted";
    }

    editSeller(id: number, updatedData: object): string {
       
        return "Seller with ID ${id} has been edited";
    }
}
