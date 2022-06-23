const btn = document.querySelector(".theme-toggle-btn");
const container = document.querySelector(".container");

btn.addEventListener("click", toggleFunction);

function toggleFunction() {
  document.body.classList.toggle("dark");
  const currentRotation = parseInt(
    getComputedStyle(container).getPropertyValue("--rotation")
  );
  // console.log(currentRotation)
  container.style.setProperty("--rotation", currentRotation + 180);
}
