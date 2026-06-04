window.TESTS = window.TESTS || [];

window.TESTS.push({
  id: "RVNE36",
  title: "RVNE 36 · Razonamiento Numérico",
  defaultTimer: 20,
  sections: [
    {
      title: "Razonamiento Numérico",
      instruction: "Las siguientes preguntas hacen referencia a las tablas de datos que aparecen antes de cada grupo de preguntas. Cada pregunta tiene cinco opciones de respuesta. Seleccione la respuesta correcta.",
      questionRange: [1, 10]
    }
  ],
  tables: {
    table_energia: {
      title: "Producción de energía per cápita en 2011 (en teravatios)",
      headers: ["", "ESPAÑA", "ALEMANIA", "FRANCIA", "REINO UNIDO"],
      rows: [
        ["Hidroeléctrica", "82", "68", "74", "23"],
        ["Nuclear", "48", "140", "140", "68"],
        ["Eólica/Solar", "102", "178", "134", "312"],
        ["Otras fuentes", "58", "14", "66", "18"],
        ["POBLACIÓN (millones)", "46,2", "82", "65,4", "63"]
      ]
    },
    table_elecciones: {
      title: "Porcentaje de participación en elecciones al PE",
      headers: ["", "España", "Alemania", "Italia", "Francia", "Reino Unido"],
      rows: [
        ["1994", "48%", "63%", "44%", "68%", "39%"],
        ["1999", "56%", "59%", "46%", "70%", "43%"],
        ["2004", "52%", "57%", "45%", "72%", "41%"],
        ["2009", "44%", "52%", "41%", "66%", "35%"],
        ["Votos válidos (2009)", "10.164.000", "21.320.000", "12.423.000", "21.582.000", "11.025.000"],
        ["Parlamentarios elegidos (2009)", "50", "99", "72", "72", "72"]
      ]
    },
    table_aeropuertos: {
      title: "Pasajeros internacionales por aeropuerto",
      headers: ["País", "Aeropuerto", "2000 (M pas.)", "2005 (M pas.)", "2010 (M pas.)", "Facturación 2010 (M€)"],
      rows: [
        ["Alemania", "Frankfurt", "9,8", "10", "10,2", "609"],
        ["Alemania", "Munich", "2,5", "2,8", "2,4", "160"],
        ["Alemania", "Otros", "12,7", "14,2", "17,6", "702"],
        ["Francia", "Orly", "5,6", "6", "6,5", "255"],
        ["Francia", "De Gaulle", "6,6", "6,9", "7,2", "417"],
        ["Francia", "Otros", "7,7", "7,85", "8", "270"]
      ]
    }
  },
  questions: [
    {
      number: 1,
      type: "numerical",
      tableRef: "table_energia",
      text: "La población alemana representa un 16% de la población total de la UE. Su producción total de energía ha sido la décima parte de la producida en todos los países. Sabiendo que en toda la UE, el 20% de toda la energía que se produce es de origen nuclear, ¿cuántos teravatios de energía nuclear per cápita se han producido en 2011 en toda la UE?",
      options: {
        a: "50",
        b: "125",
        c: "128",
        d: "320",
        e: "475"
      },
      correct: "c",
      explanation: "Población UE = 82/0,16 = 512,5 M. Energía total Alemania = 400 tv/cáp × 82 M = 32.800 M tv; total UE = ×10 = 328.000 M tv. Nuclear UE = 20% × 328.000 = 65.600 M tv; per cápita = 65.600/512,5 = 128 teravatios."
    },
    {
      number: 2,
      type: "numerical",
      tableRef: "table_energia",
      text: "Francia ha implementado un plan para reducir su dependencia de la energía nuclear, reduciendo la cantidad total de energía nuclear en un 5% hasta 2020 y a la vez incrementando la producción conjunta de energía eólica/solar y de otros tipos (excluida la hidroeléctrica) en 1/4 de la cantidad actual. Si todas las previsiones se cumplen, ¿cuál será el porcentaje de la energía nuclear total producida respecto de la suma de todas las demás sin incluir la hidroeléctrica?",
      options: {
        a: "43,5%",
        b: "45,7%",
        c: "53,2%",
        d: "66,5%",
        e: "70%"
      },
      correct: "c",
      explanation: "Nuclear 2020 = 140 × 65,4 × 0,95 = 8.698,2 M tv. Resto sin hidroeléctrica 2020 = (134+66) × 65,4 × (5/4) = 16.350 M tv. Porcentaje = 8.698,2 / 16.350 = 53,2%."
    },
    {
      number: 3,
      type: "numerical",
      tableRef: "table_energia",
      text: "¿En qué porcentaje debería incrementar España su producción de energía eólica y solar total para alcanzar los niveles actuales de producción per cápita de Alemania?",
      options: {
        a: "21,6%",
        b: "42,7%",
        c: "57,3%",
        d: "74,5%",
        e: "134,2%"
      },
      correct: "d",
      explanation: "España actual = 102 × 46,2 = 4.712,4 M tv. Objetivo (per cápita alemana × población española) = 178 × 46,2 = 8.223,6 M tv. Incremento necesario = (8.223,6 − 4.712,4) / 4.712,4 = 74,5%."
    },
    {
      number: 4,
      type: "numerical",
      tableRef: "table_elecciones",
      text: "En 2009, las mujeres representaban en Francia un 62% del total del censo electoral. Sin embargo, la participación entre las mujeres fue inferior a la media en una quinta parte. ¿Cuántos votos totales fueron emitidos por mujeres?",
      options: {
        a: "4.054.800",
        b: "10.704.672",
        c: "10.877.328",
        d: "13.380.840",
        e: "17.265.600"
      },
      correct: "b",
      explanation: "Censo total Francia = 21.582.000 / 0,66 = 32.700.000. Mujeres en censo = 32.700.000 × 0,62 = 20.274.000. Participación femenina = 66% × (4/5) = 52,8%. Votos femeninos = 20.274.000 × 0,528 = 10.704.672."
    },
    {
      number: 5,
      type: "numerical",
      tableRef: "table_elecciones",
      text: "Si el censo electoral de todos los países se hubiera mantenido constante en todo el período, ¿en qué país y año se habrían emitido más votos válidos en las elecciones al PE?",
      options: {
        a: "España en 1999",
        b: "Alemania en 1994",
        c: "Francia en 2004",
        d: "Italia en 1999",
        e: "Reino Unido en 1999"
      },
      correct: "b",
      explanation: "Censo Alemania = 21.320.000 / 0,52 = 41.000.000. Votos Alemania 1994 = 41.000.000 × 0,63 = 25.830.000, superior a Francia 2004 (32.700.000 × 0,72 = 23.544.000) y al resto de opciones."
    },
    {
      number: 6,
      type: "numerical",
      tableRef: "table_elecciones",
      text: "El número de parlamentarios total va a incrementarse, para las próximas elecciones, en 22. En las últimas elecciones estos países eligieron un 48,34% del total de parlamentarios, y con la nueva distribución elegirán el 51,3%. ¿Cuántos parlamentarios se elegirán en total en estos países en las próximas elecciones?",
      options: {
        a: "354",
        b: "364",
        c: "385",
        d: "387",
        e: "398"
      },
      correct: "e",
      explanation: "Total elegido en estos países = 50+99+72+72+72 = 365, que es el 48,34%, luego el total es ≈ 755. Total nuevo = 755+22 = 777. Parlamentarios de estos países = 777 × 0,513 ≈ 398."
    },
    {
      number: 7,
      type: "numerical",
      tableRef: "table_aeropuertos",
      text: "En Francia hay 17 aeropuertos internacionales, mientras que en Alemania hay 28. ¿Cuál fue la proporción entre la facturación media de los aeropuertos franceses (excluidos Orly y De Gaulle) y la de los aeropuertos alemanes (excluidos Frankfurt y Munich) en 2010?",
      options: {
        a: "1:3",
        b: "2:3",
        c: "3:2",
        d: "3:5",
        e: "5:3"
      },
      correct: "b",
      explanation: "Media Francia (15 aeropuertos) = 270/15 = 18 M€. Media Alemania (26 aeropuertos) = 702/26 = 27 M€. Proporción = 18:27 = 2:3."
    },
    {
      number: 8,
      type: "numerical",
      tableRef: "table_aeropuertos",
      text: "En 2005, la facturación total de Orly fue inferior a la de 2010 en un 8%, mientras que la de Frankfurt ha crecido en un 5% entre 2005 y 2010. ¿Cuál fue la diferencia entre la facturación media por pasajero de Frankfurt y la de Orly en 2005?",
      options: {
        a: "17,7 euros",
        b: "18,9 euros",
        c: "24,3 euros",
        d: "25,5 euros",
        e: "32,5 euros"
      },
      correct: "b",
      explanation: "Orly 2005 = 255 × 0,92 = 234,6 M€; por pasajero = 234,6/6 = 39,1 €. Frankfurt 2005 = 609/1,05 = 580 M€; por pasajero = 580/10 = 58 €. Diferencia = 58 − 39,1 = 18,9 euros."
    },
    {
      number: 9,
      type: "numerical",
      tableRef: "table_aeropuertos",
      text: "¿En qué aeropuerto fue menor la facturación por pasajero en 2010?",
      options: {
        a: "Frankfurt",
        b: "Munich",
        c: "Orly",
        d: "De Gaulle",
        e: "De Gaulle y Munich"
      },
      correct: "c",
      explanation: "Frankfurt = 609/10,2 = 59,7 €; Munich = 160/2,4 = 66,7 €; Orly = 255/6,5 = 39,2 €; De Gaulle = 417/7,2 = 57,9 €. La cifra más baja es Orly."
    },
    {
      number: 10,
      type: "numerical",
      tableRef: "table_aeropuertos",
      text: "¿Cuántos viajeros más tendrían que tener los aeropuertos franceses para alcanzar la facturación global de los alemanes, si la facturación media por pasajero en el conjunto de los aeropuertos franceses se mantiene constante?",
      options: {
        a: "7,70 millones",
        b: "12,18 millones",
        c: "24,37 millones",
        d: "33,88 millones",
        e: "43,43 millones"
      },
      correct: "b",
      explanation: "Facturación alemana total = 609+160+702 = 1.471 M€. Facturación francesa total = 255+417+270 = 942 M€; pasajeros = 6,5+7,2+8 = 21,7 M; media = 942/21,7 = 43,41 €/pas. Pasajeros necesarios para 1.471 M€ = 1.471/43,41 = 33,88 M; diferencia = 33,88 − 21,7 = 12,18 millones."
    }
  ]
});
