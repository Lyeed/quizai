export interface QuestionFormat {
    question: string;
    responses: string[];
    answer: number;
}

export enum QuizDifficulty {
    VERY_EASY = "Very easy",
    EASY = "Easy",
    MEDIUM = "Medium",
    HARD = "Hard",
    VERY_HARD = "Very hard",
}
