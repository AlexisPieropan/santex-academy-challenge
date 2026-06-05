import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player/player';

@Component({
  selector: 'app-player-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './player-create.html',
  styleUrl: './player-create.css',
})
export class PlayerCreate {

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
    private playerService: PlayerService,
    private router: Router,
  ) {}

  createPlayer() {
    this.playerService
      .createPlayer(this.player)
      .subscribe({
        next: () => {
          alert('Jugador creado correctamente');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error(err);
          alert('Error al crear jugador');
        },
      });
  }
}