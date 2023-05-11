const hamburger = document.querySelector(".hamburger-menu");
const hamburgerMenu = document.querySelector(".hamburger-menu-items");
const hamburgerMenuCloseButton = document.querySelector("#hamburger-menu-close-button");

hamburger.addEventListener("click", () => {
    hamburgerMenu.style.display = "block";
});

hamburgerMenuCloseButton.addEventListener("click", () => {
    hamburgerMenu.style.display = "none";
});


