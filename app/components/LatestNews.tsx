//components//LatestNews.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Newspaper, BookmarkPlus, ChevronRight } from "lucide-react";

const latestArticles = [
  {
    id: 1,
    title: "Renewable Energy Investments Reach Record High",
    category: "Technology",
    timestamp: "1 hour ago",
    imageUrl: "/images/jason-mavrommatis-nyL-rzwP-Mk-unsplash.jpg",
    author: "Jane Doe",
  },
  {
    id: 2,
    title: "Global Economic Outlook: Challenges and Opportunities",
    category: "Economy",
    timestamp: "3 hours ago",
    imageUrl: "/images/john-cameron-9agLGa8cCM8-unsplash.jpg",
    author: "John Smith",
  },
  {
    id: 3,
    title: "Healthcare Innovation: New Breakthrough Treatments",
    category: "Health",
    timestamp: "5 hours ago",
    imageUrl: "/images/jared-rice-NTyBbu66_SI-unsplash.jpg",
    author: "Emily Johnson",
  },
];

export default function LatestNews() {
  const [hoveredArticle, setHoveredArticle] = useState<number | null>(null);
  const [bookmarkedArticles, setBookmarkedArticles] = useState<number[]>([]);

  const toggleBookmark = (id: number) => {
    setBookmarkedArticles((prev) =>
      prev.includes(id)
        ? prev.filter((articleId) => articleId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Latest Updates</h2>
        <Link
          href="/articles"
          className="text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
        >
          View All <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {latestArticles.map((article) => (
          <article
            key={article.id}
            className="group relative bg-white rounded-xl overflow-hidden transition-all duration-300
              hover:shadow-lg hover:translate-y-[-2px]"
            onMouseEnter={() => setHoveredArticle(article.id)}
            onMouseLeave={() => setHoveredArticle(null)}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between mb-3 text-sm text-gray-600">
                <span className="flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600">
                  <Newspaper className="w-3 h-3 mr-1" /> {article.category}
                </span>
                <span className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" /> {article.timestamp}
                </span>
              </div>

              <Link href={`/article/${article.id}`}>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
              </Link>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">By {article.author}</p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleBookmark(article.id);
                  }}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <BookmarkPlus
                    className={`w-4 h-4 transition-colors ${
                      bookmarkedArticles.includes(article.id)
                        ? "text-blue-600 fill-blue-600"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
