import styled from "styled-components";
import { Main } from "../library";

export const Count = styled.span`
    color: #40556b;
    font-size: 14px;
`;

export const QuestionsWindow = styled(Main)`
    text-align: left;
`;

export const SubmitButton = styled.button`
    font: inherit;
    background: #0f68f2;
    margin-left: auto;
    border-radius: 16px;
    border: none;
    color: white;
    font-weight: 500;
    cursor: pointer;
    padding: 12px 24px;
    margin-top: 12px;
    transition: background 200ms;

    &:disabled {
        background: #a9adb4ff;
        cursor: not-allowed;
    }
`;

export const QuizTopic = styled.h2`
    margin: 0;
    font-weight: 500;
`;
