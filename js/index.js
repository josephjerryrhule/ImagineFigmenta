const holdIcon = document.querySelector("div.selectplaceholder");
const options = document.querySelector(".cs-options");

holdIcon.addEventListener("click", () => {
  options.classList.add("cs-active");
});

options.addEventListener("click", () => {
  options.classList.remove("cs-active");
});
