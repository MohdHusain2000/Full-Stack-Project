// https://medium.com/@krishsurya1249/angular-reactive-forms-c3effd9be1f0
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideStore, Store } from '@ngrx/store';
import { signIn } from '../../states/auth/action/users.action';
import { authReducer } from '../../states/auth/reducer/users.reducer';

@Component({
  selector: 'app-login-reactive-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login-reactive-form.html',
  styleUrl: './login-reactive-form.css',
  standalone: true,
})
export class LoginReactiveForm {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', [Validators.required]]
    });
  }
  onSubmit() {
  if (this.loginForm.valid) {
    const { email, password } = this.loginForm.value;
    this.store.dispatch(signIn({ email, password }));
  }
}
}
