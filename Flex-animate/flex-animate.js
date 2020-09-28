const Element = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}
function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.propertyName.toggle("open-active");
  }
}

Element.forEach((panel) => panel.addEventListener("click", toggleOpen));
Element.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
