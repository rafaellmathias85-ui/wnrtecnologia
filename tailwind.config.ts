import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050711",
        night: "#080B19",
        panel: "rgba(12, 18, 38, 0.68)",
        line: "rgba(148, 163, 184, 0.18)",
        cyan: "#23D7FF",
        violet: "#8758FF",
        magenta: "#FF4FDB",
        lime: "#42F5B3"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "Inter", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(35, 215, 255, 0.24)",
        violet: "0 0 42px rgba(135, 88, 255, 0.26)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 18% 18%, rgba(35, 215, 255, 0.22), transparent 30%), radial-gradient(circle at 78% 8%, rgba(135, 88, 255, 0.28), transparent 34%), radial-gradient(circle at 64% 74%, rgba(255, 79, 219, 0.14), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;
