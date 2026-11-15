const fondo = document.getElementById("fondo");
const tarjetas = document.querySelectorAll(".tarjeta");
const modal = document.getElementById("modal");
const titulo = document.getElementById("modal-titulo");
const texto = document.getElementById("modal-texto");
let temporizadorFondo;

const cambiarFondo = (escena) => {
    window.clearTimeout(temporizadorFondo);

    const actualizarEscena = () => {
        fondo.className = escena ? "fondo " + escena : "fondo";
        fondo.style.removeProperty("--opacidad-fondo");
    };

    fondo.style.setProperty("--opacidad-fondo", "0.55");
    temporizadorFondo = window.setTimeout(actualizarEscena, 400);
};

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener("mouseenter", () => {
        cambiarFondo(tarjeta.dataset.scene);
    });

    tarjeta.addEventListener("mouseleave", () => {
        cambiarFondo("");
    });

    tarjeta.addEventListener("click", () => {
        if (tarjeta.dataset.link) {
            window.location.href = tarjeta.dataset.link;
            return;
        }

        titulo.textContent = tarjeta.dataset.title;
        texto.textContent = tarjeta.dataset.description;
        modal.style.display = "flex";
    });
});

document.getElementById("cerrar").onclick = () => {
    modal.style.display = "none";
};

document.getElementById("volver").onclick = () => {
    modal.style.display = "none";
};

modal.addEventListener("click", (evento) => {
    if (evento.target === modal) {
        modal.style.display = "none";
    }
});

const pistaCarrusel = document.querySelector(".carrusel-pista");
const fotosCarrusel = document.querySelectorAll(".carrusel-foto");
const puntosCarrusel = document.querySelectorAll(".carrusel-punto");
const carrusel = document.querySelector(".carrusel");
let fotoActual = 0;
let intervaloCarrusel;

const mostrarFoto = (indice) => {
    fotoActual = (indice + fotosCarrusel.length) % fotosCarrusel.length;
    pistaCarrusel.style.transform = `translateX(-${fotoActual * 100}%)`;

    fotosCarrusel.forEach((foto, posicion) => {
        foto.setAttribute("aria-hidden", posicion !== fotoActual);
    });

    puntosCarrusel.forEach((punto, posicion) => {
        const activo = posicion === fotoActual;
        punto.classList.toggle("activo", activo);
        if (activo) {
            punto.setAttribute("aria-current", "true");
        } else {
            punto.removeAttribute("aria-current");
        }
    });
};

document.querySelector(".carrusel-anterior").addEventListener("click", () => {
    mostrarFoto(fotoActual - 1);
});

document.querySelector(".carrusel-siguiente").addEventListener("click", () => {
    mostrarFoto(fotoActual + 1);
});

puntosCarrusel.forEach((punto, indice) => {
    punto.addEventListener("click", () => mostrarFoto(indice));
});

const detenerCarrusel = () => {
    window.clearInterval(intervaloCarrusel);
};

const iniciarCarrusel = () => {
    detenerCarrusel();
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        intervaloCarrusel = window.setInterval(() => {
            mostrarFoto(fotoActual + 1);
        }, 5000);
    }
};

carrusel.addEventListener("mouseenter", detenerCarrusel);
carrusel.addEventListener("mouseleave", iniciarCarrusel);
carrusel.addEventListener("focusin", detenerCarrusel);
carrusel.addEventListener("focusout", (evento) => {
    if (!carrusel.contains(evento.relatedTarget)) {
        iniciarCarrusel();
    }
});
iniciarCarrusel();
