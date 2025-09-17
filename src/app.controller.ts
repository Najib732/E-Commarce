import { Controller, Get, Param } from '@nestjs/common';
import { AppService, ijuService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly AppService: AppService) {}

  @Get()
  getHello(): string {
    return this.AppService.getHello();
  }


@Get('photos')
getPhoto(): string {
  return this.AppService.getPhoto();
}

@Get('photo/:id')
getPhotobyid(@Param('id')photoid:number): string {
  return this.AppService.getPhotobyid(photoid);
}
}
