/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        yellow: {
          DEFAULT: "#F8B319",
        },
        gray: {
          darkest: "#1E1E1E",
          // dark: '#3c4858',
          DEFAULT: "#D3D3D3",
          // light: '#e0e6ed',
          lightest: "#F9F9F9",
        },
      },
      backgroundImage: {
        "dark-background": "url('./assets/images/background-home.jpg')",
      },
      // screens: {
      //   sm: BREAKPOINTS.sm,
      //   md: BREAKPOINTS.md,
      //   lg: BREAKPOINTS.lg,
      //   xl: BREAKPOINTS.xl,
      //   "2xl": BREAKPOINTS["2xl"],
      // },
    },
  },
  plugins: [],
};
