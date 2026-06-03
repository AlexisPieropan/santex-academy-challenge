import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PlayerService, Player } from '../../services/player/player';

@Component({
  selector: 'app-player-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-detail.html',
  styleUrl: './player-detail.css',
})
export class PlayerDetail implements OnInit {
  player?: Player;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.playerService.getPlayer(id).subscribe({
      next: (data) => {
        this.player = data;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}