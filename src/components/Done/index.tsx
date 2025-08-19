import { useCallback, useContext, type JSX } from "react";
import AppContext from "src/contexts/AppContext";
import { useResetTopic } from "src/utils/useResetTopic";
import { Main, Modal } from "../library";
import {
    ChangeButton,
    Mistakes,
    RestartButton,
    SubTitle,
    Title,
} from "./Done.styled";

export const Done = (): JSX.Element => {
    const resetTopic = useResetTopic();

    const { topic, mistakes, questions, setDone } = useContext(AppContext);

    const handleRestartTopic = useCallback(() => {
        setDone(false);
    }, [setDone]);

    return (
        <Main>
            <Modal>
                <Title>
                    <big>🎉</big>
                    <br />
                    Great job - you're done!
                </Title>
                <SubTitle>{`You completed ${questions.length} questions on ${topic}.`}</SubTitle>
                <Mistakes
                    $success={mistakes === 0}
                >{`${mistakes} mistake${mistakes > 1 ? "s" : ""}`}</Mistakes>
                <RestartButton type="button" onClick={handleRestartTopic}>
                    Restart Quiz
                    <br />
                    <small>Same topic, new set of questions.</small>
                </RestartButton>
                <ChangeButton type="button" onClick={resetTopic}>
                    Change Topic
                </ChangeButton>
            </Modal>
        </Main>
    );
};
