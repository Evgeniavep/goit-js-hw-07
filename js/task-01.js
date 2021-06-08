const navItemEl = document.querySelectorAll('.item').length;
console.log(`В списке ${navItemEl} категории`);

const elements = document.querySelectorAll('li.item');

elements.forEach((elem) => {
    let title = elem.firstElementChild.textContent;
    console.log(`Категория: ${title}`);
    let quantity = elem.lastElementChild.children.length;
    console.log(`Количество элементов: ${quantity}`)
});
