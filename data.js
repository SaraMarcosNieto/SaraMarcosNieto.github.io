// ═══════════════════════════════════════════════════════════════
// data.js — Quiz data for EPSO AD5 practice
//
// HOW TO ADD A NEW TEST:
//   1. Add a new object to the "categories" array below.
//   2. Give it a unique "name" (this is the label shown on the dashboard).
//   3. Fill in the "questions" array following the schema:
//        { id, context, questionText, options, correctAnswerIndex, explanation }
//   4. context supports Markdown (especially tables). Leave "" if none.
//   5. options are strings like "A) ...", "B) ...", etc.
//   6. correctAnswerIndex is 0-based (0 = first option).
// ═══════════════════════════════════════════════════════════════

const quizData = {
  "categories": [

    // ─────────────────────────────────────────────────────────
    // VERBAL — 25 questions (RVNE1 Q1–Q25)
    // ─────────────────────────────────────────────────────────
    {
      "name": "Verbal",
      "questions": [
        {
          "id": 1,
          "context": "La UE es un ente multicultural que aspira a liderar el mundo, tanto desde el punto de vista político como económico. Para que sea posible, todos los estados miembros deben empujar en la misma dirección, especialmente en la situación de crisis económica en la que nos encontramos.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) La crisis económica pasará pronto si los países que forman la UE empujan en la misma dirección.",
            "B) La crisis económica terminará pronto.",
            "C) Para superar la crisis económica es conveniente que todos los estados miembros colaboren y empujen en la misma dirección.",
            "D) La UE lidera el mundo, tanto a nivel económico como político."
          ],
          "correctAnswerIndex": 2,
          "explanation": "La respuesta correcta es la C porque es la que más se ajusta al texto. La crisis no terminará si todos los estados miembros actúan en la misma dirección, por lo que la respuesta A es falsa. La respuesta B también es falsa, el texto no dice eso. La UE no lidera el mundo sino que aspira a liderar el mundo, por lo que la D también es incorrecta."
        },
        {
          "id": 2,
          "context": "Los símbolos son importantes y el ámbito de Unión Europea no es una excepción. La bandera europea y el himno europeo ayudan a crear un espíritu de cohesión. Se trata simplemente de ayudar a plasmar en la colectividad un innegable pasado común.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) La bandera europea es más importante que el himno.",
            "B) La bandera y el himno europeo son importantes.",
            "C) Los símbolos europeos son imprescindibles.",
            "D) Los símbolos europeos son imprescindibles para reafirmar nuestro pasado común."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La respuesta correcta es la B. La bandera y el himno son símbolos y los símbolos, según el texto son importantes. Por lo tanto, la bandera y el himno son importantes, pero no esenciales."
        },
        {
          "id": 3,
          "context": "La próxima presidencia española de la UE tendrá entre sus prioridades la construcción de una sociedad civil europea activa. En ese sentido, el trabajo de las organizaciones de la sociedad civil se considera esencial para salir de la crisis y, al mismo tiempo, impulsar una mayor cohesión social.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) La presidencia española de la UE impulsará el trabajo de las organizaciones sociales.",
            "B) La presidencia española de la UE perseguirá la salida de la crisis a través de la sociedad civil.",
            "C) El trabajo de las organizaciones sociales ayudará a la presidencia española a construir una sociedad más activa.",
            "D) El trabajo de las organizaciones sociales debe servir para ayudar a reforzar la cohesión social."
          ],
          "correctAnswerIndex": 3,
          "explanation": "La respuesta D es correcta porque como se explica en el texto \"el trabajo de las organizaciones de la sociedad civil se considera esencial para salir de la crisis y, al mismo tiempo, impulsar una mayor cohesión social\"."
        },
        {
          "id": 4,
          "context": "Por vez primera desde el nacimiento de la Unión Europea, la Presidencia se desarrollará de forma colectiva. España, Bélgica y Hungría serán los países encargados de ello en el marco del nuevo sistema de presidencias rotatorias, que durarán dieciocho meses. El programa del trío de presidencias abordará las nuevas etapas de las grandes políticas de la Unión.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) Hasta la entrada en vigor de la Presidencia española, nunca ha habido Presidencias colectivas en la historia de la Unión Europea.",
            "B) La presidencia española durará dieciocho meses y será apoyada por Bélgica y Hungría.",
            "C) Las presidencias rotatorias han de abordar todas las grandes políticas de la Unión.",
            "D) Durante dieciocho meses, España, Bélgica y Hungría acordarán las grandes políticas de la Unión."
          ],
          "correctAnswerIndex": 0,
          "explanation": "La correcta es la A, puesto que el texto explica claramente que, por primera vez desde que la UE nació, la Presidencia se llevará a cabo colectivamente. B es incorrecta porque los 18 meses son para el trío. C añade 'todas'. D confunde 'abordar' con 'acordar'."
        },
        {
          "id": 5,
          "context": "En Geografía se define como desierto la superficie terrestre total o casi totalmente deshabitada en la cual las precipitaciones casi nunca superan las 250 milímetros cúbicos al año y el terreno es árido. Tienen reputación de tener poca vida, pero eso depende de la clase de desierto; en muchos existe vida abundante, la vegetación se adapta a la poca humedad y la fauna usualmente se esconde durante el día para preservar humedad.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) A pesar de lo que se piensa, los desiertos albergan mucha vida.",
            "B) En los desiertos las precipitaciones son escasas y el terreno es árido.",
            "C) La fauna de los desiertos está adaptada a la poca humedad.",
            "D) Los desiertos son zonas completamente deshabitadas y áridas."
          ],
          "correctAnswerIndex": 1,
          "explanation": "El texto define las características de un desierto como aquellas superficies en que las precipitaciones casi nunca superan las 250 mm³ al año y el terreno es árido. 250 mm³ es una cantidad escasa, por lo que la respuesta B es correcta."
        },
        {
          "id": 6,
          "context": "Gran parte de los desiertos del mundo se ubican en zonas caracterizadas por las altas presiones constantes, condición que no favorece a la lluvia. En otros casos, los desiertos se deben a su continentalidad, es decir, su distancia del mar, lo que hace que no reciban los vientos húmedos que proceden de los océanos.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) Los desiertos se encuentran en zonas cuyas condiciones no favorecen a la lluvia.",
            "B) Las altas presiones constantes provocan que las lluvias sean escasas.",
            "C) Los desiertos se encuentran en zonas alejadas del mar.",
            "D) Los vientos húmedos del océano impiden la aparición de desiertos."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La respuesta B es correcta. El texto dice que las altas presiones no favorecen a la lluvia, es decir, la idea es la misma expresada de modo diferente. A dice 'los desiertos' pero es solo 'gran parte'. C solo aplica a un tipo. D no se deduce."
        },
        {
          "id": 7,
          "context": "Thor Heyerdahl se hizo célebre por la expedición Kon-Tiki de 1948, que navegó por el Pacífico en una balsa construida con troncos, plantas y materiales naturales de Sudamérica. La balsa estaba tripulada por seis hombres, entre ellos el propio Heyerdahl. Recorrieron 4300 millas desde Perú hasta las islas Tuamotu en 101 días. Esta expedición demostró que no había razones técnicas para impedir que los habitantes de América del Sur se hubieran establecido en las islas de Polinesia. No obstante, la mayoría de los antropólogos continúan creyendo que la Polinesia fue colonizada del oeste hacia el este, con migraciones comenzadas desde el continente asiático.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) Heyerdahl demostró que la colonización de Polinesia se produjo desde Sudamérica.",
            "B) A pesar del hallazgo de Heyerdahl, los antropólogos siguen pensando que la colonización de Polinesia se produjo desde Asia.",
            "C) Heyerdahl y otros seis hombres consiguieron viajar desde Perú hasta las islas Tuamotu en 101 días.",
            "D) Thor Heyerdahl construyó una balsa con troncos, plantas y otros materiales en Perú."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La respuesta B es correcta. A es errónea (solo demostró que era técnicamente posible). C es falsa (eran seis en total). D no se sabe si la balsa fue construida en Perú."
        },
        {
          "id": 8,
          "context": "En la antigua Irlanda, \"fianna\" eran las pequeñas bandas de guerreros que vivían apartados de la sociedad en los bosques, principalmente como mercenarios, bandidos o cazadores, pero que sin embargo podían ser convocados por los reyes en tiempos de guerra. En la mitología irlandesa, aparecen en el ciclo de Fenian, donde eran liderados por Fionn mac Cumhaill. Según algunas historias, los fianna eran alojados por la nobleza en invierno para mantener el orden en su nombre, pero durante el verano, estaban obligados a cazar para conseguir comida y pieles.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) Los fianna debían obedecer a los reyes en tiempo de guerra.",
            "B) Los fianna vivían al margen de la sociedad a pesar del apoyo de los nobles.",
            "C) La mitología irlandesa presenta a los fianna como bandas de cazadores, pese a que en muchas ocasiones se trataba de bandidos o guerreros.",
            "D) Los fianna sobrevivían gracias al apoyo de los nobles o bien por sus propios medios, según la época del año."
          ],
          "correctAnswerIndex": 3,
          "explanation": "La respuesta correcta es la D porque en invierno eran alojados por la nobleza, pero durante el verano estaban obligados a cazar para conseguir comida y pieles."
        },
        {
          "id": 9,
          "context": "Los gorilas se desplazan generalmente a cuatro patas, siendo sus extremidades posteriores, semejantes a brazos, más largas que las anteriores. Los machos miden entre 1,65 y 1,75 metros y pesan entre 140 y 200 Kg. Las hembras pesan aproximadamente la mitad que los machos. Son mayoritariamente vegetarianos, y su dieta se compone fundamentalmente de frutas, hojas, brotes, etc. si bien pueden llegar a consumir algunos insectos. Son un género en peligro de extinción, blanco de cazadores furtivos desde hace décadas. La destrucción de su hábitat y la cacería se han incrementado en los últimos años por los conflictos armados en los países que habita y el creciente interés por el consumo de carnes exóticas.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) La dieta de los gorilas es vegetariana, salvo el consumo de insectos por algunas especies.",
            "B) El consumo de carnes exóticas amenaza con provocar la extinción de los gorilas.",
            "C) Las hembras de gorila son notoriamente más livianas que los machos.",
            "D) Los cazadores furtivos llevan décadas destruyendo el hábitat natural de los gorilas."
          ],
          "correctAnswerIndex": 2,
          "explanation": "El texto especifica que las hembras pesan aproximadamente la mitad que los machos, o lo que es lo mismo, son notoriamente más livianas, siendo la respuesta C correcta."
        },
        {
          "id": 10,
          "context": "Un bioma es un conjunto de ecosistemas con una estructura y organización comunes y extendidas sobre grandes superficies, tanto terrestres como acuáticas. En la Antártida, las condiciones ambientales permiten notar dos tipos de biomas: el terrestre y el marino. El bioma antártico marino se extiende a lo largo de la costa, los bordes de las capas de hielo y las aguas oceánicas cercanas. El bioma terrestre puede encontrarse en el resto del continente, la vegetación se reduce a líquenes y musgos de los cuales se alimentan algunos insectos y ácaros. La altiplanicie interior es considerada el mayor desierto biológico del mundo.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) El bioma antártico terrestre es considerado desértico.",
            "B) Un bioma es un ecosistema estructurado y de gran extensión.",
            "C) En los biomas antárticos, la vegetación se reduce a líquenes y musgos.",
            "D) Los biomas pueden ser tanto terrestres como acuáticos, y en la Antártida hay un ejemplo de ambos."
          ],
          "correctAnswerIndex": 3,
          "explanation": "La opción D es correcta, al decir el texto literalmente que en la Antártida hay dos tipos de biomas: el terrestre y el marino. A no es correcta (solo la altiplanicie interior). B confunde conjunto de ecosistemas con ecosistema. C solo aplica al bioma terrestre."
        },
        {
          "id": 11,
          "context": "Aun involuntariamente, los empleados pueden exponer en su trabajo diario datos e informaciones confidenciales de la empresa. Por ello, las empresas han optado por incluir cláusulas de confidencialidad en los contratos de sus empleados, así como en los que concluyen con aquellas empresas o terceras personas que puedan acceder a información considerada confidencial. Del mismo modo, para evitar las fugas de información que podrían darse cuando el empleado abandona la empresa, pueden incluirse cláusulas de no competencia post-contractual, por las que se fijan períodos determinados durante los que el empleado no podrá trabajar en empresas del mismo sector, a cambio de una compensación económica.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) Las cláusulas de confidencialidad se aplican tanto a empleados como a terceros o a otras empresas.",
            "B) Las cláusulas de no competencia post-contractual son incompatibles con las cláusulas de confidencialidad.",
            "C) Las fugas de información se producen sobre todo involuntariamente.",
            "D) Cuando un empleado abandona la empresa, las cláusulas de confidencialidad le impiden trabajar en empresas del mismo sector durante un periodo."
          ],
          "correctAnswerIndex": 0,
          "explanation": "El texto dice que las cláusulas de confidencialidad se incluyen en contratos de empleados y también de terceras personas u otras empresas, validando la afirmación A."
        },
        {
          "id": 12,
          "context": "Históricamente, la cerveza fue desarrollada por los antiguos elamitas, egipcios y sumerios. Las pruebas más antiguas de elaboración de cerveza datan de 3500 a. C. Las antiguas cervezas eran más densas que las actuales, y se elaboraban a partir de panes de cebada poco cocidos. La cerveza llegó a Europa sobre 2400 a. C. de la mano de los celtas. Posteriormente, se ve extendiendo el uso de la malta como ingrediente principal y del lúpulo como aromatizante. En cualquier caso, hubo que esperar hasta el siglo XIX, con la extensión del frío como método de conservación, para poder disfrutar de la cerveza durante todo el año.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) Los celtas aprendieron de los elamitas, egipcios y sumerios la elaboración de la cerveza.",
            "B) Los celtas cambiaron los panes de cebada por la malta como ingrediente principal de la cerveza.",
            "C) Solo a partir del siglo XIX se puede disfrutar de la cerveza durante todo el año.",
            "D) Los celtas utilizaban el lúpulo como aromatizante de la cerveza."
          ],
          "correctAnswerIndex": 2,
          "explanation": "Lo que sí se sabe por la última frase es que a partir del siglo XIX se puede disfrutar de la cerveza durante todo el año, por lo que la respuesta C sí es correcta."
        },
        {
          "id": 13,
          "context": "A diferencia de las bebidas que se obtienen a partir de zumo de frutas fermentado, como es el caso del vino, en la cerveza el cereal de base no contiene originalmente ni agua ni azúcar. Para conseguir azúcar a través del almidón del propio cereal, ha de modificarse este mediante el malteado y sumergirse después en agua a la temperatura adecuada. Al líquido resultante se le añade el lúpulo después de hervirlo, y a continuación se enfría el conjunto, se le añaden levaduras y se inicia la fermentación definitiva.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) El azúcar necesario para elaborar la cerveza se extrae directamente del almidón del propio cereal.",
            "B) Después del malteado, la mezcla ha de hervirse tras añadirle agua y lúpulo.",
            "C) El lúpulo y la levadura han de añadirse cuando la mezcla está caliente.",
            "D) Los componentes básicos de la cerveza no contienen agua ni azúcar, sino que estos se añaden con posterioridad."
          ],
          "correctAnswerIndex": 3,
          "explanation": "La respuesta D es correcta porque el cereal de base no contiene originalmente ni agua ni azúcar y que se maltea y sumerge en agua el almidón, para después añadir lúpulo y levaduras."
        },
        {
          "id": 14,
          "context": "La política monetaria es un tipo de política económica que utiliza la cantidad de dinero circulante como variable de control para mantener la estabilidad económica. Para ello se utilizan mecanismos tales como la variación del tipo de interés. Según que se aumente o reduzca la cantidad de dinero, la política monetaria será expansiva o restrictiva. A largo plazo, existe un amplio consenso entre los expertos según el cual la política monetaria no influye en el crecimiento económico, determinado por variables tales como la tecnología o el crecimiento demográfico.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) El crecimiento demográfico tiene mayor influencia en la economía que la política monetaria.",
            "B) La variación del tipo de interés es un instrumento típico de la política monetaria.",
            "C) La política monetaria es expansiva o restrictiva según el nivel en el que se aumente la cantidad de dinero.",
            "D) Los expertos afirman que la política monetaria no influye en el crecimiento económico."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La opción B es la correcta porque el texto dice que para mantener la estabilidad económica se utilizan mecanismos tales como la variación del tipo de interés."
        },
        {
          "id": 15,
          "context": "Debido a la tradición neutral de Bélgica en los conflictos europeos y aprovechando su situación geográfica central en el continente, su capital, Bruselas, fue designada para acoger los principales organismos de la Unión desde sus inicios. Muchas representaciones tienen su sede diplomática para la UE en esta ciudad, ostentando en ocasiones el rango de embajada. Por todo ello, Bruselas se considera extraoficialmente la capital de la UE.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) Bruselas debe su capitalidad europea a la neutralidad histórica del país.",
            "B) En Bruselas se encuentran las embajadas de muchos países ante la UE.",
            "C) Bruselas ha albergado la sede de algunas instituciones europeas desde su creación.",
            "D) Bruselas se eligió como capital, entre otras razones, por su situación geográfica."
          ],
          "correctAnswerIndex": 2,
          "explanation": "El texto dice que Bruselas fue designada para acoger los principales organismos de la Unión desde sus inicios, por lo que la respuesta C es correcta."
        },
        {
          "id": 16,
          "context": "El software libre suele estar disponible gratuitamente, o al precio de costo de la distribución a través de otros medios, pero no es obligatorio que sea así, por lo que no hay que asociar software libre a software gratuito, ya que, aun conservando su carácter de libre, puede ser distribuido comercialmente. Del mismo modo, el software gratuito incluye en algunas ocasiones el código fuente, pese a lo cual no necesariamente tiene que ser libre en el mismo sentido, si no se garantizan los derechos de modificación y de distribución de las versiones modificadas del software.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) El software libre no necesariamente tiene que ser gratuito, en cambio el software gratuito siempre se considera software libre.",
            "B) El software gratuito puede llegar incluso a incluir el código fuente, y solamente en tales casos se considerará software libre.",
            "C) El software libre puede distribuirse comercialmente sin perder su carácter de libre.",
            "D) El software libre no garantiza los derechos de modificación y distribución de los programas modificados."
          ],
          "correctAnswerIndex": 2,
          "explanation": "El texto dice que el software libre, aun conservando su carácter de libre, puede ser distribuido comercialmente. La respuesta C es correcta."
        },
        {
          "id": 17,
          "context": "La Política Agraria Común ha recibido críticas porque parte de la producción agrícola europea se desecha o se exporta a países pobres. Esto provoca que los productos europeos, subvencionados para que el precio baje por debajo de su coste, se vendan a un precio artificialmente bajo, hundiendo las economías de los países pobres. Sin embargo, sin dichas subvenciones, los agricultores europeos no podrían competir con los de otros países cuyas condiciones laborales son pésimas, y que en ocasiones reciben ayudas de sus países de las que no se informa a la OMC.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) Las condiciones laborales de los agricultores europeos son buenas gracias a las subvenciones de la PAC.",
            "B) Las subvenciones hacen que los productos agrícolas se vendan a precios excesivamente bajos.",
            "C) Las subvenciones de la PAC se reciben sin informar a la OMC.",
            "D) Sin las subvenciones de la PAC, las condiciones laborales de los agricultores de los países pobres serían mejores."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La respuesta B es correcta. Los productos europeos, subvencionados para que el precio baje por debajo de su coste, se venden a un precio artificialmente bajo."
        },
        {
          "id": 18,
          "context": "A partir de la década de los noventa, para recibir las ayudas de la PAC es necesario desempeñar una serie de trabajos destinados tanto a mantener el medio ambiente como a mejorar la calidad y la salubridad de los productos, con lo cual se ayuda al mantenimiento sostenible de las tierras de cultivo aun no habiendo producción.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) Las subvenciones de la PAC pueden llegar a percibirse aunque no haya producción.",
            "B) La política de la PAC ha estado siempre destinada a mantener el medio ambiente.",
            "C) A partir de la década de los noventa, las subvenciones de la PAC, además de la producción, exigen otros requisitos.",
            "D) Si no hay mejoras en la calidad y salubridad de los productos no se pueden percibir las subvenciones de la PAC."
          ],
          "correctAnswerIndex": 0,
          "explanation": "En la opción A, el enunciado explica que se ayuda al mantenimiento sostenible de las tierras de cultivo aun no habiendo producción, por lo que es correcta."
        },
        {
          "id": 19,
          "context": "Las poblaciones de urogallos se encuentran fundamentalmente en la Europa boreal, y en pequeños enclaves de montaña de zonas templadas, como la cornisa cantábrica, los Pirineos o los Alpes. Biológicamente se le considera una reliquia de la era glaciar, ya que tras este período se fue quedando aislado en zonas de alta montaña o más frías. En España, el urogallo es especie protegida desde 1986, pese a lo cual no ha podido evitarse el descenso paulatino de su población, tanto por la caza furtiva como por la deforestación, el auge de la ganadería en sus áreas de población o la construcción de carreteras.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) Los urogallos han sufrido un creciente aislamiento tanto por la caza furtiva como por la deforestación, entre otras razones.",
            "B) La población de urogallos en España ha sufrido un fuerte descenso desde 1986.",
            "C) Tras la era glaciar, los urogallos quedaron reducidos a algunas zonas concretas.",
            "D) Los urogallos viven en zonas montañosas y templadas."
          ],
          "correctAnswerIndex": 2,
          "explanation": "La opción correcta es la C porque el texto dice que tras la era glaciar el urogallo se fue quedando aislado en zonas de alta montaña o más frías."
        },
        {
          "id": 20,
          "context": "El navajo es el pueblo nativo estadounidense más numeroso, con unas 175.000 personas que se reparten entre varios estados del sudoeste de Estados Unidos y el norte de México. Su nombre les fue dado por los conquistadores españoles. Según parece, son originarios de Canadá, pero su vida nómada les llevó a emigrar hasta su ubicación actual, en la que se encuentra la reserva más extensa de cualquier tribu nativa estadounidense. Desde su contacto con los españoles, aprendieron a criar ovejas y a trabajar la plata y las piedras preciosas.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) Los navajos son el pueblo más numeroso de entre los nativos estadounidenses y los que disfrutan de la mayor reserva.",
            "B) Los navajos fueron descubiertos por primera vez por los españoles.",
            "C) Las poblaciones de navajos se extienden por Estados Unidos, México y Canadá.",
            "D) La reserva más poblada de entre las tribus nativas estadounidenses es la ocupada por los navajos."
          ],
          "correctAnswerIndex": 0,
          "explanation": "La opción correcta es la A puesto que el texto dice que es el pueblo más numeroso y su ubicación tiene la reserva más extensa."
        },
        {
          "id": 21,
          "context": "La última parte de la Guerra de Troya dio lugar a la Ilíada, de Homero. La historia relata una serie de increíbles aventuras entre las que se cuentan la victoria de Aquiles sobre la reina de las amazonas y su muerte por una flecha en el talón a manos del troyano Paris. Finalmente la ciudad fue capturada cuando los griegos usaron la estratagema de construir un gigantesco caballo hueco de madera y presentarlo a los troyanos como regalo, a la vez que fingían abandonar el sitio de la ciudad. Unos pocos troyanos lograron escapar hacia la actual Italia, comandados por Eneas, como se relata en la Eneida, de Virgilio. Según los historiadores, la Guerra de Troya fue una guerra real disputada sobre 1200 a. C. por el control del actual estrecho de los Dardanelos, entonces llamado Helesponto.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) Los sucesos de la Guerra de Troya inspiraron la Ilíada de Homero y la Eneida de Virgilio.",
            "B) Los griegos ganaron la guerra tras regalar a los troyanos un caballo de madera.",
            "C) Los troyanos controlaron durante largo tiempo el estrecho de los Dardanelos.",
            "D) Aquiles murió a manos de Paris tras derrotar a la reina de las amazonas."
          ],
          "correctAnswerIndex": 3,
          "explanation": "La respuesta correcta es la D al decir el texto que Aquiles venció a la reina de las amazonas y murió a manos de Paris."
        },
        {
          "id": 22,
          "context": "El maltés es una de las dos lenguas oficiales de Malta, junto con el inglés, y es una de las lenguas oficiales de la Unión Europea. Su origen es semítico, pero su evolución ha sido peculiar, ya que ha recibido gran cantidad de préstamos de otras lenguas, por lo que se le suele definir como lengua criolla, e incluso inclasificable para algunos lingüistas. Es la única lengua semítica que se escribe con caracteres latinos. Durante algún tiempo se especuló con un posible origen fenicio, pero esta teoría se basaba más en temas políticos que lingüísticos.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) El maltés es una lengua inclasificable, cuyo origen no es bien conocido.",
            "B) El maltés, a pesar de ser semítico, utiliza el alfabeto latino.",
            "C) El maltés tiene origen semítico, pero muchos préstamos fenicios.",
            "D) Por la gran cantidad de préstamos que ha recibido de otras lenguas, el maltés se clasifica entre las lenguas criollas."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La respuesta correcta es la B: el maltés es semítico y es la única lengua semítica que se escribe con caracteres latinos."
        },
        {
          "id": 23,
          "context": "Los aeróstatos, también denominados globos aerostáticos, son aeronaves no propulsadas que vuelan sirviéndose del principio de los fluidos formulado por Arquímedes, considerando que el aire es un fluido, en este caso. Se les conoce como globos porque están compuestos por una bolsa que encierra una masa de gas más ligero que el aire. En algunos casos, se puede controlar la elevación, pero habitualmente los globos se dejan llevar por las corrientes. El gas que contiene puede ser helio o hidrógeno, aunque es más común la utilización del helio, pese a ser más pesado, al ser el hidrógeno inflamable.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) El hidrógeno es menos recomendable que el helio para los aeróstatos ya que es más pesado e inflamable.",
            "B) Según el principio de Arquímedes, el aire se considera como un fluido.",
            "C) Para que un globo pueda volar, el gas que contiene debe ser más ligero que el aire.",
            "D) Al dirigir un globo, se controla la elevación pero no la dirección."
          ],
          "correctAnswerIndex": 2,
          "explanation": "La respuesta correcta es la C, ya que el texto dice que la masa de gas que encierra un aeróstato es más ligera que el aire, sin dar lugar a excepciones."
        },
        {
          "id": 24,
          "context": "En 1971, Francis Ford Coppola se embarcó en el proyecto que acabaría por cambiarle la vida. Aunque en un principio mostró reticencias, acabó por aceptar adaptar una serie de novelas de Mario Puzo, dando origen a la famosa saga de \"El Padrino\". La primera parte se convirtió en la película más taquillera de la historia y ganadora de varios premios Óscar. Sin embargo, Coppola tuvo que lidiar con los directivos de la productora, que no aceptaban a los actores elegidos por él, para que no le sustituyeran por otro director durante las primeras semanas de rodaje.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) Francis Ford Coppola no aceptó que la productora del film \"El Padrino\" eligiera en su lugar a los actores.",
            "B) Francis Ford Coppola cambió su vida para poder adaptar las novelas de \"El Padrino\".",
            "C) Francis Ford Coppola adaptó una serie de novelas de Mario Puzo al cine, pese a las reticencias de este.",
            "D) En un principio, Coppola estuvo cerca de ser sustituido como director de \"El Padrino\"."
          ],
          "correctAnswerIndex": 3,
          "explanation": "El texto dice que Coppola tuvo que lidiar con los directivos para que no le sustituyeran por otro director, dando validez a la D."
        },
        {
          "id": 25,
          "context": "La República de Chipre es un Estado internacionalmente reconocido, pero solamente controla los dos tercios del sur de la isla. El tercio norte fue ocupado por Turquía en 1974, y en él se instauró la República Turca del Norte de Chipre, únicamente reconocido por la propia Turquía. Chipre obtuvo su independencia de los británicos en 1960, e instauró una constitución que repartía los poderes entre las comunidades griega y turca, pero cuyos complejos mecanismos dificultaban el normal funcionamiento de las estructuras del Estado. Un golpe de Estado pro-griego en 1974 provocó la invasión turca del norte de la isla y la división del país, que aún continúa pese a los esfuerzos de la Unión Europea por conseguir una plena reunificación. Sin embargo, los diferentes planes ideados hasta ahora han sido rechazados por la población chipriota.",
          "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
          "options": [
            "A) La población chipriota es contraria a la reunificación del país.",
            "B) La República Turca del Norte de Chipre no está reconocida oficialmente por las organizaciones internacionales.",
            "C) Tras el conflicto de 1974, griegos y turcos se repartieron la isla.",
            "D) La constitución otorgada por los británicos incluía unos mecanismos complejos de reparto del poder."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La República Turca del Norte de Chipre sólo se ha reconocido por el estado Turco, que no es una organización internacional, por lo que la respuesta B es la correcta."
        }
      ]
    },

    // ─────────────────────────────────────────────────────────
    // NUMÉRICO — 15 questions (RVNE1 Q26–Q40)
    // ─────────────────────────────────────────────────────────
    {
      "name": "Numérico",
      "questions": [
        {
          "id": 26,
          "context": "| Producción de acero por miles de toneladas | Luxemburgo | Francia | España | Países Bajos | Reino Unido |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| 1999 | 90 | 500 | 400 | 600 | 1000 |\n| 2000 | 120 | 800 | 750 | 620 | 900 |\n| 2001 | 150 | 950 | 920 | 620 | 850 |\n| 2002 | 180 | 1200 | 1000 | 620 | 800 |\n| 2003 | 220 | 1100 | 1300 | 700 | 750 |",
          "questionText": "¿En qué año se produjo más cantidad de acero total?",
          "options": ["A) 2000", "B) 2001", "C) 2002", "D) 2003"],
          "correctAnswerIndex": 3,
          "explanation": "Año 2000: 3190 | Año 2001: 3490 | Año 2002: 3800 | Año 2003: 220+1100+1300+700+750 = 4070. La respuesta es D."
        },
        {
          "id": 27,
          "context": "| Producción de acero por miles de toneladas | Luxemburgo | Francia | España | Países Bajos | Reino Unido |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| 1999 | 90 | 500 | 400 | 600 | 1000 |\n| 2003 | 220 | 1100 | 1300 | 700 | 750 |",
          "questionText": "¿En qué país ha sido mayor el incremento porcentual de la producción entre 1999 y 2003?",
          "options": ["A) Luxemburgo", "B) Francia", "C) España", "D) Países Bajos"],
          "correctAnswerIndex": 2,
          "explanation": "Luxemburgo: 144%. Francia: 120%. España: (1300−400)/400 = 225%. Países Bajos: 16%. La respuesta es C – España."
        },
        {
          "id": 28,
          "context": "| Producción de acero por miles de toneladas | Luxemburgo | Francia | España | Países Bajos |\n| :--- | :--- | :--- | :--- | :--- |\n| 1999 | 90 | 500 | 400 | 600 |\n| 2003 | 220 | 1100 | 1300 | 700 |",
          "questionText": "¿En qué país se ha incrementado menos la producción en términos reales?",
          "options": ["A) Luxemburgo", "B) Francia", "C) España", "D) Países Bajos"],
          "correctAnswerIndex": 3,
          "explanation": "Luxemburgo: 130. Francia: 600. España: 900. Países Bajos: 700−600 = 100 (el menor). La respuesta es D."
        },
        {
          "id": 29,
          "context": "| Producción de acero por miles de toneladas | Francia | España | Países Bajos | Reino Unido |\n| :--- | :--- | :--- | :--- | :--- |\n| 2001 | 950 | 920 | 620 | 850 |\n| 2002 | 1200 | 1000 | 620 | 800 |\n| 2003 | 1100 | 1300 | 700 | 750 |",
          "questionText": "¿Qué país obtuvo mayor producción total entre 2001 y 2003?",
          "options": ["A) Francia", "B) España", "C) Países Bajos", "D) Reino Unido"],
          "correctAnswerIndex": 0,
          "explanation": "Francia: 950+1200+1100 = 3250. España: 920+1000+1300 = 3220. La respuesta es A – Francia."
        },
        {
          "id": 30,
          "context": "Producción en 2003 (miles de toneladas): Francia 1100, España 1300, Países Bajos 700, Reino Unido 750.\n\nEl kilogramo de acero neerlandés y británico se vende al doble del precio del francés y español.",
          "questionText": "Suponiendo que el kilogramo de acero neerlandés y británico se vende al doble del precio del francés y español, ¿qué país ha obtenido mayores beneficios por la venta de su producción en 2003?",
          "options": ["A) Francia", "B) España", "C) Países Bajos", "D) Reino Unido"],
          "correctAnswerIndex": 3,
          "explanation": "Francia: 1100. España: 1300. P. Bajos: 700×2=1400. R. Unido: 750×2=1500. La respuesta es D – Reino Unido."
        },
        {
          "id": 31,
          "context": "| Gasto de turistas en España en millones de euros | Reino Unido | Alemania | Países Bajos | Francia | Suecia |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| Junio | 800 | 1100 | 800 | 600 | 1000 |\n| Julio | 1000 | 1200 | 1300 | 600 | 1500 |\n| Agosto | 1500 | 1300 | 1400 | 700 | 1200 |\n| Septiembre | 900 | 1150 | 1100 | 500 | 1300 |\n\nPorcentaje del gasto realizado por turistas hombres: 60%\nPorcentaje del gasto realizado por turistas mujeres: 40%",
          "questionText": "¿Cuál de estos colectivos de turistas gasta más dinero en agosto?",
          "options": ["A) Mujeres británicas", "B) Hombres alemanes", "C) Turistas franceses", "D) Hombres suecos"],
          "correctAnswerIndex": 1,
          "explanation": "Mujeres británicas: 40%×1500=600. Hombres alemanes: 60%×1300=780. Franceses: 700. Hombres suecos: 60%×1200=720. La respuesta es B."
        },
        {
          "id": 32,
          "context": "| Gasto de turistas en España en millones de euros | Reino Unido | Alemania | Países Bajos | Francia | Suecia |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| Junio | 800 | 1100 | 800 | 600 | 1000 |\n| Julio | 1000 | 1200 | 1300 | 600 | 1500 |\n| Agosto | 1500 | 1300 | 1400 | 700 | 1200 |\n| Septiembre | 900 | 1150 | 1100 | 500 | 1300 |",
          "questionText": "¿De qué país provienen los turistas que más dinero gastan durante todo el período estival?",
          "options": ["A) Reino Unido", "B) Alemania", "C) Países Bajos", "D) Suecia"],
          "correctAnswerIndex": 3,
          "explanation": "UK: 4200. Alemania: 4750. P. Bajos: 4600. Suecia: 1000+1500+1200+1300 = 5000. La respuesta es D – Suecia."
        },
        {
          "id": 33,
          "context": "Gasto de turistas alemanes en julio: 1200 millones de euros.\nGasto de turistas franceses en julio: 600 millones de euros.\n\nPorcentaje del gasto realizado por turistas hombres: 60%\nPorcentaje del gasto realizado por turistas mujeres: 40%",
          "questionText": "¿En qué porcentaje supera el gasto de las mujeres alemanas en julio al de los hombres franceses?",
          "options": ["A) 25%", "B) 33%", "C) 40%", "D) 50%"],
          "correctAnswerIndex": 1,
          "explanation": "Mujeres alemanas: 40%×1200 = 480. Hombres franceses: 60%×600 = 360. (480−360)/360 = 33%. La respuesta es B."
        },
        {
          "id": 34,
          "context": "| Gasto de turistas en España en millones de euros | Reino Unido | Alemania | Países Bajos | Francia | Suecia |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| Junio | 800 | 1100 | 800 | 600 | 1000 |\n| Julio | 1000 | 1200 | 1300 | 600 | 1500 |\n| Agosto | 1500 | 1300 | 1400 | 700 | 1200 |\n| Septiembre | 900 | 1150 | 1100 | 500 | 1300 |",
          "questionText": "¿En qué mes es mayor el gasto total realizado por los turistas?",
          "options": ["A) Junio", "B) Julio", "C) Agosto", "D) Septiembre"],
          "correctAnswerIndex": 2,
          "explanation": "Junio: 4300. Julio: 5600. Agosto: 1500+1300+1400+700+1200 = 6100. Septiembre: 4950. La respuesta es C – Agosto."
        },
        {
          "id": 35,
          "context": "Gasto de turistas suecos en agosto: 1200 millones de euros.\nGasto de turistas holandeses en junio: 800 millones de euros.",
          "questionText": "¿En qué porcentaje es mayor el gasto de los turistas suecos en agosto que el de los turistas holandeses en junio?",
          "options": ["A) 30%", "B) 40%", "C) 50%", "D) 60%"],
          "correctAnswerIndex": 2,
          "explanation": "(1200−800)/800 = 0,5 = 50%. La respuesta es C."
        },
        {
          "id": 36,
          "context": "| País | Precio total exportaciones (M€) | Precio total importaciones (M€) | % Exportaciones sobre producción total |\n| :--- | :--- | :--- | :--- |\n| España | 5800 | 7200 | 33% |\n| Francia | 8900 | 6500 | 25% |\n| Italia | 6150 | 7000 | 35% |\n| Alemania | 12400 | 8500 | 18% |\n| Grecia | 3800 | 5900 | 45% |",
          "questionText": "¿En qué país es más desfavorable la balanza comercial en términos reales?",
          "options": ["A) España", "B) Francia", "C) Italia", "D) Grecia"],
          "correctAnswerIndex": 3,
          "explanation": "España: −1400. Francia: +2400. Italia: −850. Grecia: 3800−5900 = −2100 (el mayor déficit). La respuesta es D."
        },
        {
          "id": 37,
          "context": "| País | Precio total exportaciones (M€) | % Exportaciones sobre producción total |\n| :--- | :--- | :--- |\n| España | 5800 | 33% |\n| Francia | 8900 | 25% |\n| Italia | 6150 | 35% |\n| Grecia | 3800 | 45% |",
          "questionText": "¿En qué país ha sido mayor la producción total?",
          "options": ["A) España", "B) Francia", "C) Italia", "D) Grecia"],
          "correctAnswerIndex": 1,
          "explanation": "Producción = Exportaciones / porcentaje. Francia: 8900/0,25 = 35600. España: 17575. Italia: 17571. Grecia: 8444. La respuesta es B."
        },
        {
          "id": 38,
          "context": "España: Exportaciones 5800 M€ (33% de la producción total). Importaciones: 7200 M€.",
          "questionText": "¿Qué porcentaje de la producción suponen las importaciones españolas?",
          "options": ["A) 41%", "B) 45%", "C) 48%", "D) 52%"],
          "correctAnswerIndex": 0,
          "explanation": "Producción España = 5800/0,33 ≈ 17575. Importaciones/Producción = 7200/17575 ≈ 41%. La respuesta es A."
        },
        {
          "id": 39,
          "context": "| País | Exportaciones (M€) | Importaciones (M€) |\n| :--- | :--- | :--- |\n| España | 5800 | 7200 |\n| Francia | 8900 | 6500 |\n| Italia | 6150 | 7000 |\n| Alemania | 12400 | 8500 |\n| Grecia | 3800 | 5900 |",
          "questionText": "¿A cuánto asciende el beneficio total de la balanza comercial del conjunto de estos países?",
          "options": ["A) 1520", "B) 1870", "C) 1950", "D) 2100"],
          "correctAnswerIndex": 2,
          "explanation": "−1400 + 2400 − 850 + 3900 − 2100 = 1950. La respuesta es C."
        },
        {
          "id": 40,
          "context": "Francia: Exportaciones 8900 M€.\nAlemania: Exportaciones 12400 M€ (18% de la producción total).",
          "questionText": "¿Qué porcentaje supondrían las exportaciones francesas sobre la producción total alemana?",
          "options": ["A) 11%", "B) 13%", "C) 15%", "D) 18%"],
          "correctAnswerIndex": 1,
          "explanation": "Producción Alemania = 12400/0,18 ≈ 68889. 8900/68889 ≈ 13%. La respuesta es B."
        }
      ]
    }

  ]
};
