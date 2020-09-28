const Element = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.add("open");
}
function toggleClose() {
  this.classList.remove("open");
}
function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.propertyName.toggle("open-active");
  }
}

Element.forEach((panel) => panel.addEventListener("mouseenter", toggleOpen));
Element.forEach((panel) => panel.addEventListener("mouseleave", toggleClose));

Element.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
