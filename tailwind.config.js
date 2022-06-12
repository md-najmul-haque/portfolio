module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f66b0e",
          secondary: "#111827",
          accent: "#FBBD23",
          neutral: "#2dd4bf",
          "natural-black": "#080b12",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
