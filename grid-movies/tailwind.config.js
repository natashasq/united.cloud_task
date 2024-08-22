/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        yellow: {
          DEFAULT: '#F8B319',
        },
        gray: {
          darkest: '#1E1E1E',
          // dark: '#3c4858',
          DEFAULT: '#D3D3D3',
          // light: '#e0e6ed',
          lightest: '#F9F9F9',
        },
      },

      backgroundImage: {
        'dark-background': "url('./assets/images/background-home.jpg')",
      },
      // fontFamily: {
      //   sans: ['Lato', ...defaultTheme.fontFamily.sans],
      // },
      // fontSize: {
      //   heading_xs: [
      //     '14px',
      //     {
      //       lineHeight: '16.8px',
      //       fontWeight: 'bold',
      //     },
      //   ],
      //   heading_sm: [
      //     '16px',
      //     {
      //       lineHeight: '19.2px',
      //       fontWeight: 'bold',
      //     },
      //   ],
      //   heading_md: [
      //     '20px',
      //     {
      //       lineHeight: '24px',
      //       fontWeight: 'bold',
      //     },
      //   ],

      //   heading_large_lg: [
      //     '30px',
      //     {
      //       lineHeight: '36px',
      //       fontWeight: 'bold',
      //     },
      //   ],
      //   heading_large_xl: [
      //     '36px',
      //     {
      //       lineHeight: '43.2px',
      //       fontWeight: 'bold',
      //     },
      //   ],
      //   heading_large_2xl: [
      //     '48px',
      //     {
      //       lineHeight: '48px',
      //       fontWeight: 'bold',
      //     },
      //   ],
      //   heading_large_3xl: [
      //     '60px',
      //     {
      //       lineHeight: '60px',
      //       fontWeight: 'bold',
      //     },
      //   ],
      //   heading_large_4xl: [
      //     '72px',
      //     {
      //       lineHeight: '72px',
      //       fontWeight: 'bold',
      //     },
      //   ],

      //   heading_small_lg: [
      //     '24px',
      //     {
      //       lineHeight: '32px',
      //       fontWeight: 'bold',
      //     },
      //   ],
      //   heading_small_xl: [
      //     '30px',
      //     {
      //       lineHeight: '40px',
      //       fontWeight: 'bold',
      //     },
      //   ],
      //   heading_small_2xl: [
      //     '36px',
      //     {
      //       lineHeight: '43.2px',
      //       fontWeight: 'bold',
      //     },
      //   ],
      //   heading_small_3xl: [
      //     '48px',
      //     {
      //       lineHeight: '48px',
      //       fontWeight: 'bold',
      //     },
      //   ],
      //   heading_small_4xl: [
      //     '60px',
      //     {
      //       lineHeight: '60px',
      //       fontWeight: 'bold',
      //     },
      //   ],

      //   text_xs: ['12px', '18px'],
      //   text_sm: ['14px', '21px'],
      //   text_md: ['16px', '24px'],
      //   text_lg: ['18px', '28px'],
      //   text_xl: ['20px', '30px'],
      //   text_2xl: ['24px', '36px'],
      //   text_3xl: ['30px', '45px'],
      //   text_4xl: ['36px', '54px'],
      //   text_5xl: ['48px', '72px'],
      //   text_6xl: ['60px', '90px'],
      // },
    },
  },
  plugins: [],
}


