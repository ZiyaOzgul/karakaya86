/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        car: 'url("http://www.karakaya86.com.tr/tr/images/uniteler-bg.jpg")',
        kurumsal:
          'url("http://www.karakaya86.com.tr/Dosya/Galeri/161bb68a7b2307.jpg")',
      },
    },
  },
  plugins: [],
};
