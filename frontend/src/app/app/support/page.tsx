'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Ticket {
  id: number;
  subject: string;
  message: string;
  status: string;
  created_at: string;
}

export default function AppSupportPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadTickets();
  }, []);

  const loadTickets = () => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      window.location.href = '/join';
      return;
    }

    fetch('https://starline-agency.xyz/api/app/support', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setTickets(data.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const token = localStorage.getItem('auth_token');
    try {
      await fetch('https://starline-agency.xyz/api/app/support', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setFormData({ subject: '', message: '' });
      setShowForm(false);
      loadTickets();
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'text-[#0ea5e9] bg-[#0ea5e9]/10';
      case 'in_progress': return 'text-[#f59e0b] bg-[#f59e0b]/10';
      case 'resolved': return 'text-[#10b981] bg-[#10b981]/10';
      case 'closed': return 'text-[#64748b] bg-[#64748b]/10';
      default: return 'text-[#94a3b8] bg-[#94a3b8]/10';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'open': return 'Ouvert';
      case 'in_progress': return 'En cours';
      case 'resolved': return 'Résolu';
      case 'closed': return 'Fermé';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#e2e8f0]">
      <nav className="border-b border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/app/dashboard" className="text-2xl font-bold gradient-text">STARLINE</Link>
          <div className="flex gap-6 items-center">
            <Link href="/app/dashboard" className="hover:text-[#0ea5e9] transition">Dashboard</Link>
            <Link href="/app/tools" className="hover:text-[#0ea5e9] transition">Outils</Link>
            <Link href="/app/training" className="hover:text-[#0ea5e9] transition">Formations</Link>
            <Link href="/app/support" className="text-[#0ea5e9]">Support</Link>
            <Link href="/app/settings" className="hover:text-[#0ea5e9] transition">Paramètres</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 gradient-text">Support</h1>
            <p className="text-[#94a3b8]">
              Notre équipe est là pour t&apos;aider. Temps de réponse moyen : moins de 24h
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition"
          >
            {showForm ? 'Annuler' : 'Nouveau ticket'}
          </button>
        </div>

        {showForm && (
          <div className="mb-8 p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-xl font-bold mb-4">Créer un ticket</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Sujet</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 bg-[#1e293b] border border-[#2d3748] rounded-lg focus:border-[#0ea5e9] focus:outline-none"
                  placeholder="Ex: Problème avec OBS Pack"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 bg-[#1e293b] border border-[#2d3748] rounded-lg focus:border-[#0ea5e9] focus:outline-none h-32 resize-none"
                  placeholder="Décris ton problème en détail..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
              >
                {submitting ? 'Envoi...' : 'Envoyer le ticket'}
              </button>
            </form>
          </div>
        )}

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0ea5e9]"></div>
          </div>
        ) : tickets.length > 0 ? (
          <div className="space-y-4">
            {tickets.map(ticket => (
              <div
                key={ticket.id}
                className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg hover:border-[#0ea5e9] transition"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{ticket.subject}</h3>
                    <p className="text-[#94a3b8] mb-3">{ticket.message}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                    {getStatusLabel(ticket.status)}
                  </span>
                </div>
                <div className="text-sm text-[#64748b]">
                  Créé le {new Date(ticket.created_at).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">💬</div>
            <h3 className="text-2xl font-bold mb-2">Aucun ticket</h3>
            <p className="text-[#94a3b8] mb-6">
              Tu n&apos;as pas encore créé de ticket. Besoin d&apos;aide ?
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition"
            >
              Créer mon premier ticket
            </button>
          </div>
        )}

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-sm text-[#94a3b8] mb-2">Pour les questions générales</p>
            <a href="mailto:support@starline-agency.xyz" className="text-[#0ea5e9] hover:underline text-sm">
              support@starline-agency.xyz
            </a>
          </div>
          <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-bold mb-2">Discord</h3>
            <p className="text-sm text-[#94a3b8] mb-2">Communauté active 24/7</p>
            <a href="#" className="text-[#0ea5e9] hover:underline text-sm">
              Rejoindre le Discord
            </a>
          </div>
          <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-bold mb-2">Documentation</h3>
            <p className="text-sm text-[#94a3b8] mb-2">Guides et tutoriels</p>
            <a href="#" className="text-[#0ea5e9] hover:underline text-sm">
              Voir la doc
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
