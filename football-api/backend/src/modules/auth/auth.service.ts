import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
  private readonly jwtService: JwtService,
  private readonly usersService: UsersService,
) {}

  async login(
  username: string,
  password: string,
) {
  const user =
    await this.usersService.findByUsername(
      username,
    );

  if (!user) {
    throw new UnauthorizedException(
      'User not found',
    );
  }

  if (user.password !== password) {
    throw new UnauthorizedException(
      'Invalid password',
    );
  }

  const payload = {
    sub: user.id,
    username: user.username,
  };

  return {
    access_token:
      await this.jwtService.signAsync(payload),
  };
}
}