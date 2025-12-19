
export interface Player {
  id: string;
  name: string;
  nickname: string;
  opggUrl: string;
  favoriteChampions: string[];
}

export interface Coach {
  name: string;
  nickname: string;
}

export interface Team {
  id: string;
  name: string;
  logo: string;
  players: Player[];
  coach?: Coach;
  stats: TeamStats;
}

export interface TeamStats {
  played: number;
  wins: number;
  losses: number;
  mapWins: number;
  mapLosses: number;
}

export interface Match {
  id: string;
  round: number;
  team1Id: string;
  team2Id: string;
  score1?: number;
  score2?: number;
  date: string;
  status: 'upcoming' | 'finished';
}
