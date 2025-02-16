document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll("video");

    videos.forEach((video) => {
        // Crear contenedor de controles
        const controls = document.createElement("div");
        controls.classList.add("video-controls");

        // Botón Play/Pause
        const playPauseBtn = document.createElement("button");
        playPauseBtn.textContent = "▶️";
        playPauseBtn.addEventListener("click", () => {
            if (video.paused) {
                video.play();
                playPauseBtn.textContent = "⏸️";
            } else {
                video.pause();
                playPauseBtn.textContent = "▶️";
            }
        });

        // Botón de Subtítulos (Reconocimiento de voz)
        const subtitleBtn = document.createElement("button");
        subtitleBtn.textContent = "🔠 Subtítulos OFF";
        let subtitlesEnabled = false; // Estado de los subtítulos

        subtitleBtn.addEventListener("click", () => {
            subtitlesEnabled = !subtitlesEnabled; // Alternar estado
            subtitleDisplay.style.display = subtitlesEnabled ? "block" : "none";
            subtitleBtn.textContent = subtitlesEnabled ? "🔠 Subtítulos ON" : "🔠 Subtítulos OFF";

            if (subtitlesEnabled) {
                recognition.start(); // Iniciar reconocimiento si está activado
            } else {
                recognition.stop(); // Detener reconocimiento si está desactivado
            }
        });

        // Selector de velocidad
        const speedSelect = document.createElement("select");
        [0.5, 1, 1.5, 2].forEach(speed => {
            const option = document.createElement("option");
            option.value = speed;
            option.textContent = `${speed}x`;
            if (speed === 1) option.selected = true;
            speedSelect.appendChild(option);
        });

        speedSelect.addEventListener("change", () => {
            video.playbackRate = parseFloat(speedSelect.value);
        });

        // Contenedor de subtítulos generados
        const subtitleDisplay = document.createElement('div');
        subtitleDisplay.classList.add('subtitles');
        subtitleDisplay.style.position = 'absolute';
        subtitleDisplay.style.top = '1500px';
        subtitleDisplay.style.left = '10px';
        subtitleDisplay.style.color = 'rgb(93, 21, 134)';
        subtitleDisplay.style.fontSize = '20px';
        subtitleDisplay.style.fontWeight = 'bold';
        subtitleDisplay.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
        subtitleDisplay.style.display = "none"; // Inicialmente oculto
        document.body.appendChild(subtitleDisplay);

        // Integrar SpeechRecognition
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'es-ES';

        recognition.onresult = function (event) {
            if (subtitlesEnabled) { // Solo actualizar si están activados
                let transcript = '';
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    transcript += event.results[i][0].transcript;
                }
                subtitleDisplay.textContent = transcript;
            }
        };

        recognition.onerror = function (event) {
            console.error("Error en el reconocimiento de voz:", event.error);
        };

        // Agregar controles al contenedor
        controls.appendChild(playPauseBtn);
        controls.appendChild(subtitleBtn);
        controls.appendChild(speedSelect);

        // Insertar controles después del video
        video.parentNode.insertBefore(controls, video.nextSibling);
    });
});
