/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'light': '#fff5dd',
        'dark': '#1F1818',
        'accent': '#DC9A4F',
        'brown': {
          DEFAULT: '#A3865F',
          dark: '#4E3E2F',
        },
      }
    }
  }
} 