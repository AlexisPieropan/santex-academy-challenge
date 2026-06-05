import {
  Chart,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PlayerService, Player } from '../../services/player/player';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

Chart.register(
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

@Component({
  selector: 'app-player-detail',
  standalone: true,
  imports: [
  CommonModule,
  MatCardModule,
],
  templateUrl: './player-detail.html',
  styleUrl: './player-detail.css',
})
export class PlayerDetail implements OnInit {
  player?: Player;

  constructor(
  private route: ActivatedRoute,
  private playerService: PlayerService,
  private router: Router,
) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.playerService.getPlayer(id).subscribe({
      next: (data) => {
  this.player = data;

  setTimeout(() => {
    this.createRadarChart();
  }, 0);
},
      error: (err) => {
        console.error(err);
      },
    });
  }

  editPlayer(): void {
  if (!this.player) return;

  this.router.navigate([
    '/player/edit',
    this.player.id,
  ]);
}

  private createRadarChart(): void {
  if (!this.player) return;

  const canvas = document.getElementById(
    'radarChart',
  ) as HTMLCanvasElement;

  if (!canvas) return;

  new Chart(canvas, {
    type: 'radar',
    data: {
      labels: [
        'Speed',
        'Shooting',
        'Dribbling',
        'Passing',
        'Rating',
      ],
      datasets: [
        {
          label: this.player.name,
          data: [
            this.player.speed,
            this.player.shooting,
            this.player.dribbling,
            this.player.passing,
            this.player.rating,
          ],
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
        },
      },
    },
  });
}
}