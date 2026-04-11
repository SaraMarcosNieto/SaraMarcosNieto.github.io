// ═══════════════════════════════════════════════════════════════
// QUIZ DATA — All 55 questions from RVNE1 + Abstracto1
// ═══════════════════════════════════════════════════════════════

const QUIZ_DATA = {

  // ───────────────────────────────────────────
  // VERBAL (25 questions from RVNE1, Q1–Q25)
  // ───────────────────────────────────────────
  Verbal: [
    {
      id:1,
      context:"La UE es un ente multicultural que aspira a liderar el mundo, tanto desde el punto de vista político como económico. Para que sea posible, todos los estados miembros deben empujar en la misma dirección, especialmente en la situación de crisis económica en la que nos encontramos.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "La crisis económica pasará pronto si los países que forman la UE empujan en la misma dirección.",
        "La crisis económica terminará pronto.",
        "Para superar la crisis económica es conveniente que todos los estados miembros colaboren y empujen en la misma dirección.",
        "La UE lidera el mundo, tanto a nivel económico como político."
      ],
      correctAnswerIndex:2,
      explanation:"La respuesta C es la que más se ajusta al texto. El texto dice que los estados deben empujar en la misma dirección, no que con ello la crisis pasará (A), ni que terminará pronto (B). La UE aspira a liderar, no lidera (D)."
    },
    {
      id:2,
      context:"Los símbolos son importantes y el ámbito de Unión Europea no es una excepción. La bandera europea y el himno europeo ayudan a crear un espíritu de cohesión. Se trata simplemente de ayudar a plasmar en la colectividad un innegable pasado común.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "La bandera europea es más importante que el himno.",
        "La bandera y el himno europeo son importantes.",
        "Los símbolos europeos son imprescindibles.",
        "Los símbolos europeos son imprescindibles para reafirmar nuestro pasado común."
      ],
      correctAnswerIndex:1,
      explanation:"B es correcta. La bandera y el himno son símbolos, y los símbolos son importantes (no imprescindibles). A no se deduce del texto. C y D exageran al decir 'imprescindibles'."
    },
    {
      id:3,
      context:"La próxima presidencia española de la UE tendrá entre sus prioridades la construcción de una sociedad civil europea activa. En ese sentido, el trabajo de las organizaciones de la sociedad civil se considera esencial para salir de la crisis y, al mismo tiempo, impulsar una mayor cohesión social.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "La presidencia española de la UE impulsará el trabajo de las organizaciones sociales.",
        "La presidencia española de la UE perseguirá la salida de la crisis a través de la sociedad civil.",
        "El trabajo de las organizaciones sociales ayudará a la presidencia española a construir una sociedad más activa.",
        "El trabajo de las organizaciones sociales debe servir para ayudar a reforzar la cohesión social."
      ],
      correctAnswerIndex:3,
      explanation:"D es correcta: el texto indica que el trabajo de las organizaciones de la sociedad civil es esencial para impulsar una mayor cohesión social."
    },
    {
      id:4,
      context:"Por vez primera desde el nacimiento de la Unión Europea, la Presidencia se desarrollará de forma colectiva. España, Bélgica y Hungría serán los países encargados de ello en el marco del nuevo sistema de presidencias rotatorias, que durarán dieciocho meses. El programa del trío de presidencias abordará las nuevas etapas de las grandes políticas de la Unión.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "Hasta la entrada en vigor de la Presidencia española, nunca ha habido Presidencias colectivas en la historia de la Unión Europea.",
        "La presidencia española durará dieciocho meses y será apoyada por Bélgica y Hungría.",
        "Las presidencias rotatorias han de abordar todas las grandes políticas de la Unión.",
        "Durante dieciocho meses, España, Bélgica y Hungría acordarán las grandes políticas de la Unión."
      ],
      correctAnswerIndex:0,
      explanation:"A es correcta. El texto dice 'por vez primera' habrá Presidencia colectiva. B es falsa (18 meses son para el trío). C dice 'todas', pero el texto no lo afirma. D confunde 'abordar' con 'acordar'."
    },
    {
      id:5,
      context:"En Geografía se define como desierto la superficie terrestre total o casi totalmente deshabitada en la cual las precipitaciones casi nunca superan las 250 milímetros cúbicos al año y el terreno es árido. Tienen reputación de tener poca vida, pero eso depende de la clase de desierto; en muchos existe vida abundante, la vegetación se adapta a la poca humedad y la fauna usualmente se esconde durante el día para preservar humedad.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "A pesar de lo que se piensa, los desiertos albergan mucha vida.",
        "En los desiertos las precipitaciones son escasas y el terreno es árido.",
        "La fauna de los desiertos está adaptada a la poca humedad.",
        "Los desiertos son zonas completamente deshabitadas y áridas."
      ],
      correctAnswerIndex:1,
      explanation:"B es correcta: el texto define los desiertos como zonas con precipitaciones escasas y terreno árido. A exagera (solo algunos tienen mucha vida). C solo habla de la fauna. D dice 'completamente' pero el texto dice 'total o casi totalmente'."
    },
    {
      id:6,
      context:"Gran parte de los desiertos del mundo se ubican en zonas caracterizadas por las altas presiones constantes, condición que no favorece a la lluvia. En otros casos, los desiertos se deben a su continentalidad, es decir, su distancia del mar, lo que hace que no reciban los vientos húmedos que proceden de los océanos.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "Los desiertos se encuentran en zonas cuyas condiciones no favorecen a la lluvia.",
        "Las altas presiones constantes provocan que las lluvias sean escasas.",
        "Los desiertos se encuentran en zonas alejadas del mar.",
        "Los vientos húmedos del océano impiden la aparición de desiertos."
      ],
      correctAnswerIndex:1,
      explanation:"B es correcta: el texto dice que las altas presiones no favorecen la lluvia (lluvias escasas). A dice 'los desiertos' pero es solo 'gran parte'. C solo aplica a un tipo. D no se deduce del texto."
    },
    {
      id:7,
      context:"Thor Heyerdahl se hizo célebre por la expedición Kon-Tiki de 1948, que navegó por el Pacífico en una balsa construida con troncos, plantas y materiales naturales de Sudamérica. La balsa estaba tripulada por seis hombres, entre ellos el propio Heyerdahl. Recorrieron 4300 millas desde Perú hasta las islas Tuamotu en 101 días. Esta expedición demostró que no había razones técnicas para impedir que los habitantes de América del Sur se hubieran establecido en las islas de Polinesia. No obstante, la mayoría de los antropólogos continúan creyendo que la Polinesia fue colonizada del oeste hacia el este, con migraciones comenzadas desde el continente asiático.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "Heyerdahl demostró que la colonización de Polinesia se produjo desde Sudamérica.",
        "A pesar del hallazgo de Heyerdahl, los antropólogos siguen pensando que la colonización de Polinesia se produjo desde Asia.",
        "Heyerdahl y otros seis hombres consiguieron viajar desde Perú hasta las islas Tuamotu en 101 días.",
        "Thor Heyerdahl construyó una balsa con troncos, plantas y otros materiales en Perú."
      ],
      correctAnswerIndex:1,
      explanation:"B es correcta. A es falsa (solo demostró que era técnicamente posible). C es falsa (eran seis en total, no seis más Heyerdahl). D no se sabe si la construyó en Perú."
    },
    {
      id:8,
      context:"En la antigua Irlanda, \"fianna\" eran las pequeñas bandas de guerreros que vivían apartados de la sociedad en los bosques, principalmente como mercenarios, bandidos o cazadores, pero que sin embargo podían ser convocados por los reyes en tiempos de guerra. En la mitología irlandesa, aparecen en el ciclo de Fenian, donde eran liderados por Fionn mac Cumhaill. Según algunas historias, los fianna eran alojados por la nobleza en invierno para mantener el orden en su nombre, pero durante el verano, estaban obligados a cazar para conseguir comida y pieles.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "Los fianna debían obedecer a los reyes en tiempo de guerra.",
        "Los fianna vivían al margen de la sociedad a pesar del apoyo de los nobles.",
        "La mitología irlandesa presenta a los fianna como bandas de cazadores, pese a que en muchas ocasiones se trataba de bandidos o guerreros.",
        "Los fianna sobrevivían gracias al apoyo de los nobles o bien por sus propios medios, según la época del año."
      ],
      correctAnswerIndex:3,
      explanation:"D es correcta: en invierno eran alojados por la nobleza, y en verano cazaban por sus propios medios."
    },
    {
      id:9,
      context:"Los gorilas se desplazan generalmente a cuatro patas, siendo sus extremidades posteriores, semejantes a brazos, más largas que las anteriores. Los machos miden entre 1,65 y 1,75 metros y pesan entre 140 y 200 Kg. Las hembras pesan aproximadamente la mitad que los machos. Son mayoritariamente vegetarianos, y su dieta se compone fundamentalmente de frutas, hojas, brotes, etc. si bien pueden llegar a consumir algunos insectos. Son un género en peligro de extinción, blanco de cazadores furtivos desde hace décadas. La destrucción de su hábitat y la cacería se han incrementado en los últimos años por los conflictos armados en los países que habita y el creciente interés por el consumo de carnes exóticas.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "La dieta de los gorilas es vegetariana, salvo el consumo de insectos por algunas especies.",
        "El consumo de carnes exóticas amenaza con provocar la extinción de los gorilas.",
        "Las hembras de gorila son notoriamente más livianas que los machos.",
        "Los cazadores furtivos llevan décadas destruyendo el hábitat natural de los gorilas."
      ],
      correctAnswerIndex:2,
      explanation:"C es correcta: las hembras pesan aproximadamente la mitad que los machos, es decir, son notoriamente más livianas."
    },
    {
      id:10,
      context:"Un bioma es un conjunto de ecosistemas con una estructura y organización comunes y extendidas sobre grandes superficies, tanto terrestres como acuáticas. En la Antártida, las condiciones ambientales permiten notar dos tipos de biomas: el terrestre y el marino. El bioma antártico marino se extiende a lo largo de la costa, los bordes de las capas de hielo y las aguas oceánicas cercanas. El bioma terrestre puede encontrarse en el resto del continente, la vegetación se reduce a líquenes y musgos de los cuales se alimentan algunos insectos y ácaros. La altiplanicie interior es considerada el mayor desierto biológico del mundo.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "El bioma antártico terrestre es considerado desértico.",
        "Un bioma es un ecosistema estructurado y de gran extensión.",
        "En los biomas antárticos, la vegetación se reduce a líquenes y musgos.",
        "Los biomas pueden ser tanto terrestres como acuáticos, y en la Antártida hay un ejemplo de ambos."
      ],
      correctAnswerIndex:3,
      explanation:"D es correcta: el texto dice que los biomas se extienden sobre superficies terrestres y acuáticas, y en la Antártida hay dos tipos (terrestre y marino). A es incorrecta porque solo la altiplanicie interior se considera desierto. B confunde 'conjunto de ecosistemas' con 'un ecosistema'. C solo aplica al bioma terrestre."
    },
    {
      id:11,
      context:"Aun involuntariamente, los empleados pueden exponer en su trabajo diario datos e informaciones confidenciales de la empresa. Por ello, las empresas han optado por incluir cláusulas de confidencialidad en los contratos de sus empleados, así como en los que concluyen con aquellas empresas o terceras personas que puedan acceder a información considerada confidencial. Del mismo modo, para evitar las fugas de información que podrían darse cuando el empleado abandona la empresa, pueden incluirse cláusulas de no competencia post-contractual, por las que se fijan períodos determinados durante los que el empleado no podrá trabajar en empresas del mismo sector, a cambio de una compensación económica.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "Las cláusulas de confidencialidad se aplican tanto a empleados como a terceros o a otras empresas.",
        "Las cláusulas de no competencia post-contractual son incompatibles con las cláusulas de confidencialidad.",
        "Las fugas de información se producen sobre todo involuntariamente.",
        "Cuando un empleado abandona la empresa, las cláusulas de confidencialidad le impiden trabajar en empresas del mismo sector durante un periodo."
      ],
      correctAnswerIndex:0,
      explanation:"A es correcta: el texto dice que las cláusulas de confidencialidad se incluyen en contratos de empleados y también de terceros/empresas."
    },
    {
      id:12,
      context:"Históricamente, la cerveza fue desarrollada por los antiguos elamitas, egipcios y sumerios. Las pruebas más antiguas de elaboración de cerveza datan de 3500 a. C. Las antiguas cervezas eran más densas que las actuales, y se elaboraban a partir de panes de cebada poco cocidos. La cerveza llegó a Europa sobre 2400 a. C. de la mano de los celtas. Posteriormente, se ve extendiendo el uso de la malta como ingrediente principal y del lúpulo como aromatizante. En cualquier caso, hubo que esperar hasta el siglo XIX, con la extensión del frío como método de conservación, para poder disfrutar de la cerveza durante todo el año.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "Los celtas aprendieron de los elamitas, egipcios y sumerios la elaboración de la cerveza.",
        "Los celtas cambiaron los panes de cebada por la malta como ingrediente principal de la cerveza.",
        "Solo a partir del siglo XIX se puede disfrutar de la cerveza durante todo el año.",
        "Los celtas utilizaban el lúpulo como aromatizante de la cerveza."
      ],
      correctAnswerIndex:2,
      explanation:"C es correcta: el texto dice que hubo que esperar al siglo XIX con la refrigeración para disfrutar de la cerveza todo el año."
    },
    {
      id:13,
      context:"A diferencia de las bebidas que se obtienen a partir de zumo de frutas fermentado, como es el caso del vino, en la cerveza el cereal de base no contiene originalmente ni agua ni azúcar. Para conseguir azúcar a través del almidón del propio cereal, ha de modificarse este mediante el malteado y sumergirse después en agua a la temperatura adecuada. Al líquido resultante se le añade el lúpulo después de hervirlo, y a continuación se enfría el conjunto, se le añaden levaduras y se inicia la fermentación definitiva.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "El azúcar necesario para elaborar la cerveza se extrae directamente del almidón del propio cereal.",
        "Después del malteado, la mezcla ha de hervirse tras añadirle agua y lúpulo.",
        "El lúpulo y la levadura han de añadirse cuando la mezcla está caliente.",
        "Los componentes básicos de la cerveza no contienen agua ni azúcar, sino que estos se añaden con posterioridad."
      ],
      correctAnswerIndex:3,
      explanation:"D es correcta: el cereal de base no contiene agua ni azúcar; el agua y el azúcar (vía malteado) se añaden después. A es incorrecta porque no se 'extrae' azúcar del almidón. B y C describen mal el orden del proceso."
    },
    {
      id:14,
      context:"La política monetaria es un tipo de política económica que utiliza la cantidad de dinero circulante como variable de control para mantener la estabilidad económica. Para ello se utilizan mecanismos tales como la variación del tipo de interés. Según que se aumente o reduzca la cantidad de dinero, la política monetaria será expansiva o restrictiva. A largo plazo, existe un amplio consenso entre los expertos según el cual la política monetaria no influye en el crecimiento económico, determinado por variables tales como la tecnología o el crecimiento demográfico.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "El crecimiento demográfico tiene mayor influencia en la economía que la política monetaria.",
        "La variación del tipo de interés es un instrumento típico de la política monetaria.",
        "La política monetaria es expansiva o restrictiva según el nivel en el que se aumente la cantidad de dinero.",
        "Los expertos afirman que la política monetaria no influye en el crecimiento económico."
      ],
      correctAnswerIndex:1,
      explanation:"B es la más correcta. El texto dice que la variación del tipo de interés es uno de los mecanismos utilizados."
    },
    {
      id:15,
      context:"Debido a la tradición neutral de Bélgica en los conflictos europeos y aprovechando su situación geográfica central en el continente, su capital, Bruselas, fue designada para acoger los principales organismos de la Unión desde sus inicios. Muchas representaciones tienen su sede diplomática para la UE en esta ciudad, ostentando en ocasiones el rango de embajada. Por todo ello, Bruselas se considera extraoficialmente la capital de la UE.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "Bruselas debe su capitalidad europea a la neutralidad histórica del país.",
        "En Bruselas se encuentran las embajadas de muchos países ante la UE.",
        "Bruselas ha albergado la sede de algunas instituciones europeas desde su creación.",
        "Bruselas se eligió como capital, entre otras razones, por su situación geográfica."
      ],
      correctAnswerIndex:2,
      explanation:"C es correcta: el texto dice que Bruselas acoge los principales organismos de la Unión desde sus inicios."
    },
    {
      id:16,
      context:"El software libre suele estar disponible gratuitamente, o al precio de costo de la distribución a través de otros medios, pero no es obligatorio que sea así, por lo que no hay que asociar software libre a software gratuito, ya que, aun conservando su carácter de libre, puede ser distribuido comercialmente. Del mismo modo, el software gratuito incluye en algunas ocasiones el código fuente, pese a lo cual no necesariamente tiene que ser libre en el mismo sentido, si no se garantizan los derechos de modificación y de distribución de las versiones modificadas del software.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "El software libre no necesariamente tiene que ser gratuito, en cambio el software gratuito siempre se considera software libre.",
        "El software gratuito puede llegar incluso a incluir el código fuente, y solamente en tales casos se considerará software libre.",
        "El software libre puede distribuirse comercialmente sin perder su carácter de libre.",
        "El software libre no garantiza los derechos de modificación y distribución de los programas modificados."
      ],
      correctAnswerIndex:2,
      explanation:"C es correcta: el texto dice que el software libre, aun conservando su carácter de libre, puede ser distribuido comercialmente."
    },
    {
      id:17,
      context:"La Política Agraria Común ha recibido críticas porque parte de la producción agrícola europea se desecha o se exporta a países pobres. Esto provoca que los productos europeos, subvencionados para que el precio baje por debajo de su coste, se vendan a un precio artificialmente bajo, hundiendo las economías de los países pobres. Sin embargo, sin dichas subvenciones, los agricultores europeos no podrían competir con los de otros países cuyas condiciones laborales son pésimas, y que en ocasiones reciben ayudas de sus países de las que no se informa a la OMC.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "Las condiciones laborales de los agricultores europeos son buenas gracias a las subvenciones de la PAC.",
        "Las subvenciones hacen que los productos agrícolas se vendan a precios excesivamente bajos.",
        "Las subvenciones de la PAC se reciben sin informar a la OMC.",
        "Sin las subvenciones de la PAC, las condiciones laborales de los agricultores de los países pobres serían mejores."
      ],
      correctAnswerIndex:1,
      explanation:"B es correcta: el texto dice que los productos se venden a un precio artificialmente bajo por las subvenciones."
    },
    {
      id:18,
      context:"A partir de la década de los noventa, para recibir las ayudas de la PAC es necesario desempeñar una serie de trabajos destinados tanto a mantener el medio ambiente como a mejorar la calidad y la salubridad de los productos, con lo cual se ayuda al mantenimiento sostenible de las tierras de cultivo aun no habiendo producción.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "Las subvenciones de la PAC pueden llegar a percibirse aunque no haya producción.",
        "La política de la PAC ha estado siempre destinada a mantener el medio ambiente.",
        "A partir de la década de los noventa, las subvenciones de la PAC, además de la producción, exigen otros requisitos.",
        "Si no hay mejoras en la calidad y salubridad de los productos no se pueden percibir las subvenciones de la PAC."
      ],
      correctAnswerIndex:0,
      explanation:"A es correcta: el texto dice 'aun no habiendo producción', lo que implica que las ayudas pueden percibirse sin producción."
    },
    {
      id:19,
      context:"Las poblaciones de urogallos se encuentran fundamentalmente en la Europa boreal, y en pequeños enclaves de montaña de zonas templadas, como la cornisa cantábrica, los Pirineos o los Alpes. Biológicamente se le considera una reliquia de la era glaciar, ya que tras este período se fue quedando aislado en zonas de alta montaña o más frías. En España, el urogallo es especie protegida desde 1986, pese a lo cual no ha podido evitarse el descenso paulatino de su población, tanto por la caza furtiva como por la deforestación, el auge de la ganadería en sus áreas de población o la construcción de carreteras.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "Los urogallos han sufrido un creciente aislamiento tanto por la caza furtiva como por la deforestación, entre otras razones.",
        "La población de urogallos en España ha sufrido un fuerte descenso desde 1986.",
        "Tras la era glaciar, los urogallos quedaron reducidos a algunas zonas concretas.",
        "Los urogallos viven en zonas montañosas y templadas."
      ],
      correctAnswerIndex:2,
      explanation:"C es correcta: tras la era glaciar, el urogallo se fue quedando aislado en zonas de alta montaña o más frías."
    },
    {
      id:20,
      context:"El navajo es el pueblo nativo estadounidense más numeroso, con unas 175.000 personas que se reparten entre varios estados del sudoeste de Estados Unidos y el norte de México. Su nombre les fue dado por los conquistadores españoles. Según parece, son originarios de Canadá, pero su vida nómada les llevó a emigrar hasta su ubicación actual, en la que se encuentra la reserva más extensa de cualquier tribu nativa estadounidense. Desde su contacto con los españoles, aprendieron a criar ovejas y a trabajar la plata y las piedras preciosas.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "Los navajos son el pueblo más numeroso de entre los nativos estadounidenses y los que disfrutan de la mayor reserva.",
        "Los navajos fueron descubiertos por primera vez por los españoles.",
        "Las poblaciones de navajos se extienden por Estados Unidos, México y Canadá.",
        "La reserva más poblada de entre las tribus nativas estadounidenses es la ocupada por los navajos."
      ],
      correctAnswerIndex:0,
      explanation:"A es correcta: son los más numerosos y tienen la reserva más extensa."
    },
    {
      id:21,
      context:"La última parte de la Guerra de Troya dio lugar a la Ilíada, de Homero. La historia relata una serie de increíbles aventuras entre las que se cuentan la victoria de Aquiles sobre la reina de las amazonas y su muerte por una flecha en el talón a manos del troyano Paris. Finalmente la ciudad fue capturada cuando los griegos usaron la estratagema de construir un gigantesco caballo hueco de madera y presentarlo a los troyanos como regalo, a la vez que fingían abandonar el sitio de la ciudad. Unos pocos troyanos lograron escapar hacia la actual Italia, comandados por Eneas, como se relata en la Eneida, de Virgilio. Según los historiadores, la Guerra de Troya fue una guerra real disputada sobre 1200 a. C. por el control del actual estrecho de los Dardanelos, entonces llamado Helesponto.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "Los sucesos de la Guerra de Troya inspiraron la Ilíada de Homero y la Eneida de Virgilio.",
        "Los griegos ganaron la guerra tras regalar a los troyanos un caballo de madera.",
        "Los troyanos controlaron durante largo tiempo el estrecho de los Dardanelos.",
        "Aquiles murió a manos de Paris tras derrotar a la reina de las amazonas."
      ],
      correctAnswerIndex:3,
      explanation:"D es correcta: el texto relata la victoria de Aquiles sobre la reina de las amazonas y su posterior muerte a manos de Paris."
    },
    {
      id:22,
      context:"El maltés es una de las dos lenguas oficiales de Malta, junto con el inglés, y es una de las lenguas oficiales de la Unión Europea. Su origen es semítico, pero su evolución ha sido peculiar, ya que ha recibido gran cantidad de préstamos de otras lenguas, por lo que se le suele definir como lengua criolla, e incluso inclasificable para algunos lingüistas. Es la única lengua semítica que se escribe con caracteres latinos. Durante algún tiempo se especuló con un posible origen fenicio, pero esta teoría se basaba más en temas políticos que lingüísticos.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "El maltés es una lengua inclasificable, cuyo origen no es bien conocido.",
        "El maltés, a pesar de ser semítico, utiliza el alfabeto latino.",
        "El maltés tiene origen semítico, pero muchos préstamos fenicios.",
        "Por la gran cantidad de préstamos que ha recibido de otras lenguas, el maltés se clasifica entre las lenguas criollas."
      ],
      correctAnswerIndex:1,
      explanation:"B es correcta: el maltés es semítico y es la única lengua semítica que se escribe con caracteres latinos."
    },
    {
      id:23,
      context:"Los aeróstatos, también denominados globos aerostáticos, son aeronaves no propulsadas que vuelan sirviéndose del principio de los fluidos formulado por Arquímedes, considerando que el aire es un fluido, en este caso. Se les conoce como globos porque están compuestos por una bolsa que encierra una masa de gas más ligero que el aire. En algunos casos, se puede controlar la elevación, pero habitualmente los globos se dejan llevar por las corrientes. El gas que contiene puede ser helio o hidrógeno, aunque es más común la utilización del helio, pese a ser más pesado, al ser el hidrógeno inflamable.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "El hidrógeno es menos recomendable que el helio para los aeróstatos ya que es más pesado e inflamable.",
        "Según el principio de Arquímedes, el aire se considera como un fluido.",
        "Para que un globo pueda volar, el gas que contiene debe ser más ligero que el aire.",
        "Al dirigir un globo, se controla la elevación pero no la dirección."
      ],
      correctAnswerIndex:2,
      explanation:"C es correcta: el texto dice que la bolsa encierra una masa de gas más ligero que el aire."
    },
    {
      id:24,
      context:"En 1971, Francis Ford Coppola se embarcó en el proyecto que acabaría por cambiarle la vida. Aunque en un principio mostró reticencias, acabó por aceptar adaptar una serie de novelas de Mario Puzo, dando origen a la famosa saga de \"El Padrino\". La primera parte se convirtió en la película más taquillera de la historia y ganadora de varios premios Óscar. Sin embargo, Coppola tuvo que lidiar con los directivos de la productora, que no aceptaban a los actores elegidos por él, para que no le sustituyeran por otro director durante las primeras semanas de rodaje.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "Francis Ford Coppola no aceptó que la productora del film \"El Padrino\" eligiera en su lugar a los actores.",
        "Francis Ford Coppola cambió su vida para poder adaptar las novelas de \"El Padrino\".",
        "Francis Ford Coppola adaptó una serie de novelas de Mario Puzo al cine, pese a las reticencias de este.",
        "En un principio, Coppola estuvo cerca de ser sustituido como director de \"El Padrino\"."
      ],
      correctAnswerIndex:3,
      explanation:"D es correcta: Coppola tuvo que lidiar con los directivos para que no le sustituyeran por otro director."
    },
    {
      id:25,
      context:"La República de Chipre es un Estado internacionalmente reconocido, pero solamente controla los dos tercios del sur de la isla. El tercio norte fue ocupado por Turquía en 1974, y en él se instauró la República Turca del Norte de Chipre, únicamente reconocido por la propia Turquía. Chipre obtuvo su independencia de los británicos en 1960, e instauró una constitución que repartía los poderes entre las comunidades griega y turca, pero cuyos complejos mecanismos dificultaban el normal funcionamiento de las estructuras del Estado. Un golpe de Estado pro-griego en 1974 provocó la invasión turca del norte de la isla y la división del país, que aún continúa pese a los esfuerzos de la Unión Europea por conseguir una plena reunificación. Sin embargo, los diferentes planes ideados hasta ahora han sido rechazados por la población chipriota.",
      questionText:"¿Cuál de las siguientes afirmaciones responde mejor al texto?",
      questionImage:null,
      options:[
        "La población chipriota es contraria a la reunificación del país.",
        "La República Turca del Norte de Chipre no está reconocida oficialmente por las organizaciones internacionales.",
        "Tras el conflicto de 1974, griegos y turcos se repartieron la isla.",
        "La constitución otorgada por los británicos incluía unos mecanismos complejos de reparto del poder."
      ],
      correctAnswerIndex:1,
      explanation:"B es correcta: solo Turquía reconoce la República Turca del Norte de Chipre, que no es una organización internacional."
    }
  ],

  // ───────────────────────────────────────────
  // NUMÉRICO (15 questions from RVNE1, Q26–Q40)
  // ───────────────────────────────────────────
  "Numérico": [
    {
      id:26,
      context:`<table><tr><th>Producción acero (miles t)</th><th>Luxemburgo</th><th>Francia</th><th>España</th><th>Países Bajos</th><th>Reino Unido</th></tr><tr><td>1999</td><td>90</td><td>500</td><td>400</td><td>600</td><td>1000</td></tr><tr><td>2000</td><td>120</td><td>800</td><td>750</td><td>620</td><td>900</td></tr><tr><td>2001</td><td>150</td><td>950</td><td>920</td><td>620</td><td>850</td></tr><tr><td>2002</td><td>180</td><td>1200</td><td>1000</td><td>620</td><td>800</td></tr><tr><td>2003</td><td>220</td><td>1100</td><td>1300</td><td>700</td><td>750</td></tr></table>`,
      questionText:"¿En qué año se produjo más cantidad de acero total?",
      questionImage:null,
      options:["2000","2001","2002","2003"],
      correctAnswerIndex:3,
      explanation:"2003: 220+1100+1300+700+750 = 4070, que es el mayor total."
    },
    {
      id:27,
      context:`<table><tr><th>Producción acero (miles t)</th><th>Luxemburgo</th><th>Francia</th><th>España</th><th>Países Bajos</th><th>Reino Unido</th></tr><tr><td>1999</td><td>90</td><td>500</td><td>400</td><td>600</td><td>1000</td></tr><tr><td>2003</td><td>220</td><td>1100</td><td>1300</td><td>700</td><td>750</td></tr></table>`,
      questionText:"¿En qué país ha sido mayor el incremento porcentual de la producción entre 1999 y 2003?",
      questionImage:null,
      options:["Luxemburgo","Francia","España","Países Bajos"],
      correctAnswerIndex:2,
      explanation:"España: (1300−400)/400 = 225%. Luxemburgo: 144%. Francia: 120%. Países Bajos: 16%."
    },
    {
      id:28,
      context:`<table><tr><th>Producción acero (miles t)</th><th>Luxemburgo</th><th>Francia</th><th>España</th><th>Países Bajos</th></tr><tr><td>1999</td><td>90</td><td>500</td><td>400</td><td>600</td></tr><tr><td>2003</td><td>220</td><td>1100</td><td>1300</td><td>700</td></tr></table>`,
      questionText:"¿En qué país se ha incrementado menos la producción en términos reales?",
      questionImage:null,
      options:["Luxemburgo","Francia","España","Países Bajos"],
      correctAnswerIndex:3,
      explanation:"Países Bajos: 700−600 = 100 (el menor incremento absoluto). Luxemburgo: 130, Francia: 600, España: 900."
    },
    {
      id:29,
      context:`<table><tr><th>Producción acero (miles t)</th><th>Francia</th><th>España</th><th>Países Bajos</th><th>Reino Unido</th></tr><tr><td>2001</td><td>950</td><td>920</td><td>620</td><td>850</td></tr><tr><td>2002</td><td>1200</td><td>1000</td><td>620</td><td>800</td></tr><tr><td>2003</td><td>1100</td><td>1300</td><td>700</td><td>750</td></tr></table>`,
      questionText:"¿Qué país obtuvo mayor producción total entre 2001 y 2003?",
      questionImage:null,
      options:["Francia","España","Países Bajos","Reino Unido"],
      correctAnswerIndex:0,
      explanation:"Francia: 950+1200+1100 = 3250. España: 920+1000+1300 = 3220."
    },
    {
      id:30,
      context:`Producción en 2003 (miles t): Francia 1100, España 1300, Países Bajos 700, Reino Unido 750. El kg de acero neerlandés y británico se vende al doble del precio del francés y español.`,
      questionText:"¿Qué país ha obtenido mayores beneficios por la venta de su producción en 2003?",
      questionImage:null,
      options:["Francia","España","Países Bajos","Reino Unido"],
      correctAnswerIndex:3,
      explanation:"Valor: Francia 1100, España 1300, P. Bajos 700×2=1400, R. Unido 750×2=1500. Reino Unido tiene el mayor valor."
    },
    {
      id:31,
      context:`<table><tr><th>Gasto turistas en España (M€)</th><th>Reino Unido</th><th>Alemania</th><th>Países Bajos</th><th>Francia</th><th>Suecia</th></tr><tr><td>Junio</td><td>800</td><td>1100</td><td>800</td><td>600</td><td>1000</td></tr><tr><td>Julio</td><td>1000</td><td>1200</td><td>1300</td><td>600</td><td>1500</td></tr><tr><td>Agosto</td><td>1500</td><td>1300</td><td>1400</td><td>700</td><td>1200</td></tr><tr><td>Septiembre</td><td>900</td><td>1150</td><td>1100</td><td>500</td><td>1300</td></tr></table><p>Hombres: 60% del gasto. Mujeres: 40%.</p>`,
      questionText:"¿Cuál de estos colectivos de turistas gasta más dinero en agosto?",
      questionImage:null,
      options:["Mujeres británicas","Hombres alemanes","Turistas franceses","Hombres suecos"],
      correctAnswerIndex:1,
      explanation:"Mujeres brit.: 40%×1500=600. Hombres alem.: 60%×1300=780. Franceses: 700. Hombres suecos: 60%×1200=720."
    },
    {
      id:32,
      context:`<table><tr><th>Gasto turistas en España (M€)</th><th>Reino Unido</th><th>Alemania</th><th>Países Bajos</th><th>Suecia</th></tr><tr><td>Jun</td><td>800</td><td>1100</td><td>800</td><td>1000</td></tr><tr><td>Jul</td><td>1000</td><td>1200</td><td>1300</td><td>1500</td></tr><tr><td>Ago</td><td>1500</td><td>1300</td><td>1400</td><td>1200</td></tr><tr><td>Sep</td><td>900</td><td>1150</td><td>1100</td><td>1300</td></tr></table>`,
      questionText:"¿De qué país provienen los turistas que más dinero gastan durante todo el período estival?",
      questionImage:null,
      options:["Reino Unido","Alemania","Países Bajos","Suecia"],
      correctAnswerIndex:3,
      explanation:"UK: 4200, Alemania: 4750, P. Bajos: 4600, Suecia: 5000."
    },
    {
      id:33,
      context:`Gasto alemanes en julio: 1200 M€. Gasto franceses en julio: 600 M€. Hombres: 60%, Mujeres: 40%.`,
      questionText:"¿En qué porcentaje supera el gasto de las mujeres alemanas en julio al de los hombres franceses?",
      questionImage:null,
      options:["25%","33%","40%","50%"],
      correctAnswerIndex:1,
      explanation:"Mujeres alemanas: 40%×1200 = 480. Hombres franceses: 60%×600 = 360. (480−360)/360 = 33%."
    },
    {
      id:34,
      context:`<table><tr><th>Gasto turistas (M€)</th><th>R.Unido</th><th>Alemania</th><th>P.Bajos</th><th>Francia</th><th>Suecia</th></tr><tr><td>Junio</td><td>800</td><td>1100</td><td>800</td><td>600</td><td>1000</td></tr><tr><td>Julio</td><td>1000</td><td>1200</td><td>1300</td><td>600</td><td>1500</td></tr><tr><td>Agosto</td><td>1500</td><td>1300</td><td>1400</td><td>700</td><td>1200</td></tr><tr><td>Septiembre</td><td>900</td><td>1150</td><td>1100</td><td>500</td><td>1300</td></tr></table>`,
      questionText:"¿En qué mes es mayor el gasto total realizado por los turistas?",
      questionImage:null,
      options:["Junio","Julio","Agosto","Septiembre"],
      correctAnswerIndex:2,
      explanation:"Agosto: 1500+1300+1400+700+1200 = 6100."
    },
    {
      id:35,
      context:`Gasto suecos en agosto: 1200 M€. Gasto holandeses en junio: 800 M€.`,
      questionText:"¿En qué porcentaje es mayor el gasto de los turistas suecos en agosto que el de los turistas holandeses en junio?",
      questionImage:null,
      options:["30%","40%","50%","60%"],
      correctAnswerIndex:2,
      explanation:"(1200−800)/800 = 50%."
    },
    {
      id:36,
      context:`<table><tr><th>País</th><th>Exportaciones (M€)</th><th>Importaciones (M€)</th><th>% Export/Producción</th></tr><tr><td>España</td><td>5800</td><td>7200</td><td>33%</td></tr><tr><td>Francia</td><td>8900</td><td>6500</td><td>25%</td></tr><tr><td>Italia</td><td>6150</td><td>7000</td><td>35%</td></tr><tr><td>Alemania</td><td>12400</td><td>8500</td><td>18%</td></tr><tr><td>Grecia</td><td>3800</td><td>5900</td><td>45%</td></tr></table>`,
      questionText:"¿En qué país es más desfavorable la balanza comercial en términos reales?",
      questionImage:null,
      options:["España","Francia","Italia","Grecia"],
      correctAnswerIndex:3,
      explanation:"Grecia: 3800−5900 = −2100 (el déficit más grande)."
    },
    {
      id:37,
      context:`<table><tr><th>País</th><th>Exportaciones (M€)</th><th>% Export/Producción</th></tr><tr><td>España</td><td>5800</td><td>33%</td></tr><tr><td>Francia</td><td>8900</td><td>25%</td></tr><tr><td>Italia</td><td>6150</td><td>35%</td></tr><tr><td>Grecia</td><td>3800</td><td>45%</td></tr></table>`,
      questionText:"¿En qué país ha sido mayor la producción total?",
      questionImage:null,
      options:["España","Francia","Italia","Grecia"],
      correctAnswerIndex:1,
      explanation:"Francia: 8900/0.25 = 35600. España: 17575. Italia: 17571. Grecia: 8444."
    },
    {
      id:38,
      context:`España: Exportaciones 5800 M€ (33% de producción). Importaciones 7200 M€.`,
      questionText:"¿Qué porcentaje de la producción suponen las importaciones españolas?",
      questionImage:null,
      options:["41%","45%","48%","52%"],
      correctAnswerIndex:0,
      explanation:"Producción España = 5800/0.33 ≈ 17575. 7200/17575 ≈ 41%."
    },
    {
      id:39,
      context:`<table><tr><th>País</th><th>Exportaciones (M€)</th><th>Importaciones (M€)</th></tr><tr><td>España</td><td>5800</td><td>7200</td></tr><tr><td>Francia</td><td>8900</td><td>6500</td></tr><tr><td>Italia</td><td>6150</td><td>7000</td></tr><tr><td>Alemania</td><td>12400</td><td>8500</td></tr><tr><td>Grecia</td><td>3800</td><td>5900</td></tr></table>`,
      questionText:"¿A cuánto asciende el beneficio total de la balanza comercial del conjunto de estos países?",
      questionImage:null,
      options:["1520","1870","1950","2100"],
      correctAnswerIndex:2,
      explanation:"−1400+2400−850+3900−2100 = 1950."
    },
    {
      id:40,
      context:`Francia: Exportaciones 8900 M€. Alemania: Exportaciones 12400 M€ (18% de producción).`,
      questionText:"¿Qué porcentaje supondrían las exportaciones francesas sobre la producción total alemana?",
      questionImage:null,
      options:["11%","13%","15%","18%"],
      correctAnswerIndex:1,
      explanation:"Producción Alemania = 12400/0.18 ≈ 68889. 8900/68889 ≈ 13%."
    }
  ],

  // ───────────────────────────────────────────
  // ABSTRACTO (15 questions from Abstracto1)
  // Place screenshot images in ./images/ folder
  // ───────────────────────────────────────────
  Abstracto: [
    {id:1, context:"", questionText:"¿Cuál es el siguiente diagrama de la serie?", questionImage:"./images/abs_q1.png", options:["A","B","C","D","E"], correctAnswerIndex:1, explanation:"A cada figura blanca le sigue la misma figura en negro (series de 2). El último es un cuadrado blanco → sigue cuadrado negro. Respuesta B."},
    {id:2, context:"", questionText:"¿Cuál es el siguiente diagrama de la serie?", questionImage:"./images/abs_q2.png", options:["A","B","C","D","E"], correctAnswerIndex:2, explanation:"El círculo blanco describe una diagonal. Tras llegar a la esquina superior derecha, empieza la diagonal contraria. Le corresponde la esquina inferior derecha. Respuesta C."},
    {id:3, context:"", questionText:"¿Cuál es el siguiente diagrama de la serie?", questionImage:"./images/abs_q3.png", options:["A","B","C","D","E"], correctAnswerIndex:3, explanation:"Series de 2: flecha doble vertical blanca → flecha doble horizontal negra en la misma posición. Respuesta D."},
    {id:4, context:"", questionText:"¿Cuál es el siguiente diagrama de la serie?", questionImage:"./images/abs_q4.png", options:["A","B","C","D","E"], correctAnswerIndex:0, explanation:"El cuadrado negro se desplaza por el borde izquierdo de arriba a abajo, luego invierte. Toca esquina superior izquierda. Respuesta A."},
    {id:5, context:"", questionText:"¿Cuál es el siguiente diagrama de la serie?", questionImage:"./images/abs_q5.png", options:["A","B","C","D","E"], correctAnswerIndex:1, explanation:"Serie de 3: triángulo blanco grande → negro grande → negro pequeño. La serie se repite con círculos. Toca círculo negro pequeño. Respuesta B."},
    {id:6, context:"", questionText:"¿Cuál es el siguiente diagrama de la serie?", questionImage:"./images/abs_q6.png", options:["A","B","C","D","E"], correctAnswerIndex:4, explanation:"Impares: estrella blanca borde izquierdo bajando. Pares: estrella negra misma altura borde derecho. Toca estrella negra esquina inferior derecha. Respuesta E."},
    {id:7, context:"", questionText:"¿Cuál es el siguiente diagrama de la serie?", questionImage:"./images/abs_q7.png", options:["A","B","C","D","E"], correctAnswerIndex:0, explanation:"Tres figuras negras, luego se invierte orden y color. Toca círculo blanco centrado. Respuesta A."},
    {id:8, context:"", questionText:"¿Cuál es el siguiente diagrama de la serie?", questionImage:"./images/abs_q8.png", options:["A","B","C","D","E"], correctAnswerIndex:2, explanation:"Serie de 3 con cuadrado en borde superior → se convierte en círculo en borde inferior. Toca círculo blanco esquina inferior derecha. Respuesta C."},
    {id:9, context:"", questionText:"¿Cuál es el siguiente diagrama de la serie?", questionImage:"./images/abs_q9.png", options:["A","B","C","D","E"], correctAnswerIndex:1, explanation:"Flecha blanca arriba se desplaza izq→der. Desde el 4º es negra hacia abajo, mismo desplazamiento. Toca flecha negra abajo, borde derecho. Respuesta B."},
    {id:10, context:"", questionText:"¿Cuál es el siguiente diagrama de la serie?", questionImage:"./images/abs_q10.png", options:["A","B","C","D","E"], correctAnswerIndex:3, explanation:"Series de 2: cuadrado blanco → cuadrado negro misma posición. Último blanco en esquina superior derecha → negro ahí. Respuesta D."},
    {id:11, context:"", questionText:"¿Cuál es el siguiente diagrama de la serie?", questionImage:"./images/abs_q11.png", options:["A","B","C","D","E"], correctAnswerIndex:0, explanation:"Serie cuadrado-triángulo-estrella. Primera serie negra con estrella blanca; segunda serie blanca con estrella negra. Respuesta A."},
    {id:12, context:"", questionText:"¿Cuál es el siguiente diagrama de la serie?", questionImage:"./images/abs_q12.png", options:["A","B","C","D","E"], correctAnswerIndex:3, explanation:"Rombo blanco izq→der, luego rombo negro abajo→arriba. Toca rombo negro grande borde superior. Respuesta D."},
    {id:13, context:"", questionText:"¿Cuál es el siguiente diagrama de la serie?", questionImage:"./images/abs_q13.png", options:["A","B","C","D","E"], correctAnswerIndex:2, explanation:"Figura central se repite 2 veces (negra luego blanca). Toca cuadrado blanco con triángulo negro. Respuesta C."},
    {id:14, context:"", questionText:"¿Cuál es el siguiente diagrama de la serie?", questionImage:"./images/abs_q14.png", options:["A","B","C","D","E"], correctAnswerIndex:4, explanation:"Dos rombos cambian color: ♦♦ → ♦◇ → ◇◇. Se repite con círculos: ●● → ●○ → ○○. Respuesta E."},
    {id:15, context:"", questionText:"¿Cuál es el siguiente diagrama de la serie?", questionImage:"./images/abs_q15.png", options:["A","B","C","D","E"], correctAnswerIndex:0, explanation:"El color se invierte entre negro y blanco, y cada flecha blanca apunta en dirección opuesta a la negra anterior. La última negra apunta abajo → blanca arriba. Respuesta A."}
  ]
};


