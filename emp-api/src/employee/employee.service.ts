import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService extends TypeOrmCrudService<Employee> {
  constructor(@InjectRepository(Employee) repo: Repository<Employee>) {
    super(repo);
  }
}
