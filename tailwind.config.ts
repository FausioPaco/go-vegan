import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      grey: {
        '25': '#F6F6F6',
        '50': '#EDEEED',
        '100': '#DBDCDB',
        '200': '#C9CBC9',
        '300': '#B7B9B7',
        '400': '#A5A8A5',
        '500': '#939693',
        '600': '#242524',
        '700': '#181918',
        '800': '#0C0C0C',
      },

      primary: {
        '25': '#F0F9F0',
        '50': '#D2ECD1',
        '100': '#B3E0B2',
        '200': '#95D393',
        '300': '#76C774',
        '400': '#58BA55',
        '500': '#4BB248',
        '600': '#429C3F',
        '700': '#2F6F2D',
        '800': '#1C431B',
      },

      secondary: {
        '25': '#FADCFB',
        '50': '#EF97F2',
        '100': '#E451E9',
        '200': '#CB1BD1',
        '300': '#87128B',
        '400': '#660D69',
        '500': '#440946',
        '600': '#3A083B',
        '700': '#2F0630',
        '800': '#250526',
      },

      danger: {
        '25': '#FBE7E7',
        '50': '#F8CFCF',
        '100': '#F0A0A0',
        '200': '#ED8888',
        '300': '#E65959',
        '400': '#DE2929',
        '500': '#9D1818',
        '600': '#891515',
        '700': '#620F0F',
        '800': '#3B0909',
      },
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      currentColor: 'currentColor',
    },
    fontFamily: {
      sans: ['Satoshi-Variable', 'sans-serif'],
      serif: ['Bitter Variable', 'serif'],
    },

    keyframes: () => ({
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '100%' },
      },
    }),
  },
  plugins: [],
} satisfies Config;
