"use client";

import { useState } from "react";
import AssistantButtonSmall from "../_components/small-button";
import { toast } from "sonner";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/outbound/phone", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phoneNumber }),
      });
      setName("");
      setPhoneNumber("");
      toast.success("User Added successfully");
      if (!response.ok) {
        throw new Error("Invalid name or password");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-between p-12`}
    >
      {/* Login Box */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white shadow-md rounded p-6 w-[500px]">
          {!isLoggedIn ? (
            <form onSubmit={handleLogin} className="space-y-3">
              <h2 className="text-lg font-semibold mb-4 text-neutral-700">
                Add Details
              </h2>
              {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-1 text-neutral-800"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-semibold mb-1 text-neutral-800"
                >
                  PhoneNumber:
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 px-4 text-white font-semibold rounded ${
                  loading
                    ? "bg-gray-400"
                    : "bg-neutral-800 hover:bg-neutral-700"
                }`}
              >
                {loading ? "Checking in..." : "Add Details"}
              </button>
            </form>
          ) : (
            <div className="text-center">
              <p className="text-sm font-semibold text-black">Welcome, User!</p>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center">
        <h1 className="text-3xl text-gray">Welcome to RealIt Assistant</h1>
        <p className="text-slate-600">
          Talk with RealIt to understand about your SaaS product.
        </p>
      </div>

      {/* Assistant Component */}
      <div className="fixed bottom-4 right-4 z-40">
        <AssistantButtonSmall />
      </div>
    </main>
  );
}
