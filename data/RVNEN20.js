window.TESTS = window.TESTS || [];

window.TESTS.push({
  id: "RVNEN20-N",
  title: "RVNEN20 · Numerical Reasoning — Instituto Europeo Practice Test (EN)",
  defaultTimer: 45,
  sections: [
    {
      title: "Total production by sector in 2008",
      instruction: "Questions 1–4 refer to the following table.",
      questionRange: [1, 4]
    },
    {
      title: "Energy consumption per inhabitant",
      instruction: "Questions 5–8 refer to the following table.",
      questionRange: [5, 8]
    },
    {
      title: "Horticultural products in Belgium",
      instruction: "Questions 9–12 refer to the following table.",
      questionRange: [9, 12]
    },
    {
      title: "TV watchers",
      instruction: "Questions 13–16 refer to the following table.",
      questionRange: [13, 16]
    },
    {
      title: "Alcohol consumption in 2005",
      instruction: "Questions 17–20 refer to the following table.",
      questionRange: [17, 20]
    },
    {
      title: "European airlines in 2006",
      instruction: "Questions 21–24 refer to the following table.",
      questionRange: [21, 24]
    },
    {
      title: "School population (primary school)",
      instruction: "Questions 25–28 refer to the following table.",
      questionRange: [25, 28]
    },
    {
      title: "Swine flu cases by group of age",
      instruction: "Questions 29–32 refer to the following table.",
      questionRange: [29, 32]
    },
    {
      title: "Houses bought",
      instruction: "Questions 33–35 refer to the following table.",
      questionRange: [33, 35]
    }
  ],
  tables: {
    table_production: {
      title: "Total production by sector in 2008 (% of total)",
      headers: ["Country", "Agricultural sector", "Industrial sector", "Service sector"],
      rows: [
        ["Greece", "40%", "35%", "25%"],
        ["United Kingdom", "12%", "50%", "38%"],
        ["Czech Republic", "40%", "36%", "24%"]
      ]
    },
    table_energy_inhabitant: {
      title: "Energy consumption per inhabitant (thousands of klW)",
      headers: ["Source", "Denmark 1991", "Denmark 2001", "Sweden 1991", "Sweden 2001", "Netherlands 1991", "Netherlands 2001", "Ireland 1991", "Ireland 2001"],
      rows: [
        ["Coal", "170", "203", "145", "180", "85", "97", "162", "147"],
        ["Electric", "323", "452", "347", "421", "268", "352", "287", "354"],
        ["Nuclear", "487", "487", "230", "356", "280", "300", "507", "406"],
        ["Renewable", "528", "685", "437", "658", "528", "783", "202", "226"]
      ]
    },
    table_horticulture: {
      title: "Horticultural products in Belgium (millions of kg)",
      headers: ["Product", "2003", "2005", "2007"],
      rows: [
        ["Potatoes", "300", "287", "302"],
        ["Tomatoes", "28", "26", "33"],
        ["Pumpkins", "250", "268", "268"],
        ["Carrots", "500", "638", "689"]
      ]
    },
    table_tv: {
      title: "TV watchers",
      headers: ["Channel", "Morning", "Afternoon", "Evening"],
      rows: [
        ["Channel A", "1 356 728", "7 368 021", "8 526 794"],
        ["Channel B", "2 758 358", "6 412 639", "5 289 235"],
        ["Channel C", "3 267 348", "5 528 832", "11 203 501"]
      ]
    },
    table_alcohol: {
      title: "Alcohol consumption in 2005 (% of total)",
      headers: ["Drink", "Spain", "France", "Germany", "Italy"],
      rows: [
        ["Wine", "42%", "52%", "16%", "49%"],
        ["Beer", "31%", "27%", "68%", "36%"],
        ["Spirits", "27%", "21%", "16%", "21%"]
      ]
    },
    table_airlines: {
      title: "European airlines in 2006",
      headers: ["Company", "Number of planes", "Turnover in Euros", "Hours of flight"],
      rows: [
        ["Company A", "175", "17 258 638", "23 578"],
        ["Company B", "23", "3 568 357", "863"],
        ["Company C", "58", "12 368 284", "5 238"],
        ["Company D", "68", "4 526 984", "2 038"]
      ]
    },
    table_school: {
      title: "School population (primary school), thousands of pupils",
      headers: ["Country", "1990 Male", "1990 Female", "1995 Male", "1995 Female", "2000 Male", "2000 Female", "2005 Male", "2005 Female", "2010 Male", "2010 Female"],
      rows: [
        ["Bulgaria", "2123", "3234", "2357", "3684", "2153", "3957", "2468", "3658", "2657", "3426"],
        ["Romania", "2635", "2321", "2364", "2158", "2653", "2269", "2689", "2630", "2841", "2982"],
        ["Poland", "8536", "9528", "8269", "8933", "8861", "9548", "8999", "9216", "9032", "9358"],
        ["Slovakia", "1023", "1507", "936", "1307", "952", "1208", "927", "1109", "1003", "1267"]
      ]
    },
    table_swineflu: {
      title: "Swine flu cases by group of age in 2008",
      headers: ["Country", "0-15 years", "16-30 years", "31-45 years", "45-60 years", "61+ years"],
      rows: [
        ["Sweden", "126", "235", "371", "389", "69"],
        ["Ireland", "200", "321", "405", "296", "57"],
        ["Germany", "359", "624", "658", "420", "163"],
        ["Slovenia", "16", "20", "39", "35", "13"],
        ["Spain", "325", "578", "523", "392", "122"]
      ]
    },
    table_houses: {
      title: "Houses bought (thousands)",
      headers: ["Item", "Spain 2000", "Belgium 2000", "Germany 2000", "Spain 2005", "Belgium 2005", "Germany 2005"],
      rows: [
        ["Houses", "275", "138", "829", "530", "274", "852"],
        ["Apartments", "728", "133", "840", "925", "583", "821"]
      ]
    }
  },
  questions: [
    {
      number: 1,
      type: "numerical",
      tableRef: "table_production",
      text: "In 2008, the total production in the United Kingdom doubled the total production in Greece. By what percentage was the production of the British industrial sector bigger than the production of the Greek service sector?",
      options: { a: "50%", b: "75%", c: "200%", d: "300%" },
      correct: "d",
      explanation: "Using imaginary units: Greece total = 100, UK total = 200. UK industrial = 200×0.50 = 100. Greek services = 100×0.25 = 25. Difference (100−25)/25 = 300%."
    },
    {
      number: 2,
      type: "numerical",
      tableRef: "table_production",
      text: "The British agricultural sector produced 45.6 million Euros in 2008. Compared to 2007, the total production has increased on 5%, but the production of the agricultural sector decreased on 8% from 2007 to 2008. What was the approximate share of the agricultural sector on the total production in 2007?",
      options: { a: "4%", b: "11%", c: "13%", d: "16%" },
      correct: "c",
      explanation: "UK 2008 total = 45.6/0.12 = 380 million. 2007 total = 380/1.05 = 361.9 million. Agricultural 2008 (45.6) is 92% of 2007's figure, so 2007 agricultural = 45.6/0.92 = 49.6 million. Share in 2007 = 49.6/361.9 ≈ 13%."
    },
    {
      number: 3,
      type: "numerical",
      tableRef: "table_production",
      text: "The Czech service sector had a turnover of 76.8 million Euros in 2008. Given that the total Czech production increased by 5% a year until 2010, how much more will the industrial sector produce in 2010 than in 2008?",
      options: { a: "8.68 millions", b: "8.87 millions", c: "11.52 millions", d: "11.8 millions" },
      correct: "d",
      explanation: "Czech total 2008 = 76.8/0.24 = 320 million. Industrial 2008 = 320×0.36 = 115.2 million. Growing 5% a year: 2009 = 120.96, 2010 = 127. Difference = 127−115.2 = 11.8 million."
    },
    {
      number: 4,
      type: "numerical",
      tableRef: "table_production",
      text: "The production of the industrial sector in Greece is 66.5 million Euros in 2008. This turnover will grow on 3% yearly. Given that the production of the agricultural sector will remain constant, in how many years will the production of the industrial sector be bigger than the production of the agricultural sector in Greece?",
      options: { a: "2 years", b: "4 years", c: "5 years", d: "7 years" },
      correct: "c",
      explanation: "Greek total = 66.5/0.35 = 190 million; agricultural = 190×0.40 = 76 million. Growing industrial by 3% a year: 68.49, 70.55, 72.66, 74.84, 77.09 — after 5 years it exceeds 76 million."
    },
    {
      number: 5,
      type: "numerical",
      tableRef: "table_energy_inhabitant",
      text: "Every thousand klW of electric energy have a cost of 0.12 Euros in Ireland. The amount of consumed klW of electric energy per inhabitant and year in Ireland increased on 6% from 2001 to 2003, and on 8% from 2003 to 2005. The Irish population in 2001 was 20 345 000, and it has increased on 40 000 a year since. How much money did the Irish spend on electric energy in 2005?",
      options: { a: "992.99 million", b: "997.15 million", c: "989.37 million", d: "985.25 million" },
      correct: "b",
      explanation: "2001 electric consumption = 354. 2003 = 354×1.06 = 375.24. 2005 = 375.24×1.08 = 405.25. Cost per person = 405.25×0.12 = 48.63 €. Population 2005 = 20 345 000+4×40 000 = 20 505 000. Total = 20 505 000×48.63 ≈ 997.15 million."
    },
    {
      number: 6,
      type: "numerical",
      tableRef: "table_energy_inhabitant",
      text: "Consumption of electrical energy in Sweden grew double as much from 2001 to 2005 as from 1991 to 2001. Provided that the rest of consumptions remained constant from 2001 to 2005, what percentage of the total energy consumption in Sweden belonged to electricity in 2005?",
      options: { a: "6.81%", b: "20.05%", c: "16.56%", d: "32.27%" },
      correct: "d",
      explanation: "Growth 1991-2001 = 421−347 = 74. Growth 2001-2005 = double = 148, so 2005 electric = 421+148 = 569. Other sources stay constant: 180+356+658 = 1194. Total = 569+1194 = 1763. Share = 569/1763 ≈ 32.27%."
    },
    {
      number: 7,
      type: "numerical",
      tableRef: "table_energy_inhabitant",
      text: "In 1986, the Dutch government implemented a plan to increase the share of renewable energies per inhabitant on 25% to 2001, but finally they surpassed that objective on 23 000 klW per inhabitant. How many thousands of klW of renewable energies consumed every Dutch per average, in 1986?",
      options: { a: "608", b: "570", c: "564.25", d: "603.40" },
      correct: "a",
      explanation: "2001 renewable in Netherlands = 783. Subtracting the 23 (thousand) surplus: 783−23 = 760. That figure represents a 25% increase over 1986: 760/1.25 = 608."
    },
    {
      number: 8,
      type: "numerical",
      tableRef: "table_energy_inhabitant",
      text: "In 2001, only 18% of the coal energy consumed in Denmark was produced in the country, how many thousands of klW of coal energy had to import Denmark from abroad, given that the Danish population was 8 456 000 in 2001?",
      options: { a: "562 347 676", b: "2 780 840 160", c: "1 407 585 760", d: "308 928 240" },
      correct: "c",
      explanation: "Denmark had to import 82% of coal consumption: 203×0.82 = 166.46 thousand klW per inhabitant. Total imported = 8 456 000×166.46 ≈ 1 407 585 760."
    },
    {
      number: 9,
      type: "numerical",
      tableRef: "table_horticulture",
      text: "The average price of tomatoes shrank by 30% from 2003 to 2005, and increased by 6% from 2005 to 2007, up to 5.85 EUR per kg. How many Euros did the total Belgian production of tomatoes in 2003 cost?",
      options: { a: "220.75 million", b: "190.46 million", c: "248.04 million", d: "108.16 million" },
      correct: "a",
      explanation: "2005 price = 5.85/1.06 = 5.52. 2003 price (before the 30% fall) = 5.52/0.70 = 7.88 €/kg. 2003 production (28 million kg) × 7.88 = 220.75 million."
    },
    {
      number: 10,
      type: "numerical",
      tableRef: "table_horticulture",
      text: "Belgian farmers obtained 855 000 Euros for his whole production of potatoes in 2005. In 2007, they obtained 1 687 000 Euros for their whole production. By what percentage did the average price he was paid for every kilogram rise?",
      options: { a: "87.51%", b: "50.68%", c: "97.31%", d: "53.33%" },
      correct: "a",
      explanation: "Price per million kg 2005 = 855 000/287 ≈ 2 979.09. Price per million kg 2007 = 1 687 000/302 ≈ 5 586.09. Increase = (5 586.09−2 979.09)/2 979.09 ≈ 87.51%."
    },
    {
      number: 11,
      type: "numerical",
      tableRef: "table_horticulture",
      text: "Provided that the production of potatoes will remain constant and the production of pumpkins will increase on 3% a year from 2007 on, how many years will pass until the production of pumpkins is bigger than the production of potatoes?",
      options: { a: "3 years", b: "4 years", c: "5 years", d: "6 years" },
      correct: "c",
      explanation: "Pumpkins (268) growing 3% a year: 276.04, 284.32, 292.85, 301.63, 310.68 — after 5 years it exceeds the constant potato production (302)."
    },
    {
      number: 12,
      type: "numerical",
      tableRef: "table_horticulture",
      text: "Germany produced five times as many carrots as Belgium in 2007, and the carrot production was one third of the whole horticultural production. How much was the horticultural production in Germany in 2007 in millions of kg?",
      options: { a: "1148", b: "10 335", c: "9570", d: "1063" },
      correct: "b",
      explanation: "German carrots = 689×5 = 3 445 million kg. That is one third of the total, so total = 3 445×3 = 10 335 million kg."
    },
    {
      number: 13,
      type: "numerical",
      tableRef: "table_tv",
      text: "Which is the combined percentage of spectators of Channel A and Channel C in the mornings and evenings?",
      options: { a: "70.75%", b: "62.64%", c: "30.50%", d: "75.16%" },
      correct: "d",
      explanation: "Total morning+evening viewers = 32 401 964. Channel B's share of that = 8 047 593/32 401 964 ≈ 24.84%. So A+C combined = 100−24.84 ≈ 75.16%."
    },
    {
      number: 14,
      type: "numerical",
      tableRef: "table_tv",
      text: "Last year, Channel C had 1 203 459 more spectators in the afternoon, Channel B has decreased on 2 357 825 and Channel A had the same spectators. What percentage of spectators had Channel B in the afternoon last year?",
      options: { a: "38.34%", b: "57.13%", c: "20.99%", d: "31.30%" },
      correct: "a",
      explanation: "Last year: C = 5 528 832+1 203 459 = 6 732 291; A = 7 368 021 (same); B = 6 412 639+2 357 825 = 8 770 464. Total = 22 870 776. B's share = 8 770 464/22 870 776 ≈ 38.34%."
    },
    {
      number: 15,
      type: "numerical",
      tableRef: "table_tv",
      text: "The total population of the country is 70 000 000. 42 000 000 of them are aged under 45. One fifth of them watch TV in the evenings, and 70% among them watches Channel A. What percentage of people over 45 watches the same Channel at that time?",
      options: { a: "31.04%", b: "9.45%", c: "14.93%", d: "4.59%" },
      correct: "b",
      explanation: "Under-45 evening viewers = 42M/5 = 8.4M, of which 70% watch A = 5.88M. Over-45 viewers of A = 8 526 794−5 880 000 = 2 646 794. Over-45 population = 70M−42M = 28M. Share = 2 646 794/28 000 000 ≈ 9.45%."
    },
    {
      number: 16,
      type: "numerical",
      tableRef: "table_tv",
      text: "If Channel B lost 1 000 000 watchers in favour of Channel A and 40% of that amount of watchers in favour of Channel C in the whole day, by what percentage would the percentage of total watchers of Channel B decrease?",
      options: { a: "9.68%", b: "46.91%", c: "55.85%", d: "8.35%" },
      correct: "a",
      explanation: "Channel B's total daily viewers = 14 460 232. Losses = 1 000 000+400 000 = 1 400 000. Decrease = 1 400 000/14 460 232 ≈ 9.68%."
    },
    {
      number: 17,
      type: "numerical",
      tableRef: "table_alcohol",
      text: "Total consumption of alcohol in Spain was three times bigger as consumption in Italy. What was the proportion of wine consumed in Spain compared to spirits consumed in Italy?",
      options: { a: "2:1", b: "6:1", c: "3:1", d: "2:3" },
      correct: "b",
      explanation: "Using imaginary units: Italy = 100, Spain = 300. Spirits in Italy = 21% of 100 = 21. Wine in Spain = 42% of 300 = 126. Ratio 126:21 = 6:1."
    },
    {
      number: 18,
      type: "numerical",
      tableRef: "table_alcohol",
      text: "1 litre of beer is 20% cheaper as 1 litre of wine in Germany. The total amount of money paid for wine in Germany was 38 397 086 Euros. How much more Euros were paid for beer?",
      options: { a: "16 455 894", b: "115 797 658.24", c: "92 153 006.4", d: "23 696 487.36" },
      correct: "c",
      explanation: "Using 100 imaginary units: wine=16, beer=68. Price per unit of wine = 38 397 086/16 ≈ 2 399 817.87. Beer price per unit = 80% of that ≈ 1 919 854.3. Total paid for beer = 1 919 854.3×68 ≈ 130 550 092.4. Difference vs wine = 130 550 092.4−38 397 086 ≈ 92 153 006.4."
    },
    {
      number: 19,
      type: "numerical",
      tableRef: "table_alcohol",
      text: "In Spain, the female population only consumes 43% of all consumed alcohol. The total consumption of alcohol amounted to 453 269 874 litres. How many litres beer did Spanish males drink?",
      options: { a: "60 420 874.2", b: "80 092 786.74", c: "194 906 045.8", d: "8 334 317" },
      correct: "b",
      explanation: "Male consumption = 57% of 453 269 874 ≈ 258 363 828.18 litres. Beer share (31%) of that ≈ 80 092 786.74 litres."
    },
    {
      number: 20,
      type: "numerical",
      tableRef: "table_alcohol",
      text: "Total consumption of alcohol in these countries has increased on 2% yearly for the last five years. In 2005, 450 000 litres of alcohol were drunk in Italy. How many litres wine were drunk there in 2003?",
      options: { a: "229 320", b: "211 680", c: "432 180", d: "211 937.71" },
      correct: "d",
      explanation: "2004 = 450 000/1.02 ≈ 441 176.47. 2003 = 441 176.47/1.02 ≈ 432 525.95. Wine (49% in Italy) = 432 525.95×0.49 ≈ 211 937.71."
    },
    {
      number: 21,
      type: "numerical",
      tableRef: "table_airlines",
      text: "How smaller was the average turnover of every plane in the Company D than in the company C?",
      options: { a: "8 111 300", b: "115 313.23", c: "139 850", d: "146 672.99" },
      correct: "d",
      explanation: "Average turnover per plane: Company D = 4 526 984/68 ≈ 66 573.29; Company C = 12 368 284/58 ≈ 213 246.28. Difference ≈ 146 672.99."
    },
    {
      number: 22,
      type: "numerical",
      tableRef: "table_airlines",
      text: "Company B has two types of planes, Boeing and Tupolev. The average flights of the Boeing lasted five times longer as the flights of the Tupolev. How many hours lasted the flights of the Boeing?",
      options: { a: "172.6", b: "143.83", c: "690.4", d: "719.17" },
      correct: "d",
      explanation: "Company B's 863 flight hours split 5:1 between Boeing and Tupolev. Boeing = 863×(5/6) ≈ 719.17 hours."
    },
    {
      number: 23,
      type: "numerical",
      tableRef: "table_airlines",
      text: "The turnover of company A has increased on 35% since 2000, but the hours of flight have been reduced in one quarter. How much more Euros does Company A for every hour of flight than in 2000?",
      options: { a: "325.33", b: "634.38", c: "1171.17", d: "97.5" },
      correct: "a",
      explanation: "2000 turnover = 17 258 638/1.35 ≈ 12 784 176.29. 2000 hours = 23 578/0.75 ≈ 31 437.33. 2000 rate ≈ 406.65 €/hour. 2006 rate = 17 258 638/23 578 ≈ 731.98 €/hour. Difference ≈ 325.33."
    },
    {
      number: 24,
      type: "numerical",
      tableRef: "table_airlines",
      text: "If the turnover for every plane remains constant in Companies B and C, how many more planes would Company B need to surpass the total turnover of Company C?",
      options: { a: "1", b: "28", c: "80", d: "57" },
      correct: "d",
      explanation: "Company B's turnover per plane = 3 568 357/23 ≈ 155 145.95. Planes needed to reach Company C's turnover = 12 368 284/155 145.95 ≈ 79.72 → 80 planes. Additional planes needed = 80−23 = 57."
    },
    {
      number: 25,
      type: "numerical",
      tableRef: "table_school",
      text: "From 1990 to 2010, 1200 new schools were created in Poland. In what percentage did the ratio of pupils per school change, provided that there were 69000 schools in Poland in 1990?",
      options: { a: "It increased by about 10%", b: "It decreased by 5%", c: "It almost didn't change", d: "It decreased by 20%" },
      correct: "c",
      explanation: "1990: (8 536 000+9 528 000)/69 000 ≈ 261.8 pupils/school. 2010: (9 032 000+9 358 000)/70 200 ≈ 261.96 pupils/school. Virtually unchanged."
    },
    {
      number: 26,
      type: "numerical",
      tableRef: "table_school",
      text: "After 2010, the number of males in the primary school in Bulgaria is going to increase on 2% a year, while the number of males in the primary school in Poland will remain constant. How many years have to pass until the number of males in Bulgaria reaches 30% of the number of females in Poland?",
      options: { a: "2 years", b: "3 years", c: "4 years", d: "5 years" },
      correct: "b",
      explanation: "Target = 30% of Poland females 2010 (9 358 000) = 2 807 400. Bulgaria males (2 657 000) growing 2%/year: 2 710 140, 2 764 342.8, 2 819 629.65 — exceeds target after 3 years."
    },
    {
      number: 27,
      type: "numerical",
      tableRef: "table_school",
      text: "The budget for primary school in Slovakia has shrunk to one fifth from 1990 to 2000, and in 12% from 2000 to 2010. In 2010, the budget per pupil was 5 Euros. How big was the total budget for primary school in 1990?",
      options: { a: "16 798 000 Euros", b: "64 488 637 Euros", c: "34 635 700 Euros", d: "58 974 300 Euros" },
      correct: "b",
      explanation: "2010 pupils = 1 003 000+1 267 000 = 2 270 000; 2010 budget = 2 270 000×5 = 11 350 000 €. That is 88% of 2000's budget: 11 350 000/0.88 ≈ 12 897 727.27. 2000 budget was one fifth of 1990's: 1990 budget ≈ 12 897 727.27×5 ≈ 64 488 637."
    },
    {
      number: 28,
      type: "numerical",
      tableRef: "table_school",
      text: "Until 2000, male and female pupils in the primary schools in Romania attended different classrooms. For the females, there was a classroom for every 20 pupils and for the male pupils, a classroom for every 18. The average of pupils per classroom after they started to share the same classrooms is 22. How many more classrooms are there in 2010 than there were in 2000?",
      options: { a: "3842", b: "17469", c: "5630", d: "14730" },
      correct: "a",
      explanation: "2000: female classrooms = 2 269 000/20 = 113 450; male classrooms = 2 653 000/18 ≈ 147 388. Total 2000 ≈ 260 839. 2010 pupils = 2 841 000+2 982 000 = 5 823 000, in classrooms of 22: 5 823 000/22 ≈ 264 682. Difference ≈ 3 842."
    },
    {
      number: 29,
      type: "numerical",
      tableRef: "table_swineflu",
      text: "The cases of swine flu decreased on 18% in the group of age of 45-60 years from 2008 to 2009 in all those countries combined, but in that group of age there were 147 more cases in Slovenia, 232 less cases in Germany and the same cases in Sweden and Spain. How many cases were there in Ireland?",
      options: { a: "243", b: "105", c: "381", d: "138" },
      correct: "b",
      explanation: "2008 total (45-60) = 389+296+420+35+392 = 1 532. 2009 total = 1 532×0.82 ≈ 1 256. Sweden 389, Spain 392, Germany 420−232=188, Slovenia 35+147=182. Sum = 1 151. Ireland = 1 256−1 151 = 105."
    },
    {
      number: 30,
      type: "numerical",
      tableRef: "table_swineflu",
      text: "In the group of age of 16 to 30 years, only 17% of the total patients were women in 2008, but in 2009 there were 45 cases more by women in all those countries, while the total cases decreased on 5%. How many cases were there by men in 2009?",
      options: { a: "1823", b: "1342", c: "1534", d: "1519" },
      correct: "b",
      explanation: "2008 total (16-30) = 235+321+624+20+578 = 1 778, women = 17% ≈ 302. 2009 total = 1 778×0.95 ≈ 1 689. 2009 women = 302+45 = 347. 2009 men = 1 689−347 = 1 342."
    },
    {
      number: 31,
      type: "numerical",
      tableRef: "table_swineflu",
      text: "The healing of every person infected by swine flu has a cost of 50 Euros in Germany. However, this cost is 7 Euros bigger by people over 60 years and 5 Euros bigger by people under 15 years. How much does the healing of a patient of 16 to 60 years cost?",
      options: { a: "48.27 Euros", b: "44 Euros", c: "49.27 Euros", d: "50 Euros" },
      correct: "a",
      explanation: "Germany total cases = 359+624+658+420+163 = 2 224, base cost 2 224×50 = 111 200 €. Over-60 cost = 163×57 = 9 291 €. Under-15 cost = 359×55 = 19 745 €. Remaining (16-60) cost = 111 200−9 291−19 745 = 82 164 €, for 2 224−522=1 702 patients. Average = 82 164/1 702 ≈ 48.27 €."
    },
    {
      number: 32,
      type: "numerical",
      tableRef: "table_swineflu",
      text: "In the group age of 16 to 30 years, those countries combine for a 55% of all cases in Europe. What percentage of all European cases belongs to Germans between 16 and 30 years?",
      options: { a: "19.30%", b: "10.61%", c: "37.83%", d: "20.80%" },
      correct: "a",
      explanation: "These countries' 16-30 total (1 778) is 55% of Europe: European total = 1 778/0.55 ≈ 3 233. Germany's share = 624/3 233 ≈ 19.30%."
    },
    {
      number: 33,
      type: "numerical",
      tableRef: "table_houses",
      text: "How bigger was the percentage of apartments bought in 2005 compared with 2000?",
      options: { a: "28.72%", b: "36.91%", c: "35.26%", d: "137%" },
      correct: "b",
      explanation: "2000 apartments total = 728+133+840 = 1 701 thousand. 2005 total = 925+583+821 = 2 329 thousand. Increase = (2 329−1 701)/1 701 ≈ 36.91%."
    },
    {
      number: 34,
      type: "numerical",
      tableRef: "table_houses",
      text: "What was the ratio of houses bought in 2000 to houses bought in 2005?",
      options: { a: "1:3", b: "2:3", c: "3:4", d: "1:4" },
      correct: "c",
      explanation: "2000 houses total = 275+138+829 = 1 242 thousand. 2005 total = 530+274+852 = 1 656 thousand. Ratio 1 242:1 656 = 3:4."
    },
    {
      number: 35,
      type: "numerical",
      tableRef: "table_houses",
      text: "From 1999 to 2000, the amount of houses bought in Belgium fell on 10%. This amount made for 80% of all houses built that year. How many houses were built in Belgium in 1999?",
      options: { a: "200 327", b: "191 666", c: "127 398", d: "100 035" },
      correct: "b",
      explanation: "2000 sales (138 000) is 90% of 1999's: 1999 sales = 138 000/0.9 ≈ 153 333. That figure is 80% of all houses built: 153 333/0.8 ≈ 191 666."
    }
  ]
});
