
import { Team, Match } from './types';
import teamLogo from './assets/image.png';
import solarFlareLogo from './assets/Solar_Flare.png';
import tersLalelerLogo from './assets/Ters_Laleler.png';
import bsboaLogo from './assets/BSBOA.png';
import stormSoldiersLogo from './assets/Storm_Soldiers.png';

export const TEAMS: Team[] = [
  {
    id: 't1',
    name: 'Solar Flare',
    logo: solarFlareLogo,
    coach: { name: 'Efe GündSeytin', nickname: 'Twenty7' },
    players: [
      { id: 'p1-1', name: 'Sercan Er', nickname: 'ztx', opggUrl: 'https://op.gg/tr/lol/summoners/euw/DA WIZARD-TRVS', favoriteChampions: ['Camille', 'Fiora', 'Poppy'] },
      { id: 'p1-2', name: 'Sarp Azmak', nickname: 'levi ', opggUrl: 'https://op.gg/tr/lol/summoners/euw/2416-jgg', favoriteChampions: ['Reksai', 'Viego', 'Qiyana'] },
      { id: 'p1-3', name: 'İlke Barış Önder', nickname: 'Dealio', opggUrl: 'https://op.gg/tr/lol/summoners/tr/Soltran-TR1', favoriteChampions: ['Zoe', 'Ryze', 'Akshan'] },
      { id: 'p1-4', name: 'Kaan Yılmaz', nickname: 'kyaan', opggUrl: 'https://op.gg/tr/lol/summoners/tr/PSYCH0K1LL3R-333', favoriteChampions: ['Xayah', 'Varus', 'Lucian'] },
      { id: 'p1-5', name: 'Kaan Palak', nickname: 'Génie', opggUrl: 'https://op.gg/tr/lol/summoners/euw/BLG ON-génie', favoriteChampions: ['Rakan', 'Rell', 'Nautilus'] }
    ],
    stats: { played: 0, wins: 0, losses: 0, mapWins: 0, mapLosses: 0 }
  },
  {
    id: 't2',
    name: 'Ters Laleler',
    logo: tersLalelerLogo,
    coach: { name: 'Efe Külahsızoğlu', nickname: 'Trefkmeister' },
    players: [
      { id: 'p2-1', name: 'Baran SEVEN', nickname: 'Baranseven', opggUrl: 'https://op.gg/tr/lol/summoners/tr/Baranseven-6221', favoriteChampions: ['Garen', 'Malphite', 'Mordekaiser'] },
      { id: 'p2-2', name: 'Kemal Özgür DANACIOĞLU', nickname: 'OTOBUSKALKAR', opggUrl: 'https://op.gg/tr/lol/summoners/tr/OTOBUSKALKAR-BUS', favoriteChampions: ['Viego', 'Vi', 'Ekko'] },
      { id: 'p2-3', name: 'Balkan MESUT', nickname: 'RealKjng', opggUrl: 'https://op.gg/tr/lol/summoners/tr/RealKjng-0000', favoriteChampions: ['Velkoz', 'Ahri', 'Mel'] },
      { id: 'p2-4', name: 'Ahmet Furkan TURAN', nickname: '2run', opggUrl: 'https://op.gg/tr/lol/summoners/tr/2run-IceWx', favoriteChampions: ['Lucian', 'Kaisa', 'Tristana'] },
      { id: 'p2-5', name: 'Tuna Çağın BAYIR', nickname: 'Nesquiq', opggUrl: 'https://op.gg/tr/lol/summoners/tr/Nesquiq-6435', favoriteChampions: ['Alistar', 'Thresh', 'Rell'] }
    ],
    stats: { played: 0, wins: 0, losses: 0, mapWins: 0, mapLosses: 0 }
  },
  {
    id: 't3',
    name: 'Bir Süredir Beraber Oynayan Adamlar',
    logo: bsboaLogo,
    coach: { name: 'Yiğit Efe Ateş', nickname: 'Binefsi' },
    players: [
      { id: 'p3-1', name: 'Umut Efe Nalbant', nickname: 'Auen', opggUrl: 'https://op.gg/lol/summoners/tr/LOLÜN%20SANSARI-BNY', favoriteChampions: ['Aatrox', 'Mundo', 'Gwen'] },
      { id: 'p3-2', name: 'Umut Tuncay Özkan', nickname: 'umutdelrey', opggUrl: 'https://op.gg/lol/summoners/tr/umutdelrey-333', favoriteChampions: ['Zyra', 'Viego', 'Qiyana'] },
      { id: 'p3-3', name: 'Sefa ÖzTÜRK', nickname: 'UFO', opggUrl: 'https://op.gg/tr/lol/summoners/tr/UFO-187', favoriteChampions: ['Ryze', 'Syndra', 'Hwei'] },
      { id: 'p3-4', name: 'Arda Çağlar', nickname: 'bierist', opggUrl: 'https://op.gg/tr/lol/summoners/tr/bierist-19230', favoriteChampions: ['Aphelios', 'Kaisa', 'Sivir'] },
      { id: 'p3-5', name: 'Turgaycan Haman', nickname: 'MadcaP', opggUrl: 'https://op.gg/tr/lol/summoners/tr/MadcaP-T11', favoriteChampions: ['Thresh', 'Braum', 'Pyke'] }
    ],
    stats: { played: 0, wins: 0, losses: 0, mapWins: 0, mapLosses: 0 }
  },
  {
    id: 't4',
    name: 'Storm Soldiers',
    logo: stormSoldiersLogo,
    coach: { name: 'Efe Karaoğlu', nickname: 'Froxy' },
    players: [
      { id: 'p4-1', name: 'Eyyup Aydınoğlu', nickname: 'SS Invincible', opggUrl: 'https://op.gg/lol/summoners/tr/InvincibleX-STRNG', favoriteChampions: ['Garen', 'Pantheon', 'Shen'] },
      { id: 'p4-2', name: 'Ege Ünalan', nickname: 'SS Memati ', opggUrl: 'https://op.gg/lol/summoners/tr/THE%20MEMAT%C4%B0-995', favoriteChampions: ['Lillia', 'Kayn', 'Viego'] },
      { id: 'p4-3', name: 'Kemal Gürbüz', nickname: 'SS Alucard', opggUrl: 'https://op.gg/lol/summoners/tr/d%C3%BCmb%C3%BCk19-NO1', favoriteChampions: ['Swain', 'Yone', 'Mel'] },
      { id: 'p4-4', name: 'Muhammed Balka', nickname: 'SS Mamixyo', opggUrl: 'https://op.gg/lol/summoners/tr/W%20mamixyo-suo', favoriteChampions: ['Kaisa', 'Yasuo', 'Varus'] },
      { id: 'p4-5', name: 'Efe Karaoğlu', nickname: 'SS Froxy', opggUrl: 'https://op.gg/lol/summoners/tr/Froxy-Fro02', favoriteChampions: ['Rell', 'Nautilus', 'Swain'] }
    ],
    stats: { played: 0, wins: 0, losses: 0, mapWins: 0, mapLosses: 0 }
  },
  { id: 't5', name: 'Mountain Titans', logo: 'https://picsum.photos/seed/mountain/200', coach: { name: 'Ozan Tekin', nickname: 'Rock' }, players: [], stats: { played: 0, wins: 0, losses: 0, mapWins: 0, mapLosses: 0 } },
  { id: 't6', name: 'Desert Scorpions', logo: 'https://picsum.photos/seed/desert/200', coach: { name: 'Kemal Ak', nickname: 'Sand' }, players: [], stats: { played: 0, wins: 0, losses: 0, mapWins: 0, mapLosses: 0 } },
  {
    id: 't7',
    name: 'Klavyenin Sesini Duyanlar',
    logo: teamLogo,
    coach: { name: 'Osman Bilal Yedek', nickname: 'RafaSilva1903' },
    players: [
      { id: 'p7-1', name: 'Furkan Kayra Gürsoy', nickname: 'Junkvara', opggUrl: 'https://op.gg/tr/lol/summoners/tr/Junkvara-TR2', favoriteChampions: ['Kaisa', 'Aphelios', 'Jinx'] },
      { id: 'p7-2', name: 'Mehmet Ozan Taş', nickname: 'gradozan', opggUrl: 'https://op.gg/tr/lol/summoners/tr/gradozan-TR1', favoriteChampions: ['Rakan', 'Milio', 'Yuumi'] },
      { id: 'p7-3', name: 'Mehmet Efe Özcan', nickname: 'salam', opggUrl: 'https://op.gg/tr/lol/summoners/euw/Salam-1923', favoriteChampions: ['Xin Zhao', 'Khazix', 'Lillia'] },
      { id: 'p7-4', name: 'Faruk', nickname: 'ceranos', opggUrl: 'https://op.gg/tr/lol/summoners/tr/Ceranos-Volt', favoriteChampions: ['Hwei', 'Qiyana', 'Zaheen'] },
      { id: 'p7-5', name: 'Arda', nickname: 'NICO ROSBERG', opggUrl: 'https://op.gg/tr/lol/summoners/euw/NICO%20ROSBERG-FENER', favoriteChampions: ['Sett', 'Mordekaiser', 'Malphite'] }
    ],
    stats: { played: 0, wins: 0, losses: 0, mapWins: 0, mapLosses: 0 }
  },
  { id: 't8', name: 'Forest Spirits', logo: 'https://picsum.photos/seed/forest/200', coach: { name: 'Suna Dağ', nickname: 'Leaf' }, players: [], stats: { played: 0, wins: 0, losses: 0, mapWins: 0, mapLosses: 0 } },
];

