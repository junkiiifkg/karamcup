
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

import karamCupBanner from '../assets/karam-cup-banner.png';

const MainLayout: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path
      ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/50 shadow-[0_0_15px_rgba(14,165,233,0.3)]'
      : 'text-slate-400 hover:text-white hover:bg-white/5';
  };

  return (
    <div className="min-h-screen pb-20 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* TURNUVA AFİŞİ */}
      <div className="w-full relative group overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex justify-center py-2">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src={karamCupBanner}
              alt="Karam Cup Afiş"
              className="relative rounded-lg w-full h-auto object-contain max-h-[400px] shadow-2xl"
            />
          </div>
        </div>
      </div>

      <header className="glass-header sticky top-0 z-50 py-4 px-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="text-center md:text-left cursor-pointer group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <h1 className="relative text-4xl font-display font-black italic neon-text uppercase tracking-tighter group-hover:tracking-widest transition-all duration-500">
              Karam Cup
            </h1>
          </Link>

          <nav className="flex bg-slate-950/50 p-1.5 rounded-xl border border-white/10 backdrop-blur-sm">
            <Link
              to="/"
              className={`px-6 py-2 rounded-lg font-display font-bold text-sm transition-all duration-300 border border-transparent ${isActive('/')}`}
            >
              TAKIMLAR
            </Link>
            <Link
              to="/standings"
              className={`px-6 py-2 rounded-lg font-display font-bold text-sm transition-all duration-300 border border-transparent ${isActive('/standings')}`}
            >
              PUAN DURUMU
            </Link>
            <Link
              to="/fixture"
              className={`px-6 py-2 rounded-lg font-display font-bold text-sm transition-all duration-300 border border-transparent ${isActive('/fixture')}`}
            >
              FİKSTÜR
            </Link>
            <Link
              to="/about"
              className={`px-6 py-2 rounded-lg font-display font-bold text-sm transition-all duration-300 border border-transparent ${isActive('/about')}`}
            >
              HAKKIMIZDA
            </Link>
            <Link
              to="/contact"
              className={`px-6 py-2 rounded-lg font-display font-bold text-sm transition-all duration-300 border border-transparent ${isActive('/contact')}`}
            >
              BİZE ULAŞIN
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 mt-12 mb-24 relative z-10">
        <Outlet />
      </main>

      <footer className="relative mt-24 py-12 border-t border-white/5 bg-slate-950/50 backdrop-blur-sm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="flex justify-center items-center gap-8 mb-6">
          <a href="#" className="text-3xl text-slate-500 hover:text-[#5865F2] transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#5865F2]/20 rounded-full" title="Discord">
            <i className="fa-brands fa-discord"></i>
          </a>
          <a href="https://kick.com/karamcup" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all hover:-translate-y-1 drop-shadow-[0_0_10px_rgba(83,252,24,0.4)]" title="Kick">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#53fc18]">
              <path d="M4 3h5v4h2V3h5v4h-2v2h2v4h-2v2h2v4h-2v-4h-2v4H9v-4H7v4H4V3zm5 8h2V9H9v2zm0 4h2v-2H9v2z" />
            </svg>
          </a>
          <a href="https://youtube.com/@karamcup" target="_blank" rel="noopener noreferrer" className="text-3xl text-slate-500 hover:text-[#FF0000] transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#FF0000]/20 rounded-full" title="YouTube">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
        <p className="text-slate-500 font-display font-bold uppercase tracking-[0.3em] text-xs text-center">
          Karam Cup Tournament <span className="text-cyan-500">&copy; 2026</span>
        </p>
      </footer>
    </div>
  );
};

export default MainLayout;
