/* =========================================================
   CÓDIGO COMPARTIDO por todas las versiones:
   dibujos, voz, estrellas guardadas y lluvia de estrellas.
   ========================================================= */

/* ---------- Dibujos (Argo, robots, iconos) ---------- */
const SPRITE = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <filter id="borde-rugoso" x="-5%" y="-10%" width="110%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="3" seed="4" result="ruido"/>
      <feDisplacementMap in="SourceGraphic" in2="ruido" scale="5" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <symbol id="argo" viewBox="0 0 200 240">
      <line x1="100" y1="22" x2="100" y2="38" stroke="#1F2A44" stroke-width="5" stroke-linecap="round"/>
      <circle cx="100" cy="16" r="8" fill="#FF7A59" stroke="#1F2A44" stroke-width="4"/>
      <ellipse cx="44" cy="150" rx="13" ry="24" transform="rotate(35 44 150)" fill="#fff" stroke="#1F2A44" stroke-width="5"/>
      <ellipse cx="156" cy="192" rx="13" ry="22" transform="rotate(-20 156 192)" fill="#fff" stroke="#1F2A44" stroke-width="5"/>
      <rect x="56" y="150" width="88" height="76" rx="30" fill="#fff" stroke="#1F2A44" stroke-width="5"/>
      <circle cx="100" cy="190" r="12" fill="#FF7A59" stroke="#1F2A44" stroke-width="4"/>
      <path d="M95 190 l4 4 l7 -8" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="100" cy="96" r="62" fill="#DDF1FF" stroke="#1F2A44" stroke-width="5"/>
      <ellipse cx="64" cy="100" rx="13" ry="27" transform="rotate(18 64 100)" fill="#8B5A3C"/>
      <ellipse cx="136" cy="100" rx="13" ry="27" transform="rotate(-18 136 100)" fill="#8B5A3C"/>
      <circle cx="100" cy="100" r="38" fill="#E7A86E"/>
      <ellipse cx="114" cy="84" rx="12" ry="10" fill="#FFE3C4"/>
      <ellipse cx="100" cy="116" rx="22" ry="16" fill="#FFE3C4"/>
      <circle cx="86" cy="95" r="6.5" fill="#1F2A44"/>
      <circle cx="114" cy="95" r="6.5" fill="#1F2A44"/>
      <circle cx="88" cy="93" r="2.2" fill="#fff"/>
      <circle cx="116" cy="93" r="2.2" fill="#fff"/>
      <ellipse cx="100" cy="109" rx="7" ry="5" fill="#1F2A44"/>
      <path d="M90 118 Q100 128 110 118" fill="none" stroke="#1F2A44" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M97 123 Q100 132 103 123" fill="#FF8FA3"/>
      <circle cx="76" cy="112" r="5" fill="#FF9E80" opacity=".7"/>
      <circle cx="124" cy="112" r="5" fill="#FF9E80" opacity=".7"/>
      <path d="M62 70 Q74 48 98 42" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" opacity=".85"/>
      <rect x="68" y="150" width="64" height="14" rx="7" fill="#4BA3E3" stroke="#1F2A44" stroke-width="4"/>
    </symbol>
    <symbol id="dib-rover" viewBox="0 0 120 80">
      <rect x="10" y="14" width="100" height="10" rx="5" fill="#4BA3E3" stroke="#1F2A44" stroke-width="3"/>
      <rect x="25" y="24" width="70" height="26" rx="8" fill="#1F2A44"/>
      <line x1="60" y1="24" x2="60" y2="6" stroke="#1F2A44" stroke-width="4"/>
      <circle cx="54" cy="35" r="4" fill="#fff"/><circle cx="66" cy="35" r="4" fill="#fff"/>
      <circle cx="28" cy="62" r="11" fill="#1F2A44"/><circle cx="60" cy="62" r="11" fill="#1F2A44"/><circle cx="92" cy="62" r="11" fill="#1F2A44"/>
    </symbol>
    <symbol id="dib-heli" viewBox="0 0 120 100">
      <rect x="12" y="14" width="96" height="7" rx="3.5" fill="#1F2A44"/>
      <rect x="22" y="26" width="76" height="6" rx="3" fill="#1F2A44"/>
      <line x1="60" y1="14" x2="60" y2="42" stroke="#1F2A44" stroke-width="4"/>
      <rect x="42" y="40" width="36" height="26" rx="8" fill="#A9C4F5" stroke="#1F2A44" stroke-width="3"/>
      <circle cx="53" cy="52" r="3" fill="#1F2A44"/><circle cx="67" cy="52" r="3" fill="#1F2A44"/>
      <line x1="46" y1="66" x2="32" y2="92" stroke="#1F2A44" stroke-width="4" stroke-linecap="round"/>
      <line x1="74" y1="66" x2="88" y2="92" stroke="#1F2A44" stroke-width="4" stroke-linecap="round"/>
    </symbol>
    <symbol id="dib-sonda" viewBox="0 0 120 90">
      <circle cx="50" cy="40" r="26" fill="#fff" stroke="#1F2A44" stroke-width="4"/>
      <circle cx="50" cy="40" r="7" fill="#1F2A44"/>
      <line x1="76" y1="40" x2="114" y2="40" stroke="#1F2A44" stroke-width="4" stroke-linecap="round"/>
      <line x1="50" y1="66" x2="50" y2="86" stroke="#1F2A44" stroke-width="4" stroke-linecap="round"/>
      <circle cx="14" cy="16" r="3" fill="#FFC531"/><circle cx="104" cy="74" r="3" fill="#FFC531"/>
    </symbol>
    <symbol id="dib-espejo" viewBox="0 0 100 90">
      <rect x="18" y="18" width="64" height="46" rx="4" fill="#1F2A44"/>
      <g fill="#DDF1FF">
        <circle cx="32" cy="32" r="6"/><circle cx="50" cy="32" r="6"/><circle cx="68" cy="32" r="6"/>
        <circle cx="32" cy="50" r="6"/><circle cx="50" cy="50" r="6"/><circle cx="68" cy="50" r="6"/>
      </g>
      <line x1="30" y1="64" x2="22" y2="86" stroke="#1F2A44" stroke-width="4" stroke-linecap="round"/>
      <line x1="70" y1="64" x2="78" y2="86" stroke="#1F2A44" stroke-width="4" stroke-linecap="round"/>
    </symbol>
    <symbol id="dib-coche" viewBox="0 0 120 80">
      <rect x="10" y="40" width="100" height="10" rx="5" fill="#C9CBD6" stroke="#1F2A44" stroke-width="3"/>
      <rect x="26" y="24" width="24" height="16" rx="4" fill="#1F2A44"/>
      <rect x="58" y="24" width="24" height="16" rx="4" fill="#1F2A44"/>
      <line x1="94" y1="40" x2="100" y2="12" stroke="#1F2A44" stroke-width="4"/>
      <path d="M90 12 C94 2 108 2 110 12 Z" fill="#E8B84A" stroke="#1F2A44" stroke-width="2"/>
      <circle cx="26" cy="62" r="12" fill="#1F2A44"/><circle cx="94" cy="62" r="12" fill="#1F2A44"/>
    </symbol>
    <symbol id="dib-modulo" viewBox="0 0 110 90">
      <path d="M35 50 L42 20 L68 20 L75 50 Z" fill="#E8B84A" stroke="#1F2A44" stroke-width="3"/>
      <circle cx="55" cy="12" r="8" fill="#fff" stroke="#1F2A44" stroke-width="3"/>
      <line x1="38" y1="50" x2="16" y2="84" stroke="#1F2A44" stroke-width="4" stroke-linecap="round"/>
      <line x1="72" y1="50" x2="94" y2="84" stroke="#1F2A44" stroke-width="4" stroke-linecap="round"/>
      <line x1="55" y1="50" x2="55" y2="84" stroke="#1F2A44" stroke-width="4" stroke-linecap="round"/>
    </symbol>
    <symbol id="estrella" viewBox="0 0 24 24">
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6z" stroke="#1F2A44" stroke-width="1.5" stroke-linejoin="round"/>
    </symbol>
    <symbol id="bocina" viewBox="0 0 24 24">
      <path d="M4 9v6h4l5 4V5L8 9H4z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M17 8a5 5 0 0 1 0 8" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </symbol>
  </svg>`;
document.body.insertAdjacentHTML("afterbegin", SPRITE);

/* Iconos extra para botones */
document.body.insertAdjacentHTML("afterbegin", `
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="ic-play" viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z" fill="currentColor"/></symbol>
  <symbol id="ic-atras" viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-adelante" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-cerrar" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/></symbol>
  <symbol id="ic-candado" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2" fill="currentColor"/><path d="M8 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="2.5"/></symbol>
  <symbol id="ic-libro" viewBox="0 0 24 24"><path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v14c-3-1-6-1-9 1-3-2-6-2-9-1z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><path d="M12 6v14" stroke="currentColor" stroke-width="2.5"/></symbol>
  <symbol id="ic-pregunta" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><circle cx="12" cy="17" r="1.4" fill="currentColor"/></symbol>
  <symbol id="ic-cohete" viewBox="0 0 24 24"><path d="M12 2c4 3 5 8 3 13H9C7 10 8 5 12 2z" fill="currentColor"/><circle cx="12" cy="9" r="2" fill="#fff"/><path d="M9 15l-3 4h4zM15 15l3 4h-4z" fill="currentColor"/></symbol>
  <symbol id="ic-lupa" viewBox="0 0 24 24"><circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" stroke-width="2.8"/><path d="M15 15l5 5" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></symbol>
  <symbol id="ic-foco" viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0-3 11v3h6v-3a6 6 0 0 0-3-11z" fill="currentColor"/><rect x="9" y="18" width="6" height="3" rx="1" fill="currentColor"/></symbol>
  <symbol id="ic-senal" viewBox="0 0 24 24"><circle cx="12" cy="17" r="2.5" fill="currentColor"/><path d="M7 12a7 7 0 0 1 10 0M4 9a11 11 0 0 1 16 0" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></symbol>
  <symbol id="ic-casa" viewBox="0 0 24 24"><path d="M3 11l9-7 9 7v9H3z" fill="currentColor"/><rect x="10" y="14" width="4" height="6" fill="#fff"/></symbol>
