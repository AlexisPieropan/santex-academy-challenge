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
import { Post, Body } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Put } from '@nestjs/common';
import { UpdatePlayerDto } from './dto/update-player.dto';


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
  @Post()
@HttpCode(HttpStatus.CREATED)
async createPlayer(
  @Body() createPlayerDto: CreatePlayerDto,
): Promise<PlayerDto> {

  const player =
    await this.playersService.createPlayer(
      createPlayerDto,
    );

  return new PlayerDto(player);
}

@Put(':id')
@HttpCode(HttpStatus.OK)
async updatePlayer(
  @Param('id', ParseIntPipe) id: number,
  @Body() updatePlayerDto: UpdatePlayerDto,
): Promise<PlayerDto> {

  const player =
    await this.playersService.updatePlayer(
      id,
      updatePlayerDto,
    );

  if (!player) {
    throw new NotFoundException(
      `Player with ID ${id} not found.`,
    );
  }

  return new PlayerDto(player);
}

}