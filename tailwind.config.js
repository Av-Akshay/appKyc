/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#453d32",
        light: "#957f56",
      },
      animation: {
        downToUp: "downToUp 0.5s linear",
        rightSlider: "rightSlider 0.5s linear",
      },
      keyframes: {
        downToUp: {
          "0%": {
            transform: "translateY(8rem)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0rem)",
            opacity: 1,
          },
        },
        rightSlider: {
          "0%": {
            transform: "translateX(-25%)",
            opacity: 0.5,
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
