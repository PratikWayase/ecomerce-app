/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Includes the HTML file at the root level
    "./src/**/*.{js,ts,jsx,tsx}", // Includes all .js, .ts, .jsx, and .tsx files inside the src folder and its subfolders
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
