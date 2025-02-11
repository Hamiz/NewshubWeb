import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Clock, User, ArrowRight } from "lucide-react";
import LatestNews from "../components/LatestNews";
import { useSearch } from "../components/SearchContext";
import Image from "next/image";

interface Article {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

const categories = [
  { name: "Technology", count: 142, icon: "💻" },
  { name: "Economy", count: 98, icon: "📈" },
  { name: "Health", count: 76, icon: "🏥" },
  { name: "Politics", count: 114, icon: "🏛️" },
  { name: "Environment", count: 65, icon: "🌍" },
  { name: "Science", count: 87, icon: "🔬" },
  { name: "Culture", count: 93, icon: "🎭" },
  { name: "Sports", count: 124, icon: "⚽" },
];

const FadeInSection: React.FC<{
  children: React.ReactNode;
  delay?: number;
}> = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

const newsArticles: Article[] = [
  {
    id: 1,
    category: "Technology",
    title: "The Evolution of Artificial Intelligence in Modern Healthcare",
    excerpt:
      "Exploring how AI is revolutionizing medical diagnosis and patient care...",
    author: "Dr. Sarah Chen",
    date: "Feb 8, 2024",
    readTime: "6 min read",
    imageUrl: "/images/lukas-hND1OG3q67k-unsplash.jpg",
  },
  {
    id: 2,
    category: "Economy",
    title: "Global Markets Respond to New Economic Policies",
    excerpt:
      "Analysis of recent economic shifts and their impact on international trade...",
    author: "Michael Roberts",
    date: "Feb 9, 2024",
    readTime: "5 min read",
    imageUrl: "/images/markus-spiske-XrIfY_4cK1w-unsplash.jpg",
  },
  {
    id: 3,
    category: "Science",
    title: "Breakthrough in Quantum Computing: What It Means for the Future",
    excerpt:
      "A deep dive into the latest advancements in quantum computing and their potential applications...",
    author: "Dr. Emily Carter",
    date: "Feb 10, 2024",
    readTime: "7 min read",
    imageUrl: "/images/thisisengineering-64YrPKiguAE-unsplash (1).jpg",
  },
  {
    id: 4,
    category: "Business",
    title: "The Rise of Remote Work: Trends and Challenges",
    excerpt:
      "Examining how businesses are adapting to a remote-first workforce...",
    author: "John Davidson",
    date: "Feb 11, 2024",
    readTime: "6 min read",
    imageUrl: "/images/kristin-wilson-z3htkdHUh5w-unsplash.jpg",
  },
  {
    id: 5,
    category: "Health",
    title: "The Impact of Gut Health on Mental Well-Being",
    excerpt:
      "How gut microbiome influences mood, anxiety, and overall mental health...",
    author: "Dr. Lisa Andrews",
    date: "Feb 12, 2024",
    readTime: "5 min read",
    imageUrl: "/images/jonathan-borba-lrQPTQs7nQQ-unsplash (1).jpg",
  },
  {
    id: 6,
    category: "Technology",
    title: "5G and Beyond: The Future of Wireless Connectivity",
    excerpt:
      "Exploring the next-generation advancements in wireless technology...",
    author: "Mark Thompson",
    date: "Feb 13, 2024",
    readTime: "8 min read",
    imageUrl: "/images/adi-goldstein-EUsVwEOsblE-unsplash.jpg",
  },
  {
    id: 7,
    category: "Environment",
    title: "Sustainable Energy Innovations Shaping the Future",
    excerpt:
      "How cutting-edge green technologies are reducing carbon footprints...",
    author: "Sophia Martinez",
    date: "Feb 14, 2024",
    readTime: "6 min read",
    imageUrl: "/images/matthew-smith-Rfflri94rs8-unsplash (1).jpg",
  },
  {
    id: 8,
    category: "Finance",
    title: "Cryptocurrency Regulation: What Investors Need to Know",
    excerpt: "Understanding the evolving legal landscape for digital assets...",
    author: "Daniel Lee",
    date: "Feb 15, 2024",
    readTime: "7 min read",
    imageUrl: "/images/viktor-forgacs-3PyBkxgTiL0-unsplash (1).jpg",
  },
  {
    id: 9,
    category: "Education",
    title: "How AI is Transforming Online Learning Platforms",
    excerpt:
      "Exploring the role of artificial intelligence in personalized education and adaptive learning...",
    author: "Dr. Robert Harrison",
    date: "Feb 16, 2024",
    readTime: "6 min read",
    imageUrl: "/images/susan-q-yin-2JIvboGLeho-unsplash.jpg",
  },
];

export default function ArticlesPage() {
  const { searchQuery } = useSearch();
  const [filteredArticles, setFilteredArticles] = useState(newsArticles);

  useEffect(() => {
    const filtered = newsArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredArticles(filtered);
  }, [searchQuery]);

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <FadeInSection>
          <div className="text-center max-w-4xl mx-auto pt-4 mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Explore Our Articles
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover in-depth news and analysis across various categories.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <section className="mb-16">
            <LatestNews />
          </section>
        </FadeInSection>

        <FadeInSection delay={400}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Browse by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map(({ name, count, icon }) => (
                <Link
                  key={name}
                  href={`/category/${name.toLowerCase()}`}
                  className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{icon}</span>
                      <div>
                        <span className="text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                          {name}
                        </span>
                        <p className="text-sm text-gray-500">
                          {count} articles
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection delay={600}>
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    width={400}
                    height={250}
                    className="rounded-lg"
                  />
                  <h3 className="text-xl font-semibold mt-4">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500">{article.excerpt}</p>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-sm text-gray-600">
                      <User className="inline w-4 h-4 mr-1" />
                      {article.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      <Clock className="inline w-4 h-4 mr-1" />
                      {article.readTime}
                    </p>
                  </div>
                  <Link
                    href={`/article/${article.id}`}
                    className="text-blue-600 hover:underline mt-2 inline-block"
                  >
                    Read more <ArrowRight className="inline w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </FadeInSection>
      </div>
    </main>
  );
}
