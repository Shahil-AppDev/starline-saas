import Link from 'next/link';
import { Download, ArrowLeft, CheckCircle } from 'lucide-react';

export default function StreamlabsPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#e2e8f0]">
      <nav className="border-b border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl font-bold gradient-text">STARLINE</Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Link href="/tools" className="inline-flex items-center gap-2 text-[#0ea5e9] hover:underline mb-8">
          <ArrowLeft size={20} />
          Retour aux outils
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">📺</span>
            <div>
              <h1 className="text-4xl font-bold gradient-text">Streamlabs Desktop</h1>
              <p className="text-[#94a3b8]">Configuration simplifiée pour débutants</p>
            </div>
          </div>
          <a
            href="https://streamlabs.com/streamlabs-live-streaming-software"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition"
          >
            <Download size={20} />
            Télécharger Streamlabs
          </a>
        </div>

        <div className="space-y-8">
          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">📥 Installation</h2>
            <ol className="space-y-3 text-[#94a3b8]">
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">1.</span>
                <span>Télécharge Streamlabs Desktop depuis le site officiel</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">2.</span>
                <span>Installe le logiciel et lance-le</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">3.</span>
                <span>Connecte ton compte TikTok (ou autre plateforme)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">4.</span>
                <span>Suis l&apos;assistant de configuration automatique</span>
              </li>
            </ol>
          </section>

          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">⚙️ Configuration TikTok</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#a855f7]">Connexion TikTok</h3>
                <ul className="space-y-2 text-[#94a3b8]">
                  <li>• Clique sur &quot;Settings&quot; → &quot;Stream&quot;</li>
                  <li>• Sélectionne &quot;TikTok&quot; dans la liste des plateformes</li>
                  <li>• Connecte-toi avec ton compte TikTok</li>
                  <li>• Autorise Streamlabs à accéder à ton compte</li>
                </ul>
              </div>

              <div className="bg-[#1e293b] p-4 rounded-lg">
                <p className="text-sm text-yellow-400">
                  💡 <span className="font-bold">Astuce :</span> Streamlabs configure automatiquement les paramètres optimaux pour TikTok
                </p>
              </div>
            </div>
          </section>

          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">🎨 Widgets et Overlays</h2>
            <div className="space-y-4">
              <p className="text-[#94a3b8]">Streamlabs inclut des widgets pré-configurés :</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-green-400 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Alertes :</span>
                    <span className="text-[#94a3b8]"> Notifications de followers, likes, cadeaux</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-green-400 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Chat Box :</span>
                    <span className="text-[#94a3b8]"> Affiche les messages du chat en direct</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-green-400 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Goal Tracker :</span>
                    <span className="text-[#94a3b8]"> Objectifs de followers/likes</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-green-400 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Themes :</span>
                    <span className="text-[#94a3b8]"> Bibliothèque de thèmes gratuits</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">🎬 Scènes recommandées</h2>
            <div className="space-y-4">
              <div className="bg-[#1e293b] p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">1. Scène Starting Soon</h4>
                <p className="text-sm text-[#94a3b8]">Compte à rebours avant le début du live</p>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">2. Scène Main (Live)</h4>
                <p className="text-sm text-[#94a3b8]">Webcam + overlays + alertes</p>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">3. Scène BRB (Pause)</h4>
                <p className="text-sm text-[#94a3b8]">Écran de pause avec musique</p>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">4. Scène Ending</h4>
                <p className="text-sm text-[#94a3b8]">Remerciements et réseaux sociaux</p>
              </div>
            </div>
          </section>

          <section className="p-6 bg-gradient-to-r from-[#0f172a] to-[#1e293b] border border-[#0ea5e9] rounded-lg">
            <h2 className="text-2xl font-bold mb-4">🎓 Besoin d&apos;aide ?</h2>
            <p className="text-[#94a3b8] mb-4">
              Rejoins Starline Creator Hub pour accéder à des templates Streamlabs exclusifs et un support personnalisé.
            </p>
            <Link
              href="/join"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition"
            >
              Rejoindre gratuitement
            </Link>
          </section>
        </div>
      </main>

      <footer className="border-t border-[#1e293b] mt-20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-[#64748b]">
          <p>© 2026 Starline Agency. <Link href="/tools" className="hover:text-[#0ea5e9] transition">Retour aux outils</Link></p>
        </div>
      </footer>
    </div>
  );
}
