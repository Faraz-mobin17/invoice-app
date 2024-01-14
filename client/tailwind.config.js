/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "769px",
      desktop: "1440px",
    },
    fontSize: {
      base: ["13px", { lineHeight: "18px", letterSpacing: "-0.1px" }],
      xs: ["15px", { lineHeight: "15px", letterSpacing: "-0.25px" }],
      sm: ["15px", { lineHeight: "24px", letterSpacing: "-0.25px" }],
      md: ["24px", { lineHeight: "22px", letterSpacing: "-0.75px" }],
      lg: ["36px", { lineHeight: "33px", letterSpacing: "-1px" }],
    },
    colors: {
      black: "#0C0E16",
      gray: {
        500: "#DFE3FA",
        400: "#888EB0",
      },
      green: "#33D69F",
      orange: "#FF8F00",
      purple: { 500: "#7C5DFA", 400: "#7E88C3" },
      sideBarColor: "#373B53",
      voilet: {
        500: "#7C5DFA",
        400: "#9277FF",
      },
      navy: {
        500: "#1E2139",
        400: "#252945",
      },
      slate: {
        500: "#0C0E16", // layer 1
        400: "#DFE3FA", // layer 2 light
        300: "#141625", // layer 3
      },
      red: {
        500: "#EC5757",
        400: "#FF9797", // layer 2 light
      },
      lightbg: "#F8F8FB",
    },
    extend: {},
  },
  plugins: [],
};
