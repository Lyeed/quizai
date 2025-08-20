import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import favicons from "@peterek/vite-plugin-favicons";

// https://vite.dev/config/
export default defineConfig((env) => ({
    base: env.mode === "production" ? "/quizai/" : "/",
    publicDir: "./public",
    plugins: [
        tsconfigPaths(),
        react(),
        favicons("src/assets/logo.webp", {
            path: env.mode === "production" ? "/quizai/" : "/",
            appName: "QUIZAI - Test Your Knowledge with AI",
            appDescription:
                "Create personalized quizzes instantly with QUIZAI. Pick a topic and get 10 AI-generated questions to test your knowledge.",
            background: "#ffffff",
            theme_color: "#0e0e0e",
            developerName: "Lyeed",
            developerURL: "https://github.com/Lyeed",
            manifestMaskable: true,
        }),
    ],
    server: {
        port: 8080,
    },
    optimizeDeps: {
        include: [
            "shallowequal",
            "react-is",
            "hoist-non-react-statics",
            "prop-types",
            "@fortawesome/free-solid-svg-icons/*",
        ], // Non-esm dependencies
    },
}));
