/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#fafafa",
          elevated: "#ffffff",
        },
        ink: {
          DEFAULT: "#0f172a",
          muted: "#64748b",
          subtle: "#94a3b8",
        },
        accent: {
          DEFAULT: "#4f46e5",
          hover: "#4338ca",
          muted: "#e0e7ff",
        },
      },
      fontFamily: {
        sans: [
          '"DM Sans"',
          "Roboto",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        display: ['"PP Radio Grotesk"', '"DM Sans"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 3px 0 rgb(15 23 42 / 0.06), 0 1px 2px -1px rgb(15 23 42 / 0.06)",
        card: "0 4px 6px -1px rgb(15 23 42 / 0.05), 0 2px 4px -2px rgb(15 23 42 / 0.05)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
