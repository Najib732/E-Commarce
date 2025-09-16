import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Its iju ijaj';
  }
   getPhoto(): string {
    return 'All photos';
  }
     getPhotobyid(photoid : number): string {
    return 'photo id is ' + photoid;
  }

}
@Injectable()
export class ijuService {
  getHello(): string {
    return 'Its Kazi Mahfuzur Rahman ijaj';
  }
}
