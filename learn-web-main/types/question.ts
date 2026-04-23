export type QuestionType = "multiple_choice" | "true_false";

export type DifficultyLevel = "easy" | "medium" | "hard";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: DifficultyLevel;
  points?: number;
  chapter?: string;
}

export interface GradeData {
  questions: Question[];
}

export interface SubjectData {
  subject: string;
  grades: {
    [grade: string]: GradeData;
  };
}

export interface UserAnswer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
  timeSpent: number;
}

export interface QuizResult {
  totalQuestions: number;
  correctAnswers: number;
  score: number;
  percentage: number;
  answers: UserAnswer[];
}

