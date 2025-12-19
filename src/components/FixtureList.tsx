
import React, { useState } from 'react';
import { Match, Team, Game } from '../types';
import { getChampionImageUrl } from '../utils/champion';

interface FixtureListProps {
  matches: Match[];
  teams: Team[];
}

const GameDetails: React.FC<{ game: Game; team1: Team; team2: Team }> = ({ game, team1, team2 }) => {
  return (
    <div className="bg-slate-950/40 rounded-xl p-4 mt-4 border border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className={`absolute top-0 w-24 h-24 blur-[60px] opacity-20 pointer-events-none rounded-full ${game.winnerTeamId === team1.id ? 'left-0 bg-cyan-500' : 'right-0 bg-purple-500'}`}></div>

      <div className="flex items-center justify-between mb-4 relative z-10">
        <h4 className="text-slate-300 font-display font-bold uppercase tracking-wider text-xs flex items-center gap-2">
          <span className="text-cyan-400">GAME {game.gameNumber}</span>
          <span className="w-1 h-1 rounded-full bg-slate-600"></span>
          <span className="text-slate-500 font-normal">
            FIRST PICK: <span className={game.firstPickTeamId === team1.id ? 'text-cyan-300' : 'text-purple-300'}>{game.firstPickTeamId === team1.id ? team1.name : team2.name}</span>
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-600"></span>
          <span className="text-slate-500 font-normal">KAZANAN: <span className={game.winnerTeamId === team1.id ? 'text-cyan-300' : 'text-purple-300'}>{game.winnerTeamId === team1.id ? team1.name : team2.name}</span></span>
        </h4>
      </div>

      <div className="grid grid-cols-2 gap-8 relative z-10">
        {/* Team 1 Stats */}
        <div>
          <div className="mb-4">
            <span className="text-[10px] text-slate-500 font-display font-black uppercase tracking-widest block mb-1">BANS</span>
            <div className="flex gap-1.5 flex-wrap">
              {game.team1Bans.map((ban, idx) => (
                <div key={idx} className="relative group/tooltip">
                  <img
                    src={getChampionImageUrl(ban)}
                    alt={ban}
                    className="w-9 h-9 rounded border border-slate-700 grayscale opacity-60 group-hover/tooltip:grayscale-0 group-hover/tooltip:opacity-100 group-hover/tooltip:border-red-500/50 transition-all duration-300"
                  />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 border border-slate-700 text-slate-200 text-[10px] rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 font-display tracking-wider">
                    {ban}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-[10px] text-cyan-400 font-display font-black uppercase tracking-widest block mb-1">PICKS</span>
            <div className="space-y-1.5">
              {game.team1Picks.map((pick, idx) => (
                <div key={idx} className="flex items-center text-xs text-slate-300 gap-3 group">
                  <span className="w-4 text-slate-700 font-mono text-[10px] group-hover:text-cyan-500 transition-colors">{idx + 1}</span>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <img
                        src={getChampionImageUrl(pick)}
                        alt={pick}
                        className="w-8 h-8 rounded-full border border-cyan-500/30 group-hover:border-cyan-500 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-300"
                      />
                    </div>
                    <span className="font-medium group-hover:text-cyan-200 transition-colors">{pick}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team 2 Stats */}
        <div className="text-right">
          <div className="mb-4">
            <span className="text-[10px] text-slate-500 font-display font-black uppercase tracking-widest block mb-1">BANS</span>
            <div className="flex gap-1.5 flex-wrap justify-end">
              {game.team2Bans.map((ban, idx) => (
                <div key={idx} className="relative group/tooltip">
                  <img
                    src={getChampionImageUrl(ban)}
                    alt={ban}
                    className="w-9 h-9 rounded border border-slate-700 grayscale opacity-60 group-hover/tooltip:grayscale-0 group-hover/tooltip:opacity-100 group-hover/tooltip:border-red-500/50 transition-all duration-300"
                  />
                  <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-slate-900 border border-slate-700 text-slate-200 text-[10px] rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 font-display tracking-wider">
                    {ban}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-[10px] text-purple-400 font-display font-black uppercase tracking-widest block mb-1">PICKS</span>
            <div className="space-y-1.5">
              {game.team2Picks.map((pick, idx) => (
                <div key={idx} className="flex items-center justify-end text-xs text-slate-300 gap-3 group">
                  <div className="flex items-center gap-2">
                    <span className="font-medium group-hover:text-purple-200 transition-colors">{pick}</span>
                    <img
                      src={getChampionImageUrl(pick)}
                      alt={pick}
                      className="w-8 h-8 rounded-full border border-purple-500/30 group-hover:border-purple-500 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.3)] transition-all duration-300"
                    />
                  </div>
                  <span className="w-4 text-slate-700 font-mono text-[10px] text-right group-hover:text-purple-500 transition-colors">{idx + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MatchItem: React.FC<{ match: Match; team1: Team; team2: Team }> = ({ match, team1, team2 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isFinished = match.status === 'finished';

  const handleToggle = () => {
    if (isFinished) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className={`transition-all duration-500 ease-out ${isExpanded ? 'row-span-2' : ''}`}>
      <div
        onClick={handleToggle}
        className={`glass-panel p-6 relative overflow-hidden transition-all duration-300 group
          ${isFinished ? 'cursor-pointer hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]' : 'cursor-default opacity-80'}
        `}
      >
        {/* Glow Effects */}
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/10 blur-[80px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-500"></div>
        <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/10 blur-[80px] rounded-full group-hover:bg-purple-500/20 transition-all duration-500"></div>

        <div className="flex items-center justify-between relative z-10">
          {/* Takım 1 */}
          <div className="flex flex-col items-center w-1/3 group-hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></div>
              <img src={team1.logo} alt={team1.name} className="relative w-20 h-20 rounded-full mb-3 border-2 border-slate-700 shadow-xl object-cover group-hover:border-cyan-500/50 transition-colors" />
              {match.status === 'finished' && (match.score1 || 0) > (match.score2 || 0) && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-slate-950 font-display text-[10px] font-black px-2 py-0.5 rounded shadow-[0_0_10px_rgba(234,179,8,0.5)] animate-pulse uppercase tracking-wider">WIN</div>
              )}
            </div>
            <span className="font-display font-bold text-sm text-center text-slate-200 uppercase tracking-tight line-clamp-1 group-hover:text-cyan-300 transition-colors">{team1.name}</span>
          </div>

          {/* Skor / VS Bölümü */}
          <div className="flex flex-col items-center w-1/3">
            <div className="flex items-center gap-6 mb-2">
              <span className={`text-5xl font-display font-black tabular-nums ${match.status === 'finished'
                ? (match.score1 || 0) > (match.score2 || 0) ? 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'text-slate-600'
                : 'text-slate-700'
                }`}>
                {match.status === 'finished' ? match.score1 : '-'}
              </span>

              <div className="flex flex-col items-center">
                <span className="text-slate-600 font-display font-black text-xs px-2 opacity-50 group-hover:opacity-100 group-hover:text-white transition-all">VS</span>
              </div>

              <span className={`text-5xl font-display font-black tabular-nums ${match.status === 'finished'
                ? (match.score2 || 0) > (match.score1 || 0) ? 'text-purple-400 drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]' : 'text-slate-600'
                : 'text-slate-700'
                }`}>
                {match.status === 'finished' ? match.score2 : '-'}
              </span>
            </div>

            <div className={`mt-2 px-4 py-1 rounded-full text-[10px] font-display font-black uppercase tracking-[0.2em] border backdrop-blur-sm transition-all ${match.status === 'upcoming'
              ? 'border-yellow-500/20 text-yellow-500 bg-yellow-500/5 shadow-[0_0_10px_rgba(234,179,8,0.1)]'
              : 'border-slate-700 text-slate-400 bg-slate-900/50'
              }`}>
              {match.status === 'upcoming' ? 'BEKLENİYOR' : 'TAMAMLANDI'}
            </div>
            <span className="mt-3 text-[10px] text-slate-500 font-bold uppercase tracking-widest">{match.date}</span>
            {isFinished && (
              <span className="mt-2 text-[9px] text-cyan-400 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                {isExpanded ? 'Kapat' : 'Detayları Göster'}
              </span>
            )}
          </div>

          {/* Takım 2 */}
          <div className="flex flex-col items-center w-1/3 group-hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></div>
              <img src={team2.logo} alt={team2.name} className="relative w-20 h-20 rounded-full mb-3 border-2 border-slate-700 shadow-xl object-cover group-hover:border-purple-500/50 transition-colors" />
              {match.status === 'finished' && (match.score2 || 0) > (match.score1 || 0) && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-slate-950 font-display text-[10px] font-black px-2 py-0.5 rounded shadow-[0_0_10px_rgba(234,179,8,0.5)] animate-pulse uppercase tracking-wider">WIN</div>
              )}
            </div>
            <span className="font-display font-bold text-sm text-center text-slate-200 uppercase tracking-tight line-clamp-1 group-hover:text-purple-300 transition-colors">{team2.name}</span>
          </div>
        </div>

        {/* Detaylar Bölümü */}
        {isExpanded && match.games && (
          <div className="mt-6 pt-6 border-t border-white/5 animate-fadeIn">
            {match.games.map(game => (
              <GameDetails key={game.id} game={game} team1={team1} team2={team2} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const FixtureList: React.FC<FixtureListProps> = ({ matches, teams }) => {
  const getTeam = (id: string) => teams.find(t => t.id === id);

  // Maçları turlara göre grupla
  const rounds = Array.from(new Set(matches.map(m => m.round))).sort((a, b) => Number(a) - Number(b));

  return (
    <div className="space-y-16">
      {rounds.map(round => (
        <div key={round} className="animate-fadeIn">
          <div className="flex items-center gap-6 mb-8 relative">
            <h3 className="text-4xl font-display font-black italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase tracking-tighter drop-shadow-sm">
              TUR {round}
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 via-purple-500/30 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {matches
              .filter(m => m.round === round)
              .map(match => {
                const team1 = getTeam(match.team1Id);
                const team2 = getTeam(match.team2Id);
                if (!team1 || !team2) return null;

                return <MatchItem key={match.id} match={match} team1={team1} team2={team2} />;
              })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FixtureList;
