import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EmployeeCreateDto {
  @IsString()
  @ApiProperty({ required: true })
  name: string;

  @IsNumber()
  @ApiProperty({ required: true, minimum: 18 })
  age: number;

  @IsNumber()
  @ApiProperty({ required: true, minimum: 10000 })
  salary: number;

  @IsString()
  @ApiProperty({ required: true })
  address: string;

  @IsString()
  @ApiProperty({ required: true })
  position: string;
}
