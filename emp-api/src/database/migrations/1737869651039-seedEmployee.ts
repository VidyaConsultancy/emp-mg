import { MigrationInterface, QueryRunner } from 'typeorm';

export const EMPLOYEES = [
  {
    name: 'John Doe',
    age: 30,
    address: '123 Main St, City, State, 12345',
    salary: 50000,
    position: 'Software Engineer',
  },
  {
    name: 'Jane Doe',
    age: 25,
    address: '456 Elm St, City, State, 12345',
    salary: 60000,
    position: 'Senior Software Engineer',
  },
  {
    name: 'Alex Smith',
    age: 35,
    address: '789 Oak St, City, State, 12345',
    salary: 70000,
    position: 'Software Architect',
  },
  {
    name: 'Sara Smith',
    age: 40,
    address: '101 Pine St, City, State, 12345',
    salary: 80000,
    position: 'Senior Software Architect',
  },
  {
    name: 'Michael Johnson',
    age: 45,
    address: '112 Cedar St, City, State, 12345',
    salary: 90000,
    position: 'Engineering Manager',
  },
];

export class SeedEmployee1737869651039 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    for (const emp of EMPLOYEES) {
      await queryRunner.query(
        `INSERT INTO employee (name, age, address, salary, position) VALUES ("${emp.name}", ${emp.age}, "${emp.address}", ${emp.salary}, "${emp.position}")`,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`TRUNCATE TABLE employee`);
  }
}
