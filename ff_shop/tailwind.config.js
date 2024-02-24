/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "1px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "4000px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },

    extend: {
      backgroundImage: {
        "header-background": "url(../public/IMGS/wall.jpg)",
      },
    },
  },
  plugins: [],
};
