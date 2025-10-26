/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        darkgray: {
          "primary": "#f5f5f5",
          "secondary": "#a1a1aa",
          "accent": "#3b82f6",
          "neutral": "#2a2a2a",
          "base-100": "#1e1e1e",     // 🔹 your dark gray background
          "base-content": "#f5f5f5", // 🔹 light text
        },
      },
    ],
    darkTheme: "darkgray", // force this to be the dark one
  },
};
