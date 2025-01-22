export class Employee {
  id!: number;
  name!: string;
  age!: number;
  address!: string;
  salary!: number;
  position!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

export const EMPLOYEES: Employee[] = [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    address: '123 Main St, City, State, 12345',
    salary: 50000,
    position: 'Software Engineer',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: 'Jane Doe',
    age: 25,
    address: '456 Elm St, City, State, 12345',
    salary: 60000,
    position: 'Senior Software Engineer',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: 'Alex Smith',
    age: 35,
    address: '789 Oak St, City, State, 12345',
    salary: 70000,
    position: 'Software Architect',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    name: 'Sara Smith',
    age: 40,
    address: '101 Pine St, City, State, 12345',
    salary: 80000,
    position: 'Senior Software Architect',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    name: 'Michael Johnson',
    age: 45,
    address: '112 Cedar St, City, State, 12345',
    salary: 90000,
    position: 'Engineering Manager',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
