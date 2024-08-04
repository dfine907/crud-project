/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  content: ["./**/*.html"],
  prefix: "tw-",
  important: true,
  corePlugins: {
      preflight: false,
  }
}