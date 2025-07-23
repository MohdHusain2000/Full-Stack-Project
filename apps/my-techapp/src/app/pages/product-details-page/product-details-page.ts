import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../entities/product';
import { selectProducts } from '../../states/product-details/selector/app.selector';
import { get } from '../../states/product-details/action/app.action';

@Component({
  selector: 'app-product-details-page',
  imports: [CommonModule,RouterLink],
  templateUrl: './product-details-page.html',
  styleUrl: './product-details-page.css',
})
export class ProductDetailsPage implements OnInit {

  products: Observable<Product[]>;

  constructor(private store: Store) {
    this.products = this.store.select(selectProducts);
  }

    ngOnInit() {
    this.store.dispatch(get());
  }
}


