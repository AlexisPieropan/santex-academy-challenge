import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerComponent } from './components/player/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet],
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('frontend');
}
