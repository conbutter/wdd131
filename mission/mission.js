document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.getElementById('theme');
    const imageElement = document.querySelector('.logo')

    selectElement.addEventListener('change', function () {
        const selectedValue = this.value;
        if (selectedValue === 'dark') {
            document.body.classList.add('dark');
            imageElement.src = "images/byui-logo_white.png";
        } else {
            document.body.classList.remove('dark');
            imageElement.src = "images/byui-logo_blue.webp";
        }
    });
});