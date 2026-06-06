/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // Azul petróleo — color principal de marca
        petrol: {
          50: "#eef4f5",
          100: "#d3e2e4",
          200: "#a7c5ca",
          300: "#74a3aa",
          400: "#4a7f87",
          500: "#2f636b",
          600: "#235058",
          700: "#1c4046",
          800: "#163338",
          900: "#0f2529",
          950: "#08171a",
        },
        // Dorado suave — acento premium
        gold: {
          50: "#fbf8f1",
          100: "#f4ecd9",
          200: "#e8d6ad",
          300: "#dabd7c",
          400: "#cda659",
          500: "#c08f3e",
          600: "#a87432",
          700: "#87592b",
          800: "#704929",
          900: "#5f3e26",
        },
        sand: "#f5f3ee",
        cloud: "#f4f6f7",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -15px rgba(15, 37, 41, 0.18)",
        card: "0 18px 50px -24px rgba(15, 37, 41, 0.28)",
        glow: "0 0 0 1px rgba(205, 166, 89, 0.4)",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(120deg, rgba(8,23,26,0.92) 0%, rgba(15,37,41,0.78) 45%, rgba(15,37,41,0.45) 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.9s ease-out both",
      },
    },
  },
  plugins: [],
};
