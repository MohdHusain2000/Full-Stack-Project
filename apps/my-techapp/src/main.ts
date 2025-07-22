import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { authReducer } from './app/states/auth/reducer/users.reducer';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    provideStore({ auth: authReducer }),
    provideHttpClient(),
    ...appConfig.providers
  ]
}).catch(err => console.error(err));
