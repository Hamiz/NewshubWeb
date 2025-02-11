import React, { useState, useEffect, ReactNode } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
}

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

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Form submitted");
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 pt-20 py-16">
        {/* Animated Header Section */}
        <FadeInSection>
          <section className="mb-16 text-center">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
              Get in Touch
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              We&apos;re here to help and answer any questions you might have.
              Looking forward to hearing from you.
            </p>
          </section>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Enhanced Contact Form */}
          <FadeInSection delay={200}>
            <section className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Send us a Message
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-hover:text-blue-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-100 
                      focus:border-blue-500 transition-all duration-300 hover:border-blue-300"
                    placeholder="Your name"
                  />
                </div>
                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-hover:text-blue-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-100 
                      focus:border-blue-500 transition-all duration-300 hover:border-blue-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-hover:text-blue-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-100 
                      focus:border-blue-500 transition-all duration-300 hover:border-blue-300 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 
                    text-white text-lg font-medium hover:from-blue-700 hover:to-purple-700 
                    transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]
                    transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </section>
          </FadeInSection>

          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            <FadeInSection delay={400}>
              <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4 group hover:bg-blue-50/50 p-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                    <Mail className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Email</h3>
                      <a
                        href="mailto:contact@newshub.com"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        contact@newshub.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group hover:bg-blue-50/50 p-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                    <Phone className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Phone</h3>
                      <a
                        href="tel:+15551234567"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group hover:bg-blue-50/50 p-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                    <MapPin className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">
                        Address
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        123 News Street
                        <br />
                        New York, NY 10001
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={600}>
              <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-3 mb-8">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-800">
                    Office Hours
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 hover:bg-blue-50/50 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-gray-800 font-medium px-4 py-1 bg-blue-100 rounded-full">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 hover:bg-blue-50/50 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-800 font-medium px-4 py-1 bg-blue-100 rounded-full">
                      10:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 hover:bg-blue-50/50 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-800 font-medium px-4 py-1 bg-red-100 rounded-full">
                      Closed
                    </span>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </main>
  );
}
