import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      colors: {
        primary: "#002315", // Deep forest green
        secondary: "#3A5A40", // Soft moss green
        accent: "#A3B18A", // Light sage
        background: "#FAF9F6", // Off-white
        textMuted: "#5C6A64", // Grayish green for secondary text
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },  
          '100%': { opacity: '1' }, 
        },
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;
