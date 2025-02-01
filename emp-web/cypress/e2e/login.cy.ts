import { Config, HostRoutes } from '../support/config';

describe('Login', () => {
  beforeEach(() => {
    cy.visit(HostRoutes.login);
  });

  it('should login the user', () => {
    cy.intercept({
      url: `${Config.apiUrl}/auth/login`,
      method: 'POST',
    }).as('login');

    cy.get('input[name="username"]').type(Config.username);
    cy.get('input[name="password"]').type(Config.password);
    cy.get('button[data-testid="loginBtn"]').click();

    cy.wait('@login').should(({ response }) => {
      localStorage.setItem('accessToken', response?.body.token);
    });
    cy.location('pathname').should('eq', '/employees');
  });

  it('should not allow user to login for invalid form', () => {
    cy.get('input[name="username"]').type('guest');
    cy.get('input[name="password"]').type('incorrect_password');
    cy.get('button[data-testid="loginBtn"]').should('have.attr', 'disabled');
  });
});
