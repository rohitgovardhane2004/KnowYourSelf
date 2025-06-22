import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import traitInfo from "../utils/traits";
import generateSummary from "../utils/generateSummary";
import getPersonalityTitle from "../utils/personalityTags";

// Suggestions for improvement by trait
const improvementSuggestions = {
  Leader: "Try leading small group discussions or take initiative in team settings.",
  Empathetic: "Practice active listening and engage in volunteer work to develop empathy.",
  Logical: "Solve logic puzzles or analyze real-life problems with cause-effect thinking.",
  Creative: "Explore creative hobbies like drawing, music, or brainstorming exercises.",
  Calm: "Use mindfulness or meditation apps to handle stress and stay composed.",
  Humble: "Balance modesty with celebrating your wins and sharing achievements.",
  Charismatic: "Practice public speaking or join drama groups to build confidence.",
  Resilient: "Reflect on setbacks and reframe them as learning opportunities.",
  Collaborative: "Join clubs or group projects to improve teamwork.",
  Curious: "Read diverse topics or take short online courses to fuel curiosity.",
  Honest: "Always align actions with values, even in small everyday choices.",
  Cautious: "Step out of comfort zones slowly—try new things in low-risk settings.",
  Strategic: "Set long-term goals and reverse engineer small steps to get there.",
  Adventurous: "Try something new every week—food, activity, or place.",
  Confident: "Affirm your skills regularly and push yourself into leadership roles.",
  Patient: "Practice waiting or delayed gratification in small tasks.",
  Independent: "Take charge of personal decisions and own the outcomes.",
  Helpful: "Offer support in communities or online forums for mutual growth.",
  Disciplined: "Use to-do lists and time blocks to stay consistent."
};

export default function ResultPage({ answers, onRestart, userName }) {
  if (!answers || answers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-red-100 text-red-800">
        <h2 className="text-2xl font-bold">No result available</h2>
        <button
          onClick={onRestart}
          className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg"
        >
          Go Back to Start
        </button>
      </div>
    );
  }

  const traitCount = answers.reduce((acc, trait) => {
    acc[trait] = (acc[trait] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(traitCount).map(([trait, count]) => ({
    name: trait,
    value: count,
  }));

  const topTraits = chartData
    .sort((a, b) => b.value - a.value)
    .slice(0, 3)
    .map((t) => t.name);

  const personalitySummary = generateSummary(topTraits);
  const personalityTitle = getPersonalityTitle(topTraits);
  const topTrait = chartData.reduce((a, b) => (a.value > b.value ? a : b), {});

  const sortedTraits = [...chartData].sort((a, b) => b.value - a.value);
  const strengths = sortedTraits.slice(0, 3).map((t) => t.name);
  const weaknesses = sortedTraits
    .slice(-3)
    .map((t) => t.name)
    .filter((w) => !strengths.includes(w));

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-orange-100 to-emerald-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/30">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-2">
          {userName
            ? `Hey ${userName}, here's what we learned about you ✨`
            : "Here's what we learned about you ✨"}
        </h2>

        <h3 className="text-2xl font-semibold text-center text-orange-500 mb-4">
          {personalityTitle}
        </h3>

        <p className="text-center text-lg mb-6">
          You are most likely <strong>{topTrait.name}</strong> 🎭 — {" "}
          {traitInfo[topTrait.name] || "a unique blend of traits!"}
        </p>

        {/* Chart Explanation */}
        <p className="text-center text-sm text-gray-600 italic mb-2">
          📊 This graph shows how many times you displayed each trait based on your answers — 
          the taller the bar, the stronger the trait.
        </p>

        <div className="h-64 mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#fb923c" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-yellow-50/80 border-l-4 border-yellow-400 p-6 rounded-lg shadow-inner text-gray-800">
          <p className="text-md whitespace-pre-wrap leading-relaxed">
            {userName && <strong>{userName}, </strong>}
            {personalitySummary}
          </p>
        </div>

        {/* 🎯 Strengths */}
        <div className="mt-6">
          <h4 className="text-xl font-semibold text-green-600 mb-2">
            🌟 Your Core Strengths
          </h4>
          <ul className="list-disc ml-6 text-gray-800">
            {strengths.map((trait) => (
              <li key={trait}>
                <strong>{trait}</strong> — {traitInfo[trait] || "An impressive quality!"}
              </li>
            ))}
          </ul>
        </div>

        {/* ⚠️ Weaknesses */}
        {weaknesses.length > 0 && (
          <div className="mt-6">
            <h4 className="text-xl font-semibold text-red-600 mb-2">
              ⚠️ Areas You Might Overlook
            </h4>
            <ul className="list-disc ml-6 text-gray-800">
              {weaknesses.map((trait) => (
                <li key={trait}>
                  <strong>{trait}</strong> — Consider building this side for balance. {improvementSuggestions[trait] && `Tip: ${improvementSuggestions[trait]}`}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="text-center mt-8">
          <button
            onClick={onRestart}
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white px-8 py-3 rounded-full text-lg shadow-lg transition-transform hover:scale-105"
          >
            Retake Quiz 🔁
          </button>
        </div>
      </div>
    </div>
  );
}
