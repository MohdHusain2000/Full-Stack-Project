import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom, Observable } from 'rxjs';
import { AxiosError, AxiosResponse } from 'axios';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  private readonly logger = new Logger(ProductService.name);
  constructor(private httpService:HttpService) {}

  async getAll(): Promise<Product[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<Product[]>('http://localhost:3000/').pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
}

