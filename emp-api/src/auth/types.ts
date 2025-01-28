import { User } from './entities/user.entity';
import { Request } from 'express';

export interface NRequest extends Request {
  user: User;
}

export interface TokenPayload {
  sub: number;
}