</svg>`);

/* ---------- Estrellas ganadas (se guardan en el navegador) ---------- */
function cargarGanadas() {
  try { return JSON.parse(localStorage.getItem("argo-estrellas")) || []; } catch (e) { return []; }
}
function guardarGanadas(lista) {
  try { localStorage.setItem("argo-estrellas", JSON.stringify(lista)); } catch (e) {}
}

/* ---------- Voz ---------- */
function hablar(texto) {
  try {
    speechSynthesis.cancel();
    const v = new SpeechSynthesisUtterance(texto);
    v.lang = "es-MX"; v.rate = 0.95; v.pitch = 1.2;
    speechSynthesis.speak(v);
  } catch (e) {}
}
function callar() { try { speechSynthesis.cancel(); } catch (e) {} }

/* ---------- Lluvia de estrellas ---------- */
function lluviaDeEstrellas() {
  for (let i = 0; i < 16; i++) {
    const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.setAttribute("aria-hidden", "true");
    s.innerHTML = '<use href="#estrella" fill="#FFC531"/>';
    s.style.cssText = `position:fixed;top:-40px;left:${Math.random() * 100}vw;width:34px;height:34px;pointer-events:none;z-index:99;animation:caer 1.6s ease-in ${Math.random() * .6}s forwards`;
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 2400);
  }
}
document.head.insertAdjacentHTML("beforeend",
  "<style>@keyframes caer{to{transform:translateY(110vh) rotate(360deg)}}</style>");

/* ---------- Ayudantes ---------- */
const icono = (id, extra = "") => `<svg class="ic" aria-hidden="true" ${extra}><use href="#${id}"/></svg>`;
const dibujoRobot = (e, clase = "") => `<svg class="${clase}" viewBox="0 0 120 100" role="img" aria-label="Dibujo de ${e.nombre}"><use href="#dib-${e.dibujo}"/></svg>`;
const ESTADO_COLOR = { funciona: "#4CB27A", dormido: "#FFC531", silencio: "#1F2A44" };
