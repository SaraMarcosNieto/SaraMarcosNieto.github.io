window.TESTS = window.TESTS || [];

window.TESTS.push({
  id: "RVNEN37-N",
  title: "RVNEN37 · Numerical Reasoning — Instituto Europeo Practice Test (EN)",
  defaultTimer: 20,
  sections: [
    {
      title: "Traffic accidents in the EU",
      instruction: "Questions 1–3 refer to the following table. You may use a basic calculator.",
      questionRange: [1, 3]
    },
    {
      title: "Book sales by country in 2009",
      instruction: "Questions 4–6 refer to the following table.",
      questionRange: [4, 6]
    },
    {
      title: "Unemployed in Slovenia",
      instruction: "Questions 7–10 refer to the following table.",
      questionRange: [7, 10]
    }
  ],
  tables: {
    table_traffic_accidents: {
      title: "Traffic accidents in the EU",
      headers: ["Country", "Speed 2001", "Speed 2010", "Alcohol 2001", "Alcohol 2010", "Other causes 2001", "Other causes 2010"],
      rows: [
        ["France", "580,200", "493,170", "504,896", "527,356", "349,625", "385,425"],
        ["Italy", "324,985", "369,854", "589,387", "668,268", "253,936", "287,648"],
        ["Germany", "639,412", "645,798", "804,536", "728,495", "526,432", "346,581"],
        ["Spain", "365,434", "332,478", "832,560", "923,458", "189,606", "218,659"],
        ["Austria", "185,244", "196,608", "256,741", "268,314", "253,468", "203,964"]
      ]
    },
    table_book_sales: {
      title: "Book sales by country in 2009 (% of total)",
      headers: ["Category", "United Kingdom", "France", "Hungary", "Portugal"],
      rows: [
        ["Novel", "50%", "48%", "14%", "24%"],
        ["Essay", "18%", "14%", "60%", "23%"],
        ["Children", "13%", "21%", "15%", "18%"],
        ["Rest", "19%", "17%", "11%", "35%"]
      ]
    },
    table_unemployed_slovenia: {
      title: "Unemployed in Slovenia",
      headers: ["Year", "Men", "Women", "Under 35", "Over 35", "With higher education", "Without higher education"],
      rows: [
        ["2007", "215,683", "117,602", "154,268", "179,017", "92,645", "240,640"],
        ["2008", "208,625", "105,795", "127,364", "187,056", "82,512", "231,901"],
        ["2009", "212,688", "114,832", "154,268", "173,252", "103,140", "224,380"]
      ]
    }
  },
  questions: [
    {
      number: 1,
      type: "numerical",
      tableRef: "table_traffic_accidents",
      text: "Of all the traffic accidents in Spain in 2001, what percentage was due to alcohol consumption?",
      options: { a: "51.36%", b: "60%", c: "66.66%", d: "90.15%", e: "166.66%" },
      correct: "b",
      explanation: "Total accidents in Spain 2001 = 365,434+832,560+189,606 = 1,387,600. Alcohol share = 832,560/1,387,600 = 60%."
    },
    {
      number: 2,
      type: "numerical",
      tableRef: "table_traffic_accidents",
      text: "By what percentage did the number of accidents due to speeding decrease in France between 2001 and 2010?",
      options: { a: "12.97%", b: "15%", c: "17.64%", d: "66.66%", e: "85%" },
      correct: "b",
      explanation: "Decrease = 580,200−493,170 = 87,030. As a percentage of 2001: 87,030/580,200 = 15%."
    },
    {
      number: 3,
      type: "numerical",
      tableRef: "table_traffic_accidents",
      text: "In which country was there a higher percentage of accidents due to alcohol compared to the total in 2010?",
      options: { a: "France", b: "Italy", c: "Germany", d: "Spain", e: "Austria" },
      correct: "d",
      explanation: "Only in Italy and Spain do alcohol-related accidents exceed the sum of the other causes. Comparing the two: Italy 668,268/657,502 ≈ 1.02; Spain 923,458/551,137 ≈ 1.68. Spain has the highest percentage."
    },
    {
      number: 4,
      type: "numerical",
      tableRef: "table_book_sales",
      text: "The population of Hungary was 8.57 million people in 2009, of whom 82% bought a book on average. Women purchased two thirds of the essay books sold in Hungary. How many essay books men bought?",
      options: { a: "702,740", b: "1,045,121", c: "1,405,480", d: "2,090,243", e: "2,810,960" },
      correct: "c",
      explanation: "Book buyers = 8,570,000×0.82 = 7,027,400. Essays = 7,027,400×0.60 = 4,216,440. Men bought the remaining third: 4,216,440/3 = 1,405,480."
    },
    {
      number: 5,
      type: "numerical",
      tableRef: "table_book_sales",
      text: "Seven and a half times more books have been sold in France than in Portugal. What percentage corresponds to the novels sold in Portugal relative to the novels sold in France?",
      options: { a: "1.5%", b: "2.4%", c: "3.33%", d: "4.8%", e: "6.66%" },
      correct: "e",
      explanation: "Using Portugal = 1 million books, France = 7.5 million. Novels in France = 7.5×0.48 = 3.6 million. Novels in Portugal = 1×0.24 = 0.24 million. Ratio = 0.24/3.6 = 6.66%."
    },
    {
      number: 6,
      type: "numerical",
      tableRef: "table_book_sales",
      text: "A total of 169.26 million books were sold in the United Kingdom, and the number of novels sold in that country is five times greater than the number of essay books sold in Portugal. If the number of essay books sold in Portugal is equal to 62% of the total population of that country, how many inhabitants does Portugal have?",
      options: { a: "2.51 million", b: "6.27 million", c: "10.49 million", d: "26.23 million", e: "27.3 million" },
      correct: "e",
      explanation: "UK novels = 169.26×0.5 = 84.63 million. Portugal essays = 84.63/5 = 16.926 million. Portugal population = 16.926/0.62 = 27.3 million."
    },
    {
      number: 7,
      type: "numerical",
      tableRef: "table_unemployed_slovenia",
      text: "20% of unemployed Slovenians with higher education in 2007 were women. How many men without higher education were unemployed that year?",
      options: { a: "116,610", b: "129,466", c: "136,131", d: "141,567", e: "160,096" },
      correct: "d",
      explanation: "Women with higher education = 92,645×0.2 = 18,529. Women without higher education = 117,602−18,529 = 99,073. Men without higher education = 240,640−99,073 = 141,567."
    },
    {
      number: 8,
      type: "numerical",
      tableRef: "table_unemployed_slovenia",
      text: "What percentage of unemployed under the age of 35 were men in 2008 if the number of unemployed women over the age of 35 was 78,264?",
      options: { a: "37.51%", b: "47.85%", c: "53.33%", d: "78.38%", e: "85.41%" },
      correct: "d",
      explanation: "Men over 35 = 187,056−78,264 = 108,792. Men under 35 = 208,625−108,792 = 99,833. Percentage of under-35 unemployed who are men: 99,833/127,364 = 78.38%."
    },
    {
      number: 9,
      type: "numerical",
      tableRef: "table_unemployed_slovenia",
      text: "By what percentage did the number of unemployed with higher education increase between 2008 and 2011 if the percentage increase in that segment between 2009 and 2011 was a fifth of the percentage increase between 2008 and 2009?",
      options: { a: "25%", b: "30%", c: "31.25%", d: "66.5%", e: "125%" },
      correct: "c",
      explanation: "2008→2009 increase: 103,140/82,512 = 125%, i.e. +25%. 2009→2011 increase = 25/5 = 5%: 103,140×1.05 = 108,297. Total 2008→2011: 108,297/82,512 = 131.25%, i.e. +31.25%."
    },
    {
      number: 10,
      type: "numerical",
      tableRef: "table_unemployed_slovenia",
      text: "The number of unemployed women without higher education in 2008 was 102,644, and it decreased by one twelfth in 2009. By what amount did the number of unemployed men without higher education change in that same period?",
      options: { a: "It increased by 1,033.", b: "It increased by 7,521.", c: "It decreased by 5,655.", d: "It decreased by 11,253.", e: "It stayed the same." },
      correct: "a",
      explanation: "Women without higher education 2009 = 102,644×11/12 = 94,090. Men 2008 = 231,901−102,644 = 129,257. Men 2009 = 224,380−94,090 = 130,290. Change = 130,290−129,257 = +1,033."
    }
  ]
});
