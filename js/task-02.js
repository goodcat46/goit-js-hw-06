const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('ul');
console.log(listEl);
const makelistItem = (el) => {
  const ingredientsItemEl = document.createElement('li');
  ingredientsItemEl.textContent = el
  ingredientsItemEl.classList = '.item';

  return ingredientsItemEl
};

// ingredientsListEl.uppend(ingredientsItemEl)


const listItemArray = ingredients.map(el => makelistItem(el));
console.log(listItemArray);

listEl.append(...listItemArray);
console.log(listEl);

