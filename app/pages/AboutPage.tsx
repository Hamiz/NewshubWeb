import React, { useState, useEffect, ReactNode } from "react";
import { Users, Globe, Award } from "lucide-react";
import Image from "next/image";

interface StatItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
}

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
}

const stats: StatItem[] = [
  { icon: Users, label: "Active Readers", value: "1M+" },
  { icon: Globe, label: "Countries Reached", value: "150+" },
  { icon: Award, label: "Years of Excellence", value: "15+" },
];

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  delay = 0,
}) => {
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

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-20">
        <FadeInSection>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              About NewsHub
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Delivering reliable, comprehensive news coverage to keep you
              informed about what matters most in an ever-changing world.
            </p>
          </div>
        </FadeInSection>

        {/* Mission Section */}
        <FadeInSection delay={200}>
          <div className="mt-24 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-500 to-purple-600">
                <Image
                  src="/images/4k-ultra-hd-smart-tv_1079150-45367.jpg"
                  alt="Our Newsroom"
                  width={800} // Set an appropriate width
                  height={500} // Set an appropriate height
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">Our Mission</h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  At NewsHub, we believe in the transformative power of
                  well-informed citizens. Our mission is to provide accurate,
                  unbiased news coverage that empowers readers to understand and
                  engage with the world around them.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We uphold the highest standards of journalistic integrity,
                  rigorous fact-checking, and ethical reporting to ensure our
                  readers receive information they can trust in an era of
                  increasing uncertainty.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Stats Section */}
        <FadeInSection delay={400}>
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-500">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="mt-6 text-4xl font-bold text-gray-800">
                    {value}
                  </h3>
                  <p className="mt-2 text-gray-600">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Values Section */}
        <FadeInSection delay={600}>
          <div className="mt-24 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Our Values
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Trust, transparency, and truth form the foundation of everything
                we do. We&apos;re committed to delivering news that matters,
                when it matters, while maintaining the highest standards of
                journalistic excellence.
              </p>
              <p>
                Our team of dedicated professionals works tirelessly to bring
                you comprehensive coverage from around the globe, ensuring you
                stay connected to the stories that shape our world.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
}
