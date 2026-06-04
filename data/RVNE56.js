window.TESTS = window.TESTS || [];

window.TESTS.push({
  id: "RVNE56",
  title: "RVNE 56 · Razonamiento Numérico",
  defaultTimer: 20,
  sections: [
    {
      title: "Razonamiento Numérico",
      instruction: "Las siguientes preguntas hacen referencia a las tablas de datos que aparecen antes de cada grupo de preguntas. Cada pregunta tiene cinco opciones de respuesta. Seleccione la respuesta correcta.",
      questionRange: [1, 10]
    }
  ],
  tables: {
    table_cultural: {
      title: "Gasto en productos culturales en 2012 (en millones de euros)",
      headers: ["", "España", "Alemania", "Francia", "UE-27", "EEUU", "Japón"],
      rows: [
        ["Literatura", "2.358", "5.239", "6.684", "40.356", "18.822", "4.972"],
        ["Teatro", "682", "1.114", "1.767", "6.280", "5.614", "1.863"],
        ["Cine", "4.620", "10.646", "8.395", "48.264", "37.311", "12.029"],
        ["Música", "9.814", "19.687", "12.721", "112.367", "105.795", "29.817"],
        ["Población (millones)", "46,95", "80,6", "63,8", "504,45", "316", "127,45"]
      ]
    },
    table_eolica: {
      title: "Producción de energía eólica (miles de kW) y consumo sobre producción mundial total",
      headers: ["", "Producción 2005 (miles kW)", "Producción 2010 (miles kW)", "Consumo 2005 (%)", "Consumo 2010 (%)"],
      rows: [
        ["UE-27", "40.511", "74.767", "58%", "47%"],
        ["India", "4.430", "10.742", "4%", "6%"],
        ["China", "1.260", "20.000", "7%", "14%"],
        ["EEUU", "9.149", "32.919", "24%", "21%"],
        ["Resto del mundo", "23.632", "42.523", "7%", "12%"]
      ]
    },
    table_ocupacion: {
      title: "Tasa de ocupación femenina en la UE (%)",
      headers: ["", "2010", "2012", "Población activa femenina 2010 (millones)"],
      rows: [
        ["Portugal", "51,20", "49,60", "2,79"],
        ["España", "43,40", "41,10", "11,60"],
        ["Francia", "47,70", "46,80", "14,91"],
        ["Alemania", "49,30", "49,70", "20,99"],
        ["Irlanda", "51,80", "47,90", "1,07"],
        ["Reino Unido", "53,20", "52,20", "15,88"],
        ["Italia", "35,40", "34,50", "12,52"]
      ]
    }
  },
  questions: [
    {
      number: 1,
      type: "numerical",
      tableRef: "table_cultural",
      text: "¿Qué porcentaje representa el gasto total en literatura por habitante de Alemania respecto al de la UE-27?",
      options: {
        a: "76,92%",
        b: "81,25%",
        c: "84,02%",
        d: "87,01%",
        e: "95,57%"
      },
      correct: "b",
      explanation: "Gasto por hab. UE-27 = 40.356/504,45 = 80 €. Gasto por hab. Alemania = 5.239/80,6 = 65 €. Porcentaje = 65/80 = 81,25%."
    },
    {
      number: 2,
      type: "numerical",
      tableRef: "table_cultural",
      text: "Entre 2005 y 2012, el gasto total de Japón por los cuatro conceptos de la tabla se ha incrementado en un 8%, mientras que la población japonesa se ha reducido en 2,4 millones. ¿En qué cantidad ha variado el gasto cultural por habitante en Japón en ese período?",
      options: {
        a: "Se ha incrementado en 34,83 euros.",
        b: "Se ha reducido en 34,83 euros.",
        c: "Se ha incrementado en 21,50 euros.",
        d: "Se ha reducido en 21,50 euros.",
        e: "La variación ha sido menor de 10 euros."
      },
      correct: "a",
      explanation: "Gasto Japón 2012 = 4.972+1.863+12.029+29.817 = 48.681 M. Gasto 2005 = 48.681/1,08 = 45.075 M. Población 2005 = 127,45+2,4 = 129,85 M. Gasto/hab 2005 = 45.075/129,85 = 347,13 €; 2012 = 48.681/127,45 = 381,96 €. Incremento = 34,83 euros."
    },
    {
      number: 3,
      type: "numerical",
      tableRef: "table_cultural",
      text: "El gasto en teatro equivale al precio total desembolsado en entradas para ese tipo de espectáculos. El precio medio de una entrada de teatro era un 14% mayor en Francia que en España. ¿En qué porcentaje supera el número de entradas vendidas en Francia en 2012 al de entradas vendidas en España?",
      options: {
        a: "56%",
        b: "61,40%",
        c: "77,74%",
        d: "127,27%",
        e: "135,96%"
      },
      correct: "d",
      explanation: "Precio referencia España = 10 €; Francia = 11,4 €. Entradas España = 682/10 = 68,2 M. Entradas Francia = 1.767/11,4 = 155 M. Francia sobre España = 155/68,2 = 227,27%; Francia supera a España en 127,27%."
    },
    {
      number: 4,
      type: "numerical",
      tableRef: "table_eolica",
      text: "¿En qué porcentaje ha aumentado el consumo de energía eólica en el resto del mundo entre 2005 y 2010?",
      options: {
        a: "56,40%",
        b: "171,42%",
        c: "174,53%",
        d: "292,74%",
        e: "370,01%"
      },
      correct: "d",
      explanation: "Producción mundial 2005 = 40.511+4.430+1.260+9.149+23.632 = 78.982; consumo resto = 78.982 × 0,07 = 5.528,74. Producción mundial 2010 = 180.951; consumo resto = 180.951 × 0,12 = 21.714,12. Aumento = (21.714,12 − 5.528,74)/5.528,74 = 292,74%."
    },
    {
      number: 5,
      type: "numerical",
      tableRef: "table_eolica",
      text: "¿En cuántos miles de kW más se incrementó el consumo de energía eólica en la UE-27 entre 2005 y 2010 que la producción de ese tipo de energía?",
      options: {
        a: "4.981,41",
        b: "5.370,51",
        c: "6.255",
        d: "9.626,51",
        e: "11.644,11"
      },
      correct: "a",
      explanation: "Crecimiento producción UE-27 = 74.767 − 40.511 = 34.256. Consumo UE-27 2005 = 78.982 × 0,58 = 45.809,56; 2010 = 180.951 × 0,47 = 85.046,97. Crecimiento consumo = 39.237,41. Diferencia = 39.237,41 − 34.256 = 4.981,41 miles de kW."
    },
    {
      number: 6,
      type: "numerical",
      tableRef: "table_eolica",
      text: "España es el país de la UE con mayor producción de energía eólica. Entre 2005 y 2010, su producción se incrementó en 8.245 miles de kW, de tal modo que en 2010 produjo el 24% del total producido en la UE. ¿Qué porcentaje sobre la producción mundial supuso la producción de España en 2005?",
      options: {
        a: "10,39%",
        b: "12,28%",
        c: "13,64%",
        d: "20,25%",
        e: "31,30%"
      },
      correct: "b",
      explanation: "Producción España 2010 = 74.767 × 0,24 = 17.944,08. Producción España 2005 = 17.944,08 − 8.245 = 9.699,08. Producción mundial 2005 = 78.982. Porcentaje = 9.699,08/78.982 = 12,28%."
    },
    {
      number: 7,
      type: "numerical",
      tableRef: "table_ocupacion",
      text: "La población activa femenina de Francia se incrementó, entre 2010 y 2012, en 282.000 personas. ¿Cuántas mujeres ocupadas más hubo en Francia en 2010 que en 2012?",
      options: {
        a: "2.214",
        b: "25.380",
        c: "108.810",
        d: "134.190",
        e: "279.786"
      },
      correct: "a",
      explanation: "Ocupadas Francia 2010 = 14.910.000 × 0,477 = 7.112.070. Población activa 2012 = 14.910.000 + 282.000 = 15.192.000; ocupadas 2012 = 15.192.000 × 0,468 = 7.109.856. Diferencia = 7.112.070 − 7.109.856 = 2.214."
    },
    {
      number: 8,
      type: "numerical",
      tableRef: "table_ocupacion",
      text: "En 2010, ¿qué porcentaje suponía el número de mujeres ocupadas en Irlanda respecto al de mujeres ocupadas en Portugal?",
      options: {
        a: "19,86%",
        b: "35,87%",
        c: "38,80%",
        d: "40,05%",
        e: "74,90%"
      },
      correct: "c",
      explanation: "Ocupadas Irlanda = 1.070.000 × 0,518 = 554.260. Ocupadas Portugal = 2.790.000 × 0,512 = 1.428.480. Porcentaje = 554.260/1.428.480 = 38,80%."
    },
    {
      number: 9,
      type: "numerical",
      tableRef: "table_ocupacion",
      text: "¿En cuántos puntos hubiera debido crecer el porcentaje de ocupación femenina del Reino Unido en 2010 para igualar la cifra de trabajadoras ocupadas de Alemania ese mismo año?",
      options: {
        a: "3,90",
        b: "11,96",
        c: "15,86",
        d: "61,26",
        e: "65,16"
      },
      correct: "b",
      explanation: "Ocupadas Alemania = 20.990.000 × 0,493 = 10.348.070. Ocupadas RU = 15.880.000 × 0,532 = 8.448.160. Diferencia = 1.899.910. Puntos adicionales necesarios = 1.899.910/15.880.000 = 11,96 puntos."
    },
    {
      number: 10,
      type: "numerical",
      tableRef: "table_ocupacion",
      text: "La población activa femenina de los países de la UE no presentes en la tabla era de 199,40 millones en 2010. La cifra de mujeres ocupadas en el conjunto de la UE era, ese mismo año, de 122.830.400. ¿Cuántos países de la tabla tenían una tasa de ocupación femenina menor que la de la totalidad de la UE en 2010?",
      options: {
        a: "Uno.",
        b: "Dos.",
        c: "Tres.",
        d: "Cuatro.",
        e: "Seis."
      },
      correct: "b",
      explanation: "Población activa femenina total UE = (2,79+11,60+14,91+20,99+1,07+15,88+12,52) + 199,40 = 279,16 M. Tasa UE = 122.830.400/279.160.000 = 44%. Países por debajo del 44%: España (43,40%) e Italia (35,40%). Son dos países."
    }
  ]
});
