const menuButton = document.querySelector("#menuButton");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  nav.classList.toggle("hide");
}

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
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${path}" alt="${alt_text}">
        </div>`;
}

function viewHandler(event) {
    const clickElement = 
    // create a variable to hold the element that was clicked on from event.target

	// get the src attribute from that element and 'split' it on the "-"

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
}

  handleResize();
  menuButton.addEventListener("click", toggleMenu);
  window.addEventListener("resize", handleResize);