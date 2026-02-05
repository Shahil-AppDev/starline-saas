'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Training {
  id: number;
  title: string;
  description: string;
  level: string;
  category: string;
  duration_minutes: number;
  progress?: number;
}

export default function AppTrainingPage() {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      window.location.href = '/join';
      return;
    }

    fetch('https://starline-agency.xyz/api/app/trainings', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    })
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

  const updateProgress = (id: number, progress: number) => {
    const token = localStorage.getItem('auth_token');
    fetch(`https://starline-agency.xyz/api/app/trainings/${id}/progress`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ progress }),
    })
      .then(() => {
        setTrainings(prev => prev.map(t => 
          t.id === id ? { ...t, progress } : t
        ));
      })
      .catch(console.error);
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#e2e8f0]">
      <nav className="border-b border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/app/dashboard" className="text-2xl font-bold gradient-text">STARLINE</Link>
          <div className="flex gap-6 items-center">
            <Link href="/app/dashboard" className="hover:text-[#0ea5e9] transition">Dashboard</Link>
            <Link href="/app/tools" className="hover:text-[#0ea5e9] transition">Outils</Link>
            <Link href="/app/training" className="text-[#0ea5e9]">Formations</Link>
            <Link href="/app/support" className="hover:text-[#0ea5e9] transition">Support</Link>
            <Link href="/app/settings" className="hover:text-[#0ea5e9] transition">Paramètres</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 gradient-text">Mes Formations</h1>
          <p className="text-[#94a3b8]">
            Progresse à ton rythme avec nos formations complètes
          </p>
        </div>

        <div className="flex gap-3 mb-8 flex-wrap">
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
          </div>
        ) : (
          <div className="space-y-6">
            {filteredTrainings.map(training => (
              <div
                key={training.id}
                className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg hover:border-[#0ea5e9] transition"
              >
                <div className="flex items-start justify-between gap-6 mb-4">
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
                    <h3 className="text-2xl font-bold mb-2">{training.title}</h3>
                    <p className="text-[#94a3b8]">{training.description}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#94a3b8]">Progression</span>
                    <span className="text-sm font-bold text-[#0ea5e9]">{training.progress || 0}%</span>
                  </div>
                  <div className="w-full bg-[#1e293b] rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] h-2 rounded-full transition-all"
                      role="progressbar"
                      aria-valuenow={training.progress || 0}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: `${training.progress || 0}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => updateProgress(training.id, Math.min((training.progress || 0) + 25, 100))}
                    className="flex-1 py-2 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    {training.progress === 100 ? 'Revoir' : training.progress ? 'Continuer' : 'Commencer'}
                  </button>
                  {training.progress === 100 && (
                    <button
                      onClick={() => updateProgress(training.id, 0)}
                      className="px-6 py-2 bg-[#1e293b] rounded-lg hover:bg-[#2d3748] transition"
                    >
                      Réinitialiser
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredTrainings.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#94a3b8]">Aucune formation pour ce niveau</p>
          </div>
        )}
      </main>
    </div>
  );
}
