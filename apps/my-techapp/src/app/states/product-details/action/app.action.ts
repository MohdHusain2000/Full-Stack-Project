import { createAction, props } from '@ngrx/store';
import { Product } from '../../../entities/product';

export const get = createAction('[Product] Get All Products');
export const success = createAction('[Product] Get Product Success', props<{ products: Product[] }>());
export const failed = createAction('[Product] Get Product Failed', props<{ error: any }>());
