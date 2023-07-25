/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollSnapType: {
      mandatory: 'mandatory',
      proximity: 'proximity',
    },
    scrollSnapAlign: {
      start: 'start',
      center: 'center',
      end: 'end',
    }
  },
},
  plugins: [],
}