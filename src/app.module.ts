import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './Admin/admin.module';
import { UserModule } from './User/user.module';
import { SellerModule } from './seller/seller.module';

@Module({
  imports: [AdminModule, UserModule,SellerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
