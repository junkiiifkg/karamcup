
import { Team, Match } from './types';

export const TEAMS: Team[] = [
  {
    id: 't1',
    name: 'Thunder Wolves',
    logo: 'https://picsum.photos/seed/wolf/200',
    coach: { name: 'Arda Gündüz', nickname: 'Sensei' },
    players: [
      { id: 'p1', name: 'Ahmet Yılmaz', nickname: 'Storm', opggUrl: 'https://www.op.gg/summoners/tr/Storm-TR1', favoriteChampions: ['Lee Sin', 'Jarvan IV', 'Kha\'Zix'] },
      { id: 'p2', name: 'Can Demir', nickname: 'Voltage', opggUrl: '#', favoriteChampions: ['Syndra', 'Orianna', 'Azir'] },
      { id: 'p3', name: 'Efe Tan', nickname: 'Bolt', opggUrl: '#', favoriteChampions: ['Ezreal', 'Kai\'Sa', 'Lucian'] },
      { id: 'p4', name: 'Mert Ak', nickname: 'Shock', opggUrl: '#', favoriteChampions: ['Thresh', 'Nautilus', 'Leona'] },
      { id: 'p5', name: 'Sarp Kaya', nickname: 'Flash', opggUrl: '#', favoriteChampions: ['Aatrox', 'Jax', 'Fiora'] }
    ],
    stats: { played: 0, wins: 0, losses: 0, mapWins: 0, mapLosses: 0 }
  },
  {
    id: 't2',
    name: 'Shadow Reapers',
    logo: 'https://picsum.photos/seed/shadow/200',
    coach: { name: 'Mehmet Ali', nickname: 'Ghost' },
    players: [
      { id: 'p6', name: 'Bora Sert', nickname: 'Grim', opggUrl: '#', favoriteChampions: ['Zed', 'Yasuo', 'Yone'] },
      { id: 'p7', name: 'Deniz Gök', nickname: 'Soul', opggUrl: '#', favoriteChampions: ['Viego', 'Kindred', 'Nidalee'] },
      { id: 'p8', name: 'Emre Yol', nickname: 'Wraith', opggUrl: '#', favoriteChampions: ['LeBlanc', 'Akali', 'Katarina'] },
      { id: 'p9', name: 'Fatih Aras', nickname: 'Hollow', opggUrl: '#', favoriteChampions: ['Vayne', 'Jinx', 'Draven'] },
      { id: 'p10', name: 'Görkem Uzun', nickname: 'Death', opggUrl: '#', favoriteChampions: ['Pyke', 'Blitzcrank', 'Bard'] }
    ],
    stats: { played: 0, wins: 0, losses: 0, mapWins: 0, mapLosses: 0 }
  },
  { id: 't3', name: 'Golden Phoenix', logo: 'https://picsum.photos/seed/phoenix/200', coach: { name: 'Umut Can', nickname: 'Rise' }, players: [], stats: { played: 0, wins: 0, losses: 0, mapWins: 0, mapLosses: 0 } },
  { id: 't4', name: 'Ocean Guardians', logo: 'https://picsum.photos/seed/ocean/200', coach: { name: 'Selim Vardar', nickname: 'Deep' }, players: [], stats: { played: 0, wins: 0, losses: 0, mapWins: 0, mapLosses: 0 } },
  { id: 't5', name: 'Mountain Titans', logo: 'https://picsum.photos/seed/mountain/200', coach: { name: 'Ozan Tekin', nickname: 'Rock' }, players: [], stats: { played: 0, wins: 0, losses: 0, mapWins: 0, mapLosses: 0 } },
  { id: 't6', name: 'Desert Scorpions', logo: 'https://picsum.photos/seed/desert/200', coach: { name: 'Kemal Ak', nickname: 'Sand' }, players: [], stats: { played: 0, wins: 0, losses: 0, mapWins: 0, mapLosses: 0 } },
  {
    id: 't7',
    name: 'Arctic Vipers',
    logo: 'https://picsum.photos/seed/viper/200',
    coach: { name: 'RafaSilva1903', nickname: 'RafaSilva1903' },
    players: [
      { id: 'p7-1', name: 'Furkan Kayra Gürsoy', nickname: 'Junkvara', opggUrl: 'https://op.gg/tr/lol/summoners/tr/Junkvara-TR2', favoriteChampions: ['LoL'] },
      { id: 'p7-2', name: 'Mehmet Ozan Taş', nickname: 'gradozan', opggUrl: 'https://op.gg/tr/lol/summoners/tr/gradozan-TR1', favoriteChampions: ['LoL'] },
      { id: 'p7-3', name: 'Mehmet Efe Özcan', nickname: 'salam', opggUrl: 'https://op.gg/tr/lol/summoners/euw/Salam-1923', favoriteChampions: ['LoL'] },
      { id: 'p7-4', name: 'Faruk', nickname: 'ceranos', opggUrl: 'https://op.gg/tr/lol/summoners/tr/Ceranos-Volt', favoriteChampions: ['LoL'] },
      { id: 'p7-5', name: 'Arda', nickname: 'NICO ROSBERG', opggUrl: 'https://op.gg/tr/lol/summoners/euw/NICO%20ROSBERG-FENER', favoriteChampions: ['LoL'] }
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
  { id: 'm1', round: 1, team1Id: 't1', team2Id: 't2', score1: 2, score2: 0, date: '1. Tur', status: 'finished' },
  { id: 'm2', round: 1, team1Id: 't3', team2Id: 't4', score1: 2, score2: 1, date: '1. Tur', status: 'finished' },
  { id: 'm3', round: 1, team1Id: 't5', team2Id: 't6', score1: 1, score2: 2, date: '1. Tur', status: 'finished' },
  { id: 'm4', round: 1, team1Id: 't7', team2Id: 't8', score1: 0, score2: 2, date: '1. Tur', status: 'finished' },

  // TUR 2
  { id: 'm5', round: 2, team1Id: 't1', team2Id: 't3', score1: 2, score2: 1, date: '2. Tur', status: 'finished' },
  { id: 'm6', round: 2, team1Id: 't2', team2Id: 't4', score1: 0, score2: 0, date: '2. Tur', status: 'upcoming' },
  { id: 'm7', round: 2, team1Id: 't5', team2Id: 't7', score1: 1, score2: 2, date: '2. Tur', status: 'finished' },
  { id: 'm8', round: 2, team1Id: 't6', team2Id: 't8', score1: 0, score2: 0, date: '2. Tur', status: 'upcoming' },

  // TUR 3
  { id: 'm9', round: 3, team1Id: 't1', team2Id: 't4', score1: 0, score2: 0, date: '3. Tur', status: 'upcoming' },
  { id: 'm10', round: 3, team1Id: 't2', team2Id: 't3', score1: 0, score2: 0, date: '3. Tur', status: 'upcoming' },
  { id: 'm11', round: 3, team1Id: 't5', team2Id: 't8', score1: 0, score2: 0, date: '3. Tur', status: 'upcoming' },
  { id: 'm12', round: 3, team1Id: 't6', team2Id: 't7', score1: 0, score2: 0, date: '3. Tur', status: 'upcoming' },
];
