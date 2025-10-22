"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const router = useRouter();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const callback = await signIn("credentials", {
        Email,
        Password,
        redirect: false,
      });
      if (callback?.error) {
        setError("Either email or password is wrong");
        setLoading(false);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session?.user?.role === "Student") {
      router.replace("/student/dashboard");
    } else if (session?.user?.role === "Admin") {
      router.replace("/admin/dashboard");
    } else if (session?.user?.role === "Superadmin") {
      router.replace("/superadmin/dashboard");
    }
  }, [session, router]);

  return (
    <>
      {/* 🌌 Aurora Background */}
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 aurora-bg"></div>

        {/* ✨ Login Card */}
        <div className="relative z-10 w-full max-w-4xl grid md:grid-cols-2 bg-white/20 backdrop-blur-xl  border-white/30 shadow-2xl rounded-2xl overflow-hidden animate-fade-in">
          {/* Left: Login Form */}
          <div className="flex flex-col justify-center p-10">
            <h2 className="text-3xl font-bold text-white mb-2">
              Welcome Back 👋
            </h2>
            <p className="text-gray-300 mb-6">
              Log in to continue to FM Consultants
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/20 text-white border border-white/30 rounded-lg p-3 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
                  placeholder="Email address"
                  required
                />
              </div>

              {/* Password field */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/20 text-white border border-white/30 rounded-lg p-3 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-300 hover:text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Error message */}
              {error && <p className="text-red-400 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-3 rounded-lg shadow-lg transition disabled:opacity-50"
              >
                {loading ? "Logging in..." : "Log in"}
              </button>
            </form>

            {/* Social links */}
            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-3">Our Social Media's</p>
              <div className="flex justify-center gap-4">
                {["instagram", "facebook", "twitter", "linkedin"].map((icon) => (
                  <Image
                    key={icon}
                    src={`/${icon}.png`}
                    width={30}
                    height={30}
                    alt={icon}
                    className="cursor-pointer hover:scale-110 transition"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-pink-600/50 to-red-600/50 p-8 text-white">
            <Image
              src="/students.png"
              width={350}
              height={300}
              alt="Students"
            />
            <h1 className="text-2xl font-bold mt-6 text-center">
              FM Consultants E-Portal
            </h1>
            <p className="text-pink-100 text-center mt-2">
              Opening Doors to Worldwide Opportunities
            </p>
          </div>
        </div>
      </div>

      {/* 🌈 Aurora & Animations */}
      <style jsx global>{`
        .aurora-bg {
          background: radial-gradient(
              circle at 20% 30%,
              rgba(255, 0, 128, 0.6) 0%,
              transparent 40%
            ),
            radial-gradient(
              circle at 80% 20%,
              rgba(0, 200, 255, 0.5) 0%,
              transparent 40%
            ),
            radial-gradient(
              circle at 50% 80%,
              rgba(0, 255, 128, 0.4) 0%,
              transparent 40%
            );
          animation: aurora 15s ease-in-out infinite alternate;
          background-size: 200% 200%;
          filter: blur(80px);
        }

        @keyframes aurora {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0px);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Login;
