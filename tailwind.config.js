/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 10s linear infinite",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      colors: {
        prod: "#324d67",
        herobg: "#dcdcdc",
        herobcbutt: "#f02d34",
        desc: "#324d67",
        descP: "#5f5f5f",
        prodImage: "#ebebeb",
        cartqty: "#eee",
      },
    },
  },
  plugins: [],
};
