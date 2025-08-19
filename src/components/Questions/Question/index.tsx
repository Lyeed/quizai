import type { QuestionFormat } from "src/@types/app";
import type { MouseEventHandler, JSX } from "react";
import { Answer, Answers, Title } from "./Questions.styled";

export const Question = ({
    data,
    onSelectAnswer,
    answer,
    isInvalid,
}: {
    readonly data: QuestionFormat;
    readonly onSelectAnswer: MouseEventHandler<HTMLButtonElement>;
    readonly answer: number | null;
    readonly isInvalid: boolean;
}): JSX.Element => (
    <>
        <Title>{data.question}</Title>
        <Answers>
            {data.responses.map((r, index) => (
                <Answer
                    key={r}
                    $toggled={index === answer}
                    $invalid={index === answer && isInvalid}
                    data-index={index}
                    type="button"
                    onClick={onSelectAnswer}
                >
                    {r}
                </Answer>
            ))}
        </Answers>
    </>
);
