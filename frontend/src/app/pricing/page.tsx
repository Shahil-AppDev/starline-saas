import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: 'Gratuit',
      color: 'from-[#10b981] to-[#059669]',
      features: [
        '✓ Accès aux outils publics',
        '✓ Formations Starter gratuites',
        '✓ Support communautaire',
        '✓ Dashboard basique',
        '✓ Ressources de démarrage',
      ],
      cta: 'Commencer gratuitement',
      popular: false,
    },
    {
      name: 'Pro',
      price: '29€/mois',
      color: 'from-[#0ea5e9] to-[#0284c7]',
      features: [
        '✓ Tous les outils Pro',
        '✓ Formations Pro complètes',
        '✓ Support prioritaire',
        '✓ Dashboard avancé + analytics',
        '✓ Automatisations Streamer.bot',
        '✓ Templates & presets premium',
        '✓ Mises à jour mensuelles',
      ],
      cta: 'Passer Pro',
      popular: true,
    },
    {
      name: 'Elite',
      price: '79€/mois',
      color: 'from-[#a855f7] to-[#9333ea]',
      features: [
        '✓ Tout le contenu Pro',
        '✓ Formations Elite exclusives',
        '✓ Support 24/7 + coaching perso',
        '✓ Analytics avancés + KPI',
        '✓ Stratégies de monétisation',
        '✓ Accès anticipé aux nouveautés',
        '✓ Communauté Elite privée',
        '✓ Sessions de groupe mensuelles',
      ],
      cta: 'Devenir Elite',
      popular: false,
    },
  ];

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

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Tarifs Transparents</span>
          </h1>
          <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
            Choisis le plan qui correspond à ton niveau et tes ambitions. Upgrade ou downgrade à tout moment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative p-8 bg-[#0f172a] border rounded-lg transition hover:scale-105 ${
                plan.popular ? 'border-[#0ea5e9] shadow-lg shadow-[#0ea5e9]/20' : 'border-[#1e293b]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-full text-sm font-bold">
                    ⭐ POPULAIRE
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-[#94a3b8] flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>{feature.replace('✓ ', '')}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/join"
                className={`block w-full py-3 text-center rounded-lg font-semibold transition ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] hover:opacity-90'
                    : 'bg-[#1e293b] hover:bg-[#2d3748]'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-[#0ea5e9]">💳 Paiement sécurisé</h3>
            <p className="text-[#94a3b8]">
              Paiements sécurisés via Stripe. Cartes bancaires, PayPal acceptés. Annule à tout moment sans frais.
            </p>
          </div>
          <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-[#a855f7]">🔄 Flexibilité totale</h3>
            <p className="text-[#94a3b8]">
              Change de plan quand tu veux. Upgrade immédiat, downgrade à la fin du cycle. Pas d'engagement.
            </p>
          </div>
        </div>

        <div className="p-8 bg-gradient-to-r from-[#0f172a] to-[#1e293b] border border-[#1e293b] rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-center">Questions fréquentes</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div>
              <h4 className="font-bold mb-2 text-[#0ea5e9]">Puis-je essayer gratuitement ?</h4>
              <p className="text-[#94a3b8]">Oui ! Le plan Starter est 100% gratuit et sans limite de temps. Accède aux outils publics et formations de base.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-[#0ea5e9]">Comment annuler mon abonnement ?</h4>
              <p className="text-[#94a3b8]">Depuis ton dashboard, section Paramètres. Annulation en 1 clic, effet immédiat ou fin de cycle selon ton choix.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-[#0ea5e9]">Les prix incluent la TVA ?</h4>
              <p className="text-[#94a3b8]">Oui, tous les prix affichés sont TTC (TVA française 20% incluse).</p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-[#0ea5e9]">Remboursement possible ?</h4>
              <p className="text-[#94a3b8]">Garantie satisfait ou remboursé 14 jours sur les plans Pro et Elite. Aucune question posée.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#94a3b8] mb-4">Besoin d&apos;un plan sur mesure pour ton agence ?</p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 border border-[#0ea5e9] text-[#0ea5e9] rounded-lg font-semibold hover:bg-[#0ea5e9] hover:text-white transition"
          >
            Contacte-nous
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
