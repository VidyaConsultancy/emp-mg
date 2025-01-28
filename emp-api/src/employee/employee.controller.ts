import { Controller, UseGuards } from '@nestjs/common';
import { CrudController, Crud } from '@dataui/crud';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeeCreateDto } from './dto/employee-create.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Crud({
  model: {
    type: Employee,
  },
  dto: {
    create: EmployeeCreateDto,
  },
})
@UseGuards(AuthGuard)
@Controller('employee')
export class EmployeeController implements CrudController<Employee> {
  constructor(public readonly service: EmployeeService) {}
}
