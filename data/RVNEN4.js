window.TESTS = window.TESTS || [];

// ── Numerical section ──────────────────────────────
window.TESTS.push({
  id: "RVNEN4-N",
  title: "RVNE N 4 · Razonamiento Numérico",
  sections: [
    {
      title: "Razonamiento Numérico",
      instruction: "Las siguientes preguntas hacen referencia a las tablas de datos que aparecen antes de cada grupo de preguntas.",
      questionRange: [1, 20]
    }
  ],
  tables: {
    table_fruit: {
      title: "Forecast of fruit harvest in Campazia in 1000 kg per annum",
      headers: ["", "2005", "2006", "2007", "2008"],
      rows: [
        ["Peaches", "200", "350", "250", "300"],
        ["Apples",  "280", "320", "360", "300"],
        ["Plums",   "160", "160",  "80", "240"],
        ["Cherries","120",  "80",  "60",  "60"]
      ]
    },
    table_agriculture: {
      title: "Agriculture and fishing in country X in 2000",
      headers: ["", "Arable farming", "Cattle farming", "Horticulture", "Fishing"],
      rows: [
        ["Produce (thousands of tonnes)",         "400", "200", "100", "200"],
        ["Production costs per tonne (€)",        "400", "100", "600", "400"],
        ["Income per tonne (€)",                  "600", "200", "1600", "800"]
      ]
    },
    table_mining_profit: {
      title: "Mining data in year 2000 — all three tables needed for Q10–12",
      headers: ["", "Copper", "Tin", "Silver"],
      rows: [
        ["Profit (€/kg) — Botsland",            "1", "1", "2"],
        ["Profit (€/kg) — Wandania",            "1", "4", "1"],
        ["Profit (€/kg) — Karsland",            "2", "4", "2"],
        ["Extraction (×1000 t) — Botsland",    "12", "20", "24"],
        ["Extraction (×1000 t) — Wandania",     "6", "12",  "8"],
        ["Extraction (×1000 t) — Karsland",     "4",  "8", "16"],
        ["Extr. costs (€/kg) — Botsland",       "2",  "4",  "2"],
        ["Extr. costs (€/kg) — Wandania",       "2",  "2",  "4"],
        ["Extr. costs (€/kg) — Karsland",       "1",  "2",  "2"]
      ],
      notes: "Turnover = profit + extraction costs. 1 tonne = 1 000 kg."
    },
    table_population: {
      title: "Population statistics – 1997",
      headers: ["Country", "Area (sq.km)", "Population (000's)", "Annual births (per 1,000)", "Annual deaths (per 1,000)", "% eligible to vote"],
      rows: [
        ["A",  "89,000",  "9,000", "13.9", "9.9", "74"],
        ["B", "375,000", "20,000", "11.8", "9.4", "69"],
        ["C", "100,000", "11,000", "10.5", "8.4", "71"],
        ["D", "388,000", "35,000", "12.1", "8.9", "66"]
      ]
    },
    table_gdp: {
      title: "Import/Export Revenue (1997) (million Euros)",
      headers: ["", "Country A", "Country B", "Country C", "Country D"],
      rows: [
        ["Gross Domestic Product (GDP)", "117,000", "280,000", "176,000", "735,000"],
        ["Value of Exports",              "15,000",  "76,000",  "81,000", "150,000"],
        ["Value of Imports",              "14,000",  "70,000",  "83,000", "145,000"]
      ],
      notes: "Population (000's): A = 9,000 · B = 20,000 · C = 11,000 · D = 35,000"
    }
  },
  questions: [
    {
      number: 1,
      type: "numerical",
      tableRef: "table_fruit",
      text: "In which year is the biggest harvest forecast for apples and plums combined?",
      options: {
        a: "2005",
        b: "2006",
        c: "2007",
        d: "2008"
      },
      correct: "d",
      explanation: "Respuesta correcta: D. Año 2005: 280+160 = 440. Año 2006: 320+160 = 480. Año 2007: 360+80 = 440. Año 2008: 300+240 = 540. La respuesta es la D – 2008."
    },
    {
      number: 2,
      type: "numerical",
      tableRef: "table_fruit",
      text: "What is the ratio between the total weight of cherries and the total weight of plums that will be grown according to this forecast in the four years from 2005 to 2008?",
      options: {
        a: "2 : 3",
        b: "1 : 2",
        c: "2 : 1",
        d: "3 : 2"
      },
      correct: "b",
      explanation: "Respuesta correcta: B. Cerezas = 120+80+60+60 = 320. Ciruelas = 160+160+80+240 = 640. Ratio = 320/640 = 1/2. La respuesta es la B – 1:2."
    },
    {
      number: 3,
      type: "numerical",
      tableRef: "table_fruit",
      text: "Between which years does the harvest of any particular fruit increase or decrease the most in absolute terms, according to the forecast?",
      options: {
        a: "2006 and 2008",
        b: "2007 and 2008",
        c: "2005 and 2006",
        d: "2005 and 2007"
      },
      correct: "b",
      explanation: "Respuesta correcta: B. Entre 2006 y 2008: mayor variación en ciruelas (+80). Entre 2007 y 2008: mayor variación en ciruelas (+160). Entre 2005 y 2006: mayor variación en melocotones (+150). La mayor variación absoluta se da entre 2007 y 2008 en las ciruelas. La respuesta es la B."
    },
    {
      number: 4,
      type: "numerical",
      tableRef: "table_fruit",
      text: "Assuming that all fruit is sold, if the profit from a kilogram of cherries is three times as high as that from a kilogram of peaches, how does the aggregate profit on these two fruits evolve between the years 2005 and 2006?",
      options: {
        a: "increases",
        b: "stays the same",
        c: "decreases",
        d: "impossible to say"
      },
      correct: "a",
      explanation: "Respuesta correcta: A. La producción de cerezas disminuyó en 40 unidades (de 120 a 80). Para compensar esta pérdida de beneficio se necesitaría un aumento de 40×3 = 120 unidades de melocotones. La producción de melocotones aumentó en 150 unidades (350-200), lo que supera los 120 necesarios para compensar. Por tanto el beneficio total aumenta. La respuesta es la A – aumenta."
    },
    {
      number: 5,
      type: "numerical",
      tableRef: "table_fruit",
      text: "Cherries and peaches are subsidised in Campazia. For every 10 kg which are harvested, the farmers receive 1 Euro subsidy. In which year can the government expect to pay out the largest amount in subsidies?",
      options: {
        a: "2008",
        b: "2007",
        c: "2006",
        d: "2005"
      },
      correct: "c",
      explanation: "Respuesta correcta: C. Se suman cerezas y melocotones en cada año: 2005: 200+120 = 320. 2006: 350+80 = 430. 2007: 250+60 = 310. 2008: 300+60 = 360. El máximo es 2006 con 430. La respuesta es la C – 2006."
    },
    {
      number: 6,
      type: "numerical",
      tableRef: "table_agriculture",
      text: "How much profit is made in Euros from arable farming in country X in 2000? (Profit is the difference between income and production costs)",
      options: {
        a: "€40 million",
        b: "€400 million",
        c: "€80 million",
        d: "€800 million"
      },
      correct: "c",
      explanation: "Respuesta correcta: C. Beneficio = (Ingreso − coste) × Producción = (600 − 400) × 400 = 80,000 (en miles de toneladas) = 80,000,000 €. La respuesta es la C – 80 millones de €."
    },
    {
      number: 7,
      type: "numerical",
      tableRef: "table_agriculture",
      text: "Which category shows the widest profit margin? (The profit margin is profit as a percentage of income)",
      options: {
        a: "Arable farming",
        b: "Cattle farming",
        c: "Horticulture",
        d: "Fishing"
      },
      correct: "c",
      explanation: "Respuesta correcta: C. Margen = (Ingreso − coste) / Ingreso. Tierras cultivables: (600−400)/600 = 0.333. Ganadería: (200−100)/200 = 0.5. Horticultura: (1600−600)/1600 = 0.625. Pesca: (800−400)/800 = 0.5. El mayor margen corresponde a Horticultura. La respuesta es la C."
    },
    {
      number: 8,
      type: "numerical",
      tableRef: "table_agriculture",
      text: "Assuming that the income from meat and fish products goes up by 10%, what will be the total increase in the profit made on meat and fish products?",
      options: {
        a: "€80 million",
        b: "€60 million",
        c: "€40 million",
        d: "€20 million"
      },
      correct: "d",
      explanation: "Respuesta correcta: D. Ganadería: incremento de ingresos = 200 × 10% = 20 €/t × 200,000 t = 4 M€. Pesca: 800 × 10% = 80 €/t × 200,000 t = 16 M€. Total = 4 + 16 = 20 millones de euros. La respuesta es la D."
    },
    {
      number: 9,
      type: "numerical",
      tableRef: "table_agriculture",
      text: "If the profit margin for arable farming doubles, with costs and the volume of produce remaining the same, how much is the profit?",
      options: {
        a: "€160 million",
        b: "€240 million",
        c: "€320 million",
        d: "€400 million"
      },
      correct: "a",
      explanation: "Respuesta correcta: A. Beneficio actual = (600−400) × 400,000 t = 80 M€. Ingresos totales = 600 × 400,000 t = 240 M€. Margen actual = 80/240 = 33.3%. Si el margen se dobla al 66.6%, con los mismos ingresos: nuevo beneficio = 66.6% × 240 M€ ≈ 160 M€. La respuesta es la A – 160 millones de euros."
    },
    {
      number: 10,
      type: "numerical",
      tableRef: "table_mining_profit",
      text: "Which of the three countries achieved the largest turnover (i.e. profits plus costs) of tin in the year 2000, expressed in euros? (There may be two countries with the largest turnover.) N.B.: one tonne is a thousand kilograms.",
      options: {
        a: "Botsland",
        b: "Wandania",
        c: "Karsland",
        d: "Wandania and Karsland"
      },
      correct: "a",
      explanation: "Respuesta correcta: A. Facturación = beneficio + coste por kilo, multiplicado por kilos extraídos. Botsland: (1+4) × 20,000,000 kg = 100 M€. Wandania: (4+2) × 12,000,000 kg = 72 M€. Karsland: (4+2) × 8,000,000 kg = 48 M€. El país con mayor facturación de estaño es Botsland. La respuesta es la A."
    },
    {
      number: 11,
      type: "numerical",
      tableRef: "table_mining_profit",
      text: "How much profit (in Euros) did Wandania make on the extraction of silver, tin and copper in 2000?",
      options: {
        a: "48 million",
        b: "54 million",
        c: "62 million",
        d: "72 million"
      },
      correct: "c",
      explanation: "Respuesta correcta: C. Cobre: 6 M kg × 1 €/kg = 6 M€. Estaño: 12 M kg × 4 €/kg = 48 M€. Plata: 8 M kg × 1 €/kg = 8 M€. Total = 6+48+8 = 62 millones de euros. La respuesta es la C."
    },
    {
      number: 12,
      type: "numerical",
      tableRef: "table_mining_profit",
      text: "All figures remain the same for the year 2001, except that the profit per kilogram of tin in Karsland doubles and the amount of tin extracted increases by 25%. How much (in euros) will the turnover (costs plus profits) of copper, tin and silver increase in Karsland in the year 2001 compared with the year 2000?",
      options: {
        a: "32 million",
        b: "52 million",
        c: "100 million",
        d: "168 million"
      },
      correct: "b",
      explanation: "Respuesta correcta: B. Karsland estaño en 2000: facturación = (4+2) × 8 M kg = 48 M€. En 2001: beneficio dobla → 8 €/kg; coste constante → 2 €/kg; extracción +25% → 10 M kg. Facturación 2001 = (8+2) × 10 M kg = 100 M€. Los otros metales no cambian. Incremento = 100 − 48 = 52 millones de euros. La respuesta es la B."
    },
    {
      number: 13,
      type: "numerical",
      tableRef: "table_population",
      text: "Approximately how many people in country C are eligible to vote?",
      options: {
        a: "780,000",
        b: "3,200,000",
        c: "7,800,000",
        d: "32,000,000"
      },
      correct: "c",
      explanation: "Respuesta correcta: C. La población de C es 11,000 (en miles) = 11,000,000 habitantes, de los cuales el 71% puede votar. 11,000,000 × 71/100 = 7,810,000 ≈ 7,800,000. La respuesta es la C."
    },
    {
      number: 14,
      type: "numerical",
      tableRef: "table_population",
      text: "Which country has the highest population per square km?",
      options: {
        a: "Country A",
        b: "Country B",
        c: "Country C",
        d: "Country D"
      },
      correct: "c",
      explanation: "Respuesta correcta: C. Densidad (población/área): A = 9/89 ≈ 0.101. B = 20/375 ≈ 0.053. C = 11/100 = 0.110. D = 35/388 ≈ 0.090. El país C tiene la mayor densidad de población. La respuesta es la C."
    },
    {
      number: 15,
      type: "numerical",
      tableRef: "table_population",
      text: "Approximately how many people were born in country B in 1997?",
      options: {
        a: "2,360",
        b: "236,000",
        c: "472,000",
        d: "2,360,000"
      },
      correct: "b",
      explanation: "Respuesta correcta: B. País B tiene 20,000 (en miles) = 20,000,000 habitantes y una tasa de natalidad de 11.8 por mil. Nacimientos = 20,000 × 11.8 = 236,000. La respuesta es la B."
    },
    {
      number: 16,
      type: "numerical",
      tableRef: "table_population",
      text: "If, in a recent election in country A, only 45% of those eligible to vote turned out, approximately how many votes were cast?",
      options: {
        a: "3,000,000",
        b: "4,050,000",
        c: "5,050,000",
        d: "6,000,000"
      },
      correct: "a",
      explanation: "Respuesta correcta: A. País A: 9,000,000 habitantes, 74% con derecho a voto = 6,660,000 electores. Con participación del 45%: 6,660,000 × 45% = 2,997,000 ≈ 3,000,000 votos. La respuesta es la A."
    },
    {
      number: 17,
      type: "numerical",
      tableRef: "table_population",
      text: "Which country is currently growing in population by the largest number of people per year, ignoring immigration/emigration?",
      options: {
        a: "Country A",
        b: "Country B",
        c: "Country C",
        d: "Country D"
      },
      correct: "d",
      explanation: "Respuesta correcta: D. Crecimiento neto = (nacimientos − defunciones) × población. A: (13.9−9.9) × 9,000 = 4 × 9,000 = 36,000. B: (11.8−9.4) × 20,000 = 2.4 × 20,000 = 48,000. C: (10.5−8.4) × 11,000 = 2.1 × 11,000 = 23,100. D: (12.1−8.9) × 35,000 = 3.2 × 35,000 = 112,000. El país D crece más. La respuesta es la D."
    },
    {
      number: 18,
      type: "numerical",
      tableRef: "table_gdp",
      text: "For country B, by how much do exports exceed imports, in millions (m) of euro?",
      options: {
        a: "6,000 m euro",
        b: "60,000 m euro",
        c: "204,000 m euro",
        d: "210,000 m euro"
      },
      correct: "a",
      explanation: "Respuesta correcta: A. Exportaciones − Importaciones = 76,000 − 70,000 = 6,000 millones de euros. La respuesta es la A."
    },
    {
      number: 19,
      type: "numerical",
      tableRef: "table_gdp",
      text: "Which country is the biggest net exporter, measured as a percentage of GDP?",
      options: {
        a: "Country A",
        b: "Country B",
        c: "Country C",
        d: "Country D"
      },
      correct: "c",
      explanation: "Respuesta correcta: C. Ratio exportaciones/PIB: A = 15,000/117,000 = 12.8%. B = 76,000/280,000 = 27.1%. C = 81,000/176,000 = 46.0%. D = 150,000/735,000 = 20.4%. El mayor ratio es el del País C. La respuesta es la C. (Nota: el encabezado del PDF indica erróneamente «A» pero el cálculo y la clave de respuestas confirman C.)"
    },
    {
      number: 20,
      type: "numerical",
      tableRef: "table_gdp",
      text: "Which country has the highest GDP per head of the population?",
      options: {
        a: "Country A",
        b: "Country B",
        c: "Country C",
        d: "Country D"
      },
      correct: "d",
      explanation: "Respuesta correcta: D. PIB per cápita (prescindiendo de ceros): A = 117/9 ≈ 13. B = 280/20 = 14. C = 176/11 = 16. D = 735/35 = 21. El mayor valor corresponde al País D. La respuesta es la D."
    }
  ]
});

