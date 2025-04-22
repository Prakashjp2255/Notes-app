/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite", // Duration and timing
      },

      colors: {
        
        cream: '#FDFBEE',
        skyblue: '#5FB5BA',
        darkteal: '#005B59',
        brightorange: '#FC4A1A',
      }
    },
  },
  plugins: [],
}

