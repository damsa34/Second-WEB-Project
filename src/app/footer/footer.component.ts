import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  template: `
  <footer class="container-fluid bg-light border" style="text-align: center; padding-top: 50px;">
    <div class="row">
      <div class="col-lg">
        <h5>Navigation</h5>
        <ul>
          <li><a href="https://www.nba.com/">About Us</a></li>
          <li><a href="https://support.watch.nba.com/hc/en-us">Contact Us</a></li>
          <li><a href="https://support.watch.nba.com/hc/en-us/categories/115000088874-Technical-Support">Help Center</a></li>
        </ul>
      </div>
      <div class="col-lg">
        <h5>NBA Info</h5>
        <ul>
          <li><a routerLink="teams">Teams</a></li>
          <li><a routerLink="players">Players</a></li>
          <li><a routerLink="standings">Standings</a></li>
          <li><a routerLink="stats">Stats</a></li>
        </ul>
      </div>
      <div class="col-lg">
        <h5>Follow Us</h5>
        <ul class="list-inline">
          <li class="list-inline-item"><a href="https://www.facebook.com/nba/"><img src="/assets/nbaFacebook.png"></a></li>
          <li class="list-inline-item"><a href="https://www.instagram.com/nba/"><img src="/assets/nbaInstagram.png"></a></li>
          <li class="list-inline-item"><a href="https://twitter.com/nba?lang=en"><img src="/assets/nbaTwitter.png"></a></li>
        </ul>
      </div>
      <div class="col-lg">
        <p>&copy; 2024 NBA Media Ventures, LLC. All rights reserved.</p>
      </div>
    </div>
  </footer>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