// ── Verbal section ─────────────────────────────────
window.TESTS.push({
  id: "RVNEN4-V",
  title: "RVNE N 4 · Razonamiento Verbal",
  sections: [
    {
      title: "Razonamiento Verbal",
      instruction: "Cada pregunta está compuesta por un texto y cuatro afirmaciones. Indique cuál de las cuatro afirmaciones es la que mejor responde al texto dado. Base su respuesta exclusivamente en la información que proporciona el texto.",
      questionRange: [21, 40]
    }
  ],
  tables: {},
  questions: [
    {
      number: 21,
      type: "verbal",
      text: "There is little evidence of adequate special measures designed to eliminate the problem of illiteracy on the part of many school leavers. These unqualified school-leavers inevitably become the hard-core or the long-term unemployed. Virtually all Member States of the EU, however, have taken or are now taking steps to ensure that all young people are offered a sound, broadly-based initial vocational training. The range of schemes sometimes makes it difficult for the individual to find his or her way through the system. Some simplification and streamlining is desirable to allow greater transparency and comparability of the different qualifications offered by these schemes throughout the Union.",
      options: {
        a: "Literacy is the most important skill that an individual needs to gain at school.",
        b: "Few Member States offer vocational training to young people.",
        c: "It is likely that an individual with literacy problems will have difficulty finding employment.",
        d: "It is more difficult to provide literacy classes than vocational training for young people."
      },
      correct: "c",
      explanation: "Respuesta correcta: C. El texto afirma que los jóvenes que abandonan la escuela sin cualificaciones se convierten inevitablemente en parados de larga duración. La opción C refleja directamente esta afirmación."
    },
    {
      number: 22,
      type: "verbal",
      text: "Although Oliver Sacks seems to have no fears when he is inside his laboratory, daily life presents him with many more problems: he is afraid of horses, afraid of contracting all sorts of diseases which he reads about in his parents' books, afraid to cross the road or to walk on the cracks between the paving stones. He also soon stopped practising his faith, although he still enjoys the traditions of Jewish festivals.",
      options: {
        a: "Oliver Sacks has no fears when he is in his laboratory.",
        b: "Stepping on the cracks between paving stones causes Oliver Sacks anxiety.",
        c: "Oliver Sacks seems to be afraid of everything in his daily life.",
        d: "There are no horses in Oliver Sacks' laboratory."
      },
      correct: "c",
      explanation: "Respuesta correcta: C. El texto enumera una serie de miedos que Oliver Sacks tiene en la vida cotidiana (caballos, enfermedades, cruzar la calle, las grietas), lo que respalda la afirmación de que parece tener miedo de todo en su vida diaria."
    },
    {
      number: 23,
      type: "verbal",
      text: "In 1809 the German philosopher Georg Wilhelm Friedrich Hegel (1770-1831) received a letter from the Netherlands. At the time he had taken over as principal of the Grammar School (Gymnasium) in Nuremberg, while waiting for a professorship at a university. Before that time he had been a private tutor in Jena, and the Dutchman Pieter van Ghert had been one of his students.",
      options: {
        a: "G. W. F. Hegel was offered a professorship in Nuremberg in 1809.",
        b: "The German philosopher Hegel taught the Dutchman Pieter van Ghert when he was principal of a Grammar School.",
        c: "Hegel was expecting a professorship in Nuremberg or Jena when he received a letter from the Netherlands.",
        d: "After Hegel, the German philosopher, had been a private tutor in Jena, he became the principal of a Grammar School."
      },
      correct: "d",
      explanation: "Respuesta correcta: D. El texto indica que antes de ser director del Gymnasium de Nuremberg, Hegel había sido preceptor privado en Jena. La opción D refleja con precisión esta secuencia temporal."
    },
    {
      number: 24,
      type: "verbal",
      text: "More than seventy thousand people live on the edge of the Merapi volcano in Central Java. Their life is in constant danger. The volcano has been active for weeks and is spouting lava. Although the Merapi could erupt at any moment, the people have been told to stay in their homes. The Merapi lies in a circle of volcanoes around the Pacific Ocean and is one of the most explosive of the 129 active volcanoes in Indonesia. Children play in the street. They stand in a circle and sing a song.",
      options: {
        a: "There is a ring of 129 volcanoes around the Pacific Ocean; the Merapi is one of them.",
        b: "The authorities have told people living near the Merapi volcano that there is no need to leave, despite the danger of the volcano erupting.",
        c: "The children hope that by singing a song at the foot of the Merapi, they can ward off the danger of eruption.",
        d: "The constant presence of danger does not prevent the more than seventy thousand people living around the Merapi from getting on with their life as usual."
      },
      correct: "d",
      explanation: "Respuesta correcta: D. A pesar de que el volcán puede erupcionar en cualquier momento y la gente tiene orden de quedarse en sus casas, los niños juegan en la calle. Esto muestra que la vida continúa con normalidad."
    },
    {
      number: 25,
      type: "verbal",
      text: "The first solo round the world sailing trip (1895-98) was described in his book by Captain Joshua Slocum. The subject of this book is the isolated existence of a loner in the wildest of nature. Slocum was a seaman who started sailing solo: on the Spray, a wooden sailboat with cotton sails, and without an engine - not made of modern material that is proof against anything. He was a real man, so he didn't write much about his emotions, but more about the practical problems which he had to solve: storms, sharks and not knowing where he was.",
      options: {
        a: "Because Slocum was a real man he wrote about sharks and storms and not about the emotions he experienced during his solo sailing trip around the world.",
        b: "Slocum wasn't the first man to sail solo around the world, but he was the first sailor to go round the world on a boat without an engine.",
        c: "As he no longer knew who he was, Captain Joshua Slocum sailed around the world; with success.",
        d: "The Spray, the boat used by solo sailor Slocum, was equipped with all the contemporary comforts, except an engine."
      },
      correct: "a",
      explanation: "Respuesta correcta: A. El texto especifica que Slocum era un hombre de verdad, razón por la cual no escribió mucho sobre sus emociones, sino sobre los problemas prácticos: tormentas, tiburones y no saber dónde se encontraba. La opción A reproduce fielmente esta idea."
    },
    {
      number: 26,
      type: "verbal",
      text: "It is easy to formulate verbal policies about how important it is to protect our climate. But when it comes to action large sums of money suddenly need to be found. Emissions trade is perhaps the solution: the trade in pollution rights. Whoever pollutes the least, earns the most.",
      options: {
        a: "It costs a lot of money to protect the climate.",
        b: "Some things are easier said than done. Like, for instance, he who pollutes the least, earns the most.",
        c: "Emission is the same as the trade in pollution rights.",
        d: "Everyone is agreed that we must protect our climate."
      },
      correct: "a",
      explanation: "Respuesta correcta: A. El texto menciona que a la hora de pasar a la acción hacen falta grandes sumas de dinero, lo que respalda la opción A."
    },
    {
      number: 27,
      type: "verbal",
      text: "What is the purpose of therapeutic cloning? Stem cells are present in bone marrow, in umbilical blood and especially in very early embryos. Researchers want to use stem cells to propagate tissue cells for the treatment of patients whose organs no longer work properly. If, for example, the heart muscle has partially died off and weakened after a heart attack, new heart muscle cells could probably restore the function of the organ. And thanks to the replacement of damaged nerve cells in the spinal marrow, paraplegics might be able to walk once again. Expectations are high, but it will be several years before we can be sure that these possibilities are really feasible.",
      options: {
        a: "A new heart can be grown with the aid of stem cells.",
        b: "In a few years time, stem cells will make it possible to cure patients.",
        c: "People may be able to walk again thanks to the introduction of new nerve cells into the spinal marrow.",
        d: "A stem cell can be both a heart muscle cell and a nerve cell."
      },
      correct: "c",
      explanation: "Respuesta correcta: C. El texto menciona explícitamente que gracias a la sustitución de células nerviosas dañadas en la médula espinal, los parapléjicos podrían volver a caminar. La opción C refleja directamente esta afirmación."
    },
    {
      number: 28,
      type: "verbal",
      text: "Seven thousand pedestrians die in Europe each year as a result of collisions with cars. The greatest danger in the event of an accident is the crack the victim receives to the head as he falls against the bonnet. In scientific terms, a bump like this represents a quantity of energy which has to be absorbed by the colliding components.",
      options: {
        a: "Most people die in Europe each year as a result of collisions in traffic.",
        b: "When a pedestrian is hit by a car, he usually hits his head on the bonnet.",
        c: "A collision between a pedestrian and a car can be scientifically expressed as the absorption of a quantity of energy by the colliding components.",
        d: "Seven thousand pedestrians are hit by cars in Europe every year."
      },
      correct: "c",
      explanation: "Respuesta correcta: C. El texto afirma que, en términos científicos, un golpe de este tipo representa una cantidad de energía que tiene que ser absorbida por los componentes que colisionan. La opción C recoge exactamente esta idea."
    },
    {
      number: 29,
      type: "verbal",
      text: "The effort of commuting into work is assumed by most of us to have a direct and negative impact on an individual's performance and work output. However, there is surprisingly little definitive research to support our implicit views regarding this relationship. The limited research suggests that the relationship is complex and affected by several factors, including the individual's perceptions of the complexity, controllability and comfort of the journey. For example, some may happily resign themselves to a lengthy and uncomfortable trip into the office, whilst others can experience feelings of anger and detrimental drops in attention and concentration later in the day as a result of problems encountered when travelling to work.",
      options: {
        a: "It is likely that more research on the effects of commuting on productivity will be carried out in the near future.",
        b: "There is a clear link between the distance travelled and the degree of stress experienced by an individual.",
        c: "If an individual expects a difficult journey into work, he or she will tend to plan an alternative, more convenient route.",
        d: "Few people think that commuting may actually have a positive impact upon an individual's performance at work."
      },
      correct: "d",
      explanation: "Respuesta correcta: D. El texto afirma que la mayoría de nosotros asumimos que el desplazamiento al trabajo tiene un impacto negativo en el rendimiento, lo que implica que muy pocos creen que pueda tener un impacto positivo. La opción D refleja este punto."
    },
    {
      number: 30,
      type: "verbal",
      text: "Just as a wolf cannot survive without the pack, so a dog needs an owner. Attachment is strategic behaviour, designed to increase the chances of survival. Sometimes this is paired with what we assume to be loyalty or affection. Sometimes it involves tricks, wile and cunning, as the moment dictates. The clever dog will use his expression of affection to achieve rather more mundane ends, namely food!",
      options: {
        a: "Because a dog needs a pack, a dog without an owner will not survive.",
        b: "When a dog displays affection, this is part of a strategy by which he is trying to increase his chances of survival.",
        c: "Pets use tricks to obtain food.",
        d: "Because a dog looks like a wolf, its behaviour is also similar."
      },
      correct: "b",
      explanation: "Respuesta correcta: B. El texto explica que el apego es un comportamiento estratégico diseñado para aumentar las posibilidades de supervivencia, y que el perro inteligente usa la expresión de afecto para conseguir comida. La opción B recoge esta idea."
    },
    {
      number: 31,
      type: "verbal",
      text: "On 16 November 1944, Ludwig Wittgenstein wrote a letter to his former student Norman Malcolm, who was then serving as a conscript in the US Navy. Wittgenstein recalled a remark that Malcolm had made five years earlier about the 'English character'. Wittgenstein claimed to be shocked by the 'primitive nature' of the comment. \"I thought, what point is there in studying philosophy when all you gain from it is the ability to discuss a few obscure points of logic and when it does nothing to clarify your thinking on the more important issues of everyday life,\" he wrote.",
      options: {
        a: "Norman Malcolm was studying with Ludwig Wittgenstein in 1944.",
        b: "Wittgenstein considered 'the issues of everyday life' a more important area for a philosopher to consider than a few obscure points of logic.",
        c: "In 1939, Malcolm made a remark about the English character which had to be shocking to a philosopher.",
        d: "Wittgenstein believed that the point of studying philosophy was to learn how to discuss a few obscure points of logic."
      },
      correct: "c",
      explanation: "Respuesta correcta: C. El texto indica que Wittgenstein recordó un comentario que Malcolm había hecho cinco años antes (de 1944, por tanto en 1939) sobre el carácter inglés, comentario ante el que Wittgenstein afirmó haberse escandalizado. La opción C refleja esto con precisión."
    },
    {
      number: 32,
      type: "verbal",
      text: "Indira, daughter of Nehru, drank in politics with her mother's milk. When she was only twelve she became head of the Young Congress Party in her birthplace Allahabad. After independence, when her father became Prime Minister in New Delhi, she was his staunchest supporter. Apart from that, Indira's tasks consisted mainly of running Nehru's household and she was not very concerned with active politics.",
      options: {
        a: "Indira made her debut in active politics when she was 12 years old.",
        b: "Indira supported her father in New Delhi, in his post as Prime Minister.",
        c: "Most of the support which Indira gave Nehru when he became Prime Minister, was political support.",
        d: "At the age of twelve, Indira became chairman of the Congress Party in her birthplace."
      },
      correct: "b",
      explanation: "Respuesta correcta: B. El texto especifica que cuando su padre se convirtió en Primer Ministro en Nueva Delhi, Indira fue su apoyo más incondicional. La opción B refleja directamente esta afirmación."
    },
    {
      number: 33,
      type: "verbal",
      text: "The crown cap of a bottle is not the most appreciated aspect of a drink. Once it has been flipped from the bottle, the crown cap usually ends up nonchalantly in the flowerbeds or, in the most favourable circumstances, in the rubbish bin, but it is this cap which actually keeps the bubbles in the bottle and ensures that the taste remains fresh for months on end.",
      options: {
        a: "The crown cap is not appreciated by the buyer of a bottled drink.",
        b: "The effect of the crown cap is that it maintains the taste of the contents of the bottle for months.",
        c: "The crown cap of the bottle ends up in the flowerbeds as it is forced off by the bubbles.",
        d: "Very few crown caps find their way into the rubbish bin after use."
      },
      correct: "b",
      explanation: "Respuesta correcta: B. Según el texto, el tapón corona asegura que el sabor se mantiene fresco durante meses. La opción B refleja fielmente esta afirmación del texto."
    },
    {
      number: 34,
      type: "verbal",
      text: "BRUSSELS - The pensions of many citizens of the European Union are under threat because of the ageing of the population in the next fifteen years. Without drastic measures there will be heavy budget deficits, which will in turn serve to undermine the value of the euro. The EU Ministers of Social Affairs are keen to develop a strategy to disarm this 'financial time bomb'.",
      options: {
        a: "If no measures are taken, it will not be possible to pay out pensions to European citizens in fifteen years time.",
        b: "There is a financial time bomb in Europe, caused by the ageing of the population.",
        c: "The value of the euro will be under threat if nothing is done to call a halt to ageing in Europe.",
        d: "The EU Ministers of Social Affairs have designed drastic measures to ensure the safety of European citizens' pensions."
      },
      correct: "b",
      explanation: "Respuesta correcta: B. El texto utiliza explícitamente la expresión «bomba de tiempo financiera» para referirse al envejecimiento de la población. La opción B recoge esta idea con precisión."
    },
    {
      number: 35,
      type: "verbal",
      text: "The oldest webcam in the world is about to disappear. The coffee cam, set up by scientists at Cambridge University ten years ago so that they could see when their coffee was ready in a room down the hallway, has become obsolete as the result of a coming move. 'We set up the webcam because we got fed up of having to get up and walk down the hall only to find that the jug was still only half full', says cam builder Quentin Stafford-Fraser in The Times. The researcher said the webcam was the most useful network application he had ever invented.",
      options: {
        a: "The coffee cam was installed some years ago as a household application. Now it is a museum piece, according to Quentin Stafford-Fraser in The Times.",
        b: "Because the coffee jug was always only half full, Quentin Stafford-Fraser built his first webcam.",
        c: "The first version of the most useful network application ever invented will shortly be disappearing.",
        d: "The first webcam in the world will not be disappearing because it doesn't work, but because its users are going to move."
      },
      correct: "d",
      explanation: "Respuesta correcta: D. El texto indica que la «coffee cam» se ha vuelto obsoleta a causa de una mudanza próxima, no porque no funcione. La opción D refleja exactamente esta razón."
    },
    {
      number: 36,
      type: "verbal",
      text: "For the first time Swedish transplant surgeons have transplanted a lung from a deceased donor whose heart had not beaten for three hours. Up to now lung transplants have only been possible from brain-dead donors whose hearts were still beating. One of the lungs was transplanted into a 54-year-old woman in an advanced stage of COPD, a lung disease. She had been reliant on extra oxygen since 1993, but has now lived five months with the donor lung and is doing well.",
      options: {
        a: "A lung donor was saved by the transplant three hours after his heart had stopped beating.",
        b: "Since a 54-year-old woman has had a donor lung she has not needed extra oxygen.",
        c: "In Sweden a lung has been transplanted from a donor whose heart had not beaten for three hours. This was the first time it had been done.",
        d: "Swedish doctors have demonstrated that one lung of a brain-dead donor can still be used after three hours."
      },
      correct: "c",
      explanation: "Respuesta correcta: C. El texto afirma que por primera vez cirujanos suecos han realizado un trasplante de pulmón de un donante cuyo corazón no latía desde hacía tres horas. La opción C refleja esto con precisión."
    },
    {
      number: 37,
      type: "verbal",
      text: "Facts / Thrombosis is also a risk for pilots. It is not only passengers who run the risk of \"long-flight thrombosis\". The disorder is increasingly being recognized in aero-medicine as a risk for flight crew personnel. That has been published in the monthly magazine of the Association of Dutch Commercial Pilots, VNV. The authors of the article say that it is strange that all the attention should be focused on the passengers. Pilots have at least an equal chance of suffering from what has become known as tourist class or economy class syndrome. Anyone who sits still for a prolonged period runs the risk that small blood clots form in the veins of the lower legs.",
      options: {
        a: "It is strange that pilots should also be susceptible to long-flight thrombosis.",
        b: "You will not get long-flight thrombosis if you move around enough.",
        c: "You have a greater chance of suffering from thrombosis if you are a frequent flyer.",
        d: "Flight crew also run the risk of suffering from economy class syndrome."
      },
      correct: "d",
      explanation: "Respuesta correcta: D. El texto afirma que la trombosis está siendo cada vez más reconocida como un riesgo para la tripulación de vuelo y que los pilotos tienen al menos las mismas probabilidades de sufrir el «síndrome de clase turista». La opción D refleja esto."
    },
    {
      number: 38,
      type: "verbal",
      text: "Stephen Hawking is undoubtedly the most famous scientist of his time. His book A Brief History of Time became an unequalled world-wide success when it was published in 1988, since when the British professor, confined to a wheelchair and forced to communicate by means of a speech synthesiser, has been fêted by the media. We have become familiar with his life story and his theories of imploding black holes and imaginary time dimensions in an almost mind-numbing offensive of interviews, portraits, and commentaries. Practically no biographical detail has gone unexplored, no element of Hawking's physics has escaped a popular-scientific and subsequent presentation to the masses. What we do not know is what we do not understand.",
      options: {
        a: "Stephen Hawking is the most famous scientist of all time and he explains things which most people cannot understand.",
        b: "The most famous scientist of today usually communicates using a speech synthesiser.",
        c: "Practically every aspect of Stephen Hawking's life story has been reported by the media.",
        d: "What remains unknown about Stephen Hawking is that which the media cannot understand, and thus does not form part of the avalanche of information which has fallen upon the reader, listener or viewer."
      },
      correct: "c",
      explanation: "Respuesta correcta: C. El texto afirma que prácticamente no queda ningún detalle biográfico sin explorar. La opción C recoge fielmente esta idea."
    },
    {
      number: 39,
      type: "verbal",
      text: "Chewing on gum improves both long- and short-term memory. One third of the people taking part in a trial chewed gum, one third pretended to chew gum and the remaining third had nothing in their mouths. It turned out that the scores of the gum chewers were almost 25 percent higher than the scores in the control groups. This discovery is very interesting, and scientists now want to know what mechanism is behind these results. But that remains a mystery.",
      options: {
        a: "You will get a higher score if you make chewing motions while taking a concentration test.",
        b: "Chewing on gum improves one's intelligence.",
        c: "New research will show why chewing on gum contributes to a better memory.",
        d: "So far it has not been discovered why chewing on gum contributes to an improvement in short-term memory."
      },
      correct: "d",
      explanation: "Respuesta correcta: D. El texto indica que el descubrimiento es interesante pero que el mecanismo detrás de los resultados sigue siendo un misterio. La opción D refleja con precisión esta conclusión."
    },
    {
      number: 40,
      type: "verbal",
      text: "A study shows that people who consciously eat less sugar can actually grow fatter as a result: it appears from the study that there is a negative connection between the consumption of sugar and fat. People who eat a lot of fat usually eat relatively little sugar and vice versa. Moreover, sugar is an important flavour enhancer, just like fat. If people leave out sugar, they compensate this either entirely or partly by eating more fat. Switching to low-calorie drinks where the sugar is replaced by artificial sweeteners has therefore no demonstrable effect on body weight.",
      options: {
        a: "Because sugar, like fat, is an important flavour enhancer, it is eaten a lot.",
        b: "Low-calorie drinks have a higher fat content than ordinary drinks.",
        c: "The negative connection between the consumption of sugar and fat means that people who eat less sugar can become fatter.",
        d: "People who leave out sugar from their daily diet compensate for it with artificial sweeteners."
      },
      correct: "c",
      explanation: "Respuesta correcta: C. El texto afirma que existe una conexión negativa entre el consumo de azúcar y grasa, y que si la gente elimina el azúcar, compensa comiendo más grasa. Por tanto, quienes comen menos azúcar pueden engordar. La opción C recoge exactamente esta idea."
    }
  ]
});
