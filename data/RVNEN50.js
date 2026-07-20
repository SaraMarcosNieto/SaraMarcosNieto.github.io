window.TESTS = window.TESTS || [];

window.TESTS.push({
  id: "RVNEN50-N",
  title: "RVNEN50 · Numerical Reasoning — Instituto Europeo Practice Test (EN)",
  defaultTimer: 20,
  sections: [
    {
      title: "Newly built dwellings",
      instruction: "Questions 1–3 refer to the following table. You may use a basic calculator.",
      questionRange: [1, 3]
    },
    {
      title: "Public officials",
      instruction: "Questions 4–6 refer to the following table (thousands of officials).",
      questionRange: [4, 6]
    },
    {
      title: "Foreigners from the EU",
      instruction: "Questions 7–10 refer to the following table.",
      questionRange: [7, 10]
    }
  ],
  tables: {
    table_dwellings: {
      title: "Newly built dwellings",
      headers: ["Country", "Dwellings 2000 (thousands)", "Dwellings 2006 (thousands)", "Dwellings 2012 (thousands)", "Total housing area built 2000 (thousand m²)"],
      rows: [
        ["Italy", "300", "800", "180", "36,000"],
        ["France", "350", "640", "225", "43,750"],
        ["Ireland", "80", "170", "38", "12,000"],
        ["Belgium", "140", "190", "125", "15,400"],
        ["Estonia", "25", "39", "32", "5,000"]
      ]
    },
    table_public_officials: {
      title: "Public officials (thousands)",
      headers: ["Level", "Germany 2000", "Germany 2010", "France 2000", "France 2010"],
      rows: [
        ["State", "6,120", "6,145", "11,900", "12,300"],
        ["Regional", "2,295", "2,205", "466", "454"],
        ["Local", "765", "742", "4,714", "5,842"],
        ["% over workforce", "18", "16", "28", "32"]
      ]
    },
    table_eu_foreigners: {
      title: "Foreigners from the EU",
      headers: ["Country", "Total (millions)", "Increase in last 5 years (%)", "% over total foreigners"],
      rows: [
        ["United States", "6.525", "16", "12"],
        ["Russia", "1.612", "4", "6"],
        ["China", "4.563", "25", "27"],
        ["Australia", "2.016", "21", "48"],
        ["Switzerland", "1.166", "6", "68"]
      ]
    }
  },
  questions: [
    {
      number: 1,
      type: "numerical",
      tableRef: "table_dwellings",
      text: "In the year 2000, what was the ratio between the average area per dwelling built in Estonia and the average area per dwelling built in Ireland?",
      options: { a: "1:2", b: "1:4", c: "2:1", d: "3:4", e: "4:3" },
      correct: "e",
      explanation: "Estonia average = 5,000/25 = 200 m². Ireland average = 12,000/80 = 150 m². Ratio 200:150 = 4:3."
    },
    {
      number: 2,
      type: "numerical",
      tableRef: "table_dwellings",
      text: "Between 2000 and 2006, the average area per dwelling built in France increased by 5%. In 2010, the average area per dwelling was the same as in 2006, but the total surface area built was 70% lower than in 2006. How many less new homes were built in 2010 than in 2000?",
      options: { a: "100,000", b: "116,666", c: "158,000", d: "250,000", e: "273,500" },
      correct: "c",
      explanation: "France 2000 average = 43,750/350 = 125 m². 2006 average = 125×1.05 = 131.25 m². 2006 total area = 640×131.25 = 84,000 thousand m². 2010 total area = 84,000×0.30 = 25,200 thousand m². 2010 dwellings = 25,200/131.25 = 192 thousand. Difference vs 2000 (350,000) = 158,000."
    },
    {
      number: 3,
      type: "numerical",
      tableRef: "table_dwellings",
      text: "Assuming that the average area per dwelling built did not change in any of the two countries between 2000 and 2012, by what percentage would the total constructed area of Italy exceed that of Belgium in 2012?",
      options: { a: "13.09%", b: "36.35%", c: "42.91%", d: "57.09%", e: "63.65%" },
      correct: "d",
      explanation: "Belgium average = 15,400/140 = 110 m²; 2012 area = 125×110 = 13,750 thousand m². Italy average = 36,000/300 = 120 m²; 2012 area = 180×120 = 21,600 thousand m². Ratio = 21,600/13,750 = 157.09%, i.e. exceeds by 57.09%."
    },
    {
      number: 4,
      type: "numerical",
      tableRef: "table_public_officials",
      text: "By how many people did Germany's workforce increase between 2000 and 2010?",
      options: { a: "1.02 million", b: "5.825 million", c: "6.313 million", d: "8.87 million", e: "11.365 million" },
      correct: "b",
      explanation: "Germany officials 2000 = 6,120+2,295+765 = 9,180 thousand = 18% of workforce → workforce = 51 million. 2010 officials = 6,145+2,205+742 = 9,092 thousand = 16% of workforce → workforce = 56.825 million. Increase = 56.825−51 = 5.825 million."
    },
    {
      number: 5,
      type: "numerical",
      tableRef: "table_public_officials",
      text: "By what percentage was the number of public officials in France in 2010 less than the total workforce in the same country in 2000?",
      options: { a: "7.56%", b: "30.48%", c: "32%", d: "68%", e: "69.52%" },
      correct: "e",
      explanation: "France officials 2010 = 12,300+454+5,842 = 18,596 thousand. France officials 2000 = 11,900+466+4,714 = 17,080 thousand = 28% of workforce → 2000 workforce = 61 million. Ratio = 18,596/61,000 = 30.48%, so 2010 officials are 69.52% less than the 2000 workforce."
    },
    {
      number: 6,
      type: "numerical",
      tableRef: "table_public_officials",
      text: "Germany's total population in 2010 was greater than that of France by 4%. The French total population that year was 32% greater than the total workforce of the country. What was the percentage of the total German workforce relative to its total population?",
      options: { a: "71.22%", b: "74.07%", c: "78.78%", d: "84%", e: "88.60%" },
      correct: "a",
      explanation: "France workforce 2010 = 18,596/0.32 = 58.1125 million. France population = 58.1125×1.32 = 76.7085 million. Germany population = 76.7085×1.04 = 79.77684 million. Germany workforce = 9,092/0.16 = 56.825 million. Ratio = 56.825/79.77684 = 71.22%."
    },
    {
      number: 7,
      type: "numerical",
      tableRef: "table_eu_foreigners",
      text: "By how many more people has the number of foreigners from the EU increased in Switzerland as opposed to in Russia over the last five years?",
      options: { a: "4,000", b: "20,000", c: "44,052", d: "384,000", e: "446,000" },
      correct: "a",
      explanation: "Switzerland: current=1,166,000, 5 years ago = 1,166,000/1.06 ≈ 1,100,000; increase = 66,000. Russia: current=1,612,000, 5 years ago = 1,612,000/1.04 ≈ 1,550,000; increase = 62,000. Difference = 66,000−62,000 = 4,000."
    },
    {
      number: 8,
      type: "numerical",
      tableRef: "table_eu_foreigners",
      text: "The foreign population in China has increased over the last five years by 1/7. What was the percentage of foreigners coming in from the EU five years ago in China relative to the total number of foreigners in the country?",
      options: { a: "23.14%", b: "24.68%", c: "26%", d: "28.57%", e: "30.85%" },
      correct: "b",
      explanation: "Total foreigners in China now = 4,563,000/0.27 = 16,900,000. Total foreigners 5 years ago = 16,900,000/(8/7) = 14,787,500. EU foreigners 5 years ago = 4,563,000/1.25 = 3,650,400. Percentage = 3,650,400/14,787,500 = 24.68%."
    },
    {
      number: 9,
      type: "numerical",
      tableRef: "table_eu_foreigners",
      text: "By what percentage is the total number of foreigners in Australia less than the number of foreigners from the EU in the USA five years ago?",
      options: { a: "22.75%", b: "25.33%", c: "33.92%", d: "66.08%", e: "74.66%" },
      correct: "b",
      explanation: "Australia total foreigners = 2,016,000/0.48 = 4,200,000. USA EU foreigners 5 years ago = 6,525,000/1.16 = 5,625,000. Ratio = 4,200,000/5,625,000 = 74.67%, so it is less by 25.33%."
    },
    {
      number: 10,
      type: "numerical",
      tableRef: "table_eu_foreigners",
      text: "Over the last five years, the number of foreigners from the EU in Switzerland has increased by the same number of people every year. If that rate doubles over the next four years, what percentage will the number of foreigners from the EU at the end of those four years be relative to nine years earlier?",
      options: { a: "86.50%", b: "96%", c: "115.60%", d: "160%", e: "It cannot be determined." },
      correct: "c",
      explanation: "5-year increase = 66,000, i.e. 13,200/year. Doubled rate = 26,400/year for 4 more years = +105,600. Total in 4 years = 1,166,000+105,600 = 1,271,600. Relative to the figure from 9 years ago (1,100,000): 1,271,600/1,100,000 = 115.60%."
    }
  ]
});
