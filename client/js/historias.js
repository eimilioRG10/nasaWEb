const DESTINOS_HISTORIAS = [
  {
    id: "luna",
    nombre: "La Luna",
    descripcion: "Módulos, robots y astronautas que exploraron la superficie lunar."
  },
  {
    id: "marte",
    nombre: "Marte",
    descripcion: "Las primeras exploraciones y los robots que recorren el Planeta Rojo."
  },
  {
    id: "lejos",
    nombre: "Más allá",
    descripcion: "Naves y telescopios que revelaron nuevos mundos del sistema solar y del universo."
  }
];

const HISTORIAS = [
  {
    id: "eagle",
    destino: "luna",
    titulo: "La gran aventura del pequeño módulo Eagle en la Luna",
    mision: "Apolo 11",
    anio: "1969",
    parrafos: [
      "Había una vez una nave espacial muy especial llamada Eagle (Águila). No era una nave cualquiera con alas de avión; tenía cuatro patas largas con pies redondos, dos ventanas triangulares que parecían ojos curiosos y ni un solo asiento por dentro. Su misión en julio de 1969 era llevar a dos valientes astronautas, Neil Armstrong y Buzz Aldrin, hasta un lugar llamado el Mar de la Tranquilidad, en la Luna.",
      "Mientras su amigo Michael Collins esperaba dando vueltas allá arriba en la nave principal, Eagle se soltó y encendió su gran motor de descenso. ¡Fiuuu! Durante más de doce minutos frenó su caída hasta posar sus cuatro patas suavemente sobre el polvo gris de la Luna el 20 de julio. En cuanto tocó el suelo, Neil envió un mensaje a la Tierra: «Houston, aquí Base Tranquilidad. El Eagle ha alunizado».",
      "Unas horas después, se abrió la escotilla. Neil bajó por una escalerilla montada en una de las patas de la nave y se convirtió en el primer ser humano en pisar la Luna. «Es un pequeño paso para un hombre, pero un gran salto para la humanidad», dijo emocionado. Diecinueve minutos más tarde bajó Buzz, quien miró el paisaje silencioso y lleno de cráteres y lo llamó «magnífica desolación».",
      "Los dos astronautas tenían mucho trabajo por hacer y caminaron unos 250 metros explorando los alrededores. Descubrieron una placa en la nave que decía que venían en son de paz para toda la humanidad, colocaron una bandera y hasta hablaron por radio con el presidente de los Estados Unidos. Además, se convirtieron en recolectores espaciales: guardaron más de 21 kilos de rocas y tierra lunar en cajas especiales para llevarlas a casa.",
      "Pero Eagle no viajaba vacío; llevaba consigo un pequeño laboratorio científico llamado EASEP. Los astronautas lo instalaron a unos 17 metros de la nave. Este robotito científico tenía dos paneles solares como alas para alimentarse de la luz del Sol, un detector de polvo lunar y un sismógrafo para sentir si a la Luna le daban «cosquillas» o temblores por dentro. A su lado dejaron también un espejo especial para reflejar rayos láser desde la Tierra.",
      "Después de pasar más de veintiuna horas en la superficie lunar —incluyendo un merecido descanso dentro de su pequeña cabina sin sillas—, llegó la hora de volver. Eagle hizo un truco increíble: se dividió en dos. Su parte inferior, con las cuatro patas, se quedó en la Luna como plataforma de lanzamiento, mientras la parte superior encendió su propio motor y salió disparada hacia el espacio.",
      "Allá arriba se reencontró con Michael Collins y la nave principal. Una vez que Neil, Buzz y sus valiosas rocas estuvieron a salvo de regreso, el valiente módulo Eagle había cumplido su misión, y su parte superior se quedó girando alrededor de la Luna como el pequeño gigante que abrió las puertas de otro mundo."
    ]
  },
  {
    id: "falcon",
    destino: "luna",
    titulo: "El halcón espacial que llevó a la Luna el primer coche conducido por astronautas",
    mision: "Apolo 15",
    anio: "1971",
    parrafos: [
      "En julio de 1971, una nave espacial con nombre de ave veloz emprendió un viaje inolvidable: era el módulo lunar Falcon (Halcón) de la misión Apolo 15. Con sus cuatro patas de aterrizaje y su cabina sin asientos, Falcon se convirtió en la cuarta nave tripulada en posarse sobre la Luna, llevando a bordo a los astronautas David Scott y James Irwin.",
      "Su destino era un paisaje espectacular en la región de Mare Imbrium, justo al pie de unas enormes montañas lunares llamadas los Montes Apeninos. Dos horas después de tocar el suelo gris el 30 de julio, David abrió la escotilla superior y asomó la cabeza durante más de media hora para observar y fotografiar aquel mundo silencioso.",
      "Pero Falcon guardaba una sorpresa increíble en su compartimento de carga: ¡un todoterreno espacial! Al día siguiente, los astronautas descargaron y desplegaron el Vehículo Explorador Lunar (LRV), convirtiéndose en los primeros seres humanos en conducir un automóvil fuera de la Tierra. Durante tres largas excursiones que sumaron más de 18 horas, manejaron casi 28 kilómetros por el borde de profundos cañones como el Hadley Rille y cerca de gigantescos cráteres, recolectando más de 77 kilos de rocas y tierra lunar.",
      "Antes de marcharse, instalaron una estación científica llamada ALSEP, alimentada por un generador especial que transformaba el calor en electricidad para estudiar los temblores lunares, el viento solar, el polvo y el calor del interior de la Luna durante años. También dejaron una placa y una pequeña figura en memoria de los catorce exploradores espaciales estadounidenses y soviéticos que habían perdido la vida en la carrera espacial.",
      "Y para despedirse con broche de oro frente a las cámaras de televisión, David hizo un experimento mágico: sostuvo un pesado martillo en una mano y una ligera pluma en la otra, y los soltó al mismo tiempo. Como en la Luna no hay aire que frene las cosas, ¡ambos cayeron exactamente a la misma velocidad y tocaron el suelo juntos!",
      "Tras casi tres días en la superficie lunar, la parte superior de Falcon encendió su motor y despegó dejando atrás su base de cuatro patas. Arriba se reunió con su compañero Alfred Worden, quien los esperaba en la nave principal para emprender juntos el viaje de regreso a casa con sus tesoros lunares."
    ]
  },
  {
    id: "intrepid",
    destino: "luna",
    titulo: "El valiente módulo Intrepid y el rescate del viejo robot lunar",
    mision: "Apolo 12",
    anio: "1969",
    parrafos: [
      "En noviembre de 1969, apenas cuatro meses después de la primera visita humana a la Luna, despegó una nueva nave llena de curiosidad: el módulo lunar Intrepid (Intrépido) de la misión Apolo 12. Con sus cuatro patas de aterrizaje, sus dos ventanas triangulares y su cabina sin sillas, Intrepid llevó a los astronautas Pete Conrad y Alan Bean hacia una enorme llanura llamada el Océano de las Tormentas.",
      "Pero Intrepid tenía un reto de puntería digno de un campeón. No iba a aterrizar en cualquier sitio; tenía que posarse muy cerca de un viejo amigo silencioso. El 19 de noviembre, ¡lo logró con una precisión asombrosa!, aterrizando a solo 180 metros de la sonda Surveyor 3, un pequeño robot explorador que llevaba más de dos años solito en la Luna.",
      "Pete y Alan salieron a dar dos largas caminatas lunares que duraron casi ocho horas en total. Durante su primera excursión, sufrieron un pequeño accidente técnico: al instalar la cámara de televisión, la apuntaron sin querer hacia el brillo del Sol y la cámara se estropeó. Pero eso no detuvo su espíritu explorador.",
      "Instalaron una estación científica llamada ALSEP, alimentada por un generador especial que convertía el calor en electricidad para estudiar los temblores de la Luna, el polvo, el magnetismo y las partículas del viento solar durante casi ocho años.",
      "En su segunda caminata, los astronautas hicieron una visita histórica: caminaron hasta donde descansaba el viejo robot Surveyor 3. Como verdaderos mecánicos espaciales, desmontaron y guardaron unos 10 kilos de piezas del robot para llevarlas de vuelta a la Tierra y estudiar cómo había resistido tanto tiempo en el espacio, además de recolectar más de 34 kilos de rocas y tierra lunar.",
      "Después de pasar más de 31 horas en la Luna, la parte superior de Intrepid encendió su motor y se elevó, dejando su base de cuatro patas apoyada en el polvo lunar. Arriba se reunió con su compañero Richard Gordon, quien los esperaba en la nave principal.",
      "Y antes de despedirse para siempre, Intrepid realizó un último gran experimento científico: fue enviado de vuelta hacia la superficie lunar para provocar un golpe controlado a 60 kilómetros de distancia, creando así el primer «lunamoto» (terremoto lunar) artificial registrado por los instrumentos que habían dejado en la Luna."
    ]
  },
  {
    id: "surveyor-3",
    destino: "luna",
    titulo: "El pequeño robot saltarín que probó el suelo de la Luna",
    mision: "Surveyor 3",
    anio: "1967",
    parrafos: [
      "En abril de 1967, dos años antes de que los humanos pisaran la Luna, un valiente robot explorador llamado Surveyor 3 despegó desde la Tierra con una misión muy importante: averiguar si el suelo lunar era lo bastante firme para sostener una nave espacial o si los astronautas se hundirían como en arenas movedizas.",
      "Al acercarse a la Luna el 20 de abril, el brillo de unas rocas muy reflectantes confundió el radar de Surveyor 3 y su motor no se apagó a tiempo. ¡Boing, boing! El pequeño robot rebotó dos veces sobre la superficie lunar —la primera vez subió hasta 10 metros de altura y la segunda hasta 3 metros— antes de posarse suavemente en el Océano de las Tormentas.",
      "Apenas una hora después de aterrizar, Surveyor 3 ya estaba tomando y enviando hacia la Tierra miles de fotografías con su cámara de televisión. Pero su herramienta favorita era un brazo mecánico con una pequeña pala que podía estirarse hasta metro y medio. Siguiendo las órdenes que le enviaban desde la Tierra, el robot se puso a jugar en la tierra lunar como si estuviera en un arenero: cavó cuatro zanjas de hasta 18 centímetros de profundidad e hizo pruebas de peso y de impacto.",
      "Gracias a sus excavaciones, los científicos descubrieron que el suelo de la Luna tenía una consistencia parecida a la arena húmeda y era perfectamente capaz de soportar el peso de una nave tripulada.",
      "El 4 de mayo de 1967, dos días después de que llegara la fría noche lunar, Surveyor 3 envió su último mensaje y se quedó dormido en silencio. Pero su historia no terminó ahí: más de dos años y medio después, en noviembre de 1969, los astronautas del Apolo 12, Pete Conrad y Alan Bean, aterrizaron su nave Intrepid a solo 180 metros de distancia y caminaron hasta él. Le desmontaron su cámara y su pala excavadora para llevarlas de vuelta a la Tierra, convirtiendo a este pequeño robot saltarín en el primer explorador espacial en recibir una visita humana en otro mundo."
    ]
  },
  {
    id: "pathfinder",
    destino: "marte",
    titulo: "La pelota gigante que rebotó en Marte y soltó al primer robot explorador",
    mision: "Mars Pathfinder y Sojourner",
    anio: "1997",
    parrafos: [
      "En 1997, una misión muy ingeniosa llamada Mars Pathfinder viajó hasta el Planeta Rojo con una idea que parecía sacada de un dibujo animado: ¡aterrizar rebotando como una pelota de playa gigante!",
      "Al entrar directamente en la delgada atmósfera de Marte, Pathfinder abrió un paracaídas para frenar su caída y luego infló un enorme capullo de bolsas de aire (airbags) de casi seis metros de diámetro para protegerse del golpe. ¡Bum, boing, boing! Al tocar el suelo a 50 kilómetros por hora, la nave rebotó unas 15 veces —llegando a saltar hasta 15 metros de altura— durante dos minutos y medio, hasta que finalmente se detuvo en un antiguo valle rocoso llamado Ares Vallis.",
      "Una vez quieta, la nave abrió sus pétalos y recibió un nuevo nombre: Estación Memorial Carl Sagan, en honor al famoso astrónomo. Pero no venía sola; en su interior traía un pasajero diminuto y muy especial llamado Sojourner, un pequeño robot explorador de apenas 30 centímetros de alto y poco más de 10 kilos de peso, bautizado así en honor a la defensora de los derechos civiles Sojourner Truth.",
      "La noche del 5 de julio, Sojourner se estiró por completo y rodó cuidadosamente por una rampa inclinada para convertirse en el primer vehículo robótico en recorrer la superficie de Marte.",
      "Juntos, la estación y el pequeño robot formaron un gran equipo científico. Mientras la estación vigilaba los vientos y el clima marciano, Sojourner paseaba entre las rocas analizando de qué estaban hechas. En total, enviaron a la Tierra más de 17,000 fotografías y valiosos datos químicos hasta su última transmisión el 27 de septiembre de 1997. Gracias a sus descubrimientos en aquel valle tallado por antiguas inundaciones gigantescas, los científicos encontraron pistas de que, hace muchísimo tiempo, Marte fue un planeta cálido y húmedo."
    ]
  },
  {
    id: "spirit-opportunity",
    destino: "marte",
    titulo: "Los robots gemelos que descubrieron el agua antigua de Marte",
    mision: "Spirit y Opportunity",
    anio: "2004",
    parrafos: [
      "Había una vez dos robots exploradores idénticos, como hermanos gemelos hechos de metal y ciencia, llamados Spirit y Opportunity. Con un diseño que recordaba al cuerpo humano —tenían su propia «cabeza» con cámaras y un «cuerpo» lleno de instrumentos—, viajaron hasta Marte con una misión de detectives espaciales: buscar pistas sobre si alguna vez hubo agua líquida en el Planeta Rojo.",
      "Para cubrir más terreno, decidieron separarse y aterrizar en lados opuestos del planeta, justo en dos lugares que parecían haber estado mojados hace miles de millones de años. Spirit aterrizó en el Cráter Gusev, un gigantesco cráter de impacto que los científicos sospechaban que había sido un antiguo lago. Por su parte, Opportunity aterrizó al otro lado del planeta, en Meridiani Planum, una llanura llena de minerales especiales que gritaban que allí había corrido agua en el pasado.",
      "Juntos, estos dos hermanos incansables reescribieron los libros de historia sobre Marte. Al estudiar cuidadosamente las rocas marcianas como verdaderos geólogos, Spirit y Opportunity confirmaron lo que todos querían saber: hace muchísimo tiempo, el agua había permanecido durante largos periodos sobre la superficie de Marte.",
      "Además de ser grandes científicos, ¡resultaron ser unos excursionistas increíbles! Spirit recorrió un total de 7.7 kilómetros explorando su cráter. Mientras tanto, su hermano Opportunity siguió rodando mucho más tiempo, hasta que se quedó en silencio en junio de 2018 después de recorrer la asombrosa distancia de 45.16 kilómetros. ¡Con ese viaje se ganó el récord mundial de distancia recorrida fuera de la Tierra, una marca que mantuvo intacta durante años hasta que otro robot explorador llamado Perseverance logró superarla en octubre de 2026!"
    ]
  },
  {
    id: "viking-1",
    destino: "marte",
    titulo: "El primer explorador en tomar fotos desde el suelo de Marte",
    mision: "Viking 1",
    anio: "1976",
    parrafos: [
      "Durante siglos, la humanidad miró hacia el cielo nocturno observando aquel punto brillante y rojizo llamado Marte, soñando con saber cómo sería de cerca. Ese sueño se hizo realidad en 1976 gracias a una valiente misión llamada Viking 1.",
      "Viking 1 viajaba en dos partes unidas como un equipo: un orbitador, que se quedaría volando en círculos alrededor del planeta, y un módulo de aterrizaje de casi mil kilos, que parecía una versión gigante del robot lunar Surveyor. Después de viajar casi un año por el espacio profundo tras despegar en agosto de 1975, llegaron a la órbita de Marte en junio de 1976.",
      "Antes de bajar, el orbitador tomó fotografías desde las alturas y descubrió que el lugar planeado para aterrizar tenía demasiadas rocas peligrosas. Con mucho cuidado, los científicos buscaron un sitio más seguro y eligieron una llanura llamada Chryse Planitia (la Llanura Dorada).",
      "El 20 de julio de 1976, el módulo de aterrizaje se separó de su compañero, atravesó la atmósfera marciana tomando muestras de aire y se posó suavemente sobre el suelo rojo. ¡Se convirtió en la primera nave en aterrizar con éxito en Marte y mantener la comunicación con la Tierra!",
      "Apenas tocó tierra, Viking 1 abrió sus cámaras y envió las primeras fotografías nítidas desde la superficie marciana, mostrando un paisaje de suaves llanuras bajo un cielo extraño. Además, estiró su brazo robótico como una cuchara mecánica, recogió muestras de tierra y las metió en un pequeño laboratorio biológico que llevaba por dentro para buscar señales de vida y analizar de qué estaba hecho el suelo. Así descubrió que la tierra marciana tenía muchísimo azufre y que hacía un frío tremendo, ¡con temperaturas que bajaban hasta los 86 grados bajo cero antes del amanecer!",
      "Mientras el orbitador daba casi 1,500 vueltas alrededor de Marte fotografiando el planeta y sus dos lunas hasta agotarse su combustible en 1980, el módulo en tierra siguió trabajando como un fiel meteorólogo espacial. En 1982 fue bautizado como Estación Memorial Thomas Mutch en honor al líder del equipo de cámaras, y continuó enviando reportes del clima marciano durante más de seis años, hasta que un error en un comando enviado desde la Tierra interrumpió su señal en noviembre de 1982. Así cerró su historia el pionero que nos abrió las puertas del Planeta Rojo."
    ]
  },
  {
    id: "ingenuity",
    destino: "marte",
    titulo: "El pequeño helicóptero valiente que aprendió a volar en Marte",
    mision: "Ingenuity",
    anio: "2021",
    parrafos: [
      "Durante mucho tiempo, explorar Marte desde el suelo significaba quedarse quieto en un módulo de aterrizaje o rodar lentamente sobre las rocas. Pero en 2021 viajó escondido bajo la panza del robot Perseverance un pasajero muy especial: Ingenuity, un pequeño helicóptero espacial con cuatro finas patas que tenía el sueño de conquistar los cielos de otro planeta.",
      "El 3 de abril de 2021, Ingenuity posó sus cuatro patas sobre el polvo marciano y logró sobrevivir a su primera y helada noche fuera de casa. Volar allí no era nada fácil, porque la atmósfera de Marte es extremadamente delgada. Sin embargo, el 19 de abril de 2021, hizo girar sus aspas y se elevó en el aire, logrando el primer vuelo propulsado y controlado en otro mundo: una hazaña histórica comparable al primer vuelo de los hermanos Wright en la Tierra.",
      "Al principio, los ingenieros pensaban que Ingenuity sería solo una prueba rápida de apenas cinco vuelos en treinta días. ¡Pero este pequeño helicóptero tenía espíritu de aventurero y no quiso detenerse! Durante casi tres años, hasta su último vuelo en enero de 2024, completó la asombrosa cifra de 72 vuelos históricos. En total, voló durante casi 129 minutos, recorrió 17 kilómetros y llegó a elevarse hasta 24 metros de altura.",
      "Además de romper récords de altura y velocidad, Ingenuity se convirtió en los ojos voladores de su amigo Perseverance, adelantándose como un explorador aéreo para revisar caminos interesantes, fotografiar al robot desde las alturas e incluso inspeccionar los restos del equipo de aterrizaje.",
      "Cuando su misión terminó en enero de 2024, este valiente helicóptero dejó el camino abierto para que futuras aeronaves espaciales —como la misión SkyFall— puedan surcar algún día los cielos de Marte y de otros mundos lejanos."
    ]
  },
  {
    id: "dawn",
    destino: "lejos",
    titulo: "La nave viajera que visitó dos mundos misteriosos en el cinturón de asteroides",
    mision: "Dawn",
    anio: "2007",
    parrafos: [
      "Casi todas las naves espaciales viajan para visitar un solo planeta o una sola luna, pero hubo una exploradora muy ambiciosa llamada Dawn (Amanecer) que rompió las reglas: se convirtió en la primera nave verdaderamente interplanetaria de la NASA capaz de visitar y quedarse a estudiar dos mundos extraterrestres completamente distintos en un mismo viaje.",
      "Su aventura la llevó hasta un vecindario espacial muy concurrido y lleno de rocas flotantes: el cinturón principal de asteroides, situado entre Marte y Júpiter. Allí vivían los dos protagonistas de su expedición.",
      "Su primera parada fue Vesta, un asteroide gigante con barrancos y secretos escondidos en su interior. Dawn se quedó dando vueltas a su alrededor para estudiarlo de cerca antes de encender de nuevo sus motores y continuar su camino hacia su segundo destino.",
      "Su siguiente parada fue Ceres, un fascinante planeta enano que también habita en el cinturón de asteroides. Al observarlo desde las alturas, Dawn descubrió que Ceres guardaba grandes sorpresas bajo su superficie, como el movimiento de fluidos impulsado por el calor de su núcleo y señales de que quizá tuvo energía durante mucho tiempo, algo que podría haberlo vuelto habitable.",
      "Con sus largas estadías en Vesta y Ceres, Dawn demostró que una sola nave podía saltar de un mundo a otro, ayudándonos a descubrir los secretos mejor guardados de los pequeños gigantes del sistema solar."
    ]
  },
  {
    id: "pioneer-10",
    destino: "lejos",
    titulo: "La nave pionera que llevó una carta de la Tierra hacia las estrellas",
    mision: "Pioneer 10",
    anio: "1972",
    parrafos: [
      "En marzo de 1972, una valiente exploradora espacial llamada Pioneer 10 despegó de la Tierra a una velocidad récord de más de 51,000 kilómetros por hora, convirtiéndose en el objeto más rápido fabricado por el ser humano hasta ese momento. Su misión era viajar adonde ninguna nave había ido antes: más allá de Marte, hacia los gigantescos planetas exteriores del sistema solar. Como iba a alejarse tanto del Sol que sus rayos ya no le darían suficiente energía, Pioneer 10 llevó sus propios generadores nucleares para mantenerse despierta en la oscuridad del espacio.",
      "Apenas cuatro meses después de partir, se enfrentó a su primer gran desafío: atravesar el cinturón de asteroides. Durante un viaje de 435 millones de kilómetros esquivando rocas espaciales, Pioneer 10 logró cruzar aquella peligrosa región sin sufrir daños graves, abriendo el camino para futuras misiones.",
      "Su siguiente gran parada fue el rey de los planetas: Júpiter. En diciembre de 1973, Pioneer 10 pasó zumbando cerca del gigante gaseoso a una velocidad vertiginosa de 126,000 kilómetros por hora. Aunque tuvo que soportar una radiación tan intensa que volvió locos a algunos de sus instrumentos, logró enviar unas 500 fotografías increíbles de la atmósfera de Júpiter —mostrando con claridad su famosa Gran Mancha Roja— y de sus lunas Europa, Ganímedes y Calisto.",
      "Pero Pioneer 10 no se detuvo ahí. Siguió volando cada vez más lejos, cruzando la órbita de Saturno en 1976 —donde descubrió que la cola magnética de Júpiter era tan enorme que llegaba hasta allí— y superando la órbita de Neptuno en junio de 1983, convirtiéndose en la primera nave humana en salir más allá del planeta más lejano conocido entonces.",
      "Aunque fue diseñada para funcionar solo durante 21 meses, esta pequeña guerrera espacial siguió enviando susurros por radio durante más de treinta años. Su última señal llegó a la Tierra en enero de 2003, cuando ya se encontraba a más de 12,000 millones de kilómetros de distancia; ¡su mensaje tardó más de once horas en viajar hasta nosotros!",
      "Hoy, Pioneer 10 sigue viajando en silencio hacia el espacio interestelar en dirección a la brillante estrella roja Aldebarán, adonde llegará dentro de unos dos millones de años. Y por si alguna vez se encuentra con seres inteligentes en otro rincón del universo, lleva pegada en su cuerpo una placa de aluminio con el dibujo de un hombre, una mujer y un mapa cósmico que señala exactamente dónde está nuestro hogar, la Tierra."
    ]
  },
  {
    id: "kepler",
    destino: "lejos",
    titulo: "El telescopio detective que descubrió que el cielo está lleno de planetas",
    mision: "Kepler",
    anio: "2009",
    parrafos: [
      "Durante muchísimo tiempo, cuando mirábamos las estrellas por la noche, apenas conocíamos unos cuantos planetas fuera de nuestro sistema solar, y nadie sabía si eran comunes o raros. Todo cambió en marzo de 2009, cuando despegó el telescopio espacial Kepler, el primer gran cazador de planetas de la NASA. Equipado con un enorme espejo y la cámara digital más grande enviada al espacio hasta entonces, Kepler fijó su mirada en un rincón de la constelación del Cisne para vigilar sin parpadear a 150,000 estrellas.",
      "¿Cómo lograba encontrar planetas tan lejanos y oscuros? ¡Usando un truco de detective luminoso! Kepler observaba si el brillo de una estrella disminuía un poquito cada cierto tiempo. Ese pequeño parpadeo —llamado tránsito— ocurría cuando un planeta pasaba justo por delante de su estrella, tapando una pizca de su luz.",
      "Con este ingenioso método, Kepler descubrió un universo lleno de sorpresas. Encontró sistemas solares súper apretados, como uno con seis planetas girando muy cerca de su estrella, y mundos de un tamaño intermedio entre la Tierra y Neptuno que ni siquiera existen en nuestro vecindario solar. Pero su mayor revelación fue demostrar que nuestra galaxia esconde miles de millones de exoplanetas: ¡en el cielo nocturno hay incluso más planetas que estrellas, y muchos de ellos tienen un tamaño parecido al de la Tierra y están a la distancia justa para tener agua líquida!",
      "En 2013, Kepler sufrió un problema grave: se averió una de sus ruedas de equilibrio y la presión de la luz del Sol comenzó a empujarlo fuera de rumbo. Parecía el fin de su aventura, pero los ingenieros tuvieron una idea brillante: utilizaron el propio empujón de la luz solar para equilibrar la nave, como quien guía un kayak contra la corriente de un río. Así nació su segunda gran etapa, llamada misión K2, con la que logró estudiar más de medio millón de estrellas, explosiones de supernovas y agujeros negros lejanos. Cuando finalmente se retiró en octubre de 2018 tras nueve años en el espacio profundo, Kepler nos había dejado un tesoro gigante de datos y una certeza maravillosa: allá afuera, los planetas están por todas partes."
    ]
  }
];
