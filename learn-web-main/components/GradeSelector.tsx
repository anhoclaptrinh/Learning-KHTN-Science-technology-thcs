"use client";

interface GradeSelectorProps {
  selectedGrade: string;
  onGradeChange: (grade: string) => void;
  color: string;
}

export default function GradeSelector({ selectedGrade, onGradeChange, color }: GradeSelectorProps) {
  const grades = ["6", "7", "8"];

  return (
    <div className="flex gap-3 justify-center mb-6">
      {grades.map((grade) => (
        <button
          key={grade}
          onClick={() => onGradeChange(grade)}
          className={`px-6 py-3 rounded-xl font-bold transition-all ${
            selectedGrade === grade
              ? `${color} text-white shadow-lg scale-105`
              : "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300"
          }`}
        >
          Lớp {grade}
        </button>
      ))}
    </div>
  );
}

