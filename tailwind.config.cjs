/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      Black: "#000000",
      White: "#FFFFFF",
      Primary: "#4952cc",
      Secondary: "#13111c",
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};
