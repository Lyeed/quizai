import { useContext, type JSX } from "react";
import logoFullPath from "src/assets/logoFull.png";
import illustration1Path from "src/assets/illustration1.png";
import illustration2Path from "src/assets/illustration2.png";
import AppContext from "src/contexts/AppContext";
import { useResetTopic } from "src/utils/useResetTopic";
import {
    AuthorLink,
    Footer,
    Header,
    IllustrationLeft,
    IllustrationRight,
    Logo,
} from "./App.styled";
import { Home } from "./Home";
import { Questions } from "./Questions";
import { Done } from "./Done";

export const App = (): JSX.Element => {
    const resetTopic = useResetTopic();

    const { questions, done } = useContext(AppContext);

    return (
        <>
            <Header>
                <Logo
                    width={128}
                    height={128}
                    src={logoFullPath}
                    onClick={resetTopic}
                />
            </Header>
            {questions.length === 0 ? (
                <Home />
            ) : done ? (
                <Done />
            ) : (
                <Questions />
            )}
            <Footer>
                <IllustrationLeft
                    src={illustration1Path}
                    width={128}
                    height={128}
                />
                <AuthorLink
                    target="_blank"
                    href="https://github.com/Lyeed/quizai"
                >
                    GitHub repository
                </AuthorLink>
                <AuthorLink target="_blank" href="https://lyeed.github.io">
                    @Lyeed
                </AuthorLink>
                <IllustrationRight
                    src={illustration2Path}
                    width={128}
                    height={128}
                />
            </Footer>
        </>
    );
};
