import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';

import { AuthService } from './auth.service';

import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
  private readonly authService: AuthService,
  private readonly usersService: UsersService,
) {}

  @Post('login')
  async login(
    @Body() body: {
      username: string;
      password: string;
    },
  ) {
    return this.authService.login(
      body.username,
      body.password,
    );
  }

  @Post('register')
async register(
  @Body() body: {
    username: string;
    password: string;
  },
) {
  const existingUser =
    await this.usersService.findByUsername(
      body.username,
    );

  if (existingUser) {
    return {
      success: false,
      message: 'Username already exists',
    };
  }

  const user =
    await this.usersService.create(
      body.username,
      body.password,
    );

  return {
    success: true,
    id: user.id,
    username: user.username,
  };
}
}