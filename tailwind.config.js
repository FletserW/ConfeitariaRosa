/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          300: "#ffb7c2", // Define sua cor personalizada aqui
        },
      },
    },
  },
  plugins: [],
};
