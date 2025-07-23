import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { JwtAuthGuard } from '../auth/auth.guard';
import { Public } from '../auth/auth.strategy';

@Controller('products')
@UseGuards(JwtAuthGuard) 
export class ProductController {
  constructor(private productService: ProductService) {}

  @Public()
  @Get()
  async getAllProducts() {
    return this.productService.getAll();
  }
}