const value = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counterValue = Number(value.textContent);

const increment = () => {
    counterValue += Number(1);
    return (value.textContent = counterValue);
};

const decrement = () => {
    counterValue -= Number(1);
    return (value.textContent = counterValue);
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
