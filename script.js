const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");

        menuBtn.textContent =
            navMenu.classList.contains("show")
                ? "✕"
                : "☰";
    });


    document.querySelectorAll("#navMenu a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");

            menuBtn.textContent = "☰";

        });

    });

}


/* GALLERY FILTER */

const filters = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(btn =>
            btn.classList.remove("active")
        );

        filter.classList.add("active");

        const category =
            filter.getAttribute("data-filter");


        products.forEach(product => {

            const productCategory =
                product.getAttribute("data-category");


            if (
                category === "all" ||
                category === productCategory
            ) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

});
