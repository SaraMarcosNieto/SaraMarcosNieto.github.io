window.TESTS = window.TESTS || [];

window.TESTS.push({
  id: "RVNEN45-N",
  title: "RVNEN45 · Numerical Reasoning — Instituto Europeo Practice Test (EN)",
  defaultTimer: 20,
  sections: [
    {
      title: "Crime rate per 100,000 inhabitants (2013)",
      instruction: "Questions 1–3 refer to the following table. You may use a basic calculator.",
      questionRange: [1, 3]
    },
    {
      title: "Foreign tourists in Malta in 2012",
      instruction: "Questions 4–6 refer to the following table (thousands of tourists).",
      questionRange: [4, 6]
    },
    {
      title: "Percentage of GDP by sector",
      instruction: "Questions 7–10 refer to the following table.",
      questionRange: [7, 10]
    }
  ],
  tables: {
    table_crime_rate: {
      title: "Crime rate per 100,000 inhabitants (2013)",
      headers: ["Crime type", "United Kingdom", "France", "Poland", "Germany"],
      rows: [
        ["Homicides", "1.2", "1.1", "1.1", "0.8"],
        ["Robberies", "3.8", "2.95", "4.9", "3.6"],
        ["Sexual offences", "1.75", "1.5", "0.9", "1.1"],
        ["Drug trafficking", "4.35", "3.8", "2.25", "3.2"],
        ["Other", "8.7", "6.3", "7.3", "6.55"]
      ]
    },
    table_malta_tourists: {
      title: "Foreign tourists in Malta in 2012 (thousands)",
      headers: ["Age group", "Jan-Mar", "Apr-Jun", "Jul-Sep", "Oct-Dec", "TOTAL"],
      rows: [
        ["18-30 year olds", "7.35", "7.6", "9.1", "6.2", "30.25"],
        ["31-45 year olds", "5.8", "6.6", "7.4", "5.7", "25.5"],
        ["46-60 year olds", "3.6", "3.2", "3.8", "5.4", "16"],
        ["+ 60 year olds", "1.8", "2.75", "2.45", "3.9", "10.9"],
        ["% of women", "46%", "38%", "58%", "42%", "48%"]
      ]
    },
    table_gdp_sector: {
      title: "Percentage of GDP by sector",
      headers: ["Sector / area", "2011", "2012", "2013", "TOTAL 2013 I+D+i (millions)"],
      rows: [
        ["Health – Eurozone", "24%", "19%", "19.5%", ""],
        ["Health – EU-28", "22%", "21%", "19.5%", ""],
        ["Education – Eurozone", "23%", "20%", "21%", ""],
        ["Education – EU-28", "23%", "21%", "18%", ""],
        ["I+D+i – Eurozone", "12%", "10%", "10%", "46,123"],
        ["I+D+i – EU-28", "11%", "9%", "8%", "90,912"]
      ]
    }
  },
  questions: [
    {
      number: 1,
      type: "numerical",
      tableRef: "table_crime_rate",
      text: "The total number of homicides committed in Germany in 2013 was 690. How many more robberies than homicides occurred in Germany that same year?",
      options: { a: "1,811", b: "2,415", c: "2,587", d: "3,105", e: "3,795" },
      correct: "b",
      explanation: "Germany population = 690/(0.8 per 100,000) = 690/8(per million) = 86.25 million. Robberies = 86.25×36(per million) = 3,105. Difference = 3,105−690 = 2,415."
    },
    {
      number: 2,
      type: "numerical",
      tableRef: "table_crime_rate",
      text: "The population of France was 50% larger than that of Poland in 2013. How much higher in percentage terms was the number of robberies committed in Poland that year compared to those committed in France?",
      options: { a: "10.73%", b: "16.09%", c: "49.15%", d: "60.20%", e: "66.10%" },
      correct: "a",
      explanation: "Using Poland=10M, France=15M. Poland robberies = 49(per million)×10 = 490. France robberies = 29.5×15 = 442.5. Ratio = 490/442.5 = 110.73%, i.e. 10.73% higher."
    },
    {
      number: 3,
      type: "numerical",
      tableRef: "table_crime_rate",
      text: "In the United Kingdom, the total number of crimes of all types in 2013 was lower than in 2012 by 12%. The British population, however, fell by 4.5% in that same period. How many more crimes per 100,000 inhabitants were committed in the United Kingdom in 2012 than in 2013?",
      options: { a: "1.55", b: "1.68", c: "1.80", d: "3.59", e: "3.76" },
      correct: "b",
      explanation: "Using 2012 population=10M, 2013=9.55M. Total crime rate 2013 = 1.2+3.8+1.75+4.35+8.7=19.8/100,000=198/million; total 2013 crimes = 198×9.55=1,890.9. 2012 crimes = 1,890.9/0.88=2,148.75, i.e. 214.875/million=21.48/100,000. Difference = 21.48−19.8=1.68."
    },
    {
      number: 4,
      type: "numerical",
      tableRef: "table_malta_tourists",
      text: "Among the foreign men who visited Malta between July and September, 2/3 were between 18 and 30 years old. How many men over 30 visited the country in that same period?",
      options: { a: "6,370", b: "4,778", c: "3,185", d: "2,190", e: "1,301" },
      correct: "c",
      explanation: "Jul-Sep total = 9.1+7.4+3.8+2.45 = 22.75 thousand. Men (42%) = 22.75×0.42 = 9.555 thousand = 9,555. Men over 30 (1/3) = 9,555/3 = 3,185."
    },
    {
      number: 5,
      type: "numerical",
      tableRef: "table_malta_tourists",
      text: "By what percentage was the number of female tourists in the three summer months (July, August and September) higher than that of men in the winter months (January, February and March)?",
      options: { a: "11.74%", b: "17.39%", c: "31.72%", d: "54.63%", e: "85.18%" },
      correct: "c",
      explanation: "Summer total = 22.75 thousand, women (58%) = 13.195 thousand. Winter total = 7.35+5.8+3.6+1.8=18.55 thousand, men (54%) = 10.017 thousand. Ratio = 13.195/10.017 = 131.72%, i.e. 31.72% higher."
    },
    {
      number: 6,
      type: "numerical",
      tableRef: "table_malta_tourists",
      text: "In 2013, the total number of foreign tourists in Malta throughout the year was 4% higher than in 2012, but the number of women fell by 12,800. What was the percentage of male tourists relative to the total in 2013?",
      options: { a: "30.51%", b: "38.20%", c: "61.80%", d: "67%", e: "68.73%" },
      correct: "e",
      explanation: "2012 total = 30.25+25.5+16+10.9 = 82.65 thousand; women (48%) = 39,672. 2013 total = 82,650×1.04 = 85,956. 2013 women = 39,672−12,800 = 26,872. 2013 men = 85,956−26,872 = 59,084, i.e. 59,084/85,956 = 68.73%."
    },
    {
      number: 7,
      type: "numerical",
      tableRef: "table_gdp_sector",
      text: "By what amount did the share of the EU-28 GDP not spent on health and education exceed the total GDP of the Eurozone in 2013?",
      options: { a: "47,852", b: "135,783", c: "249,020", d: "461,230", e: "540,984" },
      correct: "c",
      explanation: "Eurozone GDP 2013 = 46,123/0.1 = 461,230 million. EU-28 GDP 2013 = 90,912/0.08 = 1,136,400 million. EU-28 health+education 2013 = 19.5+18 = 37.5%, so the rest = 62.5% = 1,136,400×0.625 = 710,250 million. Difference = 710,250−461,230 = 249,020 million."
    },
    {
      number: 8,
      type: "numerical",
      tableRef: "table_gdp_sector",
      text: "Between 2011 and 2012, the total GDP of the Eurozone increased by 0.5%, and between 2012 and 2013, it increased by 2%. What was the amount allocated to healthcare in the Eurozone in 2011?",
      options: { a: "87,737.63 million", b: "107,984.77 million", c: "113,473.64 million", d: "187,463.57 million", e: "197,002.86 million" },
      correct: "b",
      explanation: "Eurozone GDP 2013 = 461,230 million. 2012 GDP = 461,230/1.02 = 452,186.27 million. 2011 GDP = 452,186.27/1.005 = 449,936.58 million. 2011 health (24%) = 449,936.58×0.24 = 107,984.77 million."
    },
    {
      number: 9,
      type: "numerical",
      tableRef: "table_gdp_sector",
      text: "The proportion between the total population of the EU-28 and that of the Eurozone in 2013 was 3:2. What percentage of the GDP per capita of the EU-28 reached the GDP per capita of the Eurozone in that same year?",
      options: { a: "27.05%", b: "36.95%", c: "40.58%", d: "60.88%", e: "64.25%" },
      correct: "d",
      explanation: "Eurozone GDP = 461,230 million; EU-28 GDP = 1,136,400 million. Using EU-28 pop=3M, Eurozone pop=2M: Eurozone per capita = 461,230/2 = 230,615; EU-28 per capita = 1,136,400/3 = 378,800. Ratio = 230,615/378,800 = 60.88%."
    },
    {
      number: 10,
      type: "numerical",
      tableRef: "table_gdp_sector",
      text: "By what percentage must the spending on education of the EU-28 increase compared to 2013 to reach the same amount that was assigned to that sector in 2011 taking into account that the total GDP of the area increased by 2.5% between 2011 and 2013?",
      options: { a: "15.60%", b: "19.78%", c: "24.66%", d: "30.97%", e: "47.84%" },
      correct: "c",
      explanation: "EU-28 GDP 2013 = 1,136,400 million. EU-28 GDP 2011 = 1,136,400/1.025 = 1,108,682.92 million. 2011 education (23%) = 254,997.07 million. 2013 education (18% of 1,136,400) = 204,552 million. Required increase = 254,997.07−204,552 = 50,445.07, i.e. 50,445.07/204,552 = 24.66%."
    }
  ]
});
