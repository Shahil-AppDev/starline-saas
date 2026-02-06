'use client';

import { Clock, Filter, Search, Tag } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  reading_time: number;
  published_at: string;
  tags: string[];
}

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
    fetchCategories();
  }, [selectedCategory, searchQuery]);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (selectedCategory) params.append('category', selectedCategory);
      if (searchQuery) params.append('search', searchQuery);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/blog/articles?${params}`);
      const data = await response.json();
      setArticles(data.data || []);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/blog/categories`);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#e2e8f0] relative overflow-hidden">
      <SocialMediaRain />
      <nav className="border-b border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm sticky top-0 z-50 relative">
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

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold gradient-text mb-4">Blog Starline</h1>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            Astuces, guides et stratégies pour booster votre présence sur TikTok
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#64748b]" size={20} />
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-[#1e293b] rounded-lg focus:border-[#0ea5e9] outline-none"
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#64748b]" size={20} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-12 pr-8 py-3 bg-[#0f172a] border border-[#1e293b] rounded-lg focus:border-[#0ea5e9] outline-none appearance-none cursor-pointer min-w-[200px]"
            >
              <option value="">Toutes les catégories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-[#0ea5e9] border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-[#94a3b8]">Chargement des articles...</p>
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-[#94a3b8]">Aucun article trouvé</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="group p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg hover:border-[#0ea5e9] transition"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#1e293b] text-[#0ea5e9] text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[#64748b] text-sm">
                    <Clock size={14} />
                    <span>{article.reading_time} min</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-3 group-hover:text-[#0ea5e9] transition line-clamp-2">
                  {article.title}
                </h2>

                <p className="text-[#94a3b8] mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {article.tags && article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="flex items-center gap-1 text-xs text-[#64748b]">
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-[#1e293b]">
                  <span className="text-sm text-[#0ea5e9] group-hover:underline">
                    Lire l&apos;article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
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
