window.TESTS = window.TESTS || [];

window.TESTS.push({
  id: "RVNEN43-N",
  title: "RVNEN43 · Numerical Reasoning — Instituto Europeo Practice Test (EN)",
  defaultTimer: 20,
  sections: [
    {
      title: "Expenditure in cultural products in 2012",
      instruction: "Questions 1–3 refer to the following table. You may use a basic calculator.",
      questionRange: [1, 3]
    },
    {
      title: "Wind energy production and consumption",
      instruction: "Questions 4–6 refer to the following table.",
      questionRange: [4, 6]
    },
    {
      title: "Employment rate of women in the EU",
      instruction: "Questions 7–10 refer to the following table.",
      questionRange: [7, 10]
    }
  ],
  tables: {
    table_cultural_expenditure: {
      title: "Expenditure in cultural products in 2012 (millions of euros)",
      headers: ["Category", "Spain", "Germany", "France", "EU-27", "USA", "Japan"],
      rows: [
        ["Literature", "2,358", "5,239", "6,684", "40,356", "18,822", "4,972"],
        ["Theatre", "682", "1,114", "1,767", "6,280", "5,614", "1,863"],
        ["Cinema", "4,620", "10,646", "8,395", "48,264", "37,311", "12,029"],
        ["Music", "9,814", "19,687", "12,721", "112,367", "105,795", "29,817"],
        ["Population (millions)", "46.95", "80.6", "63.8", "504.45", "316", "127.45"]
      ]
    },
    table_wind_energy: {
      title: "Wind energy production and consumption",
      headers: ["Region", "Production 2005 (thousand kW)", "Production 2010 (thousand kW)", "Consumption/world production 2005", "Consumption/world production 2010"],
      rows: [
        ["EU-27", "40,511", "74,767", "58%", "47%"],
        ["India", "4,430", "10,742", "4%", "6%"],
        ["China", "1,260", "20,000", "7%", "14%"],
        ["USA", "9,149", "32,919", "24%", "21%"],
        ["Rest of the world", "23,632", "42,523", "7%", "12%"]
      ]
    },
    table_female_employment: {
      title: "Employment rate of women in the EU (%)",
      headers: ["Country", "2010", "2012", "Female workforce 2010 (millions)"],
      rows: [
        ["Portugal", "51.20", "49.60", "2.79"],
        ["Spain", "43.40", "41.10", "11.60"],
        ["France", "47.70", "46.80", "14.91"],
        ["Germany", "49.30", "49.70", "20.99"],
        ["Ireland", "51.80", "47.90", "1.07"],
        ["United Kingdom", "53.20", "52.20", "15.88"],
        ["Italy", "35.40", "34.50", "12.52"]
      ]
    }
  },
  questions: [
    {
      number: 1,
      type: "numerical",
      tableRef: "table_cultural_expenditure",
      text: "What percentage does the total expenditure on literature per inhabitant of Germany represent with respect to that of the EU-27?",
      options: { a: "76.92%", b: "81.25%", c: "84.02%", d: "87.01%", e: "95.57%" },
      correct: "b",
      explanation: "EU-27 per capita = 40,356/504.45 = 80€. Germany per capita = 5,239/80.6 = 65€. Ratio = 65/80 = 81.25%."
    },
    {
      number: 2,
      type: "numerical",
      tableRef: "table_cultural_expenditure",
      text: "Between 2005 and 2012, Japan's total spending for the four concepts in the table has increased by 8%, while the Japanese population has decreased by 2.4 million. How much has cultural expenditure per capita in Japan changed in that period?",
      options: { a: "It has increased by EUR 34.83.", b: "It has decreased by EUR 34.83.", c: "It has increased by EUR 21.50.", d: "It has decreased by EUR 21.50.", e: "The change has been less than EUR 10." },
      correct: "a",
      explanation: "2012 total = 4,972+1,863+12,029+29,817 = 48,681 million. 2005 total = 48,681/1.08 = 45,075 million. 2005 population = 127.45+2.4 = 129.85 million. 2005 per capita = 45,075/129.85 = 347.13€. 2012 per capita = 48,681/127.45 = 381.96€. Increase = 381.96−347.13 = 34.83€."
    },
    {
      number: 3,
      type: "numerical",
      tableRef: "table_cultural_expenditure",
      text: "The expenditure in theatre is equivalent to the total price paid in tickets for this type of shows. The average price of a theatre ticket was 14% higher in France than in Spain. By what percentage does the number of tickets sold in France in 2012 exceed the number of tickets sold in Spain?",
      options: { a: "56%", b: "61.40%", c: "77.74%", d: "127.27%", e: "135.96%" },
      correct: "d",
      explanation: "Using Spain price=10€, France price=11.4€. Spain tickets = 682/10 = 68.2 million. France tickets = 1,767/11.4 = 155 million. Ratio = 155/68.2 = 227.27%, i.e. France exceeds Spain by 127.27%."
    },
    {
      number: 4,
      type: "numerical",
      tableRef: "table_wind_energy",
      text: "By what percentage did wind energy consumption increase in the rest of the world between 2005 and 2010?",
      options: { a: "56.40%", b: "171.42%", c: "174.53%", d: "292.74%", e: "370.01%" },
      correct: "d",
      explanation: "2005 world production = 40,511+4,430+1,260+9,149+23,632 = 78,982. Rest-of-world consumption 2005 = 78,982×0.07 = 5,528.74. 2010 world production = 74,767+10,742+20,000+32,919+42,523 = 180,951. Rest-of-world consumption 2010 = 180,951×0.12 = 21,714.12. Increase = (21,714.12−5,528.74)/5,528.74 = 292.74%."
    },
    {
      number: 5,
      type: "numerical",
      tableRef: "table_wind_energy",
      text: "By how many thousands of kW more did wind energy consumption increase in the EU-27 between 2005 and 2010 than the production of that type of energy?",
      options: { a: "4,981.41", b: "5,370.51", c: "6,255", d: "9,626.51", e: "11,644.11" },
      correct: "a",
      explanation: "EU-27 production growth = 74,767−40,511 = 34,256. EU-27 consumption 2005 = 78,982×0.58 = 45,809.56. EU-27 consumption 2010 = 180,951×0.47 = 85,046.97. Consumption growth = 85,046.97−45,809.56 = 39,237.41. Difference vs production growth = 39,237.41−34,256 = 4,981.41."
    },
    {
      number: 6,
      type: "numerical",
      tableRef: "table_wind_energy",
      text: "Spain is the EU country with the highest production of wind energy. Between 2005 and 2010, its production increased by 8,245 thousand kW, so that in 2010 it produced 24% of the total EU production. What percentage of global production did Spain produce in 2005?",
      options: { a: "10.39%", b: "12.28%", c: "13.64%", d: "20.25%", e: "31.30%" },
      correct: "b",
      explanation: "Spain 2010 = 74,767×0.24 = 17,944.08. Spain 2005 = 17,944.08−8,245 = 9,699.08. World 2005 = 78,982. Share = 9,699.08/78,982 = 12.28%."
    },
    {
      number: 7,
      type: "numerical",
      tableRef: "table_female_employment",
      text: "Between 2010 and 2012, the French female workforce increased by 282,000 people. How many more employed women were there in France in 2010 than in 2012?",
      options: { a: "2,214", b: "25,380", c: "108,810", d: "134,190", e: "279,786" },
      correct: "a",
      explanation: "2010 employed = 14,910,000×0.477 = 7,112,070. 2012 workforce = 14,910,000+282,000 = 15,192,000; employed = 15,192,000×0.468 = 7,109,856. Difference = 7,112,070−7,109,856 = 2,214."
    },
    {
      number: 8,
      type: "numerical",
      tableRef: "table_female_employment",
      text: "In 2010, what percentage corresponded to the number of women employed in Ireland with respect to the number of women employed in Portugal?",
      options: { a: "19.86%", b: "35.87%", c: "38.80%", d: "40.05%", e: "74.90%" },
      correct: "c",
      explanation: "Ireland employed = 1,070,000×0.518 = 554,260. Portugal employed = 2,790,000×0.512 = 1,428,480. Ratio = 554,260/1,428,480 = 38.80%."
    },
    {
      number: 9,
      type: "numerical",
      tableRef: "table_female_employment",
      text: "By how many points should the percentage of female occupation have increased in the United Kingdom in 2010 in order to equal the number of employed women in Germany in the same year?",
      options: { a: "3.90", b: "11.96", c: "15.86", d: "61.26", e: "65.16" },
      correct: "b",
      explanation: "Germany employed = 20,990,000×0.493 = 10,348,070. UK employed = 15,880,000×0.532 = 8,448,160. Difference = 1,899,910. As percentage points of UK's workforce: 1,899,910/15,880,000 = 11.96 points."
    },
    {
      number: 10,
      type: "numerical",
      tableRef: "table_female_employment",
      text: "The female workforce of the EU countries not present in the table was 199.40 million in 2010. The figure for women employed in the whole EU was 122,830,400 in the same year. How many countries in the table had a female employment rate lower than that of the entire EU in 2010?",
      options: { a: "One", b: "Two", c: "Three", d: "Four", e: "Six" },
      correct: "b",
      explanation: "Total EU female workforce = 2.79+11.60+14.91+20.99+1.07+15.88+12.52+199.40 = 279.16 million. EU employment rate = 122,830,400/279,160,000 = 44%. Only Spain (43.40%) and Italy (35.40%) are below 44% — two countries."
    }
  ]
});
