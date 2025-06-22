import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import QuestionPage from "./components/QuestionPage";
import ResultPage from "./components/ResultPage";
import questions from "./data/questions";

function AppContent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleAnswer = (trait) => {
    const newAnswers = [...answers, trait];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setTimeout(() => {
        navigate("/result");
      }, 300);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setUserName("");
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage setUserName={setUserName} />} />
      <Route
        path="/quiz"
        element={
          <QuestionPage
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
            current={currentQuestion + 1}
            total={questions.length}
          />
        }
      />
      <Route
        path="/result"
        element={
          <ResultPage
            answers={answers}
            onRestart={handleRestart}
            userName={userName}
          />
        }
      />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
