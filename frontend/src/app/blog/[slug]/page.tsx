'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Clock, Tag, ArrowLeft, Calendar } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  reading_time: number;
  published_at: string;
  tags: string[];
}

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchArticle();
      fetchRelatedArticles();
    }
  }, [slug]);

  const fetchArticle = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/blog/articles/${slug}`);
      const data = await response.json();
      setArticle(data);
    } catch (error) {
      console.error('Error fetching article:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedArticles = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/blog/articles/${slug}/related`);
      const data = await response.json();
      setRelatedArticles(data);
    } catch (error) {
      console.error('Error fetching related articles:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0e1a] text-[#e2e8f0] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-[#0ea5e9] border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-[#94a3b8]">Chargement de l&apos;article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-[#0a0e1a] text-[#e2e8f0] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
          <Link href="/blog" className="text-[#0ea5e9] hover:underline">← Retour au blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#e2e8f0]">
      <nav className="border-b border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">STARLINE</Link>
          <div className="flex gap-6">
            <Link href="/tools" className="hover:text-[#0ea5e9] transition">Outils</Link>
            <Link href="/training" className="hover:text-[#0ea5e9] transition">Formations</Link>
            <Link href="/blog" className="text-[#0ea5e9]">Blog</Link>
            <Link href="/pricing" className="hover:text-[#0ea5e9] transition">Tarifs</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-[#0ea5e9] hover:underline mb-8">
          <ArrowLeft size={20} />
          Retour au blog
        </Link>

        <article>
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-1 bg-[#1e293b] text-[#0ea5e9] text-sm font-semibold rounded-full">
                {article.category}
              </span>
              <div className="flex items-center gap-2 text-[#64748b]">
                <Clock size={16} />
                <span>{article.reading_time} min de lecture</span>
              </div>
              <div className="flex items-center gap-2 text-[#64748b]">
                <Calendar size={16} />
                <span>{new Date(article.published_at).toLocaleDateString('fr-FR')}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              {article.title}
            </h1>

            <p className="text-xl text-[#94a3b8]">
              {article.excerpt}
            </p>

            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {article.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-[#0f172a] border border-[#1e293b] rounded-full text-sm text-[#64748b]">
                    <Tag size={14} />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }}
            />
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-[#0f172a] to-[#1e293b] border border-[#1e293b] rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-3">Prêt à passer au niveau supérieur ?</h3>
            <p className="text-[#94a3b8] mb-6">
              Rejoignez Starline Creator Hub et accédez à des formations exclusives, des outils pro et une communauté de créateurs passionnés.
            </p>
            <Link
              href="/join"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-lg font-semibold hover:opacity-90 transition glow-cyan"
            >
              Rejoindre Starline
            </Link>
          </div>
        </article>

        {relatedArticles.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Articles similaires</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg hover:border-[#0ea5e9] transition"
                >
                  <span className="px-3 py-1 bg-[#1e293b] text-[#0ea5e9] text-xs font-semibold rounded-full">
                    {related.category}
                  </span>
                  <h3 className="text-lg font-bold mt-3 mb-2 group-hover:text-[#0ea5e9] transition line-clamp-2">
                    {related.title}
                  </h3>
                  <p className="text-sm text-[#94a3b8] line-clamp-2">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-[#1e293b] mt-20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-[#64748b]">
          <p>© 2026 Starline Agency. Tous droits réservés. <Link href="/legal" className="hover:text-[#0ea5e9] transition">Mentions légales</Link></p>
        </div>
      </footer>
    </div>
  );
}
