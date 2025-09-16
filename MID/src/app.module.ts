import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './Admin/admin.module';
import { UserModule } from './User/user.module';
import { SellerModule } from './seller/seller.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './Admin/Admin.entity';
import { User } from './User/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'ecommarce',
      entities: [Admin,User],
      synchronize: true,
    }),
    AdminModule,
    UserModule,
    SellerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
