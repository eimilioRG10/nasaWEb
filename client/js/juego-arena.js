/* =========================================================
   JUEGO 4: "Excava la foto"
   Una foto real de la NASA está tapada con arena lunar.
   El niño mueve el mouse (o el dedo) para descubrirla
   y adivina de qué misión es.

   Para usarlo, en juegos.html pongan esta línea DESPUÉS
   del <script> grande de los juegos:
       <script src="js/juego-arena.js"></script>

   Para agregar más fotos, copien un bloque de FOTOS_ARENA.
   - archivo: nombre de la imagen dentro de imagenes/historias/
   - mision: la respuesta correcta
   - historia: el id de su historia (historia.html?id=...)
   - pista y dato: textos cortos para niños
   ========================================================= */

const FOTOS_ARENA = [
  {
    archivo: "apollo11.jpg",
    mision: "Apolo 11",
    historia: "eagle",
    pista: "Fue la primera vez que personas caminaron en la Luna.",
    dato: "En 1969, Neil Armstrong y Buzz Aldrin bajaron del módulo Eagle al Mar de la Tranquilidad."
  },
  {
    archivo: "apollo12.jpg",
    mision: "Apolo 12",
    historia: "intrepid",
    pista: "Estos astronautas visitaron a un robot que llevaba dos años solito en la Luna.",
    dato: "En 1969, los astronautas del Apolo 12 caminaron hasta la sonda Surveyor 3 y se llevaron su cámara a la Tierra."
  },
  {
    archivo: "spirit-opportunity.jpg",
    mision: "Spirit y Opportunity",
    historia: "spirit-opportunity",
    pista: "Eran dos robots gemelos que llegaron a Marte en 2004.",
    dato: "Los gemelos encontraron pistas de que en Marte hubo agua hace muchísimo tiempo."
  },
  {
    archivo: "dawn.jpg",
    mision: "Dawn",
    historia: "dawn",
    pista: "Esta nave visitó dos mundos del cinturón de asteroides.",
    dato: "Dawn estudió el asteroide Vesta y el planeta enano Ceres."
  }
  /* Ejemplo para agregar otra:
  ,{
    archivo: "kepler.jpg",
    mision: "Kepler",
    historia: "kepler",
    pista: "Era un telescopio que buscaba planetas en otras estrellas.",
    dato: "Kepler encontró miles de planetas fuera de nuestro sistema solar."
  }
  */
];

