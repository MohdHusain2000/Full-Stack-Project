import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { signOut } from '../../states/auth/action/users.action';
import { selectAuthUser } from '../../states/auth/selector/users.selector';
import { Observable } from 'rxjs';
import { User } from '../../entities/user';

@Component({
  selector: 'app-standard-ui-homepage',
  imports: [CommonModule, RouterLink],
  templateUrl: './standard-ui-homepage.html',
  styleUrl: './standard-ui-homepage.css',
})
export class StandardUiHomepage {
   
  user!: Observable<User | null>;

  constructor(private store: Store) {
  this.user = this.store.select(selectAuthUser);
  }
  
  logout() {
    this.store.dispatch(signOut()); 
  }
}
