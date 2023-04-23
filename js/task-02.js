const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const elementsList = ingredients.map(ingredient => {
  const ingrList = document.createElement('li');
  ingrList.classList.add('item');
  ingrList.textContent = ingredient;

  return ingrList;
});

ingredientsList.append(...elementsList);
console.log(ingredientsList);