import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#e2e8f0]">
      <nav className="border-b border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">STARLINE</Link>
          <div className="flex gap-6">
            <Link href="/tools" className="hover:text-[#0ea5e9] transition">Outils</Link>
            <Link href="/training" className="hover:text-[#0ea5e9] transition">Formations</Link>
            <Link href="/pricing" className="hover:text-[#0ea5e9] transition">Tarifs</Link>
            <Link href="/about" className="text-[#0ea5e9]">À propos</Link>
            <Link href="/join" className="px-4 py-2 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition">Rejoindre</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">À propos de Starline</span>
          </h1>
          <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
            L&apos;agence qui propulse les créateurs TikTok Live vers le succès. Outils, formations et support de classe mondiale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
            <p className="text-[#94a3b8] mb-4 leading-relaxed">
              Starline Agency a été créée avec une vision claire : démocratiser l&apos;accès aux outils et connaissances professionnels pour les créateurs TikTok Live.
            </p>
            <p className="text-[#94a3b8] mb-4 leading-relaxed">
              Nous croyons que chaque créateur mérite d&apos;avoir accès aux mêmes ressources que les top streamers. C&apos;est pourquoi nous avons développé un écosystème complet d&apos;outils, de formations et de support.
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              Notre objectif : t&apos;aider à passer de 0 à 100k followers, puis au-delà, en te donnant tous les moyens de réussir.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Nos Valeurs</h2>
            <div className="space-y-4">
              <div className="p-4 bg-[#0f172a] border border-[#1e293b] rounded-lg">
                <h3 className="font-bold mb-2 text-[#0ea5e9]">🎯 Excellence</h3>
                <p className="text-[#94a3b8]">Nous ne proposons que des outils et formations de qualité professionnelle, testés et approuvés.</p>
              </div>
              <div className="p-4 bg-[#0f172a] border border-[#1e293b] rounded-lg">
                <h3 className="font-bold mb-2 text-[#a855f7]">🤝 Transparence</h3>
                <p className="text-[#94a3b8]">Pas de promesses irréalistes. Nous te donnons les outils, tu fournis le travail.</p>
              </div>
              <div className="p-4 bg-[#0f172a] border border-[#1e293b] rounded-lg">
                <h3 className="font-bold mb-2 text-[#ec4899]">💪 Support</h3>
                <p className="text-[#94a3b8]">Une communauté active et une équipe dédiée pour t&apos;accompagner à chaque étape.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos Chiffres</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg text-center">
              <div className="text-4xl font-bold text-[#0ea5e9] mb-2">500+</div>
              <p className="text-[#94a3b8]">Créateurs actifs</p>
            </div>
            <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg text-center">
              <div className="text-4xl font-bold text-[#a855f7] mb-2">50M+</div>
              <p className="text-[#94a3b8]">Followers cumulés</p>
            </div>
            <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg text-center">
              <div className="text-4xl font-bold text-[#ec4899] mb-2">2M+</div>
              <p className="text-[#94a3b8]">Diamonds générés</p>
            </div>
            <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg text-center">
              <div className="text-4xl font-bold text-[#10b981] mb-2">98%</div>
              <p className="text-[#94a3b8]">Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi nous faire confiance ?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3">Expertise Reconnue</h3>
              <p className="text-[#94a3b8]">
                Notre équipe a formé des centaines de créateurs qui ont atteint le top 1% sur TikTok Live.
              </p>
            </div>
            <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-3">Sécurité & Confidentialité</h3>
              <p className="text-[#94a3b8]">
                Tes données sont protégées. Conformité RGPD totale. Paiements sécurisés via Stripe.
              </p>
            </div>
            <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Innovation Continue</h3>
              <p className="text-[#94a3b8]">
                Nouveaux outils et formations chaque mois. Nous restons à la pointe des tendances TikTok.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <details className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
              <summary className="font-bold cursor-pointer text-[#0ea5e9]">
                Qui peut rejoindre Starline Creator Hub ?
              </summary>
              <p className="mt-4 text-[#94a3b8]">
                Tout créateur TikTok Live, débutant ou expérimenté. Nous avons des ressources pour tous les niveaux, du Starter au Elite.
              </p>
            </details>
            <details className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
              <summary className="font-bold cursor-pointer text-[#0ea5e9]">
                Combien de temps pour voir des résultats ?
              </summary>
              <p className="mt-4 text-[#94a3b8]">
                Cela dépend de ton investissement. En moyenne, nos créateurs voient une croissance significative dans les 30-60 premiers jours avec une application régulière des stratégies enseignées.
              </p>
            </details>
            <details className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
              <summary className="font-bold cursor-pointer text-[#0ea5e9]">
                Proposez-vous du coaching individuel ?
              </summary>
              <p className="mt-4 text-[#94a3b8]">
                Oui, pour les membres Elite. Sessions de coaching personnalisées avec nos experts, analyse de tes lives, stratégies sur mesure.
              </p>
            </details>
            <details className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
              <summary className="font-bold cursor-pointer text-[#0ea5e9]">
                Les outils fonctionnent-ils sur Mac et PC ?
              </summary>
              <p className="mt-4 text-[#94a3b8]">
                Oui, tous nos outils sont compatibles Windows et macOS. Certains nécessitent OBS Studio (gratuit) ou Streamer.bot.
              </p>
            </details>
            <details className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
              <summary className="font-bold cursor-pointer text-[#0ea5e9]">
                Comment contacter le support ?
              </summary>
              <p className="mt-4 text-[#94a3b8]">
                Via ton dashboard, section Support. Temps de réponse : moins de 24h pour Starter/Pro, moins de 2h pour Elite.
              </p>
            </details>
          </div>
        </div>

        <div className="p-8 bg-gradient-to-r from-[#0f172a] to-[#1e293b] border border-[#1e293b] rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à nous rejoindre ?</h2>
          <p className="text-[#94a3b8] mb-6 max-w-2xl mx-auto">
            Rejoins les 500+ créateurs qui font déjà confiance à Starline pour développer leur carrière sur TikTok Live.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/join"
              className="px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition glow-cyan"
            >
              Devenir Créateur
            </Link>
            <a
              href="https://inapp.tiktokv.com/falcon/live_backstage/page/agency_detail/index.html?source=video&agency_scout_source=video_leads&title=Apply%20to%20join&ttba_uid=6886916494790444037"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-[#0ea5e9] text-[#0ea5e9] rounded-lg font-semibold hover:bg-[#0ea5e9] hover:text-white transition"
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
