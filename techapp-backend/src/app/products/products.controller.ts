import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Public } from '../auth/auth.strategy';
import { Product } from './product.entity';
import { JwtAuthGuard } from '../auth/auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllProducts(): Promise<Product[]> {
  return this.productService.getAll();
  }
}