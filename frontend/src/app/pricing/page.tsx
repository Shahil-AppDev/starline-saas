import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#e2e8f0]">
      <nav className="border-b border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">STARLINE</Link>
          <div className="flex gap-6">
            <Link href="/tools" className="hover:text-[#0ea5e9] transition">Outils</Link>
            <Link href="/training" className="hover:text-[#0ea5e9] transition">Formations</Link>
            <Link href="/pricing" className="text-[#0ea5e9]">Tarifs</Link>
            <Link href="/about" className="hover:text-[#0ea5e9] transition">À propos</Link>
            <Link href="/join" className="px-4 py-2 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition">Rejoindre</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">100% Gratuit pour les Créateurs</h1>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            Starline Creator Hub est entièrement gratuit pour tous les créateurs TikTok. Nos services sont financés par nos partenaires agences.
          </p>
        </div>

        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="p-6 sm:p-8 bg-gradient-to-r from-[#0f172a] to-[#1e293b] border-2 border-[#0ea5e9] rounded-lg text-center mb-8 sm:mb-12">
              <div className="inline-block px-6 py-2 bg-[#0ea5e9] rounded-full text-sm font-bold mb-6">
                POUR LES CRÉATEURS
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">Accès Complet Gratuit</h3>
              <div className="text-5xl sm:text-6xl font-bold gradient-text mb-6">0€</div>
              <p className="text-xl text-[#94a3b8] mb-8">À vie, sans carte bancaire, sans engagement</p>
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-left mb-6 sm:mb-8">
                <div>
                  <h4 className="font-bold text-[#0ea5e9] mb-3">🎯 Outils Professionnels</h4>
                  <ul className="space-y-2 text-[#94a3b8]">
                    <li>✓ Analytics avancés</li>
                    <li>✓ Planificateur de contenu</li>
                    <li>✓ Bibliothèque de templates</li>
                    <li>✓ Outils d&apos;édition</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#a855f7] mb-3">📚 Formations Exclusives</h4>
                  <ul className="space-y-2 text-[#94a3b8]">
                    <li>✓ Algorithme TikTok décrypté</li>
                    <li>✓ Stratégies de croissance</li>
                    <li>✓ Monétisation avancée</li>
                    <li>✓ Animation de lives</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#10b981] mb-3">👥 Communauté Active</h4>
                  <ul className="space-y-2 text-[#94a3b8]">
                    <li>✓ +500 créateurs français</li>
                    <li>✓ Discord privé</li>
                    <li>✓ Événements mensuels</li>
                    <li>✓ Collaborations facilitées</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#ec4899] mb-3">💼 Opportunités Pro</h4>
                  <ul className="space-y-2 text-[#94a3b8]">
                    <li>✓ Accès aux marques</li>
                    <li>✓ Négociation de contrats</li>
                    <li>✓ Support prioritaire</li>
                    <li>✓ Coaching personnalisé</li>
                  </ul>
                </div>
              </div>

              <Link
                href="/join"
                className="inline-block px-12 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-bold text-lg hover:opacity-90 transition glow-cyan"
              >
                Rejoindre Gratuitement
              </Link>
            </div>

            <div className="p-8 bg-[#0f172a] border border-[#1e293b] rounded-lg">
              <div className="inline-block px-6 py-2 bg-[#1e293b] rounded-full text-sm font-bold mb-6">
                POUR LES AGENCES PARTENAIRES
              </div>
              <h3 className="text-3xl font-bold mb-4">Solutions Entreprise</h3>
              <p className="text-[#94a3b8] mb-6">
                Vous êtes une agence TikTok et souhaitez rejoindre notre réseau de partenaires ? 
                Contactez-nous pour découvrir nos solutions sur mesure.
              </p>
              <ul className="space-y-3 text-[#94a3b8] mb-8">
                <li>✓ Accès API complet</li>
                <li>✓ Dashboard multi-créateurs</li>
                <li>✓ Reporting avancé</li>
                <li>✓ Support dédié 24/7</li>
                <li>✓ Formation de vos équipes</li>
                <li>✓ White-label disponible</li>
              </ul>
              <a
                href="mailto:partners@starline-agency.xyz"
                className="inline-block px-8 py-3 border-2 border-[#0ea5e9] text-[#0ea5e9] rounded-lg font-semibold hover:bg-[#0ea5e9] hover:text-white transition"
              >
                Devenir Partenaire
              </a>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Questions Fréquentes</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <details className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
              <summary className="font-bold cursor-pointer">C&apos;est vraiment 100% gratuit pour les créateurs ?</summary>
              <p className="mt-4 text-[#94a3b8]">Oui, absolument ! Tous nos outils, formations et services sont gratuits pour les créateurs TikTok. Pas de carte bancaire requise, pas de frais cachés.</p>
            </details>
            <details className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
              <summary className="font-bold cursor-pointer">Comment Starline se finance-t-il ?</summary>
              <p className="mt-4 text-[#94a3b8]">Nous sommes financés par nos partenaires agences qui utilisent notre plateforme pour gérer leurs créateurs. Cela nous permet d&apos;offrir un service gratuit aux créateurs.</p>
            </details>
            <details className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
              <summary className="font-bold cursor-pointer">Y a-t-il des limitations sur le plan gratuit ?</summary>
              <p className="mt-4 text-[#94a3b8]">Non, vous avez accès à 100% des fonctionnalités : tous les outils, toutes les formations, le support complet et la communauté. Aucune limitation.</p>
            </details>
            <details className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
              <summary className="font-bold cursor-pointer">Comment devenir agence partenaire ?</summary>
              <p className="mt-4 text-[#94a3b8]">Contactez-nous à partners@starline-agency.xyz pour découvrir nos solutions entreprise et rejoindre notre réseau d&apos;agences partenaires.</p>
            </details>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1e293b] mt-20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-[#64748b]">
          <p>&copy; 2026 Starline Agency. Tous droits réservés. <Link href="/legal" className="hover:text-[#0ea5e9] transition">Mentions légales</Link></p>
        </div>
      </footer>
    </div>
  );
}
