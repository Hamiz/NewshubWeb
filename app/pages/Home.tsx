"use client";

import HeroSection from "../components/HeroSection";
import LatestNews from "../components/LatestNews";
import SidebarWidget from "../components/SidebarWidget";
import TrendingNews from "../components/TrendingNews";

const Home = () => {
  return (
    <main className="container mx-auto px-4 py-10">
      {/* Hero Section - Full Width with consistent spacing */}
      <section className="mb-12">
        <HeroSection />
      </section>

      {/* Two Column Layout with responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Main Content Area */}
        <div className="md:col-span-8 space-y-12">
          <section>
            <LatestNews />
          </section>
          <section>
            <TrendingNews />
          </section>
        </div>

        {/* Sidebar Area */}
        <aside className="md:col-span-4">
          <div className="sticky top-4">
            <SidebarWidget />
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Home;
