import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2>Player Leaderboards</h2>
      <div *ngFor="let category of categories">
        <h3>{{ category | uppercase }} Leaderboard</h3>
        <table>
          <tr>
            <th>Rank</th>
            <th colspan="2">Player</th>
            <th>{{ category }}</th>
          </tr>
          <tr *ngFor="let player of getTopPlayersByCategory(category, 5); let i = index">
            <td>{{ i + 1 }}</td>
            <td><img [src]="'assets/img/' + player.playerId + '.png'" alt="{{ player.fullName }}"></td>
            <td>{{ player.fullName }}</td>
            <td *ngIf="category === 'Points'">{{ player.points }}</td>
            <td *ngIf="category === 'Rebounds'">{{ player.rebounds }}</td>
            <td *ngIf="category === 'Assists'">{{ player.assists }}</td>
            <td *ngIf="category === 'Blocks'">{{ player.blocks }}</td>
            <td *ngIf="category === 'Steals'">{{ player.steals }}</td>
          </tr>
        </table>
      </div>
    </div>
  `,
  styleUrl: './stats.component.css'
})
export class StatsComponent {  
  categories: string[] = ['Points', 'Rebounds', 'Assists', 'Blocks', 'Steals'];

  constructor(private playerService: PlayerService) {}

  getTopPlayersByCategory(category: string, limit: number): Player[] {
    switch (category) {
      case 'Points':
        return this.playerService.getTopPlayersByPoints(limit);
      case 'Rebounds':
        return this.playerService.getTopPlayersByRebounds(limit);
      case 'Assists':
        return this.playerService.getTopPlayersByAssists(limit);
      case 'Blocks':
        return this.playerService.getTopPlayersByBlocks(limit);
      case 'Steals':
        return this.playerService.getTopPlayersBySteals(limit);
      default:
        return [];
    }
  }
}
