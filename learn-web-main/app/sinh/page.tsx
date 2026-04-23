"use client";

import { useState } from "react";
import QuizComponent from "@/components/QuizComponent";
import HumanBody from "@/components/HumanBody";
import GradeSelector from "@/components/GradeSelector";
import sinhData from "@/data/sinh.json";
import Link from "next/link";
import { SubjectData } from "@/types/question";

export default function SinhPage() {
  const [activeTab, setActiveTab] = useState<"human-body" | "quiz">("human-body");
  const [selectedGrade, setSelectedGrade] = useState<string>("8");

  const data = sinhData as SubjectData;
  const questions = data.grades[selectedGrade]?.questions || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-green-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                ← Quay lại
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  🌱 Sinh Học
                </h1>
                <p className="text-sm text-gray-700 font-medium">
                  Cơ thể người & {questions.length} câu hỏi (Lớp {selectedGrade})
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm p-2 inline-flex gap-2">
          <button
            onClick={() => setActiveTab("human-body")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "human-body"
                ? "bg-green-500 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            🧍 Cơ Thể Người
          </button>
          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "quiz"
                ? "bg-green-500 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            ✏️ Làm Bài Tập
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pb-8 sm:px-6 lg:px-8">
        {activeTab === "human-body" ? (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <HumanBody />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Chọn lớp học
              </h2>
              <GradeSelector
                selectedGrade={selectedGrade}
                onGradeChange={setSelectedGrade}
                color="bg-green-500"
              />
            </div>
            {questions.length > 0 ? (
              <QuizComponent
                questions={questions}
                subjectName={`Sinh học lớp ${selectedGrade}`}
                subjectColor="from-green-500 to-emerald-500"
              />
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <p className="text-gray-600 text-lg font-medium">
                  Chưa có câu hỏi cho lớp {selectedGrade}
                </p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

