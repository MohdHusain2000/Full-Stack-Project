import { createReducer, on } from '@ngrx/store';
import { get, success, failed } from '../action/app.action';
import { Product } from '../../../entities/product';

export interface ProductState {
  items: Product[];
  loading: boolean;
  error: any;
}

export const initialProductState: ProductState = {
  items: [],
  loading: false,
  error: null
};

export const productReducer = createReducer(
  initialProductState,

  on(get, (state) => ({
    ...state,
    loading: true
  })),

  on(success, (state, { product }) => ({
    ...state,
    loading: false,
    items: product
  })),

  on(failed, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
);
