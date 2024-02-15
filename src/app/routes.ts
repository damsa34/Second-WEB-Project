import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { StandingsComponent } from './standings/standings.component';
import { StatsComponent } from "./stats/stats.component";
import { PlayerDetailsComponent } from "./player-details/player-details.component";
import { TeamDetailsComponent } from "./team-details/team-details.component";

const routeConfig: Routes = [
    { path: '', component: AppComponent, title: 'NBA Home Page' },
    { path: 'players', component: PlayersComponent, title: 'NBA Players' },
    { path: 'teams', component: TeamsComponent, title: 'NBA Teams' },
    { path: 'standings', component: StandingsComponent, title: 'NBA Standings' },
    { path: 'stats', component: StatsComponent, title: 'NBA Stats' },
    { path: 'player-details/:id', component: PlayerDetailsComponent, title: 'NBA Player Details'},
    { path: 'team-details/:teamId', component: TeamDetailsComponent, title: 'NBA Team Details' }
];

export default routeConfig;