// ═══════════════════════════════════════════════════════════════
// APP STATE
// ═══════════════════════════════════════════════════════════════

let state = {
  selectedCat: null,
  timerMins: 60,          // default recommended time
  questions: [],           // shuffled questions for current test
  answers: [],             // user's selected index per question (null = unanswered)
  currentQ: 0,
  timerInterval: null,
  secondsLeft: 0
};

// ═══════════════════════════════════════════════════════════════
// DOM REFS
// ═══════════════════════════════════════════════════════════════

const $ = id => document.getElementById(id);
const screens = { dashboard: $('dashboard'), test: $('test'), results: $('results') };

// ═══════════════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════════════

/** Fisher-Yates shuffle (shuffles questions, not options) */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Format seconds → mm:ss */
function fmtTime(s) {
  if (s <= 0) return '00:00';
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
}

/** Switch visible screen */
function showScreen(name) {
  Object.values(screens).forEach(el => el.classList.remove('active'));
  screens[name].classList.add('active');
  window.scrollTo(0, 0);
}

// ═══════════════════════════════════════════════════════════════
// LOCAL STORAGE — HIGH SCORES
// ═══════════════════════════════════════════════════════════════

function getHighScore(cat) {
  return localStorage.getItem('epso_hs_' + cat) || '—';
}
function setHighScore(cat, score, total) {
  const key = 'epso_hs_' + cat;
  const prev = localStorage.getItem(key);
  const label = `${score}/${total}`;
  if (!prev || score > parseInt(prev)) {
    localStorage.setItem(key, score);
    localStorage.setItem(key + '_label', label);
  }
}
function getHighScoreLabel(cat) {
  return localStorage.getItem('epso_hs_' + cat + '_label') || '—';
}

