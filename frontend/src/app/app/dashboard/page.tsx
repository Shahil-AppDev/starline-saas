'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface DashboardData {
  user: {
    name: string;
    email: string;
  };
  profile: {
    tiktok_handle: string;
    niche: string;
    total_live_minutes: number;
    diamonds_earned: number;
  };
  stats: {
    tools_accessed: number;
    trainings_completed: number;
    support_tickets: number;
  };
}

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      window.location.href = '/join';
      return;
    }

    fetch('https://starline-agency.xyz/api/app/dashboard', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setData(data.data);
        setLoading(false);
      })
      .catch(() => {
        localStorage.removeItem('auth_token');
        window.location.href = '/join';
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0e1a] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0ea5e9]"></div>
          <p className="mt-4 text-[#94a3b8]">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#e2e8f0]">
      <nav className="border-b border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/app/dashboard" className="text-2xl font-bold gradient-text">STARLINE</Link>
          <div className="flex gap-6 items-center">
            <Link href="/app/dashboard" className="text-[#0ea5e9]">Dashboard</Link>
            <Link href="/app/tools" className="hover:text-[#0ea5e9] transition">Outils</Link>
            <Link href="/app/training" className="hover:text-[#0ea5e9] transition">Formations</Link>
            <Link href="/app/support" className="hover:text-[#0ea5e9] transition">Support</Link>
            <Link href="/app/settings" className="hover:text-[#0ea5e9] transition">Paramètres</Link>
            <button
              onClick={() => {
                localStorage.removeItem('auth_token');
                window.location.href = '/';
              }}
              className="px-4 py-2 bg-[#1e293b] rounded-lg hover:bg-[#2d3748] transition"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Bienvenue, <span className="gradient-text">{data?.user.name}</span>
          </h1>
          <p className="text-[#94a3b8]">
            {data?.profile.tiktok_handle} • {data?.profile.niche || 'Créateur'}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <div className="text-3xl mb-2">⏱️</div>
            <div className="text-3xl font-bold text-[#0ea5e9] mb-1">
              {data?.profile.total_live_minutes || 0}
            </div>
            <p className="text-[#94a3b8] text-sm">Minutes de live</p>
          </div>

          <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <div className="text-3xl mb-2">💎</div>
            <div className="text-3xl font-bold text-[#a855f7] mb-1">
              {data?.profile.diamonds_earned?.toLocaleString() || 0}
            </div>
            <p className="text-[#94a3b8] text-sm">Diamonds gagnés</p>
          </div>

          <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <div className="text-3xl mb-2">🎬</div>
            <div className="text-3xl font-bold text-[#10b981] mb-1">
              {data?.stats.tools_accessed || 0}
            </div>
            <p className="text-[#94a3b8] text-sm">Outils utilisés</p>
          </div>

          <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <div className="text-3xl mb-2">📚</div>
            <div className="text-3xl font-bold text-[#ec4899] mb-1">
              {data?.stats.trainings_completed || 0}
            </div>
            <p className="text-[#94a3b8] text-sm">Formations terminées</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>🚀</span> Accès rapide
            </h2>
            <div className="space-y-3">
              <Link
                href="/app/tools"
                className="block p-4 bg-[#1e293b] rounded-lg hover:bg-[#2d3748] transition"
              >
                <div className="font-bold mb-1">Télécharger des outils</div>
                <p className="text-sm text-[#94a3b8]">Pack OBS, TikFinity, Streamer.bot...</p>
              </Link>
              <Link
                href="/app/training"
                className="block p-4 bg-[#1e293b] rounded-lg hover:bg-[#2d3748] transition"
              >
                <div className="font-bold mb-1">Continuer une formation</div>
                <p className="text-sm text-[#94a3b8]">Reprends là où tu t&apos;es arrêté</p>
              </Link>
              <Link
                href="/app/support"
                className="block p-4 bg-[#1e293b] rounded-lg hover:bg-[#2d3748] transition"
              >
                <div className="font-bold mb-1">Créer un ticket</div>
                <p className="text-sm text-[#94a3b8]">Besoin d&apos;aide ? On est là</p>
              </Link>
            </div>
          </div>

          <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>📢</span> Nouveautés
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-[#1e293b] rounded-lg">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎉</span>
                  <div>
                    <div className="font-bold mb-1">Nouveau : Chat Overlay Animated</div>
                    <p className="text-sm text-[#94a3b8]">Affiche les messages de ton chat avec style</p>
                    <span className="text-xs text-[#0ea5e9]">Il y a 2 jours</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-[#1e293b] rounded-lg">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <div className="font-bold mb-1">Formation : Monétisation Avancée</div>
                    <p className="text-sm text-[#94a3b8]">Maximise tes revenus TikTok Live</p>
                    <span className="text-xs text-[#0ea5e9]">Il y a 5 jours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-gradient-to-r from-[#0f172a] to-[#1e293b] border border-[#1e293b] rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-3">Besoin d&apos;aide ?</h2>
          <p className="text-[#94a3b8] mb-6">
            Notre équipe est disponible 24/7 pour répondre à tes questions
          </p>
          <Link
            href="/app/support"
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition"
          >
            Contacter le support
          </Link>
        </div>
      </main>
    </div>
  );
}
