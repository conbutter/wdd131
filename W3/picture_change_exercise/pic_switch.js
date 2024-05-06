let ourImage = document.getElementById('testImage');
let imageInput = document.getElementById('imageInput');
let imageButton = document.getElementById('imageButton');

imageButton.addEventListener('click', function () {
    let newImageUrl = imageInput.value;
    ourImage.src = newImageUrl;
});

// ourImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlY7cQiXshW-x2Ksfzw3vkV-ETVmAGsLC8gVgCi_AcDA&s'