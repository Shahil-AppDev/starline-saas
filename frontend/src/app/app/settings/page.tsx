'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface User {
  name: string;
  email: string;
}

export default function AppSettingsPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      window.location.href = '/join';
      return;
    }

    fetch('https://starline-agency.xyz/api/auth/me', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setUser(data.data);
        setLoading(false);
      })
      .catch(() => {
        localStorage.removeItem('auth_token');
        window.location.href = '/join';
      });
  }, []);

  const handleLogout = () => {
    const token = localStorage.getItem('auth_token');
    fetch('https://starline-agency.xyz/api/auth/logout', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    })
      .finally(() => {
        localStorage.removeItem('auth_token');
        window.location.href = '/';
      });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0e1a] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0ea5e9]"></div>
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
            <Link href="/app/dashboard" className="hover:text-[#0ea5e9] transition">Dashboard</Link>
            <Link href="/app/tools" className="hover:text-[#0ea5e9] transition">Outils</Link>
            <Link href="/app/training" className="hover:text-[#0ea5e9] transition">Formations</Link>
            <Link href="/app/support" className="hover:text-[#0ea5e9] transition">Support</Link>
            <Link href="/app/settings" className="text-[#0ea5e9]">Paramètres</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Paramètres</h1>

        <div className="space-y-6">
          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Informations du compte</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-[#94a3b8]">Nom</label>
                <input
                  type="text"
                  value={user?.name || ''}
                  disabled
                  className="w-full px-4 py-2 bg-[#1e293b] border border-[#2d3748] rounded-lg text-[#64748b]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-[#94a3b8]">Email</label>
                <input
                  type="email"
                  value={user?.email || ''}
                  disabled
                  className="w-full px-4 py-2 bg-[#1e293b] border border-[#2d3748] rounded-lg text-[#64748b]"
                />
              </div>
              <p className="text-sm text-[#64748b]">
                Pour modifier tes informations, contacte le support.
              </p>
            </div>
          </section>

          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Abonnement</h2>
            <div className="flex items-center justify-between p-4 bg-[#1e293b] rounded-lg mb-4">
              <div>
                <div className="font-bold text-lg">Plan Starter</div>
                <p className="text-sm text-[#94a3b8]">Gratuit • Accès aux outils publics</p>
              </div>
              <span className="px-4 py-2 bg-[#10b981]/10 text-[#10b981] rounded-lg text-sm font-medium">
                Actif
              </span>
            </div>
            <Link
              href="/pricing"
              className="block w-full py-3 text-center bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition"
            >
              Passer à Pro ou Elite
            </Link>
          </section>

          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Préférences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[#1e293b] rounded-lg">
                <div>
                  <div className="font-bold">Notifications email</div>
                  <p className="text-sm text-[#94a3b8]">Recevoir les nouveautés et mises à jour</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-[#2d3748] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0ea5e9]"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-4 bg-[#1e293b] rounded-lg">
                <div>
                  <div className="font-bold">Mode sombre</div>
                  <p className="text-sm text-[#94a3b8]">Interface en mode sombre (recommandé)</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked disabled />
                  <div className="w-11 h-6 bg-[#2d3748] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0ea5e9]"></div>
                </label>
              </div>
            </div>
          </section>

          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#ef4444]">Zone de danger</h2>
            <div className="space-y-4">
              <div className="p-4 bg-[#1e293b] rounded-lg">
                <div className="font-bold mb-2">Déconnexion</div>
                <p className="text-sm text-[#94a3b8] mb-4">
                  Te déconnecter de ton compte sur cet appareil
                </p>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 bg-[#2d3748] rounded-lg hover:bg-[#374151] transition"
                >
                  Se déconnecter
                </button>
              </div>
              <div className="p-4 bg-[#1e293b] rounded-lg">
                <div className="font-bold mb-2 text-[#ef4444]">Supprimer mon compte</div>
                <p className="text-sm text-[#94a3b8] mb-4">
                  Suppression définitive de ton compte et de toutes tes données
                </p>
                <button
                  onClick={() => alert('Pour supprimer ton compte, contacte le support à privacy@starline-agency.xyz')}
                  className="px-6 py-2 bg-[#ef4444]/10 text-[#ef4444] border border-[#ef4444]/30 rounded-lg hover:bg-[#ef4444]/20 transition"
                >
                  Demander la suppression
                </button>
              </div>
            </div>
          </section>

          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Liens utiles</h2>
            <div className="space-y-2">
              <Link href="/legal" className="block text-[#0ea5e9] hover:underline">
                Mentions légales & Confidentialité
              </Link>
              <Link href="/about" className="block text-[#0ea5e9] hover:underline">
                À propos de Starline
              </Link>
              <Link href="/app/support" className="block text-[#0ea5e9] hover:underline">
                Contacter le support
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
