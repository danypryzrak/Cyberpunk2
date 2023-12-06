const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

function createIngredientsItems(array) {
  array.forEach(ingredient => {
    const listItem = document.createElement('li')
    const itemText = document.createElement('p')
    itemText.textContent = ingredient
    listItem.append(itemText)
    ingredientsList.append(listItem)
  });
}

createIngredientsItems(ingredients)