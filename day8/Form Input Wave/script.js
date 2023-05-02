const labels = document.querySelectorAll(".form-controllabel");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map((letter, idx) => `<span>${letter}</span>`)
    .join(" ");
});
