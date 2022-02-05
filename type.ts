export interface Question {
  id: number;
  questionDE: string;
  questionEN: string;
  answer: string;
  options: string[];
}

export interface Word {
  id: number;
  word: string;
  translation?: string;
}

export interface WordResults {
  results: Word[];
}

export interface AnswerProps {
  isAnswered: boolean;
  isCorrect: boolean;
  currentAnswer: string;
}

export interface QuizState {
  currentQuestion: number;
  currentAnswer: string;
  isAnswered: boolean;
  isCorrect: boolean;
}

export interface ButtonContainerProps {
  height?: number;
  isAnswered: boolean;
  isCorrect: boolean;
}
