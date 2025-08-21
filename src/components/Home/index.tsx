import {
    type FormEventHandler,
    useCallback,
    useMemo,
    type JSX,
    useState,
    type ChangeEventHandler,
    type MouseEventHandler,
    useContext,
} from "react";
import { useFetchQuestions } from "src/utils/useFetchQuestions";
import { QuizDifficulty } from "src/@types/app";
import AppContext from "src/contexts/AppContext";
import { Main } from "../library";
import { subjects } from "./Home.constants";
import {
    Description,
    DifficultySelect,
    Prompt,
    Subject,
    Subjects,
    SubmitButton,
    Title,
} from "./Home.styled";

export const Home = (): JSX.Element => {
    const { setDifficulty, difficulty } = useContext(AppContext);

    const [prompt, setPrompt] = useState("");

    const randomSubjects = useMemo(
        () => subjects.sort((a, b) => 0.5 - Math.random()).slice(0, 4),
        []
    );

    const fetchQuestions = useFetchQuestions();

    const handlePromptChange = useCallback<
        ChangeEventHandler<HTMLInputElement>
    >((event) => {
        setPrompt(event.currentTarget.value);
    }, []);

    const handleDifficultyChange = useCallback<
        ChangeEventHandler<HTMLSelectElement>
    >(
        (event) => {
            setDifficulty(event.currentTarget.value as QuizDifficulty);
        },
        [setDifficulty]
    );

    const handleClickTag = useCallback<MouseEventHandler<HTMLButtonElement>>(
        (event) => {
            const { topic } = event.currentTarget.dataset;

            if (topic) {
                void fetchQuestions(topic);
            }
        },
        [fetchQuestions]
    );

    const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
        (event) => {
            event.preventDefault();
            void fetchQuestions(prompt);
        },
        [fetchQuestions, prompt]
    );

    return (
        <Main onSubmit={handleSubmit}>
            <Title>
                Your AI Quiz
                <br />
                Starts Here
            </Title>
            <DifficultySelect
                value={difficulty}
                name="difficulty"
                aria-label="Difficulty"
                onChange={handleDifficultyChange}
            >
                {Object.values(QuizDifficulty).map((difficulty) => (
                    <option key={difficulty} value={difficulty}>
                        {difficulty}
                    </option>
                ))}
            </DifficultySelect>
            <Description>
                Pick a topic and let AI generate 10 questions for you.
            </Description>
            <Prompt
                required
                value={prompt}
                placeholder="Enter a topic (e.g Space, Music, History)"
                maxLength={48}
                name="topic"
                onChange={handlePromptChange}
            />
            <Subjects>
                {randomSubjects.map((subject) => (
                    <Subject
                        key={subject}
                        data-topic={subject}
                        onClick={handleClickTag}
                    >
                        {subject}
                    </Subject>
                ))}
            </Subjects>
            <SubmitButton type="submit">Start Quiz 🚀</SubmitButton>
        </Main>
    );
};
