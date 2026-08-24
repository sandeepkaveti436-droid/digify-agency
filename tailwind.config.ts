import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        digifyBlue: "#2563EB",
        electricPurple: "#7C3AED",
        deepNavy: "#0B1120",
        darkText: "#0F172A",
        mediumGray: "#64748B",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(to right, #2563EB, #7C3AED)",
      },
    },
  },
  plugins: [],
};
export default config;
