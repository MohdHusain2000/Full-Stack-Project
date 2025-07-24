import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { authReducer } from './app/states/auth/reducer/users.reducer';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { UserEffects } from './app/states/auth/effect/users.effect';
import { provideEffects } from '@ngrx/effects';
import { productReducer } from './app/states/product-details/reducer/app.reducer';
import { ProductsEffects } from './app/states/product-details/effect/app.effect';
import { LoggingInterceptor } from './app/interceptors/logging.interceptor';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi:true},
    provideStore({
      auth: authReducer,
      products: productReducer
    }),
    provideEffects([UserEffects, ProductsEffects]),
    ...appConfig.providers
  ]
}).catch(err => console.error(err));
