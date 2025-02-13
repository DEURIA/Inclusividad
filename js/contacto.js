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

document.getElementById('booking-form').addEventListener('submit', function(event) {
  let hasError = false;

  // Limpiar mensajes de error previos
  document.querySelectorAll('.error-message').forEach(function(element) {
    element.textContent = '';
  });

  // Validar la fecha (debe ser posterior a la fecha actual)
  const dateInput = document.getElementById('date');
  const selectedDate = new Date(dateInput.value);
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  if (selectedDate <= currentDate) {
    document.getElementById('date-description').textContent = 'La fecha seleccionada debe ser posterior a la fecha actual.';
    hasError = true;
  }

  // Validar la hora (debe estar entre las 7:00 AM y las 5:00 PM)
  const timeInput = document.getElementById('time');
  const selectedTime = timeInput.value;
  const selectedHour = parseInt(selectedTime.split(':')[0], 10);

  if (selectedHour < 7 || selectedHour > 17) {
    document.getElementById('time-description').textContent = 'La hora debe estar entre las 7:00 AM y las 5:00 PM.';
    hasError = true;
  }


  // Si hay errores, prevenir el envío del formulario
  if (hasError) {
    event.preventDefault();
  }
});
