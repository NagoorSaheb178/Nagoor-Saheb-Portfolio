import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      colors: {
        void: "#04060b",
        ember: "#ff7a18",
        plasma: "#00f5ff",
        acid: "#b8ff3d",
        magenta: "#ff2bd6"
      },
      boxShadow: {
        hud: "0 0 28px rgba(0, 245, 255, 0.22), inset 0 0 18px rgba(255, 122, 24, 0.1)"
      }
    }
  },
  plugins: []
};

export default config;
