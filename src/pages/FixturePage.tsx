
import React from 'react';
import FixtureList from '../components/FixtureList';
import { Team, Match } from '../types';

interface FixturePageProps {
    matches: Match[];
    teams: Team[];
}

const FixturePage: React.FC<FixturePageProps> = ({ matches, teams }) => {
    return <FixtureList matches={matches} teams={teams} />;
};

export default FixturePage;
