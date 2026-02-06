import Link from 'next/link';
import { Download, ArrowLeft, CheckCircle } from 'lucide-react';

export default function TikTokLiveStudioPage() {
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
            <span className="text-6xl">🎯</span>
            <div>
              <h1 className="text-4xl font-bold gradient-text">TikTok Live Studio</h1>
              <p className="text-[#94a3b8]">Application officielle TikTok pour PC</p>
            </div>
          </div>
          <a
            href="https://www.tiktok.com/live/studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition"
          >
            <Download size={20} />
            Télécharger TikTok Live Studio
          </a>
        </div>

        <div className="space-y-8">
          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">📥 Installation</h2>
            <ol className="space-y-3 text-[#94a3b8]">
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">1.</span>
                <span>Télécharge TikTok Live Studio depuis le site officiel TikTok</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">2.</span>
                <span>Installe l&apos;application (Windows ou Mac)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">3.</span>
                <span>Connecte-toi avec ton compte TikTok</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">4.</span>
                <span>Autorise l&apos;accès à ta webcam et ton micro</span>
              </li>
            </ol>
          </section>

          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">✨ Fonctionnalités natives</h2>
            <div className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-green-400 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Effets TikTok :</span>
                    <span className="text-[#94a3b8]"> Accès direct aux filtres et effets TikTok</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-green-400 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Chat intégré :</span>
                    <span className="text-[#94a3b8]"> Vois les commentaires en temps réel</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-green-400 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Statistiques live :</span>
                    <span className="text-[#94a3b8]"> Viewers, likes, cadeaux en direct</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-green-400 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Overlays natifs :</span>
                    <span className="text-[#94a3b8]"> Templates d&apos;overlays TikTok</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-green-400 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Multi-sources :</span>
                    <span className="text-[#94a3b8]"> Webcam, écran, images, vidéos</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">⚙️ Configuration de base</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#a855f7]">1. Paramètres vidéo</h3>
                <div className="bg-[#1e293b] p-4 rounded-lg space-y-2 text-sm">
                  <p><span className="text-[#0ea5e9]">Résolution :</span> 1080p (recommandé)</p>
                  <p><span className="text-[#0ea5e9]">FPS :</span> 30 FPS</p>
                  <p><span className="text-[#0ea5e9]">Qualité :</span> Haute (si bonne connexion)</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-[#a855f7]">2. Ajouter des sources</h3>
                <ul className="space-y-2 text-[#94a3b8]">
                  <li>• Clique sur le bouton &quot;+&quot; en bas</li>
                  <li>• Sélectionne &quot;Webcam&quot; pour ta caméra</li>
                  <li>• Ajoute &quot;Écran&quot; pour partager ton écran</li>
                  <li>• Ajoute &quot;Image&quot; pour ton logo/overlay</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-[#a855f7]">3. Appliquer des effets</h3>
                <ul className="space-y-2 text-[#94a3b8]">
                  <li>• Clique sur l&apos;icône &quot;Effets&quot;</li>
                  <li>• Parcours les filtres TikTok disponibles</li>
                  <li>• Applique un effet à ta webcam</li>
                  <li>• Change d&apos;effet en direct pendant le live</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">🚀 Lancer ton live</h2>
            <ol className="space-y-3 text-[#94a3b8]">
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">1.</span>
                <span>Configure ta scène (webcam, overlays, effets)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">2.</span>
                <span>Écris un titre accrocheur pour ton live</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">3.</span>
                <span>Choisis une miniature attractive</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">4.</span>
                <span>Clique sur &quot;Go Live&quot; pour démarrer</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">5.</span>
                <span>Interagis avec ton audience via le chat</span>
              </li>
            </ol>
          </section>

          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">💡 Astuces TikTok Live Studio</h2>
            <div className="space-y-3">
              <div className="bg-[#1e293b] p-4 rounded-lg">
                <p className="text-sm text-[#94a3b8]">
                  <span className="text-yellow-400">💡</span> Utilise les effets TikTok pour te démarquer
                </p>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-lg">
                <p className="text-sm text-[#94a3b8]">
                  <span className="text-yellow-400">💡</span> Change d&apos;effet régulièrement pour garder l&apos;attention
                </p>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-lg">
                <p className="text-sm text-[#94a3b8]">
                  <span className="text-yellow-400">💡</span> Réponds aux commentaires pour booster l&apos;engagement
                </p>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-lg">
                <p className="text-sm text-[#94a3b8]">
                  <span className="text-yellow-400">💡</span> Fais des lives réguliers aux mêmes horaires
                </p>
              </div>
            </div>
          </section>

          <section className="p-6 bg-gradient-to-r from-[#0f172a] to-[#1e293b] border border-[#0ea5e9] rounded-lg">
            <h2 className="text-2xl font-bold mb-4">🎓 Besoin d&apos;aide ?</h2>
            <p className="text-[#94a3b8] mb-4">
              Rejoins Starline Creator Hub pour des stratégies de live TikTok et un accompagnement personnalisé.
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
