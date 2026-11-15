const listaHistorias = document.getElementById("lista-historias");
const lecturaHistoria = document.getElementById("lectura-historia");
const parametros = new URLSearchParams(window.location.search);

function asignarFondo(destino) {
  const fondo = document.getElementById("fondo");
  if (!fondo) return;
  fondo.className = destino === "luna" || destino === "marte"
    ? `fondo ${destino}`
    : "fondo";
}

function crearEnlaceHistoria(historia) {
  const enlace = document.createElement("a");
  enlace.className = `tarjeta historia-tarjeta tarjeta-${historia.destino}`;
  enlace.href = `historia.html?id=${encodeURIComponent(historia.id)}`;
  enlace.dataset.historia = historia.id;

  const mision = document.createElement("span");
  mision.className = "historia-etiqueta";
  mision.textContent = `${historia.mision} · ${historia.anio}`;

  const titulo = document.createElement("p");
  titulo.className = "card-title";
  titulo.textContent = historia.titulo;

  const leer = document.createElement("span");
  leer.className = "small-desc historia-leer";
  leer.textContent = "Leer historia →";

  const esquina = document.createElement("span");
  esquina.className = "go-corner";
  esquina.setAttribute("aria-hidden", "true");
  const flecha = document.createElement("span");
  flecha.className = "go-arrow";
  flecha.textContent = "→";
  esquina.appendChild(flecha);

  enlace.append(mision, titulo, leer, esquina);
  return enlace;
}

if (listaHistorias) {
  const destino = DESTINOS_HISTORIAS.find(item => item.id === parametros.get("destino"));
  const titulo = document.getElementById("titulo-destino");
  const descripcion = document.getElementById("descripcion-destino");
  const contenido = document.getElementById("contenido-destino");

  asignarFondo(destino && destino.id);

  if (!destino) {
    titulo.textContent = "No encontramos este destino";
    descripcion.textContent = "Vuelve a la página principal para elegir una sección.";
    const volver = document.createElement("a");
    volver.className = "tarjeta historia-tarjeta tarjeta-lejos";
    volver.href = "index.html#objetos";
    const textoVolver = document.createElement("p");
    textoVolver.className = "card-title";
    textoVolver.textContent = "Volver a destinos →";
    volver.appendChild(textoVolver);
    contenido.appendChild(volver);
  } else {
    titulo.textContent = destino.nombre;
    descripcion.textContent = destino.descripcion;
    HISTORIAS.filter(historia => historia.destino === destino.id)
      .forEach(historia => contenido.appendChild(crearEnlaceHistoria(historia)));
  }
}

if (lecturaHistoria) {
  const historia = HISTORIAS.find(item => item.id === parametros.get("id"));
  const contenido = document.getElementById("contenido-historia");
  const enlaceVolver = document.getElementById("volver-historias");

  asignarFondo(historia && historia.destino);

  if (!historia) {
    document.getElementById("mision-historia").textContent = "NASA Archive";
    document.getElementById("titulo-historia").textContent = "No encontramos esta historia";
    document.getElementById("anio-historia").textContent = "Elige un destino para explorar los relatos.";
    enlaceVolver.href = "index.html#objetos";
    enlaceVolver.textContent = "Volver al inicio";
  } else {
    const destino = DESTINOS_HISTORIAS.find(item => item.id === historia.destino);
    enlaceVolver.href = `historias.html?destino=${encodeURIComponent(historia.destino)}`;
    enlaceVolver.textContent = `Volver a ${destino.nombre}`;
    document.getElementById("mision-historia").textContent = historia.mision;
    document.getElementById("titulo-historia").textContent = historia.titulo;
    document.getElementById("anio-historia").textContent = `${destino.nombre} · ${historia.anio}`;

    historia.parrafos.forEach(texto => {
      const parrafo = document.createElement("p");
      parrafo.textContent = texto;
      contenido.appendChild(parrafo);
    });
  }
}
