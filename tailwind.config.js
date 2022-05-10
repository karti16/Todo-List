module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,jsx,js}'],
  },
  content: ['./src/**/*.{html,jsx,js}'],
  theme: {
    extend: {
      colors: {
        kartblue: '#569CCF',
      },
    },
  },
  variants: {
    extend: { backgroundColor: ['active'] },
  },
  plugins: [],
};
