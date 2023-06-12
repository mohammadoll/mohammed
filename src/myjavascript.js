var mobilebtn = document.getElementById("mobile-btn");
var mobilemenu = document.getElementById("mobile-menu");

mobilebtn.addEventListener("click", open)

function open() {
    mobilemenu.classList.toggle("hidden")
}