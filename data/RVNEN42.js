window.TESTS = window.TESTS || [];

window.TESTS.push({
  id: "RVNEN42-N",
  title: "RVNEN42 · Numerical Reasoning — Instituto Europeo Practice Test (EN)",
  defaultTimer: 20,
  sections: [
    {
      title: "Socio-economic indicators of EU countries (2012)",
      instruction: "Questions 1–3 refer to the following table. You may use a basic calculator.",
      questionRange: [1, 3]
    },
    {
      title: "Financing for development cooperation",
      instruction: "Questions 4–6 refer to the following table. The Evolution 2013 row shows the % change vs. the previous year.",
      questionRange: [4, 6]
    },
    {
      title: "Part-time workers",
      instruction: "Questions 7–10 refer to the following table. The 'Workers' columns show part-time worker counts; the percentage columns show part-time workers as a share of the total workforce.",
      questionRange: [7, 10]
    }
  ],
  tables: {
    table_socioeconomic: {
      title: "Socio-economic indicators of EU countries (2012)",
      headers: ["Indicator", "Latvia", "Sweden", "Portugal", "Austria"],
      rows: [
        ["Cars", "1,289,500", "8,564,270", "6,468,328", "7,548,320"],
        ["Physicians", "35,850", "613,760", "498,300", "584,328"],
        ["Teachers", "20,683", "212,510", "189,720", "196,840"],
        ["Population (millions)", "2.12", "9.59", "10.60", "8.47"]
      ]
    },
    table_cooperation: {
      title: "Financing for development cooperation (millions of euros)",
      headers: ["Year", "Spain", "Italy", "France", "Denmark", "Germany"],
      rows: [
        ["2006", "7,250", "8,452", "14,587", "8,497", "15,425"],
        ["2008", "7,418", "8,342", "12,647", "9,236", "15,389"],
        ["2010", "6,624", "7,926", "11,984", "9,548", "15,628"],
        ["2012", "5,815", "7,468", "12,746", "9,743", "15,146"],
        ["Evolution 2013", "-6.14%", "-3.56%", "+1.44%", "+0.18%", "-3.14%"]
      ]
    },
    table_parttime: {
      title: "Part-time workers",
      headers: ["Group", "Workers 2005 (thousands)", "Workers 2010 (thousands)", "Workers 2012 (thousands)", "% of workers 2010", "% of workers 2012"],
      rows: [
        ["Eurozone – Men", "20,474", "25,388", "22,787", "22%", "27%"],
        ["Eurozone – Women", "36,397", "34,618", "40,516", "32%", "35%"],
        ["Eurozone – Total", "56,871", "60,006", "63,303", "27%", "30%"],
        ["EU-27 – Men", "31,231", "27,589", "25,903", "26%", "28%"],
        ["EU-27 – Women", "43,127", "49,625", "55,053", "34%", "36%"],
        ["EU-27 – Total", "74,358", "77,214", "80,956", "31%", "32%"]
      ]
    }
  },
  questions: [
    {
      number: 1,
      type: "numerical",
      tableRef: "table_socioeconomic",
      text: "The number of teachers in Latvia has increased by 7.5% since its accession to the EU in 2004. Since that year, the Latvian population has increased by 187,540 people. How much did the ratio of teachers per thousand inhabitants change between 2004 and 2012?",
      options: { a: "It has increased by 0.2.", b: "It has increased by 0.0002.", c: "It has decreased by 0.0002.", d: "It has decreased by 0.2.", e: "It has remained the same." },
      correct: "d",
      explanation: "2004 teachers = 20,683/1.075 = 19,240. 2004 population = 2,120,000−187,540 = 1,932,460. 2012 ratio = 20,683/2,120 = 9.75 per thousand. 2004 ratio = 19,240/1,932.46 = 9.95 per thousand. The ratio decreased by 9.95−9.75 = 0.20."
    },
    {
      number: 2,
      type: "numerical",
      tableRef: "table_socioeconomic",
      text: "The total number of cars in Austria has increased by 287,000 since 2010. In Portugal, the total number of cars decreased by 6% in the period from 2010 to 2012. By what percentage did the number of cars in Austria surpass that of Portugal in 2010?",
      options: { a: "5.52%", b: "13.86%", c: "18.99%", d: "19.42%", e: "28.40%" },
      correct: "a",
      explanation: "Austria 2010 = 7,548,320−287,000 = 7,261,320. Portugal 2010 = 6,468,328/0.94 = 6,881,200. Ratio = 7,261,320/6,881,200 = 105.52%, i.e. 5.52% higher."
    },
    {
      number: 3,
      type: "numerical",
      tableRef: "table_socioeconomic",
      text: "In 2013, the number of doctors per thousand inhabitants in Sweden increased by 6.25% compared to 2012, reaching 1.25 times that of Portugal in the same year. The Portuguese population grew by 130,000 people between 2012 and 2013. How many doctors less than in 2012 were there in Portugal in 2013?",
      options: { a: "16,750", b: "30,460", c: "85,500", d: "146,700", e: "232,700" },
      correct: "b",
      explanation: "Sweden 2012 ratio = 613,760/9,590 = 64/thousand. 2013 = 64×1.0625 = 68/thousand. Portugal 2013 ratio = 68/1.25 = 54.4/thousand. Portugal 2013 population = 8,470,000+130,000 = 8,600,000. Portugal 2013 doctors = 8,600×54.4 = 467,840. Difference vs 2012 (498,300) = 30,460."
    },
    {
      number: 4,
      type: "numerical",
      tableRef: "table_cooperation",
      text: "Denmark has allocated 1% of its total budget to development cooperation every year shown in the table. By what percentage does its budget for 2013 surpass its budget for 2006?",
      options: { a: "1.14%", b: "6.76%", c: "14.66%", d: "14.87%", e: "16.72%" },
      correct: "d",
      explanation: "2006 total budget = 8,497/0.01 = 849,700 million. 2013 cooperation = 9,743×1.0018 = 9,760.5374 million; 2013 total budget = 9,760.5374/0.01 = 976,053.74 million. Ratio = 976,053.74/849,700 = 114.87%, i.e. +14.87%."
    },
    {
      number: 5,
      type: "numerical",
      tableRef: "table_cooperation",
      text: "In 2010, Germany devoted 0.55% of its budget to development cooperation. Until 2012, that percentage grew annually by a fifth. How much was Germany's total budget in 2012?",
      options: { a: "1,912,373.73 million", b: "1,947,601.01 million", c: "1,967,012.98 million", d: "2,003,246.75 million", e: "2,294,848.48 million" },
      correct: "a",
      explanation: "2011 % = 0.55×6/5 = 0.66%. 2012 % = 0.66×6/5 = 0.792%. 2012 cooperation = 15,146 million = 0.792% of the budget, so total = 15,146/0.00792 = 1,912,373.73 million."
    },
    {
      number: 6,
      type: "numerical",
      tableRef: "table_cooperation",
      text: "In 2013, how much will the amount allocated to development cooperation in France exceed the amount allocated in Spain and Italy jointly?",
      options: { a: "269.46 million", b: "290.76 million", c: "544.73 million", d: "560.17 million", e: "The amount allocated by Spain and Italy will surpass that of France." },
      correct: "a",
      explanation: "France 2013 = 12,746×1.0144 = 12,929.54 million. Spain 2013 = 5,815×0.9386 = 5,457.95 million. Italy 2013 = 7,468×0.9644 = 7,202.13 million. Spain+Italy = 12,660.08 million. Difference = 12,929.54−12,660.08 = 269.46 million."
    },
    {
      number: 7,
      type: "numerical",
      tableRef: "table_parttime",
      text: "In the Eurozone, male unemployment in 2010 was 20%. How many men made up the male workforce (sum of the employed and the unemployed) of the Eurozone in 2010?",
      options: { a: "59.661 million", b: "111.707 million", c: "129.471 million", d: "133.644 million", e: "144.250 million" },
      correct: "e",
      explanation: "Part-time male workers 2010 = 25,388,000 = 22% of total male workers, so total male workers = 25,388,000/0.22 = 115,400,000. This is 80% (100−20% unemployment) of the male labour force: 115,400,000/0.8 = 144,250,000 = 144.25 million."
    },
    {
      number: 8,
      type: "numerical",
      tableRef: "table_parttime",
      text: "The Eurozone is composed of 17 countries. How many women workers were on average in 2012 in the EU countries that did not belong to the Eurozone?",
      options: { a: "1,529,250", b: "2,686,850", c: "3,716,500", d: "4,038,050", e: "5,023,370" },
      correct: "c",
      explanation: "Eurozone women workers 2012 = 40,516,000/0.35 = 115,760,000. EU-27 women workers 2012 = 55,053,000/0.36 = 152,925,000. Non-Eurozone EU-27 women = 152,925,000−115,760,000 = 37,165,000, across 27−17=10 countries: 37,165,000/10 = 3,716,500."
    },
    {
      number: 9,
      type: "numerical",
      tableRef: "table_parttime",
      text: "By how many percentage points did the increase of part-time workers in the Eurozone between 2005 and 2012 exceed that of the EU-27 countries not belonging to the Eurozone?",
      options: { a: "10.36", b: "10.73", c: "11.30", d: "11.89", e: "12.25" },
      correct: "a",
      explanation: "Eurozone total: 63,303/56,871 = +11.30%. Non-Eurozone EU-27 (total minus Eurozone): 2005=74,358−56,871=17,487; 2012=80,956−63,303=17,653; growth = 17,653/17,487 = +0.94%. Difference = 11.30−0.94 = 10.36 points."
    },
    {
      number: 10,
      type: "numerical",
      tableRef: "table_parttime",
      text: "What percentage of the total EU-27 workforce in 2012 belong to the Eurozone?",
      options: { a: "73.30%", b: "78.19%", c: "80.11%", d: "83.40%", e: "119.89%" },
      correct: "d",
      explanation: "Eurozone total workforce 2012 = 63,303,000/0.30 = 211,010,000. EU-27 total workforce 2012 = 80,956,000/0.32 = 252,987,500. Ratio = 211,010,000/252,987,500 = 83.40%."
    }
  ]
});
