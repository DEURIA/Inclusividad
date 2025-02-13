document.getElementById("booking-form").addEventListener("submit", function(event) {
    let valid = true;
    const inputs = document.querySelectorAll("input[required], select[required]");
    
    inputs.forEach(function(input) {
      if (!input.value) {
        let errorMessage = "Este campo es obligatorio: " + input.previousElementSibling.innerText;
        document.getElementById(input.id + "-description").innerText = errorMessage;
        valid = false;
      } else {
        document.getElementById(input.id + "-description").innerText = "";
      }
    });

    if (!valid) {
      event.preventDefault();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        
        document.querySelector("button[type='submit']").click();
    }
});

