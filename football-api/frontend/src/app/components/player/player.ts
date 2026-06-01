// src/app/components/player/player.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService, Player } from '../../services/player/player';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule],
  providers: [PlayerService],
  templateUrl: './player.html',
  styleUrls: ['./player.css'],
})
export class PlayerComponent implements OnInit {
  players: Player[] = [];
  errorMessage = '';

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
  console.log('PlayerComponent initialized');

  this.playerService.getPlayers(1, 20).subscribe({
    next: (data) => (this.players = data),
    error: () => (this.errorMessage = 'Error al cargar jugadores'),
  });
}
}
