
const themeSelector = document.querySelector('#theme-selector');
const body = document.body;
const logoImg = document.querySelector('#logo-img');

function changeTheme() {
    if (themeSelector.value === 'dark') {
        body.classList.add('dark');
        logoImg.src = 'images/byui-logo_white.webp'; // White logo for dark theme
    } else {
        body.classList.remove('dark');
        logoImg.src = 'images/byui-logo_blue.webp'; // Blue logo for light theme
    }
}

themeSelector.addEventListener('change', changeTheme);
