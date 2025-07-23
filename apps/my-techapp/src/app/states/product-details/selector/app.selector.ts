import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from '../reducer/app.reducer';
import { Product } from '../../../entities/product';

export const selectProductState = createFeatureSelector<ProductState>('products');

export const selectProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.items
);

export const selectProductById = createSelector(
  selectProducts,
  (products: Product[], props: { productId: string }) =>
    products.find(product => product._id === props.productId)
);
