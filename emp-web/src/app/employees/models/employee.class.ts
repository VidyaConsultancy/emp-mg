export class BaseEmployee {
  name!: string;
  age!: number;
  address!: string;
  salary!: number;
  position!: string;
}

export class CreateEmployee extends BaseEmployee {}

export class Employee extends BaseEmployee {
  id!: number;
  createdAt!: Date;
  updatedAt!: Date;
}
