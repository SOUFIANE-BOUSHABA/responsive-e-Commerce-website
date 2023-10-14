
    const menu = document.querySelector(".menu-toggle");
    const header = document.querySelector(".header-link");

    menu.addEventListener("click", function() {
        if (header.style.display === "flex") {
            header.style.display = "none";
        } else {
            header.style.display = "flex";
        }
    });



const Input = document.getElementById("quantity");
const incButton = document.getElementById("increment");
const dicButton = document.getElementById("dicrement");

incButton.addEventListener("click", function() {
    Input.value = parseInt(Input.value) + 1;
});

dicButton.addEventListener("click", function() {
    if (parseInt(Input.value) > 1) {
        Input.value = parseInt(Input.value) - 1;
    }
});







const line = document.querySelectorAll(".product-link");
const contenu = document.querySelectorAll(".product-content");

line.forEach(function (link) {
    link.addEventListener("click", function () {
        const id = link.getAttribute("data-target");
        contenu.forEach(function (content) {
            content.style.display = "none";
        });
        document.getElementById(id).style.display = "flex";
    });
});