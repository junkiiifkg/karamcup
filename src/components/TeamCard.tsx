
import React from 'react';
import { Team } from '../types';

interface TeamCardProps {
  team: Team;
  onClick: (team: Team) => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ team, onClick }) => {
  return (
    <button
      onClick={() => onClick(team)}
      className="group relative flex flex-col items-center p-6 bg-slate-800/50 border border-slate-700 rounded-xl transition-all hover:bg-slate-700 hover:scale-105 active:scale-95 shadow-lg overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <img
        src={team.logo}
        alt={team.name}
        className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-slate-600 group-hover:border-indigo-500 transition-colors shadow-xl"
      />
      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors uppercase tracking-wider">
        {team.name}
      </h3>
    </button>
  );
};

export default TeamCard;
