/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        yellow: {
          DEFAULT: "#FED843",
        },
        gray: {
          darkest: "#1E1E1E",
          DEFAULT: "#D3D3D3",
          lightest: "#F9F9F9",
        },
      },
      backgroundImage: {
        "dark-background": "url('./assets/images/background-home.jpg')",
      },
    },
  },
  plugins: [],
};
