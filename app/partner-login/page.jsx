"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please complete all missing fields");
      return;
    }

    // Simulate form submission
    setError("");
    console.log("Logging in with", { email, password });
    toast.success("Login successful! Redirecting...");
    // TODO: Add real login logic
    router.push("/"); // Redirect after login
  };

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-soft-white">
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="/assets/login-background.jpg" 
          alt="Login Background"
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center h-screen justify-center p-6">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Partner Login</h2>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              name="email"
              placeholder="Admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lavender-mist"
              autoComplete="off"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lavender-mist"
            />

            <div className="text-right">
              <a
                href="/partner-login/?action=forgot"
                className="text-sm text-dark-purple hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="bg-dark-purple text-white rounded px-4 py-2 hover:bg-purple-950 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
