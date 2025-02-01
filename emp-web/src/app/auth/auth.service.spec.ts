import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  provideHttpClientTesting,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { Auth } from './models/auth';
import { User } from './models/user';
import { environment } from '../../environments/environment';

describe('AuthService', () => {
  let service: AuthService;
  let testController: HttpTestingController;
  let baseUrl = environment.apiUrl;
  let loginData: Auth;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(AuthService);
    testController = TestBed.inject(HttpTestingController);
    loginData = { username: 'john.doe@mailinator.com', password: 'jd!1234' };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a post request to login endpoint with user creds', () => {
    let result: { token: string; user: User };
    service.login(loginData).subscribe((t) => {
      result = t;
    });

    const mockReq = testController.expectOne({
      method: 'POST',
      url: baseUrl + '/auth/login',
    });

    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    testController.verify();
  });
});
