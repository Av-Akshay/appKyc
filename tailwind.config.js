/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#453d32",
        light: "#957f56",
        lighter: "#fae4c8",
        "section-background": "#1F2732",
        "secondary-background": "#504F4F",
        them: "#F57842",
        yellowColor: "#FF9900",
        pinkColor: "#FF00E5",
        blueColor: "#00FFF0",
        greenColor: "#00FF57",
      },
      animation: {
        downToUp: "downToUp 0.5s linear",
        rightSlider: "rightSlider 0.8s linear",
        leftSlider: "leftSlider 0.8s linear",
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
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },
        leftSlider: {
          "0%": {
            transform: "translateX(25%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },
      },
      fontFamily: {
        poppinsSemibold: ["poppinsSemibold"],
        poppinsBold: ["poppinsBold"],
        poppinsMedium: ["poppinsMedium"],
        poppinsExtraLight: ["poppinsExtraLight"],
        poppinsRegular: ["poppinsRegular"],
      },
    },
  },
  plugins: [require("daisyui", "tailwindcss-textshadow", "tailwind-clip-path")],
};
