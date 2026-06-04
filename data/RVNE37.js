window.TESTS = window.TESTS || [];

window.TESTS.push({
  id: "RVNE37",
  title: "RVNE 37 · Razonamiento Numérico",
  defaultTimer: 20,
  sections: [
    {
      title: "Razonamiento Numérico",
      instruction: "Las siguientes preguntas hacen referencia a las tablas de datos que aparecen antes de cada grupo de preguntas. Cada pregunta tiene cinco opciones de respuesta. Seleccione la respuesta correcta.",
      questionRange: [1, 10]
    }
  ],
  tables: {
    table_organos: {
      title: "Donaciones de órganos por millón de habitantes en 2012",
      headers: ["", "ESPAÑA", "AUSTRIA", "ESLOVAQUIA", "SUECIA"],
      rows: [
        ["Corazón", "32", "25", "22", "30"],
        ["Pulmones", "28", "34", "48", "22"],
        ["Riñón", "77", "52", "38", "64"],
        ["Hígado", "46", "38", "27", "40"]
      ]
    },
    table_estudiantes: {
      title: "Estudiantes extranjeros en programas de movilidad en 2011 (en miles)",
      headers: ["", "Estudios de grado", "Masters y postgrados", "Hombres", "Mujeres"],
      rows: [
        ["España", "48", "23", "34", "37"],
        ["Alemania", "27", "34", "36", "25"],
        ["Francia", "32", "36", "28", "40"],
        ["Irlanda", "15", "12", "17", "10"],
        ["Países Bajos", "26", "18", "22", "22"],
        ["Italia", "35", "26", "28", "33"]
      ]
    },
    table_empresas: {
      title: "Empresas creadas en Bélgica y Países Bajos",
      headers: ["País", "Sector", "2009", "2010", "2011", "Empleados nuevas empresas 2011"],
      rows: [
        ["Bélgica", "Sector primario", "185", "165", "212", "—"],
        ["Bélgica", "Sector secundario", "540", "573", "624", "—"],
        ["Bélgica", "Sector terciario", "680", "725", "746", "31.640"],
        ["Países Bajos", "Sector primario", "226", "254", "208", "—"],
        ["Países Bajos", "Sector secundario", "658", "684", "710", "—"],
        ["Países Bajos", "Sector terciario", "785", "802", "831", "55.400"]
      ],
      notes: "El dato de empleados en nuevas empresas (2011) corresponde al total de cada país, no solo al sector terciario."
    }
  },
  questions: [
    {
      number: 1,
      type: "numerical",
      tableRef: "table_organos",
      text: "La población de España es 2,5 veces la de Austria y Eslovaquia juntas. ¿En qué porcentaje superaron las donaciones de riñón totales en España a las de los otros dos países juntos?",
      options: {
        a: "40%",
        b: "87%",
        c: "113%",
        d: "243%",
        e: "327%"
      },
      correct: "e",
      explanation: "Tomando Austria+Eslovaquia = 10 M, España = 25 M. Media riñón Austria+Eslovaquia = (52+38)/2 = 45/M; total = 450. España total = 77 × 25 = 1.925. Diferencia = 1.475; porcentaje = 1.475/450 = 327%."
    },
    {
      number: 2,
      type: "numerical",
      tableRef: "table_organos",
      text: "Gracias a diversas campañas de sensibilización, Eslovaquia ha conseguido elevar las donaciones de órganos totales, que en 2007 eran inferiores en una novena parte a las de 2012. Su población ha pasado de 5 millones a 5,4 millones en ese mismo período. ¿Cuántas donaciones de órganos por millón de habitantes hubo en Eslovaquia en 2007?",
      options: {
        a: "111,1",
        b: "129,6",
        c: "138,8",
        d: "145,8",
        e: "162"
      },
      correct: "b",
      explanation: "Total donaciones 2012 = (22+48+38+27) × 5,4 = 135 × 5,4 = 729. En 2007 fueron 8/9 de esa cifra = 648. Por millón en 2007 = 648/5 = 129,6."
    },
    {
      number: 3,
      type: "numerical",
      tableRef: "table_organos",
      text: "¿En qué porcentaje deben incrementarse las donaciones de hígado en Austria para alcanzar la cifra de donaciones total de Suecia, teniendo en cuenta que la población de Suecia es un 15% mayor que la de Austria?",
      options: {
        a: "2,5%",
        b: "10,5%",
        c: "17,4%",
        d: "21%",
        e: "75%"
      },
      correct: "d",
      explanation: "Tomando Austria = 10 M, Suecia = 11,5 M. Donaciones hígado Austria = 38 × 10 = 380; Suecia = 40 × 11,5 = 460. Incremento necesario = (460 − 380)/380 = 21%."
    },
    {
      number: 4,
      type: "numerical",
      tableRef: "table_estudiantes",
      text: "En 2011, un 46% de los estudiantes extranjeros que cursaron masters o postgrados gracias a algún programa de movilidad en España fueron mujeres. ¿Qué porcentaje de los hombres extranjeros cursó estudios de grado?",
      options: {
        a: "30,4%",
        b: "54%",
        c: "63,5%",
        d: "68,3%",
        e: "77,9%"
      },
      correct: "c",
      explanation: "Mujeres en masters = 23.000 × 0,46 = 10.580. Mujeres en grado = 37.000 − 10.580 = 26.420. Hombres en grado = 48.000 − 26.420 = 21.580. % sobre total hombres = 21.580/34.000 = 63,5%."
    },
    {
      number: 5,
      type: "numerical",
      tableRef: "table_estudiantes",
      text: "Irlanda tuvo en 2011 una población estudiantil de 725.000 personas. Del total de estudiantes extranjeros que cursaron masters o postgrados en Irlanda en 2011, una décima parte procedían del Reino Unido. Entre los que cursaban estudios de grado, procedía del Reino Unido el 35%. ¿Qué porcentaje supusieron los procedentes del resto de Europa en ambos tipos de estudios sobre la población estudiantil total?",
      options: {
        a: "2,83%",
        b: "3,79%",
        c: "6,5%",
        d: "7,61%",
        e: "9%"
      },
      correct: "a",
      explanation: "RU en masters = 12.000/10 = 1.200; RU en grado = 15.000 × 0,35 = 5.250; total RU = 6.450. Total extranjeros = 27.000; resto Europa = 27.000 − 6.450 = 20.550. % sobre 725.000 = 20.550/725.000 = 2,83%."
    },
    {
      number: 6,
      type: "numerical",
      tableRef: "table_estudiantes",
      text: "Francia es el país europeo con mayor diferencia entre los estudiantes extranjeros que recibe en programas de movilidad y los que envía a otros países. En 2011, la proporción entre recibidos y enviados fue de 1:4, siendo el 60% de los enviados mujeres. El número de mujeres enviadas en 2011 fue un 8% menor que el del año anterior. ¿Cuántas mujeres francesas estudiaron en otros países en 2010?",
      options: {
        a: "150.144",
        b: "177.391",
        c: "187.680",
        d: "198.260",
        e: "221.739"
      },
      correct: "b",
      explanation: "Total recibidos en Francia = 32.000+36.000 = 68.000. Enviados = 68.000 × 4 = 272.000. Mujeres enviadas 2011 = 272.000 × 0,6 = 163.200. En 2010 fue un 8% mayor: 163.200/0,92 = 177.391."
    },
    {
      number: 7,
      type: "numerical",
      tableRef: "table_empresas",
      text: "En 2010, las empresas creadas en Bélgica crearon un 15% menos de empleos que en 2011. ¿En qué porcentaje fue menor el número de empleos medios creados por empresa en 2010 que en 2011?",
      options: {
        a: "7,52%",
        b: "7,86%",
        c: "8,1%",
        d: "12,4%",
        e: "15%"
      },
      correct: "c",
      explanation: "Empresas 2011 = 212+624+746 = 1.582; media = 31.640/1.582 = 20 empleos/empresa. Empresas 2010 = 165+573+725 = 1.463; empleos 2010 = 31.640 × 0,85 = 26.894; media = 26.894/1.463 = 18,38. Diferencia % = (20 − 18,38)/20 = 8,1%."
    },
    {
      number: 8,
      type: "numerical",
      tableRef: "table_empresas",
      text: "En los Países Bajos, las empresas creadas en el sector terciario han empleado a un 60% del total de mujeres empleadas en las empresas de nueva creación en 2011. Además, cada empresa del sector terciario ha creado de media el doble de empleos para mujeres que cada una del sector primario. Globalmente, las mujeres han supuesto una octava parte del total de empleos creados por las empresas de nueva creación. ¿Cuántas mujeres han obtenido un empleo en empresas de nueva creación en el sector secundario?",
      options: {
        a: "1.108",
        b: "1.385",
        c: "2.250",
        d: "3.650",
        e: "No se puede saber"
      },
      correct: "c",
      explanation: "Total mujeres = 55.400/8 = 6.925. Sector terciario = 6.925 × 0,6 = 4.155; media por empresa = 4.155/831 = 5. Sector primario media = 5/2 = 2,5; total primario = 208 × 2,5 = 520. Secundario = (6.925 × 0,4) − 520 = 2.770 − 520 = 2.250."
    },
    {
      number: 9,
      type: "numerical",
      tableRef: "table_empresas",
      text: "En los Países Bajos, el 25% de las empresas de nueva creación en 2010 fueron creadas por menores de 35 años. En Bélgica, los menores de 35 han creado 174 empresas menos que en los Países Bajos, una tercera parte de ellas en el sector terciario. ¿Cuántas empresas del sector terciario han creado los mayores de 35 años en Bélgica?",
      options: {
        a: "212",
        b: "584",
        c: "638",
        d: "715",
        e: "825"
      },
      correct: "c",
      explanation: "Empresas 2010 Países Bajos = 254+684+802 = 1.740; menores de 35 = 1.740 × 0,25 = 435. Bélgica menores de 35 = 435 − 174 = 261; en sector terciario = 261/3 = 87. Total sector terciario Bélgica 2010 = 725; mayores de 35 = 725 − 87 = 638."
    },
    {
      number: 10,
      type: "numerical",
      tableRef: "table_empresas",
      text: "Cada empresa creada en Bélgica recibía en 2009 2.500 euros de subvenciones públicas al emprendimiento. Además, por cada empleado contratado la subvención se incrementaba en 100 euros más, otros 100 euros más si el nuevo empleado era mujer y otros 100 si era menor de 30 años, independientemente de su sexo. El total invertido por las autoridades belgas en subvenciones fue de 9,5 millones de euros, y el total de empleos creados fue un 5% superior al de 2011. Si el número de mujeres empleadas en estas empresas fue de 15.412, ¿cuántos empleos crearon estas empresas para menores de 30 años?",
      options: {
        a: "11.241",
        b: "28.100",
        c: "33.222",
        d: "68.345",
        e: "77.683"
      },
      correct: "a",
      explanation: "Empresas 2009 = 185+540+680 = 1.405; subvención base = 1.405 × 2.500 = 3.512.500 €. Empleos = 31.640 × 1,05 = 33.222; subvención empleo = 33.222 × 100 = 3.322.200 €. Subvención mujeres = 15.412 × 100 = 1.541.200 €. Restante para menores de 30 = 9.500.000 − 8.375.900 = 1.124.100 €; empleos = 1.124.100/100 = 11.241."
    }
  ]
});
