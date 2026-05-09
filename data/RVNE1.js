window.TESTS = window.TESTS || [];

// ── RVNE 1 · Razonamiento Verbal ─────────────────────────────
window.TESTS.push({
  id: "RVNE1-V",
  title: "RVNE 1 · Razonamiento Verbal",
  sections: [
    {
      title: "Razonamiento Verbal",
      instruction: "Cada pregunta está compuesta por un texto y cuatro afirmaciones. Indique cuál de las cuatro afirmaciones es la que mejor responde al texto dado. Algunas afirmaciones pueden ser parcialmente contradictorias con el texto, o correctas por sí mismas pero no basadas en él. Base su respuesta exclusivamente en la información que proporciona el texto.",
      questionRange: [1, 25]
    }
  ],
  tables: {},
  questions: [
    {
      number: 1,
      type: "verbal",
      text: "La UE es un ente multicultural que aspira a liderar el mundo, tanto desde el punto de vista político como económico. Para que sea posible, todos los estados miembros deben empujar en la misma dirección, especialmente en la situación de crisis económica en la que nos encontramos.",
      options: {
        a: "La crisis económica pasará pronto si los países que forman la UE empujan en la misma dirección.",
        b: "La crisis económica terminará pronto.",
        c: "Para superar la crisis económica es conveniente que todos los estados miembros colaboren y empujen en la misma dirección.",
        d: "La UE lidera el mundo, tanto a nivel económico como político."
      },
      correct: "c",
      explanation: "La respuesta correcta es la C porque es la que más se ajusta al texto. La crisis no terminará si todos los estados miembros actúan en la misma dirección, por lo que la respuesta A es falsa. La respuesta B también es falsa; el texto no dice eso. La UE no lidera el mundo sino que aspira a liderar el mundo, por lo que la D también es incorrecta."
    },
    {
      number: 2,
      type: "verbal",
      text: "Los símbolos son importantes y el ámbito de Unión Europea no es una excepción. La bandera europea y el himno europeo ayudan a crear un espíritu de cohesión. Se trata simplemente de ayudar a plasmar en la colectividad un innegable pasado común.",
      options: {
        a: "La bandera europea es más importante que el himno.",
        b: "La bandera y el himno europeo son importantes.",
        c: "Los símbolos europeos son imprescindibles.",
        d: "Los símbolos europeos son imprescindibles para reafirmar nuestro pasado común."
      },
      correct: "b",
      explanation: "La respuesta correcta es la B. La bandera y el himno son símbolos y los símbolos, según el texto, son importantes. Por lo tanto, la bandera y el himno son importantes, pero no esenciales. Las opciones C y D exageran al usar «imprescindibles», palabra que no aparece en el texto."
    },
    {
      number: 3,
      type: "verbal",
      text: "La próxima presidencia española de la UE tendrá entre sus prioridades la construcción de una sociedad civil europea activa. En ese sentido, el trabajo de las organizaciones de la sociedad civil se considera esencial para salir de la crisis y, al mismo tiempo, impulsar una mayor cohesión social.",
      options: {
        a: "La presidencia española de la UE impulsará el trabajo de las organizaciones sociales.",
        b: "La presidencia española de la UE perseguirá la salida de la crisis a través de la sociedad civil.",
        c: "El trabajo de las organizaciones sociales ayudará a la presidencia española a construir una sociedad más activa.",
        d: "El trabajo de las organizaciones sociales debe servir para ayudar a reforzar la cohesión social."
      },
      correct: "d",
      explanation: "La respuesta D es correcta porque el texto dice literalmente que «el trabajo de las organizaciones de la sociedad civil se considera esencial para salir de la crisis y, al mismo tiempo, impulsar una mayor cohesión social». La opción A no es directamente deducible. La opción B no está especificada en el texto como objetivo necesario. La respuesta C es incorrecta porque el texto no establece esa colaboración entre las organizaciones y la presidencia española."
    },
    {
      number: 4,
      type: "verbal",
      text: "Por vez primera desde el nacimiento de la Unión Europea, la Presidencia se desarrollará de forma colectiva. España, Bélgica y Hungría serán los países encargados de ello en el marco del nuevo sistema de presidencias rotatorias, que durarán dieciocho meses. El programa del trío de presidencias abordará las nuevas etapas de las grandes políticas de la Unión.",
      options: {
        a: "Hasta la entrada en vigor de la Presidencia española, nunca ha habido Presidencias colectivas en la historia de la Unión Europea.",
        b: "La presidencia española durará dieciocho meses y será apoyada por Bélgica y Hungría.",
        c: "Las presidencias rotatorias han de abordar todas las grandes políticas de la Unión.",
        d: "Durante dieciocho meses, España, Bélgica y Hungría acordarán las grandes políticas de la Unión."
      },
      correct: "a",
      explanation: "La correcta es la A: el texto explica que, por primera vez desde que la UE nació, la Presidencia se llevará a cabo colectivamente, siendo España la primera en este nuevo sistema. La respuesta B es incorrecta porque los 18 meses hacen referencia al trío de presidencias, no a la de España sola (que dura 6 meses). La C es incorrecta porque estos países no tendrán que abordar todas las políticas. La D es incorrecta porque el texto dice que las tratarán, no que necesariamente tengan que decidir sobre ellas."
    },
    {
      number: 5,
      type: "verbal",
      text: "En Geografía se define como desierto la superficie terrestre total o casi totalmente deshabitada en la cual las precipitaciones casi nunca superan las 250 milímetros cúbicos al año y el terreno es árido. Tienen reputación de tener poca vida, pero eso depende de la clase de desierto; en muchos existe vida abundante, la vegetación se adapta a la poca humedad y la fauna usualmente se esconde durante el día para preservar humedad.",
      options: {
        a: "A pesar de lo que se piensa, los desiertos albergan mucha vida.",
        b: "En los desiertos las precipitaciones son escasas y el terreno es árido.",
        c: "La fauna de los desiertos está adaptada a la poca humedad.",
        d: "Los desiertos son zonas completamente deshabitadas y áridas."
      },
      correct: "b",
      explanation: "El texto define las características de un desierto como superficies en que «las precipitaciones casi nunca superan las 250 milímetros cúbicos al año y el terreno es árido», lo que equivale a decir que las precipitaciones son escasas. Solo algunos desiertos están llenos de vida, por lo que la A no es correcta. Solo algunos animales se han adaptado a la escasez de humedad, por lo que la C tampoco lo es. Los desiertos están total o «casi totalmente» deshabitados (no completamente), por lo que D es falsa."
    },
    {
      number: 6,
      type: "verbal",
      text: "Gran parte de los desiertos del mundo se ubican en zonas caracterizadas por las altas presiones constantes, condición que no favorece a la lluvia. En otros casos, los desiertos se deben a su continentalidad, es decir, su distancia del mar, lo que hace que no reciban los vientos húmedos que proceden de los océanos.",
      options: {
        a: "Los desiertos se encuentran en zonas cuyas condiciones no favorecen a la lluvia.",
        b: "Las altas presiones constantes provocan que las lluvias sean escasas.",
        c: "Los desiertos se encuentran en zonas alejadas del mar.",
        d: "Los vientos húmedos del océano impiden la aparición de desiertos."
      },
      correct: "b",
      explanation: "La B es la respuesta que aparece en el texto: las altas presiones no favorecen a la lluvia, es decir, provocan que las lluvias sean escasas. La A es incorrecta porque «gran parte», no todos, los desiertos se encuentran en esas zonas. La C es incorrecta porque solo uno de los dos tipos de desiertos se debe a la lejanía del mar. La D es incorrecta porque el texto no afirma que los vientos húmedos impidan la aparición de desiertos en todos los casos."
    },
    {
      number: 7,
      type: "verbal",
      text: "Thor Heyerdahl se hizo célebre por la expedición Kon-Tiki de 1948, que navegó por el Pacífico en una balsa construida con troncos, plantas y materiales naturales de Sudamérica. La balsa estaba tripulada por seis hombres, entre ellos el propio Heyerdahl. Recorrieron 4300 millas desde Perú hasta las islas Tuamotu en 101 días. Esta expedición demostró que no había razones técnicas para impedir que los habitantes de América del Sur se hubieran establecido en las islas de Polinesia. No obstante, la mayoría de los antropólogos continúan creyendo que la Polinesia fue colonizada del oeste hacia el este, con migraciones comenzadas desde el continente asiático.",
      options: {
        a: "Heyerdahl demostró que la colonización de Polinesia se produjo desde Sudamérica.",
        b: "A pesar del hallazgo de Heyerdahl, los antropólogos siguen pensando que la colonización de Polinesia se produjo desde Asia.",
        c: "Heyerdahl y otros seis hombres consiguieron viajar desde Perú hasta las islas Tuamotu en 101 días.",
        d: "Thor Heyerdahl construyó una balsa con troncos, plantas y otros materiales en Perú."
      },
      correct: "b",
      explanation: "La A es errónea: Heyerdahl no demostró que realmente la colonización se produjera desde Sudamérica, sino solo que técnicamente podría haber sido así. La C es falsa porque Heyerdahl hizo el viaje con otros cinco hombres (seis en total, incluyéndolo a él). La D falla porque no se sabe que la balsa fuese construida en Perú, sino que zarpó desde Perú. La B es correcta: a pesar del hallazgo, los antropólogos siguen creyendo que la colonización vino de Asia."
    },
    {
      number: 8,
      type: "verbal",
      text: "En la antigua Irlanda, «fianna» eran las pequeñas bandas de guerreros que vivían apartados de la sociedad en los bosques, principalmente como mercenarios, bandidos o cazadores, pero que sin embargo podían ser convocados por los reyes en tiempos de guerra. En la mitología irlandesa, aparecen en el ciclo de Fenian, donde eran liderados por Fionn mac Cumhaill. Según algunas historias, los fianna eran alojados por la nobleza en invierno para mantener el orden en su nombre, pero durante el verano, estaban obligados a cazar para conseguir comida y pieles.",
      options: {
        a: "Los fianna debían obedecer a los reyes en tiempo de guerra.",
        b: "Los fianna vivían al margen de la sociedad a pesar del apoyo de los nobles.",
        c: "La mitología irlandesa presenta a los fianna como bandas de cazadores, pese a que en muchas ocasiones se trataba de bandidos o guerreros.",
        d: "Los fianna sobrevivían gracias al apoyo de los nobles o bien por sus propios medios, según la época del año."
      },
      correct: "d",
      explanation: "La D es correcta: «según algunas historias, los fianna eran alojados por la nobleza en invierno para mantener el orden en su nombre, pero durante el verano, estaban obligados a cazar para conseguir comida y pieles». La A es falsa porque los fianna podían ser convocados por los reyes, pero no necesariamente «debían obedecer». La B es incorrecta porque aunque viven parte del año apartados de la sociedad, participan en actividades sociales (son alojados por la nobleza). La C es incorrecta porque la mitología les presenta como guerreros, no como cazadores."
    },
    {
      number: 9,
      type: "verbal",
      text: "Los gorilas se desplazan generalmente a cuatro patas, siendo sus extremidades posteriores, semejantes a brazos, más largas que las anteriores. Los machos miden entre 1,65 y 1,75 metros y pesan entre 140 y 200 Kg. Las hembras pesan aproximadamente la mitad que los machos. Son mayoritariamente vegetarianos, y su dieta se compone fundamentalmente de frutas, hojas, brotes, etc. si bien pueden llegar a consumir algunos insectos. Son un género en peligro de extinción, blanco de cazadores furtivos desde hace décadas. La destrucción de su hábitat y la cacería se han incrementado en los últimos años por los conflictos armados en los países que habita y el creciente interés por el consumo de carnes exóticas.",
      options: {
        a: "La dieta de los gorilas es vegetariana, salvo el consumo de insectos por algunas especies.",
        b: "El consumo de carnes exóticas amenaza con provocar la extinción de los gorilas.",
        c: "Las hembras de gorila son notoriamente más livianas que los machos.",
        d: "Los cazadores furtivos llevan décadas destruyendo el hábitat natural de los gorilas."
      },
      correct: "c",
      explanation: "El texto especifica que las hembras pesan aproximadamente la mitad que los machos, o lo que es lo mismo, son notoriamente más livianas: la respuesta C es correcta. Los gorilas a veces comen insectos, pero todas las especies, no solo algunas, por lo que la A es incorrecta. La B es incorrecta porque la demanda de carne exótica no es la única ni principal causa de la extinción. La D es incorrecta porque los gorilas son el objetivo de los furtivos, no su hábitat."
    },
    {
      number: 10,
      type: "verbal",
      text: "Un bioma es un conjunto de ecosistemas con una estructura y organización comunes y extendidas sobre grandes superficies, tanto terrestres como acuáticas. En la Antártida, las condiciones ambientales permiten notar dos tipos de biomas: el terrestre y el marino. El bioma antártico marino se extiende a lo largo de la costa, los bordes de las capas de hielo y las aguas oceánicas cercanas. El bioma terrestre puede encontrarse en el resto del continente, la vegetación se reduce a líquenes y musgos de los cuales se alimentan algunos insectos y ácaros. La altiplanicie interior es considerada el mayor desierto biológico del mundo.",
      options: {
        a: "El bioma antártico terrestre es considerado desértico.",
        b: "Un bioma es un ecosistema estructurado y de gran extensión.",
        c: "En los biomas antárticos, la vegetación se reduce a líquenes y musgos.",
        d: "Los biomas pueden ser tanto terrestres como acuáticos, y en la Antártida hay un ejemplo de ambos."
      },
      correct: "d",
      explanation: "La opción D es correcta: el texto dice literalmente que «en la Antártida, las condiciones ambientales permiten notar dos tipos de biomas: el terrestre y el marino». La A no es correcta: es la altiplanicie interior de la Antártida (no el bioma terrestre en su totalidad) la que se considera un desierto. La B es incorrecta porque un bioma no es un ecosistema sino un conjunto de ecosistemas. La C es incorrecta porque es solo el bioma terrestre de la Antártida el que tiene líquenes y musgos, no ambos biomas antárticos."
    },
    {
      number: 11,
      type: "verbal",
      text: "Aun involuntariamente, los empleados pueden exponer en su trabajo diario datos e informaciones confidenciales de la empresa. Por ello, las empresas han optado por incluir cláusulas de confidencialidad en los contratos de sus empleados, así como en los que concluyen con aquellas empresas o terceras personas que puedan acceder a información considerada confidencial. Del mismo modo, para evitar las fugas de información que podrían darse cuando el empleado abandona la empresa, pueden incluirse cláusulas de no competencia post-contractual, por las que se fijan períodos determinados durante los que el empleado no podrá trabajar en empresas del mismo sector, a cambio de una compensación económica.",
      options: {
        a: "Las cláusulas de confidencialidad se aplican tanto a empleados como a terceros o a otras empresas.",
        b: "Las cláusulas de no competencia post-contractual son incompatibles con las cláusulas de confidencialidad.",
        c: "Las fugas de información se producen sobre todo involuntariamente.",
        d: "Cuando un empleado abandona la empresa, las cláusulas de confidencialidad le impiden trabajar en empresas del mismo sector durante un periodo."
      },
      correct: "a",
      explanation: "La A es correcta: el texto dice que las empresas incluyen cláusulas de confidencialidad «en los contratos de sus empleados, así como en los que concluyen con aquellas empresas o terceras personas». Las cláusulas de no competencia no están en confrontación con las de confidencialidad, por lo que B es inválida. Las filtraciones de información no se sabe si son involuntarias principalmente, por lo que C no es válida. Las cláusulas que impiden trabajar en el mismo sector son las de no competencia, no las de confidencialidad — por eso D es falsa."
    },
    {
      number: 12,
      type: "verbal",
      text: "Históricamente, la cerveza fue desarrollada por los antiguos elamitas, egipcios y sumerios. Las pruebas más antiguas de elaboración de cerveza datan de 3500 a. C. Las antiguas cervezas eran más densas que las actuales, y se elaboraban a partir de panes de cebada poco cocidos. La cerveza llegó a Europa sobre 2400 a. C. de la mano de los celtas. Posteriormente, se ve extendiendo el uso de la malta como ingrediente principal y del lúpulo como aromatizante. En cualquier caso, hubo que esperar hasta el siglo XIX, con la extensión del frío como método de conservación, para poder disfrutar de la cerveza durante todo el año.",
      options: {
        a: "Los celtas aprendieron de los elamitas, egipcios y sumerios la elaboración de la cerveza.",
        b: "Los celtas cambiaron los panes de cebada por la malta como ingrediente principal de la cerveza.",
        c: "Solo a partir del siglo XIX se puede disfrutar de la cerveza durante todo el año.",
        d: "Los celtas utilizaban el lúpulo como aromatizante de la cerveza."
      },
      correct: "c",
      explanation: "La A es incorrecta: no sabemos de quién aprendieron exactamente los celtas. La B no se puede deducir del texto: el cambio a la malta no se atribuye a los celtas. La D es igualmente incorrecta: el texto no dice que fueran los celtas los que introdujeran el lúpulo. La C es correcta: el texto dice literalmente que «a partir del siglo XIX se puede disfrutar de la cerveza durante todo el año»."
    },
    {
      number: 13,
      type: "verbal",
      text: "A diferencia de las bebidas que se obtienen a partir de zumo de frutas fermentado, como es el caso del vino, en la cerveza el cereal de base no contiene originalmente ni agua ni azúcar. Para conseguir azúcar a través del almidón del propio cereal, ha de modificarse este mediante el malteado y sumergirse después en agua a la temperatura adecuada. Al líquido resultante se le añade el lúpulo después de hervirlo, y a continuación se enfría el conjunto, se le añaden levaduras y se inicia la fermentación definitiva.",
      options: {
        a: "El azúcar necesario para elaborar la cerveza se extrae directamente del almidón del propio cereal.",
        b: "Después del malteado, la mezcla ha de hervirse tras añadirle agua y lúpulo.",
        c: "El lúpulo y la levadura han de añadirse cuando la mezcla está caliente.",
        d: "Los componentes básicos de la cerveza no contienen agua ni azúcar, sino que estos se añaden con posterioridad."
      },
      correct: "d",
      explanation: "La A es incorrecta: no se «extrae» azúcar directamente del almidón, sino que el almidón se maltea y se sumerge en agua para «conseguir azúcar a través del almidón» — son procesos distintos. La B es falsa: el lúpulo se añade después de hervir el líquido, no antes. La C es falsa: la levadura se añade cuando la mezcla se ha enfriado. La D es correcta porque «en la cerveza el cereal de base no contiene originalmente ni agua ni azúcar» y estos se incorporan en pasos posteriores."
    },
    {
      number: 14,
      type: "verbal",
      text: "La política monetaria es un tipo de política económica que utiliza la cantidad de dinero circulante como variable de control para mantener la estabilidad económica. Para ello se utilizan mecanismos tales como la variación del tipo de interés. Según que se aumente o reduzca la cantidad de dinero, la política monetaria será expansiva o restrictiva. A largo plazo, existe un amplio consenso entre los expertos según el cual la política monetaria no influye en el crecimiento económico, determinado por variables tales como la tecnología o el crecimiento demográfico.",
      options: {
        a: "El crecimiento demográfico tiene mayor influencia en la economía que la política monetaria.",
        b: "La variación del tipo de interés es un instrumento típico de la política monetaria.",
        c: "La política monetaria es expansiva o restrictiva según el nivel en el que se aumente la cantidad de dinero.",
        d: "Los expertos afirman que la política monetaria no influye en el crecimiento económico."
      },
      correct: "b",
      explanation: "La B es la más correcta: el texto dice que «para ello [mantener la estabilidad] se utilizan mecanismos tales como la variación del tipo de interés». La A es incorrecta: el texto no compara la influencia de unas variables frente a otras. La C es incorrecta: la política es expansiva o restrictiva según si la cantidad aumenta o reduce, no según «el nivel en el que» aumenta. La D es incorrecta: los expertos no «afirman» taxativamente, sino que hay un «amplio consenso» — además, solo aplica a largo plazo."
    },
    {
      number: 15,
      type: "verbal",
      text: "Debido a la tradición neutral de Bélgica en los conflictos europeos y aprovechando su situación geográfica central en el continente, su capital, Bruselas, fue designada para acoger los principales organismos de la Unión desde sus inicios. Muchas representaciones tienen su sede diplomática para la UE en esta ciudad, ostentando en ocasiones el rango de embajada. Por todo ello, Bruselas se considera extraoficialmente la capital de la UE.",
      options: {
        a: "Bruselas debe su capitalidad europea a la neutralidad histórica del país.",
        b: "En Bruselas se encuentran las embajadas de muchos países ante la UE.",
        c: "Bruselas ha albergado la sede de algunas instituciones europeas desde su creación.",
        d: "Bruselas se eligió como capital, entre otras razones, por su situación geográfica."
      },
      correct: "c",
      explanation: "La C es correcta: el texto dice que «Bruselas fue designada para acoger los principales organismos de la Unión desde sus inicios». La A es incorrecta: el texto no dice que la capitalidad se deba solo a la neutralidad. La B es falsa: el texto habla de «sedes diplomáticas» que «ostentando en ocasiones el rango de embajada», no de embajadas directamente. La D es incorrecta porque la información geográfica se refiere a Bélgica en general, no a Bruselas específicamente como capital de la UE."
    },
    {
      number: 16,
      type: "verbal",
      text: "El software libre suele estar disponible gratuitamente, o al precio de costo de la distribución a través de otros medios, pero no es obligatorio que sea así, por lo que no hay que asociar software libre a software gratuito, ya que, aun conservando su carácter de libre, puede ser distribuido comercialmente. Del mismo modo, el software gratuito incluye en algunas ocasiones el código fuente, pese a lo cual no necesariamente tiene que ser libre en el mismo sentido, si no se garantizan los derechos de modificación y de distribución de las versiones modificadas del software.",
      options: {
        a: "El software libre no necesariamente tiene que ser gratuito; en cambio, el software gratuito siempre se considera software libre.",
        b: "El software gratuito puede llegar incluso a incluir el código fuente, y solamente en tales casos se considerará software libre.",
        c: "El software libre puede distribuirse comercialmente sin perder su carácter de libre.",
        d: "El software libre no garantiza los derechos de modificación y distribución de los programas modificados."
      },
      correct: "c",
      explanation: "La C es correcta: el texto dice literalmente que el software libre, «aun conservando su carácter de libre, puede ser distribuido comercialmente». La A es falsa porque el texto dice lo contrario: el software gratuito no siempre es libre. La B es incorrecta: incluir el código fuente no es condición suficiente para que sea libre. La D es incorrecta: es el software gratuito el que puede no garantizar esos derechos, no el software libre."
    },
    {
      number: 17,
      type: "verbal",
      text: "La Política Agraria Común ha recibido críticas porque parte de la producción agrícola europea se desecha o se exporta a países pobres. Esto provoca que los productos europeos, subvencionados para que el precio baje por debajo de su coste, se vendan a un precio artificialmente bajo, hundiendo las economías de los países pobres. Sin embargo, sin dichas subvenciones, los agricultores europeos no podrían competir con los de otros países cuyas condiciones laborales son pésimas, y que en ocasiones reciben ayudas de sus países de las que no se informa a la OMC.",
      options: {
        a: "Las condiciones laborales de los agricultores europeos son buenas gracias a las subvenciones de la PAC.",
        b: "Las subvenciones hacen que los productos agrícolas se vendan a precios excesivamente bajos.",
        c: "Las subvenciones de la PAC se reciben sin informar a la OMC.",
        d: "Sin las subvenciones de la PAC, las condiciones laborales de los agricultores de los países pobres serían mejores."
      },
      correct: "b",
      explanation: "La B es correcta: el texto dice que los productos se venden «a un precio artificialmente bajo». La A es incorrecta: el texto no dice que la PAC mejore las condiciones laborales de los agricultores europeos. La C es falsa: son los países pobres los que dan subvenciones sin informar a la OMC, no la PAC. La D no se puede deducir del texto."
    },
    {
      number: 18,
      type: "verbal",
      text: "A partir de la década de los noventa, para recibir las ayudas de la PAC es necesario desempeñar una serie de trabajos destinados tanto a mantener el medio ambiente como a mejorar la calidad y la salubridad de los productos, con lo cual se ayuda al mantenimiento sostenible de las tierras de cultivo aun no habiendo producción.",
      options: {
        a: "Las subvenciones de la PAC pueden llegar a percibirse aunque no haya producción.",
        b: "La política de la PAC ha estado siempre destinada a mantener el medio ambiente.",
        c: "A partir de la década de los noventa, las subvenciones de la PAC, además de la producción, exigen otros requisitos.",
        d: "Si no hay mejoras en la calidad y salubridad de los productos no se pueden percibir las subvenciones de la PAC."
      },
      correct: "a",
      explanation: "La A es correcta: el texto indica que basta con «desempeñar una serie de trabajos» para recibir las ayudas, y esto sirve para mantener las tierras «aun no habiendo producción». La B es incorrecta: la política de la PAC en este sentido es solo desde los años 90, no siempre. La C es incorrecta porque el texto no presenta la producción como requisito previo. La D es incorrecta: no se exigen mejoras, sino solo que se realicen los trabajos destinados a esa mejora."
    },
    {
      number: 19,
      type: "verbal",
      text: "Las poblaciones de urogallos se encuentran fundamentalmente en la Europa boreal, y en pequeños enclaves de montaña de zonas templadas, como la cornisa cantábrica, los Pirineos o los Alpes. Biológicamente se le considera una reliquia de la era glaciar, ya que tras este período se fue quedando aislado en zonas de alta montaña o más frías. En España, el urogallo es especie protegida desde 1986, pese a lo cual no ha podido evitarse el descenso paulatino de su población, tanto por la caza furtiva como por la deforestación, el auge de la ganadería en sus áreas de población o la construcción de carreteras.",
      options: {
        a: "Los urogallos han sufrido un creciente aislamiento tanto por la caza furtiva como por la deforestación, entre otras razones.",
        b: "La población de urogallos en España ha sufrido un fuerte descenso desde 1986.",
        c: "Tras la era glaciar, los urogallos quedaron reducidos a algunas zonas concretas.",
        d: "Los urogallos viven en zonas montañosas y templadas."
      },
      correct: "c",
      explanation: "La C es correcta: el texto dice que «tras este período se fue quedando aislado en zonas de alta montaña o más frías», es decir, quedó reducido a zonas concretas. La A es incorrecta: la caza furtiva y la deforestación han reducido su número, no causado su aislamiento geográfico. La B es incorrecta: el descenso es «paulatino» (gradual), no fuerte; y no se produjo a raíz de la protección en 1986. La D es incorrecta: los urogallos viven también en la Europa boreal (zonas frías), no solo en zonas templadas."
    },
    {
      number: 20,
      type: "verbal",
      text: "El navajo es el pueblo nativo estadounidense más numeroso, con unas 175.000 personas que se reparten entre varios estados del sudoeste de Estados Unidos y el norte de México. Su nombre les fue dado por los conquistadores españoles. Según parece, son originarios de Canadá, pero su vida nómada les llevó a emigrar hasta su ubicación actual, en la que se encuentra la reserva más extensa de cualquier tribu nativa estadounidense. Desde su contacto con los españoles, aprendieron a criar ovejas y a trabajar la plata y las piedras preciosas.",
      options: {
        a: "Los navajos son el pueblo más numeroso de entre los nativos estadounidenses y los que disfrutan de la mayor reserva.",
        b: "Los navajos fueron descubiertos por primera vez por los españoles.",
        c: "Las poblaciones de navajos se extienden por Estados Unidos, México y Canadá.",
        d: "La reserva más poblada de entre las tribus nativas estadounidenses es la ocupada por los navajos."
      },
      correct: "a",
      explanation: "La A es correcta: el texto dice que son «el pueblo nativo estadounidense más numeroso» y que tienen «la reserva más extensa de cualquier tribu nativa estadounidense». La B es falsa: los españoles les dieron el nombre, no los «descubrieron». La C es incorrecta: los navajos viven en EEUU y México, pero son originarios de Canadá (no viven allí actualmente). La D es incorrecta: la reserva navaja es la más «extensa» (grande en tamaño), no la más poblada."
    },
    {
      number: 21,
      type: "verbal",
      text: "La última parte de la Guerra de Troya dio lugar a la Iliada, de Homero. La historia relata una serie de increíbles aventuras entre las que se cuentan la victoria de Aquiles sobre la reina de las amazonas y su muerte por una flecha en el talón a manos del troyano Paris. Finalmente la ciudad fue capturada cuando los griegos usaron la estratagema de construir un gigantesco caballo hueco de madera y presentarlo a los troyanos como regalo, a la vez que fingían abandonar el sitio de la ciudad. Unos pocos troyanos lograron escapar hacia la actual Italia, comandados por Eneas, como se relata en la Eneida, de Virgilio. Según los historiadores, la Guerra de Troya fue una guerra real disputada sobre 1200 a. C. por el control del actual estrecho de los Dardanelos, entonces llamado Helesponto.",
      options: {
        a: "Los sucesos de la Guerra de Troya inspiraron la Iliada de Homero y la Eneida de Virgilio.",
        b: "Los griegos ganaron la guerra tras regalar a los troyanos un caballo de madera.",
        c: "Los troyanos controlaron durante largo tiempo el estrecho de los Dardanelos.",
        d: "Aquiles murió a manos de Paris tras derrotar a la reina de las amazonas."
      },
      correct: "d",
      explanation: "La D es correcta: el texto dice literalmente que se cuentan «la victoria de Aquiles sobre la reina de las amazonas y su muerte por una flecha en el talón a manos del troyano Paris». La A es incorrecta: la Guerra de Troya inspiró la Iliada, pero la Eneida narra la historia de los troyanos que escaparon. La B es incorrecta: el texto dice que la ciudad fue capturada con el caballo, pero capturar una ciudad no es lo mismo que ganar una guerra. La C es incorrecta: los troyanos disputaban el control del estrecho, pero el texto no dice que lo controlaran."
    },
    {
      number: 22,
      type: "verbal",
      text: "El maltés es una de las dos lenguas oficiales de Malta, junto con el inglés, y es una de las lenguas oficiales de la Unión Europea. Su origen es semítico, pero su evolución ha sido peculiar, ya que ha recibido gran cantidad de préstamos de otras lenguas, por lo que se le suele definir como lengua criolla, e incluso inclasificable para algunos lingüistas. Es la única lengua semítica que se escribe con caracteres latinos. Durante algún tiempo se especuló con un posible origen fenicio, pero esta teoría se basaba más en temas políticos que lingüísticos.",
      options: {
        a: "El maltés es una lengua inclasificable, cuyo origen no es bien conocido.",
        b: "El maltés, a pesar de ser semítico, utiliza el alfabeto latino.",
        c: "El maltés tiene origen semítico, pero muchos préstamos fenicios.",
        d: "Por la gran cantidad de préstamos que ha recibido de otras lenguas, el maltés se clasifica entre las lenguas criollas."
      },
      correct: "b",
      explanation: "La A es falsa: su origen sí es conocido (es semítico), y que sea «inclasificable» es la opinión de solo algunos lingüistas. La C es incorrecta: el texto no especifica que los préstamos sean fenicios — el origen fenicio fue una teoría descartada. La D es incorrecta: no se clasifica definitivamente como criolla, ya que incluso algunos lo consideran inclasificable. La B es correcta: el texto dice que es «la única lengua semítica que se escribe con caracteres latinos»."
    },
    {
      number: 23,
      type: "verbal",
      text: "Los aeróstatos, también denominados globos aerostáticos, son aeronaves no propulsadas que vuelan sirviéndose del principio de los fluidos formulado por Arquímedes, considerando que el aire es un fluido, en este caso. Se les conoce como globos porque están compuestos por una bolsa que encierra una masa de gas más ligero que el aire. En algunos casos, se puede controlar la elevación, pero habitualmente los globos se dejan llevar por las corrientes. El gas que contiene puede ser helio o hidrógeno, aunque es más común la utilización del helio, pese a ser más pesado, al ser el hidrógeno inflamable.",
      options: {
        a: "El hidrógeno es menos recomendable que el helio para los aeróstatos ya que es más pesado e inflamable.",
        b: "Según el principio de Arquímedes, el aire se considera como un fluido.",
        c: "Para que un globo pueda volar, el gas que contiene debe ser más ligero que el aire.",
        d: "Al dirigir un globo, se controla la elevación pero no la dirección."
      },
      correct: "c",
      explanation: "La A es incorrecta: el hidrógeno no es más pesado que el helio — el texto dice que el helio es más pesado que el hidrógeno. La B es incorrecta: el texto aplica el principio al aire «en este caso», lo que implica que no es la formulación general del principio. La D es incorrecta: solo «en algunos casos» se puede controlar la elevación. La C es correcta: el texto dice que los globos «están compuestos por una bolsa que encierra una masa de gas más ligero que el aire», sin excepciones."
    },
    {
      number: 24,
      type: "verbal",
      text: "En 1971, Francis Ford Coppola se embarcó en el proyecto que acabaría por cambiarle la vida. Aunque en un principio mostró reticencias, acabó por aceptar adaptar una serie de novelas de Mario Puzo, dando origen a la famosa saga de «El Padrino». La primera parte se convirtió en la película más taquillera de la historia y ganadora de varios premios Óscar. Sin embargo, Coppola tuvo que lidiar con los directivos de la productora, que no aceptaban a los actores elegidos por él, para que no le sustituyeran por otro director durante las primeras semanas de rodaje.",
      options: {
        a: "Francis Ford Coppola no aceptó que la productora del film «El Padrino» eligiera en su lugar a los actores.",
        b: "Francis Ford Coppola cambió su vida para poder adaptar las novelas de «El Padrino».",
        c: "Francis Ford Coppola adaptó una serie de novelas de Mario Puzo al cine, pese a las reticencias de este.",
        d: "En un principio, Coppola estuvo cerca de ser sustituido como director de «El Padrino»."
      },
      correct: "d",
      explanation: "La D es correcta: el texto dice que Coppola tuvo que lidiar con los directivos «para que no le sustituyeran por otro director durante las primeras semanas de rodaje», lo que implica que estuvo cerca de ser sustituido. La A invierte la situación: la productora no aceptaba a los actores elegidos por él, no que él no aceptara la elección de la productora. La B es incorrecta: fue el proyecto el que cambió su vida, no que él cambiara su vida para aceptarlo. La C atribuye las reticencias a Puzo, pero en el texto las reticencias eran de Coppola."
    },
    {
      number: 25,
      type: "verbal",
      text: "La República de Chipre es un Estado internacionalmente reconocido, pero solamente controla los dos tercios del sur de la isla. El tercio norte fue ocupado por Turquía en 1974, y en él se instauró la República Turca del Norte de Chipre, únicamente reconocido por la propia Turquía. Chipre obtuvo su independencia de los británicos en 1960, e instauró una constitución que repartía los poderes entre las comunidades griega y turca, pero cuyos complejos mecanismos dificultaban el normal funcionamiento de las estructuras del Estado. Un golpe de Estado pro-griego en 1974 provocó la invasión turca del norte de la isla y la división del país, que aun continúa pese a los esfuerzos de la Unión europea por conseguir una plena reunificación. Sin embargo, los diferentes planes ideados hasta ahora han sido rechazados por la población chipriota.",
      options: {
        a: "La población chipriota es contraria a la reunificación del país.",
        b: "La República Turca del Norte de Chipre no está reconocida oficialmente por las organizaciones internacionales.",
        c: "Tras el conflicto de 1974, griegos y turcos se repartieron la isla.",
        d: "La constitución otorgada por los británicos incluía unos mecanismos complejos de reparto del poder."
      },
      correct: "b",
      explanation: "La B es correcta: la República Turca del Norte de Chipre es «únicamente reconocida por la propia Turquía», que no es una organización internacional. La A es incorrecta: los chipriotas han rechazado los planes de reunificación, pero eso no significa que sean contrarios a la reunificación en sí. La C es incorrecta: no hubo un reparto pactado — Turquía ocupó el norte. La D es incorrecta: la constitución fue instaurada por los propios chipriotas tras la independencia de los británicos, no otorgada por los británicos."
    }
  ]
});

