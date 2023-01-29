/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#34d399', //emerald-400
        'dark-1': '#192225',
        'dark-2': '#384146',
      },
    },
  },
  plugins: [],
};
