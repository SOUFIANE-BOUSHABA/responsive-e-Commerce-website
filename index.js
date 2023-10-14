
    const menu = document.querySelector(".menu-toggle");
    const header = document.querySelector(".header-link");

    menu.addEventListener("click", function() {
        if (header.style.display === "flex") {
            header.style.display = "none";
        } else {
            header.style.display = "flex";
        }
    });

