import {
  Component,
  OnInit,
  OnDestroy,
  inject,
  ViewChild,
  HostBinding,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {
  trigger,
  transition,
  animate,
  style,
  query,
  stagger,
} from '@angular/animations';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MatPaginatorModule,
  MatPaginator,
  PageEvent,
} from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { Employee } from '../models/employee.class';
import { EmployeeService } from '../employee.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  imports: [
    MatTableModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query(
          '.mat-mdc-row',
          [
            style({ opacity: 0, transform: 'translateY(-100px)' }),
            stagger(-30, [
              animate(
                '800ms cubic-bezier(0.35, 0, 0.25, 1)',
                style({ opacity: 1, transform: 'none' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(
          ':enter',
          [
            style({ opacity: 0, width: '0px' }),
            stagger(50, [
              animate('300ms ease-out', style({ opacity: 1, width: '*' })),
            ]),
          ],
          { optional: true }
        ),
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @HostBinding('@pageAnimations')
  public animatePage = true;

  pageSizes = [5, 10, 20, 50];
  pageSize = 5;
  total = 0;
  pageNo = 0;

  dataSource: MatTableDataSource<Employee> = new MatTableDataSource();
  public title = 'employees';
  public displayedColumns: string[] = [
    'id',
    'name',
    'age',
    'address',
    'salary',
    'position',
    'actions',
  ];
  public empFilter = new FormControl('');
  private router: Router;
  private employeeService: EmployeeService;
  sub!: Subscription;
  employees!: Employee[];

  constructor() {
    this.router = inject(Router);
    this.employeeService = inject(EmployeeService);
    this.paginator = new MatPaginator();
    this.sort = new MatSort();
  }

  ngOnInit(): void {
    // gets called after constructor and ngOnChanges.
    // only once per life cycle of the component.
    // this.sub = this.employeeService.getEmployees().subscribe((value) => {
    //   // this.employees = value;
    // });
    this.getEmployees();
    this.empFilter.valueChanges.subscribe((value) => {
      this.dataSource.filter = value || '';
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data, filter) => {
      if (filter.startsWith('#')) {
        const id = data.id === parseInt(filter.replace('#', ''), 10);
        return id;
      }
      const name = data.name.toLowerCase().includes(filter.toLocaleLowerCase());
      const position = data.position
        .toLowerCase()
        .includes(filter.toLocaleLowerCase());
      return name || position;
    };
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
    // gets called right before the component is being destroyed.
    // only once per life cycle of the component.
  }

  getEmployees() {
    this.employeeService
      .getEmployees({
        limit: this.pageSize,
        page: this.pageNo + 1,
      })
      .subscribe((res) => {
        this.employees = res.data.map(
          (emp) =>
            new Employee(
              emp.id,
              emp.name,
              emp.age,
              emp.salary,
              emp.address,
              emp.position
            )
        );
        this.total = res.total;
        this.initDatatable(this.employees);
      });
  }

  initDatatable(employees: Employee[]) {
    this.dataSource = new MatTableDataSource(employees);
    this.dataSource.sort = this.sort;
  }

  getRandomNumber() {
    return Math.random();
  }

  editEmployee(employeeId: number) {}

  deleteEmployee(employeeId: number) {}

  navigateToCreate() {
    this.router.navigate(['/employees/create']);
  }

  onPageChange(data: PageEvent) {
    this.pageNo = data.pageIndex;
    this.pageSize = data.pageSize;
    this.getEmployees();
  }
}
