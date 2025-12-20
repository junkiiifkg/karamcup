import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] animate-fadeIn">
            <div className="bg-slate-900/50 p-12 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl text-center max-w-2xl w-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 pointer-events-none"></div>

                <h1 className="text-4xl font-display font-black italic text-white mb-6 uppercase tracking-wider drop-shadow-lg">
                    Hakkımızda
                </h1>

                <p className="text-xl text-slate-300 font-medium leading-relaxed">
                    Hakkımızda kısmı daha hazır değildir.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
