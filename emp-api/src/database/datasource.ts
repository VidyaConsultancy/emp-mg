import connectionConfig from './utils/db-connection';

import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { Employee } from '../employee/employee.entity';
import { InitEmployee1737487510766 } from './migrations/1737487510766-initEmployee';
import { SeedEmployee1737869651039 } from './migrations/1737869651039-seedEmployee';

const isProduction = process.env.NODE_ENV === 'production';

const entities = [Employee];
const migrations = [InitEmployee1737487510766, SeedEmployee1737869651039];

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
