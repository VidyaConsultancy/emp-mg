console.log(Cypress.env());

export const Config = {
  apiUrl: Cypress.env('API_URL'),
  host: Cypress.env('HOST'),
  username: Cypress.env('USERNAME'),
  password: Cypress.env('PASSWORD'),
  name: Cypress.env('USER_NAME'),
};

export const HostRoutes = {
  login: `/auth/login`,
  register: `/auth/register`,
  employees: `/employees`,
  employeesList: `/employees/list`,
  employeesCreate: `/employees/create`,
};
