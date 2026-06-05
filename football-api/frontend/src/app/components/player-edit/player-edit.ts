import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Player,
  PlayerService,
} from '../../services/player/player';

@Component({
  selector: 'app-player-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './player-edit.html',
  styleUrl: './player-edit.css',
})
export class PlayerEdit implements OnInit {

  playerId!: number;

  player = {
    name: '',
    club: '',
    position: '',
    nationality: '',
    rating: 75,
    speed: 75,
    shooting: 75,
    passing: 75,
    dribbling: 75,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService,
  ) {}

  ngOnInit(): void {

    this.playerId = Number(
      this.route.snapshot.paramMap.get('id'),
    );

    this.playerService
      .getPlayer(this.playerId)
      .subscribe({
        next: (player: Player) => {

          this.player = {
            name: player.name,
            club: player.club,
            position: player.position,
            nationality: player.nationality,
            rating: player.rating,
            speed: player.speed,
            shooting: player.shooting,
            passing: player.passing,
            dribbling: player.dribbling,
          };
        },
        error: (err: any) => {
          console.error(err);
          alert('Error al cargar jugador');
        },
      });
  }

  updatePlayer(): void {

    this.playerService
      .updatePlayer(
        this.playerId,
        this.player,
      )
      .subscribe({
        next: () => {

          alert(
            'Jugador actualizado correctamente',
          );

          this.router.navigate([
            '/player',
            this.playerId,
          ]);
        },
        error: (err: any) => {
          console.error(err);

          alert(
            'Error al actualizar jugador',
          );
        },
      });
  }
}