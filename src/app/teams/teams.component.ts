import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TEAMS } from '../teamData';
import { Team } from '../team';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  template: `
    <div class="container">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th colspan="2">TEAM</th>
            <th>GP</th>
            <th>W</th>
            <th>L</th>
            <th>MIN</th>
            <th>PTS</th>
            <th>FGM</th>
            <th>FGA</th>
            <th>3PM</th>
            <th>3PA</th>
            <th>FTM</th>
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
          <tr *ngFor="let team of teams">
            <td><img [src]="'assets/teams/' + team.teamId + '.png'" alt="{{ team.name }}"></td>
            <td [style]="links"><a [routerLink]="['/team-details', team.teamId]"> {{ team.name }} </a></td>
            <td> {{ team.gamesPlayed }} </td>
            <td> {{ team.wins }} </td>
            <td> {{ team.losses }} </td>
            <td> {{ team.minutesPlayed }} </td>
            <td> {{ team.points }} </td>
            <td> {{ team.fieldGoalsMade }} </td>
            <td> {{ team.fieldGoalsAttempted }} </td>
            <td> {{ team.threePointFieldGoalsMade }} </td>
            <td> {{ team.threePointFieldGoalsAttempted }} </td>
            <td> {{ team.freeThrowsMade }} </td>
            <td> {{ team.freeThrowsAttempted }} </td>
            <td> {{ team.offensiveRebounds }} </td>
            <td> {{ team.defensiveRebounds }} </td>
            <td> {{ team.rebounds }} </td>
            <td> {{ team.assists }} </td>
            <td> {{ team.turnovers }} </td>
            <td> {{ team.steals }} </td>
            <td> {{ team.blocks }} </td>
            <td> {{ team.personalFouls }} </td>
            <td> {{ team.plusMinus }} </td>
          </tr>
        </tbody>
      </table>
      <router-outlet></router-outlet>
    </div> 
  `,
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  @Input() team?: Team;
  teams: Team[] = TEAMS;

  links = {
    'color': 'lightblue',
    'font-size': '16px',
    'font-style': 'italic'
  };
}
