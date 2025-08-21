import {
    type MouseEventHandler,
    type JSX,
    useCallback,
    useMemo,
    useState,
    type FormEventHandler,
    useContext,
    useRef,
    useEffect,
} from "react";
import AppContext from "src/contexts/AppContext";
import { Modal } from "../library";
import {
    SubmitButton,
    Count,
    QuestionsWindow,
    QuizTopic,
} from "./Questions.styled";
import { Question } from "./Question";

export const Questions = (): JSX.Element => {
    const timeoutRef = useRef<number>();

    const {
        questions: data,
        setMistakes,
        setDone,
        topic,
    } = useContext(AppContext);

    const [step, setStep] = useState(0);

    const [invalid, setInvalid] = useState(false);

    const [valid, setValid] = useState(false);

    const [currentAnswer, setCurrentAnswer] = useState<number | null>(null);

    const currentQuestion = useMemo(() => data[step], [step, data]);

    const isLast = step >= data.length - 1;

    if (!currentQuestion) {
        throw new Error("Invalid question data");
    }

    const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
        (event) => {
            event.preventDefault();
            if (currentAnswer === currentQuestion.answer.index) {
                setValid(true);
                setInvalid(false);

                return;
            }

            setValid(false);
            setInvalid(true);
            setMistakes((previous) => previous + 1);
            timeoutRef.current = window.setTimeout(() => {
                setInvalid(false);
            }, 2000);
        },
        [currentAnswer, currentQuestion, setMistakes]
    );

    const handleNext = useCallback<FormEventHandler<HTMLFormElement>>(
        (event) => {
            event.preventDefault();

            setCurrentAnswer(null);
            setInvalid(false);
            setValid(false);

            if (isLast) {
                setDone(true);
                return;
            }

            setStep((previous) => previous + 1);
        },
        [isLast, setStep, setDone]
    );

    const handleSelectAnswer = useCallback<
        MouseEventHandler<HTMLButtonElement>
    >((event) => {
        const { index } = event.currentTarget.dataset;

        if (!index) {
            throw new Error("Invalid answer index");
        }

        window.clearTimeout(timeoutRef.current);
        setInvalid(false);
        setCurrentAnswer(Number(index));
    }, []);

    useEffect(() => {
        setMistakes(0);
        setCurrentAnswer(null);
        setInvalid(false);
        setValid(false);
    }, []);

    return (
        <QuestionsWindow onSubmit={valid ? handleNext : handleSubmit}>
            <Modal>
                <Count>{`${step + 1} / ${data.length}`}</Count>
                <QuizTopic>{topic}</QuizTopic>
                <Question
                    answer={currentAnswer}
                    isInvalid={invalid}
                    isValid={valid}
                    data={currentQuestion}
                    onSelectAnswer={handleSelectAnswer}
                />
                <SubmitButton disabled={currentAnswer === null} type="submit">
                    {isLast ? "Finish" : "Next"}
                </SubmitButton>
            </Modal>
        </QuestionsWindow>
    );
};
