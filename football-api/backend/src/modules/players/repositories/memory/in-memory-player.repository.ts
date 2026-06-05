import { Player } from '../../entities/player.entity';
import { IPlayerRepository } from '../../interfaces/player-repository.interface';
import { CreatePlayerDto } from '../../dto/create-player.dto';

export class InMemoryPlayerRepository implements IPlayerRepository {
  private players: Player[] = [];

  async findAll(
    limit: number,
    offset: number,
    search?: string,
  ): Promise<Player[]> {
    return Promise.resolve([...this.players]);
  }

  async findOneById(id: number): Promise<Player | undefined> {
    return Promise.resolve(
      this.players.find((p) => p.id === id),
    );
  }

  async create(
    player: CreatePlayerDto,
  ): Promise<Player> {
    throw new Error('Method not implemented.');
  }

  async update(): Promise<Player | undefined> {
  return undefined;
}
}