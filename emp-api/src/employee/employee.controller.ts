import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@dataui/crud';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@Crud({
  model: {
    type: Employee,
  },
})
@Controller('employee')
export class EmployeeController implements CrudController<Employee> {
  constructor(public readonly service: EmployeeService) {}
}
