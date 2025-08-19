import styled from "styled-components";

export const Page = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background: radial-gradient(
        1200px 700px at 50% -200px,
        #0b1530,
        #070d20 45%,
        var(--space) 70%
    );
    overflow: hidden;
    color: #eaf2ff;
`;

export const Title = styled.h1`
    margin: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 24px 12px;
    text-align: center;
    font-weight: 500;
    & small {
        font-weight: 400;
    }
`;
