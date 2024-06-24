import recipes from './recipes.mjs';


function createRecipeHTML(recipe) {
    return `
    <div class="recipe">
    <img class="recipe-img" src="${recipe.image}" alt="${recipe.description}">
        <div class="recipe-right">
            ${tagsTemplate(recipe.tags)}
            <div class="name-and-rating">
                <h2 class="recipe-name">${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
            </div>
            <p class="recipe-description">${recipe.description}</p>
        </div>
    </div>
`;
}
  

function renderRecipes(recipes) {
    const container = document.querySelector('.recipe-display');
    container.innerHTML = ''; // Clear previous content

    if (Array.isArray(recipes)) {
        recipes.forEach(recipe => {
            container.innerHTML += createRecipeHTML(recipe);
        });
    } else {
        container.innerHTML = createRecipeHTML(recipes);
    }
}


  function tagsTemplate(tags) {
    let html = '';
    tags.forEach(tag => {
        html += `<p class="recipe-tag">${tag}</p>\n`;
    });
    return html;
}


function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            html += '<span aria-hidden="true" class="icon-star">⭐</span>';
        } else {
            html += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
        }
    }
    html += `</span>`;
    return html;
}


function randomNumber(range) {
    return Math.floor(Math.random() * range);
}


function init() {
    const number = randomNumber(recipes.length);
    const recipe = recipes[number];
    renderRecipes(recipe);
}

document.addEventListener('DOMContentLoaded', init);

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', searchHandler);

function searchHandler(event) {
    event.preventDefault();
    
    const searchInput = document.querySelector('.search-box');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    const filteredRecipes = recipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
        );
    });

    filteredRecipes.sort((a, b) => a.name.localeCompare(b.name));
    renderRecipes(filteredRecipes);
}