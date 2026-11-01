/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)", card: "var(--card)", fg: "var(--fg)", muted: "var(--muted)",
        line: "var(--line)", accent: "var(--accent)", accent2: "var(--accent2)",
        tint: "var(--tint)", onaccent: "var(--on)",
      },
      fontFamily: { sans: ["system-ui", "-apple-system", "'Segoe UI'", "Roboto", "sans-serif"] },
    },
  },
  plugins: [],
};
