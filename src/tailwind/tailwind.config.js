module.exports = {
  purge: ["../*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-main": "#18191a",
        "dark-second": "#242526",
        "dark-third": "#3a3b3c",
        "dark-text": "#b8bbbf",
      },
      screens: {
        "3xl": "2560px",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      transform: ["group-hover"],
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
