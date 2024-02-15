import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'app-player-details',
  standalone: true,
  imports: [],
  template: `
  <div class="container-fluid">
    <div class="container">
    <div class="player-details-grid">
      <div class="player-image">
        <img [src]="'/assets/img/' + playerDetails?.playerId + '.png'" alt="{{ playerDetails?.fullName }}">
      
      <div class="player-info">
        <h2>{{ playerDetails?.fullName }}</h2>
        <p>{{ playerDetails?.team }}</p>
      </div>
      <div class="season-stats">
          <h3>Season Stats</h3>
            <table>
              <tr>
                <th>Points</th>
                <th>Assists</th>
                <th>Rebounds</th>
              </tr>
              <tr>
                <td>{{ playerDetails?.points }}</td>
                <td>{{ playerDetails?.assists }}</td>
                <td>{{ playerDetails?.rebounds }}</td>
              </tr>
            </table>
        </div>
      </div>
      <div class="profile-stats">
        <h3>Profile Stats</h3>
        <ul>
          <li><strong>Position  |  </strong> {{ playerDetails?.position }}</li>
          <li><strong>Jersey Number  |   </strong> {{ playerDetails?.jerseyNumber }}</li>
          <li><strong>Points Per Game  |   </strong> {{ playerDetails?.pointsPerGame }}</li>
          <li><strong>Rebounds Per Game  |   </strong> {{ playerDetails?.reboundsPerGame }}</li>
          <li><strong>Assists Per Game  |   </strong> {{ playerDetails?.assistsPerGame }}</li>
          <li><strong>Player Impact Estimate (PIE)  |   </strong> {{ playerDetails?.pie }}</li>
          <li><strong>Height  |   </strong> {{ playerDetails?.height }} cm</li>
          <li><strong>Weight  |   </strong> {{ playerDetails?.weight }} kg</li>
          <li><strong>Birthdate  |   </strong> {{ playerDetails?.birthdate }}</li>
          <li><strong>Country  |   </strong> {{ playerDetails?.country }}</li>
          <li><strong>Last Attended  |   </strong> {{ playerDetails?.lastAttended }}</li>
          <li><strong>Draft  |   </strong> {{ playerDetails?.draft }}</li>
        </ul>
      </div>
      </div>
    </div>
  </div>
  `,
  styleUrl: './player-details.component.css'
})
export class PlayerDetailsComponent {
  playerId?: number;
  @Input() playerDetails?: Player;

  constructor(private activatedRoute: ActivatedRoute, private playerService: PlayerService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.playerId = +params['id'];
      this.playerDetails = this.playerService.getPlayerDetails(this.playerId);
    });
  }
}
