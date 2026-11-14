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
  luna:  { nombre: "La Luna",   color: "#E9E6DD", pista: "Uno de mis amigos de la Luna es un espejo. ¡Todavía le mandan rayos láser!" },
  marte: { nombre: "Marte",     color: "#F6B48F", pista: "Uno de los amigos que faltan es un helicóptero chiquito. ¿Lo buscamos?" },
  lejos: { nombre: "Muy lejos", color: "#C9C2F0", pista: "Hay dos hermanas que salieron en 1977 y todavía siguen viajando." }
};

const EXPLORADORES = [
  /* ---------- LUNA ---------- */
  {
    id: "espejo-apolo11", lugar: "luna", nombre: "Espejo del Apolo 11", anio: 1969,
    dibujo: "espejo", estado: "funciona", estadoTexto: "Sigue funcionando",
    paginas: [
      "Soy un espejo muy especial. Los astronautas del Apolo 11 me dejaron en la Luna en 1969.",
      "Desde la Tierra, unos científicos me lanzan rayos láser. Yo los reboto de regreso, y así miden qué tan lejos está la Luna.",
      "Gracias a mí sabemos que la Luna se aleja de la Tierra un poquito cada año: ¡casi 4 centímetros!"
    ],
    dato: "El Apolo 11 fue la primera misión en llevar personas a la Luna.",
    pregunta: { texto: "¿Qué me mandan desde la Tierra?", opciones: ["Cartas", "Rayos láser", "Pizzas"], correcta: 1 }
  },
  {
    id: "coche-apolo15", lugar: "luna", nombre: "Coche lunar del Apolo 15", anio: 1971,
    dibujo: "coche", estado: "silencio", estadoTexto: "Ya no funciona",
    paginas: [
      "¡Fui el primer coche que manejaron unos astronautas en la Luna! Llegué en 1971 con el Apolo 15.",
      "Gracias a mí, los astronautas pudieron ir mucho más lejos que caminando y traer rocas de lugares nuevos.",
      "Cuando se fueron, me dejaron estacionado. Mi cámara grabó cuando despegaron de regreso a casa."
    ],
    dato: "Los coches lunares se doblaban para caber dentro de la nave.",
    pregunta: { texto: "¿Para qué servía el coche lunar?", opciones: ["Para ir más lejos y traer rocas", "Para hacer carreras", "Para dormir"], correcta: 0 }
  },
  {
    id: "surveyor3", lugar: "luna", nombre: "Surveyor 3", anio: 1967,
    dibujo: "modulo", estado: "silencio", estadoTexto: "Ya no funciona",
    paginas: [
      "Llegué a la Luna en 1967, sin ningún astronauta. Mi trabajo era ver si el suelo era firme para que pudieran aterrizar personas.",
      "En 1969, los astronautas del Apolo 12 aterrizaron cerquita de mí... ¡y vinieron a visitarme!",
      "Se llevaron mi cámara de regreso a la Tierra para estudiar cómo me había tratado la Luna."
    ],
    dato: "Es uno de los pocos robots que han recibido visitas de astronautas.",
    pregunta: { texto: "¿Quién vino a visitarme?", opciones: ["Un extraterrestre", "Nadie", "Los astronautas del Apolo 12"], correcta: 2 }
  },
  {
    id: "coche-apolo17", lugar: "luna", nombre: "Coche lunar del Apolo 17", anio: 1972,
    dibujo: "coche", estado: "silencio", estadoTexto: "Ya no funciona",
    paginas: [
      "Soy el coche lunar del Apolo 17. Llegué en diciembre de 1972.",
      "Fui el último coche que manejaron personas en la Luna. Desde 1972 nadie ha vuelto a caminar allá.",
      "Sigo estacionado esperando a los próximos astronautas. ¿Quién sabe? ¡Tal vez vengas tú!"
    ],
    dato: "El Apolo 17 fue la última misión del programa Apolo.",
    pregunta: { texto: "¿En qué año se fueron los últimos astronautas de la Luna?", opciones: ["1950", "1972", "2020"], correcta: 1 }
  },

  /* ---------- MARTE ---------- */
  {
    id: "sojourner", lugar: "marte", nombre: "Sojourner", anio: 1997,
    dibujo: "rover", estado: "silencio", estadoTexto: "Ya no funciona",
    paginas: [
      "Soy Sojourner, el primer rover de la NASA en Marte. Llegué en 1997.",
      "Era del tamaño de un horno de microondas y tenía 6 ruedas para no atorarme con las piedras.",
      "Me hicieron para trabajar una semana... ¡y trabajé casi tres meses!"
    ],
    dato: "Los rovers que llegaron después también tienen 6 ruedas.",
    pregunta: { texto: "¿Cuántas ruedas tengo?", opciones: ["4", "6", "8"], correcta: 1 }
  },
  {
    id: "spirit", lugar: "marte", nombre: "Spirit", anio: 2004,
    dibujo: "rover", estado: "silencio", estadoTexto: "En silencio desde 2010",
    paginas: [
      "Soy Spirit. Llegué a Marte en enero de 2004. Me hicieron para trabajar 3 meses... ¡y trabajé 6 años!",
      "Encontré rocas que muestran que en Marte hubo agua calientita, como en unas aguas termales.",
      "En 2009 mis ruedas se atoraron en arena muy suave. Llegó el invierno y no me llegó suficiente Sol. En 2010 mandé mi último mensaje."
    ],
    dato: "Spirit tiene un gemelo: Opportunity.",
    pregunta: { texto: "¿Por qué se quedó dormido Spirit?", opciones: ["Se atoró en la arena y le faltó Sol", "Se cansó de jugar", "Lo apagaron por error"], correcta: 0 }
  },
  {
    id: "opportunity", lugar: "marte", nombre: "Opportunity", anio: 2004,
    dibujo: "rover", estado: "silencio", estadoTexto: "En silencio desde 2018",
    paginas: [
      "Llegué a Marte el 25 de enero de 2004 y fui rodando hasta caer dentro de un cráter chiquito. ¡Un hoyo en uno!",
      "Ahí encontré unas bolitas de hematita, un mineral que se forma con agua. Así supimos que Marte tuvo agua hace mucho tiempo.",
      "Me hicieron para trabajar 90 días... ¡y aguanté más de 14 años! En 2018 una tormenta de polvo tapó el Sol y me quedé dormido."
    ],
    dato: "Opportunity recorrió más de 45 kilómetros: ¡más que un maratón!",
    pregunta: { texto: "¿Cuánto tiempo iba a trabajar Opportunity?", opciones: ["1 hora", "90 días", "100 años"], correcta: 1 }
  },
  {
    id: "curiosity", lugar: "marte", nombre: "Curiosity", anio: 2012,
    dibujo: "rover", estado: "funciona", estadoTexto: "Sigue trabajando",
    paginas: [
      "Soy Curiosity. Llegué a Marte en 2012 y soy grande como un carro.",
      "Tengo un láser para estudiar las rocas desde lejos y un taladro para ver qué hay adentro.",
      "No necesito el Sol: tengo una pila especial que me da energía. ¡Por eso sigo trabajando!"
    ],
    dato: "Curiosity encontró que hace mucho, Marte pudo tener lugares buenos para la vida pequeñita.",
    pregunta: { texto: "¿Qué uso para estudiar las rocas desde lejos?", opciones: ["Una lupa", "Un martillo", "Un láser"], correcta: 2 }
  },
  {
    id: "ingenuity", lugar: "marte", nombre: "Ingenuity", anio: 2021,
    dibujo: "heli", estado: "dormido", estadoTexto: "Ya no puede volar",
    paginas: [
      "Soy Ingenuity, un helicóptero. Viajé a Marte pegado a la panza del rover Perseverance. ¡Peso menos que un gato!",
      "En Marte el aire es muy delgado y nadie sabía si podría volar. Lo intenté... ¡y volé! Fue la primera vez que una máquina voló con motor en otro planeta.",
      "Al final volé 72 veces. En mi último vuelo se lastimó una de mis hélices y ya no puedo volar, pero sigo allá."
    ],
    dato: "Al principio solo iba a intentar 5 vuelos.",
    pregunta: { texto: "¿Cuántas veces voló Ingenuity?", opciones: ["2", "72", "1000"], correcta: 1 }
  },

  /* ---------- MUY LEJOS ---------- */
  {
    id: "voyager1", lugar: "lejos", nombre: "Voyager 1", anio: 1977,
    dibujo: "sonda", estado: "funciona", estadoTexto: "Todavía manda señales",
    paginas: [
      "Soy Voyager 1. Salí de la Tierra en 1977, ¡antes de que nacieran tus papás! Pasé junto a Júpiter y Saturno.",
      "Soy el objeto hecho por personas que está más lejos de la Tierra. Mi mensaje tarda casi un día entero en llegar.",
      "Llevo un disco de oro con sonidos y saludos de la Tierra, por si alguien me encuentra."
    ],
    dato: "Voyager 1 ya salió de la burbuja que rodea al Sol.",
    pregunta: { texto: "¿Qué llevo por si alguien me encuentra?", opciones: ["Un mapa del tesoro", "Un disco de oro", "Una pizza"], correcta: 1 }
  },
  {
    id: "voyager2", lugar: "lejos", nombre: "Voyager 2", anio: 1977,
    dibujo: "sonda", estado: "funciona", estadoTexto: "Todavía manda señales",
    paginas: [
      "Soy Voyager 2, la hermana de Voyager 1. ¡Y eso que yo salí primero, en agosto de 1977!",
      "Soy la única nave que ha visitado Urano y Neptuno. Les tomé fotos de cerca por primera vez.",
      "Yo también llevo un disco de oro y sigo viajando muy, muy lejos."
    ],
    dato: "Voyager 2 salió unos días antes que Voyager 1.",
    pregunta: { texto: "¿Qué planetas visité yo sola?", opciones: ["Urano y Neptuno", "Marte y Venus", "La Tierra"], correcta: 0 }
  },
  {
    id: "pioneer10", lugar: "lejos", nombre: "Pioneer 10", anio: 1972,
    dibujo: "sonda", estado: "silencio", estadoTexto: "En silencio desde 2003",
    paginas: [
      "Soy Pioneer 10. Salí de la Tierra en 1972.",
      "Fui la primera nave en pasar junto a Júpiter, el planeta más grande. ¡Le tomé fotos de cerca!",
      "Llevo una placa con un dibujo que explica de dónde vengo. Mandé mi último mensaje en 2003, pero sigo viajando."
    ],
    dato: "Pioneer 10 también cruzó el cinturón de asteroides.",
    pregunta: { texto: "¿Qué planeta gigante visité primero?", opciones: ["Júpiter", "Mercurio", "La Luna"], correcta: 0 }
  }
];
