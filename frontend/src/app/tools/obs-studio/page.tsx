import Link from 'next/link';
import { Download, ArrowLeft, CheckCircle } from 'lucide-react';

export default function OBSStudioPage() {
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
            <span className="text-6xl">🎬</span>
            <div>
              <h1 className="text-4xl font-bold gradient-text">OBS Studio</h1>
              <p className="text-[#94a3b8]">Configuration complète pour TikTok Live</p>
            </div>
          </div>
          <a
            href="https://obsproject.com/download"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition"
          >
            <Download size={20} />
            Télécharger OBS Studio
          </a>
        </div>

        <div className="space-y-8">
          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">📥 Installation</h2>
            <ol className="space-y-3 text-[#94a3b8]">
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">1.</span>
                <span>Télécharge OBS Studio depuis le site officiel (Windows, Mac ou Linux)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">2.</span>
                <span>Lance l&apos;installateur et suis les instructions</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">3.</span>
                <span>Au premier lancement, choisis &quot;Optimiser pour le streaming&quot;</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">4.</span>
                <span>Sélectionne une résolution de 1080p et 30 FPS pour commencer</span>
              </li>
            </ol>
          </section>

          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">⚙️ Configuration de base pour TikTok</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#a855f7]">1. Paramètres de sortie</h3>
                <div className="bg-[#1e293b] p-4 rounded-lg space-y-2 text-sm">
                  <p><span className="text-[#0ea5e9]">Encodeur :</span> x264 (ou NVENC si GPU NVIDIA)</p>
                  <p><span className="text-[#0ea5e9]">Débit :</span> 3000-4500 Kbps</p>
                  <p><span className="text-[#0ea5e9]">Intervalle d&apos;images clés :</span> 2</p>
                  <p><span className="text-[#0ea5e9]">Préréglage :</span> veryfast</p>
                  <p><span className="text-[#0ea5e9]">Profil :</span> main</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-[#a855f7]">2. Paramètres vidéo</h3>
                <div className="bg-[#1e293b] p-4 rounded-lg space-y-2 text-sm">
                  <p><span className="text-[#0ea5e9]">Résolution de base :</span> 1920x1080</p>
                  <p><span className="text-[#0ea5e9]">Résolution de sortie :</span> 1920x1080 (ou 1280x720)</p>
                  <p><span className="text-[#0ea5e9]">FPS :</span> 30 (recommandé pour TikTok)</p>
                  <p><span className="text-[#0ea5e9]">Filtre de mise à l&apos;échelle :</span> Lanczos</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-[#a855f7]">3. Connexion TikTok</h3>
                <ol className="space-y-2 text-[#94a3b8]">
                  <li>• Va dans Paramètres → Flux</li>
                  <li>• Service : Personnalisé</li>
                  <li>• Serveur : <code className="bg-[#1e293b] px-2 py-1 rounded text-[#0ea5e9]">rtmp://push.tiktokcdn.com/live/</code></li>
                  <li>• Clé de flux : Récupère-la depuis TikTok Live Studio ou ton dashboard créateur</li>
                </ol>
              </div>
            </div>
          </section>

          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">🎨 Configuration de scène de base</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold mb-2 text-[#a855f7]">Sources essentielles :</h3>
                <ul className="space-y-2 text-[#94a3b8]">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-green-400 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">Capture vidéo :</span> Ta webcam (Logitech, etc.)
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-green-400 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">Capture audio :</span> Ton micro (USB ou XLR)
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-green-400 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">Image :</span> Ton logo ou overlay
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-green-400 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">Texte :</span> Nom, réseaux sociaux, infos
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-green-400 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">Navigateur :</span> Pour afficher des widgets (alertes, chat)
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1e293b] p-4 rounded-lg">
                <p className="text-sm text-[#94a3b8]">
                  <span className="text-yellow-400">💡 Astuce :</span> Crée plusieurs scènes (Intro, Live, Pause, Fin) pour varier ton contenu
                </p>
              </div>
            </div>
          </section>

          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">🚀 Checklist avant de lancer ton live</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>Connexion internet stable (min 5 Mbps upload)</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>Webcam et micro fonctionnent</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>Éclairage correct (face à une fenêtre ou ring light)</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>Clé de flux TikTok configurée</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>Scène et overlays prêts</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>Test de 2-3 minutes avant le vrai live</span>
              </li>
            </ul>
          </section>

          <section className="p-6 bg-gradient-to-r from-[#0f172a] to-[#1e293b] border border-[#0ea5e9] rounded-lg">
            <h2 className="text-2xl font-bold mb-4">🎓 Besoin d&apos;aide ?</h2>
            <p className="text-[#94a3b8] mb-4">
              Rejoins Starline Creator Hub pour accéder à des tutoriels vidéo, des templates OBS et un support personnalisé.
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
