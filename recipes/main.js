import recipes from './recipes.mjs';

function createRecipeHTML(recipe) {
    return `
    <div class="recipe">
    <img class="recipe-img" src="${recipe.image}" alt="${recipe.description}">
        <div class="recipe-right">
            <p class="recipe-tag">${recipe.tags}</p>
            <div class="name-and-rating">
                <h2 class="recipe-name">${recipe.name}</h2>
                <span class="rating" role="img" aria-label="Rating: 4 out of 5 stars">
                    <span aria-hidden="true" class="icon-star">⭐</span>
                    <span aria-hidden="true" class="icon-star">⭐</span>
                    <span aria-hidden="true" class="icon-star">⭐</span>
                    <span aria-hidden="true" class="icon-star-empty">⭐</span>
                    <span aria-hidden="true" class="icon-star-empty">☆</span>
                </span>
            </div>
            <p class="recipe-description">${recipe.description}</p>
        </div>
    </div>
`;
}

// ${recipe.THING} 

// author: 'Provo High Culinary Students',
// url: '',
// isBasedOn: '',
// cookTime: '30 Min',
// datePublished: '2016-10-16',
// tags: ['Waffles', 'Sweet Potato', 'Side'],
// description: 'Savory waffles made with Sweet potato with a hint of Ginger',
// image: './images/sweet-potato-waffle.jpg',
// recipeIngredient: [
// 	'2 separated eggs',
// 	'1/4 C Oil',
// 	'1/4 tsp salt',
// 	'1/4 tsp Cayenne pepper',
// 	'3/4 C milk',
// 	'1 Tbsp Brown Sugar',
// 	'2 tsp Shredded Ginger',
// 	'3/4 C Mashed Sweet Potatoes',
// 	'1 Tbsp Minced Shallots',
// 	'1 Tbsp Baking Powder',
// 	'1 Tbsp Chives',
// 	'1/4 C Cornmeal',
// 	'1 C Flour'
// ],
// name: 'Sweet Potato Waffles',
// prepTime: '30 Min',
// recipeInstructions: [
// 	'Add the egg yolks, oil, salt, cayenne, sugar, ginger, shallots, sweet potatoes (steam and mash before), and milk and mix well.',
// 	'Next add the cornmeal, chives, and flour and baking powder',
// 	'Whip the egg whites until stiff and fold in',
// 	'Cook until golden brown in a waffle iron. Serve with butter and Wilted Greens or Honey.'
// ],
// recipeYield: '6 waffles',
// rating: 4
  
  function renderRecipes() {
    const container = document.querySelector('.recipe-display');
    container.innerHTML = '';
    recipes.forEach(recipe => {
        container.innerHTML += createRecipeHTML(recipe);
    });
  }
  
  document.addEventListener('DOMContentLoaded', renderRecipes);