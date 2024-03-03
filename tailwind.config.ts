import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "clrs-primary-950": "#072e64",
        "clrs-primary-900": "#023e8a",
        "clrs-primary-800": "#0053d4",
        "clrs-primary-700": "#0065ff",
        "clrs-primary-600": "#007eff",
        "clrs-primary-500": "#0ba2ff",
        "clrs-primary-400": "#39c5ff",
        "clrs-primary-300": "#78dcff",
        "clrs-primary-200": "#afe8ff",
        "clrs-primary-100": "#d2f1ff",
        "clrs-primary-50": "#ebf9ff",
      }
    },
  },
  plugins: [],
};
export default config;
