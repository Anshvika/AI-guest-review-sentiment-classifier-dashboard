module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
      colors: {
        forest: {
          50:  "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        moss:  "#3d6b45",
        bark:  "#7c5c3a",
        mist:  "#e8f4ea",
        stone: "#f5f2ee",
      },
      backgroundImage: {
        "leaf-gradient": "linear-gradient(135deg, #052e16 0%, #15803d 60%, #3d6b45 100%)",
      },
    },
  },
  plugins: [],
};
