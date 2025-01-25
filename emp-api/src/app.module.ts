import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';

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
        console.log(cfg.get('DB_USER'));
        return {
          type: 'mysql',
          host: cfg.get('DB_HOST'),
          port: cfg.get('DB_PORT'),
          username: cfg.get('DB_USER'),
          password: cfg.get('DB_PASS'),
          database: cfg.get('DB_NAME'),
          autoLoadEntities: true,
          synchronize: false,
          nameingStrategy: new SnakeNamingStrategy(),
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
