import {
    type SetStateAction,
    type Dispatch,
    type PropsWithChildren,
    createContext,
    useMemo,
    useState,
    type JSX,
} from "react";
import type { QuestionFormat } from "src/@types/app";

interface IAppContext {
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
    const [topic, setTopic] = useState("");

    const [mistakes, setMistakes] = useState(0);

    const [done, setDone] = useState(false);

    const [questions, setQuestions] = useState<QuestionFormat[]>([]);

    const context = useMemo(
        () => ({
            questions,
            setQuestions,
            done,
            setDone,
            topic,
            setTopic,
            mistakes,
            setMistakes,
        }),
        [questions, done, topic, mistakes]
    );

    return (
        <AppContext.Provider value={context}>{children}</AppContext.Provider>
    );
};

export default AppContext;
