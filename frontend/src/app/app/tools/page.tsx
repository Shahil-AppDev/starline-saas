'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
  icon: string;
  download_url: string;
  is_public: boolean;
}

export default function AppToolsPage() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      window.location.href = '/join';
      return;
    }

    fetch('https://starline-agency.xyz/api/app/tools', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    })
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
          <Link href="/app/dashboard" className="text-2xl font-bold gradient-text">STARLINE</Link>
          <div className="flex gap-6 items-center">
            <Link href="/app/dashboard" className="hover:text-[#0ea5e9] transition">Dashboard</Link>
            <Link href="/app/tools" className="text-[#0ea5e9]">Outils</Link>
            <Link href="/app/training" className="hover:text-[#0ea5e9] transition">Formations</Link>
            <Link href="/app/support" className="hover:text-[#0ea5e9] transition">Support</Link>
            <Link href="/app/settings" className="hover:text-[#0ea5e9] transition">Paramètres</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 gradient-text">Mes Outils</h1>
          <p className="text-[#94a3b8]">
            Télécharge et utilise tous les outils pro pour booster tes lives
          </p>
        </div>

        <div className="flex gap-3 mb-8 flex-wrap">
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
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map(tool => (
              <div
                key={tool.id}
                className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg hover:border-[#0ea5e9] transition"
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                <p className="text-[#94a3b8] mb-4 text-sm">{tool.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs px-3 py-1 bg-[#1e293b] rounded-full text-[#0ea5e9]">
                    {tool.category}
                  </span>
                  {!tool.is_public && (
                    <span className="text-xs text-[#a855f7]">🔒 Premium</span>
                  )}
                </div>
                <a
                  href={`https://starline-agency.xyz${tool.download_url}`}
                  download
                  className="block w-full py-2 text-center bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Télécharger
                </a>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredTools.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#94a3b8]">Aucun outil dans cette catégorie</p>
          </div>
        )}
      </main>
    </div>
  );
}
