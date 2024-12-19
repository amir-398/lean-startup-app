/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#168177",
        secondary: "#0a0f33",
        thertiary: "#f97e4b",
        error: "#FF0000",
      },
      backgroundColor: {
        main: "#F4F4F4",
        error: "#FF0000",
      },
      textColor: {
        primary: "#858484",
        secondary: "#f97e4b",
        dark: "#000",
        white: "#fff",
        error: "#FF0000",
      },
      borderColor: {
        primary: "#858484",
      },
      fontFamily: {
        sans: ["Montserrat-Regular", "sans-serif"],
        montserratRegular: ["Montserrat-Regular", "sans-serif"],
        montserratMedium: ["Montserrat-Medium", "sans-serif"],
        montserratSemiBold: ["Montserrat-SemiBold", "sans-serif"],
        montserratBold: ["Montserrat-Bold", "sans-serif"],
      },
    },
    fontFamily: {
      sans: ["Montserrat-Regular", "sans-serif"],
    },
  },
  plugins: [],
};
