module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",

  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        }
      },
      animation: {
        bounce: 'bounce 6s ease infinite',
        fadeIn: "fadeIn 1s ease-out",
      },
      colors: {
        'bg-beige': '#F2F3F4',
        primary: "#ff6f61",
        "dark-bg": "#0d0d0d",
        "light-text": "#eaeaea",

      },
      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.2)",
        glass: "0 4px 30px rgba(255, 255, 255, 0.1)",
      },
      spacing: {
        "section-padding": "4rem",
      },


      fontFamily: {
        Satoshi: ['Satoshi-Regular', 'Satoshi-Bold']
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}