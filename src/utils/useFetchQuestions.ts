import { useCallback, useContext } from "react";
import type { QuestionFormat } from "src/@types/app";
import AppContext from "src/contexts/AppContext";

interface FetchResponse {
    topic: string;
    questions: QuestionFormat[];
}

export const useFetchQuestions = (): ((topic: string) => Promise<void>) => {
    const { setLoading, setQuestions, setTopic, difficulty } =
        useContext(AppContext);

    return useCallback(
        async (topic: string): Promise<void> => {
            setLoading(true);

            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/quiz`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            prompt: topic,
                            difficulty,
                        }),
                    }
                );

                if (!response.ok || response.status !== 200) {
                    throw new Error("Invalid response");
                }

                const json = (await response.json()) as FetchResponse;

                setTopic(json.topic);
                setQuestions(json.questions);
                setLoading(false);
            } catch (error) {
                window.alert("Ops, An error occurred");
                console.error(error);
                setLoading(false);
            }
        },
        [setTopic, setQuestions, setLoading, difficulty]
    );
};
