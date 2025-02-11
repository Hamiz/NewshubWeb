"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Newspaper,
  ArrowRight,
  Bookmark,
  Globe,
  Terminal,
  LandPlot,
  Trophy,
} from "lucide-react";

const featuredArticle = {
  id: 1,
  title: "Breaking: Global Climate Summit Announces Ambitious New Targets",
  category: "Politics",
  timestamp: "2 hours ago",
  imageUrl: "/images/usgs-Knh_5u-ZhJw-unsplash.jpg",
  summary:
    "World leaders gather to discuss critical climate change strategies and set new environmental goals.",
};

const newsCategories = [
  {
    name: "General News",
    href: "/news/general",
    icon: Globe,
    description:
      "Stay informed with the latest global headlines and breaking news",
    articles: "1.2K articles",
  },
  {
    name: "Technology",
    href: "/news/technology",
    icon: Terminal,
    description: "Explore innovations and breakthroughs in the tech world",
    articles: "856 articles",
  },
  {
    name: "Politics",
    href: "/news/politics",
    icon: LandPlot,
    description:
      "In-depth coverage of political developments and policy changes",
    articles: "945 articles",
  },
  {
    name: "Sports",
    href: "/news/sports",
    icon: Trophy,
    description: "Latest updates from the world of sports and athletics",
    articles: "1.1K articles",
  },
];

export default function HeroSection() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section className="max-w py-6">
      {/* Featured Article - keeping the same as before */}
      <article className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 mb-12">
        {/* Previous Featured Article content remains the same */}
        <div className="relative h-[600px] w-full group">
          <Image
            src={featuredArticle.imageUrl}
            alt={featuredArticle.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                <Newspaper className="w-4 h-4 mr-2" />
                {featuredArticle.category}
              </span>
              <span className="flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                <Clock className="w-4 h-4 mr-2" />
                {featuredArticle.timestamp}
              </span>
            </div>
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            >
              <Bookmark
                className={`w-5 h-5 transition-colors ${
                  isBookmarked ? "fill-current" : ""
                }`}
              />
            </button>
          </div>

          <Link href={"/articles"} className="group/title block">
            <h2 className="text-4xl font-bold mb-4 leading-tight group-hover/title:text-blue-300 transition-colors">
              {featuredArticle.title}
            </h2>
            <p className="text-lg text-gray-200 mb-6 line-clamp-2">
              {featuredArticle.summary}
            </p>
            <span className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              Read Full Article
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/title:translate-x-1" />
            </span>
          </Link>
        </div>
      </article>

      {/* Redesigned News Categories */}
      <div id="news-categories" className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-gray-800">News Categories</h3>
          <Link
            href="/articles"
            className="text-blue-600 hover:text-blue-700 flex items-center transition-colors"
          >
            View All Categories
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href="/articles"
                className="group relative"
                onMouseEnter={() => setHoveredCategory(category.name)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div
                  className="relative p-6 bg-gray-50 rounded-xl border border-gray-100 transition-all duration-300
                  hover:shadow-lg hover:border-blue-100 hover:bg-gradient-to-br hover:from-white hover:to-blue-50"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg bg-blue-50 text-blue-600 transition-all duration-300
                      ${
                        hoveredCategory === category.name ? "bg-blue-100" : ""
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-800">
                          {category.name}
                        </h4>
                        <span className="text-sm text-gray-500">
                          {category.articles}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        {category.description}
                      </p>
                      <div className="flex items-center text-sm text-blue-600">
                        <span className="group-hover:underline">
                          Browse Category
                        </span>
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 border border-blue-200 rounded-xl opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
