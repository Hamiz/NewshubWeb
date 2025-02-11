"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Add actual subscription logic here
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[gradient_3s_linear_infinite]" />
      </div>

      <div className="relative container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                NewsHub
              </h3>
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300" />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Your comprehensive source for latest news, breaking stories, and
              in-depth analysis across various categories.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold relative inline-block">
              Quick Links
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500" />
            </h4>
            <nav className="space-y-3">
              {[
                { name: "About Us", href: "/about-us" },
                { name: "Contact", href: "/contact" },
                { name: "Articles", href: "/articles" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center group text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold relative inline-block">
              Newsletter
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500" />
            </h4>
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <p className="text-sm text-gray-400">
                  Stay updated with our latest news and updates.
                </p>
                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    />
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-green-500/20 text-green-400 p-4 rounded-lg">
                Thanks for subscribing! 🎉
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold relative inline-block">
              Connect With Us
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500" />
            </h4>
            <div className="flex space-x-4">
              {[
                {
                  Icon: Facebook,
                  href: "https://www.facebook.com/p/Interneepk-100093222249320/",
                  color: "hover:text-blue-500",
                },
                { Icon: Twitter, href: "/", color: "hover:text-sky-500" },
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/internee.pk/",
                  color: "hover:text-pink-500",
                },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/company/internship-pakistan/?originalSubdomain=pk",
                  color: "hover:text-blue-700",
                },
              ].map(({ Icon, href, color }, index) => (
                <Link
                  key={index}
                  href={href}
                  className={`bg-white/10 p-3 rounded-lg ${color} hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300`}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} NewsHub. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">
                Sitemap
              </Link>
              <span>•</span>
              <Link href="/" className="hover:text-white transition-colors">
                Accessibility
              </Link>
              <span>•</span>
              <Link href="/" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
