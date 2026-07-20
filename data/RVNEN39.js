window.TESTS = window.TESTS || [];

window.TESTS.push({
  id: "RVNEN39-N",
  title: "RVNEN39 · Numerical Reasoning — Instituto Europeo Practice Test (EN)",
  defaultTimer: 20,
  sections: [
    {
      title: "Total state VAT revenue",
      instruction: "Questions 1–3 refer to the following table. You may use a basic calculator.",
      questionRange: [1, 3]
    },
    {
      title: "Scholarship students in 2012",
      instruction: "Questions 4–6 refer to the following table.",
      questionRange: [4, 6]
    },
    {
      title: "Evolution of annual net average wage in the EU",
      instruction: "Questions 7–10 refer to the following table.",
      questionRange: [7, 10]
    }
  ],
  tables: {
    table_vat: {
      title: "Total state VAT revenue",
      headers: ["Country", "2008 (millions €)", "2010 (millions €)", "2012 (millions €)", "2012 applicable rate"],
      rows: [
        ["Spain", "1,278", "1,836", "1,419", "22%"],
        ["France", "3,149", "2,868", "2,536", "19%"],
        ["Italy", "1,258", "1,143", "1,004", "22%"],
        ["United Kingdom", "3,514", "3,208", "2,967", "18%"],
        ["Germany", "5,268", "5,478", "4,782", "24%"]
      ]
    },
    table_scholarships: {
      title: "Scholarship students in 2012 (thousands)",
      headers: ["Country", "Secondary education", "University education"],
      rows: [
        ["Italy", "2,362.7", "864"],
        ["Spain", "1,854.2", "741.6"],
        ["France", "3,845.7", "1,485.2"],
        ["Sweden", "348.2", "184.7"]
      ]
    },
    table_wages: {
      title: "Evolution of annual net average wage in the EU (euros)",
      headers: ["Region", "2007", "2010", "2012"],
      rows: [
        ["Luxembourg", "29,892", "32,333", "32,779"],
        ["Belgium", "17,566", "19,464", "20,008"],
        ["Bulgaria", "1,481", "3,017", "2,860"],
        ["Eurozone", "15,343", "16,979", "17,175"],
        ["EU-27", "13,893", "14,721", "14,744"]
      ]
    }
  },
  questions: [
    {
      number: 1,
      type: "numerical",
      tableRef: "table_vat",
      text: "VAT is a tax paid for each product that is bought, and the applicable rate is the percentage on the real price which is used to calculate the tax amount. In 2011, the VAT rate rose in Spain from 18% (which had been applied since 2005) to 22%. By what percentage did the total expenditure on purchases (excluding VAT) to which the VAT was applied decrease between 2010 and 2012?",
      options: { a: "22.71%", b: "36.76%", c: "41.86%", d: "58.14%", e: "63.23%" },
      correct: "b",
      explanation: "2012 tax base = 1,419/0.22 = 6,450 million. 2010 tax base (at 18%) = 1,836/0.18 = 10,200 million. Decrease = (10,200−6,450)/10,200 = 36.76%."
    },
    {
      number: 2,
      type: "numerical",
      tableRef: "table_vat",
      text: "Assuming that the applicable rate in Italy and the United Kingdom did not change over the whole period from 2008 to 2012, by how many less percentage points did the Italian tax base decrease (total expenditure on purchases to which the tax applies excluding the tax value itself) between 2010 and 2012 compared to the British tax base between 2008 and 2012?",
      options: { a: "3.40 percentage points", b: "7.81 percentage points", c: "12.16 percentage points", d: "15.56 percentage points", e: "25.41 percentage points" },
      correct: "a",
      explanation: "Since rates are constant, the percentage decrease in revenue equals the percentage decrease in the tax base. UK 2008→2012: (3,514−2,967)/3,514 = 15.56%. Italy 2010→2012: (1,143−1,004)/1,143 = 12.16%. Difference = 15.56−12.16 = 3.40 points."
    },
    {
      number: 3,
      type: "numerical",
      tableRef: "table_vat",
      text: "If the applicable rate in Germany in 2012 had been 2 percentage points higher and the level of purchases had not changed due to this increase, by what percentage would the amount collected from VAT have increased?",
      options: { a: "7.69%", b: "8.33%", c: "8.46%", d: "9.09%", e: "9.80%" },
      correct: "b",
      explanation: "German 2012 tax base = 4,782/0.24 = 19,925 million. At 26%: 19,925×0.26 = 5,180.5 million. Increase = (5,180.5−4,782)/4,782 = 8.33%."
    },
    {
      number: 4,
      type: "numerical",
      tableRef: "table_scholarships",
      text: "The university students with scholarship in Italy in 2012 were 60% of the total. The proportion of university students to high school students was 1:4. What approximate percentage of all high school students had a scholarship in 2012?",
      options: { a: "12%", b: "25%", c: "33%", d: "36%", e: "41%" },
      correct: "e",
      explanation: "Total university students = 864,000/0.6 = 1,440,000. High school students = 1,440,000×4 = 5,760,000. Scholarship percentage = 2,362,700/5,760,000 ≈ 41%."
    },
    {
      number: 5,
      type: "numerical",
      tableRef: "table_scholarships",
      text: "The number of women with a scholarship in secondary education in Spain amounted to 1,186,688. The percentage of women among college students with a scholarship was 12 points higher than among high school students with scholarships. How many university women with scholarships were there in Spain in 2012?",
      options: { a: "210,022", b: "385,632", c: "427,977", d: "531,578", e: "563,616" },
      correct: "e",
      explanation: "Women share in secondary = 1,186,688/1,854,200 = 64%. University share = 64+12 = 76%. University women = 741,600×0.76 = 563,616."
    },
    {
      number: 6,
      type: "numerical",
      tableRef: "table_scholarships",
      text: "In Sweden, the proportion between university students with scholarship and without scholarship was 5:3 in 2012. The number of university students decreased by 35,210 between 2010 and 2012, but the percentage of university students with a scholarship increased by 5 points in the same period. How many university students with scholarships were there in Sweden in 2010?",
      options: { a: "149,678", b: "175,710", c: "190,170", d: "197,250", e: "223,243" },
      correct: "c",
      explanation: "2012: scholarship ratio = 5/8 = 62.5%. Total students 2012 = 184,700/0.625 = 295,520. Total 2010 = 295,520+35,210 = 330,730. 2010 scholarship % = 62.5−5 = 57.5%. Scholarship students 2010 = 330,730×0.575 ≈ 190,170."
    },
    {
      number: 7,
      type: "numerical",
      tableRef: "table_wages",
      text: "By what percentage did the percentage growth of the average wage in the Eurozone from 2007 to 2012 surpass that of Luxembourg in the same period?",
      options: { a: "2.26%", b: "18.97%", c: "21.56%", d: "23.73%", e: "28.99%" },
      correct: "d",
      explanation: "Luxembourg growth: (32,779−29,892)/29,892 = 9.65%. Eurozone growth: (17,175−15,343)/15,343 = 11.94%. Difference relative to Luxembourg's: (11.94−9.65)/9.65 = 23.73%."
    },
    {
      number: 8,
      type: "numerical",
      tableRef: "table_wages",
      text: "The number of people employed in Bulgaria was 4.3 million in 2007. The total net wage bill (sum of the net salaries of all wage-earners in the country) obtained in that year in Romania was three and a half times that of Bulgaria. The number of people employed in Romania in 2007 was 12.5 million. What percentage was the average net salary of Romania relative to the net average salary of the EU-27 in 2007?",
      options: { a: "5.03%", b: "11.62%", c: "12.83%", d: "18.43%", e: "25.10%" },
      correct: "c",
      explanation: "Bulgaria wage bill = 1,481×4.3 = 6,368.3 million. Romania wage bill = 6,368.3×3.5 = 22,289.05 million. Romania average = 22,289.05/12.5 = 1,783.12€. As % of EU-27 (13,893): 1,783.12/13,893 = 12.83%."
    },
    {
      number: 9,
      type: "numerical",
      tableRef: "table_wages",
      text: "The gross annual salary in the Eurozone was EUR 24,045 in 2012. The percentage difference of the average gross salary relative to the average net salary was 20% lower in 2007 than in 2012. How much was the average gross salary of the Eurozone in 2007?",
      options: { a: "20,252.76", b: "22,707.64", c: "25,281.6", d: "25,776.24", e: "28,658" },
      correct: "a",
      explanation: "2012 gross-vs-net difference = (24,045−17,175)/17,175 = 40%. 2007 difference = 40×0.8 = 32%. 2007 gross = 15,343×1.32 = 20,252.76€."
    },
    {
      number: 10,
      type: "numerical",
      tableRef: "table_wages",
      text: "With respect to the 2012 data, the Commission's forecasts indicate an increase in the net annual average wage of the Eurozone of 1,384 euros in 2013, and 80% of that amount in 2014. In the EU-27, an increase of 5% per year is foreseen until 2014. If the forecasts are met, how much will the difference between the net annual average wage of the Eurozone and that of the EU-27 have changed in 2014 compared to 2012?",
      options: { a: "It will have decreased by more than 500 euros.", b: "It will have decreased by almost 1,500 euros.", c: "It will have changed by less than 250 euros.", d: "It will have increased by approximately 2,000 euros.", e: "It will have increased by close to 1,000 euros." },
      correct: "e",
      explanation: "Eurozone growth 2012→2014 = 1,384×1.8 = 2,491.2€. EU-27: 14,744×1.05×1.05 = 16,255.26, growth = 1,511.26€. Change in the gap = 2,491.2−1,511.26 ≈ 979.94€, i.e. the gap increases by close to 1,000 euros."
    }
  ]
});
