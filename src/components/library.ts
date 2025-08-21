import styled from "styled-components";

export const Main = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: auto;
    padding: 12px 12px 134px 12px;

    @media only screen and (max-width: 600px) {
        padding-bottom: 0;
    }
`;

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    gap: 12px;
    background: white;
    padding: 24px 32px;
    border-radius: 10px;
    border: 1px solid #dfe2e8;
`;
