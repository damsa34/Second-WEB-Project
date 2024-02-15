export interface Player {
    // Traditional Stats
    id: number;
    teamId: number;
    playerId: number;
    fullName: string;
    team: string;
    age: number;
    gamesPlayed: number;
    wins: number;
    losses: number;
    minutes: number;
    points: number;
    fieldGoalsMade: number;
    fieldGoalsAttempted: number;
    threePointFieldGoalsMade: number;
    threePointFieldGoalsAttempted: number;
    freeThrowsMade: number;
    freeThrowsAttempted: number;
    rebounds: number;
    offensiveRebounds: number;
    defensiveRebounds: number;
    assists: number;
    turnovers: number;
    steals: number;
    blocks: number;
    personalFouls: number;
    plusMinus: number;

    // Profile stats
    position: string;
    jerseyNumber: number;
    pointsPerGame: number;
    reboundsPerGame: number;
    assistsPerGame: number;
    pie: number;
    height: number;
    weight: number;
    birthdate: string;
    country: string;
    lastAttended: string;
    draft: string;
}