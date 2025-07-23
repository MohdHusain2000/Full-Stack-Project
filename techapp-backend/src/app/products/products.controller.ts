import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Public } from '../auth/auth.strategy';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Public()
  @Get()
  async getAllProducts(): Promise<Product[]> {
  return this.productService.getAll();
  }
}