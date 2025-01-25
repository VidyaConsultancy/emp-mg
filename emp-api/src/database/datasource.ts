import connectionConfig from './utils/db-connection';

import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { Employee } from '../employee/employee.entity';
import { InitEmployee1737487510766 } from './migrations/1737487510766-initEmployee';

const isProduction = process.env.NODE_ENV === 'production';

const entities = [Employee];
const migrations = [InitEmployee1737487510766];

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
