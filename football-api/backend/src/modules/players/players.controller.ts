import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayerDto } from './dto/player.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('api/players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
@HttpCode(HttpStatus.OK)
async getPlayers(
  @Query('page') page = 1,
  @Query('limit') limit = 20,
  @Query('search') search?: string,
): Promise<PlayerDto[]> {
  const players = await this.playersService.getPlayers(
    Number(page),
    Number(limit),
    search,
  );

  return players.map((player) => new PlayerDto(player));
}


  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getPlayerById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PlayerDto> {
    const player = await this.playersService.getPlayerById(id);

    if (!player) {
      throw new NotFoundException(
        `Player with ID ${id} not found.`,
      );
    }

    return new PlayerDto(player);
  }
}