const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const elements = ingredients.map((elements) => {
  const newEl = document.createElement('li');
  newEl.textContent = elements;
  return newEl;
})

ingredientsList.append(...elements);
console.log(ingredientsList);
