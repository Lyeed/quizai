import styled from "styled-components";

export const Title = styled.h1`
    margin: 0;
    font-weight: 600;
    font-size: 26px;
`;

export const Answers = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 360px;
`;

export const Answer = styled.button<{
    $toggled?: boolean;
    $invalid?: boolean;
}>`
    font: inherit;
    margin: 0;
    padding: 8px 16px;
    border-radius: 12px;
    border: none;
    background: ${({ $toggled, $invalid }) =>
        $invalid ? "#f35555ff" : $toggled ? "#abd5fc" : "#e8f4ff"};
    text-align: left;
    cursor: pointer;
    transition: background 200ms;

    &:active {
        background: #abd5fc;
    }
`;
