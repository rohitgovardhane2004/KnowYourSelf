import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage({ setUserName }) {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (name.trim()) {
      setUserName(name.trim());
      navigate("/quiz");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-200 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl bg-white/60 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/20">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-pink-600 mb-4 drop-shadow-sm">
          Know About Yourself 💭
        </h1>

        <p className="text-xl sm:text-2xl text-gray-700 mb-6">
          Enter your name to begin:
        </p>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 rounded-full text-center border-2 border-pink-300 outline-none mb-6 w-60 focus:ring-2 focus:ring-pink-500"
        />

        <br />

        <button
          onClick={handleStart}
          className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-pink-500 hover:to-orange-400 text-white px-8 py-3 rounded-full text-lg shadow-xl transition-transform hover:scale-105"
        >
          Start Quiz 🚀
        </button>
      </div>
    </div>
  );
}
