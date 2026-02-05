import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#e2e8f0]">
      <nav className="border-b border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold gradient-text">STARLINE</h1>
          <div className="flex gap-6">
            <Link href="/join" className="hover:text-[#0ea5e9] transition">Rejoindre</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <h2 className="text-6xl font-bold">
            <span className="gradient-text">Creator Hub</span>
          </h2>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            Rejoins l'élite des créateurs TikTok Live. Outils pro, formations exclusives, support 24/7.
          </p>
          
          <div className="flex gap-4 justify-center pt-8">
            <Link 
              href="/join" 
              className="px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition glow-cyan"
            >
              Devenir Créateur
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-[#0ea5e9]">🎬 Outils Pro</h3>
            <p className="text-[#94a3b8]">Pack OBS, TikFinity presets, Streamer.bot actions et plus.</p>
          </div>
          <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-[#a855f7]">📚 Formations Elite</h3>
            <p className="text-[#94a3b8]">Starter, Pro, Elite. De zéro à 100k followers.</p>
          </div>
          <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-[#ec4899]">💎 Support 24/7</h3>
            <p className="text-[#94a3b8]">Équipe dédiée, tickets prioritaires, coaching perso.</p>
          </div>
        </div>
      </main>

      <footer className="border-t border-[#1e293b] mt-20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-[#64748b]">
          <p>&copy; 2026 Starline Agency. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
