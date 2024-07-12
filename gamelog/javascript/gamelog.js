// ---------------------
// DARK MODE VIEWER CODE
// ---------------------

const darkModeButton = document.querySelector(".dark-mode");
var darkMode = localStorage.getItem('darkMode') === '1' ? 1 : 0;

function switchVisualMode() {
    const body = document.body;
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const searchImg = document.querySelector(".search-button");
    const searchForm = document.querySelector(".search-form");
    const searchBox = document.querySelector(".search-box");
    const gameContainers = document.querySelectorAll(".game")
    const gameTags = document.querySelectorAll(".game-tag");
    const gameLinks = document.querySelectorAll(".game-link");
    const gameEditButtons = document.querySelectorAll(".game-adjust-button");
    const darkModeButton = document.querySelector(".dark-mode");

    if (darkMode == 0) {
        darkMode = 1;
        body.style.backgroundColor = "#121212";
        body.style.color = "#ffffff";
        header.style.backgroundColor = "#392B58";
        footer.style.backgroundColor = "#1f1f1f";
        searchImg.src = "images/search_white.svg";
        searchImg.style.borderColor = "white";
        searchForm.style.borderColor = "white";
        searchBox.style.backgroundColor = "#121212";
        searchBox.style.color = "#ffffff";
        gameContainers.forEach(container => container.style.borderColor = "white");
        gameTags.forEach(tag => tag.style.borderColor = "white");
        gameLinks.forEach(link => link.style.color = "#d781ff");
        gameEditButtons.forEach(button => {
            button.style.color = "#ffffff";
            if (button.id === 'favorite-button') {
                button.style.color = "#ff0000";
            }
        });
        darkModeButton.textContent = "Light Mode";
    } else {
        darkMode = 0;
        body.style.backgroundColor = "#fcfbfb";
        body.style.color = "#000000";
        header.style.backgroundColor = "#392B58";
        footer.style.backgroundColor = "rgb(31, 31, 31)";
        searchImg.src = "images/search.svg";
        searchImg.style.borderColor = "black";
        searchForm.style.borderColor = "black";
        searchBox.style.backgroundColor = "#ffffff";
        searchBox.style.color = "#000000";
        gameContainers.forEach(container => container.style.borderColor = "black");
        gameTags.forEach(tag => tag.style.borderColor = "black");
        gameLinks.forEach(link => link.style.color = "rgb(57, 43, 88)");
        gameEditButtons.forEach(button => {
            button.style.color = "#000000";
            if (button.id === 'favorite-button') {
                button.style.color = "#ff0000";
            }
        });
        darkModeButton.textContent = "Dark Mode";
    }

    localStorage.setItem('darkMode', darkMode);
}

function applyVisualMode() {
    const body = document.body;
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const searchImg = document.querySelector(".search-button");
    const searchForm = document.querySelector(".search-form");
    const searchBox = document.querySelector(".search-box");
    const gameContainers = document.querySelectorAll(".game")
    const gameTags = document.querySelectorAll(".game-tag");
    const gameLinks = document.querySelectorAll(".game-link");
    const gameEditButtons = document.querySelectorAll(".game-adjust-button");
    const darkModeButton = document.querySelector(".dark-mode");

    if (darkMode == 1) {
        body.style.backgroundColor = "#121212";
        body.style.color = "#ffffff";
        header.style.backgroundColor = "#392B58";
        footer.style.backgroundColor = "#1f1f1f";
        searchImg.src = "images/search_white.svg";
        searchImg.style.borderColor = "white";
        searchForm.style.borderColor = "white";
        searchBox.style.backgroundColor = "#121212";
        searchBox.style.color = "#ffffff";
        gameContainers.forEach(container => container.style.borderColor = "white");
        gameTags.forEach(tag => tag.style.borderColor = "white");
        gameLinks.forEach(link => link.style.color = "#d781ff");
        gameEditButtons.forEach(button => {
            button.style.color = "#ffffff";
            if (button.id === 'favorite-button') {
                button.style.color = "#ff0000";
            }
        });
        darkModeButton.textContent = "Light Mode";
    } else {
        body.style.backgroundColor = "#fcfbfb";
        body.style.color = "#000000";
        header.style.backgroundColor = "#392B58";
        footer.style.backgroundColor = "rgb(31, 31, 31)";
        searchImg.src = "images/search.svg";
        searchImg.style.borderColor = "black";
        searchForm.style.borderColor = "black";
        searchBox.style.backgroundColor = "#ffffff";
        searchBox.style.color = "#000000";
        gameContainers.forEach(container => container.style.borderColor = "black");
        gameTags.forEach(tag => tag.style.borderColor = "black");
        gameLinks.forEach(link => link.style.color = "rgb(57, 43, 88)");
        gameEditButtons.forEach(button => {
            button.style.color = "#000000";
            if (button.id === 'favorite-button') {
                button.style.color = "#ff0000";
            }
        });
        darkModeButton.textContent = "Dark Mode";
    }
}

