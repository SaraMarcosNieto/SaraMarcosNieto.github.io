window.TESTS = window.TESTS || [];

window.TESTS.push({
  id: "RVNEN7-N",
  title: "RVNEN7 · Numerical Reasoning — AST Sample Test (EN)",
  defaultTimer: 20,
  sections: [
    {
      title: "Books published in Estonia",
      instruction: "Questions 1–2 refer to the following table.",
      questionRange: { start: 1, end: 2 }
    },
    {
      title: "Internet in schools in the EU (2001)",
      instruction: "Questions 3–4 refer to the following table.",
      questionRange: { start: 3, end: 4 }
    },
    {
      title: "Deaths due to tobacco in Switzerland (1997)",
      instruction: "Questions 5–6 refer to the following table.",
      questionRange: { start: 5, end: 6 }
    },
    {
      title: "Agricultural holdings by type of farming",
      instruction: "Questions 7–9 refer to the following table.",
      questionRange: { start: 7, end: 9 }
    },
    {
      title: "Fishery products purchased in a Spanish seaside town (2002)",
      instruction: "Questions 10–11 refer to the following table.",
      questionRange: { start: 10, end: 11 }
    },
    {
      title: "Road density in EU-15 (km/1 000 km²)",
      instruction: "Questions 12–13 refer to the following table.",
      questionRange: { start: 12, end: 13 }
    },
    {
      title: "Animals ('000) used for experimental purposes in EU Member States (1999)",
      instruction: "Questions 14–15 refer to the following table.",
      questionRange: { start: 14, end: 15 }
    },
    {
      title: "Prison population in France",
      instruction: "Questions 16–18 refer to the following table.",
      questionRange: { start: 16, end: 18 }
    },
    {
      title: "EU-China trade in raw materials and manufactured products (€ million)",
      instruction: "Questions 19–20 refer to the following table.",
      questionRange: { start: 19, end: 20 }
    }
  ],
  tables: {
    table_books: {
      title: "Number of books published in Estonia",
      headers: ["Year", "Total", "Philosophy & Psychology", "Religion", "Social sciences", "Exact sciences", "Applied sciences", "Art", "History"],
      rows: [
        ["1995", "1 629", "86", "74", "432", "195", "546", "176", "120"],
        ["1996", "1 570", "100", "99", "571", "187", "341", "176", "96"],
        ["1997", "2 100", "110", "109", "798", "273", "441", "223", "146"],
        ["1998", "1 735", "99", "90", "365", "285", "567", "177", "152"],
        ["1999", "1 806", "86", "99", "463", "274", "519", "186", "179"]
      ]
    },
    table_internet: {
      title: "Internet in schools in the European Union (2001)",
      headers: ["Country", "Computers/100 pupils (Primary)", "Computers/100 pupils (Secondary)", "% schools with Internet (Primary)", "% schools with Internet (Secondary)", "Computers with Internet/100 pupils (Primary)", "Computers with Internet/100 pupils (Secondary)"],
      rows: [
        ["EU-15",    "6.8",  "11.3", "59", "89",  "2.8",  "6.4"],
        ["Belgium",  "9",    "12.4", "70", "95",  "2.7",  "6.4"],
        ["Denmark",  "23.5", "66.9", "95", "100", "11.3", "30"],
        ["Greece",   "1.5",  "6",    "1",  "18",  "0.7",  "1.7"],
        ["France",   "6.4",  "10.5", "30", "84",  "2.1",  "4.5"],
        ["Ireland",  "3.25", "12.1", "80", "90",  "2.7",  "6.1"],
        ["Portugal", "3.8",  "5.7",  "42", "100", "1.1",  "2.5"],
        ["Finland",  "13.4", "14.8", "90", "95",  "9.2",  "13.6"]
      ]
    },
    table_tobacco: {
      title: "Deaths due to tobacco in Switzerland (1997)",
      headers: ["Cause", "Deaths (Men)", "% of all deaths (Men)", "Deaths (Women)", "% of all deaths (Women)"],
      rows: [
        ["Diseases of the respiratory system", "1 300", "4.0%", "450",   "1.5%"],
        ["Diseases of the circulatory system", "2 275", "7.0%", "1 200", "4.0%"],
        ["Cancer",                             "2 600", "8.0%", "600",   "2.0%"],
        ["Other",                              "325",   "1.0%", "150",   "0.5%"],
        ["Total deaths due to tobacco",        "6 500", "",     "2 400", ""],
        ["Total deaths (from all causes)",     "32 500","",     "30 000",""]
      ]
    },
    table_agriculture: {
      title: "Agricultural holdings by type of farming",
      headers: ["Type of farming", "1988 ('000)", "1988 (%)", "2000 ('000)", "2000 (%)"],
      rows: [
        ["Cereals (wheat, rice, oats, etc.)",           "180", "18.00", "136", "17.00"],
        ["Cattle (dairy breeds)",                        "170", "17.00", "72",  "9.00"],
        ["Cattle (beef breeds)",                         "90",  "9.00",  "80",  "10.00"],
        ["Mixed cattle (dual-purpose breeds)",           "15",  "1.50",  "10",  "1.25"],
        ["Sheep",                                        "105", "10.50", "84",  "10.50"],
        ["Pigs and poultry",                             "27",  "2.70",  "22",  "2.75"],
        ["Mixed cropping and mixed livestock production","256", "25.60", "268", "33.50"],
        ["Other crops: wine-growing, horticulture",      "157", "15.70", "128", "16.00"],
        ["Total",                                        "1 000","100.00","800","100.00"]
      ]
    },
    table_fishery: {
      title: "Fishery products purchased in a Spanish seaside town (2002)",
      headers: ["Product", "Households (tonnes)", "Hotels and restaurants (tonnes)", "Institutions (tonnes)", "Total quantity purchased (tonnes)", "Total per capita (kg)"],
      rows: [
        ["Total fishery products",      "1 120", "330", "50", "1 500", "37.50"],
        ["Total fresh and frozen fish", "680",   "135", "35", "850",   "21.25"],
        ["Fresh fish",                  "560",   "105", "5",  "670",   "16.75"],
        ["Frozen fish",                 "120",   "30",  "30", "180",   "4.50"],
        ["Tinned fish",                 "160",   "45",  "5",  "210",   "5.25"],
        ["Shellfish",                   "280",   "150", "10", "440",   "11.00"]
      ]
    },
    table_roads: {
      title: "Road density in EU-15 (km/1 000 km²)",
      headers: ["Year", "EU-15", "Country A", "Country B", "Country C", "Country D", "Country E"],
      rows: [
        ["1980", "340", "180", "360", "90",  "216", "120"],
        ["2000", "390", "195", "450", "120", "270", "130"]
      ]
    },
    table_animals: {
      title: "Animals ('000) used for experimental purposes in EU Member States (1999)",
      headers: ["Category", "Belgium", "Denmark", "Germany", "France", "EU-15"],
      rows: [
        ["Mice",                  "432", "160", "775",   "1 550", "5 400"],
        ["Rats",                  "167", "85",  "405",   "460",   "2 610"],
        ["Cold-blooded creatures","65",  "29",  "180",   "30",    "650"],
        ["Birds",                 "20",  "5",   "90",    "85",    "450"],
        ["Rabbits",               "21",  "7",   "60",    "50",    "228"],
        ["Others",                "85",  "64",  "90",    "125",   "462"],
        ["Total",                 "790", "350", "1 600", "2 300", "9 800"]
      ]
    },
    table_prison: {
      title: "Prison population in France",
      headers: ["", "Convicts", "Remand prisoners", "Male", "Female", "< 18 years", "18–25 years", "25–30 years", "30–40 years", "≥ 40 years"],
      rows: [
        ["July 2001",          "34 925", "14 875", "47 310", "2 490", "996",   "11 454", "7 470",  "12 450", "17 430"],
        ["Change since Jul 2000", "+0.6%", "−15%", "−4.3%",  "",     "−9.9%", "−3.8%",  "−3.5%",  "−8.9%",  "−5.3%"]
      ]
    },
    table_eutrade: {
      title: "EU-China trade in raw materials and manufactured products (€ million)",
      headers: ["Category", "Exports 1999", "Exports 2003", "Imports 1999", "Imports 2003", "Balance 1999", "Balance 2003"],
      rows: [
        ["Raw materials",       "1 575",  "2 250",  "2 700",  "3 980",   "−1 125",  "−1 730"],
        ["  Food products",     "360",    "530",    "1 200",  "1 800",   "−840",    "−1 270"],
        ["  Crude materials",   "1 000",  "1 600",  "1 200",  "1 500",   "−200",    "100"],
        ["  Energy",            "215",    "120",    "300",    "680",     "−85",     "−560"],
        ["Manufactured products","17 800","38 000", "50 000", "101 000", "−32 200", "−63 000"],
        ["  Chemical products", "1 700",  "3 400",  "2 000",  "3 700",   "−300",    "−300"],
        ["  Machinery and vehicles","13 000","26 600","18 000","46 300", "−5 000",  "−19 700"],
        ["  Other",             "3 100",  "8 000",  "30 000", "51 000",  "−26 900", "−43 000"]
      ]
    }
  },
  questions: [
    {
      number: 1,
      type: "numerical",
      tableRef: "table_books",
      text: "What percentage of all books published in Estonia in 1997 did scientific books (social, exact and applied sciences) account for?",
      options: {
        a: "13%",
        b: "34%",
        c: "70%",
        d: "72%",
        e: "78%"
      },
      correct: "d",
      explanation: "Social + Exact + Applied sciences in 1997 = 798 + 273 + 441 = 1 512. Total = 2 100. 1 512 / 2 100 = 72%."
    },
    {
      number: 2,
      type: "numerical",
      tableRef: "table_books",
      text: "By what percentage did the number of history books published in Estonia fall from 1995 to 1996?",
      options: {
        a: "52%",
        b: "25%",
        c: "24%",
        d: "20%",
        e: "30%"
      },
      correct: "d",
      explanation: "Fall = (120 − 96) / 120 = 24 / 120 = 20%."
    },
    {
      number: 3,
      type: "numerical",
      tableRef: "table_internet",
      text: "In 2001, 1 615 primary schools had Internet connections in Denmark. How many primary schools were there in Denmark?",
      options: {
        a: "1 615",
        b: "1 700",
        c: "1 800",
        d: "2 000",
        e: "2 100"
      },
      correct: "b",
      explanation: "95% of schools had Internet: total = 1 615 / 0.95 = 1 700."
    },
    {
      number: 4,
      type: "numerical",
      tableRef: "table_internet",
      text: "In 2001, 350 000 pupils were enrolled in secondary schools in Portugal. How many computers with Internet connections were there in secondary schools in Portugal in 2001?",
      options: {
        a: "1 400",
        b: "3 850",
        c: "8 750",
        d: "19 950",
        e: "26 500"
      },
      correct: "c",
      explanation: "2.5 computers with Internet per 100 pupils: 3 500 × 2.5 = 8 750."
    },
    {
      number: 5,
      type: "numerical",
      tableRef: "table_tobacco",
      text: "How many deaths not linked to tobacco were there in Switzerland in 1997?",
      options: {
        a: "26 000",
        b: "27 600",
        c: "53 600",
        d: "62 500",
        e: "72 400"
      },
      correct: "c",
      explanation: "Total deaths = 32 500 + 30 000 = 62 500. Tobacco-related = 6 500 + 2 400 = 8 900. Non-tobacco = 62 500 − 8 900 = 53 600."
    },
    {
      number: 6,
      type: "numerical",
      tableRef: "table_tobacco",
      text: "What percentage of deaths linked to tobacco were caused by cancer in men?",
      options: {
        a: "4.0%",
        b: "8.0%",
        c: "12.5%",
        d: "40.0%",
        e: "42.0%"
      },
      correct: "d",
      explanation: "Cancer deaths in men / tobacco deaths in men = 2 600 / 6 500 = 40%."
    },
    {
      number: 7,
      type: "numerical",
      tableRef: "table_agriculture",
      text: "In 2000, how many agricultural holdings were mainly engaged in cattle farming?",
      options: {
        a: "72 000",
        b: "162 000",
        c: "246 000",
        d: "275 000",
        e: "310 000"
      },
      correct: "b",
      explanation: "Cattle (dairy) + Cattle (beef) + Mixed cattle = 72 + 80 + 10 = 162 thousand = 162 000."
    },
    {
      number: 8,
      type: "numerical",
      tableRef: "table_agriculture",
      text: "By what percentage did the number of agricultural holdings mainly engaged in sheep-farming fall between 1988 and 2000?",
      options: {
        a: "0%",
        b: "10.5%",
        c: "20%",
        d: "21%",
        e: "25%"
      },
      correct: "c",
      explanation: "(84 − 105) / 105 = −21 / 105 = −20%."
    },
    {
      number: 9,
      type: "numerical",
      tableRef: "table_agriculture",
      text: "In 1988, 72 000 agricultural holdings grew wheat alone. What percentage of cereal-growing holdings did these wheat-producing farms account for?",
      options: {
        a: "53%",
        b: "40%",
        c: "25%",
        d: "18%",
        e: "30%"
      },
      correct: "b",
      explanation: "72 / 180 = 40%."
    },
    {
      number: 10,
      type: "numerical",
      tableRef: "table_fishery",
      text: "What percentage of fresh and frozen fish did households purchase?",
      options: {
        a: "80%",
        b: "75%",
        c: "60%",
        d: "50%",
        e: "40%"
      },
      correct: "a",
      explanation: "Households purchased 680 out of 850 total fresh and frozen fish: 680 / 850 = 80%."
    },
    {
      number: 11,
      type: "numerical",
      tableRef: "table_fishery",
      text: "What is the population of the town to which the table relates?",
      options: {
        a: "25 000",
        b: "30 000",
        c: "37 500",
        d: "40 000",
        e: "47 000"
      },
      correct: "d",
      explanation: "1 500 tonnes = 1 500 000 kg. Per capita = 37.5 kg. Population = 1 500 000 / 37.5 = 40 000."
    },
    {
      number: 12,
      type: "numerical",
      tableRef: "table_roads",
      text: "Country B has an area of 90 600 km². What was the total length, rounded off to the nearest kilometre, of the roads in country B in 2000?",
      options: {
        a: "20 133 km",
        b: "32 616 km",
        c: "40 770 km",
        d: "73 386 km",
        e: "80 250 km"
      },
      correct: "c",
      explanation: "Road density in 2000 = 450 km/1 000 km². Total = 90.6 × 450 = 40 770 km."
    },
    {
      number: 13,
      type: "numerical",
      tableRef: "table_roads",
      text: "The road density of country D will change proportionately by the same amount between 2000 and 2020 as it did between 1980 and 2000. What will country D's road density be in 2020?",
      options: {
        a: "216 km/1 000 km²",
        b: "291.6 km/1 000 km²",
        c: "337.5 km/1 000 km²",
        d: "486 km/1 000 km²",
        e: "501 km/1 000 km²"
      },
      correct: "c",
      explanation: "Growth 1980–2000: (270 − 216) / 216 = 25%. Applying same growth: 270 × 1.25 = 337.5 km/1 000 km²."
    },
    {
      number: 14,
      type: "numerical",
      tableRef: "table_animals",
      text: "In 1999, what percentage did rabbits and cold-blooded creatures make up of the animals used in laboratories in Germany?",
      options: {
        a: "2%",
        b: "6%",
        c: "15%",
        d: "17%",
        e: "21%"
      },
      correct: "c",
      explanation: "Rabbits + Cold-blooded in Germany = 60 + 180 = 240. Total Germany = 1 600. 240 / 1 600 = 15%."
    },
    {
      number: 15,
      type: "numerical",
      tableRef: "table_animals",
      text: "What percentage of the total number of mice used for experimental purposes in EU-15 laboratories was used in Belgian laboratories?",
      options: {
        a: "4%",
        b: "8%",
        c: "13%",
        d: "54%",
        e: "60%"
      },
      correct: "b",
      explanation: "Belgium mice / EU-15 mice = 432 / 5 400 = 8%."
    },
    {
      number: 16,
      type: "numerical",
      tableRef: "table_prison",
      text: "In July 2001, 20% of the females in prison were less than 25 years old. How many male prisoners less than 25 years old were there in French prisons in July 2001?",
      options: {
        a: "9 960",
        b: "11 952",
        c: "10 956",
        d: "10 458",
        e: "10 906"
      },
      correct: "b",
      explanation: "Female prisoners < 25: 20% × 2 490 = 498. Total prisoners < 25 = 996 + 11 454 = 12 450. Male < 25 = 12 450 − 498 = 11 952."
    },
    {
      number: 17,
      type: "numerical",
      tableRef: "table_prison",
      text: "How many remand prisoners were there in France in July 2000?",
      options: {
        a: "2 230",
        b: "12 640",
        c: "17 100",
        d: "17 500",
        e: "15 320"
      },
      correct: "d",
      explanation: "July 2001 remand = 14 875, which is −15% vs 2000. So 2000 = 14 875 / 0.85 = 17 500."
    },
    {
      number: 18,
      type: "numerical",
      tableRef: "table_prison",
      text: "What percentage of the French prison population was 30 or over in July 2001?",
      options: {
        a: "25%",
        b: "55%",
        c: "60%",
        d: "85.5%",
        e: "90%"
      },
      correct: "c",
      explanation: "Prisoners ≥ 30 = 12 450 + 17 430 = 29 880. Total = 47 310 + 2 490 = 49 800. 29 880 / 49 800 = 60%."
    },
    {
      number: 19,
      type: "numerical",
      tableRef: "table_eutrade",
      text: "What percentage of the manufactured products exported to China from the EU in 2003 did machinery and vehicles account for?",
      options: {
        a: "75%",
        b: "70%",
        c: "14%",
        d: "4%",
        e: "2%"
      },
      correct: "b",
      explanation: "Machinery and vehicles exports 2003 = 26 600 out of 38 000 total manufactured. 26 600 / 38 000 = 70%."
    },
    {
      number: 20,
      type: "numerical",
      tableRef: "table_eutrade",
      text: "Imports of food products from China rose by 150% between 1999 and 2001. How did imports of food products develop between 2001 and 2003?",
      options: {
        a: "Imports of food products stood at the same level in 2001 and 2003",
        b: "Imports of food products fell by 80% between 2001 and 2003",
        c: "Imports of food products fell by 60% between 2001 and 2003",
        d: "Imports of food products fell by 40% between 2001 and 2003",
        e: "Imports of food products fell by 20% between 2001 and 2003"
      },
      correct: "d",
      explanation: "2001 imports = 1 200 × 2.5 = 3 000. 2003 imports = 1 800. Change = (1 800 − 3 000) / 3 000 = −40%. Imports fell by 40%."
    }
  ]
});
