import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary-fixed": "#1a1c1c",
        "on-error-container": "#93000a",
        "outline": "#7e775f",
        "inverse-primary": "#e9c400",
        "inverse-on-surface": "#f1f1f1",
        "surface-dim": "#dadada",
        "surface-container-low": "#f3f3f3",
        "on-surface": "#1a1c1c",
        "surface-bright": "#f9f9f9",
        "on-error": "#ffffff",
        "surface": "#f9f9f9",
        "on-secondary": "#ffffff",
        "on-background": "#1a1c1c",
        "secondary-fixed-dim": "#c8c6c5",
        "tertiary-fixed": "#e2e2e2",
        "on-tertiary-fixed-variant": "#454747",
        "surface-tint": "#705d00",
        "on-tertiary-container": "#5e5f60",
        "error": "#ba1a1a",
        "primary-container": "#ffd700",
        "on-primary": "#ffffff",
        "primary-fixed-dim": "#e9c400",
        "primary": "#705d00",
        "on-secondary-fixed-variant": "#474646",
        "tertiary-fixed-dim": "#c6c6c7",
        "tertiary": "#5d5f5f",
        "secondary-fixed": "#e5e2e1",
        "tertiary-container": "#d9dada",
        "surface-container-highest": "#e2e2e2",
        "surface-variant": "#e2e2e2",
        "on-surface-variant": "#4d4732",
        "on-secondary-container": "#656464",
        "on-secondary-fixed": "#1c1b1b",
        "on-primary-fixed": "#221b00",
        "surface-container-lowest": "#ffffff",
        "on-tertiary": "#ffffff",
        "surface-container-high": "#e8e8e8",
        "primary-fixed": "#ffe16d",
        "on-primary-container": "#705e00",
        "secondary-container": "#e5e2e1",
        "surface-container": "#eeeeee",
        "background": "#f9f9f9",
        "on-primary-fixed-variant": "#544600",
        "error-container": "#ffdad6",
        "outline-variant": "#d0c6ab",
        "secondary": "#5f5e5e",
        "inverse-surface": "#2f3131"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "unit": "8px",
        "margin-mobile": "16px",
        "margin-desktop": "40px",
        "gutter": "24px",
        "container-max": "1200px"
      },
      fontFamily: {
        "label-bold": ["Space Grotesk"],
        "body-md": ["Plus Jakarta Sans"],
        "headline-md": ["Anton"],
        "headline-lg": ["Anton"],
        "display-lg": ["Anton"],
        "body-lg": ["Plus Jakarta Sans"]
      },
      fontSize: {
        "label-bold": ["14px", {"lineHeight": "20px", "fontWeight": "700"}],
        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
        "headline-md": ["32px", {"lineHeight": "36px", "fontWeight": "400"}],
        "headline-lg": ["48px", {"lineHeight": "52px", "letterSpacing": "0.02em", "fontWeight": "400"}],
        "display-lg": ["72px", {"lineHeight": "80px", "fontWeight": "400"}],
        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}]
      }
    }
  },
  plugins: []
};

export default config;
