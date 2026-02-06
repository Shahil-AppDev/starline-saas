import Link from 'next/link';
import { Download, ArrowLeft, CheckCircle } from 'lucide-react';

export default function CapCutPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#e2e8f0]">
      <nav className="border-b border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
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
            <span className="text-6xl">🎞️</span>
            <div>
              <h1 className="text-4xl font-bold gradient-text">CapCut</h1>
              <p className="text-[#94a3b8]">Montage vidéo optimisé pour TikTok</p>
            </div>
          </div>
          <a
            href="https://www.capcut.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition"
          >
            <Download size={20} />
            Télécharger CapCut
          </a>
        </div>

        <div className="space-y-8">
          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">📥 Installation</h2>
            <ol className="space-y-3 text-[#94a3b8]">
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">1.</span>
                <span>Télécharge CapCut (PC, Mac, iOS ou Android)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">2.</span>
                <span>Installe et lance l&apos;application</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">3.</span>
                <span>Connecte ton compte TikTok pour synchroniser</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">4.</span>
                <span>Explore les templates et effets disponibles</span>
              </li>
            </ol>
          </section>

          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">🎬 Fonctionnalités clés</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-400 mt-0.5" />
                <div>
                  <span className="font-bold text-white">Templates TikTok :</span>
                  <span className="text-[#94a3b8]"> Modèles viraux prêts à l&apos;emploi</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-400 mt-0.5" />
                <div>
                  <span className="font-bold text-white">Auto Captions :</span>
                  <span className="text-[#94a3b8]"> Sous-titres automatiques avec IA</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-400 mt-0.5" />
                <div>
                  <span className="font-bold text-white">Effets tendances :</span>
                  <span className="text-[#94a3b8]"> Transitions, filtres, stickers TikTok</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-400 mt-0.5" />
                <div>
                  <span className="font-bold text-white">Musique libre :</span>
                  <span className="text-[#94a3b8]"> Bibliothèque de sons et musiques</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-400 mt-0.5" />
                <div>
                  <span className="font-bold text-white">Export optimisé :</span>
                  <span className="text-[#94a3b8]"> Format 9:16 parfait pour TikTok</span>
                </div>
              </li>
            </ul>
          </section>

          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">✂️ Workflow de montage rapide</h2>
            <div className="space-y-4">
              <div className="bg-[#1e293b] p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">1. Importer</h4>
                <p className="text-sm text-[#94a3b8]">Glisse tes clips vidéo dans la timeline</p>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">2. Découper</h4>
                <p className="text-sm text-[#94a3b8]">Supprime les temps morts et garde le meilleur</p>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">3. Ajouter effets</h4>
                <p className="text-sm text-[#94a3b8]">Transitions, textes, stickers, filtres</p>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">4. Sous-titres auto</h4>
                <p className="text-sm text-[#94a3b8]">Active les sous-titres automatiques (boost engagement +40%)</p>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">5. Exporter</h4>
                <p className="text-sm text-[#94a3b8]">1080p, 9:16, 30 FPS → Publier directement sur TikTok</p>
              </div>
            </div>
          </section>

          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">💡 Astuces pour vidéos virales</h2>
            <div className="space-y-3">
              <div className="bg-[#1e293b] p-4 rounded-lg">
                <p className="text-sm text-[#94a3b8]">
                  <span className="text-yellow-400">💡</span> Accroche dans les 3 premières secondes
                </p>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-lg">
                <p className="text-sm text-[#94a3b8]">
                  <span className="text-yellow-400">💡</span> Utilise les sons tendances du moment
                </p>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-lg">
                <p className="text-sm text-[#94a3b8]">
                  <span className="text-yellow-400">💡</span> Ajoute TOUJOURS des sous-titres
                </p>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-lg">
                <p className="text-sm text-[#94a3b8]">
                  <span className="text-yellow-400">💡</span> Garde tes vidéos entre 15-60 secondes
                </p>
              </div>
            </div>
          </section>

          <section className="p-6 bg-gradient-to-r from-[#0f172a] to-[#1e293b] border border-[#0ea5e9] rounded-lg">
            <h2 className="text-2xl font-bold mb-4">🎓 Formations montage avancé</h2>
            <p className="text-[#94a3b8] mb-4">
              Rejoins Starline pour apprendre les techniques de montage qui font exploser les vues.
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
