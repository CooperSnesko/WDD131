import recipes from './recipes.mjs';

/* Utility Functions */
function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomRecipe() {
    return recipes[random(recipes.length)];
}

/* Template Functions */
function tagsTemplate(tags) {
    return tags.map(tag => `<span>${tag}</span>`).join('');
}

function ratingTemplate(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? '⭐' : '☆';
    }
    return `<p class="rating" aria-label="Rating: ${rating} out of 5 stars">${stars}</p>`;
}

function recipeTemplate(recipe) {
    return `
        <div class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="details">
                <div class="tags">${tagsTemplate(recipe.tags)}</div>
                <h2>${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
                <p class="description">${recipe.description}</p>
            </div>
        </div>
    `;
}

/* Render Functions */
function renderRecipe(recipe) {
    const container = document.getElementById('recipe-container');
    container.innerHTML = recipeTemplate(recipe);
}

/* Filtering Function */
function filterRecipes(query) {
    return recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query))
    );
}

/* Event Handlers */
document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredRecipes = filterRecipes(query);
    const container = document.getElementById('recipe-container');
    container.innerHTML = filteredRecipes.map(recipe => recipeTemplate(recipe)).join('');
});

/* Initialize */
document.addEventListener('DOMContentLoaded', () => {
    const randomRecipe = getRandomRecipe();
    renderRecipe(randomRecipe);
});