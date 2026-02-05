'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Training {
  id: number;
  title: string;
  slug: string;
  description: string;
  level: string;
  category: string;
  duration_minutes: number;
  is_public: boolean;
}

export default function TrainingPage() {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://starline-agency.xyz/api/public/trainings')
      .then(res => res.json())
      .then(data => {
        setTrainings(data.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const levels = ['all', 'starter', 'pro', 'elite'];
  const filteredTrainings = filter === 'all' ? trainings : trainings.filter(t => t.level === filter);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'starter': return 'text-[#10b981]';
      case 'pro': return 'text-[#0ea5e9]';
      case 'elite': return 'text-[#a855f7]';
      default: return 'text-[#94a3b8]';
    }
  };

  const getLevelBg = (level: string) => {
    switch (level) {
      case 'starter': return 'bg-[#10b981]/10 border-[#10b981]/30';
      case 'pro': return 'bg-[#0ea5e9]/10 border-[#0ea5e9]/30';
      case 'elite': return 'bg-[#a855f7]/10 border-[#a855f7]/30';
      default: return 'bg-[#1e293b]';
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#e2e8f0]">
      <nav className="border-b border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">STARLINE</Link>
          <div className="flex gap-6">
            <Link href="/tools" className="hover:text-[#0ea5e9] transition">Outils</Link>
            <Link href="/training" className="text-[#0ea5e9]">Formations</Link>
            <Link href="/pricing" className="hover:text-[#0ea5e9] transition">Tarifs</Link>
            <Link href="/about" className="hover:text-[#0ea5e9] transition">À propos</Link>
            <Link href="/join" className="px-4 py-2 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition">Rejoindre</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Formations Elite</span>
          </h1>
          <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
            De zéro à 100k followers. Formations complètes pour maîtriser TikTok Live, de la technique à la monétisation.
          </p>
        </div>

        <div className="flex gap-3 mb-12 flex-wrap justify-center">
          {levels.map(level => (
            <button
              key={level}
              onClick={() => setFilter(level)}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                filter === level
                  ? 'bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] text-white'
                  : 'bg-[#0f172a] border border-[#1e293b] text-[#94a3b8] hover:border-[#0ea5e9]'
              }`}
            >
              {level === 'all' ? 'Tous' : level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0ea5e9]"></div>
            <p className="mt-4 text-[#94a3b8]">Chargement des formations...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredTrainings.map(training => (
              <div
                key={training.id}
                className={`p-6 bg-[#0f172a] border rounded-lg hover:border-[#0ea5e9] transition ${getLevelBg(training.level)}`}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs px-3 py-1 bg-[#1e293b] rounded-full font-medium ${getLevelColor(training.level)}`}>
                        {training.level.toUpperCase()}
                      </span>
                      <span className="text-xs px-3 py-1 bg-[#1e293b] rounded-full text-[#94a3b8]">
                        {training.category}
                      </span>
                      <span className="text-xs text-[#64748b]">
                        ⏱️ {training.duration_minutes} min
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 hover:text-[#0ea5e9] transition">
                      {training.title}
                    </h3>
                    <p className="text-[#94a3b8] mb-4">{training.description}</p>
                  </div>
                  <div className="text-right">
                    {training.is_public ? (
                      <span className="text-sm text-[#10b981] font-medium">✓ Gratuit</span>
                    ) : (
                      <span className="text-sm text-[#f59e0b] font-medium">🔒 Premium</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredTrainings.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#94a3b8] text-lg">Aucune formation trouvée pour ce niveau.</p>
          </div>
        )}

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-[#10b981]">🌱 Starter</h3>
            <p className="text-[#94a3b8] mb-4">Débute sur TikTok Live avec les bases essentielles. Setup, premiers lives, engagement.</p>
            <p className="text-2xl font-bold text-[#10b981]">Gratuit</p>
          </div>
          <div className="p-6 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-[#0ea5e9]">⚡ Pro</h3>
            <p className="text-[#94a3b8] mb-4">Passe au niveau supérieur. Outils avancés, automatisation, stratégies de croissance.</p>
            <p className="text-2xl font-bold text-[#0ea5e9]">Premium</p>
          </div>
          <div className="p-6 bg-[#a855f7]/10 border border-[#a855f7]/30 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-[#a855f7]">💎 Elite</h3>
            <p className="text-[#94a3b8] mb-4">Monétisation avancée, analytics, business. Deviens un créateur top-tier.</p>
            <p className="text-2xl font-bold text-[#a855f7]">Premium+</p>
          </div>
        </div>

        <div className="mt-20 p-8 bg-gradient-to-r from-[#0f172a] to-[#1e293b] border border-[#1e293b] rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à te former ?</h2>
          <p className="text-[#94a3b8] mb-6 max-w-2xl mx-auto">
            Rejoins Starline Creator Hub et accède aux formations Starter gratuitement. Upgrade vers Pro ou Elite pour débloquer tout le contenu.
          </p>
          <Link
            href="/join"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition glow-cyan"
          >
            Commencer maintenant
          </Link>
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
