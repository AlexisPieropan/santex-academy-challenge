import { Inject, Injectable } from '@nestjs/common';
import { IPlayerRepository } from './interfaces/player-repository.interface';
import { Player } from './entities/player.entity';

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
}
