import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Product } from '../../../entities/product';

export const selectAppState = createFeatureSelector<AppState>('favorite');

// export const selectProducts = createSelector(
//   selectAppState,
//   (state: AppState) => state.products
// );

// export const selectProductById = createSelector(
//   selectProducts,
//   (products: Product[], props: { productId: number }) =>
//     products.find(product => product.id === props.productId)
// );