import { useCallback, useContext } from "react";
import AppContext from "src/contexts/AppContext";

export const useResetTopic = () => {
    const { setTopic, setQuestions, setDone } = useContext(AppContext);

    return useCallback(() => {
        setTopic("");
        setQuestions([]);
        setDone(false);
    }, [setTopic, setQuestions, setDone]);
};
