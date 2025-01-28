import connectionConfig from './utils/db-connection';

import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { Employee } from '../employee/employee.entity';
import { User } from '../auth/entities/user.entity';
import { InitEmployee1737487510766 } from './migrations/1737487510766-initEmployee';
import { SeedEmployee1737869651039 } from './migrations/1737869651039-seedEmployee';
import { AddUserTable1738035228439 } from './migrations/1738035228439-addUserTable';
import { AddNameColumn1738038245859 } from './migrations/1738038245859-addNameColumn';

const isProduction = process.env.NODE_ENV === 'production';

const entities = [Employee, User];
const migrations = [
  InitEmployee1737487510766,
  SeedEmployee1737869651039,
  AddUserTable1738035228439,
  AddNameColumn1738038245859,
];

const configggg: DataSourceOptions = {
  type: 'mysql',
  namingStrategy: new SnakeNamingStrategy(),
  ...connectionConfig,
  logging: !isProduction,
  migrations,
  entities,
};

const dataSource = new DataSource(configggg);

export default dataSource;
