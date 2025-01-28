import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class AuthDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsEmail()
  username: string;

  @ApiProperty({ required: true })
  @IsString()
  password: string;
}

export class RegisterDto extends AuthDto {
  @ApiProperty({ required: true })
  @IsString()
  name: string;
}
