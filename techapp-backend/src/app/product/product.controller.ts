import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { JwtAuthGuard } from '../auth/auth.guard';
import { Public } from '../auth/auth.strategy';

@Controller('Products')
@UseGuards(JwtAuthGuard) 
export class ProductController {
  constructor(private productService: ProductService) {}

  @Public()
  @Get()
  async findAll() {
    return this.productService.getAll();
  }
}