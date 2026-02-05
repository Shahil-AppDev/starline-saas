import Link from 'next/link';

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#e2e8f0]">
      <nav className="border-b border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">STARLINE</Link>
          <div className="flex gap-6">
            <Link href="/tools" className="hover:text-[#0ea5e9] transition">Outils</Link>
            <Link href="/training" className="hover:text-[#0ea5e9] transition">Formations</Link>
            <Link href="/pricing" className="hover:text-[#0ea5e9] transition">Tarifs</Link>
            <Link href="/about" className="hover:text-[#0ea5e9] transition">À propos</Link>
            <Link href="/join" className="px-4 py-2 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition">Rejoindre</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Mentions Légales & Confidentialité</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">1. Informations légales</h2>
          <div className="space-y-4 text-[#94a3b8]">
            <p><strong className="text-[#e2e8f0]">Raison sociale :</strong> Starline Agency</p>
            <p><strong className="text-[#e2e8f0]">Forme juridique :</strong> SAS (Société par Actions Simplifiée)</p>
            <p><strong className="text-[#e2e8f0]">Capital social :</strong> 10 000 €</p>
            <p><strong className="text-[#e2e8f0]">Siège social :</strong> Paris, France</p>
            <p><strong className="text-[#e2e8f0]">Email :</strong> contact@starline-agency.xyz</p>
            <p><strong className="text-[#e2e8f0]">Hébergeur :</strong> DigitalOcean, LLC - 101 Avenue of the Americas, New York, NY 10013, USA</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">2. Conditions Générales d&apos;Utilisation</h2>
          <div className="space-y-4 text-[#94a3b8]">
            <h3 className="text-lg font-bold text-[#e2e8f0]">2.1 Acceptation des conditions</h3>
            <p>
              En accédant et en utilisant le site starline-agency.xyz et ses services, vous acceptez d&apos;être lié par les présentes conditions générales d&apos;utilisation.
            </p>

            <h3 className="text-lg font-bold text-[#e2e8f0]">2.2 Services proposés</h3>
            <p>
              Starline Creator Hub propose des outils, formations et ressources pour les créateurs TikTok Live. Les services sont fournis &quot;en l&apos;état&quot; sans garantie de résultats spécifiques.
            </p>

            <h3 className="text-lg font-bold text-[#e2e8f0]">2.3 Compte utilisateur</h3>
            <p>
              Vous êtes responsable de la confidentialité de vos identifiants de connexion. Toute activité effectuée via votre compte est sous votre responsabilité.
            </p>

            <h3 className="text-lg font-bold text-[#e2e8f0]">2.4 Propriété intellectuelle</h3>
            <p>
              Tous les contenus (outils, formations, documents) sont la propriété exclusive de Starline Agency. Toute reproduction ou distribution non autorisée est interdite.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">3. Politique de Confidentialité (RGPD)</h2>
          <div className="space-y-4 text-[#94a3b8]">
            <h3 className="text-lg font-bold text-[#e2e8f0]">3.1 Données collectées</h3>
            <p>Nous collectons les données suivantes :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Informations d&apos;identification (nom, email, pseudo TikTok)</li>
              <li>Données de paiement (via Stripe, non stockées sur nos serveurs)</li>
              <li>Données d&apos;utilisation (pages visitées, outils téléchargés, progression formations)</li>
              <li>Cookies techniques (authentification, préférences)</li>
            </ul>

            <h3 className="text-lg font-bold text-[#e2e8f0]">3.2 Utilisation des données</h3>
            <p>Vos données sont utilisées pour :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fournir et améliorer nos services</li>
              <li>Gérer votre compte et vos abonnements</li>
              <li>Vous envoyer des communications importantes (mises à jour, nouveautés)</li>
              <li>Analyser l&apos;utilisation de la plateforme (statistiques anonymisées)</li>
            </ul>

            <h3 className="text-lg font-bold text-[#e2e8f0]">3.3 Vos droits (RGPD)</h3>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Droit d&apos;accès :</strong> Consulter vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> Corriger vos données</li>
              <li><strong>Droit à l&apos;effacement :</strong> Supprimer votre compte et vos données</li>
              <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
              <li><strong>Droit d&apos;opposition :</strong> Refuser certains traitements</li>
            </ul>
            <p className="mt-4">
              Pour exercer vos droits, contactez-nous à : <a href="mailto:privacy@starline-agency.xyz" className="text-[#0ea5e9] hover:underline">privacy@starline-agency.xyz</a>
            </p>

            <h3 className="text-lg font-bold text-[#e2e8f0]">3.4 Sécurité des données</h3>
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données : chiffrement SSL/TLS, serveurs sécurisés, accès restreints, sauvegardes régulières.
            </p>

            <h3 className="text-lg font-bold text-[#e2e8f0]">3.5 Conservation des données</h3>
            <p>
              Vos données sont conservées pendant la durée de votre abonnement + 3 ans (obligations légales). Vous pouvez demander la suppression immédiate à tout moment.
            </p>

            <h3 className="text-lg font-bold text-[#e2e8f0]">3.6 Cookies</h3>
            <p>
              Nous utilisons uniquement des cookies techniques essentiels (authentification, préférences). Aucun cookie publicitaire ou de tracking tiers.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">4. Conditions de Paiement</h2>
          <div className="space-y-4 text-[#94a3b8]">
            <h3 className="text-lg font-bold text-[#e2e8f0]">4.1 Abonnements</h3>
            <p>
              Les abonnements Pro et Elite sont facturés mensuellement. Le prélèvement est automatique chaque mois à la date d&apos;inscription.
            </p>

            <h3 className="text-lg font-bold text-[#e2e8f0]">4.2 Annulation</h3>
            <p>
              Vous pouvez annuler votre abonnement à tout moment depuis votre dashboard. L&apos;annulation prend effet à la fin de la période en cours (pas de remboursement au prorata).
            </p>

            <h3 className="text-lg font-bold text-[#e2e8f0]">4.3 Remboursement</h3>
            <p>
              Garantie satisfait ou remboursé 14 jours sur les plans Pro et Elite (premier mois uniquement). Contactez le support pour toute demande.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">5. Limitation de Responsabilité</h2>
          <div className="space-y-4 text-[#94a3b8]">
            <p>
              Starline Agency ne peut être tenu responsable des résultats obtenus par les créateurs. Le succès sur TikTok Live dépend de nombreux facteurs externes (contenu, régularité, audience, algorithme TikTok, etc.).
            </p>
            <p>
              Nous fournissons des outils et formations de qualité, mais ne garantissons aucun résultat spécifique en termes de followers, revenus ou engagement.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">6. Modifications</h2>
          <div className="space-y-4 text-[#94a3b8]">
            <p>
              Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications seront notifiées par email et prendront effet 30 jours après notification.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">7. Contact</h2>
          <div className="space-y-4 text-[#94a3b8]">
            <p>Pour toute question concernant ces mentions légales ou votre vie privée :</p>
            <ul className="list-none space-y-2">
              <li><strong className="text-[#e2e8f0]">Email général :</strong> <a href="mailto:contact@starline-agency.xyz" className="text-[#0ea5e9] hover:underline">contact@starline-agency.xyz</a></li>
              <li><strong className="text-[#e2e8f0]">Email RGPD :</strong> <a href="mailto:privacy@starline-agency.xyz" className="text-[#0ea5e9] hover:underline">privacy@starline-agency.xyz</a></li>
              <li><strong className="text-[#e2e8f0]">Support :</strong> Via votre dashboard (membres)</li>
            </ul>
          </div>
        </section>

        <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
          <p className="text-sm text-[#64748b]">
            <strong className="text-[#e2e8f0]">Dernière mise à jour :</strong> 5 février 2026
          </p>
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
