import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="animate-fadeIn">
            <h1 className="text-5xl font-display font-black italic text-center text-white mb-12 uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                Bize Ulaşın
            </h1>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Turnuva ile alakalı */}
                <div className="bg-slate-900/60 p-8 rounded-2xl border border-white/10 backdrop-blur-md hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/20 transition-all duration-500"></div>

                    <div className="relative z-10">
                        <h2 className="text-2xl font-display font-bold text-cyan-400 mb-4 flex items-center gap-3">
                            <i className="fa-solid fa-trophy"></i>
                            TURNUVA İLE ALAKALI
                        </h2>
                        <p className="text-slate-400 mb-6">
                            Platform, kurallar veya turnuva işleyişi hakkında sorularınız mı var?
                        </p>
                        <a
                            href="mailto:karamcup@gmail.com"
                            className="inline-flex items-center gap-3 text-lg font-bold text-white bg-white/5 px-6 py-4 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300 w-full justify-center border border-white/5 hover:border-cyan-400"
                        >
                            <i className="fa-regular fa-envelope"></i>
                            karamcup@gmail.com
                        </a>
                    </div>
                </div>

                {/* Site ile alakalı */}
                <div className="bg-slate-900/60 p-8 rounded-2xl border border-white/10 backdrop-blur-md hover:border-purple-500/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/20 transition-all duration-500"></div>

                    <div className="relative z-10">
                        <h2 className="text-2xl font-display font-bold text-purple-400 mb-4 flex items-center gap-3">
                            <i className="fa-solid fa-code"></i>
                            SİTE İLE ALAKALI
                        </h2>
                        <p className="text-slate-400 mb-6">
                            Teknik sorunlar, bug bildirimleri veya geliştirme önerileri için.
                        </p>
                        <a
                            href="mailto:furkankayragursoy@gmail.com"
                            className="inline-flex items-center gap-3 text-lg font-bold text-white bg-white/5 px-6 py-4 rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 w-full justify-center border border-white/5 hover:border-purple-400"
                        >
                            <i className="fa-regular fa-envelope"></i>
                            furkankayragursoy@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
