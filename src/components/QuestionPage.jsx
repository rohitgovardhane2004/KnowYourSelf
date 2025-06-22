import React from "react";

export default function QuestionPage({ question, onAnswer, current, total }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-rose-100 to-cyan-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-600">
            Question {current} / {total}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-600 mt-2 mb-4">
           {question.question}
          </h2>
          <p className="text-sm italic text-gray-500">Choose in order of priority 👇</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option.trait)}
              className="bg-white hover:bg-orange-100 border border-orange-300 text-orange-700 font-medium p-4 rounded-xl shadow-md transition-all hover:scale-105 text-left"
            >
              <span className="text-xl mr-2">#{index + 1}</span> {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
