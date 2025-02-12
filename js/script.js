const button = document.getElementById("darkModeToggle")

function toggleTheme() {
    const body = document.body;

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        button.style.backgroundColor = "#333333";
        button.style.color = "white";
        button.textContent = "Dark mode";
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        button.style.backgroundColor = "white";
        button.style.color = "#333333";
        button.textContent = "White mode";
    }
    console.log(localStorage.getItem('theme'))
}

document.getElementById('darkModeToggle').addEventListener('click', function () { toggleTheme() });

window.addEventListener('load', function () {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});
