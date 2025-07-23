// https://docs.nestjs.com/techniques/http-module
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.entity';


@Module({
  providers: [ProductsService],
  exports: [ProductsService],
  controllers: [ProductsController],
  imports: [HttpModule,MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])]

  })
export class ProductsModule {}