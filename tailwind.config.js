/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
    ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          900: "#17320B",
          800: "#2D6316",
          700: "#449522",
          600: "#5BC62D",
          500: "#7ED957",
          400: "#98E179",
          300: "#B2E89A",
          200: "#CBF0BC",
          100: "#E5F7DD",
        },
        danger: {
          900: "#2C0B02",
          800: "#591504",
          700: "#852007",
          600: "#B22A09",
          500: "#DE350B",
          400: "#F5542C",
          300: "#F77F61",
          200: "#FAA995",
          100: "#FCD4CA",
        },
        info: {
          900: "#0D1016",
          800: "#1A212C",
          700: "#283142",
          600: "#354258",
          500: "#42526E",
          400: "#5B7198",
          300: "#8294B4",
          200: "#ACB8CD",
          100: "#D5DBE6",
        },
        warning: {
          900: "#332200",
          800: "#664400",
          700: "#996700",
          600: "#CC8900",
          500: "#FFAB00",
          400: "#FFBC33",
          300: "#FFCD66",
          200: "#FFDD99",
          100: "#FFEECC",
        },
        gray: {
          900: "#36322F",
          800: "#706763",
          700: "#9A928D",
          600: "#AEA7A3",
          500: "#BAB4B1",
          400: "#CAC6C3",
          300: "#D7D3D1",
          200: "#E3E0DF",
          100: "#EFEDED",
        },
        black: "#000",
        white: "#fff",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
