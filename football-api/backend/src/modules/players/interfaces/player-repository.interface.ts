import { Player } from '../entities/player.entity';

export interface IPlayerRepository {
  findAll(limit: number, offset: number): Promise<Player[]>;
  findOneById(id: number): Promise<Player | undefined>;
}
