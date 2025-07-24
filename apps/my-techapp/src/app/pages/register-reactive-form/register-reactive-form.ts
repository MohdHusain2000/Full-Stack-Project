// https://medium.com/@krishsurya1249/angular-reactive-forms-c3effd9be1f0
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { signUp } from '../../states/auth/action/users.action';
import { UserService } from '../../service/user.service';
import { Router, RouterLink } from '@angular/router';
import { UserRegister } from '../../entities/user-sign-up';

@Component({
  selector: 'app-Register-reactive-form',
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './register-reactive-form.html',
  styleUrl: './register-reactive-form.css',
  standalone: true,
})

export class RegisterReactiveForm {
 
  constructor(private fb: FormBuilder, private userService: UserService,private router: Router, private store:Store) {}

  public signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  public onSubmit() {
    if (this.signupForm.valid) {
      this.store.dispatch(signUp({ user: this.signupForm.value as UserRegister}));
    }
  }   
}
