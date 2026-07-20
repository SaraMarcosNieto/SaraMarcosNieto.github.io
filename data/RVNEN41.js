window.TESTS = window.TESTS || [];

window.TESTS.push({
  id: "RVNEN41-N",
  title: "RVNEN41 · Numerical Reasoning — Instituto Europeo Practice Test (EN)",
  defaultTimer: 20,
  sections: [
    {
      title: "Relevant data of European capitals (2012)",
      instruction: "Questions 1–4 refer to the following table. You may use a basic calculator.",
      questionRange: [1, 4]
    },
    {
      title: "Number of paediatricians and population",
      instruction: "Questions 5–7 refer to the following table.",
      questionRange: [5, 7]
    },
    {
      title: "Crime in 2012",
      instruction: "Questions 8–10 refer to the following table. Hidden crime is the percentage of unreported crimes relative to reported crimes.",
      questionRange: [8, 10]
    }
  ],
  tables: {
    table_capitals: {
      title: "Relevant data of European capitals (2012)",
      headers: ["City", "Population (millions)", "Area (km²)", "GDP per capita (€)", "% Immigrants"],
      rows: [
        ["Paris", "2.24", "1,054", "53,881", "12%"],
        ["London", "8.17", "1,572", "51,978", "9%"],
        ["Rome", "2.79", "1,285.30", "38,765", "17%"],
        ["Madrid", "3.23", "605.77", "40,007", "15%"],
        ["Berlin", "3.53", "891.85", "33,311", "11%"],
        ["Brussels", "1.12", "32.61", "45,607", "19%"]
      ]
    },
    table_paediatricians: {
      title: "Number of paediatricians (per thousand inhabitants) and population",
      headers: ["Country", "Paediatricians 2000", "Paediatricians 2010", "Population 2000 (millions)", "Population 2010 (millions)"],
      rows: [
        ["Finland", "30", "32", "5.19", "5.43"],
        ["Cyprus", "14", "15", "0.73", "0.88"],
        ["Estonia", "27", "25", "1.36", "1.28"],
        ["Hungary", "19", "23", "9.91", "9.89"],
        ["Denmark", "36", "38", "5.36", "5.61"]
      ]
    },
    table_crime: {
      title: "Crime in 2012",
      headers: ["Country", "Crimes reported (thousands)", "Population (millions)", "Estimated hidden crime (%)"],
      rows: [
        ["Germany", "6,054", "80.64", "28"],
        ["France", "3,521", "63.82", "31"],
        ["Belgium", "1,144", "11.16", "24"],
        ["Greece", "387", "10.75", "37"],
        ["Lithuania", "76", "2.95", "16"]
      ]
    }
  },
  questions: [
    {
      number: 1,
      type: "numerical",
      tableRef: "table_capitals",
      text: "Which of the following cities has a higher population density (inhabitants per square kilometre)?",
      options: { a: "Paris", b: "London", c: "Rome", d: "Madrid", e: "Berlin" },
      correct: "d",
      explanation: "London: 8,170,000/1,572 ≈ 5,197/km². Madrid: 3,230,000/605.77 ≈ 5,332/km². Berlin: 3,530,000/891.85 ≈ 3,958/km². Paris and Rome are ruled out by inspection (lower population, larger area than Madrid/Berlin). Madrid has the highest density."
    },
    {
      number: 2,
      type: "numerical",
      tableRef: "table_capitals",
      text: "In which of the following cities is there a greater number of immigrant population?",
      options: { a: "Paris", b: "Rome", c: "Madrid", d: "Berlin", e: "Brussels" },
      correct: "c",
      explanation: "Rome: 2.79×0.17 = 474,300. Madrid: 3.23×0.15 = 484,500. Berlin: 3.53×0.11 = 388,300. Brussels: 1.12×0.19 = 212,800. Paris is ruled out (lower population and lower immigrant % than Rome/Madrid). Madrid has the highest figure."
    },
    {
      number: 3,
      type: "numerical",
      tableRef: "table_capitals",
      text: "By what amount does the highest total GDP of these cities exceed the lowest GDP?",
      options: { a: "51,079.84 million", b: "252,886.98 million", c: "303,966.82 million", d: "373,580.42 million", e: "424,660.26 million" },
      correct: "d",
      explanation: "Highest: London = 51,978×8.17 = 424,660.26 million. Lowest, checking Rome/Berlin/Brussels: Rome=108,154.35M, Berlin=117,587.83M, Brussels=51,079.84M (lowest). Difference = 424,660.26−51,079.84 = 373,580.42 million."
    },
    {
      number: 4,
      type: "numerical",
      tableRef: "table_capitals",
      text: "By what percentage is the combined area of the three smaller cities smaller than the combined area of London and Paris?",
      options: { a: "28.39%", b: "41.72%", c: "58.27%", d: "71.60%", e: "78.39%" },
      correct: "b",
      explanation: "Three smallest (Brussels+Madrid+Berlin) = 32.61+605.77+891.85 = 1,530.23 km². London+Paris = 1,572+1,054 = 2,626 km². Ratio = 1,530.23/2,626 = 58.27%, so it is smaller by 100−58.27 = 41.72%."
    },
    {
      number: 5,
      type: "numerical",
      tableRef: "table_paediatricians",
      text: "In which country was the percentage increase in population greater between 2000 and 2010?",
      options: { a: "Finland", b: "Cyprus", c: "Estonia", d: "Hungary", e: "Denmark" },
      correct: "b",
      explanation: "Estonia and Hungary decreased, so they're ruled out. Finland: 5.43/5.19 ≈ +4.62%. Cyprus: 0.88/0.73 ≈ +20.54%. Denmark: 5.61/5.36 ≈ +4.66%. Cyprus has the greatest increase."
    },
    {
      number: 6,
      type: "numerical",
      tableRef: "table_paediatricians",
      text: "How many fewer paediatricians are there in 2000 than in 2010 in Estonia?",
      options: { a: "1,600", b: "2,000", c: "2,360", d: "3,080", e: "4,720" },
      correct: "e",
      explanation: "2000: 27,000/million × 1.36M = 36,720. 2010: 25,000/million × 1.28M = 32,000. Difference between the two figures = 36,720−32,000 = 4,720."
    },
    {
      number: 7,
      type: "numerical",
      tableRef: "table_paediatricians",
      text: "In the period from 2000 to 2010, by what percentage was the growth in the number of paediatricians in Denmark greater than in Finland?",
      options: { a: "8.36%", b: "10.68%", c: "11.96%", d: "16.36%", e: "The number of paediatricians has grown more in Finland than in Denmark." },
      correct: "c",
      explanation: "Denmark: 2000=36,000×5.36=192,960; 2010=38,000×5.61=213,180; growth=20,220. Finland: 2000=30,000×5.19=155,700; 2010=32,000×5.43=173,760; growth=18,060. Denmark's growth exceeds Finland's by (20,220−18,060)/18,060 = 11.96%."
    },
    {
      number: 8,
      type: "numerical",
      tableRef: "table_crime",
      text: "What was the highest ratio of reported crimes per inhabitant of all the countries in the table?",
      options: { a: "0.0257", b: "0.036", c: "0.075", d: "0.1025", e: "0.155" },
      correct: "d",
      explanation: "Only in Belgium do reported crimes exceed 10% of the population (1.144M vs 10% of 11.16M = 1.116M). Belgium ratio = 1.144/11.16 = 0.1025, the highest (Germany 0.075, France 0.055, Greece 0.036, Lithuania 0.026)."
    },
    {
      number: 9,
      type: "numerical",
      tableRef: "table_crime",
      text: "How many more hidden crimes have there been in Belgium than in Greece and Lithuania combined?",
      options: { a: "29,170", b: "119,210", c: "131,370", d: "143,530", e: "151,865" },
      correct: "b",
      explanation: "Belgium hidden = 1,144,000×0.24 = 274,560. Greece hidden = 387,000×0.37 = 143,190. Lithuania hidden = 76,000×0.16 = 12,160. Greece+Lithuania = 155,350. Difference = 274,560−155,350 = 119,210."
    },
    {
      number: 10,
      type: "numerical",
      tableRef: "table_crime",
      text: "In 2011, the number of crimes reported in France was 7.5% lower than in 2012, but the percentage of hidden crime was higher by 5%. How many concealed crimes were committed in France in 2011?",
      options: { a: "959,164", b: "964,590", c: "1,060,129", d: "1,066,126", e: "1,172,493" },
      correct: "e",
      explanation: "2011 reported = 3,521,000×0.925 = 3,256,925. 2011 hidden rate = 31+5 = 36%. Hidden crimes = 3,256,925×0.36 = 1,172,493."
    }
  ]
});
