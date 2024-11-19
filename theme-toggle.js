const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeIconFilled = document.getElementById('theme-icon-filled');
const body = document.body;

// Set the default theme to dark mode
if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'dark');
}

// Check for the theme preference in localStorage
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeIcon.src = '/images/icons/sun.svg'; // Change to sun icon for light mode
    themeIconFilled.src = '/images/icons/sun_filled.svg'; // Change to filled sun icon
} else {
    themeIcon.src = '/images/icons/moon.svg'; // Dark mode by default
    themeIconFilled.src = '/images/icons/moon_filled.svg'; // Filled moon icon
}

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    // Save the theme preference to localStorage
    if (body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
    themeIcon.src = '/images/icons/sun.svg'; // Sun icon for light mode
    themeIconFilled.src = '/images/icons/sun_filled.svg'; // Filled sun icon
    } else {
    localStorage.setItem('theme', 'dark');
    themeIcon.src = '/images/icons/moon.svg'; // Moon icon for dark mode
    themeIconFilled.src = '/images/icons/moon_filled.svg'; // Filled moon icon
    }
});