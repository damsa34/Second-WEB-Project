import { Injectable } from '@angular/core';
import { Team } from './team';
import { TEAMS } from './teamData';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor() { }

  private teams: Team[] = TEAMS;

  getTeamDetails(teamId?: number): Team | undefined {
    return this.teams.find(team => team.teamId === teamId);
  }

  getTeams(): Team[] {
    return this.teams;
  }

  getTeamById(teamId: number): Team | undefined {
    return this.teams.find(team => team.teamId === teamId);
  }

  calculateWinPercentages(teams: Team[]): Team[] {
    return teams.map(team => ({
      ...team, winPercentage: team.wins / (team.wins + team.losses) || 0
    })).sort((a, b) => b.winPercentage - a.winPercentage);
  }

  getWesternConferenceStandings(): Team[] {
    const westernConferenceTeams = TEAMS.filter((team: Team) => team.conference === 'Western');
    return this.calculateWinPercentages(westernConferenceTeams);
  }

  getEasternConferenceStandings(): Team[] {
    const easternConferenceTeams = TEAMS.filter((team: Team) => team.conference === 'Eastern');
    return this.calculateWinPercentages(easternConferenceTeams);
  }
}
