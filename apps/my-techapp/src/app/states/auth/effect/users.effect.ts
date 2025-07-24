// https://medium.com/@tranan.aptech/building-a-secure-login-system-with-angular-and-ngrx-a-step-by-step-guide-b1987cdd5626
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as AuthActions from '../action/users.action';
import { UserService } from '../../../service/user.service';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  authenticate$;
  signInSuccess$ 
  checkAuth$;
  signUp$;
  signUpSuccess$;
  signOut$;
  signOutSuccess$;

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router
  ) {
    this.authenticate$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AuthActions.signIn),
        switchMap(({ email, password }) =>
          this.userService.authenticate(email, password).pipe(
            map(user =>
              AuthActions.signInSuccess({ token: user.token, user })),
            catchError(error =>
              of(AuthActions.signInFailed({ error }))
            )
          )
        )
      )
    );

  this.signInSuccess$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AuthActions.signInSuccess),
    tap(() => this.router.navigate(['/']))
  ),
  { dispatch: false }
);

    this.checkAuth$ = createEffect(() =>
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
            }),catchError(error => of(AuthActions.checkAuthFailure({ error })))
          )
        )
      )
    );

    this.signUp$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AuthActions.signUp),
        switchMap(({ user }) =>
          this.userService.create(user).pipe(
            map(createdUser => AuthActions.signUpSuccess({ user: createdUser })),
            catchError(error => of(AuthActions.signUpFailure({ error })))
          )
        )
      )
    );

    this.signUpSuccess$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AuthActions.signUpSuccess),
        tap(() => this.router.navigate(['/signIn']))
      ), { dispatch: false }
    );

    this.signOut$ = createEffect(() =>
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

    this.signOutSuccess$ = createEffect(() =>
      this.actions$.pipe(
      ofType(AuthActions.signOutSuccess),
      tap(() => this.router.navigate(['/signIn']))
  ),
    { dispatch: false }
  );

  }
}
