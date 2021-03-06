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
          "natural-black": "#6c757d",
        },
      },
      "",
      "",
    ],
  },
  plugins: [require("daisyui")],
}
