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
        document.body.classList.toggle("high-contrast"); //body
        // Aplicar a todas las imágenes
        document.querySelectorAll("img").forEach(img => { //imagen
            img.classList.toggle("high-contrast");
        });
            // Aplicar alto contraste a los elementos del formulario
        const form = document.getElementById('booking-form');
        const inputs = form.querySelectorAll('input, textarea, select, button, label');
        
        inputs.forEach(element => {
            // Cambiar el fondo y texto de los inputs, botones, y etiquetas
            element.style.backgroundColor = element.style.backgroundColor === 'black' ? '' : 'black';
            element.style.color = element.style.color === 'yellow' ? '' : 'yellow';
            if (element.tagName === 'BUTTON') {
                element.style.border = element.style.border === '2px solid white' ? '' : '2px solid white';
            }
        });
        
        // Aplicar alto contraste al nav
       /*const nav = document.querySelector('nav');
        if (nav) {
            nav.classList.toggle("high-contrast"); // Cambiar la clase 'high-contrast' en el nav
        }*/

    }



    function toggleNegativeContrast() { //invertir colorres logica diferente para form
        document.body.classList.toggle("negative-contrast"); //body

        document.querySelectorAll("img").forEach(img => { //imagen
            img.classList.toggle("negative-contrast");
        });

        //form
            // Aplicar alto contraste a los elementos del formulario
        const form = document.getElementById('booking-form');
        const inputs = form.querySelectorAll('input, textarea, select, button, label');
            
        inputs.forEach(element => {
            // Aquí se invierte el fondo y el texto
            if (element.style.backgroundColor === 'black') {
                element.style.backgroundColor = '';
                element.style.color = '';
                if (element.tagName === 'BUTTON') {
                    element.style.border = '';
                }
            } else {
                element.style.backgroundColor = 'black';
                element.style.color = 'yellow';
                if (element.tagName === 'BUTTON') {
                    element.style.border = '2px solid white';
                }
            }
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

        /*para el form*/
        // Restablecer los estilos del formulario y sus elementos
        const form = document.getElementById('booking-form');
        const inputs = form.querySelectorAll('input, textarea, select, button, label');
        
        inputs.forEach(element => {
            // Restaurar el fondo y color original
            element.style.backgroundColor = '';
            element.style.color = '';
            element.style.border = ''; // Restablecer el borde de los botones si se ha aplicado

            // Si se ha añadido alguna clase de alto contraste a las imágenes o al formulario, eliminarla
            element.classList.remove('high-contrast');
        });

        // También remover el borde blanco de los botones si existe
        document.querySelectorAll("button").forEach(button => {
            button.style.border = '';
        });
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
