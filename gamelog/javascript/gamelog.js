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
    const gameContainer = document.querySelector(".game")
    const gameTag = document.querySelector(".game-tag");
    const gameLinks = document.querySelectorAll(".game-link")
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
        gameContainer.style.borderColor = "white";
        gameTag.style.borderColor = "white";
        gameLinks.forEach(link => link.style.color = "#d781ff");
        gameEditButtons.forEach(button => button.style.color = "#ffffff");
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
        gameContainer.style.borderColor = "black";
        gameTag.style.borderColor = "black";
        gameLinks.forEach(link => link.style.color = "rgb(57, 43, 88)");
        gameEditButtons.forEach(button => button.style.color = "#000000");
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
    const gameContainer = document.querySelector(".game")
    const gameTag = document.querySelector(".game-tag");
    const gameLinks = document.querySelectorAll(".game-link")
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
        gameContainer.style.borderColor = "white";
        gameTag.style.borderColor = "white";
        gameLinks.forEach(link => link.style.color = "#d781ff");
        gameEditButtons.forEach(button => button.style.color = "#ffffff");
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
        gameContainer.style.borderColor = "black";
        gameTag.style.borderColor = "black";
        gameLinks.forEach(link => link.style.color = "rgb(57, 43, 88)");
        gameEditButtons.forEach(button => button.style.color = "#000000");
        darkModeButton.textContent = "Dark Mode";
    }
}

darkModeButton.addEventListener("click", switchVisualMode);
applyVisualMode();

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