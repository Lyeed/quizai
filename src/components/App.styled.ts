import styled from "styled-components";

export const Header = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    @media only screen and (max-width: 600px) {
        & > img {
            width: 64px;
            height: 64px;
        }
    }
`;

export const Footer = styled.footer`
    padding: 12px;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
`;

export const AuthorLink = styled.a`
    padding: 8px 12px;
    background: white;
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
    cursor: pointer;
`;
