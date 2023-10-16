/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // fontFamily: URL('')
      navOverlay: {
        backgroundColor: "#f433331a",
        color: "#f43333",
      },
      colors: {
        bgDark: "#151515",
        lightRed: "#f433331a",
        mainColor: "#F43333",
      },
      fill: {
        white: "white",
      },
    },
  },
  plugins: [],
};
