import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';
import * as AuthActions from '../action/users.action';
import { UserService } from '../../../service/user.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  authenticate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signIn),
      debounceTime(500),
      switchMap(({ email, password }) =>
        this.userService.authenticate(email, password).pipe(
          map(user =>
            AuthActions.signInSuccess({ token: user.token, user })
          ),
          catchError(error =>
            of(AuthActions.signInFailed({ error }))
          )
        )
      )
    )
  );

  checkAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.checkAuth),
      switchMap(() =>
        this.userService.authenticatedUser().pipe(
          map(user => {
            if (user) {
              return AuthActions.checkAuthSuccess({ user });
            } else {
              return AuthActions.checkAuthFailure({ error: 'No user found' });
            }
          }),
          catchError(error => of(AuthActions.checkAuthFailure({ error })))
        )
      )
    )
  );

  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signUp),
      debounceTime(500),
      switchMap(({ user }) =>
        this.userService.create(user).pipe(
          map(createdUser => AuthActions.signUpSuccess({ user: createdUser })),
          catchError(error => of(AuthActions.signUpFailure({ error })))
        )
      )
    )
  );

  signOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signOut),
      switchMap(() =>
        this.userService.signout().pipe(
          map(() => AuthActions.signOutSuccess()),
          catchError(error => of(AuthActions.signOutFailure({ error })))
        )
      )
    )
  );
}
