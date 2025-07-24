import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductsService } from '../../../service/products.service';
import { failed, get, success } from '../action/app.action';

@Injectable()
export class ProductsEffects {
  loadProducts$
  
  constructor(private actions$: Actions, private productsService: ProductsService) {
  this.loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(get),
      mergeMap(() =>
        this.productsService.getAll().pipe(
          map(products => success({ products })),
          catchError(error => of(failed({ error })))
        )
      )
    )
  );

    }
  }
