import type { QuestionFormat } from "src/@types/app";
import type { MouseEventHandler, JSX } from "react";
import { Answer, Answers, Title } from "./Questions.styled";

export const Question = ({
    data,
    onSelectAnswer,
    answer,
    isInvalid,
    isValid,
}: {
    readonly data: QuestionFormat;
    readonly onSelectAnswer: MouseEventHandler<HTMLButtonElement>;
    readonly answer: number | null;
    readonly isInvalid: boolean;
    readonly isValid: boolean;
}): JSX.Element => (
    <>
        <Title>{data.question}</Title>
        <Answers>
            {(isValid
                ? [data.responses[data.answer.index]]
                : data.responses
            ).map((r, index) => (
                <Answer
                    key={r}
                    $toggled={index === answer}
                    $invalid={index === answer && isInvalid}
                    $valid={isValid}
                    data-index={index}
                    type="button"
                    onClick={onSelectAnswer}
                >
                    {r}
                </Answer>
            ))}
        </Answers>
        {isValid ? <span>{data.answer.description}</span> : null}
    </>
);
