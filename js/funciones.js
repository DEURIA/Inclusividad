document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler"); // Botón hamburguesa
    const menu = document.getElementById("navbarNav"); // Contenedor del menú

    // Cerrar el menú con la tecla 'Escape'
    document.addEventListener("keydown", function (event) {// el evento keydown, que se activa cuando el usuario presiona una tecla en el teclado
        if (event.key === "Escape" && menu.classList.contains("show")) {// si se presiona esc y si el menu esta abierto
            toggler.click(); // Simula clic en el botón para cerrarlo
        }
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", function (event) {// el evento click, que se activa cuando el usuario hace clic en un elemento cualquiera fuera del menu
        // Si el menú está abierto y se hace clic fuera de él y del botón toggler
        if (menu.classList.contains("show") && !menu.contains(event.target) && !toggler.contains(event.target)) {// si el menu esta abierto y el click no fue en el ni en el boton
            toggler.click(); // Cierra el menú
        }
    });
});