(function () {
  // ----- Estilos del juego (se agregan solos) -----
  document.head.insertAdjacentHTML("beforeend", `<style>
    .arte-arena { background:
        radial-gradient(circle at 62% 48%, #1a1f2e 0 36px, transparent 37px),
        repeating-linear-gradient(170deg, rgba(120,104,80,.35) 0 3px, transparent 3px 14px),
        linear-gradient(160deg, #cbbfa6, #a8987b) !important; position: relative; }
    .arte-arena .brocha { position: absolute; left: 66%; top: 34%; font-size: 0; width: 46px; height: 46px; }
    .excavacion { position: relative; width: 100%; max-width: 620px; margin: 0 auto; border-radius: 14px;
      overflow: hidden; border: 2px solid #ffffff30; background: #0b1220; user-select: none; }
    .excavacion img { display: block; width: 100%; height: auto; }
    .excavacion canvas { position: absolute; inset: 0; width: 100%; height: 100%; cursor: none; touch-action: none;
      transition: opacity .8s; }
    .excavacion canvas.limpia { opacity: 0; pointer-events: none; }
    .excavacion .pala { position: absolute; width: 56px; height: 56px; margin: -28px 0 0 -28px; border-radius: 50%;
      border: 3px dashed #FFD166; pointer-events: none; display: none; }
    #zona-juegos button { position: relative; z-index: 100000; }
    .medidor { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; font-size: 18px; font-weight: 600; }
    .medidor .barra-progreso { flex: 1; min-width: 140px; }
    .opciones-arena { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 12px; }
    .opciones-arena .destino { font-size: 20px; min-height: 64px; }
    .estrellas-ganadas { font-size: 30px; letter-spacing: 4px; text-align: center; min-height: 40px; }
    .leer-historia { color: #8bd5ff; font-weight: 700; font-size: 18px; text-align: center; }
    .ventana-historia { position: fixed; inset: 0; z-index: 9999; display: flex; align-items: center; justify-content: center;
      padding: 16px; background: rgba(3,6,15,.7); backdrop-filter: blur(3px); }
    .ventana-historia .hoja { position: relative; width: 760px; max-width: 100%; max-height: 90vh; overflow-y: auto;
      background: #101c30; color: #fff; border: 1px solid #55b9fa; border-radius: 16px; padding: 28px 30px;
      box-shadow: 0 0 50px rgba(85,185,250,.25); }
    .ventana-historia .etiqueta { color: #55b9fa; letter-spacing: 3px; font-size: 14px; text-transform: uppercase; margin: 0 0 8px; }
    .ventana-historia h3 { font-size: 30px; line-height: 1.15; margin: 0 50px 6px 0; }
    .ventana-historia .meta { color: #c1cede; margin: 0 0 18px; }
    .ventana-historia p.parrafo { font-size: 19px; line-height: 1.65; color: #e6edf7; margin: 0 0 14px; }
    .ventana-historia .cerrar-h { position: absolute; top: 14px; right: 14px; width: 44px; height: 44px; border-radius: 50%;
      border: 1px solid #55b9fa; background: transparent; color: #fff; font-size: 22px; cursor: pointer; }
    .ventana-historia .volver-juego { margin-top: 10px; width: 100%; }
  </style>`);

  // Cargar las historias del equipo (js/historias.js) si esta página no las tiene
  function conHistorias(listo) {
    if (typeof HISTORIAS !== "undefined") return listo();
    const sc = document.createElement("script");
    sc.src = "js/historias.js";
    sc.onload = listo;
    sc.onerror = () => listo();
    document.head.appendChild(sc);
  }

  // Mostrar la historia en una ventana encima del juego
  function abrirHistoria(id, mision) {
    conHistorias(() => {
      const h = (typeof HISTORIAS !== "undefined") ? HISTORIAS.find(x => x.id === id) : null;
      const v = document.createElement("div");
      v.className = "ventana-historia";
      v.setAttribute("role", "dialog");
      v.setAttribute("aria-modal", "true");
      v.innerHTML = `
        <article class="hoja">
          <button class="cerrar-h" aria-label="Cerrar">✕</button>
          <p class="etiqueta">${h ? h.mision : mision}</p>
          <h3>${h ? h.titulo : mision}</h3>
          ${h ? `<p class="meta">${h.anio}</p>` : ""}
          ${h ? h.parrafos.map(t => `<p class="parrafo">${t}</p>`).join("")
              : `<p class="parrafo">Todavía no hay historia para esta misión.</p>`}
          <button class="gomita menta volver-juego">← Volver al juego</button>
        </article>`;
      document.body.appendChild(v);
      const cerrar = () => { callar(); v.remove(); document.removeEventListener("keydown", esc); };
      const esc = e => { if (e.key === "Escape") cerrar(); };
      v.querySelector(".cerrar-h").onclick = cerrar;
      v.querySelector(".volver-juego").onclick = cerrar;
      v.onclick = e => { if (e.target === v) cerrar(); };
      document.addEventListener("keydown", esc);
      v.querySelector(".volver-juego").focus();
    });
  }

  // Íconos de estrella (texto, para no depender de otros archivos)
  const estrellasTexto = n => "★".repeat(n) + "☆".repeat(3 - n);

  // ----- Agregar la ficha a la lista de juegos -----
  const listaOriginal = verListaJuegos;
  verListaJuegos = function () {
    listaOriginal();
    const lista = document.querySelector(".lista-juegos");
    if (!lista) return;
    lista.insertAdjacentHTML("beforeend", `
      <article class="tarjeta-juego">
        <div class="arte arte-arena">
          <svg class="brocha" viewBox="0 0 48 48" aria-hidden="true" style="width:46px;height:46px">
            <rect x="21" y="4" width="6" height="24" rx="3" fill="#7a5a3a"/>
            <path d="M14 28h20l-3 16H17z" fill="#FFD166" stroke="#1F2A44" stroke-width="2"/>
          </svg>
        </div>
        <h3>Excava la foto</h3>
        <p>Una foto real de la NASA está enterrada en arena lunar. Mueve el cursor para descubrirla y adivina de qué misión es.</p>
        <button class="gomita menta" id="jugar-arena"><svg class="ic" aria-hidden="true"><use href="#ic-play"/></svg>¡Jugar!</button>
      </article>`);
    document.getElementById("jugar-arena").onclick = juegoArena;
  };
  verListaJuegos();

  // ----- Pintar la arena en el canvas -----
  function pintarArena(ctx, w, h) {
    const g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, "#d3c7ad");
    g.addColorStop(.5, "#bcae91");
    g.addColorStop(1, "#a39377");
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    // granitos de arena
    for (let i = 0; i < w * h / 18; i++) {
      const c = 120 + Math.random() * 90;
      ctx.fillStyle = `rgba(${c},${c - 12},${c - 32},${.25 + Math.random() * .4})`;
      ctx.fillRect(Math.random() * w, Math.random() * h, 1.6, 1.6);
    }
    // ondas de arena
    ctx.strokeStyle = "rgba(110,95,70,.25)";
    ctx.lineWidth = 2;
    for (let y = 10; y < h; y += 18) {
      ctx.beginPath();
      for (let x = 0; x <= w; x += 12) ctx.lineTo(x, y + Math.sin((x + y) / 26) * 4);
      ctx.stroke();
    }
    // piedritas y cráteres
    for (let i = 0; i < 9; i++) {
      const x = Math.random() * w, y = Math.random() * h, r = 4 + Math.random() * 14;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(90,78,58,.35)"; ctx.stroke();
    }
    ctx.fillStyle = "rgba(60,50,35,.75)";
    ctx.font = `700 ${Math.max(16, w / 26)}px sans-serif`;
    ctx.textAlign = "center";
    ctx.fillText("¡Excava aquí!", w / 2, h / 2);
  }

  // ----- El juego -----
  function juegoArena() {
    botonVolverLista.hidden = false;
    document.getElementById("titulo-juegos").textContent = "Excava la foto";
    const ronda = revolver(FOTOS_ARENA);
    let turno = 0, total = 0;

    function pintarTurno() {
      const f = ronda[turno];
      const otras = revolver(FOTOS_ARENA.filter(x => x !== f)).slice(0, 2).map(x => x.mision);
      const opciones = revolver([f.mision, ...otras]);
      let respondida = false;

      zona.innerHTML = `
        <div class="caja-juego">
          <div class="marcador">
            <span>Foto ${turno + 1} de ${ronda.length}</span>
            <div class="barra-progreso" aria-hidden="true"><div style="width:${turno / ronda.length * 100}%"></div></div>
            <span>★ ${total}</span>
          </div>
          <p class="instruccion">Mueve el cursor (o tu dedo) sobre la arena para descubrir la foto. Adivina antes de quitarla toda y gana más estrellas.</p>
          <div class="excavacion" id="excavacion">
            <img id="foto-arena" src="imagenes/historias/${f.archivo}" alt="Foto histórica de la misión, tapada con arena">
            <canvas id="arena" aria-hidden="true"></canvas>
            <div class="pala" id="pala"></div>
          </div>
          <div class="medidor">
            <span>Descubierto: <strong id="porcentaje">0%</strong></span>
            <div class="barra-progreso" aria-hidden="true"><div id="barra-descubierto" style="width:0%"></div></div>
            <button class="gomita azul" id="pista-arena">Pista</button>
          </div>
          <p class="instruccion" style="font-weight:700;font-size:22px">¿De qué misión es esta foto?</p>
          <div class="opciones-arena">${opciones.map(o => `<button class="destino" data-m="${o}">${o}</button>`).join("")}</div>
          <p class="aviso" id="aviso-arena" aria-live="polite"></p>
          <p class="estrellas-ganadas" id="estrellas-arena" aria-live="polite"></p>
          <div class="fila-botones" id="botones-arena"></div>
        </div>`;

      const img = document.getElementById("foto-arena");
      const canvas = document.getElementById("arena");
      const caja = document.getElementById("excavacion");
      const pala = document.getElementById("pala");
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      let descubierto = 0, movimientos = 0;

      // Si falta la imagen, se salta a la siguiente
      img.onerror = () => {
        console.warn("No se encontró imagenes/historias/" + f.archivo);
        ronda.splice(turno, 1);
        turno < ronda.length ? pintarTurno() : finalArena();
      };

      function prepararCanvas() {
        const r = caja.getBoundingClientRect();
        const escala = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(r.width * escala);
        canvas.height = Math.round(r.height * escala);
        ctx.setTransform(escala, 0, 0, escala, 0, 0);
        pintarArena(ctx, r.width, r.height);
      }
      if (img.complete && img.naturalWidth) prepararCanvas(); else img.addEventListener("load", prepararCanvas, { once: true });

      // Medir cuánta arena se ha quitado (revisando uno de cada varios pixeles)
      function medir() {
        const datos = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        let vacios = 0, revisados = 0;
        for (let i = 3; i < datos.length; i += 4 * 24) { revisados++; if (datos[i] < 40) vacios++; }
        descubierto = Math.round(vacios / revisados * 100);
        document.getElementById("porcentaje").textContent = descubierto + "%";
        document.getElementById("barra-descubierto").style.width = descubierto + "%";
      }

      // Excavar
      let anterior = null;
      function excavar(ev) {
        if (respondida) return;
        const r = canvas.getBoundingClientRect();
        const x = ev.clientX - r.left, y = ev.clientY - r.top;
        pala.style.display = "block";
        pala.style.left = x + "px"; pala.style.top = y + "px";
        const radio = Math.max(22, r.width / 16);
        ctx.globalCompositeOperation = "destination-out";
        ctx.lineCap = "round";
        ctx.lineWidth = radio * 2;
        ctx.beginPath();
        ctx.moveTo(anterior ? anterior.x : x, anterior ? anterior.y : y);
        ctx.lineTo(x, y);
        ctx.stroke();
        anterior = { x, y };
        if (++movimientos % 8 === 0) medir();
      }
      canvas.addEventListener("pointermove", excavar);
      canvas.addEventListener("pointerdown", ev => { anterior = null; excavar(ev); });
      canvas.addEventListener("pointerleave", () => { anterior = null; pala.style.display = "none"; });

      document.getElementById("pista-arena").onclick = () => {
        const aviso = document.getElementById("aviso-arena");
        aviso.textContent = "Pista: " + f.pista;
        hablar(aviso.textContent);
      };

      zona.querySelectorAll(".opciones-arena .destino").forEach(b => b.onclick = () => {
        if (respondida) return;
        const aviso = document.getElementById("aviso-arena");
        medir();
        if (b.dataset.m === f.mision) {
          respondida = true;
          b.classList.add("bien");
          zona.querySelectorAll(".opciones-arena .destino").forEach(x => x.disabled = true);
          canvas.classList.add("limpia");
          pala.style.display = "none";
          // Menos arena quitada = más estrellas
          const ganadas = descubierto <= 35 ? 3 : descubierto <= 70 ? 2 : 1;
          total += ganadas;
          document.getElementById("estrellas-arena").textContent = estrellasTexto(ganadas);
          aviso.textContent = `¡Sí, es ${f.mision}! ${f.dato}`;
          hablar(aviso.textContent);
          if (ganadas === 3) lluviaDeEstrellas();
          document.getElementById("botones-arena").innerHTML = `
            <button class="gomita azul" id="leer-arena">Leer su historia</button>
            <button class="gomita menta" id="siguiente-arena">${turno + 1 < ronda.length ? "Siguiente foto →" : "Ver resultado"}</button>`;
          document.getElementById("leer-arena").onclick = () => abrirHistoria(f.historia, f.mision);
          document.getElementById("siguiente-arena").onclick = () => {
            turno++;
            if (turno < ronda.length) {
              pintarTurno();
              zona.querySelector(".instruccion").scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
              finalArena();
            }
          };
        } else {
          b.classList.remove("mal"); void b.offsetWidth; b.classList.add("mal");
          aviso.textContent = "¡Casi! Excava un poco más y vuelve a intentar.";
          hablar(aviso.textContent);
        }
      });
    }

    function finalArena() {
      lluviaDeEstrellas();
      const maximo = ronda.length * 3;
      const texto = ronda.length ? `Ganaste ${total} de ${maximo} estrellas.` : "No se encontraron las fotos en imagenes/historias.";
      zona.innerHTML = `
        <div class="caja-juego final-juego">
          <h3>¡Eres un arqueólogo espacial!</h3>
          <p>${texto}</p>
          <div class="fila-botones">
            <button class="gomita menta" id="otra-vez">Jugar otra vez</button>
            <button class="gomita azul" id="a-lista">Otros juegos</button>
          </div>
        </div>`;
      hablar("¡Eres un arqueólogo espacial! " + texto);
      document.getElementById("otra-vez").onclick = juegoArena;
      document.getElementById("a-lista").onclick = verListaJuegos;
    }

    pintarTurno();
  }
})();
