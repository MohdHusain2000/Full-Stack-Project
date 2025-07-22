import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../reducer/app.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthLoading = createSelector(
  selectAuthState,
  (state) => state.loading
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state) => state.error
);

export const selectAuthUser = createSelector(
  selectAuthState,
  (state) => state.user
);

export const selectAuthToken = createSelector(
  selectAuthState,
  (state) => state.token
);
