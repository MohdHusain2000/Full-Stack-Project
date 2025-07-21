import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private userModel: Model<Product>) {}

  async getAll() {
    return this.userModel.find({});
  }
}

