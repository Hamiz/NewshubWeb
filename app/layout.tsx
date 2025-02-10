//app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { SearchProvider } from "./components/SearchContext"; // Add this import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NewsHub - Your Trusted News Source",
  description: "Comprehensive news coverage across various categories",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background text-text min-h-screen flex flex-col`}
      >
        <SearchProvider>
          {" "}
          {/* Add this wrapper */}
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
