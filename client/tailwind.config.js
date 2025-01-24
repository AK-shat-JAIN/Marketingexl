/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FOF3FF',
        secondary: '#088AA4'
      }, // colors.primary
      fontFamily: {
        awesomeSerif: ['Awesome Serif Normal'], // font-family: 'Awesome Serif', serif;
        awesomeSerifBoldTall: ['Awesome Serif Bold Tall']
      },
      screens: {
        sm: "640px",  // Small screens like phones
        md: "768px",  // Medium screens like tablets
        lg: "1024px", // Large screens like laptops
        xl: "1280px", // Extra-large screens
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

