<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        $query = Article::where('is_published', true);

        if ($request->has('category')) {
            $query->where('category', $request->category);
        }

        if ($request->has('tag')) {
            $query->whereJsonContains('tags', $request->tag);
        }

        if ($request->has('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('title', 'like', '%' . $request->search . '%')
                  ->orWhere('excerpt', 'like', '%' . $request->search . '%')
                  ->orWhere('content', 'like', '%' . $request->search . '%');
            });
        }

        $articles = $query->orderBy('published_at', 'desc')
            ->paginate($request->get('per_page', 12));

        return response()->json($articles);
    }

    public function show($slug)
    {
        $article = Article::where('slug', $slug)
            ->where('is_published', true)
            ->firstOrFail();

        return response()->json($article);
    }

    public function categories()
    {
        $categories = Article::where('is_published', true)
            ->select('category')
            ->distinct()
            ->pluck('category');

        return response()->json($categories);
    }

    public function tags()
    {
        $articles = Article::where('is_published', true)
            ->whereNotNull('tags')
            ->get();

        $tags = collect();
        foreach ($articles as $article) {
            if ($article->tags) {
                $tags = $tags->merge($article->tags);
            }
        }

        return response()->json($tags->unique()->values());
    }

    public function latest()
    {
        $articles = Article::where('is_published', true)
            ->orderBy('published_at', 'desc')
            ->limit(5)
            ->get(['id', 'title', 'slug', 'excerpt', 'category', 'reading_time', 'published_at']);

        return response()->json($articles);
    }

    public function related($slug)
    {
        $article = Article::where('slug', $slug)->firstOrFail();

        $related = Article::where('is_published', true)
            ->where('id', '!=', $article->id)
            ->where('category', $article->category)
            ->orderBy('published_at', 'desc')
            ->limit(3)
            ->get(['id', 'title', 'slug', 'excerpt', 'category', 'reading_time', 'published_at']);

        return response()->json($related);
    }
}
