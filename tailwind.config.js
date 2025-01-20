/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBlueDark: 'hsl(209, 23%, 22%)',
        veryDarkBlueDark: 'hsl(207, 26%, 17%)',

        veryDarkBlueLight: 'hsl(200, 15%, 8%)',
        darkGrayLight: 'hsl(0, 0%, 52%)',
        veryDarkGrayLight: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
}

