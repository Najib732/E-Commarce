import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './Admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './Admin/Admin.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'AIUB@0540021830',
      database: 'ecommarce',
      entities: [Admin],
      synchronize: true,
    }),
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
