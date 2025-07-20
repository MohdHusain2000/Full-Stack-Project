import { Route } from '@angular/router';
import { StandardUiHomepage } from './pages/standard-ui-hompage/standard-ui-homepage';
import { LoginReactiveForm } from './pages/login-reactive-form/login-reactive-form';

export const appRoutes: Route[] = [
    {
        path: '',
        component: StandardUiHomepage
    },
    {
        path: 'Sign In',
        component: LoginReactiveForm
    },
    // {
    //     path: 'Movies',
    //     component:
    // }
];

