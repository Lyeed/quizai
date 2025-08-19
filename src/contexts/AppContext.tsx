import {
    type SetStateAction,
    type Dispatch,
    type PropsWithChildren,
    createContext,
    useMemo,
    useState,
    type JSX,
} from "react";
import { QuizDifficulty, type QuestionFormat } from "src/@types/app";

interface IAppContext {
    difficulty: QuizDifficulty;
    setDifficulty: Dispatch<SetStateAction<QuizDifficulty>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    topic: string;
    setTopic: Dispatch<SetStateAction<string>>;
    mistakes: number;
    setMistakes: Dispatch<SetStateAction<number>>;
    done: boolean;
    setDone: Dispatch<SetStateAction<boolean>>;
    questions: QuestionFormat[];
    setQuestions: Dispatch<SetStateAction<QuestionFormat[]>>;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider = ({ children }: PropsWithChildren): JSX.Element => {
    const [difficulty, setDifficulty] = useState(QuizDifficulty.HARD);

    const [topic, setTopic] = useState("");

    const [mistakes, setMistakes] = useState(0);

    const [done, setDone] = useState(false);

    const [loading, setLoading] = useState(false);

    const [questions, setQuestions] = useState<QuestionFormat[]>([]);

    const context = useMemo(
        () => ({
            difficulty,
            setDifficulty,
            questions,
            setQuestions,
            done,
            setDone,
            topic,
            setTopic,
            mistakes,
            setMistakes,
            loading,
            setLoading,
        }),
        [questions, done, topic, mistakes, loading, difficulty]
    );

    return (
        <AppContext.Provider value={context}>{children}</AppContext.Provider>
    );
};

export default AppContext;
