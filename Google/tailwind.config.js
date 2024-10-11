/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables dark mode based on a class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You can customize your dark theme here
      colors: {
        // Example: Adding a custom color for dark mode
        'dark-bg': '#1a1a1a',
        'dark-text': '#ffffff',
      },
    },
  },
  plugins: [],
}
