"use client";

import { useState, useEffect } from "react";
import { Question, QuizResult, UserAnswer } from "@/types/question";

interface QuizComponentProps {
  questions: Question[];
  subjectName: string;
  subjectColor: string;
}

export default function QuizComponent({
  questions,
  subjectName,
  subjectColor,
}: QuizComponentProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [startTime, setStartTime] = useState<number>(Date.now());

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showExplanation) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);

    const answer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect,
      timeSpent,
    };

    setUserAnswers([...userAnswers, answer]);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setStartTime(Date.now());
    } else {
      // Kết thúc quiz
      calculateResult();
    }
  };

  const calculateResult = () => {
    const correctAnswers = userAnswers.filter((a) => a.isCorrect).length +
      (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0);
    const totalQuestions = questions.length;
    const score = userAnswers.reduce((sum, a) => {
      const q = questions.find((q) => q.id === a.questionId);
      return sum + (a.isCorrect ? q?.points || 0 : 0);
    }, 0) + (selectedAnswer === currentQuestion.correctAnswer ? currentQuestion.points || 0 : 0);
    const percentage = (correctAnswers / totalQuestions) * 100;

    setQuizResult({
      totalQuestions,
      correctAnswers,
      score,
      percentage,
      answers: [...userAnswers, {
        questionId: currentQuestion.id,
        selectedAnswer: selectedAnswer!,
        isCorrect: selectedAnswer === currentQuestion.correctAnswer,
        timeSpent: Math.floor((Date.now() - startTime) / 1000),
      }],
    });
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setUserAnswers([]);
    setShowResult(false);
    setShowExplanation(false);
    setQuizResult(null);
    setStartTime(Date.now());
  };

  if (showResult && quizResult) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">
              {quizResult.percentage >= 80 ? "🎉" : quizResult.percentage >= 60 ? "👍" : "💪"}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Hoàn thành bài tập!
            </h2>
            <p className="text-gray-700">
              Kết quả của bạn cho môn {subjectName}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {quizResult.correctAnswers}/{quizResult.totalQuestions}
              </div>
              <div className="text-sm text-gray-700 font-medium">Câu đúng</div>
            </div>
            <div className="bg-green-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {quizResult.percentage.toFixed(1)}%
              </div>
              <div className="text-sm text-gray-700 font-medium">Tỷ lệ chính xác</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {quizResult.score}
              </div>
              <div className="text-sm text-gray-700 font-medium">Điểm số</div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={resetQuiz}
              className={`flex-1 bg-gradient-to-r ${subjectColor} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all`}
            >
              Làm lại
            </button>
            <a
              href="/"
              className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-300 transition-all text-center"
            >
              Về trang chủ
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-700">
            Câu {currentQuestionIndex + 1} / {questions.length}
          </span>
          <span className="text-sm text-gray-700 font-medium">
            {progress.toFixed(0)}% hoàn thành
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className={`bg-gradient-to-r ${subjectColor} h-3 rounded-full transition-all duration-300`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
        <div className="mb-6">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {currentQuestion.chapter}
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQuestion.correctAnswer;
            const showCorrectAnswer = showExplanation && isCorrect;
            const showWrongAnswer = showExplanation && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showExplanation}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  showCorrectAnswer
                    ? "border-green-500 bg-green-50"
                    : showWrongAnswer
                    ? "border-red-500 bg-red-50"
                    : isSelected
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                } ${showExplanation ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                <div className="flex items-center">
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center mr-3 font-semibold ${
                      showCorrectAnswer ? "border-green-500 bg-green-500 text-white" :
                      showWrongAnswer ? "border-red-500 bg-red-500 text-white" :
                      isSelected ? "border-blue-500 bg-blue-500 text-white" : "border-gray-300"
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1">{option}</span>
                  {showCorrectAnswer && <span className="text-green-600 text-xl">✓</span>}
                  {showWrongAnswer && <span className="text-red-600 text-xl">✗</span>}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl mb-6">
            <h3 className="font-bold text-blue-900 mb-2">💡 Giải thích:</h3>
            <p className="text-blue-800">{currentQuestion.explanation}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4">
          {!showExplanation ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
                selectedAnswer === null
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : `bg-gradient-to-r ${subjectColor} text-white hover:shadow-lg`
              }`}
            >
              Kiểm tra đáp án
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className={`flex-1 bg-gradient-to-r ${subjectColor} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all`}
            >
              {currentQuestionIndex < questions.length - 1
                ? "Câu tiếp theo →"
                : "Xem kết quả"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

