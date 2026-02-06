import { BookOpen, Download } from 'lucide-react';
import Link from 'next/link';


const categories = ['Tous', 'Streaming', 'Design', 'Montage', 'Audio', 'Widgets', 'Amélioration', 'Multi-streaming'];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#e2e8f0]">
      <nav className="border-b border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl font-bold gradient-text">STARLINE</Link>
          <div className="hidden md:flex gap-6 items-center">
            <Link href="/tools" className="text-[#0ea5e9]">Outils</Link>
            <Link href="/training" className="hover:text-[#0ea5e9] transition">Formations</Link>
            <Link href="/blog" className="hover:text-[#0ea5e9] transition">Nos conseils</Link>
            <Link href="/pricing" className="hover:text-[#0ea5e9] transition">Tarifs</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Boîte à Outils Streamer</h1>
          <p className="text-lg sm:text-xl text-[#94a3b8] max-w-3xl mx-auto">
            description: 'Logiciel open-source pour le streaming et l&#39;enregistrement. Indispensable pour streamer sur TikTok depuis PC.',TikTok professionnels. Téléchargements gratuits + formations complètes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg hover:border-[#0ea5e9] transition group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{tool.icon}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  tool.difficulty === 'Débutant' ? 'bg-green-900/30 text-green-400' :
                  tool.difficulty === 'Intermédiaire' ? 'bg-yellow-900/30 text-yellow-400' :
                  'bg-red-900/30 text-red-400'
                }`}>
                  {tool.difficulty}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-[#0ea5e9] transition">
                {tool.name}
              </h3>
              <p className="text-sm text-[#64748b] mb-1">{tool.category}</p>
              <p className="text-[#94a3b8] mb-4 text-sm leading-relaxed">
                {tool.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {tool.features.map((feature, idx) => (
                  <span key={idx} className="px-2 py-1 bg-[#1e293b] text-[#94a3b8] text-xs rounded">
                    {feature}
                  </span>
                ))}
              </div>

              {tool.requirements && (
                <p className="text-xs text-yellow-400 mb-4">⚠️ {tool.requirements}</p>
              )}

              <div className="flex gap-2">
                <a
                  href={tool.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold text-sm hover:opacity-90 transition"
                >
                  <Download size={16} />
                  Télécharger
                </a>
                <Link
                  href={tool.trainingUrl}
                  className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-[#0ea5e9] text-[#0ea5e9] rounded-lg font-semibold text-sm hover:bg-[#0ea5e9] hover:text-white transition"
                >
                  <BookOpen size={16} />
                  Formation
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-[#0f172a] to-[#1e293b] border border-[#1e293b] rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin d'aide pour configurer ?</h2>
          <p className="text-lg text-[#94a3b8] mb-6 max-w-2xl mx-auto">
            Rejoins Starline Creator Hub pour accéder à toutes les formations détaillées et au support personnalisé.
          </p>
          <Link
            href="/join"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition glow-cyan"
          >
            Rejoindre gratuitement
          </Link>
        </div>
      </main>

      <footer className="border-t border-[#1e293b] mt-20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-[#64748b]">
          <p>© 2026 Starline Agency. Tous droits réservés. <Link href="/legal" className="hover:text-[#0ea5e9] transition">Mentions légales</Link></p>
        </div>
      </footer>
    </div>
  );
}
