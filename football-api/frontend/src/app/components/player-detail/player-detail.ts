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

  setTimeout(() => {
    this.createRadarChart();
  }, 0);
},
      error: (err) => {
        console.error(err);
      },
    });
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