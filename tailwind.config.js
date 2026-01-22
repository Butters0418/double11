import lineClamp from '@tailwindcss/line-clamp';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '577px',
      md: '767px',
      lg: '1240px',
      xl: '1560px',
      '2xl': '1660px',
    },
    extend: {
      colors: {
        pcRed: '#db232f',
        // 左選單
        leftNavActivityText: '#fff',
        leftNavActivityTextHover: '#fffb6e',
        leftNavBg: '#f9ede0',
        leftNavText: '#440015',
        leftNavTextHover: '#fff',
        leftNavTextBgHover: '#e18f47',
        // 右選單
        rightNavBg: 'rgba(0, 0, 0, 0.7);',
        rightNavText: '#fff',
        rightNavActive: '#e80f00',
      },
      textShadow: {
        'border-white':
          '1px 1px 0 #fff, -1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff',
      },
      container: {
        center: true,
      },
    },
    fontFamily: {
      montserrat: ['Montserrat'],
      notosans: ['Noto Sans TC'],
    },
  },
  plugins: [lineClamp, aspectRatio],
};
