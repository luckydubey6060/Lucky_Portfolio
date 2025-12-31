export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.02em',
        normal: '0.025em',
        wide: '0.05em',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
