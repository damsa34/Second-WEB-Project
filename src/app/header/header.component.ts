import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, RouterModule, CommonModule, RouterOutlet],
  template: `
    <header class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light border">
        <!--Left side of menu-->
        <div class="navbar-collapse">
          <div class="nav-item">
            <img class="logo" src="/assets/nbaLogo.png" alt="NBA Logo">
          </div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" routerLink="players">
                <button class="btn btn-warning">
                  Players
                </button>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="teams">
                <button class="btn btn-warning">
                  Teams
                </button>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="standings">
                <button class="btn btn-warning">
                  Standings
                </button>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="stats">
                <button class="btn btn-warning">
                  Stats
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
  </header>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
}
