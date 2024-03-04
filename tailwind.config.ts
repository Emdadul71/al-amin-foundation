import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        csm: "400px",
        xsm: "490px",
        smd: "620px",
      },
      colors: {
        primary: "#023047",
        secondary: "#f86011",
        secondarylight: "#fefbf0",
        bluelight: "#f4fbff",
        body: "#3d3d3d",
        paragraph: "#2b2a29",
        black: "#111111",
        white: "#ffffff",
        grey: "#f8f9fa",
        greylight: "#eeeeee",
        danger: "#ff5a5a;",
        hoverone: "#ffe835",
        hovertwo: "#002f5b",
      },
      fontSize: {
        headerLg: "56px",
      },
    },
  },
  plugins: [],
};
export default config;
