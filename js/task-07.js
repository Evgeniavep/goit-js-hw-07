const inputEl = document.querySelector("input");
const textEl = document.querySelector("span");

inputEl.addEventListener("input", changeFontSize);

function changeFontSize() {
    const sizeValue = inputEl.value;
    return (textEl.style.fontSize = sizeValue + "px");
 }