import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product, ProductSchema } from './product.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';

@Module({
  providers: [ProductService],
  exports: [ProductService],
  controllers: [ProductController],
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
})
export class ProductModule {}