// ── RVNE 1 · Razonamiento Numérico ───────────────────────────
window.TESTS.push({
  id: "RVNE1-N",
  title: "RVNE 1 · Razonamiento Numérico",
  sections: [
    {
      title: "Razonamiento Numérico",
      instruction: "Las siguientes preguntas hacen referencia a las tablas de datos que aparecen antes de cada grupo de preguntas.",
      questionRange: [26, 40]
    }
  ],
  tables: {
    table_acero: {
      title: "Producción de acero por miles de toneladas",
      headers: ["Año", "Luxemburgo", "Francia", "España", "Países Bajos", "Reino Unido"],
      rows: [
        ["1999", "90", "500", "400", "600", "1.000"],
        ["2000", "120", "800", "750", "620", "900"],
        ["2001", "150", "950", "920", "620", "850"],
        ["2002", "180", "1.200", "1.000", "620", "800"],
        ["2003", "220", "1.100", "1.300", "700", "750"]
      ]
    },
    table_turismo: {
      title: "Gasto de turistas en España en millones de euros",
      headers: ["", "Reino Unido", "Alemania", "Países Bajos", "Francia", "Suecia"],
      rows: [
        ["Junio", "800", "1.100", "800", "600", "1.000"],
        ["Julio", "1.000", "1.200", "1.300", "600", "1.500"],
        ["Agosto", "1.500", "1.300", "1.400", "700", "1.200"],
        ["Septiembre", "900", "1.150", "1.100", "500", "1.300"]
      ],
      notes: "Porcentaje del gasto realizado por turistas hombres: 60% · Porcentaje del gasto realizado por turistas mujeres: 40%"
    },
    table_comercio: {
      title: "Balanza comercial (millones de euros)",
      headers: ["País", "Total exportaciones", "Total importaciones", "% Exportaciones / producción total"],
      rows: [
        ["España", "5.800", "7.200", "33%"],
        ["Francia", "8.900", "6.500", "25%"],
        ["Italia", "6.150", "7.000", "35%"],
        ["Alemania", "12.400", "8.500", "18%"],
        ["Grecia", "3.800", "5.900", "45%"]
      ]
    }
  },
  questions: [
    {
      number: 26,
      type: "numerical",
      tableRef: "table_acero",
      text: "¿En qué año se produjo más cantidad de acero total?",
      options: { a: "2000", b: "2001", c: "2002", d: "2003" },
      correct: "d",
      explanation: "Hay que sumar la producción de todos los países para cada año:\n2000: 120+800+750+620+900 = 3.190\n2001: 150+950+920+620+850 = 3.490\n2002: 180+1.200+1.000+620+800 = 3.800\n2003: 220+1.100+1.300+700+750 = 4.070\nEl año con mayor producción total es 2003."
    },
    {
      number: 27,
      type: "numerical",
      tableRef: "table_acero",
      text: "¿En qué país ha sido mayor el incremento porcentual de la producción entre 1999 y 2003?",
      options: { a: "Luxemburgo", b: "Francia", c: "España", d: "Países Bajos" },
      correct: "c",
      explanation: "Incremento porcentual = (valor 2003 − valor 1999) / valor 1999:\nLuxemburgo: (220−90)/90 ≈ 1,44 → +144%\nFrancia: (1.100−500)/500 = 1,20 → +120%\nEspaña: (1.300−400)/400 = 2,25 → +225%\nPaíses Bajos: (700−600)/600 ≈ 0,17 → +17%\nEl mayor incremento porcentual corresponde a España."
    },
    {
      number: 28,
      type: "numerical",
      tableRef: "table_acero",
      text: "¿En qué país se ha incrementado menos la producción en términos reales?",
      options: { a: "Luxemburgo", b: "Francia", c: "España", d: "Países Bajos" },
      correct: "d",
      explanation: "Incremento en términos reales = valor 2003 − valor 1999:\nLuxemburgo: 220−90 = 130\nFrancia: 1.100−500 = 600\nEspaña: 1.300−400 = 900\nPaíses Bajos: 700−600 = 100\nEl menor incremento en términos reales corresponde a Países Bajos (solo 100 miles de toneladas)."
    },
    {
      number: 29,
      type: "numerical",
      tableRef: "table_acero",
      text: "¿Qué país obtuvo mayor producción total entre 2001 y 2003?",
      options: { a: "Francia", b: "España", c: "Países Bajos", d: "Reino Unido" },
      correct: "a",
      explanation: "Países Bajos y Reino Unido tienen menor producción que Francia y España en todos los años, por lo que se pueden descartar. Comparando los otros dos:\nFrancia: 950+1.200+1.100 = 3.250\nEspaña: 920+1.000+1.300 = 3.220\nLa mayor producción total entre 2001 y 2003 corresponde a Francia."
    },
    {
      number: 30,
      type: "numerical",
      tableRef: "table_acero",
      text: "Suponiendo que el kilogramo de acero neerlandés y británico se vende al doble del precio del francés y español, ¿qué país ha obtenido mayores beneficios por la venta de su producción en 2003?",
      options: { a: "Francia", b: "España", c: "Países Bajos", d: "Reino Unido" },
      correct: "d",
      explanation: "Valor de la producción en 2003 (ajustado al precio de Francia/España = 1 unidad):\nFrancia: 1.100 × 1 = 1.100\nEspaña: 1.300 × 1 = 1.300\nPaíses Bajos: 700 × 2 = 1.400 (precio doble)\nReino Unido: 750 × 2 = 1.500 (precio doble)\nEl mayor beneficio corresponde al Reino Unido."
    },
    {
      number: 31,
      type: "numerical",
      tableRef: "table_turismo",
      text: "¿Cuál de estos colectivos de turistas gasta más dinero en agosto?",
      options: { a: "Mujeres británicas", b: "Hombres alemanes", c: "Turistas franceses", d: "Hombres suecos" },
      correct: "b",
      explanation: "Gasto en agosto por colectivo:\nMujeres británicas: 40% de 1.500 = 600 M€\nHombres alemanes: 60% de 1.300 = 780 M€\nTuristas franceses (total): 700 M€\nHombres suecos: 60% de 1.200 = 720 M€\nEl mayor gasto corresponde a los hombres alemanes (780 M€)."
    },
    {
      number: 32,
      type: "numerical",
      tableRef: "table_turismo",
      text: "¿De qué país provienen los turistas que más dinero gastan durante todo el período estival?",
      options: { a: "Reino Unido", b: "Alemania", c: "Países Bajos", d: "Suecia" },
      correct: "d",
      explanation: "Gasto total por país (junio + julio + agosto + septiembre):\nReino Unido: 800+1.000+1.500+900 = 4.200 M€\nAlemania: 1.100+1.200+1.300+1.150 = 4.750 M€\nPaíses Bajos: 800+1.300+1.400+1.100 = 4.600 M€\nSuecia: 1.000+1.500+1.200+1.300 = 5.000 M€\nEl mayor gasto total corresponde a Suecia."
    },
    {
      number: 33,
      type: "numerical",
      tableRef: "table_turismo",
      text: "¿En qué porcentaje supera el gasto de las mujeres alemanas en julio al de los hombres franceses?",
      options: { a: "25%", b: "33%", c: "40%", d: "50%" },
      correct: "b",
      explanation: "Mujeres alemanas en julio: 40% de 1.200 = 480 M€\nHombres franceses en julio: 60% de 600 = 360 M€\nDiferencia: 480 − 360 = 120 M€\nPorcentaje de superación: 120 / 360 = 1/3 ≈ 33%\nLas mujeres alemanas superan en un 33% el gasto de los hombres franceses."
    },
    {
      number: 34,
      type: "numerical",
      tableRef: "table_turismo",
      text: "¿En qué mes es mayor el gasto total realizado por los turistas?",
      options: { a: "Junio", b: "Julio", c: "Agosto", d: "Septiembre" },
      correct: "c",
      explanation: "Gasto total por mes (suma de todos los países):\nJunio: 800+1.100+800+600+1.000 = 4.300 M€\nJulio: 1.000+1.200+1.300+600+1.500 = 4.600 M€\nAgosto: 1.500+1.300+1.400+700+1.200 = 6.100 M€\nSeptiembre: 900+1.150+1.100+500+1.300 = 4.950 M€\nEl mes con mayor gasto total es agosto."
    },
    {
      number: 35,
      type: "numerical",
      tableRef: "table_turismo",
      text: "¿En qué porcentaje es mayor el gasto de los turistas suecos en agosto que el de los turistas holandeses en junio?",
      options: { a: "30%", b: "40%", c: "50%", d: "60%" },
      correct: "c",
      explanation: "Gasto turistas suecos en agosto: 1.200 M€\nGasto turistas holandeses en junio: 800 M€\nDiferencia: 1.200 − 800 = 400 M€\nPorcentaje: 400 / 800 = 0,50 = 50%\nEl gasto sueco en agosto supera en un 50% al gasto holandés en junio."
    },
    {
      number: 36,
      type: "numerical",
      tableRef: "table_comercio",
      text: "¿En qué país es más desfavorable la balanza comercial en términos reales?",
      options: { a: "España", b: "Francia", c: "Italia", d: "Grecia" },
      correct: "d",
      explanation: "Balanza comercial = Exportaciones − Importaciones:\nEspaña: 5.800−7.200 = −1.400\nFrancia: 8.900−6.500 = +2.400\nItalia: 6.150−7.000 = −850\nAlemania: 12.400−8.500 = +3.900\nGrecia: 3.800−5.900 = −2.100\nEl mayor desequilibrio negativo corresponde a Grecia (−2.100 M€)."
    },
    {
      number: 37,
      type: "numerical",
      tableRef: "table_comercio",
      text: "¿En qué país ha sido mayor la producción total?",
      options: { a: "España", b: "Francia", c: "Italia", d: "Grecia" },
      correct: "b",
      explanation: "Producción total = Exportaciones / (% exportaciones / 100):\nEspaña: 5.800 / 0,33 ≈ 17.575 M€\nFrancia: 8.900 / 0,25 = 35.600 M€\nItalia: 6.150 / 0,35 ≈ 17.571 M€\nGrecia: 3.800 / 0,45 ≈ 8.444 M€\nLa mayor producción total corresponde a Francia."
    },
    {
      number: 38,
      type: "numerical",
      tableRef: "table_comercio",
      text: "¿Qué porcentaje de la producción suponen las importaciones españolas?",
      options: { a: "41%", b: "45%", c: "48%", d: "52%" },
      correct: "a",
      explanation: "Producción total española: 5.800 / 0,33 ≈ 17.575 M€\nImportaciones españolas: 7.200 M€\nPorcentaje: (7.200 / 17.575) × 100 ≈ 40,97% ≈ 41%\nLas importaciones españolas representan aproximadamente el 41% de su producción total."
    },
    {
      number: 39,
      type: "numerical",
      tableRef: "table_comercio",
      text: "¿A cuánto asciende el beneficio total de la balanza comercial del conjunto de estos países?",
      options: { a: "1.520", b: "1.870", c: "1.950", d: "2.100" },
      correct: "c",
      explanation: "Balanza comercial de cada país:\nEspaña: 5.800−7.200 = −1.400\nFrancia: 8.900−6.500 = +2.400\nItalia: 6.150−7.000 = −850\nAlemania: 12.400−8.500 = +3.900\nGrecia: 3.800−5.900 = −2.100\nSuma total: −1.400+2.400−850+3.900−2.100 = 1.950 M€"
    },
    {
      number: 40,
      type: "numerical",
      tableRef: "table_comercio",
      text: "¿Qué porcentaje supondrían las exportaciones francesas sobre la producción total alemana?",
      options: { a: "11%", b: "13%", c: "15%", d: "18%" },
      correct: "b",
      explanation: "Exportaciones francesas: 8.900 M€\nProducción total alemana: 12.400 / 0,18 ≈ 68.889 M€\nPorcentaje: (8.900 / 68.889) × 100 ≈ 12,92% ≈ 13%\nLas exportaciones francesas representan aproximadamente el 13% de la producción total alemana."
    }
  ]
});
