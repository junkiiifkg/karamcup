
import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TEAMS, MATCHES } from './src/constants';
import { TeamStats } from './src/types';
import MainLayout from './src/layouts/MainLayout';
import HomePage from './src/pages/HomePage';
import StandingsPage from './src/pages/StandingsPage';
import FixturePage from './src/pages/FixturePage';
import TeamDetailPage from './src/pages/TeamDetailPage';
import AboutPage from './src/pages/AboutPage';
import ContactPage from './src/pages/ContactPage';

const App: React.FC = () => {
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
  }, []); // MATCHES sabiti değişmeyeceği için boş bağımlılık dizisi veya sadece []

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage teams={enrichedTeams} />} />
          <Route path="standings" element={<StandingsPage teams={enrichedTeams} />} />
          <Route path="fixture" element={<FixturePage matches={MATCHES} teams={enrichedTeams} />} />
          <Route path="team/:id" element={<TeamDetailPage teams={enrichedTeams} />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          {/* Catch all - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
