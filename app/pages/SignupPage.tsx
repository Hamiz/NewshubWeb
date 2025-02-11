import React, { useState } from "react";
import { Mail, Lock, User, Check } from "lucide-react";

function SignupPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [focusedField, setFocusedField] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex justify-center items-center p-4">
      {/* <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-50" /> */}

      <section className="w-full max-w-md transform hover:scale-[1.01] transition-all duration-500">
        {/* Glass Card Effect */}
        <div className="backdrop-blur-xl bg-white/80 p-8 rounded-3xl shadow-2xl space-y-6">
          {/* Animated Header */}
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Create Account
            </h2>
            <p className="text-gray-500">Join our community today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="group">
              <label
                htmlFor="name"
                className={`block text-sm font-medium transition-colors duration-300 ${
                  focusedField === "name" ? "text-blue-600" : "text-gray-700"
                }`}
              >
                Name
              </label>
              <div className="relative mt-2">
                <User
                  className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                    focusedField === "name" ? "text-blue-600" : "text-gray-400"
                  }`}
                />
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField("")}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 bg-white/50 
                    border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20
                    transition-all duration-300 outline-none"
                  placeholder="Your Name"
                />
                <div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 
                  transform origin-left scale-x-0 transition-transform duration-300 
                  group-focus-within:scale-x-100"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="group">
              <label
                htmlFor="email"
                className={`block text-sm font-medium transition-colors duration-300 ${
                  focusedField === "email" ? "text-blue-600" : "text-gray-700"
                }`}
              >
                Email
              </label>
              <div className="relative mt-2">
                <Mail
                  className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                    focusedField === "email" ? "text-blue-600" : "text-gray-400"
                  }`}
                />
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField("")}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 bg-white/50 
                    border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20
                    transition-all duration-300 outline-none"
                  placeholder="your@email.com"
                />
                <div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 
                  transform origin-left scale-x-0 transition-transform duration-300 
                  group-focus-within:scale-x-100"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="group">
              <label
                htmlFor="password"
                className={`block text-sm font-medium transition-colors duration-300 ${
                  focusedField === "password"
                    ? "text-blue-600"
                    : "text-gray-700"
                }`}
              >
                Password
              </label>
              <div className="relative mt-2">
                <Lock
                  className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                    focusedField === "password"
                      ? "text-blue-600"
                      : "text-gray-400"
                  }`}
                />
                <input
                  type="password"
                  id="password"
                  value={formState.password}
                  onChange={(e) =>
                    setFormState({ ...formState, password: e.target.value })
                  }
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField("")}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 bg-white/50 
                    border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20
                    transition-all duration-300 outline-none"
                  placeholder="••••••••"
                />
                <div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 
                  transform origin-left scale-x-0 transition-transform duration-300 
                  group-focus-within:scale-x-100"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 
                text-white text-lg font-medium relative overflow-hidden group
                transform hover:scale-[1.02] active:scale-[0.98] 
                transition-all duration-300 hover:shadow-xl disabled:opacity-70"
            >
              <div
                className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 
                transition-transform duration-500 origin-left"
              />
              <div className="relative flex items-center justify-center gap-2">
                {isLoading ? (
                  <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Create Account</span>
                    <Check className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </div>
            </button>

            {/* Sign In Link */}
            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-600 hover:text-blue-700 font-medium 
                transition-colors duration-300 hover:underline"
              >
                Login
              </a>
            </p>
          </form>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -z-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl top-0 -left-32 animate-pulse" />
        <div className="absolute -z-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl bottom-0 -right-32 animate-pulse delay-1000" />
      </section>
    </main>
  );
}

export default SignupPage;
