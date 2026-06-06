// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import sequelizeConfig from './config/sequelize.config';
import { PlayersModule } from './modules/players/players.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';


@Module({
  imports: [
     ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  }),
  SequelizeModule.forRoot(sequelizeConfig),

  AuthModule,
  PlayersModule,
  UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    console.log('Sequelize config loaded:', sequelizeConfig.models);
  }
}