export const GROUPS = {
  'Grup A': ['t1', 't2', 't3', 't4'],
  'Grup B': ['t5', 't6', 't7', 't8'],
};

export const MATCHES: Match[] = [
  // TUR 1
  {
    id: 'm1',
    round: 1,
    team1Id: 't1',
    team2Id: 't2',
    score1: 2,
    score2: 0,
    date: '19 Ara 2025, 18:00',
    status: 'finished',
    games: [
      {
        id: 'gm1-1',
        gameNumber: 1,
        winnerTeamId: 't1',
        firstPickTeamId: 't1',
        team1Bans: ['Zed', 'Yasuo', 'Yone', 'Irelia', 'Sylas'],
        team2Bans: ['Lee Sin', 'Jarvan IV', 'Kha\'Zix', 'Elise', 'Graves'],
        team1Picks: ['Ahri', 'Viego', 'Kai\'Sa', 'Thresh', 'Ornn'],
        team2Picks: ['Syndra', 'Xin Zhao', 'Jhin', 'Nautilus', 'Malphite']
      },
      {
        id: 'gm1-2',
        gameNumber: 2,
        winnerTeamId: 't1',
        firstPickTeamId: 't2',
        team1Bans: ['LeBlanc', 'Akali', 'Katarina', 'Fizz', 'Ekko'],
        team2Bans: ['Elise', 'Nidalee', 'Rengar', 'Evelynn', 'Shaco'],
        team1Picks: ['Azir', 'Sejuani', 'Xayah', 'Rakan', 'Sion'],
        team2Picks: ['Orianna', 'Vi', 'Varus', 'Braum', 'Maokai']
      }
    ]
  },
  {
    id: 'm2',
    round: 1,
    team1Id: 't3',
    team2Id: 't4',
    score1: 2,
    score2: 1,
    date: '19 Ara 2025, 20:30',
    status: 'finished',
    games: [
      {
        id: 'gm2-1',
        gameNumber: 1,
        winnerTeamId: 't3',
        firstPickTeamId: 't3',
        team1Bans: ['Draven', 'Samira', 'Tristana', 'Caitlyn', 'Ashe'],
        team2Bans: ['Lulu', 'Yuumi', 'Janna', 'Soraka', 'Nami'],
        team1Picks: ['Jinx', 'Lulu', 'Viktor', 'Wukong', 'Gnar'],
        team2Picks: ['Zeri', 'Yuumi', 'Azir', 'Viego', 'Renekton']
      },
      {
        id: 'gm2-2',
        gameNumber: 2,
        winnerTeamId: 't4',
        firstPickTeamId: 't4',
        team1Bans: ['Kassadin', 'Vladimir', 'Ryze', 'Cassiopeia', 'VelKoz'],
        team2Bans: ['Fiora', 'Camille', 'Irelia', 'Jax', 'Riven'],
        team1Picks: ['Sylas', 'Kindred', 'Ashe', 'Karma', 'Jax'],
        team2Picks: ['Yone', 'Diana', 'Miss Fortune', 'Leona', 'Riven']
      },
      {
        id: 'gm2-3',
        gameNumber: 3,
        winnerTeamId: 't3',
        firstPickTeamId: 't3',
        team1Bans: ['Thresh', 'Blitzcrank', 'Nautilus', 'Pyke', 'Leona'],
        team2Bans: ['Morgana', 'Lux', 'Zyra', 'Brand', 'VelKoz'],
        team1Picks: ['Caitlyn', 'Lux', 'Syndra', 'Graves', 'Jayce'],
        team2Picks: ['Ezreal', 'Karma', 'Ahri', 'Lee Sin', 'Darius']
      }
    ]
  },
  {
    id: 'm3',
    round: 1,
    team1Id: 't5',
    team2Id: 't6',
    score1: 1,
    score2: 2,
    date: '20 Ara 2025, 14:00',
    status: 'finished',
    games: [
      {
        id: 'gm3-1',
        gameNumber: 1,
        winnerTeamId: 't6',
        firstPickTeamId: 't5',
        team1Bans: ['Aatrox', 'Darius', 'Mordekaiser', 'Garen', 'Sett'],
        team2Bans: ['Vayne', 'Kai\'Sa', 'Lucian', 'Jinx', 'Zeri'],
        team1Picks: ['Renekton', 'Elise', 'Galio', 'Sivir', 'Yuumi'],
        team2Picks: ['Fiora', 'Lee Sin', 'Lissandra', 'Zeri', 'Lulu']
      },
      {
        id: 'gm3-2',
        gameNumber: 2,
        winnerTeamId: 't5',
        firstPickTeamId: 't6',
        team1Bans: ['Zed', 'Talon', 'Qiyana', 'Katarina', 'Akali'],
        team2Bans: ['Malzahar', 'Veigar', 'Anivia', 'Viktor', 'Orianna'],
        team1Picks: ['Yasuo', 'Gragas', 'Yone', 'Senna', 'Tahm Kench'],
        team2Picks: ['Irelia', 'Sejuani', 'Akali', 'Aphelios', 'Thresh']
      },
      {
        id: 'gm3-3',
        gameNumber: 3,
        winnerTeamId: 't6',
        firstPickTeamId: 't5',
        team1Bans: ['Kindred', 'Graves', 'Nidalee', 'Elise', 'Lee Sin'],
        team2Bans: ['Khazix', 'Rengar', 'Shaco', 'Evelynn', 'Nocturne'],
        team1Picks: ['Hecarim', 'Orianna', 'Jinx', 'Nautilus', 'Malphite'],
        team2Picks: ['Jarvan IV', 'Syndra', 'Xayah', 'Rakan', 'Ornn']
      }
    ]
  },
  {
    id: 'm4',
    round: 1,
    team1Id: 't7',
    team2Id: 't8',
    score1: 0,
    score2: 2,
    date: '20 Ara 2025, 17:00',
    status: 'finished',
    games: [
      {
        id: 'gm4-1',
        gameNumber: 1,
        winnerTeamId: 't8',
        firstPickTeamId: 't7',
        team1Bans: ['Shaco', 'Teemo', 'Master Yi', 'Tryndamere', 'Warwick'],
        team2Bans: ['Garen', 'Annie', 'Warwick', 'Amumu', 'Malphite'],
        team1Picks: ['Amumu', 'Malphite', 'Miss Fortune', 'Sona', 'Lux'],
        team2Picks: ['Volibear', 'Ziggs', 'Veigar', 'Soraka', 'Janna']
      },
      {
        id: 'gm4-2',
        gameNumber: 2,
        winnerTeamId: 't8',
        firstPickTeamId: 't8',
        team1Bans: ['Brand', 'Zyra', 'Xerath', 'VelKoz', 'Lux'],
        team2Bans: ['Velkoz', 'Swain', 'Karthus', 'Brand', 'Zyra'],
        team1Picks: ['Heimerdinger', 'Fiddlesticks', 'Nunu', 'Blitzcrank', 'Singed'],
        team2Picks: ['Neeko', 'Morgana', 'Lux', 'Seraphine', 'Sona']
      }
    ]
  },

  // TUR 2
  {
    id: 'm5',
    round: 2,
    team1Id: 't1',
    team2Id: 't3',
    score1: 2,
    score2: 1,
    date: '21 Ara 2025, 19:00',
    status: 'finished',
    games: [
      {
        id: 'gm5-1',
        gameNumber: 1,
        winnerTeamId: 't1',
        firstPickTeamId: 't1',
        team1Bans: ['Zeri', 'Sivir', 'Yuumi', 'Lulu', 'Janna'],
        team2Bans: ['Lucian', 'Nami', 'Caitlyn', 'Ashe', 'Varus'],
        team1Picks: ['Aphelios', 'Thresh', 'Ahri', 'Vi', 'Gwen'],
        team2Picks: ['Jinx', 'Lulu', 'Viktor', 'Viego', 'Jayce']
      },
      {
        id: 'gm5-2',
        gameNumber: 2,
        winnerTeamId: 't3',
        firstPickTeamId: 't3',
        team1Bans: ['Kante', 'Fiora', 'Camille', 'Irelia', 'Gwen'],
        team2Bans: ['Renekton', 'Aatrox', 'Jax', 'Darius', 'Sett'],
        team1Picks: ['Ornn', 'Trundle', 'Azir', 'Ezreal', 'Karma'],
        team2Picks: ['Sion', 'Graves', 'Orianna', 'Varus', 'Heimerdinger']
      },
      {
        id: 'gm5-3',
        gameNumber: 3,
        winnerTeamId: 't1',
        firstPickTeamId: 't1',
        team1Bans: ['Syndra', 'Akali', 'Sylas', 'LeBlanc', 'Ahri'],
        team2Bans: ['Viktor', 'Azir', 'Ryze', 'Orianna', 'Cassiopeia'],
        team1Picks: ['LeBlanc', 'Lee Sin', 'Kaisa', 'Nautilus', 'Malphite'],
        team2Picks: ['Lissandra', 'Jarvan IV', 'Xayah', 'Rakan', 'Gragas']
      }
    ]
  },
  { id: 'm6', round: 2, team1Id: 't2', team2Id: 't4', score1: 0, score2: 0, date: '21 Ara 2025, 22:00', status: 'upcoming' },
  {
    id: 'm7',
    round: 2,
    team1Id: 't5',
    team2Id: 't7',
    score1: 1,
    score2: 2,
    date: '22 Ara 2025, 16:00',
    status: 'finished',
    games: [
      {
        id: 'gm7-1',
        gameNumber: 1,
        winnerTeamId: 't7',
        firstPickTeamId: 't7',
        team1Bans: ['Master Yi', 'Katarina', 'Yasuo', 'Yone', 'Zed'],
        team2Bans: ['Zed', 'Yone', 'Samira', 'Nilah', 'BelVeth'],
        team1Picks: ['Garen', 'Warwick', 'Annie', 'Ashe', 'Soraka'],
        team2Picks: ['Teemo', 'Shaco', 'Veigar', 'Miss Fortune', 'Lux']
      },
      {
        id: 'gm7-2',
        gameNumber: 2,
        winnerTeamId: 't5',
        firstPickTeamId: 't5',
        team1Bans: ['Darius', 'Illaoi', 'Yorick', 'Nasus', 'Garen'],
        team2Bans: ['Nasus', 'Tryndamere', 'Kayle', 'Jax', 'Fiora'],
        team1Picks: ['Mordekaiser', 'Vi', 'Ahri', 'Caitlyn', 'Morgana'],
        team2Picks: ['Sett', 'Hecarim', 'Zed', 'Jhin', 'Yuumi']
      },
      {
        id: 'gm7-3',
        gameNumber: 3,
        winnerTeamId: 't7',
        firstPickTeamId: 't7',
        team1Bans: ['Blitzcrank', 'Thresh', 'Pyke', 'Nautilus', 'Leona'],
        team2Bans: ['Nautilus', 'Leona', 'Alistar', 'Braum', 'Rell'],
        team1Picks: ['Malphite', 'Amumu', 'Diana', 'Yasuo', 'Janna'],
        team2Picks: ['Ornn', 'Sejuani', 'Yone', 'Samira', 'Rell']
      }
    ]
  },
  { id: 'm8', round: 2, team1Id: 't6', team2Id: 't8', score1: 0, score2: 0, date: '25 Ara 2025, 21:00', status: 'upcoming' },

  // TUR 3
  { id: 'm9', round: 3, team1Id: 't1', team2Id: 't4', score1: 0, score2: 0, date: '3. Tur', status: 'upcoming' },
  { id: 'm10', round: 3, team1Id: 't2', team2Id: 't3', score1: 0, score2: 0, date: '3. Tur', status: 'upcoming' },
  { id: 'm11', round: 3, team1Id: 't5', team2Id: 't8', score1: 0, score2: 0, date: '3. Tur', status: 'upcoming' },
  { id: 'm12', round: 3, team1Id: 't6', team2Id: 't7', score1: 0, score2: 0, date: '3. Tur', status: 'upcoming' },
];
