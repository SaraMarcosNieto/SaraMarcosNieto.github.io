window.TESTS = window.TESTS || [];

window.TESTS.push({
  id: "RVNE57",
  title: "RVNE 57 · Razonamiento Numérico",
  defaultTimer: 20,
  sections: [
    {
      title: "Razonamiento Numérico",
      instruction: "Las siguientes preguntas hacen referencia a las tablas de datos que aparecen antes de cada grupo de preguntas. Cada pregunta tiene cinco opciones de respuesta. Seleccione la respuesta correcta.",
      questionRange: [1, 10]
    }
  ],
  tables: {
    table_vehiculos: {
      title: "Vehículos con más de 10 años de antigüedad (2012)",
      headers: ["", "Italia", "España", "Francia", "Polonia"],
      rows: [
        ["Turismos", "3.633.800", "2.198.455", "3.139.400", "1.649.500"],
        ["Furgonetas", "236.300", "321.600", "301.620", "155.760"],
        ["Camiones", "157.500", "214.400", "201.080", "103.840"],
        ["Resto", "144.400", "49.300", "68.000", "42.900"]
      ]
    },
    table_tecnologicas: {
      title: "Empresas tecnológicas de nueva creación",
      headers: ["", "2009", "2010", "2011", "2012", "2013"],
      rows: [
        ["Suecia", "145", "164", "113", "102", "87"],
        ["Francia", "284", "212", "158", "187", "139"],
        ["Alemania", "414", "364", "452", "397", "362"],
        ["Reino Unido", "387", "346", "312", "368", "345"],
        ["UE-28", "3.845", "4.344", "4.165", "4.272", "4.564"]
      ]
    },
    table_titulados: {
      title: "Nuevos titulados universitarios en ciencias (en miles)",
      headers: ["País", "Nivel", "2011", "2012", "2013", "% sobre total 2012"],
      rows: [
        ["EE.UU.", "Grado", "6.359", "6.587", "5.863", "32%"],
        ["EE.UU.", "Doctorado", "2.971", "2.646", "2.519", "48%"],
        ["China", "Grado", "8.865", "8.725", "8.472", "16%"],
        ["China", "Doctorado", "3.117", "2.630", "2.199", "20%"],
        ["UE-28", "Grado", "2.886", "2.760", "2.624", "24%"],
        ["UE-28", "Doctorado", "1.046", "962", "973", "35%"]
      ],
      notes: "El porcentaje sobre el total expresa los titulados en ciencias sobre el total de titulados en todos los ámbitos (2012)."
    }
  },
  questions: [
    {
      number: 1,
      type: "numerical",
      tableRef: "table_vehiculos",
      text: "¿En qué país hay una mayor diferencia porcentual entre la cifra de furgonetas con más de 10 años de antigüedad y la cifra del resto de vehículos (excluidos turismos, furgonetas y camiones) con más de 10 años de antigüedad?",
      options: {
        a: "Italia.",
        b: "España.",
        c: "Francia.",
        d: "Polonia.",
        e: "Francia y Polonia."
      },
      correct: "b",
      explanation: "Italia: 236.300/144.400 = 163,64% → diferencia 63,64%. España: 321.600/49.300 = 652,33% → diferencia 552,33%. Francia: 301.620/68.000 = 443,55% → 343,55%. Polonia: 155.760/42.900 = 362,93% → 262,93%. La mayor diferencia es España."
    },
    {
      number: 2,
      type: "numerical",
      tableRef: "table_vehiculos",
      text: "La cifra de turismos con más de 10 años de antigüedad en España ha crecido en un 15% desde 2000. En 2012, los turismos con más de 10 años de antigüedad suponen un 10% del total de turismos matriculados, que son 350.000 más que en 2000. ¿Qué porcentaje sobre el total de turismos matriculados suponían en 2000 los turismos con más de 10 años de antigüedad?",
      options: {
        a: "5,22%",
        b: "7,55%",
        c: "8,83%",
        d: "11,68%",
        e: "13,19%"
      },
      correct: "c",
      explanation: "Turismos +10 años en 2000 = 2.198.455/1,15 = 1.911.700. Total matriculados 2012 = 2.198.455/0,10 = 21.984.550; en 2000 = 21.984.550 − 350.000 = 21.634.550. Porcentaje = 1.911.700/21.634.550 = 8,83%."
    },
    {
      number: 3,
      type: "numerical",
      tableRef: "table_vehiculos",
      text: "En Polonia, el total de vehículos de todos los tipos con más de 10 años de antigüedad es una octava parte del total de vehículos matriculados. Los turismos suponen un 70% del total de vehículos matriculados. ¿Cuántos turismos de menos de 10 años de antigüedad hay matriculados en Polonia?",
      options: {
        a: "7.587.700",
        b: "8.600.964",
        c: "9.281.700",
        d: "10.094.285",
        e: "14.461.349"
      },
      correct: "c",
      explanation: "Total vehículos +10 años en Polonia = 1.649.500+155.760+103.840+42.900 = 1.952.000. Total matriculados = 1.952.000 × 8 = 15.616.000. Turismos totales = 15.616.000 × 0,70 = 10.931.200. Turismos menos de 10 años = 10.931.200 − 1.649.500 = 9.281.700."
    },
    {
      number: 4,
      type: "numerical",
      tableRef: "table_tecnologicas",
      text: "¿Cuál fue la proporción de las empresas tecnológicas creadas en los cuatro países citados con respecto a las creadas en el resto de la UE-28 en 2010?",
      options: {
        a: "1:3",
        b: "1:4",
        c: "2:3",
        d: "3:1",
        e: "4:1"
      },
      correct: "a",
      explanation: "Suma cuatro países 2010 = 164+212+364+346 = 1.086. Resto UE-28 = 4.344 − 1.086 = 3.258. Proporción = 1.086:3.258 = 1:3."
    },
    {
      number: 5,
      type: "numerical",
      tableRef: "table_tecnologicas",
      text: "¿En qué país ha sido mayor la reducción porcentual de creación de empresas tecnológicas entre 2009 y 2013?",
      options: {
        a: "Suecia.",
        b: "Francia.",
        c: "Alemania.",
        d: "Reino Unido.",
        e: "Suecia y Francia."
      },
      correct: "b",
      explanation: "Suecia: 1 − 87/145 = 40,0%. Francia: 1 − 139/284 = 51,1%. Alemania: 1 − 362/414 = 12,6%. RU: 1 − 345/387 = 10,9%. La mayor reducción es Francia con 51,1%."
    },
    {
      number: 6,
      type: "numerical",
      tableRef: "table_tecnologicas",
      text: "En 2012, una octava parte de las empresas tecnológicas de nueva creación de la UE-28 surgieron en Portugal. La cifra de empresas tecnológicas creadas en ese país fue 1,5 veces la de 2011. ¿Qué porcentaje suponen las empresas de nuevas tecnologías creadas en Portugal en 2011 sobre la suma de las creadas en los cuatro países presentes en el cuadro?",
      options: {
        a: "8,54%",
        b: "11,37%",
        c: "32,78%",
        d: "34,39%",
        e: "77,39%"
      },
      correct: "d",
      explanation: "Portugal 2012 = 4.272/8 = 534. Portugal 2011 = 534/1,5 = 356. Suma cuatro países 2011 = 113+158+452+312 = 1.035. Porcentaje = 356/1.035 = 34,39%."
    },
    {
      number: 7,
      type: "numerical",
      tableRef: "table_titulados",
      text: "En 2013, el número total de doctorados en Estados Unidos aumentó en un 8% con respecto a 2012. ¿En cuántos puntos porcentuales varió el porcentaje de doctorados en ciencias con respecto al total entre 2012 y 2013?",
      options: {
        a: "Aumentó en aproximadamente dos puntos.",
        b: "Disminuyó en aproximadamente dos puntos.",
        c: "Aumentó en aproximadamente seis puntos.",
        d: "Disminuyó en aproximadamente seis puntos.",
        e: "Permaneció invariable."
      },
      correct: "d",
      explanation: "Total doctorados EE.UU. 2012 = 2.646.000/0,48 = 5.512.500; 2013 = 5.512.500 × 1,08 = 5.953.500. Porcentaje ciencias 2013 = 2.519.000/5.953.500 = 42,31%. Diferencia = 48 − 42,31 ≈ 5,69 puntos; disminuye en aproximadamente seis puntos."
    },
    {
      number: 8,
      type: "numerical",
      tableRef: "table_titulados",
      text: "En 2012, ¿qué porcentaje supuso la cifra total de doctorados en ciencias en la UE-28 sobre la cifra total de graduados de todas las materias en el mismo área geográfica?",
      options: {
        a: "8,36%",
        b: "17,42%",
        c: "28,18%",
        d: "34,85%",
        e: "45,71%"
      },
      correct: "a",
      explanation: "Total graduados (todas materias) UE-28 2012 = 2.760.000/0,24 = 11.500.000. Porcentaje doctorados ciencias = 962.000/11.500.000 = 8,36%."
    },
    {
      number: 9,
      type: "numerical",
      tableRef: "table_titulados",
      text: "En China, la cifra de mujeres graduadas en ciencias fue de 3.658.300 en 2010, y en 2011 se incrementó en un 5% respecto al año anterior. En 2013, los hombres fueron el 46% del total de graduados en ciencias. ¿En qué porcentaje creció la cifra de graduadas en ciencias entre 2011 y 2013?",
      options: {
        a: "5,86%",
        b: "11,15%",
        c: "19,09%",
        d: "23,06%",
        e: "41%"
      },
      correct: "c",
      explanation: "Mujeres 2011 = 3.658.300 × 1,05 = 3.841.215. Mujeres 2013 = 8.472.000 × 0,54 = 4.574.880. Crecimiento = 4.574.880/3.841.215 − 1 = 19,09%."
    },
    {
      number: 10,
      type: "numerical",
      tableRef: "table_titulados",
      text: "En 2012, ¿cuántas personas más componían la suma de doctorados y graduados totales en China que en Estados Unidos?",
      options: {
        a: "12.946.875",
        b: "28.434.375",
        c: "33.946.875",
        d: "41.584.375",
        e: "47.096.875"
      },
      correct: "d",
      explanation: "EE.UU.: graduados totales = 6.587.000/0,32 = 20.584.375; doctorados totales = 2.646.000/0,48 = 5.512.500; suma = 26.096.875. China: graduados totales = 8.725.000/0,16 = 54.531.250; doctorados totales = 2.630.000/0,20 = 13.150.000; suma = 67.681.250. Diferencia = 67.681.250 − 26.096.875 = 41.584.375."
    }
  ]
});
