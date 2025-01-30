export class BaseEmployee {
  name!: string;
  age!: number;
  address!: string;
  salary!: number;
  position!: string;
}

export class CreateEmployee extends BaseEmployee {}

export class Employee {
  constructor(
    public id: number,
    public name: string,
    public age: number,
    public salary: number,
    public address: string,
    public position: string
  ) {}
}
