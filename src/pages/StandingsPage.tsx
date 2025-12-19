
import React from 'react';
import StandingsTable from '../components/StandingsTable';
import { Team } from '../types';

interface StandingsPageProps {
    teams: Team[];
}

const StandingsPage: React.FC<StandingsPageProps> = ({ teams }) => {
    return <StandingsTable teams={teams} />;
};

export default StandingsPage;
