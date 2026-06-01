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
  search = '';

loadPlayers() {
  this.playerService.getPlayers(1, 20, this.search).subscribe({
    next: (data) => (this.players = data),
    error: () => (this.errorMessage = 'Error al cargar jugadores'),
  });
}

onSearch(event: Event) {
  const target = event.target as HTMLInputElement;
  this.search = target.value;
  this.loadPlayers();
}

  constructor(private playerService: PlayerService) {}

 ngOnInit() {
  console.log('PlayerComponent initialized');
  this.loadPlayers();
}
}
