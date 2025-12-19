
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TeamCard from '../components/TeamCard';
import { Team } from '../types';

interface HomePageProps {
    teams: Team[];
}

const HomePage: React.FC<HomePageProps> = ({ teams }) => {
    const navigate = useNavigate();

    const handleTeamClick = (team: Team) => {
        navigate(`/team/${team.id}`);
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fadeIn">
            {teams.map((team) => (
                <TeamCard key={team.id} team={team} onClick={handleTeamClick} />
            ))}
        </div>
    );
};

export default HomePage;
