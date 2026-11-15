/* =========================================================
   DATOS DE LOS EXPLORADORES
   Para agregar un explorador, copien un bloque { ... } y cambien los textos.
   - dibujo: rover | heli | sonda | espejo | coche | modulo
   - estado: funciona | dormido | silencio
   - paginas: cada texto es una página del mini libro
   - IMPORTANTE: verifiquen cada dato en las fuentes de la NASA
     (catálogo NSSDCA, pestaña Recursos del reto) antes de entregar.
   ========================================================= */

const LUGARES = {
  luna:  { nombre: "La Luna",   color: "#E9E6DD", pista: "Eagle, Falcon e Intrepid fueron módulos lunares. ¿Recuerdas cuál llevó el primer coche lunar?" },
  marte: { nombre: "Marte",     color: "#F6B48F", pista: "En Marte aterrizó Viking 1 y también voló Ingenuity, el primer helicóptero en otro mundo." },
  lejos: { nombre: "Más allá", color: "#C9C2F0", pista: "Dawn exploró Vesta y Ceres; Kepler buscó planetas alrededor de otras estrellas." }
};

const EXPLORADORES = [
  /* ---------- LUNA ---------- */
  {
    id: "eagle", lugar: "luna", nombre: "Módulo lunar Eagle", anio: 1969,
    dibujo: "modulo", estado: "silencio", estadoTexto: "Su base quedó en la Luna",
    paginas: [
      "Soy Eagle, el módulo lunar del Apolo 11. El 20 de julio de 1969 llevé a Neil Armstrong y Buzz Aldrin hasta el Mar de la Tranquilidad.",
      "Después de más de 21 horas en la Luna, me dividí en dos. Mi base con cuatro patas se quedó en el suelo y mi parte superior despegó.",
      "También llevé el laboratorio EASEP y un espejo especial que reflejaba rayos láser enviados desde la Tierra."
    ],
    dato: "Eagle fue el módulo que llevó a las primeras personas a la superficie lunar.",
    pregunta: { texto: "¿Qué parte de Eagle se quedó en la Luna?", opciones: ["La base con sus cuatro patas", "La nave principal", "El traje de Neil"], correcta: 0 }
  },
  {
    id: "falcon", lugar: "luna", nombre: "Módulo lunar Falcon", anio: 1971,
    dibujo: "modulo", estado: "silencio", estadoTexto: "Su base quedó en la Luna",
    paginas: [
      "Soy Falcon, el módulo lunar del Apolo 15. Llegué a la Luna el 30 de julio de 1971 con David Scott y James Irwin.",
      "Llevaba una sorpresa: el Vehículo Explorador Lunar. Los astronautas fueron los primeros en conducir un coche fuera de la Tierra.",
      "En tres excursiones recorrieron casi 28 kilómetros y recogieron más de 77 kilos de rocas y tierra lunar."
    ],
    dato: "Antes de irse, la tripulación del Apolo 15 instaló la estación científica ALSEP.",
    pregunta: { texto: "¿Qué sorpresa llevaba Falcon?", opciones: ["Un submarino", "El primer coche lunar", "Un telescopio gigante"], correcta: 1 }
  },
  {
    id: "intrepid", lugar: "luna", nombre: "Módulo lunar Intrepid", anio: 1969,
    dibujo: "modulo", estado: "silencio", estadoTexto: "Su base quedó en la Luna",
    paginas: [
      "Soy Intrepid, el módulo lunar del Apolo 12. Pete Conrad y Alan Bean aterrizaron conmigo en el Océano de las Tormentas.",
      "Aterricé a solo 180 metros de Surveyor 3. Los astronautas caminaron hasta ese robot y trajeron algunas de sus piezas a la Tierra.",
      "Al final, mi parte superior volvió hacia la Luna para provocar un impacto controlado y crear un «lunamoto»."
    ],
    dato: "La tripulación del Apolo 12 pasó más de 31 horas en la superficie lunar.",
    pregunta: { texto: "¿A qué robot visitaron Pete Conrad y Alan Bean?", opciones: ["Sojourner", "Surveyor 3", "Viking 1"], correcta: 1 }
  },
  {
    id: "surveyor-3", lugar: "luna", nombre: "Surveyor 3", anio: 1967,
    dibujo: "modulo", estado: "silencio", estadoTexto: "En silencio desde 1967",
    paginas: [
      "Soy Surveyor 3. Llegué a la Luna en 1967 para probar si el suelo podía sostener una nave tripulada.",
      "Al aterrizar reboté dos veces. Luego usé mi cámara y una pala mecánica para tomar fotos, cavar zanjas y estudiar el suelo.",
      "Dos años después, los astronautas del Apolo 12 caminaron hasta mí y llevaron algunas de mis piezas a la Tierra."
    ],
    dato: "Surveyor 3 fue el primer explorador espacial visitado por personas en otro mundo.",
    pregunta: { texto: "¿Cuántas veces reboté al llegar a la Luna?", opciones: ["Dos", "Ninguna", "Diez"], correcta: 0 }
  },

  /* ---------- MARTE ---------- */
  {
    id: "pathfinder", lugar: "marte", nombre: "Mars Pathfinder y Sojourner", anio: 1997,
    dibujo: "rover", estado: "silencio", estadoTexto: "Ya no funciona",
    paginas: [
      "Soy Sojourner, el pequeño rover que viajó dentro de Mars Pathfinder. Llegué a Marte en 1997.",
      "Pathfinder se protegió con bolsas de aire y rebotó unas 15 veces antes de detenerse en Ares Vallis.",
      "Rodé por una rampa y me convertí en el primer vehículo robótico que recorrió la superficie de Marte."
    ],
    dato: "Pathfinder y Sojourner enviaron más de 17,000 fotografías a la Tierra.",
    pregunta: { texto: "¿Cómo se protegió Pathfinder al aterrizar?", opciones: ["Con bolsas de aire", "Con un par de alas", "Con un paracaídas solamente"], correcta: 0 }
  },
  {
    id: "spirit-opportunity", lugar: "marte", nombre: "Spirit y Opportunity", anio: 2004,
    dibujo: "rover", estado: "silencio", estadoTexto: "Misiones finalizadas",
    paginas: [
      "Somos Spirit y Opportunity, dos rovers gemelos que llegaron a Marte en 2004 para buscar señales de agua antigua.",
      "Spirit exploró el cráter Gusev y Opportunity la llanura Meridiani Planum. Los dos encontraron pistas de que hubo agua líquida.",
      "Spirit recorrió 7.7 kilómetros. Opportunity recorrió 45.16 kilómetros antes de quedarse en silencio en 2018."
    ],
    dato: "Opportunity recorrió más distancia que cualquier otro explorador fuera de la Tierra hasta octubre de 2026.",
    pregunta: { texto: "¿Cuál de los dos recorrió 45.16 kilómetros?", opciones: ["Spirit", "Opportunity", "Sojourner"], correcta: 1 }
  },
  {
    id: "viking-1", lugar: "marte", nombre: "Viking 1", anio: 1976,
    dibujo: "modulo", estado: "silencio", estadoTexto: "En silencio desde 1982",
    paginas: [
      "Soy Viking 1. Llegué a Marte en 1976 en dos partes: un orbitador y un módulo de aterrizaje.",
      "Mi módulo se posó en Chryse Planitia y envió las primeras fotografías nítidas desde el suelo marciano.",
      "También analicé muestras de tierra y envié reportes del clima hasta que se interrumpió mi señal en 1982."
    ],
    dato: "El orbitador de Viking 1 dio casi 1,500 vueltas alrededor de Marte.",
    pregunta: { texto: "¿Qué envió Viking 1 desde la superficie marciana?", opciones: ["Las primeras fotos nítidas", "Una carta para la Tierra", "Un mapa de la Luna"], correcta: 0 }
  },
  {
    id: "ingenuity", lugar: "marte", nombre: "Ingenuity", anio: 2021,
    dibujo: "heli", estado: "silencio", estadoTexto: "Misión finalizada en 2024",
    paginas: [
      "Soy Ingenuity, un pequeño helicóptero que viajó a Marte bajo la panza del rover Perseverance.",
      "El 19 de abril de 2021 hice el primer vuelo propulsado y controlado en otro mundo.",
      "Mi misión iba a durar cinco vuelos, pero logré completar 72 antes de terminar en enero de 2024."
    ],
    dato: "Ingenuity voló casi 129 minutos y recorrió 17 kilómetros en total.",
    pregunta: { texto: "¿Cuántos vuelos completó Ingenuity?", opciones: ["5", "17", "72"], correcta: 2 }
  },

  /* ---------- MÁS ALLÁ ---------- */
  {
    id: "dawn", lugar: "lejos", nombre: "Dawn", anio: 2007,
    dibujo: "sonda", estado: "silencio", estadoTexto: "Misión finalizada en 2018",
    paginas: [
      "Soy Dawn, una nave espacial que visitó dos mundos distintos en un mismo viaje.",
      "Primero estudié Vesta, un asteroide gigante. Después seguí mi camino hasta Ceres, un planeta enano.",
      "Ambos mundos están en el cinturón de asteroides, entre Marte y Júpiter."
    ],
    dato: "Dawn demostró que una nave puede visitar y estudiar dos mundos en una misma misión.",
    pregunta: { texto: "¿Qué dos mundos estudió Dawn?", opciones: ["Vesta y Ceres", "Marte y la Luna", "Júpiter y Saturno"], correcta: 0 }
  },
  {
    id: "pioneer-10", lugar: "lejos", nombre: "Pioneer 10", anio: 1972,
    dibujo: "sonda", estado: "silencio", estadoTexto: "En silencio desde 2003",
    paginas: [
      "Soy Pioneer 10. Salí de la Tierra en 1972 y fui la primera nave en cruzar el cinturón de asteroides.",
      "En 1973 pasé cerca de Júpiter y envié imágenes de sus nubes y algunas de sus lunas.",
      "Llevo una placa con un dibujo y un mapa que muestran de dónde vengo."
    ],
    dato: "La última señal de Pioneer 10 llegó a la Tierra en enero de 2003.",
    pregunta: { texto: "¿Qué planeta visitó Pioneer 10 después de cruzar el cinturón de asteroides?", opciones: ["Júpiter", "Mercurio", "Neptuno"], correcta: 0 }
  },
  {
    id: "kepler", lugar: "lejos", nombre: "Telescopio Kepler", anio: 2009,
    dibujo: "sonda", estado: "silencio", estadoTexto: "Misión finalizada en 2018",
    paginas: [
      "Soy el telescopio espacial Kepler. Desde 2009 observé una región del cielo con miles de estrellas.",
      "Buscaba planetas lejanos midiendo pequeños cambios en el brillo de las estrellas cuando un planeta pasaba frente a ellas.",
      "Mi misión terminó en 2018 después de ayudar a descubrir que hay muchísimos planetas fuera de nuestro sistema solar."
    ],
    dato: "Kepler vigiló unas 150,000 estrellas en una región de la constelación del Cisne.",
    pregunta: { texto: "¿Qué cambio observaba Kepler para encontrar planetas?", opciones: ["El brillo de las estrellas", "El color de la Luna", "La temperatura de Marte"], correcta: 0 }
  }
];
