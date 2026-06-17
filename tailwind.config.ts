import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#f1f5f9",
        accent: "#E31E24",
        charcoal: "#1E222B",
        surface: "#111827",
        muted: "#1f2937",
        border: "#1f2937",
      },
      gridTemplateColumns: {
        catalog: "280px 1fr",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out both",
        "slide-in-right": "slideInRight 0.3s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
