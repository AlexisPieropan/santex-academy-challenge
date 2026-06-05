// src/app/components/player/player.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PlayerService, Player } from '../../services/player/player';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
  CommonModule,
  MatCardModule,
  MatButtonModule,
  ],
  providers: [PlayerService],
  templateUrl: './player.html',
  styleUrls: ['./player.css'],
})
export class PlayerComponent implements OnInit {
  players: Player[] = [];
  errorMessage = '';
  search = '';
  page = 1;
  limit = 20;

loadPlayers() {
  this.playerService.getPlayers(
    this.page,
    this.limit,
    this.search,
  ).subscribe({
    next: (data) => (this.players = data),
    error: () => (this.errorMessage = 'Error al cargar jugadores'),
  });
}

//BOTONES PARA LA PAGINACION 
nextPage() {
  this.page++;
  this.loadPlayers();
}

previousPage() {
  if (this.page > 1) {
    this.page--;
    this.loadPlayers();
  }
}

//FUNCION DEL BUSCADOR 
onSearch(event: Event) {
  const target = event.target as HTMLInputElement;

  this.search = target.value;
  this.page = 1;

  this.loadPlayers();
}

goToCreatePlayer() {
  this.router.navigate(['/player/create']);
}

viewPlayer(id: number) {
  this.router.navigate(['/player', id]);
}

  constructor(
  private playerService: PlayerService,
  private router: Router,
) {}

 ngOnInit() {
  console.log('PlayerComponent initialized');
  this.loadPlayers();
}
}
