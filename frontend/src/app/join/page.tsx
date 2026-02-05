'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function JoinPage() {
  const [formData, setFormData] = useState({
    tiktok_handle: '',
    email: '',
    phone: '',
    niche: '',
    goals: '',
    weekly_hours_available: 0,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/join-lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ tiktok_handle: '', email: '', phone: '', niche: '', goals: '', weekly_hours_available: 0 });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#e2e8f0]">
      <nav className="border-b border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">STARLINE</Link>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold gradient-text mb-4">Rejoins Starline</h1>
        <p className="text-[#94a3b8] mb-8">Remplis ce formulaire et notre équipe te contactera sous 48h.</p>

        {status === 'success' && (
          <div className="p-4 bg-green-900/20 border border-green-500 rounded-lg mb-6">
            ✅ Candidature envoyée ! On te contacte très vite.
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 bg-red-900/20 border border-red-500 rounded-lg mb-6">
            ❌ Erreur. Réessaie ou contacte-nous directement.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">TikTok Handle *</label>
            <input
              type="text"
              required
              value={formData.tiktok_handle}
              onChange={(e) => setFormData({ ...formData, tiktok_handle: e.target.value })}
              className="w-full px-4 py-3 bg-[#0f172a] border border-[#1e293b] rounded-lg focus:border-[#0ea5e9] outline-none"
              placeholder="@ton_pseudo"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-[#0f172a] border border-[#1e293b] rounded-lg focus:border-[#0ea5e9] outline-none"
              placeholder="ton@email.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Téléphone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-[#0f172a] border border-[#1e293b] rounded-lg focus:border-[#0ea5e9] outline-none"
              placeholder="+33 6 12 34 56 78"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Niche</label>
            <select
              value={formData.niche}
              onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
              className="w-full px-4 py-3 bg-[#0f172a] border border-[#1e293b] rounded-lg focus:border-[#0ea5e9] outline-none"
            >
              <option value="">Sélectionne ta niche</option>
              <option value="Gaming">Gaming</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Fitness">Fitness</option>
              <option value="Music">Music</option>
              <option value="Tech">Tech</option>
              <option value="Art">Art</option>
              <option value="Other">Autre</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Objectifs</label>
            <textarea
              value={formData.goals}
              onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
              className="w-full px-4 py-3 bg-[#0f172a] border border-[#1e293b] rounded-lg focus:border-[#0ea5e9] outline-none"
              rows={4}
              placeholder="Tes objectifs en tant que créateur..."
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Heures disponibles par semaine</label>
            <input
              type="number"
              min="0"
              value={formData.weekly_hours_available}
              onChange={(e) => setFormData({ ...formData, weekly_hours_available: parseInt(e.target.value) })}
              className="w-full px-4 py-3 bg-[#0f172a] border border-[#1e293b] rounded-lg focus:border-[#0ea5e9] outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition glow-cyan disabled:opacity-50"
          >
            {status === 'loading' ? 'Envoi...' : 'Envoyer ma candidature'}
          </button>
        </form>
      </main>
    </div>
  );
}
