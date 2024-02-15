import { NgFor, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-standings',
  standalone: true,
  imports: [NgFor, CommonModule],
  template: `
<div class="container">
  <h2>Standings</h2>
  <div class="standings-container">
    <div class="conference-standings">
      <h3>Western Conference</h3>
      <table>
        <thead>
          <tr>
            <th colspan="2">Team</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Win%</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let team of westernConferenceStandings">
            <td><img [src]="'assets/teams/' + team.teamId + '.png'" alt="{{ team.name }}"></td>
            <td>{{ team.name }}</td>
            <td>{{ team.wins }}</td>
            <td>{{ team.losses }}</td>
            <td>{{ team.winPercentage | percent: '1.2-2' }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="conference-standings">
      <h3>Eastern Conference</h3>
      <table>
        <thead>
          <tr>
            <th colspan="2">Team</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Win Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let team of easternConferenceStandings">
            <td><img style="'width': '50px'; 'height': '50px'" [src]="'assets/teams/' + team.teamId + '.png'" alt="{{ team.name }}"></td>
            <td>{{ team.name }}</td>
            <td>{{ team.wins }}</td>
            <td>{{ team.losses }}</td>
            <td>{{ team.winPercentage | percent: '1.2-2' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
  `,
  styleUrl: './standings.component.css'
})
export class StandingsComponent {
  westernConferenceStandings?: Team[];
  easternConferenceStandings?: Team[];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.westernConferenceStandings = this.teamService.getWesternConferenceStandings();
    this.easternConferenceStandings = this.teamService.getEasternConferenceStandings();
  }
}
