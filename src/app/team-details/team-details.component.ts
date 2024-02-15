import { Component, Input } from '@angular/core';
import { Team } from '../team';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../team.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-team-details',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
      <div class="team-details-grid">
        <div class="team-info">
          <div class="team-image">
            <img [src]="'/assets/teams/' + teamDetails?.teamId + '.png'" alt="{{ teamDetails?.name }}">
          </div>
          <h2>{{ teamDetails?.name }}</h2>
          <p>Placement  |  {{ teamDetails?.record }}</p>
          <p>Standing  |  {{ teamDetails?.placement }} </p>
        </div>
        <div class="season-stats">
          <h3>Season Stats</h3>
            <table>
              <tr>
                <th>Points Per Game (PPG)</th>
                <th>Assists Per Game (APG)</th>
                <th>Rebounds Per Game (RPG)</th>
              </tr>
              <tr>
                <td>{{ teamDetails?.pointsPerGame }}</td>
                <td>{{ teamDetails?.assistsPerGame }}</td>
                <td>{{ teamDetails?.reboundsPerGame }}</td>
              </tr>
            </table>
        </div>
        <div class="team-info">
            <h3 style="text-align: center">Roster</h3>
            <table>
              <thead></thead>
              <tbody>
                <div *ngFor="let player of teamDetails?.roster; let i = index">
                <div *ngIf="i % 4 === 0">
                  <tr></tr>
                </div>
                  <td> {{ player }} </td>
                </div>
              </tbody>
            </table>
        </div>
      </div>
  `,
  styleUrl: './team-details.component.css'
})
export class TeamDetailsComponent {
  teamId?: number;
  @Input() teamDetails?: Team;

  constructor(private activatedRoute: ActivatedRoute, private teamService: TeamService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.teamId = +params['teamId'];
      this.teamDetails = this.teamService.getTeamDetails(this.teamId);
    });
  }
}