// ═══════════════════════════════════════════════════════════════
// DASHBOARD INIT
// ═══════════════════════════════════════════════════════════════

function initDashboard() {
  // Render high scores
  const strip = $('scoresStrip');
  strip.innerHTML = ['Verbal','Numérico','Abstracto'].map(cat =>
    `<div class="score-chip"><strong>${getHighScoreLabel(cat)}</strong>${cat}</div>`
  ).join('');

  // Question counts
  for (const cat of Object.keys(QUIZ_DATA)) {
    const el = document.getElementById('count' + cat);
    if (el) el.textContent = QUIZ_DATA[cat].length + ' preguntas';
  }

  // Category card selection
  document.querySelectorAll('.cat-card').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-card').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.selectedCat = btn.dataset.cat;
      $('startBtn').disabled = false;
    });
  });

  // Timer selection
  document.querySelectorAll('.timer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.timer-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.timerMins = parseInt(btn.dataset.mins);
    });
  });

  // Start
  $('startBtn').addEventListener('click', startTest);

  // Back from results
  $('backBtn').addEventListener('click', () => {
    initDashboard();
    showScreen('dashboard');
  });
}

// ═══════════════════════════════════════════════════════════════
// START TEST
// ═══════════════════════════════════════════════════════════════

function startTest() {
  const cat = state.selectedCat;
  state.questions = shuffle(QUIZ_DATA[cat]);
  state.answers = new Array(state.questions.length).fill(null);
  state.currentQ = 0;

  // Timer
  $('testCatLabel').textContent = cat;
  if (state.timerMins > 0) {
    state.secondsLeft = state.timerMins * 60;
    $('testTimer').textContent = fmtTime(state.secondsLeft);
    $('testTimer').classList.remove('warn');
    state.timerInterval = setInterval(() => {
      state.secondsLeft--;
      $('testTimer').textContent = fmtTime(state.secondsLeft);
      if (state.secondsLeft <= 60) $('testTimer').classList.add('warn');
      if (state.secondsLeft <= 0) { clearInterval(state.timerInterval); submitTest(); }
    }, 1000);
  } else {
    $('testTimer').textContent = '∞';
  }

  // Nav buttons
  $('prevBtn').addEventListener('click', () => navigateQ(-1));
  $('nextBtn').addEventListener('click', () => navigateQ(1));
  $('submitBtn').addEventListener('click', () => {
    if (confirm('¿Estás segura de que quieres entregar el test?')) submitTest();
  });

  renderQuestion();
  showScreen('test');
}

