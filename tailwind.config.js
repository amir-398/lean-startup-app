/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#B201C3",
        darkLight: "#151515",
        secondary: "#D3D3D3",
        error: "#FF0000",
      },
      backgroundColor: {
        main: "#191A1C",
        primary: "#B201C3",
        secondary: "#D3D3D3",
        error: "#FF0000",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        poppinsLight: ["poppinsLight", "sans-serif"],
        poppins: ["poppinsRegular", "sans-Roboto"],
        poppinsSemiBold: ["poppinsSemiBold", "sans-serif"],
        poppinsBold: ["poppinsBold", "sans-serif"],
        poppinsMedium: ["PoppinsMedium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
