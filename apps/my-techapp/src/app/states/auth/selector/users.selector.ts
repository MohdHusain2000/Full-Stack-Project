// https://medium.com/@tranan.aptech/building-a-secure-login-system-with-angular-and-ngrx-a-step-by-step-guide-b1987cdd5626
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../reducer/users.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthLoading = createSelector(
  selectAuthState,
  (state) => state.isLoading
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
