document.addEventListener("DOMContentLoaded", () => {
    // 1. BASE DE DATOS DE ARTEFACTOS OLVIDADOS DE LA NASA
    // tipo: 'curioso' | 'serio' | 'tecnico'
    const datosNasa = [
        {
            tipo: "curioso",
            texto: "¡Hola! Haz clic en mí para descubrir artefactos olvidados y secretos de la NASA."
        },
        {
            tipo: "curioso",
            texto: "🥪 En 1965, John Young metió de contrabando un sándwich de carne en la nave Gemini 3. ¡Las migas flotando casi arruinan los instrumentos!"
        },
        {
            tipo: "serio",
            texto: "📼 Las cintas originales de telemetría del alunizaje del Apolo 11 fueron borradas y reutilizadas por la NASA en los años 80 para ahorrar costos."
        },
        {
            tipo: "curioso",
            texto: "⛳ Alan Shepard jugó golf en la Luna en 1971 con un palo improvisado. Dejó dos pelotas allá arriba que siguen intactas."
        },
        {
            tipo: "serio",
            texto: "⌚ El reloj Omega Speedmaster de Buzz Aldrin, el primero en pisar la Luna, fue robado mientras era enviado al Instituto Smithsoniano y nunca apareció."
        },
        {
            tipo: "serio",
            texto: "🛰️ El satélite Vanguard 1 (1958) es el artefacto humano más antiguo aún en órbita. Lleva décadas en silencio, convertido en basura espacial histórica."
        },
        {
            tipo: "curioso",
            texto: "💩 Los astronautas del Apolo dejaron 96 bolsas con desechos humanos en la Luna para aligerar el peso de la nave al despegar."
        }
    ];

    // Mapeo de imágenes según el tipo de dato (Asegúrate de que las rutas coincidan con tus archivos)
    const imagenes = {
        saludo: "../mascota/perro-saludo.png",
        curioso: "../mascota/perro-curioso.png",
        serio: "../mascota/perro-serio.png"
    };

    let indiceActual = 0;
    let estaEscondido = false;

    // 2. INYECTAR ESTILOS CSS AUTOMÁTICAMENTE
    const estilos = document.createElement("style");
    estilos.innerHTML = `
        #nasa-mascot-widget {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 99999;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            transition: transform 0.3s ease;
        }

        /* Globo de diálogo */
        #nasa-speech-bubble {
            background: #ffffff;
            color: #1a1a2e;
            border: 2px solid #0b3d91; /* Azul NASA */
            border-radius: 16px;
            padding: 14px 18px;
            max-width: 270px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
            margin-bottom: 12px;
            position: relative;
            font-size: 14px;
            line-height: 1.4;
            transition: opacity 0.25s ease, transform 0.25s ease;
        }

        /* Estilo distinto cuando el dato es SERIO */
        #nasa-speech-bubble.modo-serio {
            background: #161b22;
            color: #f0f6fc;
            border-color: #fc3d21; /* Rojo NASA */
        }

        /* Triangulito del globo */
        #nasa-speech-bubble::after {
            content: '';
            position: absolute;
            bottom: -10px;
            right: 45px;
            border-width: 10px 10px 0;
            border-style: solid;
            border-color: #0b3d91 transparent transparent transparent;
        }
        #nasa-speech-bubble.modo-serio::after {
            border-color: #fc3d21 transparent transparent transparent;
        }

        /* Etiqueta de categoría */
        #nasa-badge {
            display: inline-block;
            font-size: 10px;
            font-weight: bold;
            text-transform: uppercase;
            padding: 2px 6px;
            border-radius: 4px;
            margin-bottom: 6px;
            background: #0b3d91;
            color: white;
        }
        #nasa-speech-bubble.modo-serio #nasa-badge {
            background: #fc3d21;
        }

        /* Contenedor del perrito y botón de ocultar */
        #nasa-mascot-controls {
            display: flex;
            align-items: flex-end;
            gap: 8px;
        }

        #nasa-mascot-img {
            width: 115px;
            height: auto;
            cursor: pointer;
            filter: drop-shadow(0 5px 10px rgba(0,0,0,0.3));
            transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            user-select: none;
        }

        #nasa-mascot-img:hover {
            transform: scale(1.08) rotate(-2deg);
        }

        #nasa-mascot-img:active {
            transform: scale(0.95);
        }

        /* Botón para esconder/mostrar */
        #nasa-toggle-btn {
            background: #0b3d91;
            color: white;
            border: none;
            border-radius: 20px;
            padding: 6px 12px;
            font-size: 12px;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            transition: background 0.2s;
        }

        #nasa-toggle-btn:hover {
            background: #fc3d21;
        }

        /* Estado escondido */
        #nasa-mascot-widget.escondido #nasa-speech-bubble {
            display: none;
        }
        #nasa-mascot-widget.escondido #nasa-mascot-img {
            width: 55px;
            opacity: 0.85;
        }
    `;
    document.head.appendChild(estilos);

    // 3. CREAR LA ESTRUCTURA HTML DE LA MASCOTA
    const widget = document.createElement("div");
    widget.id = "nasa-mascot-widget";
    widget.innerHTML = `
        <div id="nasa-speech-bubble">
            <span id="nasa-badge">Dato Curioso</span>
            <div id="nasa-fact-text">${datosNasa[0].texto}</div>
            <small style="display:block; margin-top:8px; opacity:0.65; font-size:11px;">(Haz clic en mí para ver otro)</small>
        </div>
        <div id="nasa-mascot-controls">
            <button id="nasa-toggle-btn" title="Esconder o mostrar mascota">Esconder</button>
            <img id="nasa-mascot-img" src="${imagenes.saludo}" alt="Mascota Astronauta NASA" title="¡Haz clic para otro dato!">
        </div>
    `;
    document.body.appendChild(widget);

    // 4. LÓGICA DE INTERACCIÓN
    const imgMascota = document.getElementById("nasa-mascot-img");
    const globo = document.getElementById("nasa-speech-bubble");
    const textoDato = document.getElementById("nasa-fact-text");
    const badge = document.getElementById("nasa-badge");
    const btnToggle = document.getElementById("nasa-toggle-btn");

    // Cambiar de dato al hacer clic en el perrito
    imgMascota.addEventListener("click", () => {
        // Si estaba escondido, al hacerle clic vuelve a aparecer
        if (estaEscondido) {
            alternarVisibilidad();
            return;
        }

        // Elegir un dato aleatorio distinto al actual
        let nuevoIndice;
        do {
            nuevoIndice = Math.floor(Math.random() * datosNasa.length);
        } while (nuevoIndice === indiceActual && datosNasa.length > 1);

        indiceActual = nuevoIndice;
        const datoSeleccionado = datosNasa[indiceActual];

        // Efecto suave de transición
        globo.style.opacity = "0";
        globo.style.transform = "translateY(5px)";

        setTimeout(() => {
            textoDato.textContent = datoSeleccionado.texto;

            // Cambiar imagen y colores según si es SERIO o CURIOSO
            if (datoSeleccionado.tipo === "serio") {
                imgMascota.src = imagenes.serio;
                globo.classList.add("modo-serio");
                badge.textContent = "⚠️ Archivo Histórico / Serio";
            } else {
                imgMascota.src = imagenes.curioso;
                globo.classList.remove("modo-serio");
                badge.textContent = "✨ Dato Curioso";
            }

            globo.style.opacity = "1";
            globo.style.transform = "translateY(0)";
        }, 180);
    });

    // Función para esconder o mostrar
    function alternarVisibilidad() {
        estaEscondido = !estaEscondido;
        if (estaEscondido) {
            widget.classList.add("escondido");
            btnToggle.textContent = "Mostrar";
            imgMascota.src = imagenes.saludo; // Se pone saludando en pequeñito
        } else {
            widget.classList.remove("escondido");
            btnToggle.textContent = "Esconder";
            // Restaura la imagen correspondiente al dato actual
            const tipoActual = datosNasa[indiceActual].tipo;
            imgMascota.src = tipoActual === "serio" ? imagenes.serio : imagenes.curioso;
        }
    }

    btnToggle.addEventListener("click", alternarVisibilidad);
});