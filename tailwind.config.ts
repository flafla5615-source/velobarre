import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF7F3",
        blush: "#F6E7E6",
        rose: "#C77982",
        "rose-dark": "#A95F68",
        taupe: "#A89A92",
        charcoal: "#2B2B2B",
        "muted-text": "#6F6661",
        line: "#E8DCD7",
        pearl: "#FFFDFC"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(86, 63, 55, 0.10)",
        lift: "0 22px 60px rgba(169, 95, 104, 0.18)"
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "Pretendard", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