darkModeButton.addEventListener("click", switchVisualMode);

// -----------------------
// ADD / SHOW FORM BUTTONS
// -----------------------

const addButton = document.getElementById('add-button');
const removeButton = document.getElementById('remove-button');

const addForm = document.getElementById('add-form');
const removeForm = document.getElementById('remove-form');

addButton.addEventListener('click', () => {
    if (addForm.style.display === 'none' || addForm.style.display === '') {
        addForm.style.display = 'block';
    } else {
        addForm.style.display = 'none';
    }
    removeForm.style.display = 'none';
});

removeButton.addEventListener('click', () => {
    if (removeForm.style.display === 'none' || removeForm.style.display === '') {
        removeForm.style.display = 'block';
    } else {
        removeForm.style.display = 'none';
    }
    addForm.style.display = 'none';
});

// --------------------------
// DISPLAY ARRAY CONTENT CODE
// --------------------------

import games from './games.mjs';

function createGameHTML(game) {
    const favoriteColor = game.favorite === 1 ? 'color: red;' : '';  // Check if favorite is set to 1

    return `
    <div class="game">
        <img class="game-img" src="${game.image}" alt="${game.image_alt_text}">
        <div class="game-right">
            <div class="name-and-rating">
                <h2 class="game-name">${game.name}</h2>
                <div class="tag-and-rating">
                    ${tagsTemplate(game.tags)}
                    ${ratingTemplate(game.rating)}
                </div>
            </div>
            <p class="game-user-description"><b>Your Notes: </b>${game.user_description}</p>
            <p class="game-description"><i>${game.description}</i></p>
            <div class="game-links">
                <a id="link-store" class="game-link" href="${game.store_url}">Store Page</a>
                <a id="link-website" class="game-link" href="${game.site_url}">Website</a>
            </div>
        </div>
        <div class="game-far-right">
            <a class="game-adjust-button" id='favorite-button' data-game-name="${game.name}" style="${favoriteColor}">❤</a>
            <a class="game-adjust-button" id='delete-button'>✕</a>
        </div>
    </div>
`;
}
// Removed this part from HTML for time's sake:
// <a class="game-adjust-button" id='edit-button'>✎</a>

function renderGames(games) {
    const container = document.querySelector('.game-display');
    container.innerHTML = ''; 

    if (Array.isArray(games)) {
        games.forEach(game => {
            container.innerHTML += createGameHTML(game);
        });
    } else {
        container.innerHTML = createGameHTML(games);
    }
}

function tagsTemplate(tags) {
    let html = '';
    tags.forEach(tag => {
        html += `<p class="game-tag">${tag}</p>\n`;
    });
    return html;
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            html += '<span aria-hidden="true" class="icon-star">★</span>';
        } else {
            html += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
        }
    }
    html += `</span>`;
    return html;
}

// ---------------
// SEARCH BAR CODE
// ---------------

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', searchHandler);

function searchHandler(event) {
    event.preventDefault();
    
    const searchInput = document.querySelector('.search-box');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    const filteredGames = games.filter(game => {
        return (
            game.name.toLowerCase().includes(searchTerm) ||
            game.description.toLowerCase().includes(searchTerm) ||
            game.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    });

    filteredGames.sort((a, b) => a.name.localeCompare(b.name));
    renderGames(filteredGames);
    applyVisualMode();
}

// --------------
// SITE LOAD CODE
// --------------

function init() {
    applyVisualMode();
    renderGames(games);
}

document.addEventListener('DOMContentLoaded', init);

// --------------------
// FAVORITE BUTTON CODE
// --------------------

document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'favorite-button') {
        toggleFavoriteStatus();
    }
});

function toggleFavoriteStatus() {
    const favoriteButton = document.getElementById('favorite-button');
    console.log(favoriteButton)
    const gameName = favoriteButton.dataset.gameName;
    console.log(gameName)
    const favoriteIndex = games.findIndex(game => game.name === gameName);

    if (favoriteIndex !== -1) {
        games[favoriteIndex].favorite = games[favoriteIndex].favorite === 1 ? 0 : 1;
        init();
    }
}

// TO-DO:
// + Fix favorite button
// + Add title add / removal functionality
// + Add update display functionality when content is added / removed