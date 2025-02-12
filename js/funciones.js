document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const menu = document.getElementById("navbarNav");

    toggler.addEventListener("click", function () {// Al hacer clic en el botón de menú hamburguesa se añade o quita la clase show al menú y se cambia el atributo aria-expanded del botón de menú hamburguesa para indicar si el menú está abierto o cerrado. 
        menu.classList.toggle("show");//esto es para que el menú se muestre o se oculte al hacer clic en el botón de menú hamburguesa. 
        const isExpanded = toggler.getAttribute("aria-expanded") === "true";//esto es para que el botón de menú hamburguesa cambie su atributo aria-expanded a true o false según si el menú está abierto o cerrado.
        toggler.setAttribute("aria-expanded", !isExpanded);//esto es para que el botón de menú hamburguesa cambie su atributo aria-expanded a true o false según si el menú está abierto o cerrado.
    });

    // Permitir cerrar el menú con tecla ESC
    document.addEventListener("keydown", function (event) {// Al pulsar la tecla ESC se cierra el menú si está abierto.
        if (event.key === "Escape" && menu.classList.contains("show")) {
            toggler.click();
        }
    });
});