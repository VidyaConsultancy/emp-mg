import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesComponent } from './employees.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { mockNavs } from './employee.mocks';
import { By } from '@angular/platform-browser';

describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesComponent, RouterTestingModule],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass navs to the app-layout component', () => {
    component.navs = mockNavs;
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('[ng-reflect-navs]'))
    ).toBeDefined();
  });

  it('should invoke onLogout when handleLogout event happens', () => {
    const mockLogoutFn = spyOn(component, 'onLogout');
    const appLayout = fixture.debugElement.query(By.css('app-layout'));
    appLayout.triggerEventHandler('handleLogout', {});

    expect(mockLogoutFn).toHaveBeenCalled();
    expect(mockLogoutFn).toHaveBeenCalledTimes(1);
  });
});
