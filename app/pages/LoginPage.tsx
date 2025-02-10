import React, { useState } from "react";
import { Mail, Lock, User, Loader2 } from "lucide-react";

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedField, setFocusedField] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      {/* <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[gradient_3s_linear_infinite]" /> */}

      <section className="relative w-full max-w-md">
        {/* Floating shapes background */}
        <div className="absolute -z-10 inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 animate-pulse" />
        </div>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 transform transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
          {/* Header */}
          <div className="text-center mb-8 transform transition-all duration-500">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 p-4 shadow-lg transform transition-transform duration-500 hover:rotate-12">
              <User className="w-full h-full text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Welcome Back
            </h2>
            <p className="text-gray-500 mt-2">
              Log in to continue your journey
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label
                htmlFor="email"
                className={`block text-sm font-medium transition-colors duration-300 ${
                  focusedField === "email" ? "text-blue-600" : "text-gray-700"
                }`}
              >
                Email
              </label>
              <div className="relative group">
                <Mail
                  className={`absolute left-3 top-3 transition-colors duration-300 ${
                    focusedField === "email" ? "text-blue-600" : "text-gray-500"
                  }`}
                />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField("")}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border bg-white/50 backdrop-blur-sm
                    transition-all duration-300
                    border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20
                    hover:border-blue-400 outline-none"
                  placeholder="your@email.com"
                />
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 
                  transition-all duration-300 group-hover:w-full"
                />
              </div>
            </div>

            <div className="space-y-1">
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
              <div className="relative group">
                <Lock
                  className={`absolute left-3 top-3 transition-colors duration-300 ${
                    focusedField === "password"
                      ? "text-blue-600"
                      : "text-gray-500"
                  }`}
                />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField("")}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border bg-white/50 backdrop-blur-sm
                    transition-all duration-300
                    border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20
                    hover:border-blue-400 outline-none"
                  placeholder="Enter your password"
                />
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 
                  transition-all duration-300 group-hover:w-full"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 group cursor-pointer">
                <div className="relative w-4 h-4">
                  <input type="checkbox" className="peer sr-only" />
                  <div
                    className="absolute inset-0 border-2 border-gray-300 rounded peer-checked:border-blue-500 
                    transition-colors duration-300"
                  />
                  <div
                    className="absolute inset-0 scale-0 peer-checked:scale-100 bg-blue-500 rounded 
                    transition-transform duration-300"
                  />
                </div>
                <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="relative w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 
                text-white font-medium text-lg overflow-hidden group
                transform hover:scale-[1.02] active:scale-[0.98]
                transition-all duration-300 hover:shadow-xl disabled:opacity-70"
            >
              <div
                className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 
                transition-transform duration-300"
              />
              <div className="relative flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>logging in...</span>
                  </>
                ) : (
                  <span>Login</span>
                )}
              </div>
            </button>

            <div className="text-center text-gray-600">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
              >
                Sign up
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
