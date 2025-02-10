"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaSearch, FaUser, FaTimes } from "react-icons/fa";
import { Menu } from "lucide-react";
import { useSearch } from "./SearchContext";

const categories = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "#news-categories" },
  { name: "Articles", href: "/articles" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const router = useRouter();
  const { searchQuery, setSearchQuery } = useSearch();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [localSearchQuery, setLocalSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearchQuery);

    if (window.location.pathname !== "/articles") {
      router.push("/articles");
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearchQuery(value);
    if (window.location.pathname === "/articles") {
      setSearchQuery(value); // Update global search state immediately on Articles page
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-white/10 backdrop-blur-md text-gray-800 shadow-lg"
            : "bg-transparent text-black"
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative group">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              NewsHub
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="relative group py-2"
              >
                <span className="text-sm font-medium">{category.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Search and User Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Enhanced Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={localSearchQuery}
                onChange={handleSearchChange}
                placeholder="Search news..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className={`w-64 px-4 py-2 rounded-full border transition-all duration-300
                  ${
                    searchFocused
                      ? "border-blue-500 ring-2 ring-blue-200"
                      : "border-gray-300"
                  }
                  ${isScrolled ? "bg-white" : "bg-white/10 backdrop-blur-sm"}
                  focus:outline-none`}
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaSearch className="text-sm" />
              </button>
            </form>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="flex items-center space-x-2 hover:text-blue-500 transition-colors duration-300"
              >
                <FaUser className="text-sm" />
                <span>Login</span>
              </Link>
              <Link
                href="/signup"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 
                  text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <Menu className="text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out
            ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
        >
          <nav className="container mx-auto px-4 py-4">
            <form onSubmit={handleSearch} className="mb-4">
              <input
                type="text"
                value={localSearchQuery}
                onChange={handleSearchChange}
                placeholder="Search news..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </form>
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="block py-3 text-gray-800 hover:text-blue-500 transition-colors border-b border-gray-100"
              >
                {category.name}
              </Link>
            ))}
            <div className="mt-4 space-y-4">
              <Link
                href="/login"
                className="block py-3 text-gray-800 hover:text-blue-500 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="block py-3 px-6 text-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
