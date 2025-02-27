import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { AuthDto, RegisterDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { createHash, verifyHash } from './utils';
import { TokenPayload } from './types';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  public async ensureUser(userId: number) {
    const user = await this.repo.findOne({ where: { id: userId } });

    if (!user) {
      throw new Error(`User does not exist with id ${userId}`);
    }

    return user;
  }

  public async login(dto: AuthDto) {
    const user = await this.repo.findOne({ where: { username: dto.username } });

    if (!user) {
      throw new Error(`user with username ${dto.username} is not registered`);
    }

    const verified = await verifyHash(dto.password, user.password);

    if (!verified) {
      throw new UnauthorizedException(`Invalid username or password`);
    }

    const token = await this.jwtService.signAsync({ sub: user.id });

    return { token, user };
  }

  public async register(dto: RegisterDto) {
    const user = await this.repo.findOne({ where: { username: dto.username } });

    if (user) {
      throw new Error(
        `user with username ${dto.username} is already registered`,
      );
    }

    const hashedPassword = await createHash(dto.password);

    const newUser = this.repo.create({
      username: dto.username,
      password: hashedPassword,
      name: dto.name,
    });

    await this.repo.save(newUser);

    return { user: newUser };
  }

  public async validateToken(token: string) {
    const decodedData = await this.jwtService.verifyAsync<TokenPayload>(token);

    if (!decodedData) {
      throw new UnauthorizedException(`Invalid token`);
    }

    const userId = decodedData.sub;

    return await this.ensureUser(userId);
  }
}
