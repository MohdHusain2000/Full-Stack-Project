import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { authReducer } from './app/states/auth/reducer/users.reducer';
import { provideHttpClient } from '@angular/common/http';
import { UserEffects } from './app/states/auth/effect/users.effect';
import { provideEffects } from '@ngrx/effects';
import { productReducer } from './app/states/product-details/reducer/app.reducer';

bootstrapApplication(App, {
  providers: [
    provideStore({
      auth: authReducer,
      products: productReducer
    }),
    provideEffects([UserEffects]),
    provideHttpClient(),
    ...appConfig.providers
  ]
}).catch(err => console.error(err));
