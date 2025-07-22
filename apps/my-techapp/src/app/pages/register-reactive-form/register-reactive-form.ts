// https://medium.com/@krishsurya1249/angular-reactive-forms-c3effd9be1f0
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { provideStore, Store } from '@ngrx/store';
import { signIn } from '../../states/auth/action/users.action';
import { authReducer } from '../../states/auth/reducer/users.reducer';
import { UserService } from '../../service/user.service';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../entities/user';

@Component({
  selector: 'app-Register-reactive-form',
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './register-reactive-form.html',
  styleUrl: './register-reactive-form.css',
  standalone: true,
})

export class RegisterReactiveForm {
 
  constructor(private fb: FormBuilder, private userService: UserService,private router: Router) {}

  public signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  public onSubmit() {
    if (this.signupForm.valid) {
      this.userService.create(this.signupForm.value as User)
        .subscribe({
          next: (data: any) => {
            this.router.navigate(['/login']);
          },
          error: (err) => console.log(err)
        });
    }
  }
}
