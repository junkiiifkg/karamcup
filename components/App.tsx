
import React, { useState, useMemo } from 'react';
import { Team, Match, TeamStats } from './types';
import { TEAMS, MATCHES } from './constants';
import TeamCard from './components/TeamCard';
import StandingsTable from './components/StandingsTable';
import FixtureList from './components/FixtureList';

type ViewMode = 'teams' | 'standings' | 'fixture' | 'team-detail';

const App: React.FC = () => {
  const [view, setView] = useState<ViewMode>('teams');
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);

  // OTOMATİK HESAPLAMA MANTIĞI
  const enrichedTeams = useMemo(() => {
    return TEAMS.map(team => {
      const stats: TeamStats = {
        played: 0,
        wins: 0,
        losses: 0,
        mapWins: 0,
        mapLosses: 0
      };

      MATCHES.forEach(match => {
        if (match.status === 'finished') {
          const s1 = match.score1 || 0;
          const s2 = match.score2 || 0;

          if (match.team1Id === team.id) {
            stats.played += 1;
            stats.mapWins += s1;
            stats.mapLosses += s2;
            if (s1 > s2) stats.wins += 1;
            else stats.losses += 1;
          } else if (match.team2Id === team.id) {
            stats.played += 1;
            stats.mapWins += s2;
            stats.mapLosses += s1;
            if (s2 > s1) stats.wins += 1;
            else stats.losses += 1;
          }
        }
      });

      return { ...team, stats };
    });
  }, [MATCHES]); // Maçlar değiştiğinde her yer otomatik güncellenir

  const selectedTeam = useMemo(() => 
    enrichedTeams.find(t => t.id === selectedTeamId) || null
  , [selectedTeamId, enrichedTeams]);

  const handleTeamClick = (team: Team) => {
    setSelectedTeamId(team.id);
    setView('team-detail');
  };

  return (
    <div className="min-h-screen pb-20 bg-[#0f172a]">
      {/* TURNUVA AFİŞİ */}
      <div className="w-full bg-slate-950 flex justify-center border-b border-slate-800 shadow-2xl overflow-hidden">
        <div className="max-w-4xl w-full relative group">
          <img 
            src="https://api.screenshotone.com/take?url=https%3A%2F%2Ffiles.oaiusercontent.com%2Ffile-X8Nl06Vw6Rntu84mG0L7Y97o%3Fse%3D2024-10-26T12%253A15%253A23Z%26sp%3Dr%26sv%3D2024-08-04%26sr%3Db%26rscc%3Dmax-age%253D604800%252C%2&full_page=true&access_key=YOUR_ACCESS_KEY" 
            alt="Karam Cup Afiş" 
            className="w-full h-auto object-contain max-h-[500px] transition-transform duration-1000 group-hover:scale-[1.01]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://files.oaiusercontent.com/file-X8Nl06Vw6Rntu84mG0L7Y97o?se=2024-10-26T12%3A15%3A23Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable&rscd=attachment%3B%20filename%3De2e09848-18e3-4700-9889-498c8c6f663c.webp&sig=6iT0uP/LAtv0Wn0tO6W4P6/l3P6Bv6L6X0V6T6R6N6l06Vw6Rntu84mG0L7Y97o%3D";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f172a]/40 pointer-events-none"></div>
        </div>
      </div>

      <header className="bg-slate-900/90 border-b border-slate-800 py-6 px-6 sticky top-0 z-50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left cursor-pointer transition-all active:scale-95 group" onClick={() => setView('teams')}>
            <h1 className="text-4xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-400 to-indigo-500 uppercase tracking-tighter group-hover:tracking-normal transition-all duration-300">
              Karam Cup
            </h1>
          </div>
          
          <nav className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 shadow-2xl">
            <button 
              onClick={() => setView('teams')}
              className={`px-6 py-2 rounded-lg font-bold text-sm transition-all duration-300 ${view === 'teams' || view === 'team-detail' ? 'bg-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]' : 'text-slate-500 hover:text-white'}`}
            >
              Takımlar
            </button>
            <button 
              onClick={() => setView('standings')}
              className={`px-6 py-2 rounded-lg font-bold text-sm transition-all duration-300 ${view === 'standings' ? 'bg-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]' : 'text-slate-500 hover:text-white'}`}
            >
              Puan Durumu
            </button>
            <button 
              onClick={() => setView('fixture')}
              className={`px-6 py-2 rounded-lg font-bold text-sm transition-all duration-300 ${view === 'fixture' ? 'bg-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]' : 'text-slate-500 hover:text-white'}`}
            >
              Fikstür
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 mt-12">
        {view === 'teams' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fadeIn">
            {enrichedTeams.map((team) => (
              <TeamCard key={team.id} team={team} onClick={handleTeamClick} />
            ))}
          </div>
        )}

        {view === 'standings' && <StandingsTable teams={enrichedTeams} />}
        {view === 'fixture' && <FixtureList matches={MATCHES} teams={enrichedTeams} />}

        {view === 'team-detail' && selectedTeam && (
          <div className="animate-slideUp">
            <button 
              onClick={() => setView('teams')}
              className="mb-8 flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors group"
            >
              <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i> Turnuvaya Geri Dön
            </button>
            
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12 p-8 bg-slate-800/40 rounded-2xl border border-slate-700 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                 <i className="fa-solid fa-trophy text-9xl text-indigo-500"></i>
              </div>
              <img src={selectedTeam.logo} className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-indigo-500 shadow-2xl relative z-10" alt="" />
              <div className="text-center md:text-left relative z-10">
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-2">{selectedTeam.name}</h2>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Coach</span>
                    <span className="text-xl font-bold text-indigo-400">
                      {selectedTeam.coach ? `${selectedTeam.coach.name} "${selectedTeam.coach.nickname}"` : 'Belirtilmedi'}
                    </span>
                  </div>
                  <div className="flex flex-col border-l border-slate-700 pl-6">
                    <span className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Maç Skoru</span>
                    <span className="text-xl font-bold text-white">{selectedTeam.stats.wins}G - {selectedTeam.stats.losses}M</span>
                  </div>
                  <div className="flex flex-col border-l border-slate-700 pl-6">
                    <span className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Harita Skoru</span>
                    <span className="text-xl font-bold text-white">{selectedTeam.stats.mapWins} - {selectedTeam.stats.mapLosses}</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-6 text-slate-300 uppercase tracking-widest border-b border-slate-700 pb-2 flex items-center gap-2">
              <i className="fa-solid fa-users text-indigo-500"></i> Oyuncu Kadrosu
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedTeam.players.length > 0 ? selectedTeam.players.map(player => (
                <div key={player.id} className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 hover:border-indigo-500/50 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">{player.name}</span>
                    <div className="text-2xl font-black text-white group-hover:text-indigo-300 transition-colors tracking-tight">{player.nickname}</div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {player.favoriteChampions.map(champ => (
                        <span key={champ} className="text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded-md font-bold uppercase tracking-tight">
                          {champ}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a 
                    href={player.opggUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all w-full md:w-auto justify-center shadow-lg"
                  >
                    OP.GG <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                  </a>
                </div>
              )) : (
                <div className="col-span-full py-20 text-center text-slate-500 bg-slate-800/20 rounded-xl border-2 border-dashed border-slate-700">
                  <i className="fa-solid fa-user-slash text-4xl mb-4 opacity-20"></i>
                  <p className="font-medium italic">Oyuncu verileri henüz paylaşılmadı.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="mt-24 py-12 border-t border-slate-800 text-center">
        <div className="flex justify-center items-center gap-8 mb-6">
           <a href="#" className="text-2xl hover:text-indigo-400 transition-all hover:-translate-y-1" title="Discord">
              <i className="fa-brands fa-discord"></i>
           </a>
           <a href="https://kick.com/karamcup" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all hover:-translate-y-1" title="Kick">
              {/* Kick Custom SVG Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#53fc18]">
                <path d="M4 3h5v4h2V3h5v4h-2v2h2v4h-2v2h2v4h-2v-4h-2v4H9v-4H7v4H4V3zm5 8h2V9H9v2zm0 4h2v-2H9v2z" />
              </svg>
           </a>
           <a href="https://youtube.com/@karamcup" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-red-500 transition-all hover:-translate-y-1" title="YouTube">
              <i className="fa-brands fa-youtube"></i>
           </a>
        </div>
        <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">Karam Cup Tournament &copy; 2026</p>
      </footer>
    </div>
  );
};

export default App;
