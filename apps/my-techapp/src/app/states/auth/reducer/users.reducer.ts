// https://medium.com/@tranan.aptech/building-a-secure-login-system-with-angular-and-ngrx-a-step-by-step-guide-b1987cdd5626
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../action/users.action';
import { User } from '../../../entities/user';

export interface AuthState {
  token: string | null;
  user: User | null;
  isLoading: boolean;
  error: any;
}

export const initialState: AuthState = {
  token: null,
  user: null,
  isLoading: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.signIn, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(AuthActions.signInSuccess, (state, { token, user }) => ({
    ...state,
    token,
    user,
    isLoading: false,
  })),
  on(AuthActions.signInFailed, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(AuthActions.signOut, () => initialState)
);
