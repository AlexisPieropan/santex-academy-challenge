import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserModel)
    private readonly userModel: typeof UserModel,
  ) {}

  async create(
    username: string,
    password: string,
  ): Promise<UserModel> {
    return this.userModel.create({
      username,
      password,
    }as any);
  }

  async findByUsername(
    username: string,
  ): Promise<UserModel | null> {
    return this.userModel.findOne({
      where: {
        username,
      },
    });
  }
}