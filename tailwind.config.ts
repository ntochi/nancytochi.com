import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        showup: {
          '0%': { opacity: '0' },
          '20%, 80%': { opacity: '1' },
          '100%': { opacity: '1' },
        },
        slidein: {
          '0%': { marginLeft: '-800px' },
          '20%': { marginLeft: '-800px' },
          '35%': { marginLeft: '0px' },
          '100%': { marginLeft: '0px' },
        },

        slideInTop: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },

      animation: {
        showup: 'showup 7s ',
        slidein: 'slidein 7s',
        slideInTop: 'slideInTop 1s ease-out',
      },
    },
  },
  plugins: [],
};
export default config;
