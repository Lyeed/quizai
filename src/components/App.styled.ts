import styled from "styled-components";

export const Header = styled.header``;

export const Footer = styled.footer`
    position: relative;
    padding: 12px;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`;

export const AuthorLink = styled.a`
    padding: 8px 12px;
    border-radius: 12px;
    color: inherit;
    transition: color 200ms;
    &:visited {
        color: inherit;
    }
    &:hover {
        color: #0064ff;
    }
`;

export const IllustrationLeft = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;

    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

export const IllustrationRight = styled.img`
    position: absolute;
    bottom: 10px;
    right: 10px;

    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

export const Logo = styled.img`
    @media only screen and (max-width: 600px) {
        width: 64px;
        height: 64px;
    }
`;

export const HomeButton = styled.button`
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    margin: 4px;
    border-radius: 12px;
`;
