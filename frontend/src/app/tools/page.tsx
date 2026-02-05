'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Tool {
  id: number;
  name: string;
  slug: string;
  description: string;
  category: string;
  icon: string;
  is_public: boolean;
}

export default function ToolsPage() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://starline-agency.xyz/api/public/tools')
      .then(res => res.json())
      .then(data => {
        setTools(data.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categories = ['all', ...Array.from(new Set(tools.map(t => t.category)))];
  const filteredTools = filter === 'all' ? tools : tools.filter(t => t.category === filter);

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#e2e8f0]">
      <nav className="border-b border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">STARLINE</Link>
          <div className="flex gap-6">
            <Link href="/tools" className="text-[#0ea5e9]">Outils</Link>
            <Link href="/training" className="hover:text-[#0ea5e9] transition">Formations</Link>
            <Link href="/pricing" className="hover:text-[#0ea5e9] transition">Tarifs</Link>
            <Link href="/about" className="hover:text-[#0ea5e9] transition">À propos</Link>
            <Link href="/join" className="px-4 py-2 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition">Rejoindre</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Outils Pro</span>
          </h1>
          <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
            Pack complet d'outils professionnels pour booster tes lives TikTok. OBS, TikFinity, Streamer.bot et plus encore.
          </p>
        </div>

        <div className="flex gap-3 mb-12 flex-wrap justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                filter === cat
                  ? 'bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] text-white'
                  : 'bg-[#0f172a] border border-[#1e293b] text-[#94a3b8] hover:border-[#0ea5e9]'
              }`}
            >
              {cat === 'all' ? 'Tous' : cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0ea5e9]"></div>
            <p className="mt-4 text-[#94a3b8]">Chargement des outils...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map(tool => (
              <div
                key={tool.id}
                className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg hover:border-[#0ea5e9] transition group"
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#0ea5e9] transition">
                  {tool.name}
                </h3>
                <p className="text-[#94a3b8] mb-4 line-clamp-2">{tool.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs px-3 py-1 bg-[#1e293b] rounded-full text-[#0ea5e9]">
                    {tool.category}
                  </span>
                  {tool.is_public ? (
                    <span className="text-xs text-[#10b981]">✓ Public</span>
                  ) : (
                    <span className="text-xs text-[#f59e0b]">🔒 Premium</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredTools.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#94a3b8] text-lg">Aucun outil trouvé dans cette catégorie.</p>
          </div>
        )}

        <div className="mt-20 p-8 bg-gradient-to-r from-[#0f172a] to-[#1e293b] border border-[#1e293b] rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à accéder aux outils ?</h2>
          <p className="text-[#94a3b8] mb-6 max-w-2xl mx-auto">
            Rejoins Starline Creator Hub et accède immédiatement à tous les outils publics. Les outils premium sont réservés aux créateurs actifs.
          </p>
          <Link
            href="/join"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition glow-cyan"
          >
            Devenir Créateur
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
