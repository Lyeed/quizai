import type { JSX } from "react";
import "./Loader.css";
import { Page, Title } from "./Loader.styled";

export const Loader = (): JSX.Element => (
    <Page>
        <div className="loader" aria-hidden="true">
            <div className="scene">
                <div className="stars">
                    <span className="star" />
                    <span className="star" />
                    <span className="star" />
                    <span className="star" />
                    <span className="star" />
                    <span className="star" />
                    <span className="star" />
                </div>
                <div className="planet" />
                <div className="orbit">
                    <div className="orbit-inner orbit-spin">
                        <div className="ship-r">
                            <span
                                className="ship-emoji"
                                role="img"
                                aria-label="rocket"
                            >
                                🚀
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Title>
            AI is crafting your quiz
            <br />
            <small>please wait...</small>
        </Title>
    </Page>
);
