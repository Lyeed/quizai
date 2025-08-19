import {
    type FormEventHandler,
    useCallback,
    useMemo,
    type JSX,
    useContext,
    useState,
    type ChangeEventHandler,
    type MouseEventHandler,
} from "react";
import AppContext from "src/contexts/AppContext";
import { Main } from "../library";
import { subjects } from "./Home.constants";
import {
    Description,
    Prompt,
    Subject,
    Subjects,
    SubmitButton,
    Title,
} from "./Home.styled";

export const Home = (): JSX.Element => {
    const [prompt, setPrompt] = useState("");

    const { setQuestions, setTopic } = useContext(AppContext);

    const randomSubjects = useMemo(
        () => subjects.sort((a, b) => 0.5 - Math.random()).slice(0, 4),
        []
    );

    const handleClickTag = useCallback<MouseEventHandler<HTMLButtonElement>>(
        (event) => {
            const { topic } = event.currentTarget.dataset;
        },
        []
    );

    const handlePromptChange = useCallback<
        ChangeEventHandler<HTMLInputElement>
    >((event) => {
        setPrompt(event.currentTarget.value);
    }, []);

    const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
        (event) => {
            event.preventDefault();
            setTopic("Global");
            setQuestions([
                {
                    question: "Which planet is known as the Red Planet?",
                    responses: ["Earth", "Mars", "Jupiter", "Venus"],
                    answer: 1,
                },
                {
                    question: "Who painted the Mona Lisa?",
                    responses: [
                        "Vincent van Gogh",
                        "Pablo Picasso",
                        "Leonardo da Vinci",
                        "Claude Monet",
                    ],
                    answer: 2,
                },
                {
                    question: "What is the capital of Japan?",
                    responses: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
                    answer: 2,
                },
            ]);
        },
        [setQuestions, setTopic]
    );

    return (
        <Main onSubmit={handleSubmit}>
            <Title>
                Your AI Quiz
                <br />
                Starts Here
            </Title>
            <Description>
                Pick a topic and let AI generate 10 questions for you.
            </Description>
            <Prompt
                required
                value={prompt}
                placeholder="Enter a topic (e.g Space, Music, History)"
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
