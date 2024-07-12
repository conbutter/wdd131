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
    const gameTags = document.querySelectorAll(".game-tag");
    const gameLinks = document.querySelectorAll(".game-link");
    const darkModeButton = document.querySelector(".dark-mode");

    if (darkMode == 0) {
        console.log("Dark Mode enabled, switchVisualMode()")
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
        gameTags.forEach(tag => tag.style.borderColor = "white");
        gameLinks.forEach(link => link.style.color = "#d781ff");
        darkModeButton.textContent = "Light Mode";
    } else {
        console.log("Dark Mode disabled, switchVisualMode()")
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
        gameTags.forEach(tag => tag.style.borderColor = "black");
        gameLinks.forEach(link => link.style.color = "rgb(57, 43, 88)");
        darkModeButton.textContent = "Dark Mode";
    }

    localStorage.setItem('darkMode', darkMode);
    updateFavoriteButtonColors()
}

function applyVisualMode() {
    const body = document.body;
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const searchImg = document.querySelector(".search-button");
    const searchForm = document.querySelector(".search-form");
    const searchBox = document.querySelector(".search-box");
    const gameTags = document.querySelectorAll(".game-tag");
    const gameLinks = document.querySelectorAll(".game-link");
    const darkModeButton = document.querySelector(".dark-mode");
    
    if (darkMode == 1) {
        console.log("Dark Mode enabled, applyVisualMode()")
        body.style.backgroundColor = "#121212";
        body.style.color = "#ffffff";
        header.style.backgroundColor = "#392B58";
        footer.style.backgroundColor = "#1f1f1f";
        searchImg.src = "images/search_white.svg";
        searchImg.style.borderColor = "white";
        searchForm.style.borderColor = "white";
        searchBox.style.backgroundColor = "#121212";
        searchBox.style.color = "#ffffff";
        gameTags.forEach(tag => tag.style.borderColor = "white");
        gameLinks.forEach(link => link.style.color = "#d781ff");
        darkModeButton.textContent = "Light Mode";
    } else {
        console.log("Dark Mode disabled, applyVisualMode()")
        body.style.backgroundColor = "#fcfbfb";
        body.style.color = "#000000";
        header.style.backgroundColor = "#392B58";
        footer.style.backgroundColor = "rgb(31, 31, 31)";
        searchImg.src = "images/search.svg";
        searchImg.style.borderColor = "black";
        searchForm.style.borderColor = "black";
        searchBox.style.backgroundColor = "#ffffff";
        searchBox.style.color = "#000000";
        gameTags.forEach(tag => tag.style.borderColor = "black");
        gameLinks.forEach(link => link.style.color = "rgb(57, 43, 88)");
        darkModeButton.textContent = "Dark Mode";
    }
    updateFavoriteButtonColors()
}

function updateFavoriteButtonColors() {
    const gameButtons = document.querySelectorAll('.game-adjust-button');

    gameButtons.forEach(button => {
        if (button.id === 'favorite-button') {
            const gameName = button.dataset.gameName;
            const game = games.find(g => g.name === gameName);

            if (game) {
                button.style.color = game.favorite === 1 ? 'red' : (darkMode === 1 ? 'white' : 'black');
            }
        }
    });
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
            <a class="game-adjust-button" id='delete-button' data-game-name="${game.name}">✕</a>
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
    applyVisualMode()
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

// ---------------------------------------
// FAVORITE BUTTON CODE + DELETE GAME CODE
// ---------------------------------------

document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'favorite-button') {
        toggleFavoriteStatus(event.target);
    }
    if (event.target && event.target.id === 'delete-button') {
        toggleArrayDelete(event.target);
    }
});

function toggleFavoriteStatus(favoriteButton) {
    const gameName = favoriteButton.dataset.gameName;
    const favoriteIndex = games.findIndex(game => game.name === gameName);

    if (favoriteIndex !== -1) {
        games[favoriteIndex].favorite = games[favoriteIndex].favorite === 1 ? 0 : 1;

        if (games[favoriteIndex].favorite === 1) {
            favoriteButton.style.color = darkMode === 1 ? 'red' : 'red';
        } else {
            favoriteButton.style.color = darkMode === 1 ? 'white' : 'black';
        }

        applyVisualMode();
    }
}

function toggleArrayDelete(deleteButton) {
    const gameName = deleteButton.dataset.gameName;
    const deleteIndex = games.findIndex(game => game.name === gameName);

    if (deleteIndex !== -1) {
        games[deleteIndex].favorite = games[deleteIndex].favorite === 1 ? 0 : 1;
        // console.log(deleteButton.dataset.gameName + " pressed")
        games.splice(deleteIndex, 1)
    }

    renderGames(games);
}

// ------------------
// GAME ADD FORM CODE
// ------------------

document.getElementById('game-add-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Collect form data
    const gameName = document.getElementById('game-name').value;
    const gamePlatformSelect = document.getElementById('game-platform');
    const gamePlatform = Array.from(gamePlatformSelect.selectedOptions).map(option => option.value);
    const gameRating = document.getElementById('game-rating').value;
    const gameFavorite = document.getElementById('game-favorite').value === 'Yes' ? 1 : 0;
    const gameDescription = document.getElementById('game-description').value;
    const gameNotes = document.getElementById('game-notes').value || '';
    const gameStorePage = document.getElementById('game-store-page').value || '';
    const gameWebsite = document.getElementById('game-website').value || '';
    
    // Create new game object
    const newGame = {
        name: gameName,
        platform: gamePlatform,
        rating: parseInt(gameRating),
        favorite: gameFavorite,
        description: gameDescription,
        notes: gameNotes,
        storePage: gameStorePage,
        website: gameWebsite,
        image: 'images/games/unknown-game-key-01.png',
        image_alt_text: `Box art for ${gameName}`
    };
    
    // Add the new game to the games array
    games.push(newGame);

    // Update local storage or backend to persist the new game (local storage example below)
    localStorage.setItem('games', JSON.stringify(games));

    // Optionally, clear the form after submission
    this.reset();

    // Optionally, hide the form after submission
    addForm.style.display = 'none';

    // Update the game display to reflect the newly added game
    updateGameDisplay();

    // Log to confirm the addition
    console.log('New game added:', newGame);
});

// Function to update the game display
function updateGameDisplay() {
    const gameDisplay = document.querySelector('.game-display');
    gameDisplay.innerHTML = ''; // Clear current display

    games.forEach(game => {
        const gameHTML = createGameHTML(game);
        gameDisplay.innerHTML += gameHTML;
    });

    // Re-apply dark mode styles if necessary
    applyVisualMode();
}

// TO-DO:
// + Add title addition functionality
// + Add update display functionality when content is added