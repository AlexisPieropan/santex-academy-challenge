import { Inject, Injectable } from '@nestjs/common';
import { IPlayerRepository } from './interfaces/player-repository.interface';
import { Player } from './entities/player.entity';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayersService {
  constructor(
    @Inject('IPlayerRepository')
    private readonly playerRepository: IPlayerRepository,
  ) {}

  async getPlayers(
  page: number,
  limit: number,
  search?: string,
): Promise<Player[]> {
  const offset = (page - 1) * limit;

  return this.playerRepository.findAll(
    limit,
    offset,
    search,
  );
}

  getPlayerById(id: number): Promise<Player | undefined> {
    return this.playerRepository.findOneById(id);
  }

  async createPlayer(
  player: CreatePlayerDto,
): Promise<Player> {
  return this.playerRepository.create(player);
}

async updatePlayer(
  id: number,
  player: UpdatePlayerDto,
): Promise<Player | undefined> {
  return this.playerRepository.update(
    id,
    player,
  );
}
}
