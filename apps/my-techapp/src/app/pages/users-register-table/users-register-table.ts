import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RegisterUser } from '../../entities/register-user';

@Component({
  selector: 'app-users-register-table',
  templateUrl: './users-register-table.html',
  styleUrl: './users-register-table.css',
  imports: [CommonModule,RouterLink],

})
export class UsersRegisterTable implements OnInit {
  users: RegisterUser[] = [];
  loading = false;
  error = '';

  constructor(private usersService: UserService) {}

  ngOnInit() {
    this.loading = true;
    this.usersService.getAll().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load users';
        this.loading = false;
        console.error(err);
      },
    });
  }
}
