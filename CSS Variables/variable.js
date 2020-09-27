// const inputs = document.querySelectorAll(".modify");
const inputs = document.querySelectorAll(".modify");

// function updateIn() {
//   const suffix = this.dataset.sizing || "";
//   document.documentElement.style.setProperty(
//     `--${this.name}`,
//     this.value + suffix
//   );
// }
function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

// inputs.forEach((input) => input.addEventListener("change", updateIn));
// inputs.forEach((input) => input.addEventListener("mousemove", updateIn));

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
