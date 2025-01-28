import { IsEmail, IsString } from 'class-validator';

export class AuthDto {
  @IsString()
  @IsEmail()
  username: string;

  @IsString()
  password: string;
}

export class RegisterDto extends AuthDto {
  @IsString()
  name: string;
}
