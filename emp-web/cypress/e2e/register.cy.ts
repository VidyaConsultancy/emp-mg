import { Config, HostRoutes } from '../support/config';
import { getRandomUser } from '../support/register.helper';

describe('Register', () => {
  beforeEach(() => {
    cy.visit(HostRoutes.register);
  });

  it('should register the user', () => {
    cy.intercept({
      url: `${Config.apiUrl}/auth/register`,
      method: 'POST',
    }).as('register');

    const { username, name, password } = getRandomUser();

    cy.get('input[name="name"]').type(name);
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[data-testid="registerBtn"]').click();

    cy.wait('@register').then((intercept) => {
      assert.equal(intercept.response?.statusCode, 201);
    });
  });

  it('should not allow user to register for invalid form', () => {
    cy.get('input[name="name"]').type('guest');
    cy.get('input[name="username"]').type('guest');
    cy.get('input[name="password"]').type('guest');
    cy.get('button[data-testid="registerBtn"]').should('have.attr', 'disabled');
  });
});
