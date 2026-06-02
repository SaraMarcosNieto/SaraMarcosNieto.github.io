window.TESTS = window.TESTS || [];

window.TESTS.push({
  id: "SEG-T5",
  title: "Seguimiento Tema 5 · Presupuesto de la UE",
  defaultTimer: 20,
  sections: [
    {
      title: "Presupuesto de la UE",
      instruction: "Cada pregunta tiene cuatro opciones de respuesta. Seleccione la respuesta correcta.",
      questionRange: [1, 20]
    }
  ],
  tables: {},
  questions: [
    {
      number: 1,
      type: "knowledge",
      text: "El sistema financiero de la UE:",
      options: {
        a: "Tiene objetivos propios.",
        b: "Persigue los mismos objetivos que el sistema de los Estados miembros.",
        c: "Hace un seguimiento excesivo de los presupuestos nacionales.",
        d: "Es una especie de resumen de todos los presupuestos nacionales."
      },
      correct: "a",
      explanation: "El sistema financiero de la UE tiene objetivos específicos propios (cohesión económica y social, competitividad, desarrollo regional, PAC, etc.), independientes de los sistemas financieros nacionales."
    },
    {
      number: 2,
      type: "knowledge",
      text: "A grandes rasgos, los gastos de la UE se financian:",
      options: {
        a: "Mediante las aduanas exteriores de cada Estado miembro.",
        b: "Mediante la contribución de los Estados miembros y mediante las fuentes de ingreso propias de la UE.",
        c: "Mediante el arancel aduanero interior común.",
        d: "Con cargo a los presupuestos nacionales, aportando cada Estado miembro una cantidad según su riqueza."
      },
      correct: "b",
      explanation: "Los gastos de la UE se financian principalmente a través del sistema de contribuciones de los estados miembros y del sistema de recursos propios (derechos de aduana, porcentaje sobre el IVA, porcentaje sobre la RNB)."
    },
    {
      number: 3,
      type: "knowledge",
      text: "Los principios presupuestarios son:",
      options: {
        a: "Unidad, universalidad, no afectación, anualidad y equilibrio.",
        b: "Unidad, universalidad, no afectación, anualidad, equilibrio, especialidad y buena gestión financiera.",
        c: "Unidad, universalidad, anualidad, equilibrio, especialidad y buena gestión financiera.",
        d: "Ninguna de las respuestas anteriores es correcta."
      },
      correct: "c",
      explanation: "Los seis principios presupuestarios de la UE son: unidad, universalidad, anualidad, equilibrio, especialidad y buena gestión financiera. La «no afectación» no figura como principio separado."
    },
    {
      number: 4,
      type: "knowledge",
      text: "Como fuentes de los ingresos comunitarios, destacan:",
      options: {
        a: "Exacciones CECA, exacciones reguladoras agrícolas, derechos de aduana, un porcentaje sobre el IVA, un porcentaje sobre el PNB y empréstitos.",
        b: "El sistema de contribuciones financieras de los Estados miembros y el sistema de recursos propios.",
        c: "El sistema de recursos propios y el sistema de recursos autónomo.",
        d: "Los recursos propios tradicionales y los recursos propios «financieros»."
      },
      correct: "b",
      explanation: "Las fuentes de ingresos de la UE se articulan en torno al sistema de contribuciones financieras de los estados miembros y el sistema de recursos propios de la Unión."
    },
    {
      number: 5,
      type: "knowledge",
      text: "¿Qué porcentaje aproximado de los ingresos comunitarios se destina a cubrir los gastos de funcionamiento de las instituciones de la UE?",
      options: {
        a: "1%",
        b: "5%",
        c: "10%",
        d: "15%"
      },
      correct: "b",
      explanation: "Aproximadamente el 5% de los ingresos comunitarios se destina a los gastos administrativos de funcionamiento de las instituciones (sueldos, edificios, servicios, etc.)."
    },
    {
      number: 6,
      type: "knowledge",
      text: "Los gastos administrativos se dividen en:",
      options: {
        a: "Gastos generales, gastos de acciones exteriores, gastos interinstitucionales.",
        b: "Gastos del fondo de cohesión, gastos operacionales y compensaciones.",
        c: "Ayudas internas, gastos generales y gastos operacionales.",
        d: "Gastos generales, gastos derivados de misiones específicas y gastos de carácter interinstitucional."
      },
      correct: "d",
      explanation: "Los gastos administrativos se dividen en: gastos generales (funcionamiento diario), gastos derivados de misiones específicas (políticas y programas) y gastos de carácter interinstitucional (cooperación entre instituciones, traducción, etc.)."
    },
    {
      number: 7,
      type: "knowledge",
      text: "¿Qué son las reservas?",
      options: {
        a: "Una partida contabilizada en el presupuesto como gasto y mantenida en reserva para eventuales necesidades de gastos imprevistos o urgentes.",
        b: "En sentido amplio, el capital del Banco Central Europeo.",
        c: "Unas cantidades consignadas en el presupuesto para hacer frente a imprevistos definidos en el mismo.",
        d: "Ninguna de las anteriores es correcta."
      },
      correct: "c",
      explanation: "Las reservas son cantidades consignadas en el presupuesto destinadas a hacer frente a situaciones imprevistas (crisis humanitarias, emergencias, fluctuaciones económicas), aportando flexibilidad al presupuesto."
    },
    {
      number: 8,
      type: "knowledge",
      text: "Los destinatarios de las compensaciones son:",
      options: {
        a: "Todos los Estados miembros cuyo PIB sea inferior al 50% de la media comunitaria.",
        b: "Los terceros Estados con los que la UE tiene acuerdos comerciales para favorecer su desarrollo económico.",
        c: "Los Estados asociados a la UE.",
        d: "Los nuevos Estados miembros."
      },
      correct: "d",
      explanation: "Las compensaciones están destinadas principalmente a los nuevos estados miembros que se incorporan a la UE, para facilitar su integración y cubrir los costes iniciales de su adhesión."
    },
    {
      number: 9,
      type: "knowledge",
      text: "El instrumento de flexibilidad:",
      options: {
        a: "Es anual.",
        b: "Es bianual.",
        c: "Tiene una duración de tres años.",
        d: "No tiene límite, estará activo el tiempo que sea necesario."
      },
      correct: "a",
      explanation: "El Instrumento de Flexibilidad es un mecanismo presupuestario de carácter anual que permite financiar gastos específicos que superan los límites del marco financiero plurianual. Los fondos no utilizados pueden trasladarse a años siguientes dentro del mismo MFP."
    },
    {
      number: 10,
      type: "knowledge",
      text: "Dentro del procedimiento de elaboración del anteproyecto de presupuesto en el Consejo, la reunión tripartita Parlamento-Consejo-Comisión tiene lugar:",
      options: {
        a: "En el mes de abril.",
        b: "En el mes de mayo.",
        c: "En el mes de abril, pero lo correcto es hablar de «anteproyecto de presupuesto en la Comisión».",
        d: "En el mes de mayo, pero lo correcto es hablar de «anteproyecto de presupuesto en el Parlamento»."
      },
      correct: "c",
      explanation: "La reunión tripartita tiene lugar en abril, pero el anteproyecto de presupuesto es elaborado por la Comisión (no el Consejo). La Comisión presenta el proyecto definitivo al Consejo y al Parlamento en mayo-junio."
    },
    {
      number: 11,
      type: "knowledge",
      text: "¿Quién ejecuta el presupuesto comunitario?",
      options: {
        a: "Parlamento.",
        b: "Consejo.",
        c: "Comisión.",
        d: "Tribunal de Cuentas."
      },
      correct: "c",
      explanation: "La Comisión Europea es la responsable de ejecutar el presupuesto comunitario: distribuye los fondos, supervisa su uso y garantiza que se destinen a las políticas acordadas."
    },
    {
      number: 12,
      type: "knowledge",
      text: "Los órganos de ejecución presupuestaria son:",
      options: {
        a: "Tribunal de Cuentas y Comité de Vigilancia.",
        b: "Comité de Vigilancia y Comisión.",
        c: "Parlamento Europeo y Contables.",
        d: "Contables y ordenadores."
      },
      correct: "d",
      explanation: "Los órganos de ejecución presupuestaria son los ordenadores (autorizan y supervisan el gasto) y los contables (responsables de los aspectos contables, estados financieros y registros de transacciones)."
    },
    {
      number: 13,
      type: "knowledge",
      text: "En materia de control presupuestario, los controles externos están en manos de:",
      options: {
        a: "Parlamento Europeo y Comisión.",
        b: "Tribunal de Cuentas y Comisión.",
        c: "Parlamento Europeo, Consejo y Tribunal de Cuentas.",
        d: "Parlamento Europeo y Parlamentos nacionales."
      },
      correct: "c",
      explanation: "Los controles externos están en manos del Parlamento Europeo (aprueba la quitación), el Consejo (supervisión política) y el Tribunal de Cuentas (auditoría externa de ingresos y gastos)."
    },
    {
      number: 14,
      type: "knowledge",
      text: "La intervención de los comités de gestión presupuestaria se produce:",
      options: {
        a: "Cuando la Comisión ejecuta actos por atribución del Consejo.",
        b: "Cuando el Consejo ejecuta actos por atribución de la Comisión.",
        c: "Cuando el Tribunal de cuentas ejecuta actos por atribución del Consejo.",
        d: "Ninguna de las respuestas anteriores es correcta."
      },
      correct: "a",
      explanation: "Los comités de gestión presupuestaria intervienen cuando la Comisión ejecuta actos que le han sido atribuidos por el Consejo, supervisando que la ejecución sea coherente con las políticas acordadas por los estados miembros."
    },
    {
      number: 15,
      type: "knowledge",
      text: "¿Qué tipos de comités de gestión presupuestaria se establecieron con el AUE?",
      options: {
        a: "Consultivos, de gestión y de reglamentación.",
        b: "Consultivos, de reglamentación y de ejecución.",
        c: "Sólo consultivos.",
        d: "De reglamentación y de gestión."
      },
      correct: "a",
      explanation: "El Acta Única Europea (1986) estableció tres tipos de comités: consultivos (asesoramiento no vinculante), de gestión (supervisión de programas específicos) y de reglamentación (supervisión estricta con normas detalladas)."
    },
    {
      number: 16,
      type: "knowledge",
      text: "¿Qué texto definió los tipos y objetivos de estos comités?",
      options: {
        a: "Tratado de Roma.",
        b: "Acta Única Europea.",
        c: "Tratado de Ámsterdam.",
        d: "Tratado de Niza."
      },
      correct: "b",
      explanation: "El Acta Única Europea (AUE, 1986) introdujo y definió los tipos y objetivos de los comités consultivos, de gestión y de reglamentación como parte de sus reformas en el proceso de toma de decisiones."
    },
    {
      number: 17,
      type: "knowledge",
      text: "El Consejo adoptará su posición sobre el proyecto de presupuesto y la transmitirá al Parlamento, a más tardar:",
      options: {
        a: "El 1 de septiembre del año que precede al de su ejecución.",
        b: "El 1 de octubre del año que precede al de su ejecución.",
        c: "El 5 de octubre del año que precede al de su ejecución.",
        d: "El 5 de septiembre del año que precede al de su ejecución."
      },
      correct: "b",
      explanation: "El Consejo debe transmitir su posición al Parlamento a más tardar el 1 de octubre del año anterior al ejercicio presupuestario, para que ambas instituciones puedan negociar y acordar el presupuesto antes del 1 de enero."
    },
    {
      number: 18,
      type: "knowledge",
      text: "¿Quién puede decirse que tiene mayor poder dentro del procedimiento presupuestario?",
      options: {
        a: "Comisión.",
        b: "Consejo.",
        c: "Parlamento.",
        d: "Los tres por igual."
      },
      correct: "c",
      explanation: "El Parlamento Europeo tiene mayor poder en el procedimiento presupuestario porque tiene la última palabra sobre la aprobación del presupuesto; si lo rechaza, debe elaborarse un nuevo proyecto."
    },
    {
      number: 19,
      type: "knowledge",
      text: "El presupuesto europeo tiene carácter:",
      options: {
        a: "Anual.",
        b: "Bianual.",
        c: "Trianual.",
        d: "Quincenal."
      },
      correct: "a",
      explanation: "El presupuesto europeo tiene carácter anual (se planifica y ejecuta para un año). Se enmarca en el Marco Financiero Plurianual (MFP, generalmente de 7 años), pero el instrumento de ejecución es el presupuesto anual."
    },
    {
      number: 20,
      type: "knowledge",
      text: "No es un gasto general:",
      options: {
        a: "Sueldos de los funcionarios.",
        b: "Alquiler o compra de inmuebles.",
        c: "Informática.",
        d: "Pensiones de los funcionarios."
      },
      correct: "d",
      explanation: "Las pensiones de los funcionarios no se clasifican como gasto general sino como un gasto específico separado. Los sueldos, el alquiler/compra de inmuebles y la informática sí son gastos generales de funcionamiento."
    }
  ]
});
