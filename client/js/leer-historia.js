/* =========================================================
   "¿No sabes? Lee su historia"
   Agrega un botón a los juegos ¿Dónde quedó?, Ordena la línea
   del tiempo y Viaje en el tiempo. El botón abre la historia
   del robot en una ventana encima del juego, sin perder el avance.

   Para usarlo, en juegos.html pongan (antes de mascota-nasa.js):
       <script src="js/leer-historia.js"></script>
   Para quitarlo, solo borren esa línea.
   ========================================================= */
(function () {
  const zona = document.getElementById("zona-juegos");
  if (!zona) return;

  // ----- Estilos -----
  document.head.insertAdjacentHTML("beforeend", `<style>
    .btn-leer { display: inline-flex; align-items: center; gap: 8px; }
    .btn-leer svg { width: 22px; height: 22px; }
    .ayuda-leer { display: flex; justify-content: center; margin-top: 4px; }
    .vh { position: fixed; inset: 0; z-index: 9999; display: flex; align-items: center; justify-content: center;
      padding: 16px; background: rgba(3,6,15,.7); backdrop-filter: blur(3px); }
    .vh .hoja { position: relative; width: 760px; max-width: 100%; max-height: 90vh; overflow-y: auto;
      background: #101c30; color: #fff; border: 1px solid #55b9fa; border-radius: 16px; padding: 28px 30px;
      box-shadow: 0 0 50px rgba(85,185,250,.25); }
    .vh .etiqueta { color: #55b9fa; letter-spacing: 3px; font-size: 14px; text-transform: uppercase; margin: 0 0 8px; }
    .vh h3 { font-size: 30px; line-height: 1.15; margin: 0 50px 6px 0; }
    .vh .meta { color: #c1cede; margin: 0 0 18px; }
    .vh p.parrafo { font-size: 19px; line-height: 1.65; color: #e6edf7; margin: 0 0 14px; }
    .vh .cerrar-h { position: absolute; top: 14px; right: 14px; width: 44px; height: 44px; border-radius: 50%;
      border: 1px solid #55b9fa; background: transparent; color: #fff; font-size: 22px; cursor: pointer; }
    .vh .lista-h { display: flex; flex-direction: column; gap: 10px; margin-top: 10px; }
    .vh .lista-h button { text-align: left; justify-content: flex-start; width: 100%; min-height: 56px;
      padding: 0 20px; border-radius: 14px; gap: 12px; font-size: 19px; }
    .vh .lista-h button svg, .btn-leer svg { width: 22px !important; height: 22px !important; flex-shrink: 0; }
    .vh .lista-h button::after { display: none; }
    .vh .volver-juego { margin-top: 10px; width: 100%; }
  </style>`);

  const LIBRO = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v14c-3-1-6-1-9 1-3-2-6-2-9-1z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><path d="M12 6v14" stroke="currentColor" stroke-width="2.5"/></svg>`;

  // ----- Cargar historias.js si esta página no lo tiene -----
  function conHistorias(listo) {
    if (typeof HISTORIAS !== "undefined") return listo();
    const sc = document.createElement("script");
    sc.src = "js/historias.js";
    sc.onload = listo; sc.onerror = () => listo();
    document.head.appendChild(sc);
  }

  // ----- Encontrar la historia de un robot por su nombre -----
  const limpio = t => (t || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " ").trim();
  function buscarHistoria(nombre) {
    if (typeof HISTORIAS === "undefined") return null;
    const n = limpio(nombre);
    const robot = (typeof EXPLORADORES !== "undefined") ? EXPLORADORES.find(e => limpio(e.nombre) === n) : null;
    return HISTORIAS.find(h => robot && h.id === robot.id)
        || HISTORIAS.find(h => limpio(h.mision) === n)
        || HISTORIAS.find(h => limpio(h.mision).includes(n) || n.includes(limpio(h.mision)))
        || HISTORIAS.find(h => limpio(h.titulo).includes(n))
        || null;
  }

  // ----- Ventana -----
  function ventana(html) {
    const v = document.createElement("div");
    v.className = "vh";
    v.setAttribute("role", "dialog");
    v.setAttribute("aria-modal", "true");
    v.innerHTML = `<article class="hoja"><button class="cerrar-h" aria-label="Cerrar">✕</button>${html}
      <button class="gomita menta volver-juego">← Volver al juego</button></article>`;
    document.body.appendChild(v);
    const cerrar = () => { try { callar(); } catch (e) {} v.remove(); document.removeEventListener("keydown", esc); };
    const esc = e => { if (e.key === "Escape") cerrar(); };
    v.querySelector(".cerrar-h").onclick = cerrar;
    v.querySelector(".volver-juego").onclick = cerrar;
    v.onclick = e => { if (e.target === v) cerrar(); };
    document.addEventListener("keydown", esc);
    v.querySelector(".volver-juego").focus();
    return { v, cerrar };
  }

  function mostrarHistoria(nombre) {
    conHistorias(() => {
      const h = buscarHistoria(nombre);
      ventana(h
        ? `<p class="etiqueta">${h.mision}</p><h3>${h.titulo}</h3><p class="meta">${h.anio}</p>
           ${h.parrafos.map(t => `<p class="parrafo">${t}</p>`).join("")}`
        : `<p class="etiqueta">${nombre}</p><h3>${nombre}</h3><p class="parrafo">Todavía no hay historia para esta misión.</p>`);
    });
  }

  // Para "Ordena": elegir de cuál robot leer
  function elegirHistoria(nombres) {
    const { v, cerrar } = ventana(`
      <p class="etiqueta">Pista para ordenar</p>
      <h3>¿De quién quieres leer?</h3>
      <p class="meta">Busca el año de cada misión en su historia.</p>
      <div class="lista-h">${nombres.map(n => `<button class="gomita azul" data-n="${n}">${LIBRO}${n}</button>`).join("")}</div>`);
    v.querySelectorAll("[data-n]").forEach(b => b.onclick = () => { cerrar(); mostrarHistoria(b.dataset.n); });
  }

  const boton = () => {
    const b = document.createElement("button");
    b.className = "gomita azul btn-leer";
    b.innerHTML = `${LIBRO}¿No sabes? Lee su historia`;
    return b;
  };

  // ----- Agregar el botón cada vez que cambia la pantalla del juego -----
  function agregar() {
    if (zona.querySelector(".btn-leer")) return;

    // ¿Dónde quedó?
    const robotDonde = zona.querySelector(".robot-actual h3");
    const destinos = zona.querySelector(".destinos");
    if (robotDonde && destinos) {
      const c = document.createElement("div"); c.className = "ayuda-leer";
      const b = boton(); b.onclick = () => mostrarHistoria(robotDonde.textContent);
      c.appendChild(b); destinos.after(c); return;
    }

    // Viaje en el tiempo
    const robotViaje = zona.querySelector(".mision strong");
    const pistaViaje = document.getElementById("pista-viaje");
    if (robotViaje && pistaViaje) {
      const b = boton(); b.onclick = () => mostrarHistoria(robotViaje.textContent);
      pistaViaje.after(b); return;
    }

    // Ordena la línea del tiempo
    const huecos = zona.querySelectorAll(".linea-tiempo .hueco");
    const pistaOrden = document.getElementById("pista");
    if (huecos.length && pistaOrden) {
      const b = boton();
      b.innerHTML = `${LIBRO}¿No sabes? Lee sus historias`;
      b.onclick = () => {
        const nombres = [...zona.querySelectorAll(".ficha-robot, .hueco.lleno")]
          .map(x => x.textContent.replace(/\d{4}/, "").trim()).filter(Boolean);
        elegirHistoria([...new Set(nombres)]);
      };
      pistaOrden.after(b);
    }
  }

  conHistorias(() => {});            // precargar
  new MutationObserver(agregar).observe(zona, { childList: true, subtree: true });
  agregar();
})();
