import SocialMediaRain from '@/components/SocialMediaRain';
import Link from 'next/link';

const TIKTOK_APPLY_URL = "https://inapp.tiktokv.com/falcon/live_backstage/page/agency_detail/index.html?source=video&agency_scout_source=video_leads&title=Apply%20to%20join&ttba_uid=6886916494790444037";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#e2e8f0] relative overflow-hidden">
      <SocialMediaRain />
      <nav className="border-b border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">STARLINE</Link>
          <div className="flex gap-6 items-center">
            <Link href="/tools" className="hover:text-[#0ea5e9] transition">Outils</Link>
            <Link href="/training" className="hover:text-[#0ea5e9] transition">Formations</Link>
            <Link href="/pricing" className="hover:text-[#0ea5e9] transition">Tarifs</Link>
            <Link href="/about" className="hover:text-[#0ea5e9] transition">À propos</Link>
            <Link href="/join" className="px-4 py-2 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition">Rejoindre</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <section className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
          <div className="inline-block px-6 py-2 bg-[#0ea5e9]/20 border border-[#0ea5e9] rounded-full text-sm font-bold mb-6">
            🎉 100% GRATUIT POUR LES CRÉATEURS
          </div>
          <h1 className="text-6xl font-bold mb-6">
            <span className="gradient-text">Starline Creator Hub</span>
          </h1>
          <p className="text-2xl text-[#94a3b8] mb-8 max-w-3xl mx-auto">
            La plateforme tout-en-un pour les créateurs TikTok. Outils pro, formations exclusives et communauté active. Entièrement gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link 
              href="/join" 
              className="px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition glow-cyan text-lg"
            >
              Devenir Créateur
            </Link>
            <a
              href={TIKTOK_APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-[#0ea5e9] text-[#0ea5e9] rounded-lg font-semibold hover:bg-[#0ea5e9] hover:text-white transition text-lg"
            >
              Apply via TikTok
            </a>
          </div>
        </section>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 bg-[#0f172a] border border-[#1e293b] rounded-lg hover:border-[#0ea5e9] transition group">
            <div className="text-4xl mb-4">🎬</div>
            <h3 className="text-2xl font-bold mb-3 text-[#0ea5e9] group-hover:text-[#0ea5e9]">Outils Pro</h3>
            <p className="text-[#94a3b8] leading-relaxed">Pack OBS, TikFinity presets, Streamer.bot actions, overlays animés et plus encore.</p>
            <Link href="/tools" className="inline-block mt-4 text-[#0ea5e9] hover:underline">
              Découvrir les outils →
            </Link>
          </div>
          <div className="p-8 bg-[#0f172a] border border-[#1e293b] rounded-lg hover:border-[#a855f7] transition group">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-bold mb-3 text-[#a855f7] group-hover:text-[#a855f7]">Formations Elite</h3>
            <p className="text-[#94a3b8] leading-relaxed">Starter, Pro, Elite. De zéro à 100k followers avec nos formations complètes.</p>
            <Link href="/training" className="inline-block mt-4 text-[#a855f7] hover:underline">
              Voir les formations →
            </Link>
          </div>
          <div className="p-8 bg-[#0f172a] border border-[#1e293b] rounded-lg hover:border-[#ec4899] transition group">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-2xl font-bold mb-3 text-[#ec4899] group-hover:text-[#ec4899]">Support 24/7</h3>
            <p className="text-[#94a3b8] leading-relaxed">Équipe dédiée, tickets prioritaires, coaching personnalisé pour les membres Elite.</p>
            <Link href="/about" className="inline-block mt-4 text-[#ec4899] hover:underline">
              En savoir plus →
            </Link>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Pourquoi Starline ?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">✅</span> Tout-en-un
              </h3>
              <p className="text-[#94a3b8]">
                Tous les outils, formations et ressources dont tu as besoin au même endroit. Plus besoin de chercher partout.
              </p>
            </div>
            <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">🚀</span> Résultats prouvés
              </h3>
              <p className="text-[#94a3b8]">
                500+ créateurs actifs, 50M+ followers cumulés, 2M+ diamonds générés. Nos méthodes fonctionnent.
              </p>
            </div>
            <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">💰</span> Gratuit pour commencer
              </h3>
              <p className="text-[#94a3b8]">
                Plan Starter 100% gratuit avec accès aux outils publics et formations de base. Upgrade quand tu es prêt.
              </p>
            </div>
            <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">🤝</span> Communauté active
              </h3>
              <p className="text-[#94a3b8]">
                Rejoins une communauté de créateurs passionnés. Partage, apprends, grandis ensemble.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Nos Tarifs</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="text-4xl font-bold text-[#10b981] mb-4">Gratuit</div>
              <ul className="text-left space-y-2 text-[#94a3b8] mb-6">
                <li>✓ Outils publics</li>
                <li>✓ Formations Starter</li>
                <li>✓ Support communautaire</li>
              </ul>
              <Link href="/join" className="block w-full py-2 bg-[#1e293b] rounded-lg hover:bg-[#2d3748] transition">
                Commencer
              </Link>
            </div>
            <div className="p-6 bg-[#0f172a] border-2 border-[#0ea5e9] rounded-lg text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-[#0ea5e9] rounded-full text-xs font-bold">
                POPULAIRE
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-4xl font-bold text-[#0ea5e9] mb-4">29€/mois</div>
              <ul className="text-left space-y-2 text-[#94a3b8] mb-6">
                <li>✓ Tous les outils Pro</li>
                <li>✓ Formations Pro</li>
                <li>✓ Support prioritaire</li>
                <li>✓ Analytics avancés</li>
              </ul>
              <Link href="/pricing" className="block w-full py-2 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg hover:opacity-90 transition">
                Passer Pro
              </Link>
            </div>
            <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-2">Elite</h3>
              <div className="text-4xl font-bold text-[#a855f7] mb-4">79€/mois</div>
              <ul className="text-left space-y-2 text-[#94a3b8] mb-6">
                <li>✓ Tout le contenu Pro</li>
                <li>✓ Formations Elite</li>
                <li>✓ Coaching perso</li>
                <li>✓ Communauté privée</li>
              </ul>
              <Link href="/pricing" className="block w-full py-2 bg-[#1e293b] rounded-lg hover:bg-[#2d3748] transition">
                Devenir Elite
              </Link>
            </div>
          </div>
        </div>

        <div className="p-12 bg-gradient-to-r from-[#0f172a] to-[#1e293b] border border-[#1e293b] rounded-lg text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à démarrer ?</h2>
          <p className="text-xl text-[#94a3b8] mb-8 max-w-2xl mx-auto">
            Rejoins Starline Creator Hub maintenant et accède immédiatement aux outils et formations gratuites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="px-10 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition glow-cyan text-lg"
            >
              Créer mon compte
            </Link>
            <a
              href={TIKTOK_APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border-2 border-[#0ea5e9] text-[#0ea5e9] rounded-lg font-semibold hover:bg-[#0ea5e9] hover:text-white transition text-lg"
            >
              Apply via TikTok
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-[#1e293b] mt-20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-[#64748b]">
          <p>&copy; 2026 Starline Agency. Tous droits réservés. <Link href="/legal" className="hover:text-[#0ea5e9] transition">Mentions légales</Link></p>
        </div>
      </footer>
    </div>
  );
}
