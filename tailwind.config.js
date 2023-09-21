/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1440px",
    },
    colors: {
      purple: {
        100: "#EFEBFF",
        200: "#BEADFF",
        300: "#633CFF",
      },
      grey: {
        100: "#FAFAFA",
        200: "#737373",
        300: "#333333",
      },
      white: "#FFFFFF",
      red: "#FF3939",
      borders: '#D9D9D9',
      transparent: 'transparent'
    },
    extend: {
      width: {
        form: '476px'
      },
      fontSize: {
        heading_s: '16px',
        heading_m: '32px',
        body_s: '12px',
        body_m: '16px'
      },
      boxShadow: {
        'purple': '0px 0px 32px 0px rgba(99, 60, 255, 0.25)',
        'grey': '0px 0px 32px 0px rgba(0, 0, 0, 0.10)'
      },
      backgroundImage: {
        'phone-mockup': "url('./assets/illustration-phone-mockup.svg')"
      }
    },
  },
  plugins: [],
}
