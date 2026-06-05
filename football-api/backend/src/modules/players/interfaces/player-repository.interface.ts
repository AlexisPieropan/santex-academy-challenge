import { Player } from '../entities/player.entity';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';


export interface IPlayerRepository {
  findAll(
    limit: number,
    offset: number,
    search?: string,
  ): Promise<Player[]>;

  findOneById(id: number): Promise<Player | undefined>;
  create(
  player: CreatePlayerDto,
): Promise<Player>;

update(
  id: number,
  player: UpdatePlayerDto,
): Promise<Player | undefined>;

}


