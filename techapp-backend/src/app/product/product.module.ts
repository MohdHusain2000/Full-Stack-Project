// https://docs.nestjs.com/techniques/http-module
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { HttpModule } from '@nestjs/axios';


@Module({
  providers: [ProductService],
  exports: [ProductService],
  controllers: [ProductController],
  imports: [HttpModule]

  })
export class ProductModule {}