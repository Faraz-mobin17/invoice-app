/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#0C0E16",
      gray: "#7E88C3",
      lightGray: "#858BB2",
      green: "#33D69F",
      orange: "#FF8F00",
      purple: "#7C5DFA",
      sideBarColor: "#373B53",
      layeronevoilet: "#7C5DFA",
      layeronelightvoilet: "#9277FF",
      layeronenavydark: "#1E2139",
      layeronelightnavy: "#252945",
      layertwolightgray: "#DFE3FA",
      layertwogray: "#888EB0",
      layertwolightpurple: "#7E88C3",
      layertwodark: "#0C0E16",
      layerthreered: "#EC5757",
      layerthreelightred: "#FF9797",
      lightbg: "#F8F8FB",
      layerthreedark: "#141625",
    },
    boxShadow: {
      customShadow: "0px 10px 10px -10px rgba(72, 84, 159, 0.10)",
    },
    extend: {},
  },
  plugins: [],
};
