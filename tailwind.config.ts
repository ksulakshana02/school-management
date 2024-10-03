import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cusSky:"#C3EBFA",
        cusSkyLight:"#EDF9FD",
        cusPurple:"#CFCEFF",
        cusPurpleLight:"#F1F0FF",
        cusYellow:"#FAE27C",
        cusYellowLight:"#FEFCE8",
      },
    },
  },
  plugins: [],
};
export default config;
