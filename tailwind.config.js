module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite", // Define aurora animation
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%", // Start position
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%", // End position
          },
        },
      },
      backdropBlur: {
        sm: "4px",
        md: "8px",
        lg: "12px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp")
  ],
};
