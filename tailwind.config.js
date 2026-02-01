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
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.8' },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        bounce: 'bounce 6s ease infinite',
        fadeIn: "fadeIn 1s ease-out",
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      colors: {
        'bg-beige': '#F2F3F4',
        primary: "#ff6f61",
        ink: "var(--ink)",
        muted: "var(--muted)",
        surface: "var(--surface)",
        accent: {
          1: "var(--accent-1)",
          2: "var(--accent-2)",
          3: "var(--accent-3)",
          4: "var(--accent-4)",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.2)",
        glass: "0 4px 30px rgba(255, 255, 255, 0.1)",
        'glow-blue': '0 0 20px rgba(27, 125, 245, 0.25)',
        'glow-coral': '0 0 20px rgba(255, 107, 74, 0.25)',
        'glow-lime': '0 0 20px rgba(156, 255, 87, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        "section-padding": "4rem",
      },
      fontFamily: {
        display: ['Satoshi', 'Segoe UI', 'sans-serif'],
        body: ['Satoshi', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
