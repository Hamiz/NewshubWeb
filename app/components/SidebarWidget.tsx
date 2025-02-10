// src/components/sections/SidebarWidget.tsx
import { CloudSun, BarChart3, Newspaper, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function SidebarWidget() {
  return (
    <div className="space-y-6">
      {/* Weather Widget */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <CloudSun className="text-blue-500" /> Weather
        </h3>
        <div className="text-center relative group cursor-pointer">
          <div className="text-5xl font-bold text-gray-800 mb-2">72°F</div>
          <div className="text-gray-600 mb-1">Partly Cloudy</div>
          <div className="text-gray-500 text-sm">New York, NY</div>
          <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-blue-600 text-sm font-medium flex items-center gap-1">
              View Forecast <ExternalLink className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>

      {/* Market Updates Widget */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <BarChart3 className="text-blue-500" /> Market Updates
        </h3>
        <div className="space-y-3">
          {[
            { name: "S&P 500", value: "4,588.96", change: "+0.62%" },
            { name: "NASDAQ", value: "14,892.50", change: "+0.45%" },
            { name: "Dow Jones", value: "35,720.40", change: "+0.28%" },
          ].map((stock) => (
            <div
              key={stock.name}
              className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
            >
              <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                {stock.name}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-800">
                  {stock.value}
                </span>
                <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full text-sm">
                  {stock.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Articles Widget */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Newspaper className="text-blue-500" /> Recommended
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "Future of Digital Transformation",
              category: "Technology",
              link: "https://kbmax.com/blog/digital-transformation-industry-10-future-trends/",
            },
            {
              title: "Global Economic Recovery",
              category: "Economy",
              link: "https://www.worldbank.org/en/publication/global-economic-prospects",
            },
            {
              title: "Climate Change Innovations",
              category: "Science",
              link: "https://pvcase.com/blog/7-new-inventions-that-could-fight-the-effects-of-climate-change/",
            },
          ].map((article, index) => (
            <Link
              href={article.link}
              key={index}
              className={`
                block group p-3 rounded-lg hover:bg-gray-50 transition-all
                ${index < 2 ? "border-b border-gray-100" : ""}
              `}
            >
              <h4 className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors">
                {article.title}
              </h4>
              <div className="flex items-center justify-between mt-1">
                <span className="text-gray-500 text-sm">
                  {article.category}
                </span>
                <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
