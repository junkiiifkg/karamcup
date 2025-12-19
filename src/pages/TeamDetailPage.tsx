
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Team } from '../types';

interface TeamDetailPageProps {
    teams: Team[];
}

const TeamDetailPage: React.FC<TeamDetailPageProps> = ({ teams }) => {
    const { id } = useParams<{ id: string }>();

    const selectedTeam = useMemo(() =>
        teams.find(t => t.id === id) || null
        , [id, teams]);

    if (!selectedTeam) {
        return <div className="text-white text-center mt-20">Takım bulunamadı.</div>;
    }

    return (
        <div className="animate-slideUp">
            <Link
                to="/"
                className="mb-8 flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors group"
            >
                <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i> Turnuvaya Geri Dön
            </Link>

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
    );
};

export default TeamDetailPage;
