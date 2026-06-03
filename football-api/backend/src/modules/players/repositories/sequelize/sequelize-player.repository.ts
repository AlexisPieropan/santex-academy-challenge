import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PlayerModel } from './player.model'; // Sequelize model
import { IPlayerRepository } from '../../interfaces/player-repository.interface';
import { Player } from '../../entities/player.entity';
import { Op } from 'sequelize';

@Injectable()
export class SequelizePlayerRepository implements IPlayerRepository {
  constructor(
    @InjectModel(PlayerModel)
    private readonly playerModel: typeof PlayerModel,
  ) {}

  async findAll(
  limit: number,
  offset: number,
  search?: string,
): Promise<Player[]> {
  const playerList = await this.playerModel.findAll({
    where: search
      ? {
          longName: {
            [Op.like]: `%${search}%`,
          },
        }
      : undefined,
    limit,
    offset,
  });

  return playerList.map((x) => this.mapToEntity(x));
}


  async findOneById(id: number): Promise<Player | undefined> {
    const model = await this.playerModel.findByPk(id);
    if (!model) {
      return undefined;
    }
    return this.mapToEntity(model);
  }

  

  private mapToEntity(model: PlayerModel): Player {
  const data = model.toJSON();

  const player = new Player();

  player.id = model.id;
  player.name = model.longName;
  player.club = model.clubName || 'Unknown Club';
  player.position = model.playerPositions?.split(',')[0].trim() ?? 'Unknown';
  player.nationality = model.nationalityName || 'Unknown Nationality';
  player.rating = model.overall;

  player.speed = data.pace ?? 0;
  player.shooting = data.shooting ?? 0;
  player.dribbling = data.dribbling ?? 0;
  player.passing = data.passing ?? 0;
  player.faceUrl = model.playerFaceUrl;

  return player;
}
}
