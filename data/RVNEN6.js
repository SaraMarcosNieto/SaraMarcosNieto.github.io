window.TESTS.push({
  id: "RVNEN6-N",
  title: "RVNEN6 · Numerical Reasoning — AD5 Sample Test (EN)",
  defaultTimer: 20,
  sections: [
    {
      title: "Number of PCs",
      instruction: "Questions 1–3 refer to the following table.",
      questionRange: { start: 1, end: 3 }
    },
    {
      title: "Property Market in Brussels",
      instruction: "Questions 4–6 refer to the following table.",
      questionRange: { start: 4, end: 6 }
    },
    {
      title: "Cost of Training in Businesses — Europe of 15 (2002)",
      instruction: "Questions 7–8 refer to the following table.",
      questionRange: { start: 7, end: 8 }
    },
    {
      title: "Registration of New Vehicles in the Netherlands",
      instruction: "Questions 9–11 refer to the following table.",
      questionRange: { start: 9, end: 11 }
    },
    {
      title: "Doctors and Dentists in the European Union",
      instruction: "Questions 12–14 refer to the following table.",
      questionRange: { start: 12, end: 14 }
    }
  ],
  tables: {
    table_pcs: {
      title: "Number of PCs",
      headers: ["", "PCs 2001 (M)", "PCs 2002 (M)", "PCs per 100 inh. 2002", "% working pop. using PC 2001", "% working pop. using PC 2002"],
      rows: [
        ["Country I",   "2",  "3",  "25", "51%", "53%"],
        ["Country II",  "3",  "3",  "58", "70%", "75%"],
        ["Country III", "20", "21", "35", "45%", "45%"],
        ["Country IV",  "2",  "2",  "40", "43%", "50%"],
        ["Country V",   "11", "13", "25", "50%", "60%"],
        ["Country VI",  "1",  "1",  "59", "66%", "56%"]
      ]
    },
    table_property: {
      title: "Property Market in Brussels",
      headers: ["", "1995", "2000 Q1", "2000 Q2", "2000 Q3", "2000 Q4"],
      rows: [
        ["NON-RESIDENTIAL PROPERTY MARKET", "", "", "", "", ""],
        ["Surface area authorised for new construction (m²)", "144 000", "77 000", "32 000", "73 000", "54 000"],
        ["Permits for new construction",    "10", "20", "10", "10", "10"],
        ["Permits for building renovation", "30", "60", "40", "50", "40"],
        ["RESIDENTIAL PROPERTY MARKET", "", "", "", "", ""],
        ["Living area authorised for new construction (m²)",  "42 000", "58 000", "63 000", "52 000", "29 000"],
        ["Permits — new apartment buildings", "60",  "80",  "80",  "80",  "70"],
        ["Permits — new houses",             "540", "730", "720", "610", "260"],
        ["Permits — building renovation",    "200", "280", "260", "240", "260"]
      ]
    },
    table_training: {
      title: "Cost of Training in Businesses — Europe of 15 (2002)",
      headers: ["Sector", "Share of training in personnel costs", "Avg cost per beneficiary (M+W) €", "Men €", "Women €"],
      rows: [
        ["Industry (average)",                             "1%", "1 400", "1 500", "1 300"],
        ["  Mining",                                       "1%", "1 300", "1 300", "1 200"],
        ["  Manufacturing",                                "1%", "1 400", "1 400", "1 200"],
        ["  Energy and water",                             "2%", "2 500", "2 900", "2 200"],
        ["Construction (average)",                         "1%",   "800",   "800", "1 000"],
        ["Trade, transport & communications (average)",    "2%", "1 600", "1 800", "1 100"],
        ["  Transport and communications",                 "2%", "1 900", "2 100", "1 400"],
        ["  Trade and repairs",                            "1%", "1 000", "1 200",   "800"],
        ["  Hotels and restaurants",                       "1%",   "600",   "600",   "600"],
        ["Financial, property & business services (avg)",  "2%", "2 300", "2 400", "2 200"],
        ["  Financial and insurance services",             "3%", "2 800", "2 900", "2 700"],
        ["  Property and business services",               "1%", "1 400", "1 600", "1 100"],
        ["Average for all businesses",                     "1%", "1 400", "1 600", "1 100"]
      ]
    },
    table_vehicles: {
      title: "Registration of New Vehicles in the Netherlands",
      headers: ["", "2000", "2001", "2002"],
      rows: [
        ["New vehicles registered",                      "645 000", "595 200", "550 000"],
        ["Passenger cars",                               "550 000", "500 000", "470 900"],
        ["Buses and coaches",                              "1 200",   "1 000",   "1 100"],
        ["Commercial vehicles for goods transport",       "60 300",  "64 400",  "50 000"],
        ["Taxis",                                          "5 500",   "5 800",   "4 000"],
        ["Tractors",                                       "3 000",   "2 900",   "4 000"],
        ["Motorcycles",                                   "25 000",  "21 100",  "20 000"]
      ]
    },
    table_doctors: {
      title: "Doctors and Dentists in the European Union",
      headers: ["Country", "Doctors 1990 (per 100 000 inh.)", "Doctors 2001 (per 100 000 inh.)", "Dentists 1990 (per 100 000 inh.)", "Dentists 2001 (per 100 000 inh.)", "Population 1990", "Population 2001"],
      rows: [
        ["France",         "270", "330",  "70",  "70", "59 000 000", "60 000 000"],
        ["Greece",         "340", "450", "100", "120", "11 000 000", "13 000 000"],
        ["Ireland",        "160", "240",  "40",  "50",  "4 000 000",  "4 000 000"],
        ["Italy",          "470", "600",  "20",  "60", "57 000 000", "58 000 000"],
        ["Luxembourg",     "200", "320",  "50",  "70",    "400 000",    "450 000"],
        ["Netherlands",    "250", "330",  "50",  "50", "16 000 000", "16 000 000"],
        ["Portugal",       "280", "300",  "20",  "50", "10 000 000", "10 500 000"],
        ["United Kingdom", "160", "180",  "40",  "40", "60 000 000", "60 000 000"],
        ["Sweden",         "260", "400", "100",  "90",  "9 000 000",  "9 000 000"]
      ]
    }
  },
  questions: [
    {
      number: 1,
      type: "numerical",
      tableRef: "table_pcs",
      text: "In 2002, how many inhabitants did Country I have?",
      options: {
        a: "75 000 000",
        b: "750 000",
        c: "12 000 000",
        d: "7 500 000",
        e: "1 200 000"
      },
      correct: "c",
      explanation: "En 2002 el País I tiene 3 millones de PCs y 25 PCs por cada 100 habitantes, es decir 1 PC por cada 4 personas. 3 000 000 × 4 = 12 000 000 habitantes."
    },
    {
      number: 2,
      type: "numerical",
      tableRef: "table_pcs",
      text: "In 2002, the working population of Country II was 2 500 000, i.e. 100 000 more than the previous year. How did the number of people using a PC for work change between 2001 and 2002?",
      options: {
        a: "It increased by 195 000",
        b: "It decreased by 50 000",
        c: "It increased by 150 000",
        d: "It stayed the same",
        e: "It decreased by 195 000"
      },
      correct: "a",
      explanation: "Población activa 2001 = 2 500 000 − 100 000 = 2 400 000. Usuarios PC 2001 = 2 400 000 × 0,70 = 1 680 000. Usuarios PC 2002 = 2 500 000 × 0,75 = 1 875 000. Variación: 1 875 000 − 1 680 000 = +195 000."
    },
    {
      number: 3,
      type: "numerical",
      tableRef: "table_pcs",
      text: "In 2001, the number of PCs per 100 inhabitants in Country V was 5 units smaller than in 2002. What was the population of Country V in 2001?",
      options: {
        a: "27 500 000",
        b: "65 000 000",
        c: "2 200 000",
        d: "55 000 000",
        e: "30 000 000"
      },
      correct: "d",
      explanation: "En 2002 hay 25 PCs por 100 habitantes. En 2001 había 25 − 5 = 20 PCs por 100 habitantes, es decir 1 PC por cada 5 personas. PCs en 2001 = 11 millones. 11 000 000 × 5 = 55 000 000 habitantes."
    },
    {
      number: 4,
      type: "numerical",
      tableRef: "table_property",
      text: "How did the number of permits for new construction on the non-residential property market change between 1995 and 2000?",
      options: {
        a: "It stayed the same",
        b: "It increased five-fold",
        c: "It doubled",
        d: "It fell by half",
        e: "It increased four-fold"
      },
      correct: "b",
      explanation: "Permisos 1995 = 10. Total permisos 2000 (suma de los 4 trimestres) = 20 + 10 + 10 + 10 = 50. 50 / 10 = 5. Se quintuplicaron."
    },
    {
      number: 5,
      type: "numerical",
      tableRef: "table_property",
      text: "What was the average surface area for new construction for the residential property market (construction of new apartment buildings and new houses) for which a permit was granted in 1995?",
      options: {
        a: "52.5 m²",
        b: "70 m²",
        c: "600 m²",
        d: "240 m²",
        e: "120 m²"
      },
      correct: "b",
      explanation: "Superficie autorizada para nueva construcción residencial en 1995 = 42 000 m². Número total de permisos (apartamentos + casas) = 60 + 540 = 600. Superficie media = 42 000 / 600 = 70 m²."
    },
    {
      number: 6,
      type: "numerical",
      tableRef: "table_property",
      text: "In 1990, there were half as many permits for building renovation on the non-residential property market as on the residential property market, on which there were 30 fewer permits than in 1995. How did the number of permits for building renovation on the non-residential property market change between 1990 and 1995?",
      options: {
        a: "There were 170 fewer permits in 1995 than in 1990",
        b: "There were 85 fewer permits in 1995 than in 1990",
        c: "There were 55 fewer permits in 1995 than in 1990",
        d: "There were 140 fewer permits in 1995 than in 1990",
        e: "There were 120 fewer permits in 1995 than in 1990"
      },
      correct: "c",
      explanation: "Permisos renovación residencial 1990 = 200 − 30 = 170. Permisos renovación no residencial 1990 = 170 / 2 = 85. Permisos renovación no residencial 1995 = 30. Diferencia: 85 − 30 = 55 permisos menos en 1995 que en 1990."
    },
    {
      number: 7,
      type: "numerical",
      tableRef: "table_training",
      text: "There were 20 000 000 workers in the industrial sector in the Europe of 15 in 2002, 45% of which were women. What was the cost of vocational training for men?",
      options: {
        a: "EUR 13.5 billion",
        b: "EUR 11.7 billion",
        c: "EUR 16.5 billion",
        d: "EUR 14.3 billion",
        e: "EUR 12.3 billion"
      },
      correct: "c",
      explanation: "Trabajadores hombres = 20 000 000 × 0,55 = 11 000 000. Coste formación hombres en industria = 1 500 €. Coste total = 11 000 000 × 1 500 = 16 500 000 000 € = 16,5 billion (1 billion inglés = 1 000 millones)."
    },
    {
      number: 8,
      type: "numerical",
      tableRef: "table_training",
      text: "In 2002, personnel costs in the industrial sector were EUR 1 000 billion, a quarter of which in the energy and water sector. How many persons worked in the latter sector in 2002?",
      options: {
        a: "1 000 000",
        b: "8 000 000",
        c: "100 000 000",
        d: "2 000 000",
        e: "10 000 000"
      },
      correct: "d",
      explanation: "Costes de personal en energía y agua = 1 000 billion / 4 = 250 billion = 250 000 000 000 €. El 2% se destina a formación: 250 000 000 000 × 0,02 = 5 000 000 000 €. Dividiendo entre el coste por persona (2 500 €): 5 000 000 000 / 2 500 = 2 000 000 trabajadores."
    },
    {
      number: 9,
      type: "numerical",
      tableRef: "table_vehicles",
      text: "In 2000, 1/3 of passenger cars registered were new, and the number of cars registered that year made up 1/4 of the number of passenger cars in the Netherlands. How many passenger cars not registered in that year were there in 2000?",
      options: {
        a: "1 237 500",
        b: "4 950 000",
        c: "1 650 000",
        d: "137 500",
        e: "3 250 000"
      },
      correct: "b",
      explanation: "Los 550 000 coches de pasajeros registrados representan 1/3 del total de registros ese año → total registrado = 550 000 × 3 = 1 650 000. Eso es 1/4 del total de coches en los Países Bajos → total = 1 650 000 × 4 = 6 600 000. Coches no registrados ese año = 6 600 000 − 1 650 000 = 4 950 000."
    },
    {
      number: 10,
      type: "numerical",
      tableRef: "table_vehicles",
      text: "In 2003, 50 000 fewer new vehicles were registered in the Netherlands than in 2002, but 5 times more second-hand vehicles than new vehicles, i.e. 100 000 more than in 2002. How many second-hand vehicles were registered in 2002?",
      options: {
        a: "2 500 000",
        b: "2 650 000",
        c: "2 400 000",
        d: "500 000",
        e: "2 200 000"
      },
      correct: "c",
      explanation: "Vehículos nuevos 2003 = 550 000 − 50 000 = 500 000. Vehículos usados 2003 = 500 000 × 5 = 2 500 000. En 2002 había 100 000 menos: 2 500 000 − 100 000 = 2 400 000."
    },
    {
      number: 11,
      type: "numerical",
      tableRef: "table_vehicles",
      text: "The average price of a tractor in 2000 was EUR 40 000 and it increased by 5% each year between 2000 and 2002. By how much did the price of tractors in the Netherlands increase between 2000 and 2002?",
      options: {
        a: "EUR 4 100",
        b: "EUR 4 000",
        c: "EUR 44 100",
        d: "EUR 12 300 000",
        e: "EUR 4 410"
      },
      correct: "a",
      explanation: "Precio 2000 = 40 000 €. Aumento en 2001 = 40 000 × 0,05 = 2 000 €. Precio 2001 = 42 000 €. Aumento en 2002 = 42 000 × 0,05 = 2 100 €. Aumento total = 2 000 + 2 100 = 4 100 €."
    },
    {
      number: 12,
      type: "numerical",
      tableRef: "table_doctors",
      text: "How did the number of dentists in Portugal change between 1990 and 2001?",
      options: {
        a: "It increased by 3 250",
        b: "It increased by 2 000",
        c: "It increased by 325 000",
        d: "It increased by 30",
        e: "It increased by 3 500"
      },
      correct: "a",
      explanation: "Dentistas 1990: 20 por 100 000 hab. × (10 000 000 / 100 000) = 20 × 100 = 2 000. Dentistas 2001: 50 por 100 000 hab. × (10 500 000 / 100 000) = 50 × 105 = 5 250. Aumento = 5 250 − 2 000 = 3 250."
    },
    {
      number: 13,
      type: "numerical",
      tableRef: "table_doctors",
      text: "For 2001, which of the following statements is correct?",
      options: {
        a: "There were 10 times more doctors in Italy than in Portugal",
        b: "There were twice as many doctors in Italy than in Portugal",
        c: "There were 348 000 more doctors in Italy than in Portugal",
        d: "There were 316 500 more doctors in Italy than in Portugal",
        e: "There were 5 times more doctors in Italy than in Portugal"
      },
      correct: "d",
      explanation: "Doctores en Italia 2001 = 600 por 100 000 × (58 000 000 / 100 000) = 600 × 580 = 348 000. Doctores en Portugal 2001 = 300 × 105 = 31 500. Diferencia = 348 000 − 31 500 = 316 500."
    },
    {
      number: 14,
      type: "numerical",
      tableRef: "table_doctors",
      text: "In Belgium in 1990, there were one third as many doctors as there were in the United Kingdom, and its population was 10 000 000. How many doctors per 100 000 inhabitants were there in Belgium in 1990?",
      options: {
        a: "960",
        b: "540",
        c: "360",
        d: "320",
        e: "800"
      },
      correct: "d",
      explanation: "Doctores en Reino Unido 1990 = 160 × (60 000 000 / 100 000) = 160 × 600 = 96 000. Doctores en Bélgica = 96 000 / 3 = 32 000. Proporción por 100 000 habitantes = 32 000 / (10 000 000 / 100 000) = 32 000 / 100 = 320."
    }
  ]
});
