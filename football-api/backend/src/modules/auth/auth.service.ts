import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
  ) {}

  async login(
    username: string,
    password: string,
  ) {
    console.log(username);
console.log(password);
    if (
      username !== 'alexis'
      || password !== '123456'
    ) {
      throw new UnauthorizedException(
        'Invalid credentials',
      );
    }

    const payload = {
      sub: 1,
      username,
    };

    return {
      access_token:
        await this.jwtService.signAsync(payload),
    };
  }
}