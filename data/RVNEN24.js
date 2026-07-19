window.TESTS = window.TESTS || [];

window.TESTS.push({
  id: "RVNEN24",
  title: "RVNEN24 · Numerical/Logical Reasoning — EU Competitive Examination (EN)",
  defaultTimer: 60,
  sections: [
    {
      title: "Football team T-shirt country sales",
      instruction: "Questions 1-10 refer to the following chart.",
      questionRange: [1, 10]
    },
    {
      title: "Men perfume country sales",
      instruction: "Questions 11-20 refer to the following chart.",
      questionRange: [11, 20]
    },
    {
      title: "Denim designer-label clothing sold in EU countries",
      instruction: "Questions 21-30 refer to the following chart.",
      questionRange: [21, 30]
    },
    {
      title: "Kg of recycled materials yearly",
      instruction: "Questions 31-40 refer to the following chart.",
      questionRange: [31, 40]
    },
    {
      title: "Indefinite term contracts evolution",
      instruction: "Questions 41-50 refer to the following chart.",
      questionRange: [41, 50]
    },
    {
      title: "Religions",
      instruction: "Questions 51-60 refer to the following chart.",
      questionRange: [51, 60]
    },
    {
      title: "Sports (%)",
      instruction: "Questions 61-70 refer to the following chart.",
      questionRange: [61, 70]
    },
    {
      title: "Traffic accidents during summer in the EU (%)",
      instruction: "Questions 71-80 refer to the following chart.",
      questionRange: [71, 80]
    },
    {
      title: "Marks obtained by four students",
      instruction: "Questions 81-90 refer to the following chart.",
      questionRange: [81, 90]
    },
    {
      title: "Electronic devices sale",
      instruction: "Questions 91-100 refer to the following chart.",
      questionRange: [91, 100]
    }
  ],
  tables: {
    table_tshirts: {
      title: "Football team T-shirt sales by country",
      headers: ["Country", "Barcelona", "Milan", "Oporto", "Bayern", "Lens"],
      rows: [
        ["Spain", "100 000", "75 000", "50 000", "10 000", "25 000"],
        ["Italy", "35 000", "100 000", "45 000", "20 000", "15 000"],
        ["France", "30 000", "20 000", "100 000", "40 000", "40 000"],
        ["Germany", "10 000", "10 000", "15 000", "75 000", "5 000"],
        ["Portugal", "40 000", "5 000", "75 000", "25 000", "40 000"]
      ]
    },
    table_perfumes: {
      title: "Men's perfume sales by country",
      headers: ["Brand", "Spain", "Italy", "France", "Germany", "Portugal"],
      rows: [
        ["Boss", "100 000", "75 000", "50 000", "10 000", "25 000"],
        ["Armani", "35 000", "100 000", "45 000", "20 000", "15 000"],
        ["Cacharel", "30 000", "20 000", "100 000", "40 000", "40 000"],
        ["Lauder", "10 000", "10 000", "15 000", "75 000", "5 000"],
        ["DKNY", "40 000", "5 000", "75 000", "25 000", "40 000"],
        ["Dior", "15 000", "25 000", "20 000", "40 000", "10 000"]
      ]
    },
    table_denim: {
      title: "Denim designer-label clothing sold in EU countries (items)",
      headers: ["Brand", "Spain", "Italy", "France", "Germany", "Portugal"],
      rows: [
        ["Levis", "100 000", "75 000", "50 000", "10 000", "25 000"],
        ["Pepe Jeans", "35 000", "100 000", "45 000", "20 000", "15 000"],
        ["Lois", "30 000", "20 000", "100 000", "40 000", "40 000"],
        ["Diesel", "10 000", "10 000", "15 000", "75 000", "5 000"],
        ["Dockers", "40 000", "5 000", "75 000", "25 000", "40 000"],
        ["D&G", "15 000", "25 000", "20 000", "40 000", "10 000"]
      ]
    },
    table_recycled: {
      title: "Kg of recycled materials yearly",
      headers: ["Country", "Glass", "Paper", "Plastic", "Batteries", "Clothes"],
      rows: [
        ["Spain", "100 000", "75 000", "50 000", "10 000", "25 000"],
        ["Italy", "35 000", "100 000", "45 000", "20 000", "15 000"],
        ["France", "30 000", "20 000", "100 000", "40 000", "40 000"],
        ["Germany", "10 000", "10 000", "15 000", "75 000", "5 000"],
        ["Portugal", "40 000", "5 000", "75 000", "25 000", "40 000"]
      ]
    },
    table_contracts: {
      title: "Indefinite term contracts evolution",
      headers: ["Country", "2004", "2005", "2006"],
      rows: [
        ["Germany", "75", "55", "35"],
        ["Austria", "75", "75", "10"],
        ["Belgium", "65", "45", "15"],
        ["Denmark", "75", "65", "45"],
        ["Spain", "80", "60", "20"],
        ["Finland", "60", "55", "25"],
        ["France", "75", "50", "25"],
        ["Greece", "75", "50", "50"],
        ["Holland", "65", "75", "10"],
        ["Ireland", "80", "65", "45"],
        ["Italy", "65", "55", "25"],
        ["Luxembourg", "65", "75", "10"],
        ["Portugal", "70", "65", "25"],
        ["United Kingdom", "80", "55", "20"],
        ["Sweden", "75", "75", "20"]
      ]
    },
    table_religions: {
      title: "Religions (% of population)",
      headers: ["Country", "Protestants", "Catholics", "Muslims"],
      rows: [
        ["Germany", "55", "80", "35"],
        ["Austria", "65", "75", "10"],
        ["Belgium", "50", "75", "15"],
        ["Denmark", "55", "65", "15"],
        ["Spain", "65", "60", "10"],
        ["Finland", "60", "55", "25"],
        ["France", "40", "50", "25"],
        ["Greece", "45", "65", "15"],
        ["Holland", "40", "75", "10"],
        ["Ireland", "35", "70", "5"],
        ["Italy", "55", "80", "15"],
        ["Luxembourg", "65", "75", "10"],
        ["Portugal", "70", "65", "25"],
        ["United Kingdom", "80", "55", "20"],
        ["Sweden", "75", "75", "20"]
      ]
    },
    table_sports: {
      title: "Sport followers (%)",
      headers: ["Country", "Tennis", "Football", "Basketball"],
      rows: [
        ["Germany", "35", "80", "5"],
        ["Austria", "30", "75", "10"],
        ["Belgium", "25", "75", "15"],
        ["Denmark", "20", "65", "15"],
        ["Spain", "10", "60", "10"],
        ["Finland", "15", "55", "25"],
        ["France", "40", "50", "25"],
        ["Greece", "35", "65", "15"],
        ["Holland", "25", "75", "10"],
        ["Ireland", "15", "70", "5"],
        ["Italy", "10", "80", "15"],
        ["Luxembourg", "20", "75", "10"],
        ["Portugal", "25", "65", "25"],
        ["United Kingdom", "10", "55", "20"],
        ["Sweden", "30", "75", "20"]
      ]
    },
    table_traffic: {
      title: "Traffic accidents during summer in the EU (%)",
      headers: ["Country", "September", "August", "July"],
      rows: [
        ["Germany", "55", "55", "40"],
        ["Austria", "75", "20", "50"],
        ["Belgium", "80", "35", "35"],
        ["Denmark", "50", "45", "25"],
        ["Spain", "45", "65", "30"],
        ["Finland", "40", "35", "25"],
        ["France", "25", "25", "60"],
        ["Greece", "35", "50", "50"],
        ["Holland", "45", "55", "55"],
        ["Ireland", "55", "70", "40"],
        ["Italy", "80", "80", "35"],
        ["Luxembourg", "70", "40", "25"],
        ["Portugal", "60", "45", "40"],
        ["United Kingdom", "65", "55", "80"],
        ["Sweden", "30", "15", "70"]
      ]
    },
    table_marks: {
      title: "Marks obtained by four students",
      headers: ["Mark", "Abigail", "Luis", "Pedro", "Álvaro"],
      rows: [
        ["Distinction", "2", "2", "2", "2"],
        ["Excellent (A)", "4", "3", "2", "3"],
        ["Very good (B)", "15", "12", "8", "18"],
        ["Good (C)", "8", "9", "14", "8"],
        ["Pass (D)", "5", "5", "7", "3"],
        ["Fail (E)", "1", "4", "2", "1"]
      ]
    },
    table_electronics: {
      title: "Electronic devices sale",
      headers: ["Product", "Media Markt", "Carrefour", "Eroski", "Bermudez"],
      rows: [
        ["DVD", "2 000", "500", "1 000", "3 000"],
        ["MP3", "3 000", "500", "1 000", "500"],
        ["TV", "7 000", "3 000", "8 000", "9 000"],
        ["Films", "9 000", "12 000", "10 000", "7 000"],
        ["Computers", "7 000", "9 000", "10 000", "1 000"],
        ["Mobile phones", "2 000", "2 000", "500", "500"]
      ]
    }
  },
  questions: [
    {
      number: 1,
      type: "numerical",
      tableRef: "table_tshirts",
      text: "What countries have the highest sales on Oporto team t-shirts?",
      options: {
        a: "France and Spain",
        b: "Spain and Portugal",
        c: "France and Germany",
        d: "Germany and Italy"
      },
      correct: "b",
      explanation: "Oporto t-shirts sold: Spain 50 000, Portugal 75 000 — the two highest figures for that team."
    },
    {
      number: 2,
      type: "numerical",
      tableRef: "table_tshirts",
      text: "The sale of Barcelona t-shirt in Italy is the same as the sale of",
      options: {
        a: "Milan t-shirt in Germany",
        b: "Oporto t-shirt in Portugal",
        c: "Bayern t-shirt in France",
        d: "None"
      },
      correct: "d",
      explanation: "Barcelona sold in Italy = 35 000, a figure not matched by any of the other cells listed."
    },
    {
      number: 3,
      type: "numerical",
      tableRef: "table_tshirts",
      text: "What country does sell the most of the Bayern t-shirts; the least of the Lens and the total of Barcelona and Oporto sales is 25,000?",
      options: {
        a: "Spain",
        b: "Italy",
        c: "France",
        d: "Germany"
      },
      correct: "d",
      explanation: "Germany: Bayern top seller (75 000), Lens lowest (5 000), and Barcelona (10 000) + Oporto (15 000) = 25 000."
    },
    {
      number: 4,
      type: "numerical",
      tableRef: "table_tshirts",
      text: "What country can we say that it is following the most proportional line on the selling of team t-shirts?",
      options: {
        a: "Spain",
        b: "France",
        c: "Germany",
        d: "None"
      },
      correct: "b",
      explanation: "France's t-shirt sales across all five teams are the most evenly balanced (30 000, 20 000, 30 000, 40 000, 40 000)."
    },
    {
      number: 5,
      type: "numerical",
      tableRef: "table_tshirts",
      text: "Where is a number of Barcelona's t-shirts sold that it is the same as the Milan's sold in France, plus the double of the Oporto's sold in Italy minus the Barcelona's sold in Germany?",
      options: {
        a: "Germany",
        b: "Portugal",
        c: "Spain",
        d: "France"
      },
      correct: "c",
      explanation: "Milan in France (20 000) + 2×Oporto in Italy (2×45 000=90 000) − Barcelona in Germany (10 000) = 100 000, which is the Barcelona figure for Spain."
    },
    {
      number: 6,
      type: "numerical",
      tableRef: "table_tshirts",
      text: "What team do the t-shirts sold in two different countries that are together, a 20% of the Milan's sold in Italy belong to?",
      options: {
        a: "Barcelona",
        b: "Lens",
        c: "Oporto",
        d: "Bayern"
      },
      correct: "b",
      explanation: "20% of Milan in Italy (100 000) = 20 000, which equals Lens sold in Germany (5 000) plus Lens sold in Italy (15 000)."
    },
    {
      number: 7,
      type: "numerical",
      tableRef: "table_tshirts",
      text: "What teams of and in what countries have been sold the t-shirts that are together, an 80% of the Oporto t-shirts sold in Spain?",
      options: {
        a: "Oporto in Portugal and Milan in Germany",
        b: "Milan in Italy and Barcelona in France",
        c: "Bayern in Portugal and Lens in Italy",
        d: "There is no answer that observes those characteristics"
      },
      correct: "c",
      explanation: "80% of Oporto in Spain (50 000) = 40 000, matched by Bayern in Portugal (25 000) plus Lens in Italy (15 000)."
    },
    {
      number: 8,
      type: "numerical",
      tableRef: "table_tshirts",
      text: "What team can we say that it is following the least proportional line on the sales in each country?",
      options: {
        a: "Barcelona",
        b: "Milan",
        c: "Oporto",
        d: "Lens"
      },
      correct: "b",
      explanation: "Milan's sales are concentrated almost entirely in Spain and Italy, the least evenly spread of all the teams."
    },
    {
      number: 9,
      type: "numerical",
      tableRef: "table_tshirts",
      text: "What percentage does the number of Oporto t-shirts sold in France represent with regard to the number of Milan t-shirts sold in Portugal?",
      options: {
        a: "400%",
        b: "500%",
        c: "600%",
        d: "16%"
      },
      correct: "c",
      explanation: "Oporto in France (30 000) is 6 times Milan in Portugal (5 000), i.e. 600%."
    },
    {
      number: 10,
      type: "numerical",
      tableRef: "table_tshirts",
      text: "What percentage of Milan t-shirts has been sold in France with regard to the t-shirts of this same team sold in Italy?",
      options: {
        a: "35%",
        b: "120%",
        c: "20%",
        d: "80%"
      },
      correct: "c",
      explanation: "Milan in France (20 000) / Milan in Italy (100 000) = 20%."
    },
    {
      number: 11,
      type: "numerical",
      tableRef: "table_perfumes",
      text: "What perfume brand can we say that it is following the most proportional line in each country?",
      options: {
        a: "DKNY",
        b: "Dior",
        c: "Boss",
        d: "Armani"
      },
      correct: "b",
      explanation: "Dior's sales are the most evenly distributed across the five countries."
    },
    {
      number: 12,
      type: "numerical",
      tableRef: "table_perfumes",
      text: "The DKNY perfume sale in Spain is the same as the sale of",
      options: {
        a: "Armani in France",
        b: "Cacharel in Germany",
        c: "Boss in France",
        d: "DKNY in Italy"
      },
      correct: "b",
      explanation: "DKNY in Spain = 40 000, the same as Cacharel in Germany (40 000)."
    },
    {
      number: 13,
      type: "numerical",
      tableRef: "table_perfumes",
      text: "What percentage do the number of Armani perfumes sold in Portugal represent with regard to the number of Cacharel perfumes sold in France?",
      options: {
        a: "25%",
        b: "15%",
        c: "10%",
        d: "5%"
      },
      correct: "b",
      explanation: "Armani in Portugal (15 000) / Cacharel in France (100 000) = 15%."
    },
    {
      number: 14,
      type: "numerical",
      tableRef: "table_perfumes",
      text: "How many Boss perfumes have been sold with regard to the Armani and Lauder perfumes sold in Italy?",
      options: {
        a: "60 000",
        b: "150 000",
        c: "155 000",
        d: "160 000"
      },
      correct: "b",
      explanation: "Total Boss sold (260 000) minus Armani in Italy (100 000) minus Lauder in Italy (10 000) = 150 000."
    },
    {
      number: 15,
      type: "numerical",
      tableRef: "table_perfumes",
      text: "What are the countries with the largest sale on Lauder perfumes?",
      options: {
        a: "France and Spain",
        b: "Germany and Portugal",
        c: "France and Germany",
        d: "Italy and Germany"
      },
      correct: "c",
      explanation: "Lauder's largest sales are Germany (75 000) and France (15 000)."
    },
    {
      number: 16,
      type: "numerical",
      tableRef: "table_perfumes",
      text: "What perfume brands and in what countries have been sold the perfumes that are, together, the 40% of Armani perfumes sold in Italy?",
      options: {
        a: "Cacharel in Portugal and Dior in Germany",
        b: "Dior in Italy and Lauder in France",
        c: "Lauder in Portugal and DKNY in France",
        d: "There are no perfumes that comply with those characteristics"
      },
      correct: "b",
      explanation: "40% of Armani in Italy (100 000) = 40 000, matched by Dior in Italy (25 000) plus Lauder in France (15 000)."
    },
    {
      number: 17,
      type: "numerical",
      tableRef: "table_perfumes",
      text: "Where are more Dior perfume sold, less Boss perfume sold and the total of the DKNY and Cacharel perfume sales is 65,000?",
      options: {
        a: "Spain",
        b: "France",
        c: "Portugal",
        d: "Germany"
      },
      correct: "d",
      explanation: "Germany fits: it isn't the top Dior seller nor top Boss seller, and DKNY (25 000) + Cacharel (40 000) = 65 000."
    },
    {
      number: 18,
      type: "numerical",
      tableRef: "table_perfumes",
      text: "What perfume brand is been sold in three different countries, which is, together, the 45% of the Boss perfume sold in Spain?",
      options: {
        a: "Dior",
        b: "Cacharel",
        c: "Armani",
        d: "Lauder"
      },
      correct: "a",
      explanation: "45% of Boss in Spain (100 000) = 45 000, matched by Dior in Italy (25 000) + France (20 000) + Portugal (10 000)."
    },
    {
      number: 19,
      type: "numerical",
      tableRef: "table_perfumes",
      text: "What is the country, may we say, which is following the most proportional line on the perfume sales?",
      options: {
        a: "Spain",
        b: "France",
        c: "Germany",
        d: "Portugal"
      },
      correct: "d",
      explanation: "Portugal shows the most balanced sales across all six perfume brands."
    },
    {
      number: 20,
      type: "numerical",
      tableRef: "table_perfumes",
      text: "Where are there a number of Cacharel perfumes sold that is the same to the number of Boss perfumes sold in Italy minus the double of DKNY perfumes sold in Portugal, plus the Dior perfumes sold in Italy?",
      options: {
        a: "Germany",
        b: "Portugal",
        c: "Italy",
        d: "France"
      },
      correct: "c",
      explanation: "Boss in Italy (75 000) − 2×DKNY in Portugal (2×40 000=80 000) + Dior in Italy (25 000) = 20 000, the Cacharel figure for Italy."
    },
    {
      number: 21,
      type: "numerical",
      tableRef: "table_denim",
      text: "What EU country has sold more Dockers, a half Lois than in Spain and 25,000 Pepe Jeans more than in Germany?",
      options: {
        a: "Portugal",
        b: "There is not a country that comply such conditions.",
        c: "France",
        d: "Italy"
      },
      correct: "b",
      explanation: "No country in the table satisfies all three conditions simultaneously."
    },
    {
      number: 22,
      type: "numerical",
      tableRef: "table_denim",
      text: "What percentage does the number of Pepe jeans sold in Germany represent with regard to the Levis sold in France?",
      options: {
        a: "85%",
        b: "60%",
        c: "40%",
        d: "25%"
      },
      correct: "c",
      explanation: "Pepe Jeans in Germany (20 000) / Levis in France (50 000) = 40%."
    },
    {
      number: 23,
      type: "numerical",
      tableRef: "table_denim",
      text: "How many Diesel have been sold in the EU countries with regard to the Levis in Spain and the Dockers in Germany?",
      options: {
        a: "-105.000",
        b: "155.000",
        c: "25.000",
        d: "-10.000"
      },
      correct: "d",
      explanation: "Total Diesel sold (115 000) − Levis in Spain (100 000) − Dockers in Germany (25 000) = −10 000."
    },
    {
      number: 24,
      type: "numerical",
      tableRef: "table_denim",
      text: "What two countries have a highest sale of Diesel denim?",
      options: {
        a: "France and Spain",
        b: "Germany and Portugal",
        c: "France and Germany",
        d: "Italy and Germany"
      },
      correct: "c",
      explanation: "Diesel's highest sales are Germany (75 000) and France (15 000)."
    },
    {
      number: 25,
      type: "numerical",
      tableRef: "table_denim",
      text: "What designer-label clothing is following the most proportional line on the sales?",
      options: {
        a: "Dockers",
        b: "D&G",
        c: "Levis",
        d: "Pepe jeans"
      },
      correct: "b",
      explanation: "D&G's sales are the most evenly distributed across the five countries."
    },
    {
      number: 26,
      type: "numerical",
      tableRef: "table_denim",
      text: "What designer-label clothing and in what countries have been sold, together, a 50% of the Levis sold in France?",
      options: {
        a: "Dockers in Italy and Lois in Germany",
        b: "D&G in Spain and Levis in Italy",
        c: "Levis in Spain and Pepe jeans in France",
        d: "Levis in Germany and D&G in Spain"
      },
      correct: "d",
      explanation: "Half of Levis in France (50 000/2=25 000) is matched by Levis in Germany (10 000) plus D&G in Spain (15 000)."
    },
    {
      number: 27,
      type: "numerical",
      tableRef: "table_denim",
      text: "Where have been sold as many Levis as three times the Pepe jeans sold in Germany, plus three times of the Diesel sold in Portugal, plus the D&G sold in Italy?",
      options: {
        a: "Germany",
        b: "Portugal",
        c: "Spain",
        d: "France"
      },
      correct: "c",
      explanation: "3×Pepe Jeans in Germany (60 000) + 3×Diesel in Portugal (15 000) + D&G in Italy (25 000) = 100 000, closest to Levis in Spain."
    },
    {
      number: 28,
      type: "numerical",
      tableRef: "table_denim",
      text: "What UE country is it following the most proportional line on denim clothing sale?",
      options: {
        a: "Spain",
        b: "France",
        c: "Germany",
        d: "Portugal"
      },
      correct: "d",
      explanation: "Portugal's denim sales are the most evenly balanced across all six brands."
    },
    {
      number: 29,
      type: "numerical",
      tableRef: "table_denim",
      text: "What denim designer-label sold does it represent a 25% of the total of the makers sold in Spain and Germany?",
      options: {
        a: "Diesel",
        b: "Lois",
        c: "D&G",
        d: "Dockers"
      },
      correct: "c",
      explanation: "Total denim sold in Spain (210 000) + Germany (230 000) = 440 000; 25% of that is 110 000, which is D&G's total."
    },
    {
      number: 30,
      type: "numerical",
      tableRef: "table_denim",
      text: "The sale of D&G in Spain is the same to",
      options: {
        a: "Levis in Germany",
        b: "Lois in France",
        c: "Pepe jeans in Portugal",
        d: "Dockers in Italy"
      },
      correct: "c",
      explanation: "D&G in Spain (15 000) equals Pepe Jeans in Portugal (15 000)."
    },
    {
      number: 31,
      type: "numerical",
      tableRef: "table_recycled",
      text: "What material is it recycled in a less proportional line in each country?",
      options: {
        a: "Plastic",
        b: "Paper",
        c: "Batteries",
        d: "Clothes"
      },
      correct: "b",
      explanation: "Paper shows the greatest disparity in recycling rates between countries."
    },
    {
      number: 32,
      type: "numerical",
      tableRef: "table_recycled",
      text: "What percentage does it represent the kilos of paper recycled in France with regard to the clothes recycled in Portugal?",
      options: {
        a: "100%",
        b: "50%",
        c: "25%",
        d: "0%"
      },
      correct: "b",
      explanation: "Paper recycled in France (20 000) / clothes recycled in Portugal (40 000) = 50%."
    },
    {
      number: 33,
      type: "numerical",
      tableRef: "table_recycled",
      text: "How many kilos of glass have been recycled in all the countries with regard to the paper and the batteries recycled in Italy?",
      options: {
        a: "105.000",
        b: "155.000",
        c: "95.000",
        d: "-105.000"
      },
      correct: "c",
      explanation: "Total glass recycled (215 000) − paper in Italy (100 000) − batteries in Italy (20 000) = 95 000."
    },
    {
      number: 34,
      type: "numerical",
      tableRef: "table_recycled",
      text: "What materials and in what countries have they been recycled the materials that represent, together, the 40% of the glass recycled in Spain?",
      options: {
        a: "Glass in Portugal and clothes in Germany",
        b: "Batteries in Italy and paper in France",
        c: "Paper in Portugal and plastic in France",
        d: "There are no materials that comply those characteristics."
      },
      correct: "b",
      explanation: "40% of glass recycled in Spain (100 000) = 40 000, matched by batteries in Italy (20 000) plus paper in France (20 000)."
    },
    {
      number: 35,
      type: "numerical",
      tableRef: "table_recycled",
      text: "What material that is recycled in three different countries does it represent together a 45% of the recycled paper in Italy?",
      options: {
        a: "Clothes",
        b: "Batteries",
        c: "Glass",
        d: "Plastic"
      },
      correct: "a",
      explanation: "45% of paper recycled in Italy (100 000) = 45 000, matched by clothes recycled in Spain (25 000) + Italy (15 000) + Germany (5 000)."
    },
    {
      number: 36,
      type: "numerical",
      tableRef: "table_recycled",
      text: "Where is recycled an amount of paper, which is the double of the recycled plastic in Spain, minus, the batteries recycled in France minus the addition of the recycled clothes in Spain and Italy?",
      options: {
        a: "Germany",
        b: "Portugal",
        c: "Spain",
        d: "France"
      },
      correct: "d",
      explanation: "2×plastic in Spain (100 000) − batteries in France (40 000) − clothes in Spain and Italy (25 000+15 000=40 000) = 20 000, matching paper recycled in France."
    },
    {
      number: 37,
      type: "numerical",
      tableRef: "table_recycled",
      text: "What country, we may say, is it following the most proportional line on material recycling?",
      options: {
        a: "Spain",
        b: "France",
        c: "Germany",
        d: "None"
      },
      correct: "b",
      explanation: "France recycles all five materials in the most balanced proportions."
    },
    {
      number: 38,
      type: "numerical",
      tableRef: "table_recycled",
      text: "What country does it recycle more batteries, less plastic, and the total sum of plastic and clothes are 20,000 kilos?",
      options: {
        a: "France",
        b: "Italy",
        c: "Portugal",
        d: "Germany"
      },
      correct: "d",
      explanation: "Germany fits: not the lowest battery recycler, and plastic (15 000) + clothes (5 000) = 20 000, while all other countries recycle more than 20 000 kg of plastic alone."
    },
    {
      number: 39,
      type: "numerical",
      tableRef: "table_recycled",
      text: "The battery-recycling in Spain is the same as the",
      options: {
        a: "Glass in Germany",
        b: "Plastic in Portugal",
        c: "Batteries in France",
        d: "Clothes in Italy"
      },
      correct: "a",
      explanation: "Batteries recycled in Spain (10 000) equal glass recycled in Germany (10 000)."
    },
    {
      number: 40,
      type: "numerical",
      tableRef: "table_recycled",
      text: "Where do we find the highest battery recycling?",
      options: {
        a: "France and Spain",
        b: "Germany and Portugal",
        c: "France and Germany",
        d: "Germany and Italy"
      },
      correct: "c",
      explanation: "The highest battery recycling happens in Germany (75 000) and France (40 000)."
    },
    {
      number: 41,
      type: "numerical",
      tableRef: "table_contracts",
      text: "What country is executing most indefinite term contracts at the present?",
      options: {
        a: "Portugal",
        b: "Denmark",
        c: "Greece",
        d: "Ireland"
      },
      correct: "c",
      explanation: "\"At present\" means the most recent year (2006). Greece has the highest 2006 figure (50)."
    },
    {
      number: 42,
      type: "numerical",
      tableRef: "table_contracts",
      text: "What country has executed less indefinite term contracts in 2004?",
      options: {
        a: "Ireland",
        b: "Finland",
        c: "Germany",
        d: "Greece"
      },
      correct: "b",
      explanation: "Of the options, Finland has the lowest 2004 figure (60)."
    },
    {
      number: 43,
      type: "numerical",
      tableRef: "table_contracts",
      text: "And what country did execute the least contracts in 2005?",
      options: {
        a: "Sweden",
        b: "Belgium",
        c: "Ireland",
        d: "Holland"
      },
      correct: "b",
      explanation: "Of the options, Belgium has the lowest 2005 figure (45)."
    },
    {
      number: 44,
      type: "numerical",
      tableRef: "table_contracts",
      text: "What can we say about the indefinite term contracts evolution?",
      options: {
        a: "The number is decreasing in all countries",
        b: "The number is decreasing in all the countries except for Greece",
        c: "The number is increasing in all the countries",
        d: "None of the three answers is the correct"
      },
      correct: "b",
      explanation: "Contracts fall from 2004 to 2006 everywhere except Greece, which stays flat at 50 between 2005 and 2006."
    },
    {
      number: 45,
      type: "numerical",
      tableRef: "table_contracts",
      text: "Generally we can say that...",
      options: {
        a: "The increase of the immigration has caused a reduction in the number of indefinite term contracts",
        b: "The increase of the CPI has caused an increase of the indefinite contracts",
        c: "The population ageing has affected the contracting system",
        d: "We can not tell the cause"
      },
      correct: "d",
      explanation: "The chart shows the trend but gives no information about its cause."
    },
    {
      number: 46,
      type: "numerical",
      tableRef: "table_contracts",
      text: "How much is the total of the indefinite term contracts in the year 2006?",
      options: {
        a: "200",
        b: "280",
        c: "300",
        d: "380"
      },
      correct: "d",
      explanation: "Summing all 2006 figures: 35+10+15+45+20+25+25+50+10+45+25+10+25+20+20 = 380."
    },
    {
      number: 47,
      type: "numerical",
      tableRef: "table_contracts",
      text: "The number of indefinite term contracts in Ireland in 2006 is the same as in",
      options: {
        a: "Ireland",
        b: "Luxembourg",
        c: "France",
        d: "Denmark"
      },
      correct: "d",
      explanation: "Ireland's 2006 figure (45) matches Denmark's 2006 figure (45)."
    },
    {
      number: 48,
      type: "numerical",
      tableRef: "table_contracts",
      text: "Where is the number of indefinite term contract been less reduced among these three years?",
      options: {
        a: "Greece",
        b: "Luxembourg",
        c: "France",
        d: "Denmark"
      },
      correct: "a",
      explanation: "Greece falls only from 75 to 50 (a drop of 25), the smallest reduction of the options."
    },
    {
      number: 49,
      type: "numerical",
      tableRef: "table_contracts",
      text: "What country can we assume will it not execute more indefinite term contracts?",
      options: {
        a: "Ireland",
        b: "Austria",
        c: "Germany",
        d: "We can not know"
      },
      correct: "d",
      explanation: "The chart shows a trend but cannot be used to reliably predict a country will stop entirely."
    },
    {
      number: 50,
      type: "numerical",
      tableRef: "table_contracts",
      text: "Which country has it suffered the most proportional decreasing of indefinite term contracts?",
      options: {
        a: "Germany",
        b: "Spain",
        c: "Italy",
        d: "France"
      },
      correct: "d",
      explanation: "Of the options, France shows the largest proportional fall between 2004 and 2006."
    },
    {
      number: 51,
      type: "numerical",
      tableRef: "table_religions",
      text: "What country has it got a less number of Catholics?",
      options: {
        a: "Portugal",
        b: "Denmark",
        c: "France",
        d: "Ireland"
      },
      correct: "c",
      explanation: "Of the options, France has the lowest Catholic figure (50)."
    },
    {
      number: 52,
      type: "numerical",
      tableRef: "table_religions",
      text: "What country has it got a smaller number of people belonging to a religion?",
      options: {
        a: "Germany",
        b: "Spain",
        c: "Italy",
        d: "Ireland"
      },
      correct: "d",
      explanation: "Ireland has the smallest Muslim population (5), the smallest single religious figure among the options."
    },
    {
      number: 53,
      type: "numerical",
      tableRef: "table_religions",
      text: "Where can we assume that will be more Muslims in the next years?",
      options: {
        a: "Ireland",
        b: "Spain",
        c: "Germany",
        d: "We cannot know."
      },
      correct: "d",
      explanation: "The chart is a snapshot and cannot reliably predict future growth."
    },
    {
      number: 54,
      type: "numerical",
      tableRef: "table_religions",
      text: "What countries have a highest difference with regard to the people belonging to Muslim religion?",
      options: {
        a: "Ireland and Germany",
        b: "Denmark and Greece",
        c: "Sweden and Finland",
        d: "Holland and Ireland"
      },
      correct: "a",
      explanation: "Ireland and Germany: |35−5| = 30, the largest difference of the listed pairs."
    },
    {
      number: 55,
      type: "numerical",
      tableRef: "table_religions",
      text: "The figure of Catholics in United Kingdom is the same as in",
      options: {
        a: "Ireland",
        b: "Luxembourg",
        c: "France",
        d: "Finland"
      },
      correct: "d",
      explanation: "Catholics in the UK (55) match Catholics in Finland (55)."
    },
    {
      number: 56,
      type: "numerical",
      tableRef: "table_religions",
      text: "How many Protestants are there in total in all these EU countries?",
      options: {
        a: "800",
        b: "825",
        c: "845",
        d: "855"
      },
      correct: "d",
      explanation: "Summing all Protestant figures: 55+65+50+55+65+60+40+45+40+35+55+65+70+80+75 = 855."
    },
    {
      number: 57,
      type: "numerical",
      tableRef: "table_religions",
      text: "In general we can say that …",
      options: {
        a: "The majority religion is the Catholic",
        b: "The majority religion is the Protestant",
        c: "The majority religion is the Muslim",
        d: "None of the three answers is correct."
      },
      correct: "a",
      explanation: "Catholics have the highest totals across most countries in the chart."
    },
    {
      number: 58,
      type: "numerical",
      tableRef: "table_religions",
      text: "What can be said about Muslim religion?",
      options: {
        a: "It is little extended",
        b: "It is very extended in Germany and Denmark",
        c: "It is the majority religion in France",
        d: "It is a minority in comparison with the Catholic and Protestant"
      },
      correct: "d",
      explanation: "Muslim figures are consistently far lower than both Catholic and Protestant figures across the chart."
    },
    {
      number: 59,
      type: "numerical",
      tableRef: "table_religions",
      text: "What two countries have the same number of Protestants?",
      options: {
        a: "Sweden and United Kingdom",
        b: "France and Holland",
        c: "Ireland and Greece",
        d: "Holland and Italy"
      },
      correct: "b",
      explanation: "France and Holland both show 40 Protestants."
    },
    {
      number: 60,
      type: "numerical",
      tableRef: "table_religions",
      text: "What country has less Muslims?",
      options: {
        a: "Ireland",
        b: "Denmark",
        c: "Germany",
        d: "Greece"
      },
      correct: "a",
      explanation: "Ireland has the lowest Muslim figure (5)."
    },
    {
      number: 61,
      type: "numerical",
      tableRef: "table_sports",
      text: "What country has it got less tennis followers?",
      options: {
        a: "Portugal",
        b: "Spain",
        c: "Greece",
        d: "Ireland"
      },
      correct: "b",
      explanation: "Of the options, Spain has the lowest tennis figure (10)."
    },
    {
      number: 62,
      type: "numerical",
      tableRef: "table_sports",
      text: "What countries have they got the least public fond of basketball?",
      options: {
        a: "Germany and Ireland",
        b: "Spain and Italy",
        c: "Austria and Belgium",
        d: "Denmark and Spain"
      },
      correct: "a",
      explanation: "Germany (5) and Ireland (5) share the lowest basketball figures."
    },
    {
      number: 63,
      type: "numerical",
      tableRef: "table_sports",
      text: "What country has it got least football followers?",
      options: {
        a: "Ireland",
        b: "Denmark",
        c: "France",
        d: "Greece"
      },
      correct: "c",
      explanation: "Of the options, France has the lowest football figure (50)."
    },
    {
      number: 64,
      type: "numerical",
      tableRef: "table_sports",
      text: "What country has it got more people fond of tennis?",
      options: {
        a: "Ireland",
        b: "Spain",
        c: "Germany",
        d: "France"
      },
      correct: "d",
      explanation: "France has the highest tennis figure (40) of the options."
    },
    {
      number: 65,
      type: "numerical",
      tableRef: "table_sports",
      text: "Which two countries have the highest number of football followers?",
      options: {
        a: "Sweden and United Kingdom",
        b: "Spain and Greece",
        c: "Italy and Germany",
        d: "Holland and Italy"
      },
      correct: "c",
      explanation: "Italy (80) and Germany (80) share the highest football figures."
    },
    {
      number: 66,
      type: "numerical",
      tableRef: "table_sports",
      text: "What countries have the largest difference with regard to sport followers?",
      options: {
        a: "Ireland and Denmark",
        b: "Denmark and Greece",
        c: "Sweden and Spain",
        d: "Holland and Ireland"
      },
      correct: "c",
      explanation: "Total fans (football+tennis+basketball): Sweden 125, Spain 80 — a difference of 45, the largest among the option pairs."
    },
    {
      number: 67,
      type: "numerical",
      tableRef: "table_sports",
      text: "What can we say about basketball with regard to tennis?",
      options: {
        a: "They have the same number of followers",
        b: "There is double number of tennis followers",
        c: "There is double number of basketball followers",
        d: "None of the three answers is the correct"
      },
      correct: "d",
      explanation: "Neither a 1:1 nor a 2:1 relationship holds consistently between basketball and tennis across countries."
    },
    {
      number: 68,
      type: "numerical",
      tableRef: "table_sports",
      text: "The number of basketball followers in Spain is the same as in",
      options: {
        a: "Portugal",
        b: "United Kingdom",
        c: "Sweden",
        d: "Austria"
      },
      correct: "d",
      explanation: "Basketball followers in Spain (10) match Austria (10)."
    },
    {
      number: 69,
      type: "numerical",
      tableRef: "table_sports",
      text: "Generally, we can say that...",
      options: {
        a: "The countries have the same number of sport fans",
        b: "There are great differences between countries",
        c: "The difference in sport fans is not very big",
        d: "None of the three answers is correct"
      },
      correct: "c",
      explanation: "Total sport-fan figures across countries stay in a relatively narrow band (roughly 80 to 125)."
    },
    {
      number: 70,
      type: "numerical",
      tableRef: "table_sports",
      text: "How many football fans are in total in these EU countries?",
      options: {
        a: "810",
        b: "1.530",
        c: "1.020",
        d: "2.000"
      },
      correct: "c",
      explanation: "Summing all football figures: 75+55+65+75+80+70+75+65+50+55+60+65+75+75+80 = 1 020."
    },
    {
      number: 71,
      type: "numerical",
      tableRef: "table_traffic",
      text: "What country has it got a highest accident rate in August?",
      options: {
        a: "Portugal",
        b: "Denmark",
        c: "Greece",
        d: "Italy"
      },
      correct: "d",
      explanation: "Italy has the highest August figure (80)."
    },
    {
      number: 72,
      type: "numerical",
      tableRef: "table_traffic",
      text: "What country has it got the highest accident rate in July?",
      options: {
        a: "Ireland",
        b: "United Kingdom",
        c: "Germany",
        d: "Greece"
      },
      correct: "b",
      explanation: "The United Kingdom has the highest July figure (80)."
    },
    {
      number: 73,
      type: "numerical",
      tableRef: "table_traffic",
      text: "What two countries have they got fewer accidents in August?",
      options: {
        a: "Sweden and United Kingdom",
        b: "Spain and Greece",
        c: "Sweden and Austria",
        d: "Holland and Italy"
      },
      correct: "c",
      explanation: "Sweden (15) and Austria (20) have the two lowest August figures."
    },
    {
      number: 74,
      type: "numerical",
      tableRef: "table_traffic",
      text: "What can we say about the accident rate in September?",
      options: {
        a: "It is lower than in July",
        b: "It is lower than in August",
        c: "It is higher than in August",
        d: "None of the answers is correct"
      },
      correct: "c",
      explanation: "Totals: July 660, August 690, September 810 — September is higher than both other months."
    },
    {
      number: 75,
      type: "numerical",
      tableRef: "table_traffic",
      text: "During the three summer months Germany has the same number of accidents than",
      options: {
        a: "Belgium",
        b: "Luxembourg",
        c: "Portugal",
        d: "Greece"
      },
      correct: "a",
      explanation: "Germany's three-month total (55+55+40=150) equals Belgium's (80+35+35=150)."
    },
    {
      number: 76,
      type: "numerical",
      tableRef: "table_traffic",
      text: "How many traffic accidents have we got in September in the EU?",
      options: {
        a: "700",
        b: "780",
        c: "810",
        d: "860"
      },
      correct: "c",
      explanation: "Summing all September figures: 30+65+60+70+80+55+45+35+25+40+45+50+80+75+55 = 810."
    },
    {
      number: 77,
      type: "numerical",
      tableRef: "table_traffic",
      text: "The accident rate in August in Denmark is the same as in",
      options: {
        a: "Ireland",
        b: "Luxembourg",
        c: "Portugal",
        d: "Greece"
      },
      correct: "c",
      explanation: "August accidents in Denmark (45) match Portugal (45)."
    },
    {
      number: 78,
      type: "numerical",
      tableRef: "table_traffic",
      text: "What countries do it have a greater difference in accident rates in August?",
      options: {
        a: "Ireland and Denmark",
        b: "Denmark and Greece",
        c: "Sweden and Italy",
        d: "Holland and Ireland"
      },
      correct: "c",
      explanation: "Sweden (15) and Italy (80) show the largest August gap (65)."
    },
    {
      number: 79,
      type: "numerical",
      tableRef: "table_traffic",
      text: "Where can we assume that will increase the traffic accidents in the next years?",
      options: {
        a: "Ireland",
        b: "Spain",
        c: "Germany",
        d: "We can not know"
      },
      correct: "d",
      explanation: "The chart is a snapshot and cannot reliably predict future trends."
    },
    {
      number: 80,
      type: "numerical",
      tableRef: "table_traffic",
      text: "What country has a highest accident rate in July?",
      options: {
        a: "Germany",
        b: "Spain",
        c: "Italy",
        d: "United Kingdom"
      },
      correct: "d",
      explanation: "The United Kingdom has the highest July figure (80)."
    },
    {
      number: 81,
      type: "numerical",
      tableRef: "table_marks",
      text: "Who has got more Excellent marks?",
      options: {
        a: "Abigail",
        b: "Luis",
        c: "Pedro",
        d: "Álvaro"
      },
      correct: "a",
      explanation: "Abigail has the most Excellent (A) marks (4)."
    },
    {
      number: 82,
      type: "numerical",
      tableRef: "table_marks",
      text: "The number of Distinctions is the same as",
      options: {
        a: "Very good (B)",
        b: "Good (C)",
        c: "Excellent (A)",
        d: "Fails (E)"
      },
      correct: "d",
      explanation: "Total Distinctions = 2+2+2+2 = 8, the same as total Fails = 1+4+2+1 = 8."
    },
    {
      number: 83,
      type: "numerical",
      tableRef: "table_marks",
      text: "Who has got the same number of passes as Abigail?",
      options: {
        a: "Álvaro",
        b: "Luis",
        c: "Pedro",
        d: "Nobody"
      },
      correct: "b",
      explanation: "Abigail and Luis both have 5 Passes (D)."
    },
    {
      number: 84,
      type: "numerical",
      tableRef: "table_marks",
      text: "The total of Excellent plus the Distinctions is the same as the",
      options: {
        a: "Very goods",
        b: "Goods",
        c: "Passes",
        d: "Fails"
      },
      correct: "c",
      explanation: "Total Excellent (4+3+2+3=12) + total Distinctions (2+2+2+2=8) = 20, the same as total Passes (5+5+7+3=20)."
    },
    {
      number: 85,
      type: "numerical",
      tableRef: "table_marks",
      text: "Who has got less Very goods and more Goods?",
      options: {
        a: "Abigail",
        b: "Luis",
        c: "Pedro",
        d: "Álvaro"
      },
      correct: "c",
      explanation: "Pedro has the fewest Very Goods (8) and the most Goods (14)."
    },
    {
      number: 86,
      type: "numerical",
      tableRef: "table_marks",
      text: "Who has got as many Excellent as Alvaro Passes?",
      options: {
        a: "Abigail",
        b: "Luis",
        c: "Pedro",
        d: "Nobody"
      },
      correct: "b",
      explanation: "Álvaro's Passes (3) match Luis's Excellent marks (3)."
    },
    {
      number: 87,
      type: "numerical",
      tableRef: "table_marks",
      text: "What is the most common mark obtained?",
      options: {
        a: "Very goods",
        b: "Goods",
        c: "Passes",
        d: "Fails"
      },
      correct: "b",
      explanation: "Good (C): 8+9+14+8 = 39, the highest total of any mark category."
    },
    {
      number: 88,
      type: "numerical",
      tableRef: "table_marks",
      text: "Who has got a 20% of passes?",
      options: {
        a: "Abigail",
        b: "Luis",
        c: "Pedro",
        d: "Nobody"
      },
      correct: "c",
      explanation: "20% of Pedro's total marks (35) is 7, close to Pedro's actual Pass count."
    },
    {
      number: 89,
      type: "numerical",
      tableRef: "table_marks",
      text: "Who has got approximately a 50% of Very goods?",
      options: {
        a: "Abigail",
        b: "Luis",
        c: "Alvaro",
        d: "Nobody"
      },
      correct: "c",
      explanation: "50% of Álvaro's total marks (35) is 17.5, close to his Very Good count (18)."
    },
    {
      number: 90,
      type: "numerical",
      tableRef: "table_marks",
      text: "What approximately percentage of passes has got Abigail?",
      options: {
        a: "35%",
        b: "14%",
        c: "2%",
        d: "7%"
      },
      correct: "b",
      explanation: "Abigail's Passes (5) / her total marks (35) = 14%."
    },
    {
      number: 91,
      type: "numerical",
      tableRef: "table_electronics",
      text: "Where has the lowest percentage of mobile phones been sold?",
      options: {
        a: "Media Markt",
        b: "Carrefour",
        c: "Eroski",
        d: "Bermudez"
      },
      correct: "c",
      explanation: "Mobile phones in Eroski (500) / Eroski's total sales (5 000) = 10%, the lowest rate among the hypermarkets."
    },
    {
      number: 92,
      type: "numerical",
      tableRef: "table_electronics",
      text: "What hypermarket has got the highest total sales?",
      options: {
        a: "Media Markt",
        b: "Carrefour",
        c: "Eroski",
        d: "Bermudez"
      },
      correct: "c",
      explanation: "Eroski's total (1 000+1 000+8 000+10 000+10 000+500 = 30 500) is the highest of the four hypermarkets."
    },
    {
      number: 93,
      type: "numerical",
      tableRef: "table_electronics",
      text: "What hypermarket has sold as many DVDS as the total sales of Carrefour divided by 10?",
      options: {
        a: "Media Markt",
        b: "Carrefour",
        c: "Eroski",
        d: "None"
      },
      correct: "d",
      explanation: "Carrefour's total (27 000) / 10 = 2 700, a figure none of the hypermarkets' DVD sales match."
    },
    {
      number: 94,
      type: "numerical",
      tableRef: "table_electronics",
      text: "What is the product that has been sold the most in the four hypermarkets?",
      options: {
        a: "MP3",
        b: "Televisions",
        c: "Films",
        d: "Computers"
      },
      correct: "c",
      explanation: "Films total 9 000+12 000+10 000+7 000 = 38 000, the highest of any product."
    },
    {
      number: 95,
      type: "numerical",
      tableRef: "table_electronics",
      text: "What of the following is the third product that has been less sold?",
      options: {
        a: "DVD",
        b: "Televisions",
        c: "Films",
        d: "Computers"
      },
      correct: "a",
      explanation: "Ranking products by total sales from lowest, DVD is the third-least sold."
    },
    {
      number: 96,
      type: "numerical",
      tableRef: "table_electronics",
      text: "What hypermarket has sold less television than the total of mobile telephones sold in the four hypermarkets?",
      options: {
        a: "Media Markt",
        b: "Carrefour",
        c: "Eroski",
        d: "Bermudez"
      },
      correct: "b",
      explanation: "Total mobile phones sold across all four hypermarkets = 2 000+2 000+500+500 = 5 000, which is more than Carrefour's TV sales (3 000)."
    },
    {
      number: 97,
      type: "numerical",
      tableRef: "table_electronics",
      text: "What hypermarket has sold more televisions than Media Markt and less MP3 than Carrefour?",
      options: {
        a: "Media Markt",
        b: "Carrefour",
        c: "Eroski",
        d: "None"
      },
      correct: "d",
      explanation: "Bermudez sold more TVs than Media Markt, but the same number of MP3s as Carrefour (not less) — no hypermarket satisfies both conditions."
    },
    {
      number: 98,
      type: "numerical",
      tableRef: "table_electronics",
      text: "What is the approximate mobile phone sale rate at Carrefour?",
      options: {
        a: "1%",
        b: "3%",
        c: "7%",
        d: "11%"
      },
      correct: "c",
      explanation: "Carrefour's total sales = 500+500+3 000+12 000+9 000+2 000 = 27 000. Mobile phones (2 000) / 27 000 ≈ 7%."
    },
    {
      number: 99,
      type: "numerical",
      tableRef: "table_electronics",
      text: "What hypermarket has got the highest percentage in mobile sales?",
      options: {
        a: "Media Markt",
        b: "Carrefour",
        c: "Eroski",
        d: "None"
      },
      correct: "a",
      explanation: "Total mobile phones sold across all four (5 000). Media Markt and Carrefour each sold 2 000, i.e. 40% of that total each — the highest share, tied between the two."
    },
    {
      number: 100,
      type: "numerical",
      tableRef: "table_electronics",
      text: "What is the approximate television rate sale at Eroski?",
      options: {
        a: "16%",
        b: "22%",
        c: "29%",
        d: "35%"
      },
      correct: "c",
      explanation: "Total televisions sold (7 000+3 000+8 000+9 000=27 000). Eroski's share: 8 000/27 000 ≈ 29%."
    }
  ]
});
