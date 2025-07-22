import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../entities/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api';
  private currentUser: User | null = null;
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  authenticate(email: string, password: string): Observable<User> {
    return this.http.post<{ user: User; token: string }>(
      `${this.apiUrl}/auth/signin`,
      { email, password }
    ).pipe(
      tap(response => {
        this.currentUser = response.user;
        this.token = response.token;
        localStorage.setItem('auth_token', this.token);
        localStorage.setItem('auth_user', JSON.stringify(this.currentUser));
      }),
      map(response => ({
        ...response.user,
        token: response.token,
      }))
    );
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/auth/signup`, user);
  }

  signout(): Observable<void> {
    this.currentUser = null;
    this.token = null;
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    return of(undefined);
  }

  authenticatedUser(): Observable<User | null> {
    if (this.currentUser) {
      return of(this.currentUser);
    } else {
      const storedUser = localStorage.getItem('auth_user');
      if (storedUser) {
        this.currentUser = JSON.parse(storedUser);
        return of(this.currentUser);
      }
      return of(null);
    }
  }
}