// ═══════════════════════════════════════════════════════════════
// RENDER QUESTION
// ═══════════════════════════════════════════════════════════════

function renderQuestion() {
  const q = state.questions[state.currentQ];
  const idx = state.currentQ;
  const total = state.questions.length;

  // Progress
  $('testProgress').textContent = `${idx + 1} / ${total}`;

  // Context
  const ctxEl = $('contextBlock');
  if (q.context) { ctxEl.innerHTML = q.context; ctxEl.style.display = ''; }
  else { ctxEl.innerHTML = ''; ctxEl.style.display = 'none'; }

  // Image
  const imgWrap = $('questionImageWrap');
  const imgEl = $('questionImage');
  if (q.questionImage) {
    imgEl.src = q.questionImage;
    imgEl.alt = 'Diagrama pregunta ' + q.id;
    imgWrap.style.display = '';
  } else {
    imgWrap.style.display = 'none';
  }

  // Question text
  $('questionText').textContent = q.questionText;

  // Options
  const list = $('optionsList');
  list.innerHTML = '';
  const letters = ['A','B','C','D','E'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn' + (state.answers[idx] === i ? ' selected' : '');
    btn.textContent = letters[i] + ') ' + opt;
    btn.addEventListener('click', () => selectOption(i));
    list.appendChild(btn);
  });

  // Nav visibility
  $('prevBtn').style.visibility = idx === 0 ? 'hidden' : 'visible';
  $('nextBtn').style.display = idx === total - 1 ? 'none' : '';
  $('submitBtn').style.display = idx === total - 1 ? '' : 'none';
}

