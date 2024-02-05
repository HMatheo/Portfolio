const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-switch");
const moonIcon = document.getElementById("moon");
const sunIcon = document.getElementById("sun");

toggleSwitch.addEventListener('click', () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        moonIcon.style.opacity = "0";
        sunIcon.style.opacity = "1";
    } else {
        moonIcon.style.opacity = "1";
        sunIcon.style.opacity = "0";
    }
});
