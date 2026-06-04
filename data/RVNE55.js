window.TESTS = window.TESTS || [];

window.TESTS.push({
  id: "RVNE55",
  title: "RVNE 55 · Razonamiento Numérico",
  defaultTimer: 20,
  sections: [
    {
      title: "Razonamiento Numérico",
      instruction: "Las siguientes preguntas hacen referencia a las tablas de datos que aparecen antes de cada grupo de preguntas. Cada pregunta tiene cinco opciones de respuesta. Seleccione la respuesta correcta.",
      questionRange: [1, 10]
    }
  ],
  tables: {
    table_indicadores: {
      title: "Indicadores socioeconómicos países UE (2012)",
      headers: ["", "Letonia", "Suecia", "Portugal", "Austria"],
      rows: [
        ["Coches", "1.289.500", "8.564.270", "6.468.328", "7.548.320"],
        ["Médicos", "35.850", "613.760", "498.300", "584.328"],
        ["Profesores", "20.683", "212.510", "189.720", "196.840"],
        ["Población (millones)", "2,12", "9,59", "8,47", "10,70"]
      ]
    },
    table_cooperacion: {
      title: "Financiación destinada a cooperación al desarrollo (en millones)",
      headers: ["", "España", "Italia", "Francia", "Dinamarca", "Alemania"],
      rows: [
        ["2006", "7.250", "8.452", "14.587", "8.497", "15.425"],
        ["2008", "7.418", "8.342", "12.647", "9.236", "15.389"],
        ["2010", "6.624", "7.926", "11.984", "9.548", "15.628"],
        ["2012", "5.815", "7.468", "12.746", "9.743", "15.146"],
        ["Evolución 2013*", "−6,14%", "−3,56%", "+1,44%", "+0,18%", "−3,14%"]
      ],
      notes: "* Cambio porcentual en la cantidad destinada a cooperación al desarrollo con respecto a la cifra del año anterior."
    },
    table_parcial: {
      title: "Trabajadores a tiempo parcial",
      headers: ["Área", "Grupo", "2005 (miles)", "2010 (miles)", "2012 (miles)", "% parcial 2010", "% parcial 2012"],
      rows: [
        ["Eurozona", "Hombres", "20.474", "25.388", "22.787", "22%", "27%"],
        ["Eurozona", "Mujeres", "36.397", "34.618", "40.516", "32%", "35%"],
        ["Eurozona", "Total", "56.871", "60.006", "63.303", "27%", "30%"],
        ["UE-27", "Hombres", "31.231", "27.589", "25.903", "26%", "28%"],
        ["UE-27", "Mujeres", "43.127", "49.625", "55.053", "34%", "36%"],
        ["UE-27", "Total", "74.358", "77.214", "80.956", "31%", "32%"]
      ],
      notes: "El porcentaje de parcial refleja los trabajadores a tiempo parcial sobre el total de trabajadores."
    }
  },
  questions: [
    {
      number: 1,
      type: "numerical",
      tableRef: "table_indicadores",
      text: "El número de profesores en Letonia ha aumentado en un 7,5% desde su adhesión a la UE en 2004. La población letona se ha incrementado, desde ese año, en 187.540 personas. ¿En cuánto ha variado la ratio de profesores por cada mil habitantes entre 2004 y 2012?",
      options: {
        a: "Se ha incrementado en 0,2.",
        b: "Se ha incrementado en 0,0002.",
        c: "Se ha reducido en 0,0002.",
        d: "Se ha reducido en 0,2.",
        e: "Se ha mantenido constante."
      },
      correct: "d",
      explanation: "Profesores 2004 = 20.683/1,075 = 19.240; población 2004 = 2.120.000 − 187.540 = 1.932.460. Ratio 2012 = 20.683/2.120 = 9,75 prof/mil hab. Ratio 2004 = 19.240/1.932,46 = 9,95. Diferencia = 9,95 − 9,75 = 0,20; como la de 2004 era mayor, la ratio se ha reducido en 0,2."
    },
    {
      number: 2,
      type: "numerical",
      tableRef: "table_indicadores",
      text: "La cifra total de coches en Austria se ha incrementado, desde 2010, en 287.000. En Portugal, la cifra total de coches descendió, en el período de 2010 a 2012, en un 6%. ¿En qué porcentaje superaba la cifra de coches en Austria a la de Portugal en 2010?",
      options: {
        a: "5,52%",
        b: "13,86%",
        c: "18,99%",
        d: "19,42%",
        e: "28,40%"
      },
      correct: "a",
      explanation: "Coches Austria 2010 = 7.548.320 − 287.000 = 7.261.320. Coches Portugal 2010 = 6.468.328/0,94 = 6.881.200. Austria sobre Portugal = 7.261.320/6.881.200 = 105,52%; superaba en 5,52%."
    },
    {
      number: 3,
      type: "numerical",
      tableRef: "table_indicadores",
      text: "En 2013, la cifra de médicos por cada mil habitantes en Suecia se ha incrementado en un 6,25% respecto a la de 2012, llegando a ser 1,25 veces la de Portugal de ese mismo año. La población portuguesa ha crecido, entre 2012 y 2013, en 130.000 personas. ¿Cuántos médicos menos que en 2012 había en Portugal en 2013?",
      options: {
        a: "16.570",
        b: "30.460",
        c: "85.500",
        d: "146.700",
        e: "232.700"
      },
      correct: "b",
      explanation: "Ratio Suecia 2012 = 613.760/9.590 = 64 médicos/mil hab; 2013 = 64 × 1,0625 = 68. Ratio Portugal 2013 = 68/1,25 = 54,4. Población Portugal 2013 = 8.600.000 → médicos = 8.600 × 54,4 = 467.840. Diferencia = 498.300 − 467.840 = 30.460."
    },
    {
      number: 4,
      type: "numerical",
      tableRef: "table_cooperacion",
      text: "Dinamarca ha destinado, todos los años mostrados en la tabla, un 1% del total de su presupuesto a la cooperación al desarrollo. ¿En qué porcentaje supera su presupuesto para 2013 al de 2006?",
      options: {
        a: "1,14%",
        b: "6,76%",
        c: "14,66%",
        d: "14,87%",
        e: "16,72%"
      },
      correct: "d",
      explanation: "Presupuesto Dinamarca 2006 = 8.497/0,01 = 849.700 M. Cooperación 2013 = 9.743 × 1,0018 = 9.760,54 M; presupuesto 2013 = 9.760,54/0,01 = 976.054 M. Variación = 976.054/849.700 = 114,87%; supera en 14,87%."
    },
    {
      number: 5,
      type: "numerical",
      tableRef: "table_cooperacion",
      text: "En 2010, Alemania dedicó el 0,55% de su presupuesto a cooperación al desarrollo. Hasta 2012, ese porcentaje ha crecido anualmente en una quinta parte. ¿A cuánto ascendía el presupuesto total de Alemania en 2012?",
      options: {
        a: "1.912.373,73 millones.",
        b: "1.947.601,01 millones.",
        c: "1.967.012,98 millones.",
        d: "2.003.246,75 millones.",
        e: "2.294.848,48 millones."
      },
      correct: "a",
      explanation: "Porcentaje 2011 = 0,55 × (6/5) = 0,66%. Porcentaje 2012 = 0,66 × (6/5) = 0,792%. Presupuesto 2012 = 15.146/0,00792 = 1.912.373,73 millones."
    },
    {
      number: 6,
      type: "numerical",
      tableRef: "table_cooperacion",
      text: "En 2013, ¿en cuánto superará la cantidad destinada a cooperación al desarrollo en Francia a la cantidad destinada en España e Italia conjuntamente?",
      options: {
        a: "269,46 millones.",
        b: "290,76 millones.",
        c: "544,73 millones.",
        d: "560,17 millones.",
        e: "La cantidad destinada por España e Italia será mayor que la de Francia."
      },
      correct: "a",
      explanation: "Francia 2013 = 12.746 × 1,0144 = 12.929,54 M. España 2013 = 5.815 × 0,9386 = 5.457,95 M. Italia 2013 = 7.468 × 0,9644 = 7.202,13 M. Diferencia = 12.929,54 − (5.457,95 + 7.202,13) = 269,46 millones."
    },
    {
      number: 7,
      type: "numerical",
      tableRef: "table_parcial",
      text: "En la Eurozona, el desempleo masculino en 2010 era del 20%. ¿Cuántos hombres componían la población activa masculina (suma de trabajadores y desempleados) de la Eurozona en 2010?",
      options: {
        a: "59,661 millones.",
        b: "111,707 millones.",
        c: "129,471 millones.",
        d: "133,644 millones.",
        e: "144,250 millones."
      },
      correct: "e",
      explanation: "Los 25.388.000 trabajadores a tiempo parcial masculinos representan el 22% del total de trabajadores masculinos: total trabajadores = 25.388.000/0,22 = 115.400.000. Como el desempleo es el 20%, los trabajadores son el 80%: población activa = 115.400.000/0,8 = 144.250.000 = 144,250 millones."
    },
    {
      number: 8,
      type: "numerical",
      tableRef: "table_parcial",
      text: "La Eurozona está compuesta por 17 países. ¿Cuántas mujeres trabajadoras había como media, en 2012, en los países de la UE que no pertenecían a la Eurozona?",
      options: {
        a: "1.529.250",
        b: "2.686.850",
        c: "3.716.500",
        d: "4.038.050",
        e: "5.023.370"
      },
      correct: "c",
      explanation: "Total trabajadoras Eurozona 2012 = 40.516.000/0,35 = 115.760.000. Total trabajadoras UE-27 = 55.053.000/0,36 = 152.925.000. Resto = 152.925.000 − 115.760.000 = 37.165.000. Países no Eurozona = 27 − 17 = 10. Media = 37.165.000/10 = 3.716.500."
    },
    {
      number: 9,
      type: "numerical",
      tableRef: "table_parcial",
      text: "¿En cuántos puntos porcentuales ha superado el incremento de trabajadores a tiempo parcial de la Eurozona entre 2005 y 2012 al de los países de la UE-27 no pertenecientes a la Eurozona?",
      options: {
        a: "10,36",
        b: "10,73",
        c: "11,30",
        d: "11,89",
        e: "12,25"
      },
      correct: "a",
      explanation: "Crecimiento Eurozona = 63.303/56.871 − 1 = 11,30%. Resto UE-27: 2005 = 74.358 − 56.871 = 17.487; 2012 = 80.956 − 63.303 = 17.653; crecimiento = 17.653/17.487 − 1 = 0,94%. Diferencia = 11,30 − 0,94 = 10,36 puntos."
    },
    {
      number: 10,
      type: "numerical",
      tableRef: "table_parcial",
      text: "¿Qué porcentaje del total de trabajadores de la UE-27 en 2012 pertenecen a la Eurozona?",
      options: {
        a: "73,30%",
        b: "78,19%",
        c: "80,11%",
        d: "83,40%",
        e: "119,89%"
      },
      correct: "d",
      explanation: "Total trabajadores Eurozona 2012 = 63.303.000/0,30 = 211.010.000. Total UE-27 = 80.956.000/0,32 = 252.987.500. Porcentaje = 211.010.000/252.987.500 = 83,40%."
    }
  ]
});
