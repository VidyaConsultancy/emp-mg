import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    EmployeeModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => {
        return {
          type: 'mysql',
          host: cfg.get('DB_HOST'),
          port: cfg.get('DB_PORT'),
          username: cfg.get('DB_USER'),
          password: cfg.get('DB_PASS'),
          database: cfg.get('DB_NAME'),
          synchronize: false,
          namingStrategy: new SnakeNamingStrategy(),
          autoLoadEntities: true,
          logging: false,
        };
      },
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
