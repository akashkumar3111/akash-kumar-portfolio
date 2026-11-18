import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { ink: "#090817", violet: "#8B5CF6", electric: "#3B82F6", roseglow: "#EC4899" },
    fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] }
  }},
  plugins: []
};
export default config;
