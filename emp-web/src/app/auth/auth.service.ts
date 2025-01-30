import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Auth } from './models/auth';
import { LoginResponse } from './models/login-response';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/auth`;
  private user$!: BehaviorSubject<User | null>;
  private token$!: BehaviorSubject<string | null>;

  constructor() {
    const user = localStorage.getItem('me');
    const accessToken = localStorage.getItem('accessToken');
    this.user$ = new BehaviorSubject(user ? JSON.parse(user) : null);
    this.token$ = new BehaviorSubject(accessToken ?? null);
  }

  public login(data: Auth) {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, data).pipe(
      tap((res) => {
        this.setToken(res.token);
        this.setUser(res.user);
      })
    );
  }

  public register(data: Auth) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  public logout() {
    this.token$.next(null);
    this.user$.next(null);
    localStorage.clear();
    sessionStorage.clear();
  }

  public setUser(user: User) {
    localStorage.setItem('me', JSON.stringify(user));
    this.user$.next(user);
  }

  public setToken(token: string) {
    localStorage.setItem('accessToken', token);
    this.token$.next(token);
  }

  public getUserName() {
    return this.user$.asObservable();
  }

  public getToken() {
    return this.token$.asObservable();
  }
}
