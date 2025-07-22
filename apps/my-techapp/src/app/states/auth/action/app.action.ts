import { createAction, props } from '@ngrx/store';

export const signIn = createAction('[Auth] Sign In',props<{ email: string; password: string }>());
export const signInSuccess = createAction('[Auth] Sign In Success',props<{ token: string; user: any }>());
export const signInFailed = createAction('[Auth] Sign In Failure',props<{ error: any }>());
export const signOut = createAction('[Auth] Sign Out');
