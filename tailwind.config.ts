import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF7F1",
        blush: "#EEE4D7",
        rose: "#651C26",
        "rose-dark": "#40191B",
        taupe: "#B98D8C",
        charcoal: "#262322",
        "muted-text": "#5D5550",
        line: "#E7D8CA",
        pearl: "#FFFDFC"
      },
      boxShadow: {
        soft: "0 16px 42px rgba(64, 25, 27, 0.08)",
        lift: "0 18px 46px rgba(64, 25, 27, 0.18)"
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
