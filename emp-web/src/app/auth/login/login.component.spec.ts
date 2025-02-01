import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeesComponent } from '../../employees/employees.component';
import { By } from '@angular/platform-browser';
import { AuthService } from '../auth.service';
import { from, Observable, of } from 'rxjs';
import { Location } from '@angular/common';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginComponent,
        RouterTestingModule.withRoutes([
          {
            path: 'employees',
            component: EmployeesComponent,
          },
        ]),
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimationsAsync(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init login form', () => {
    expect(component.form).toBeTruthy();
  });

  it('should login form and fields are in invalid state', () => {
    expect(component.form.invalid).toBeTrue();
    expect(component.form.get('username')?.invalid).toBeTrue();
    expect(component.form.get('password')?.invalid).toBeTrue();
  });

  it('should username have invalid value error', () => {
    const username = component.form.get('username');
    username?.patchValue('abc@xyz.');
    expect(username?.errors?.['email']).toBeTrue();
  });

  it('should username have invalid value error', () => {
    const username = component.form.get('username');
    username?.patchValue('abc@xyz.com');
    expect(username?.valid).toBeTrue();
  });

  it('should form be invalid login btn be disabled', () => {
    const loginBtn = fixture.debugElement.query(
      By.css("[data-testid='loginBtn']")
    );
    expect(loginBtn.attributes['disabled']).toBeDefined();
  });

  it('should return false when form is invalid', () => {
    expect(component.handleLogin()).toBeFalse();
  });

  it('should call authService login method and return true', fakeAsync(() => {
    const mockLogin = spyOn(authService, 'login').and.returnValue(
      new Observable((sub) => {
        sub.next({
          token: 'value',
          user: {
            id: 1,
            name: 'User',
            username: 'john.doe@mailinator.com',
            password: '1330',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        });
      })
    );
    const location = TestBed.inject(Location);
    component.form.get('username')?.patchValue('john.doe@mailinator.com');
    component.form.get('password')?.patchValue('jd#1234');

    component.handleLogin();

    expect(mockLogin).toHaveBeenCalled();
    tick(100);
    expect(location.path()).toContain('/employees');
  }));
});
