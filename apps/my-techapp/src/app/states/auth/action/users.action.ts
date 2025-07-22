import { createAction, props } from '@ngrx/store';
import { User } from '../../../entities/user';

export const signIn = createAction('[Auth] Sign In',props<{ email: string; password: string }>());
export const signInSuccess = createAction('[Auth] Sign In Success',props<{ token: string; user: any }>());
export const signInFailed = createAction('[Auth] Sign In Failure',props<{ error: any }>());

export const signUp = createAction('[Auth] Sign Up',props<{ user: User }>());
export const signUpSuccess = createAction('[Auth] Sign Up Success',props<{ user: User }>());
export const signUpFailure = createAction('[Auth] Sign Up Failure',props<{ error: any }>());

export const signOut = createAction('[Auth] Sign Out');
export const signOutSuccess = createAction('[Auth] Sign Out Success');
export const signOutFailure = createAction('[Auth] Sign Out Failure',props<{ error: any }>());

export const checkAuth = createAction('[Auth] Check Auth');
export const checkAuthSuccess = createAction('[Auth] Check Auth Success',props<{ user: User }>());
export const checkAuthFailure = createAction('[Auth] Check Auth Failure',props<{ error: any }>());