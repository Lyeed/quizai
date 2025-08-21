import styled from "styled-components";

export const Title = styled.h1`
    font-size: 48px;
    color: #00245f;
    margin: 0 0 24px 0;

    @media only screen and (max-width: 600px) {
        font-size: 36px;
    }
`;

export const Description = styled.h2`
    font-weight: 400;
    font-size: 16px;
    color: #4d6679;
    margin: 0 0 24px 0;
`;

export const Prompt = styled.input`
    font: inherit;
    border: 1px solid #dfe2e8;
    border-radius: 12px;
    padding: 16px;
    max-width: 480px;
    width: 100%;
    background: white;
    &::placeholder {
        color: #727f9fff;
    }
`;

export const Subjects = styled.div`
    margin-top: 18px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Subject = styled.button.attrs({
    type: "button",
})`
    margin: 0;
    border: 0;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 18px;
    background: #e8f4ff;
    font: inherit;
    transition:
        background 200ms,
        color 200ms;
    &:active {
        color: white;
        background: #0f68f2;
    }
`;

export const SubmitButton = styled.button`
    font: inherit;
    background: #0f68f2;
    margin-top: 32px;
    min-width: 320px;
    height: 60px;
    border-radius: 16px;
    border: none;
    color: white;
    font-weight: 500;
    font-size: 20px;
    cursor: pointer;
    transition: background 200ms;

    &:active {
        background: #165ecd;
    }
`;

export const DifficultySelect = styled.select`
    font: inherit;
    border: 1px solid rgb(223, 226, 232);
    border-radius: 12px;
    padding: 8px 16px;
    margin: 0;
    margin-bottom: 24px;
    color: #4d6679;
    border-radius: 12px;
    background: white;
`;
