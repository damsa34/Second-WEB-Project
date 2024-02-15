export interface Team {
    // Traditional stats
    teamId: number; 
    name: string;
    gamesPlayed: number;
    wins: number;
    losses: number;
    winPercentage: number;
    minutesPlayed: number;
    points: number;
    fieldGoalsMade: number;
    fieldGoalsAttempted: number;
    threePointFieldGoalsMade: number;
    threePointFieldGoalsAttempted: number;
    freeThrowsMade: number;
    freeThrowsAttempted: number;
    offensiveRebounds: number;
    defensiveRebounds: number;
    rebounds: number;
    assists: number;
    turnovers: number;
    steals: number;
    blocks: number;
    personalFouls: number;
    plusMinus: number;

    // Profile stats
    record: string;
    placement: string;
    pointsPerGame: number;
    reboundsPerGame: number;
    assistsPerGame: number;

    roster: string[];
    conference: 'Eastern' | 'Western';
}