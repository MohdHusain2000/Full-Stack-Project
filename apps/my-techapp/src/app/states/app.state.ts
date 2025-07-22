// https://medium.com/@igorm573/state-management-with-ngrx-in-angular-66ddc61cdf14
// https://brianflove.com/posts/2017-04-10-angular-reactive-authentication/
import { AuthState } from "./auth/reducer/users.reducer";
import { ProductState } from "./product-details/reducer/app.reducer";

export interface AppState {
    products:ProductState;
    auth:AuthState;
}