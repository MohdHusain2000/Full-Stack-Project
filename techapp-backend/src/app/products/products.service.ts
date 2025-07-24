import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Product } from './product.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
 constructor(@InjectModel('Product') private productModel: Model<Product>) {}
  
  async getAll(): Promise<Product[]> {
  const { data } = await axios.get('https://dummyjson.com/products');
  const apiProducts: Product[] = [];

  for (const item of data.products) {
    const existing = await this.productModel.findOne({ title: item.title });
    if (!existing) {
      const product = new this.productModel({
        title: item.title,
        thumbnail: item.thumbnail,
        price: item.price,
      });
      const saved = await product.save();
      apiProducts.push(saved);
    }
  }
  return this.productModel.find();
}
}


