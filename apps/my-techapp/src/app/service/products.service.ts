import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../entities/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

   constructor(private http: HttpClient) {}

   private baseUrl = 'http://localhost:3000/api'; 

   getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }
}

