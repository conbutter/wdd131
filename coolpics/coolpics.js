const menuButton = document.querySelector("#menuButton");
const imageGallery = document.querySelector(".gallery");

function toggleMenu() {
    const menu = document.querySelector(".menu");
    if (menu.classList.contains("hide")) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

function viewerTemplate(path, alt_text) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${path}" alt="${alt_text}">
        </div>`;
}

function viewHandler(event) {
    const clickedElement = event.target;
    const srcValue = clickedElement.getAttribute('src');
    const splitArray = srcValue.split("-");
    const newArray = splitArray[0] + "-full.jpeg";
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newArray, 'Mountains'));
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
}

function closeViewer(event) {
    const viewerDiv = event.target.closest('.viewer');
    if (viewerDiv) {
        viewerDiv.remove();
    }
}

handleResize();

imageGallery.addEventListener("click", viewHandler);
menuButton.addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);