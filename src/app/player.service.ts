import { Injectable } from '@angular/core';
import { Player } from './player';
import { PLAYERS } from '../playerData';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  private players: Player[] = PLAYERS;

  getPlayerDetails(playerId?: number): Player | undefined {
    return this.players.find(player => player.id === playerId);
  }

  getTopPlayersByPoints(limit: number): Player[] {
    return this.players.slice().sort((a, b) => b.points - a.points).slice(0, limit);
  }

  getTopPlayersByRebounds(limit: number): Player[] {
    return this.players.slice().sort((a, b) => b.rebounds - a.rebounds).slice(0, limit);
  }

  getTopPlayersByAssists(limit: number): Player[] {
    return this.players.slice().sort((a, b) => b.assists - a.assists).slice(0, limit);
  }

  getTopPlayersByBlocks(limit: number): Player[] {
    return this.players.slice().sort((a, b) => b.blocks - a.blocks).slice(0, limit);
  }

  getTopPlayersBySteals(limit: number): Player[] {
    return this.players.slice().sort((a, b) => b.steals - a.steals).slice(0, limit);
  }
}
