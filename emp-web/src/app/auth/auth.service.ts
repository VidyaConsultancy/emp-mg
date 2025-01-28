import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Auth } from './models/auth';
import { LoginResponse } from './models/login-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/auth`;

  public login(data: Auth) {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, data);
  }

  public register(data: Auth) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  public logout() {
    localStorage.clear();
    sessionStorage.clear();
  }
}
