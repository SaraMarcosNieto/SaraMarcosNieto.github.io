window.TESTS = window.TESTS || [];

window.TESTS.push({
  id: "RVNEN38-N",
  title: "RVNEN38 · Numerical Reasoning — Instituto Europeo Practice Test (EN)",
  defaultTimer: 20,
  sections: [
    {
      title: "Magazine sales in the EU",
      instruction: "Questions 1–2 refer to the following table. You may use a basic calculator.",
      questionRange: [1, 2]
    },
    {
      title: "Infant mortality in 2012",
      instruction: "Questions 3–5 refer to the following table.",
      questionRange: [3, 5]
    },
    {
      title: "Concerts celebrated in 2012",
      instruction: "Questions 6–8 refer to the following table.",
      questionRange: [6, 8]
    },
    {
      title: "Employment creation by sector in Denmark (2011)",
      instruction: "Questions 9–10 refer to the following table.",
      questionRange: [9, 10]
    }
  ],
  tables: {
    table_magazines: {
      title: "Magazine sales in the EU (millions of copies)",
      headers: ["Country", "Information 2010", "Information 2012", "Sports 2010", "Sports 2012", "Cultural 2010", "Cultural 2012"],
      rows: [
        ["Germany", "8.34", "8.76", "6.24", "7.42", "7.34", "8.1"],
        ["Italy", "3.42", "3.12", "4.75", "4.92", "2.13", "2.24"],
        ["United Kingdom", "7.26", "6.83", "5.29", "4.63", "5.87", "5.63"],
        ["France", "4.61", "4.82", "2.64", "2.18", "2.45", "2.3"],
        ["Spain", "2.22", "2.58", "2.1", "2.31", "1.36", "0.61"]
      ]
    },
    table_infant_mortality: {
      title: "Infant mortality in 2012 (per thousand children under 5)",
      headers: ["Cause", "Africa", "Asia", "America", "Europe"],
      rows: [
        ["Congenital malformation", "1.8", "2.7", "2.8", "3.1"],
        ["Contagious disease", "76.6", "15.5", "25", "0.7"],
        ["Malnutrition", "96.6", "25.8", "9.2", "0.2"],
        ["TOTAL", "175", "44", "37", "6"]
      ]
    },
    table_concerts: {
      title: "Concerts celebrated in 2012",
      headers: ["Theatre", "Jazz", "Rock", "Classic", "Disco", "Folk", "Proceeds (hundreds of euros)"],
      rows: [
        ["Theatre A", "21", "40", "6", "48", "17", "23,760"],
        ["Theatre B", "32", "15", "9", "11", "22", "16,800"],
        ["Theatre C", "15", "68", "2", "16", "25", "30,618"],
        ["Theatre D", "28", "34", "5", "18", "14", "35,640"]
      ]
    },
    table_denmark_employment: {
      title: "Employment creation by sector in Denmark (2011)",
      headers: ["Sector", "Men", "Women", "18-25", "26-45", "46-65", "Part time", "Full time"],
      rows: [
        ["Agriculture", "1,905", "635", "847", "1,151", "542", "381", "2,159"],
        ["Industry", "8,890", "3,810", "6,675", "4,356", "1,669", "1,270", "11,430"],
        ["Services", "12,573", "10,287", "7,529", "12,266", "3,065", "8,001", "14,859"],
        ["Total working population (thousands)", "1,603.25", "1,311.75", "581.84", "1,357.5", "975.66", "233.2", "2,681.8"]
      ]
    }
  },
  questions: [
    {
      number: 1,
      type: "numerical",
      tableRef: "table_magazines",
      text: "A total of 7.2 million magazines of all kinds were sold in Spain in 2012, which is an eighth more than the number sold in 2010. What percentage of the total number of magazines sold in 2010 do magazines of a different type from the three kinds shown in the table above represent?",
      options: { a: "8.75%", b: "10%", c: "11.25%", d: "13.75%", e: "21.11%" },
      correct: "c",
      explanation: "2010 total = 7.2/(9/8) = 6.4 million. Sum of the three listed categories in 2010 = 2.22+2.1+1.36 = 5.68 million. Other magazines = 6.4−5.68 = 0.72 million, i.e. 0.72/6.4 = 11.25%."
    },
    {
      number: 2,
      type: "numerical",
      tableRef: "table_magazines",
      text: "In France, 500,000 more copies of cultural magazines were sold in 2013 than in 2012. By what percentage would the number of cultural magazines sold in Italy in 2013 with respect to the ones sold the year before have to increase in order to surpass the total number of cultural magazines sold in France?",
      options: { a: "A bit over 18%", b: "A bit over 21%", c: "A bit over 24%", d: "A bit over 25%", e: "A bit over 26%" },
      correct: "d",
      explanation: "France 2013 = 2.3+0.5 = 2.8 million. Italy would need to grow from 2.24 to 2.8: (2.8−2.24)/2.24 = 25%. To surpass France, it needs to be a bit over 25%."
    },
    {
      number: 3,
      type: "numerical",
      tableRef: "table_infant_mortality",
      text: "The total African population in 2012 was 1,033 million people, of whom 14% were under 5 years of age. Among the under 5 year olds, the proportion of boys to girls was 2:3, but girls amounted to 65% of the total mortality cases. What percentage of the total number of girls under 5 died in Africa in 2012?",
      options: { a: "11.37%", b: "13.10%", c: "18.95%", d: "19.66%", e: "28.43%" },
      correct: "c",
      explanation: "Under 5 population = 1,033×0.14 = 144.62 million. Girls (3/5) = 86.772 million. Total deaths = 144.62×175,000 (per million) = 25,308,500. Girls' deaths (65%) = 16,450,525. Share of girls under 5: 16,450,525/86,772,000 = 18.95%."
    },
    {
      number: 4,
      type: "numerical",
      tableRef: "table_infant_mortality",
      text: "The under 5 population in America was 3.5 times that of Europe in 2012. What percentage were the under 5 year olds who died in Europe with respect to those who died in America?",
      options: { a: "4.63%", b: "4.85%", c: "5.67%", d: "5.83%", e: "9.99%" },
      correct: "a",
      explanation: "Using Europe=10 million, America=35 million. Europe deaths = 10×6,000(per million) = 60,000. America deaths = 35×37,000 = 1,295,000. Ratio: 60,000/1,295,000 = 4.63%."
    },
    {
      number: 5,
      type: "numerical",
      tableRef: "table_infant_mortality",
      text: "The total number of under 5 year olds who died of malnutrition in Asia decreased by one fourth between 2010 and 2012, while the total population of that age group was 30% less in 2010 than in 2012. What was the mortality rate due to malnutrition in Asia in 2012 per thousand under 5 year olds?",
      options: { a: "19.8 per thousand", b: "26.4 per thousand", c: "27.6 per thousand", d: "36.8 per thousand", e: "49.1 per thousand" },
      correct: "e",
      explanation: "Using 100 million under-5 population for 2012: deaths = 100×25,800(per million) = 2,580,000. This is 3/4 of the 2010 figure: 2010 deaths = 2,580,000/0.75 = 3,440,000. 2010 population = 70 million (70% of 2012). 2010 rate = 3,440,000/70 ≈ 49,142.85 per million ≈ 49.1 per thousand."
    },
    {
      number: 6,
      type: "numerical",
      tableRef: "table_concerts",
      text: "The concert ticket price in Theatre A was 20 euros, while in Theatre C it was 12.5% higher. How many more attendees per concert were there in Theatre C than in Theatre A?",
      options: { a: "150", b: "180", c: "250", d: "330", e: "510" },
      correct: "b",
      explanation: "Theatre A: 132 concerts, 2,376,000€ total → 18,000€/concert → 900 attendees/concert (at €20). Theatre C: 126 concerts, 3,061,800€ total → 24,300€/concert; ticket price = 20×1.125 = 22.5€ → 1,080 attendees/concert. Difference = 1,080−900 = 180."
    },
    {
      number: 7,
      type: "numerical",
      tableRef: "table_concerts",
      text: "Theatre B concert tickets were priced at EUR 25.00. 60% of the total proceeds of Theatre B were collected from rock and jazz concerts. What was the average number of spectators in the concerts of the rest of musical styles in that Theatre?",
      options: { a: "330", b: "480", c: "640", d: "880", e: "1,280" },
      correct: "c",
      explanation: "Theatre B proceeds = 1,680,000€; the other styles (classic, disco, folk) = 40% = 672,000€, i.e. 26,880 tickets at €25. Those styles total 9+11+22 = 42 concerts, so average attendance = 26,880/42 = 640."
    },
    {
      number: 8,
      type: "numerical",
      tableRef: "table_concerts",
      text: "By what approximate percentage would the number of concerts in Theatre D have to increase to maintain its total proceeds in 2013 if the average ticket price were raised from EUR 20 to EUR 22 and the average number of attendees were reduced by one fifth relative to the 2012 data?",
      options: { a: "10%", b: "11%", c: "14%", d: "17%", e: "25%" },
      correct: "c",
      explanation: "Theatre D: 99 concerts, 3,564,000€, so 36,000€/concert → 1,800 attendees/concert. New attendance = 1,800×0.8 = 1,440; new proceeds/concert = 1,440×22 = 31,680€. Concerts needed = 3,564,000/31,680 ≈ 113. Increase = (113−99)/99 ≈ 14%."
    },
    {
      number: 9,
      type: "numerical",
      tableRef: "table_denmark_employment",
      text: "What percentage did the jobs created in the age group from 26 to 45 years of age represent relative to the total Danish working population?",
      options: { a: "0.29%", b: "0.6%", c: "2.58%", d: "3.05%", e: "4.69%" },
      correct: "b",
      explanation: "Jobs 26-45 = 1,151+4,356+12,266 = 17,773. Total working population = 1,603,250+1,311,750 = 2,915,000. Percentage = 17,773/2,915,000 = 0.6%."
    },
    {
      number: 10,
      type: "numerical",
      tableRef: "table_denmark_employment",
      text: "60% of the working population between 26 and 45 years of age are men. Among occupied women of that age, a tenth has a part-time job. What percentage do these women represent relative to the total number of women employed at the national level?",
      options: { a: "4.13%", b: "5.23%", c: "6.20%", d: "7.19%", e: "11.08%" },
      correct: "a",
      explanation: "Women 26-45 = 1,357,500×0.4 = 543,000. Part-time among them = 543,000/10 = 54,300. National female employment = 1,311,750. Percentage = 54,300/1,311,750 = 4.13%."
    }
  ]
});
