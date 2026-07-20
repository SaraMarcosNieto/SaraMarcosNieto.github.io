window.TESTS = window.TESTS || [];

window.TESTS.push({
  id: "RVNEN44-N",
  title: "RVNEN44 · Numerical Reasoning — Instituto Europeo Practice Test (EN)",
  defaultTimer: 20,
  sections: [
    {
      title: "Vehicles over 10 years old (2012)",
      instruction: "Questions 1–3 refer to the following table. You may use a basic calculator.",
      questionRange: [1, 3]
    },
    {
      title: "Technology start-ups",
      instruction: "Questions 4–6 refer to the following table.",
      questionRange: [4, 6]
    },
    {
      title: "New university graduates in science",
      instruction: "Questions 7–10 refer to the following table. The last column shows the percentage of science graduates relative to the total number of graduates in all fields (2012).",
      questionRange: [7, 10]
    }
  ],
  tables: {
    table_old_vehicles: {
      title: "Vehicles over 10 years old (2012)",
      headers: ["Type", "Italy", "Spain", "France", "Poland"],
      rows: [
        ["Cars", "3,633,800", "2,198,455", "3,139,400", "1,649,500"],
        ["Vans", "236,300", "321,600", "301,620", "155,760"],
        ["Trucks", "157,500", "214,400", "201,080", "103,840"],
        ["Rest", "144,400", "49,300", "68,000", "42,900"]
      ]
    },
    table_tech_startups: {
      title: "Technology start-ups",
      headers: ["Country", "2009", "2010", "2011", "2012", "2013"],
      rows: [
        ["Sweden", "145", "164", "113", "102", "87"],
        ["France", "284", "212", "158", "187", "139"],
        ["Germany", "414", "364", "452", "397", "362"],
        ["United Kingdom", "387", "346", "312", "368", "345"],
        ["EU-28", "3,845", "4,344", "4,165", "4,272", "4,564"]
      ]
    },
    table_science_graduates: {
      title: "New university graduates in science (thousands)",
      headers: ["Region / degree", "2011", "2012", "2013", "% of total (2012)"],
      rows: [
        ["USA – Graduate", "6,359", "6,587", "5,863", "32%"],
        ["USA – Doctorate", "2,971", "2,646", "2,519", "48%"],
        ["China – Graduate", "8,865", "8,725", "8,472", "16%"],
        ["China – Doctorate", "3,117", "2,630", "2,199", "20%"],
        ["EU-28 – Graduate", "2,886", "2,760", "2,624", "24%"],
        ["EU-28 – Doctorate", "1,046", "962", "973", "35%"]
      ]
    }
  },
  questions: [
    {
      number: 1,
      type: "numerical",
      tableRef: "table_old_vehicles",
      text: "In which country is there a greater percentage difference between the number of vans over 10 years old and the rest of the vehicles (excluding cars, vans and trucks) over 10 years old?",
      options: { a: "Italy", b: "Spain", c: "France", d: "Poland", e: "France and Poland" },
      correct: "b",
      explanation: "Vans/Rest ratio: Italy 236,300/144,400=163.64% (diff 63.64%); Spain 321,600/49,300=652.33% (diff 552.33%); France 301,620/68,000=443.55% (diff 343.55%); Poland 155,760/42,900=362.93% (diff 262.93%). Spain has the largest difference."
    },
    {
      number: 2,
      type: "numerical",
      tableRef: "table_old_vehicles",
      text: "The number of cars over 10 years of age in Spain has grown by 15% since 2000. In 2012, cars over 10 years old accounted for 10% of total registered cars, of which there are 350,000 more than in 2000. What percentage of the total number of cars registered in 2000 were cars over 10 years old?",
      options: { a: "5.22%", b: "7.55%", c: "8.83%", d: "11.68%", e: "13.19%" },
      correct: "c",
      explanation: "Old cars 2000 = 2,198,455/1.15 = 1,911,700. Total registered 2012 = 2,198,455/0.1 = 21,984,550. Total registered 2000 = 21,984,550−350,000 = 21,634,550. Share 2000 = 1,911,700/21,634,550 = 8.83%."
    },
    {
      number: 3,
      type: "numerical",
      tableRef: "table_old_vehicles",
      text: "In Poland, the total number of vehicles of all types over 10 years old is one eighth of the total number of vehicles registered. Cars represent 70% of the total number of vehicles registered. How many cars under 10 years old are registered in Poland?",
      options: { a: "7,587,700", b: "8,600,964", c: "9,281,700", d: "10,094,285", e: "14,461,349" },
      correct: "c",
      explanation: "Total old vehicles Poland = 1,649,500+155,760+103,840+42,900 = 1,952,000. Total registered = 1,952,000×8 = 15,616,000. Total cars = 15,616,000×0.7 = 10,931,200. Cars under 10 years = 10,931,200−1,649,500 = 9,281,700."
    },
    {
      number: 4,
      type: "numerical",
      tableRef: "table_tech_startups",
      text: "What was the proportion of technology companies created in the four countries mentioned with respect to those created in the rest of the EU-28 in 2010?",
      options: { a: "1:3", b: "1:4", c: "2:3", d: "3:1", e: "4:1" },
      correct: "a",
      explanation: "Four countries 2010 = 164+212+364+346 = 1,086. Rest of EU-28 = 4,344−1,086 = 3,258. Ratio 1,086:3,258 = 1:3."
    },
    {
      number: 5,
      type: "numerical",
      tableRef: "table_tech_startups",
      text: "In which country was the percentage reduction in the creation of technology companies greatest between 2009 and 2013?",
      options: { a: "Sweden", b: "France", c: "Germany", d: "United Kingdom", e: "Sweden and France" },
      correct: "b",
      explanation: "Reductions: Sweden 87/145=60% → 40% reduction; France 139/284=48.94% → 51.06% reduction; Germany 362/414=87.43% → 12.57% reduction; UK 345/387=89.14% → 10.86% reduction. France has the largest reduction."
    },
    {
      number: 6,
      type: "numerical",
      tableRef: "table_tech_startups",
      text: "In 2012, an eighth of the technology start-ups in the EU-28 sprang up in Portugal. The number of technological companies created in that country was 1.5 times that of 2011. What percentage corresponds to technology start-ups created in Portugal in 2011 relative to the sum of those created in the four countries present in the table?",
      options: { a: "8.54%", b: "11.37%", c: "32.78%", d: "34.39%", e: "77.39%" },
      correct: "d",
      explanation: "Portugal 2012 = 4,272/8 = 534. Portugal 2011 = 534/1.5 = 356. Sum of four countries 2011 = 113+158+452+312 = 1,035. Percentage = 356/1,035 = 34.39%."
    },
    {
      number: 7,
      type: "numerical",
      tableRef: "table_science_graduates",
      text: "In 2013, the total number of PhDs in the United States increased by 8% compared to 2012. How many percentage points did the percentage of PhDs in science vary with respect to the total between 2012 and 2013?",
      options: { a: "It increased approximately two percentage points.", b: "It decreased approximately two percentage points.", c: "It increased approximately six percentage points.", d: "It decreased approximately six percentage points.", e: "It stayed the same." },
      correct: "d",
      explanation: "2012 total PhDs = 2,646,000/0.48 = 5,512,500. 2013 total PhDs = 5,512,500×1.08 = 5,953,500. 2013 science share = 2,519,000/5,953,500 = 42.31%. Change vs 48% = a decrease of ≈5.69, close to six points."
    },
    {
      number: 8,
      type: "numerical",
      tableRef: "table_science_graduates",
      text: "In 2012, what was the percentage of the total number of doctorates in science in the EU-28 relative to the total number of graduates in all subjects in the same geographical area?",
      options: { a: "8.36%", b: "17.42%", c: "28.18%", d: "34.85%", e: "45.71%" },
      correct: "a",
      explanation: "EU-28 2012 total graduates = 2,760,000/0.24 = 11,500,000. Science doctorates 2012 = 962,000. Percentage = 962,000/11,500,000 = 8.36%."
    },
    {
      number: 9,
      type: "numerical",
      tableRef: "table_science_graduates",
      text: "In China, the number of female graduates in science was 3,658,300 in 2010, and in 2011 it increased by 5% over the previous year. In 2013, men accounted for 46% of the total number of science graduates. By what percentage did the number of female graduates in science grow between 2011 and 2013?",
      options: { a: "5.86%", b: "11.15%", c: "19.09%", d: "23.06%", e: "41%" },
      correct: "c",
      explanation: "2011 female = 3,658,300×1.05 = 3,841,215. 2013 female = 8,472,000×0.54 = 4,574,880 (54% women). Growth = 4,574,880/3,841,215 = 119.09%, i.e. +19.09%."
    },
    {
      number: 10,
      type: "numerical",
      tableRef: "table_science_graduates",
      text: "In 2012, how many more people made up the total number of doctorates and graduates in the United States than in China?",
      options: { a: "12,946,875", b: "28,434,375", c: "33,946,875", d: "41,584,375", e: "47,096,875" },
      correct: "d",
      explanation: "USA: graduates = 6,587,000/0.32 = 20,584,375; doctorates = 2,646,000/0.48 = 5,512,500; total = 26,096,875. China: graduates = 8,725,000/0.16 = 54,531,250; doctorates = 2,630,000/0.20 = 13,150,000; total = 67,681,250. Difference (China−USA) = 41,584,375."
    }
  ]
});