function selectOption(i) {
  state.answers[state.currentQ] = i;
  renderQuestion();
}

function navigateQ(dir) {
  state.currentQ = Math.max(0, Math.min(state.questions.length - 1, state.currentQ + dir));
  renderQuestion();
}

// ═══════════════════════════════════════════════════════════════
// SUBMIT & RESULTS
// ═══════════════════════════════════════════════════════════════

function submitTest() {
  clearInterval(state.timerInterval);

  const qs = state.questions;
  const ans = state.answers;
  let correct = 0;
  qs.forEach((q, i) => { if (ans[i] === q.correctAnswerIndex) correct++; });

  // Save high score
  setHighScore(state.selectedCat, correct, qs.length);

  // Score ring
  const pct = Math.round((correct / qs.length) * 100);
  $('scoreRing').style.setProperty('--pct', pct + '%');
  $('scoreNum').textContent = `${correct}/${qs.length}`;
  $('scoreLabel').textContent = pct >= 70 ? '¡Buen resultado!' : pct >= 50 ? 'Sigue practicando' : 'Ánimo, a por ello';

  // Review list
  const letters = ['A','B','C','D','E'];
  const reviewEl = $('reviewList');
  reviewEl.innerHTML = '';
  qs.forEach((q, i) => {
    const card = document.createElement('div');
    card.className = 'review-card';

    let qHtml = `<div class="rc-q">${i+1}. ${q.questionText}`;
    if (q.questionImage) qHtml += `<img src="${q.questionImage}" alt="Diagrama">`;
    qHtml += `</div>`;

    q.options.forEach((opt, j) => {
      let cls = '';
      if (j === q.correctAnswerIndex) cls = 'correct';
      else if (j === ans[i] && ans[i] !== q.correctAnswerIndex) cls = 'wrong';
      qHtml += `<div class="rc-opt ${cls}">${letters[j]}) ${opt}</div>`;
    });

    if (ans[i] === null) {
      qHtml += `<div class="rc-opt wrong">Sin respuesta</div>`;
    }

    qHtml += `<div class="rc-explanation"><strong>Explicación:</strong> ${q.explanation}</div>`;
    card.innerHTML = qHtml;
    reviewEl.appendChild(card);
  });

  showScreen('results');
}

// ═══════════════════════════════════════════════════════════════
// BOOT
// ═══════════════════════════════════════════════════════════════

initDashboard();
