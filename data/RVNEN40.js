window.TESTS = window.TESTS || [];

window.TESTS.push({
  id: "RVNEN40-N",
  title: "RVNEN40 · Numerical Reasoning — Instituto Europeo Practice Test (EN)",
  defaultTimer: 20,
  sections: [
    {
      title: "Monthly expenses per employee and sector in France (2012)",
      instruction: "Questions 1–3 refer to the following table. You may use a basic calculator.",
      questionRange: [1, 3]
    },
    {
      title: "Disease incidence by age in the EU-26 (2011)",
      instruction: "Questions 4–6 refer to the following table. Percentages show the incidence of each disease group over the total population of that age group.",
      questionRange: [4, 6]
    },
    {
      title: "Sales in various shopping centres in 2010",
      instruction: "Questions 7–9 refer to the following table. Percentages show sales of each article type relative to the centre's total sales.",
      questionRange: [7, 9]
    },
    {
      title: "Portugal media in 2012",
      instruction: "Question 10 refers to the following table.",
      questionRange: [10, 10]
    }
  ],
  tables: {
    table_france_expenses: {
      title: "Monthly expenses per employee and sector in France (2012)",
      headers: ["Sector", "Salary (€)", "Salary (%)", "Social Security (€)", "Social Security (%)", "Training (€)", "Training (%)"],
      rows: [
        ["Agriculture", "1,373.7", "57", "602.5", "25", "433.8", "18"],
        ["Extraction", "1,254", "44", "798", "28", "456", "16"],
        ["Manufacture", "1,934.4", "39", "1,587.2", "32", "1,438.4", "29"],
        ["Commerce", "2,101.5", "44", "1,354.3", "30", "1,214.2", "26"],
        ["Services", "2,385.6", "42", "1,988", "35", "1,874.4", "33"]
      ]
    },
    table_disease_incidence: {
      title: "Disease incidence by age in the EU-26 (2011)",
      headers: ["Disease group", "< 16 years", "16-35 years", "36-55 years", "> 55 years"],
      rows: [
        ["Genetic diseases", "14%", "13%", "17%", "8%"],
        ["Contagious diseases", "21%", "19%", "15%", "26%"],
        ["Intoxication by external agents", "26%", "32%", "35%", "38%"],
        ["Rest of diseases", "14%", "9%", "11%", "21%"]
      ]
    },
    table_shopping_centres: {
      title: "Sales in various shopping centres in 2010",
      headers: ["Category", "Centre A", "Centre B", "Centre C", "Centre D"],
      rows: [
        ["Household", "32%", "21%", "25%", "17%"],
        ["Electronics", "27%", "46%", "38%", "42%"],
        ["Textiles", "22%", "18%", "23%", "34%"],
        ["Food", "19%", "15%", "14%", "7%"],
        ["Turnover (millions)", "524.89", "378.28", "826.14", "688.45"]
      ]
    },
    table_portugal_media: {
      title: "Portugal media in 2012",
      headers: ["Scope", "Newspapers", "Radio stations", "TV channels", "Digital media"],
      rows: [
        ["Local", "215", "845", "58", "158"],
        ["Regional", "116", "572", "17", "45"],
        ["National", "13", "37", "4", "22"]
      ]
    }
  },
  questions: [
    {
      number: 1,
      type: "numerical",
      tableRef: "table_france_expenses",
      text: "The expenditure per employee in the French agricultural sector in terms of social security will increase by one fifth in 2013 compared to 2012. The salary of agricultural workers, meanwhile, will remain unchanged. If the training cost is reduced by half of the amount by which social security spending increases, what percentage of the total expenditure per employee will correspond to training in the agricultural sector in 2013?",
      options: { a: "15.12%", b: "15.50%", c: "16.79%", d: "19.06%", e: "20.05%" },
      correct: "a",
      explanation: "2013 social security = 602.5×1.2 = 723€ (increase of 120.5€). Training decreases by 120.5/2 = 60.25€: 433.8−60.25 = 373.55€. Total 2013 expense = 1,373.7+723+373.55 = 2,470.35€. Training share = 373.55/2,470.35 = 15.12%."
    },
    {
      number: 2,
      type: "numerical",
      tableRef: "table_france_expenses",
      text: "By what percentage was the average wage of a worker in the service sector greater than the salary and social security expense of an agricultural worker?",
      options: { a: "7.36%", b: "9.33%", c: "10.12%", d: "17.16%", e: "20.71%" },
      correct: "e",
      explanation: "Services salary = 2,385.6€. Agriculture salary+social security = 1,373.7+602.5 = 1,976.2€. Difference = 409.4€, which is 409.4/1,976.2 = 20.71% of the agricultural figure."
    },
    {
      number: 3,
      type: "numerical",
      tableRef: "table_france_expenses",
      text: "The average monthly salary in the commerce sector in 2012 was 12% higher than in 2008. The average expenditure on training, meanwhile, was reduced by EUR 250 per month between 2008 and 2012, and the percentage of expenditure on social security has remained unchanged over that period. What was the average monthly amount allocated to social security spending in 2008?",
      options: { a: "EUR 1,205.92", b: "EUR 1,325.40", c: "EUR 1,420.08", d: "EUR 1,431.66", e: "EUR 1,441.78" },
      correct: "d",
      explanation: "2008 salary = 2,101.5/1.12 = 1,876.34€. 2008 training = 1,214.2+250 = 1,464.2€. Social security stayed at 30% of the total, so the other two factors (salary+training) made up 70%: total = (1,876.34+1,464.2)/0.7 = 4,772.2€. Social security = 4,772.2×0.3 = 1,431.66€."
    },
    {
      number: 4,
      type: "numerical",
      tableRef: "table_disease_incidence",
      text: "The total population under 16 years of age in the EU-26 was 176.5 million in 2011. Three fifths of those under 16 affected by poisoning by external agents have been women. How many more women affected by external agent intoxication than people (of both sexes) affected by genetic diseases were there in that age group?",
      options: { a: "1,270,800", b: "2,824,000", c: "3,854,760", d: "4,612,533", e: "7,624,000" },
      correct: "b",
      explanation: "Intoxicated under-16s = 176.5×0.26 = 45.89 million; women = 45.89×0.6 = 27.534 million. Genetic disease cases under 16 = 176.5×0.14 = 24.71 million. Difference = 27.534−24.71 = 2.824 million = 2,824,000."
    },
    {
      number: 5,
      type: "numerical",
      tableRef: "table_disease_incidence",
      text: "Among those over 55, in 2012 there were 19,397,700 affected by genetic diseases, 5% more than in 2011. The number of people affected by contagious diseases in that age group decreased by 350,000 between 2011 and 2012. How many people over 55 affected by contagious diseases were there in 2012?",
      options: { a: "55,940,398", b: "59,690,500", c: "60,390,500", d: "65,844,651", e: "66,710,552" },
      correct: "b",
      explanation: "2011 genetic cases = 19,397,700/1.05 = 18,474,000, which is 8% of the over-55 population: 18,474,000/0.08 = 230,925,000. 2011 contagious cases = 230,925,000×0.26 = 60,040,500. 2012 = 60,040,500−350,000 = 59,690,500."
    },
    {
      number: 6,
      type: "numerical",
      tableRef: "table_disease_incidence",
      text: "The total number of people affected by the rest of diseases in 2011 was 78.23 million, of whom 42% were over 36 years of age. The average cost per person affected by this type of illness was EUR 35, although the average expenditure of those over 35 was 20% higher than that average. What was the total expense generated by those affected under 36?",
      options: { a: "1,358.07 million", b: "1,620.94 million", c: "1,697.59 million", d: "1,818.06 million", e: "2,281.70 million" },
      correct: "a",
      explanation: "Over-36 affected = 78.23×0.42 = 32.8566 million. Total expense (at €35 average) = 78,230,000×35 = 2,738,050,000€. Over-36 cost per person = 35×1.2 = 42€; their total = 32,856,600×42 = 1,379,977,200€. Under-36 total = 2,738,050,000−1,379,977,200 = 1,358.07 million."
    },
    {
      number: 7,
      type: "numerical",
      tableRef: "table_shopping_centres",
      text: "The sale of electronic items accounted for five eighths of the total Centre C turnover. At the same time, the turnover for the sale of electronic items was 25% greater than that of Centre D. What percentage of the total Centre D turnover was due to non-electronic items?",
      options: { a: "40%", b: "42%", c: "50%", d: "58%", e: "60%" },
      correct: "a",
      explanation: "Centre C electronics = 826.14×5/8 = 516.3375 million. Centre D electronics = 516.3375/1.25 = 413.07 million, which is 413.07/688.45 = 60% of Centre D's total. Non-electronic = 100−60 = 40%."
    },
    {
      number: 8,
      type: "numerical",
      tableRef: "table_shopping_centres",
      text: "In Centre A, a total of one million articles have been sold throughout the year. The average price of household items sold was EUR 250. By what percentage was the average price of the rest of the items sold in that Centre higher than that of household goods?",
      options: { a: "61.78%", b: "84.75%", c: "94.27%", d: "117.98%", e: "161.70%" },
      correct: "e",
      explanation: "Household items = 1,000,000×0.32 = 320,000, turnover = 320,000×250 = 80 million. Rest turnover = 524.89−80 = 444.89 million, over 680,000 items → 654.25€ average. Increase over household price: (654.25−250)/250 = 161.70%."
    },
    {
      number: 9,
      type: "numerical",
      tableRef: "table_shopping_centres",
      text: "In Centre B, all items are sold at the same unit price. With respect to 2010, total turnover grew by 12% in 2011. Likewise, in relation to 2010 data, in 2011 the percentage of sales of electronic items increased by one third, those of household goods kept the same sales figure, and those of food reached the same percentage relative to the total of sales. What percentage were textiles sales relative to total sales in 2011?",
      options: { a: "4.93%", b: "26.98%", c: "31.50%", d: "46.35%", e: "73.02%" },
      correct: "a",
      explanation: "2011 turnover = 378.28×1.12 = 423.67 million. Electronics % 2011 = 46×4/3 = 61.33%. Food stays 15%. Household kept the same absolute figure (378.28×0.21 = 79.43 million), which is 79.43/423.67 = 18.74% of 2011 turnover. Textiles = 100−(61.33+15+18.74) = 4.93%."
    },
    {
      number: 10,
      type: "numerical",
      tableRef: "table_portugal_media",
      text: "Regarding digital media of regional scope, by how many percentage points does its percentage relative to the whole set of digital media of any scope surpass its percentage relative to the regional media of any kind?",
      options: { a: "6", b: "14", c: "20", d: "30", e: "33" },
      correct: "b",
      explanation: "Total digital media = 158+45+22 = 225; regional share = 45/225 = 20%. Total regional media (all types) = 116+572+17+45 = 750; regional digital share = 45/750 = 6%. Difference = 20−6 = 14 points."
    }
  ]
});
