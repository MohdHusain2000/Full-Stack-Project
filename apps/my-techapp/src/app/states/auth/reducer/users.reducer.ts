import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../action/users.action';
import { User } from '../../../entities/user';

export interface AuthState {
  token: string | null;
  user: User | null;
  loading: boolean;
  error: any;
}

export const initialState: AuthState = {
  token: null,
  user: null,
  loading: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.signIn, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AuthActions.signInSuccess, (state, { token, user }) => ({
    ...state,
    token,
    user,
    loading: false,
  })),
  on(AuthActions.signInFailed, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(AuthActions.signOut, () => initialState)
);
