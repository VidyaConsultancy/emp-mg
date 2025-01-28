import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('login')
  public async login(@Body() dto: AuthDto) {
    return this.service.login(dto);
  }

  @Post('register')
  public async register(@Body() dto: AuthDto) {
    return this.service.register(dto);
  }
}
