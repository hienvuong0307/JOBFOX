/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./components/**/*.{vue,js,ts}", 
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

