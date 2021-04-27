const toggleDarkMode = (el) => {
  el.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });
};

document
  .querySelectorAll([
    "#dark-mode-toggle-btn_right",
    "#dark-mode-toggle-btn_left",
  ])
  .forEach((el) => {
    toggleDarkMode(el);
  });
