import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PLAYERS } from '../../playerData'; 
import { Player } from '../player';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  template: `
    <div class="container">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th colspan="2">PLAYER</th>
            <th>TEAM</th>
            <th>AGE</th>
            <th>GP</th>
            <th>W</th>
            <th>L</th>
            <th>MIN</th>
            <th>PTS</th>
            <th>FGM</th>
            <th>FGA</th>
            <th>3PM</th>
            <th>3PA</th>
            <th>TM</th>
            <th>FTA</th>
            <th>OREB</th>
            <th>DREB</th>
            <th>REB</th>
            <th>AST</th>
            <th>TOV</th>
            <th>STL</th>
            <th>BLK</th>
            <th>PF</th>
            <th>+/-</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let player of players">
            <td><img [src]="'assets/img/' + player.playerId + '.png'" alt="{{ player.fullName }}"></td>
            <td [style]="links"><a [routerLink]="['/player-details', player.id]"> {{ player.fullName }} </a></td>
            <td [style]="links"><a [routerLink]="['/team-details', player.teamId]"> {{ player.team }} </a></td>
            <td> {{ player.age }} </td>
            <td> {{ player.gamesPlayed }} </td>
            <td> {{ player.wins }} </td>
            <td> {{ player.losses }} </td>
            <td> {{ player.minutes }} </td>
            <td> {{ player.points }} </td>
            <td> {{ player.fieldGoalsMade }} </td>
            <td> {{ player.fieldGoalsAttempted }} </td>
            <td> {{ player.threePointFieldGoalsMade }} </td>
            <td> {{ player.threePointFieldGoalsAttempted }} </td>
            <td> {{ player.freeThrowsMade }} </td>
            <td> {{ player.freeThrowsAttempted }} </td>
            <td> {{ player.offensiveRebounds }} </td>
            <td> {{ player.defensiveRebounds }} </td>
            <td> {{ player.rebounds }} </td>
            <td> {{ player.assists }} </td>
            <td> {{ player.turnovers }} </td>
            <td> {{ player.steals }} </td>
            <td> {{ player.blocks }} </td>
            <td> {{ player.personalFouls }} </td>
            <td> {{ player.plusMinus }} </td>
          </tr>
        </tbody>
      </table>
      <router-outlet></router-outlet>
    </div> 
  `,
  styleUrl: './players.component.css'
})

export class PlayersComponent {
  player?: Player;
  players: Player[] = PLAYERS;
  
  links = {
    'color': 'lightblue',
    'font-size': '16px',
    'font-style': 'italic'
  };
}