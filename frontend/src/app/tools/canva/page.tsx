import Link from 'next/link';
import { Download, ArrowLeft, CheckCircle } from 'lucide-react';

export default function CanvaPage() {
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
            <span className="text-6xl">🎨</span>
            <div>
              <h1 className="text-4xl font-bold gradient-text">Canva</h1>
              <p className="text-[#94a3b8]">Design d&apos;overlays et visuels pour TikTok</p>
            </div>
          </div>
          <a
            href="https://www.canva.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition"
          >
            <Download size={20} />
            Accéder à Canva
          </a>
        </div>

        <div className="space-y-8">
          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">🎨 Créer des overlays pour TikTok Live</h2>
            <ol className="space-y-3 text-[#94a3b8]">
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">1.</span>
                <span>Crée un compte Canva gratuit</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">2.</span>
                <span>Clique sur &quot;Créer un design&quot; → Dimensions personnalisées</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">3.</span>
                <span>Entre 1920x1080 pixels (Full HD) avec fond transparent</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">4.</span>
                <span>Ajoute ton logo, texte, cadres et éléments graphiques</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#0ea5e9]">5.</span>
                <span>Télécharge en PNG avec fond transparent</span>
              </li>
            </ol>
          </section>

          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">📐 Templates recommandés</h2>
            <div className="space-y-4">
              <div className="bg-[#1e293b] p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">Lower Third (Bandeau bas)</h4>
                <p className="text-sm text-[#94a3b8]">Nom + réseaux sociaux en bas de l&apos;écran</p>
                <p className="text-xs text-[#0ea5e9] mt-2">Dimensions: 1920x200px</p>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">Cadre Webcam</h4>
                <p className="text-sm text-[#94a3b8]">Cadre décoratif autour de ta webcam</p>
                <p className="text-xs text-[#0ea5e9] mt-2">Dimensions: 800x600px (centré)</p>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">Écran Starting Soon</h4>
                <p className="text-sm text-[#94a3b8]">Compte à rebours avant le live</p>
                <p className="text-xs text-[#0ea5e9] mt-2">Dimensions: 1920x1080px</p>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">Miniatures TikTok</h4>
                <p className="text-sm text-[#94a3b8]">Vignettes pour tes vidéos</p>
                <p className="text-xs text-[#0ea5e9] mt-2">Dimensions: 1080x1920px (vertical)</p>
              </div>
            </div>
          </section>

          <section className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">💡 Astuces design</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-400 mt-0.5" />
                <span className="text-[#94a3b8]">Utilise des couleurs vives pour attirer l&apos;attention</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-400 mt-0.5" />
                <span className="text-[#94a3b8]">Garde ton branding cohérent (mêmes couleurs/polices)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-400 mt-0.5" />
                <span className="text-[#94a3b8]">Évite de surcharger : moins c&apos;est mieux</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-400 mt-0.5" />
                <span className="text-[#94a3b8]">Teste tes overlays avant le live</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-400 mt-0.5" />
                <span className="text-[#94a3b8]">Sauvegarde tes designs en tant que templates</span>
              </li>
            </ul>
          </section>

          <section className="p-6 bg-gradient-to-r from-[#0f172a] to-[#1e293b] border border-[#0ea5e9] rounded-lg">
            <h2 className="text-2xl font-bold mb-4">🎓 Templates exclusifs Starline</h2>
            <p className="text-[#94a3b8] mb-4">
              Rejoins Starline Creator Hub pour accéder à notre bibliothèque de templates Canva prêts à l&apos;emploi.
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
