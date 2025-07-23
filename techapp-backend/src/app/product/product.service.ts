import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProductService {
  constructor(private httpService:HttpService) {}

  async getAll(data: string): Promise<any> {
    const result = this.httpService.get('');
    const response = await firstValueFrom(result);
    return response.data;
  }
}

