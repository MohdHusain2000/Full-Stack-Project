import { Route } from '@angular/router';
import { StandardUiHomepage } from './pages/standard-ui-hompage/standard-ui-homepage';
import { LoginReactiveForm } from './pages/login-reactive-form/login-reactive-form';
import { RegisterReactiveForm } from './pages/register-reactive-form/register-reactive-form';
import { ProductDetailsPage } from './pages/product-details-page/product-details-page';
import { UsersRegisterTable } from './pages/users-register-table/users-register-table';

export const appRoutes: Route[] = [
    {
        path: '',
        component: StandardUiHomepage
    },
    {
        path: 'signIn',
        component: LoginReactiveForm
    },
    {
        path: 'signUp',
        component: RegisterReactiveForm
    },
    {
        path: 'product',
        component: ProductDetailsPage 
    },
    {
        path: 'users',
        component: UsersRegisterTable 
    }
];

