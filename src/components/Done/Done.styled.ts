import styled from "styled-components";

export const Title = styled.h1`
    margin: 0;
    font-size: 28px;
    & > big {
        font-size: 72px;
    }
`;

export const SubTitle = styled.span``;

export const Mistakes = styled.div<{
    $success?: boolean;
}>`
    font-weight: 500;
    padding: 8px 24px;
    background: ${({ $success }) => ($success ? "#4bdb35ff" : "#ff6e6eff")};
    width: fit-content;
    margin: 0 auto;
    border-radius: 18px;
`;

export const RestartButton = styled.button`
    font: inherit;
    background: #0f68f2;
    margin-top: 12px;
    border-radius: 14px;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    padding: 8px 0;
    transition: background 200ms;
    & > small {
        font-weight: 300;
    }

    &:active {
        background: #165ecd;
    }
`;

export const ChangeButton = styled.button`
    font: inherit;
    cursor: pointer;
    border: 2px solid #0f68f2;
    border-radius: 14px;
    background: none;
    padding: 8px 0;
    font-weight: 500;
`;
