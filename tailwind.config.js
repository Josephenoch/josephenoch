module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      transitionProperty:{
        height:"height"
      },
      colors:{
        primary:{
          DEFAULT:"#01080E",
          light:"#011221",
          lighter:"#011627",
          dark:"#010C15"
        },
        secondary:{
          DEFAULT:"#607B96",
          blue:"#3C9D93",
          purple:"#4D5BCE",
        },
        accent:{
          DEFAULT:"#FEA55F",
          green:"#43D9AD",
          orange:"#E99287",
          pink:"#C98BDF"
        },
        gradients:{
          DEFAULT:"#4D5BCE",
          secondary:"#43D9AD"
        },
        lines:"#1E2D3D"
      },
      fontFamily:{
        headline:"Fira Code, monospace"
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
}