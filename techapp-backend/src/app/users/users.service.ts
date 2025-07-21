import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async getAll() {
    return this.userModel.find({}, { password: 0 });
  }

  async findById(id: string) {
    return this.userModel.findById(id, { password: 0 });
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({ email });
  }

  async create(email: string, hashedPassword: string) {
    const user = new this.userModel({email, password: hashedPassword });
    return user.save();
  }
}

