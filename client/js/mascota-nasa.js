const rutaMascota = new URL("../../mascota/", document.currentScript.src);

document.addEventListener("DOMContentLoaded", () => {
    // 1. SALUDOS INICIALES
    const saludosNasa = [
        {
            tipo: "saludo",
            texto: "¡Hola, terrícola! Haz clic en mí para descubrir artefactos olvidados y secretos ocultos de la NASA."
        },
        {
            tipo: "saludo",
            texto: "¡Saludos, comandante! 🚀 ¿Listo para explorar la historia espacial más extraña?"
        },
        {
            tipo: "saludo",
            texto: "¡Guau! 🐾 Bienvenido al archivo secreto de los artefactos perdidos de la NASA. ¡Haz clic para investigar!"
        },
        {
            tipo: "saludo",
            texto: "¡Atención en la base! 🛰️ Hay mucha chatarra espacial y tecnología olvidada por descubrir por aquí."
        },
        {
            tipo: "saludo",
            texto: "¡Hola de nuevo! 🔭 Cada clic en mi traje espacial revelará una nueva curiosidad de la carrera espacial."
        },
        {
            tipo: "saludo",
            texto: "¡Misión en marcha! 🌟 Sigue haciendo clic para ver qué otros secretos te tengo preparados."
        }
    ];

    // 2. DATOS DE ARTEFACTOS Y DATOS DE LA NASA
    // tipos: 'saludo' | 'curioso' | 'serio' | 'nerd'
    const datosNasa = [
        ...saludosNasa,
        {
            tipo: "curioso",
            texto: "🥪 En 1965, John Young metió de contrabando un sándwich de carne en la nave Gemini 3. ¡Las migas flotando casi arruinan los instrumentos!"
        },
        {
            tipo: "nerd",
            texto: "💻 Las computadoras de guía del Apolo (AGC) que llevaron al hombre a la Luna tenían menos potencia de procesamiento que un reloj inteligente actual o una calculadora científica básica."
        },
        {
            tipo: "serio",
            texto: "📼 Las cintas originales de telemetría del alunizaje del Apolo 11 fueron borradas y reutilizadas por la NASA en los años 80 para ahorrar costos."
        },
        {
            tipo: "nerd",
            texto: "💾 El código fuente del software de navegación del Apolo fue escrito a mano por ingenieras como Margaret Hamilton y 'tejido' en núcleos de memoria magnética por tejedoras de textiles."
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
            tipo: "nerd",
            texto: "📡 El satélite ECHO 1 (1960) era básicamente un enorme globo metalizado gigante que servía como espejo en el espacio para rebote de señales de radio antes de los satélites modernos."
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

    // Las imágenes están en la carpeta mascota, al nivel raíz del proyecto.
    const imagenes = {
        saludo: new URL("perro-saludo.png", rutaMascota).href,
        curioso: new URL("perro-curioso.png", rutaMascota).href,
        serio: new URL("perro-serio.png", rutaMascota).href,
        nerd: new URL("perro-nerd.png", rutaMascota).href
    };

    const saludoInicial = saludosNasa[Math.floor(Math.random() * saludosNasa.length)];
    let indiceActual = datosNasa.indexOf(saludoInicial);
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
            opacity: 1;
            transform: translateY(0);
            visibility: visible;
            transition: opacity 0.3s ease, transform 0.3s ease, visibility 0s;
        }

        #nasa-speech-bubble.oculto {
            opacity: 0;
            transform: translateY(8px);
            visibility: hidden;
            pointer-events: none;
            transition: opacity 0.3s ease, transform 0.3s ease, visibility 0s linear 0.3s;
        }

        /* Estilo distinto cuando el dato es SERIO */
        #nasa-speech-bubble.modo-serio {
            background: #161b22;
            color: #f0f6fc;
            border-color: #fc3d21; /* Rojo NASA */
        }

        #nasa-speech-bubble.modo-nerd {
            background: #0f172a;
            color: #38bdf8;
            border-color: #38bdf8;
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
        #nasa-speech-bubble.modo-nerd::after {
            border-color: #38bdf8 transparent transparent transparent;
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
        #nasa-speech-bubble.modo-nerd #nasa-badge {
            background: #38bdf8;
            color: #0f172a;
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
            transition: background 0.2s, transform 0.2s, width 0.2s;
        }

        #nasa-toggle-btn:hover {
            background: #fc3d21;
        }

        #nasa-toggle-btn:focus-visible {
            outline: 3px solid #55b9fa;
            outline-offset: 3px;
        }

        /* Estado escondido */
        #nasa-mascot-widget.escondido #nasa-mascot-img {
            display: none;
        }

        #nasa-mascot-widget.escondido #nasa-toggle-btn {
            position: relative;
            width: 56px;
            height: 56px;
            padding: 0;
            border-radius: 50%;
            background: #0b3d91;
            box-shadow: 0 4px 10px rgba(0,0,0,0.25);
            font-size: 0;
            transition: background 0.2s, transform 0.2s;
        }

        #nasa-mascot-widget.escondido #nasa-toggle-btn::before {
            content: "";
            position: absolute;
            width: 26px;
            height: 24px;
            left: 50%;
            bottom: 6px;
            border-radius: 50% 50% 45% 45%;
            border: 3px solid #55b9fa;
            box-sizing: border-box;
            transform: translateX(-50%) rotate(-8deg);
        }

        #nasa-mascot-widget.escondido #nasa-toggle-btn::after {
            content: "";
            position: absolute;
            top: 7px;
            left: 50%;
            width: 42px;
            height: 24px;
            transform: translateX(-50%);
            background:
                radial-gradient(ellipse 4.5px 5.5px at 4px 18px, transparent 48%, #55b9fa 62%, #55b9fa 100%, transparent 112%),
                radial-gradient(ellipse 4.5px 5.5px at 13px 7px, transparent 48%, #55b9fa 62%, #55b9fa 100%, transparent 112%),
                radial-gradient(ellipse 4.5px 5.5px at 29px 7px, transparent 48%, #55b9fa 62%, #55b9fa 100%, transparent 112%),
                radial-gradient(ellipse 4.5px 5.5px at 38px 18px, transparent 48%, #55b9fa 62%, #55b9fa 100%, transparent 112%);
        }

        #nasa-mascot-widget.escondido #nasa-toggle-btn:hover {
            background: #1556ad;
            transform: scale(1.08);
        }
    `;
    document.head.appendChild(estilos);

    // 3. CREAR LA ESTRUCTURA HTML DE LA MASCOTA
    const widget = document.createElement("div");
    widget.id = "nasa-mascot-widget";
    widget.innerHTML = `
        <div id="nasa-speech-bubble" class="oculto">
            <span id="nasa-badge">Base Espacial</span>
            <div id="nasa-fact-text">${saludoInicial.texto}</div>
            <small style="display:block; margin-top:8px; opacity:0.65; font-size:11px;">(Haz clic en mí para ver otro)</small>
        </div>
        <div id="nasa-mascot-controls">
            <button id="nasa-toggle-btn" type="button" aria-label="Esconder mascota" title="Esconder mascota">Esconder</button>
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
    let temporizadorGlobo;
    let temporizadorAparicion;

    function ocultarGlobo() {
        window.clearTimeout(temporizadorGlobo);
        globo.classList.add("oculto");
    }

    function mostrarGlobo() {
        if (estaEscondido) {
            return;
        }

        window.clearTimeout(temporizadorGlobo);
        globo.classList.remove("oculto");
        temporizadorGlobo = window.setTimeout(ocultarGlobo, 10000);
        programarAparicionAutomatica();
    }

    function programarAparicionAutomatica() {
        window.clearTimeout(temporizadorAparicion);
        if (!estaEscondido) {
            temporizadorAparicion = window.setTimeout(mostrarGlobo, 30000);
        }
    }

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

            // Cambiar imagen y colores según el tipo de dato.
            globo.classList.remove("modo-serio", "modo-nerd");

            if (datoSeleccionado.tipo === "serio") {
                imgMascota.src = imagenes.serio;
                globo.classList.add("modo-serio");
                badge.textContent = "⚠️ Archivo Histórico / Serio";
            } else if (datoSeleccionado.tipo === "nerd") {
                imgMascota.src = imagenes.nerd;
                globo.classList.add("modo-nerd");
                badge.textContent = "🤓 Dato Técnico / Ingeniería";
            } else if (datoSeleccionado.tipo === "saludo") {
                imgMascota.src = imagenes.saludo;
                badge.textContent = "Base Espacial";
            } else {
                imgMascota.src = imagenes.curioso;
                badge.textContent = "✨ Dato Curioso";
            }

            globo.style.opacity = "1";
            globo.style.transform = "translateY(0)";
            mostrarGlobo();
        }, 180);
    });

    // Función para esconder o mostrar
    function alternarVisibilidad() {
        estaEscondido = !estaEscondido;
        if (estaEscondido) {
            widget.classList.add("escondido");
            btnToggle.textContent = "Mostrar";
            btnToggle.setAttribute("aria-label", "Mostrar mascota");
            btnToggle.title = "Mostrar mascota";
            window.clearTimeout(temporizadorAparicion);
            ocultarGlobo();
        } else {
            widget.classList.remove("escondido");
            btnToggle.textContent = "Esconder";
            btnToggle.setAttribute("aria-label", "Esconder mascota");
            btnToggle.title = "Esconder mascota";
            const nuevoSaludo = saludosNasa[Math.floor(Math.random() * saludosNasa.length)];
            indiceActual = datosNasa.indexOf(nuevoSaludo);
            globo.classList.remove("modo-serio", "modo-nerd");
            badge.textContent = "Base Espacial";
            textoDato.textContent = nuevoSaludo.texto;
            imgMascota.src = imagenes.saludo;
            mostrarGlobo();
        }
    }

    btnToggle.addEventListener("click", alternarVisibilidad);
    document.addEventListener("click", (evento) => {
        const boton = evento.target.closest("button");
        if (boton && boton !== btnToggle && !estaEscondido) {
            mostrarGlobo();
        }
    });

    programarAparicionAutomatica();
});