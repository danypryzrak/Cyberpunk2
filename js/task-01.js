const categoriesQuantity = document.querySelectorAll('.item').length

const categories = document.querySelectorAll('.item')

console.log("Number of categories:",categoriesQuantity)

const categorieAndElements = categories.forEach(categorie => {
    console.log('Category', categorie.firstElementChild.textContent);
    console.log('Elements', categorie.lastElementChild.children.length);
}
)

