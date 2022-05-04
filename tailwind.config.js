module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT:"#01080E",
          light:"#011627",
          lighter:"#011627"
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
      spacing: {
        '90per': '90%',
        "10per": "10%",
        "5per":"5%",
        "85per":"85%"

      },
    },
  },
  plugins: [],
}