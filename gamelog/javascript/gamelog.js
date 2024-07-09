const darkModeButton = document.querySelector(".dark-mode");
var darkMode = 0;

function switchVisualMode() {
    const body = document.body;
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const darkModeButton = document.querySelector(".dark-mode");

    if (darkMode == 0) {
        darkMode = 1;
        body.style.backgroundColor = "#121212";
        body.style.color = "#ffffff";
        header.style.backgroundColor = "#392B58";
        footer.style.backgroundColor = "#1f1f1f";
        darkModeButton.textContent = "Light Mode";
    } else {
        darkMode = 0;
        body.style.backgroundColor = "#fcfbfb";
        body.style.color = "#000000";
        header.style.backgroundColor = "#392B58";
        footer.style.backgroundColor = "rgb(31, 31, 31)";
        darkModeButton.textContent = "Dark Mode";
    }
}

darkModeButton.addEventListener("click", switchVisualMode);
