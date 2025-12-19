
import React from 'react';
import { Team } from '../types';
import { GROUPS } from '../constants';

interface StandingsTableProps {
  teams: Team[];
}

const StandingsTable: React.FC<StandingsTableProps> = ({ teams }) => {
  const renderGroup = (groupName: string, teamIds: string[]) => {
    const groupTeams = teams
      .filter(t => teamIds.includes(t.id))
      .sort((a, b) => {
        // 1. Kriter: Maç Galibiyeti
        if (b.stats.wins !== a.stats.wins) {
          return b.stats.wins - a.stats.wins;
        }
        // 2. Kriter: Harita Averajı (G-M farkı)
        const diffA = a.stats.mapWins - a.stats.mapLosses;
        const diffB = b.stats.mapWins - b.stats.mapLosses;
        return diffB - diffA;
      });

    return (
      <div className="mb-10 animate-fadeIn">
        <h3 className="text-2xl font-black text-indigo-400 mb-4 px-2 uppercase tracking-tighter border-l-4 border-indigo-600 pl-4">{groupName}</h3>
        <div className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-800/40 shadow-xl">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-700/50 text-slate-300 text-xs uppercase tracking-widest">
                <th className="px-6 py-4">Sıra</th>
                <th className="px-6 py-4">Takım</th>
                <th className="px-6 py-4 text-center">OM</th>
                <th className="px-6 py-4 text-center">G</th>
                <th className="px-6 py-4 text-center">M</th>
                <th className="px-6 py-4 text-center">Harita (G-M)</th>
                <th className="px-6 py-4 text-center">Av.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {groupTeams.map((team, index) => {
                const av = team.stats.mapWins - team.stats.mapLosses;
                return (
                  <tr key={team.id} className="hover:bg-slate-700/30 transition-colors group">
                    <td className="px-6 py-4 font-bold text-slate-500 group-hover:text-white transition-colors">#{index + 1}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={team.logo} className="w-8 h-8 rounded-full border border-slate-600" alt="" />
                        <span className="font-bold text-white group-hover:text-indigo-300 transition-colors">{team.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-medium">{team.stats.played}</td>
                    <td className="px-6 py-4 text-center text-green-400 font-black">{team.stats.wins}</td>
                    <td className="px-6 py-4 text-center text-red-400 font-black">{team.stats.losses}</td>
                    <td className="px-6 py-4 text-center font-bold text-indigo-300 whitespace-nowrap">
                      {team.stats.mapWins} - {team.stats.mapLosses}
                    </td>
                    <td className={`px-6 py-4 text-center font-bold ${av > 0 ? 'text-blue-400' : av < 0 ? 'text-orange-400' : 'text-slate-500'}`}>
                      {av > 0 ? `+${av}` : av}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {Object.entries(GROUPS).map(([name, ids]) => (
        <React.Fragment key={name}>
          {renderGroup(name, ids)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StandingsTable;
