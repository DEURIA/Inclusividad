document.addEventListener("DOMContentLoaded", function () {
    const accessibilityBtn = document.getElementById("accessibility-btn");
    const accessibilityMenu = document.getElementById("accessibility-menu");

    // Alternar visibilidad del menú de accesibilidad
    accessibilityBtn.addEventListener("click", function () {
        accessibilityMenu.classList.toggle("show");
    });

    // Cierra el menú si se hace clic fuera de él
    document.addEventListener("click", function (event) {
        if (!accessibilityMenu.contains(event.target) && event.target !== accessibilityBtn) {
            accessibilityMenu.classList.remove("show");
        }
    });

    // Funciones de accesibilidad
    function increaseText() {
        document.body.style.fontSize = "larger";
    }

    function decreaseText() {
        document.body.style.fontSize = "smaller";
    }

    function toggleGrayscale() {
        document.body.classList.toggle("grayscale");
    }

    function toggleHighContrast() {
        document.body.classList.toggle("high-contrast");
        // Aplicar a todas las imágenes
        document.querySelectorAll("img").forEach(img => {
        img.classList.toggle("high-contrast");
    });
    }

    function toggleNegativeContrast() {
        document.body.classList.toggle("negative-contrast");
        document.querySelectorAll("img").forEach(img => {
            img.classList.toggle("negative-contrast");
        });
    }

    function toggleLightBackground() {
        document.body.classList.toggle("light-background");
    }

    function toggleUnderline() {
        document.body.classList.toggle("underline-links");
    }

    function toggleReadableFont() {
        document.body.classList.toggle("readable-font");
    }

    function resetAccessibility() {
        document.body.classList.remove(
            "grayscale",
            "high-contrast",
            "negative-contrast",
            "light-background",
            "underline-links",
            "readable-font"
        );
        document.body.style.fontSize = "";
    }

    // Asignar eventos a los botones usando sus IDs (asegúrate de que estos IDs existan en tu HTML)
    document.getElementById("increase-text").addEventListener("click", increaseText);
    document.getElementById("decrease-text").addEventListener("click", decreaseText);
    document.getElementById("toggle-grayscale").addEventListener("click", toggleGrayscale);
    document.getElementById("toggle-high-contrast").addEventListener("click", toggleHighContrast);
    document.getElementById("toggle-negative-contrast").addEventListener("click", toggleNegativeContrast);
    document.getElementById("toggle-light-background").addEventListener("click", toggleLightBackground);
    document.getElementById("toggle-underline").addEventListener("click", toggleUnderline);
    document.getElementById("toggle-readable-font").addEventListener("click", toggleReadableFont);
    document.getElementById("reset-accessibility").addEventListener("click", resetAccessibility);
});
