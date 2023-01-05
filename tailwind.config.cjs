/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      Black: "#000000",
      White: "#FFFFFF",
      Grey: "#AAAAAA",
      DarkGrey: "#AAAAAA15",
      Transparent: "#00000000",
      Red: "#CD5C5C",
      Green: "#0B9E8A",
      Blue: "#76B7C7",
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};
