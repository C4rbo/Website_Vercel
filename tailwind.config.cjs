/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      firacode: "Fira Code",
      
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "rgb(255, 255, 255)",
        bg_light_primary: "#FFEB3B",
        gray: "#B7C5D3",
        fontbianco: "rgb(255, 255, 255)",
        black: "rgb(0,0,0)",



      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg,rgb(255, 255, 255) 0.48%,rgb(255, 255, 255) 100%)",
      },


      
      dropShadow: {
        primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
      },
    },
  },
  plugins: [],
};
