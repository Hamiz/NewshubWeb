// src/components/sections/TrendingNews.tsx
import Link from "next/link";
import { TrendingUp, Share2, Eye, ChevronRight } from "lucide-react";

const trendingArticles = [
  {
    id: 1,
    title: "Space Exploration: New Missions Planned",
    category: "Science",
    views: 25643,
    shares: 1205,
  },
  {
    id: 2,
    title: "Artificial Intelligence Reshaping Industries",
    category: "Technology",
    views: 22987,
    shares: 1098,
  },
  {
    id: 3,
    title: "Global Climate Change Mitigation Strategies",
    category: "Environment",
    views: 19876,
    shares: 945,
  },
  {
    id: 4,
    title: "Future of Work: Remote Collaboration Trends",
    category: "Business",
    views: 18543,
    shares: 876,
  },
];

export default function TrendingNews() {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <TrendingUp className="text-rose-500" />
          Trending Now
        </h2>
        <Link
          href="/trending"
          className="text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
        >
          View All <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="bg-white rounded-xl overflow-hidden shadow-sm">
        {trendingArticles.map((article, index) => (
          <Link
            href={`/article/${article.id}`}
            key={article.id}
            className={`
              block p-5 hover:bg-gray-50 transition-all duration-300 group
              ${
                index < trendingArticles.length - 1
                  ? "border-b border-gray-100"
                  : ""
              }
            `}
          >
            <div className="flex justify-between items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-sm">
                    #{index + 1} Trending
                  </span>
                </div>
                <h3 className="text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                  <Eye className="w-4 h-4 mr-1" />
                  {article.views.toLocaleString()}
                </span>
                <span className="flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  <Share2 className="w-4 h-4 mr-1" />
                  {article.shares}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
