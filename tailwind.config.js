module.exports = {
  important: true,
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,jsx,js,ts,tsx}'],
  },
  content: ['./src/**/*.{html,jsx,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        kartblue: '#569CCF',
      },
      transitionProperty: {
        width: 'width',
        height: 'height',
      },
    },
  },
  variants: {
    extend: { backgroundColor: ['active'] },
    variants: {
      width: ['responsive', 'hover', 'focus'],
      height: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
};
