window.TESTS = window.TESTS || [];

window.TESTS.push({
  id: "RVNEN12",
  title: "RVNEN12 · Verbal & Numerical Reasoning — AST Sample Test (EN)",
  defaultTimer: 40,
  sections: [
    {
      title: "International Treaty on plant genetic resources",
      instruction: "Each question consists of a text and four sentences. You have to point out which sentence answers best to the given text. In some cases, a sentence stands total or partially in contradiction with the text, while in other cases it is correct, but not related to the text. Base your answer only on the information provided by the text itself.",
      questionRange: [1, 3]
    },
    {
      title: "Creating new knowledge in nanotechnology",
      instruction: "Questions 4–5 refer to the following passage.",
      questionRange: [4, 5]
    },
    {
      title: "Unemployment in the European Union: full time equivalent jobs (million)",
      instruction: "Questions 6–8 refer to the following table.",
      questionRange: [6, 8]
    },
    {
      title: "The Commission proposes new counter-terrorist measures",
      instruction: "Questions 9–11 refer to the following passage.",
      questionRange: [9, 11]
    },
    {
      title: "The Commission defines an approach for promoting high-quality services of general interest",
      instruction: "Questions 12–14 refer to the following passage.",
      questionRange: [12, 14]
    },
    {
      title: "Proportion of Internet users buying over the web (2001)",
      instruction: "Questions 15–17 refer to the following table.",
      questionRange: [15, 17]
    },
    {
      title: "Influenza and how the EU should respond to a pandemic",
      instruction: "Questions 18–19 refer to the following passage.",
      questionRange: [18, 19]
    },
    {
      title: "Public procurement: infringement of EU regulations",
      instruction: "Questions 20–21 refer to the following passage.",
      questionRange: [20, 21]
    },
    {
      title: "ICT companies in the EU",
      instruction: "Questions 22–24 refer to the following table.",
      questionRange: [22, 24]
    },
    {
      title: "The European Reference Materials (ERM) seal",
      instruction: "Questions 25–26 refer to the following passage.",
      questionRange: [25, 26]
    },
    {
      title: "Newmood: the development of new drugs to treat depression",
      instruction: "Questions 27–29 refer to the following passage.",
      questionRange: [27, 29]
    },
    {
      title: "Causes of death in the EU (1999)",
      instruction: "Questions 30–32 refer to the following table.",
      questionRange: [30, 32]
    },
    {
      title: "The European Union wishes to facilitate trade in food products and agricultural products",
      instruction: "Questions 33–35 refer to the following passage.",
      questionRange: [33, 35]
    },
    {
      title: "Human genetic testing: implications and recommendations",
      instruction: "Questions 36–37 refer to the following passage.",
      questionRange: [36, 37]
    },
    {
      title: "Number of Internet servers per domain (thousands)",
      instruction: "Questions 38–40 refer to the following table.",
      questionRange: [38, 40]
    }
  ],
  tables: {
    table_unemployment: {
      title: "Unemployment in the European Union: full time equivalent jobs (million)",
      headers: ["Year", "Men 15-29", "Men 30-49", "Men 50-64", "Women 15-29", "Women 30-49", "Women 50-64"],
      rows: [
        ["1993", "5.9", "4.8", "4.6", "7.4", "10.4", "6.2"],
        ["2000", "1.7", "2.5", "4.9", "2.6", "8.5", "6.5"]
      ]
    },
    table_internet_purchases: {
      title: "Proportion of Internet users buying over the web (2001)",
      headers: ["Frequency", "EU-15", "Denmark", "Germany", "Spain", "France"],
      rows: [
        ["Very often", "4%", "4%", "4%", "2%", "3%"],
        ["Regularly", "16%", "21%", "25%", "7%", "13%"],
        ["Occasionally", "16%", "13%", "16%", "10%", "11%"],
        ["Never", "63%", "61%", "56%", "80%", "72%"],
        ["Never again*", "1%", "1%", "1%", "1%", "1%"]
      ],
      notes: "*People who have already made a purchase over the web but will never again buy anything else over the web."
    },
    table_ict: {
      title: "ICT companies in the EU",
      headers: ["", "Spain", "France", "Italy", "Portugal"],
      rows: [
        ["Total companies in ICT sector, 1999", "41 100", "70 189", "103 500", "7 600"],
        ["Total companies in ICT sector, 2000", "39 850", "75 300", "112 400", "7 490"],
        ["Computer-equipment manufacturers, 1999", "2 715", "7 500", "14 270", "555"],
        ["Computer-equipment manufacturers, 2000", "2 670", "7 350", "14 600", "515"]
      ]
    },
    table_causes_death: {
      title: "Causes of death in the EU (1999)",
      headers: ["Cause", "Deaths (Men)", "Deaths per 100 000 men", "Deaths (Women)", "Deaths per 100 000 women"],
      rows: [
        ["Cardiovascular diseases", "597 471", "322", "841 158", "444"],
        ["  of which: Infarction", "278 471", "150", "265 230", "140"],
        ["Cancer", "460 000", "248", "413 000", "218"],
        ["Respiratory tract diseases", "155 862", "84", "83 358", "44"],
        ["Diseases due to external causes", "107 619", "58", "41 679", "22"]
      ]
    },
    table_domains: {
      title: "Number of Internet servers per domain (thousands)",
      headers: ["Year", ".be", ".dk", ".de", ".gr", ".es", "Generic domains"],
      rows: [
        ["1999", "350", "340", "1 635", "75", "470", "37 854"],
        ["2000", "280", "336.6", "2 040", "111", "455", "64 731"],
        ["2001", "252", "504.9", "2 430", "140", "539", "87 307"]
      ]
    }
  },
  questions: [
    {
      number: 1,
      type: "verbal",
      text: "The International Treaty is a legally binding legal framework for the use of plant genetic resources and breeding. Parties to the Treaty will have guaranteed access to such resources and share the commercial and other benefits arising from their use. Any public or private research of breeding institution in any country that is a party to the Treaty can demand to receive seeds of crop species covered by the Treaty from a Public institution in any other contracting country, free of charge and not subject to individual bilateral negotiation. Previously, plant breeders had to negotiate on a bilateral basis with the country of origin, in accordance with the Convention on Biological Diversity in force. These conditions were not only costly and time consuming but could also lead to the monopolisation of plant genetic resources.\n\nWhat does an institution have to do to obtain seeds of crop covered by the Treaty?",
      options: {
        a: "It must be officially approved by the Treaty's governing bodies.",
        b: "It must ask for them from an institution in another country which is a party to the Treaty.",
        c: "It must conduct bilateral negotiations with the country of origin of the seeds.",
        d: "It must have the time and the money or a State loan."
      },
      correct: "b",
      explanation: "Institutions can demand seeds free of charge from a public institution in any other contracting country, without bilateral negotiation."
    },
    {
      number: 2,
      type: "verbal",
      text: "The International Treaty is a legally binding legal framework for the use of plant genetic resources and breeding. Parties to the Treaty will have guaranteed access to such resources and share the commercial and other benefits arising from their use. Any public or private research of breeding institution in any country that is a party to the Treaty can demand to receive seeds of crop species covered by the Treaty from a Public institution in any other contracting country, free of charge and not subject to individual bilateral negotiation. Previously, plant breeders had to negotiate on a bilateral basis with the country of origin, in accordance with the Convention on Biological Diversity in force. These conditions were not only costly and time consuming but could also lead to the monopolisation of plant genetic resources.\n\nWhat is one of the consequences of setting up the abovementioned Treaty?",
      options: {
        a: "The end of the monopoly on plant genetic resources",
        b: "More sustainable agriculture",
        c: "The end of competition over plant genetic resources",
        d: "The end of the breeding of plant genetic resources"
      },
      correct: "a",
      explanation: "The previous bilateral negotiation conditions could lead to the monopolisation of plant genetic resources; the Treaty removes those conditions."
    },
    {
      number: 3,
      type: "verbal",
      text: "The International Treaty is a legally binding legal framework for the use of plant genetic resources and breeding. Parties to the Treaty will have guaranteed access to such resources and share the commercial and other benefits arising from their use. Any public or private research of breeding institution in any country that is a party to the Treaty can demand to receive seeds of crop species covered by the Treaty from a Public institution in any other contracting country, free of charge and not subject to individual bilateral negotiation. Previously, plant breeders had to negotiate on a bilateral basis with the country of origin, in accordance with the Convention on Biological Diversity in force. These conditions were not only costly and time consuming but could also lead to the monopolisation of plant genetic resources.\n\nWhat is the advantage of the Treaty for the parties to the Treaty?",
      options: {
        a: "The seeds of crop species will be auctioned and available to everybody.",
        b: "Plant genetic resources from other countries will be accessible without the need for long negotiations.",
        c: "Seeds will be bred more carefully.",
        d: "Plant genetic resources will be greater quality."
      },
      correct: "b",
      explanation: "Obtaining seeds is no longer subject to long bilateral negotiations."
    },
    {
      number: 4,
      type: "verbal",
      text: "The European Commission today adopted an EU strategy to help Europe to become world leader in the rapidly developing field of nanotechnology – the science of infinitely small. Europe has invested early in nanotechnologies R&D and has made valuable progress over the last years. However, without constant and increasing investment in R&D and co-ordination at European level, the EU will not be able to remain internationally competitive. The EU has an excellent knowledge base but it is now investing proportionately less than its main competitors, the USA and Japan. This gap is expected to widen in the next few years if Europe does not take appropriate initiatives. Europe should also capitalise upon its knowledge by transforming R&D into actual applications and products, and thus into wealth and employment.\n\nWhich of these statements about nanotechnology is correct?",
      options: {
        a: "It is a new science, which has only been researched since the 21st century.",
        b: "It is the subject of a strategy to put Europe at the forefront of global research.",
        c: "It remains highly abstract and is difficult to apply correctly.",
        d: "It is greatly hoped that Europe will be able to catch up with this science."
      },
      correct: "b",
      explanation: "The Commission adopted a strategy to help Europe become world leader in nanotechnology."
    },
    {
      number: 5,
      type: "verbal",
      text: "The European Commission today adopted an EU strategy to help Europe to become world leader in the rapidly developing field of nanotechnology – the science of infinitely small. Europe has invested early in nanotechnologies R&D and has made valuable progress over the last years. However, without constant and increasing investment in R&D and co-ordination at European level, the EU will not be able to remain internationally competitive. The EU has an excellent knowledge base but it is now investing proportionately less than its main competitors, the USA and Japan. This gap is expected to widen in the next few years if Europe does not take appropriate initiatives. Europe should also capitalise upon its knowledge by transforming R&D into actual applications and products, and thus into wealth and employment.\n\nWhich of the following statements about nanotechnology is correct?",
      options: {
        a: "Europe is situated between the USA and Japan in terms of research investment.",
        b: "Europe invests less than its two competitors, and it therefore lacks knowledge.",
        c: "The research budgets for nanotechnology are bigger in Europe than in the USA and Japan.",
        d: "European research is advanced but is likely to be overtaken due to lack of investment."
      },
      correct: "b",
      explanation: "Europe has an excellent knowledge base but invests proportionately less than the USA and Japan, and this investment gap is expected to widen."
    },
    {
      number: 6,
      type: "numerical",
      tableRef: "table_unemployment",
      text: "Which of the following groups showed the highest proportional increase in the rate of unemployment between 1993 and 2000?",
      options: {
        a: "Men aged 15 to 29",
        b: "Men aged 50 to 64",
        c: "Women aged 50 to 64",
        d: "Both men and women aged 50 to 64"
      },
      correct: "b",
      explanation: "Men 15-29: (1.7-5.9)/5.9 ≈ -71%. Men 50-64: (4.9-4.6)/4.6 ≈ +6.5%. Women 50-64: (6.5-6.2)/6.2 ≈ +4.8%. Men aged 50 to 64 have the highest proportional increase."
    },
    {
      number: 7,
      type: "numerical",
      tableRef: "table_unemployment",
      text: "If the rate of unemployment among women aged 50-64 falls by 46% between 2000 and 2005, in terms of full-time equivalent jobs, how many women aged between 50 and 64 will be unemployed in 2005?",
      options: {
        a: "2.99 million",
        b: "9.49 million",
        c: "3.51 million",
        d: "2.74 million"
      },
      correct: "c",
      explanation: "If unemployment falls by 46%, 54% remains: 0.54 × 6.5 = 3.51 million."
    },
    {
      number: 8,
      type: "numerical",
      tableRef: "table_unemployment",
      text: "Between 2000 and 2001, the rate of unemployment among men and women changed by the same proportions for each age group. The number of full-time equivalent jobs fell by 250 000 between 2000 and 2001 for men aged 30 to 49. How many full time equivalent jobs (million) were there in 2001 for women aged 30 to 49?",
      options: {
        a: "8.3",
        b: "7.65",
        c: "6.8",
        d: "11.09"
      },
      correct: "b",
      explanation: "The proportional fall for men 30-49 = 0.25/2.5 = 10%. Applying the same 10% fall to women 30-49: 8.5 × (1 − 0.10) = 7.65 million."
    },
    {
      number: 9,
      type: "verbal",
      text: "The Commission proposes new measures to improve the exchange of information in the EU to enable antiterrorist services to do their job more effectively. This initiative also opens the way for a future \"European criminal record\". Information is to be exchanged on all offences, convictions and disqualification linked to terrorism, including any form of financing of terrorist activities. Furthermore the exchange of information will apply to all stages of proceedings, including criminal convictions, which can be very useful in computerised list of persons, groups and entities covered by restrictive measures to combat terrorism or under criminal investigation for terrorist offences. This work will be undertaken in partnership with the private sector and liaison with Europol.\n\nWhich of the following is specifically novel?",
      options: {
        a: "All legal proceedings will henceforth be conducted electronically.",
        b: "Consideration of the budget available before launching a counter-terrorist project.",
        c: "The communication of information about criminal convictions.",
        d: "Exchanges of information between the EU and certain non-EU countries."
      },
      correct: "c",
      explanation: "The initiative opens the way for a future \"European criminal record\", meaning the communication of information about criminal convictions is the novel element."
    },
    {
      number: 10,
      type: "verbal",
      text: "The Commission proposes new measures to improve the exchange of information in the EU to enable antiterrorist services to do their job more effectively. This initiative also opens the way for a future \"European criminal record\". Information is to be exchanged on all offences, convictions and disqualification linked to terrorism, including any form of financing of terrorist activities. Furthermore the exchange of information will apply to all stages of proceedings, including criminal convictions, which can be very useful in computerised list of persons, groups and entities covered by restrictive measures to combat terrorism or under criminal investigation for terrorist offences. This work will be undertaken in partnership with the private sector and liaison with Europol.\n\nWhich statement about the database is correct?",
      options: {
        a: "It will be open to any person suspected of having contacts with terrorist.",
        b: "Banks will be able to consult it to identify links with funding of terrorist activities.",
        c: "It will be a criminal record for banks to track suspicious financial movements.",
        d: "Any individual or group that has been the subject of legal investigations relating to terrorism will be included."
      },
      correct: "d",
      explanation: "Information will be exchanged on all offences, convictions and persons under criminal investigation for terrorist offences."
    },
    {
      number: 11,
      type: "verbal",
      text: "The Commission proposes new measures to improve the exchange of information in the EU to enable antiterrorist services to do their job more effectively. This initiative also opens the way for a future \"European criminal record\". Information is to be exchanged on all offences, convictions and disqualification linked to terrorism, including any form of financing of terrorist activities. Furthermore the exchange of information will apply to all stages of proceedings, including criminal convictions, which can be very useful in computerised list of persons, groups and entities covered by restrictive measures to combat terrorism or under criminal investigation for terrorist offences. This work will be undertaken in partnership with the private sector and liaison with Europol.\n\nWho or what do the new measures proposed by the Commission concern?",
      options: {
        a: "Persons who may have access to data about terrorist networks.",
        b: "The different types of information likely to help in combating terrorism.",
        c: "Protecting the private life of persons suspected of participating in terrorism activities.",
        d: "Persons included in the counter-terrorism network."
      },
      correct: "b",
      explanation: "The Commission proposes new measures to improve the exchange of information in the EU to help antiterrorist services work more effectively."
    },
    {
      number: 12,
      type: "verbal",
      text: "The European Commission has today adopted a White Paper setting out the European Union's approach to fostering the development of high-quality services of general interest. The White Paper develops the main elements of an EU strategy aimed both at ensuring that all citizens and businesses have effective access to a broad range of services of general interest and at improving legal certainty. The commission concludes that at this stage, there is insufficient evidence of the added value of horizontal legislation compared to the existing sector-specific framework. The Commission therefore concludes that is the appropriate not to submit a proposal at this point in time but to re-examine the issue at a later stage. For the time being, the Commission will, as a general rule, pursue and develop its sectoral approach by proposing sector-specific rules that allow account to be taken to the specific requirements and situations in each sector.\n\nWhich of the following statements about services of general interest is correct?",
      options: {
        a: "Rules, which take account of the specific features of each sector, have never existed.",
        b: "They are of high quality but do not have adequate legal certainty.",
        c: "They are only intended for business.",
        d: "The Commission believes that not all citizens and businesses have effective access to them yet."
      },
      correct: "d",
      explanation: "The strategy aims at ensuring that all citizens and businesses have effective access, implying this is not yet the case."
    },
    {
      number: 13,
      type: "verbal",
      text: "The European Commission has today adopted a White Paper setting out the European Union's approach to fostering the development of high-quality services of general interest. The White Paper develops the main elements of an EU strategy aimed both at ensuring that all citizens and businesses have effective access to a broad range of services of general interest and at improving legal certainty. The commission concludes that at this stage, there is insufficient evidence of the added value of horizontal legislation compared to the existing sector-specific framework. The Commission therefore concludes that is the appropriate not to submit a proposal at this point in time but to re-examine the issue at a later stage. For the time being, the Commission will, as a general rule, pursue and develop its sectoral approach by proposing sector-specific rules that allow account to be taken to the specific requirements and situations in each sector.\n\nWhich of the following statements about the White Paper is correct?",
      options: {
        a: "It proposes a list of quality criteria, which are valid for all sectors of services of general interest.",
        b: "It is a collection of legal articles from the criminal law, which focus solely on services of general interest.",
        c: "It describes how the European Union plans to tackle the question of services of general interest.",
        d: "It defines how a sectoral approach could be replaced by horizontal approach."
      },
      correct: "c",
      explanation: "The White Paper sets out the EU's approach to fostering high-quality services of general interest."
    },
    {
      number: 14,
      type: "verbal",
      text: "The European Commission has today adopted a White Paper setting out the European Union's approach to fostering the development of high-quality services of general interest. The White Paper develops the main elements of an EU strategy aimed both at ensuring that all citizens and businesses have effective access to a broad range of services of general interest and at improving legal certainty. The commission concludes that at this stage, there is insufficient evidence of the added value of horizontal legislation compared to the existing sector-specific framework. The Commission therefore concludes that is the appropriate not to submit a proposal at this point in time but to re-examine the issue at a later stage. For the time being, the Commission will, as a general rule, pursue and develop its sectoral approach by proposing sector-specific rules that allow account to be taken to the specific requirements and situations in each sector.\n\nWhat will the Commission consider at a later stage?",
      options: {
        a: "The potential added value of a horizontal approach compared with the present approach.",
        b: "The need to define specific rules for each sector of services of general interest.",
        c: "The need to transform existing services of general interest into specific services for each sector.",
        d: "The need to replace general sectoral services by vertical services."
      },
      correct: "a",
      explanation: "The Commission will re-examine, at a later stage, the potential added value of horizontal legislation compared to the current sector-specific framework."
    },
    {
      number: 15,
      type: "numerical",
      tableRef: "table_internet_purchases",
      text: "What proportion of Internet users in France have already made purchases over the web?",
      options: {
        a: "14%",
        b: "27%",
        c: "28%",
        d: "100%"
      },
      correct: "c",
      explanation: "In France, 72% never bought over the web. Those who have already bought = 100% − 72% = 28%."
    },
    {
      number: 16,
      type: "numerical",
      tableRef: "table_internet_purchases",
      text: "The number of Internet users in Spain was 7 400 000 in 2001 and increased by 8% between 2001 and 2002. The proportion of Internet users in Spain who occasionally or very often made purchases over the web remained unchanged between 2001 and 2002. In 2002, how many Internet users in Spain occasionally or very often made purchases over the web?",
      options: {
        a: "799 200",
        b: "863 136",
        c: "888 000",
        d: "959 040"
      },
      correct: "d",
      explanation: "Internet users in 2002 = 7 400 000 × 1.08 = 7 992 000. Occasionally (10%) + very often (2%) = 12%. 7 992 000 × 0.12 = 959 040."
    },
    {
      number: 17,
      type: "numerical",
      tableRef: "table_internet_purchases",
      text: "In 2001, Germany had 31 500 000 Internet users. At that time EU-15 had 73.5 million Internet users who had never bought anything over the web. What proportion of Internet users in EU-15 who have never bought anything over the web did Germany account for?",
      options: {
        a: "24%",
        b: "26%",
        c: "29%",
        d: "89%"
      },
      correct: "a",
      explanation: "Germans who never bought online = 56% × 31 500 000 = 17 640 000. Proportion of EU-15 total = 17 640 000 / 73 500 000 = 24%."
    },
    {
      number: 18,
      type: "verbal",
      text: "During the 20th century influenza pandemics, global outbreaks causing a high number of deaths occurred about once every 25 years. The Commission's documents explain the stages of influenza pandemic and sets out objectives for action. Moreover, it outlines the role of the Commission and EU Members States in planning to deal with pandemics and defines key actions in the main areas and each of these stages. The document also proposes areas where enhanced EU cooperation would clearly add value, including the creation of a EU network of reference laboratories for human influenza (an EU network for avian influenza already exists). The importance of the EU's existing early warning and response system for infectious diseases is emphasised, as is the initiative to create a fast track approval mechanism for vaccines.\n\nWhich of the following is one of the Commission's aims with this document?",
      options: {
        a: "To develop a faster way of approving vaccines.",
        b: "To devise faster and less costly research methods.",
        c: "To develop drugs for use worldwide.",
        d: "To create a research network which will be reactivated every twenty-five years."
      },
      correct: "a",
      explanation: "The document includes the initiative to create a fast track approval mechanism for vaccines."
    },
    {
      number: 19,
      type: "verbal",
      text: "During the 20th century influenza pandemics, global outbreaks causing a high number of deaths occurred about once every 25 years. The Commission's documents explain the stages of influenza pandemic and sets out objectives for action. Moreover, it outlines the role of the Commission and EU Members States in planning to deal with pandemics and defines key actions in the main areas and each of these stages. The document also proposes areas where enhanced EU cooperation would clearly add value, including the creation of a EU network of reference laboratories for human influenza (an EU network for avian influenza already exists). The importance of the EU's existing early warning and response system for infectious diseases is emphasised, as is the initiative to create a fast track approval mechanism for vaccines.\n\nWhich of the following is covered by the Commission's document?",
      options: {
        a: "Faster approval of vaccines for avian influenza.",
        b: "A list of research areas, which will receive financial assistance.",
        c: "Definition of the main national actions to be carried out in the event of influenza pandemic.",
        d: "Drawing up a list of laboratories which citizens with influenza may contact."
      },
      correct: "c",
      explanation: "The document explains the stages of an influenza pandemic and defines key actions to be taken in each stage."
    },
    {
      number: 20,
      type: "verbal",
      text: "EU public procurement law aims to ensure that all European companies have a fair chance to get public contracts. Open and transparent procedures mean more competition, stronger safeguards against corruption, better service and value for money for taxpayers and, ultimately, a more competitive Europe. The existing EU public procurement directives have increased cross-border competition in procurement markets and reduced by around 30% the prices paid by public authorities for goods and services. For example, the European Court of Justice stipulates that Member States are required to set up review procedures permitting a decision awarding a public procurement contract to be suspended or annulled at a stage where the infringement can still be rectified.\n\nWhich of the following statements is correct?",
      options: {
        a: "When a procurement contract is awarded, it can be annulled if the situation is still reversible.",
        b: "The directives in this field stipulate that price is the sole criterion for the award of a procurement contract.",
        c: "The increase in competition is likely to reduce the quality of services provided.",
        d: "Europe is more competitive because it obliges European companies to work together."
      },
      correct: "a",
      explanation: "Member States must set up review procedures allowing a contract award to be suspended or annulled while the infringement can still be rectified."
    },
    {
      number: 21,
      type: "verbal",
      text: "EU public procurement law aims to ensure that all European companies have a fair chance to get public contracts. Open and transparent procedures mean more competition, stronger safeguards against corruption, better service and value for money for taxpayers and, ultimately, a more competitive Europe. The existing EU public procurement directives have increased cross-border competition in procurement markets and reduced by around 30% the prices paid by public authorities for goods and services. For example, the European Court of Justice stipulates that Member States are required to set up review procedures permitting a decision awarding a public procurement contract to be suspended or annulled at a stage where the infringement can still be rectified.\n\nWhat have public procurement regulations made possible so far?",
      options: {
        a: "A 30% reduction in the number of tenders launched on the market.",
        b: "An increase in the price of tenders awarded.",
        c: "Allowing companies in the Member States to respond to tenders.",
        d: "Working companies worldwide and in the same market."
      },
      correct: "c",
      explanation: "The directives increased cross-border competition, giving companies across Member States a fair chance to get public contracts."
    },
    {
      number: 22,
      type: "numerical",
      tableRef: "table_ict",
      text: "In 2000, in which of the following countries was the proportion of manufacturers of computer equipment among companies in the ICT sector highest?",
      options: {
        a: "Spain",
        b: "France",
        c: "Italy",
        d: "Portugal"
      },
      correct: "c",
      explanation: "2000 proportions: Spain 2 670/39 850≈6.7%; France 7 350/75 300≈9.7%; Italy 14 600/112 400≈13.0%; Portugal 515/7 490≈6.9%. Italy is highest."
    },
    {
      number: 23,
      type: "numerical",
      tableRef: "table_ict",
      text: "The number of manufacturers of computer equipment in the ICT sector in France fell by the same proportion between 1999 and 2000 and between 2000 and 2001. In 2001, how many manufacturers of computer equipment did France have in the ICT sector?",
      options: {
        a: "7 200",
        b: "7 203",
        c: "7 347",
        d: "7 350"
      },
      correct: "b",
      explanation: "Rate of decrease 1999→2000: (7 350−7 500)/7 350 ≈ −2%. Applying the same rate: 7 350 × (1−0.02) = 7 203."
    },
    {
      number: 24,
      type: "numerical",
      tableRef: "table_ict",
      text: "Which statement is incorrect?",
      options: {
        a: "Compared with the total number of companies in the ICT sector, the number of manufacturers of computer equipment in Italy fell between 1999 and 2000.",
        b: "In Spain, while the number of workers in the ICT sector did not change between 1999 and 2000, the average number of workers per company in the ICT sector fell.",
        c: "In 2000, France had more than 10 times more companies in the ICT sector than Portugal.",
        d: "In 1999, more than one-tenth of all companies in the ICT sector in France were manufacturers of computer equipment."
      },
      correct: "b",
      explanation: "Statement B is incorrect: since the total number of companies in Spain's ICT sector fell between 1999 and 2000, it cannot be assumed the number of workers stayed the same. The other statements check out against the table."
    },
    {
      number: 25,
      type: "verbal",
      text: "The European Reference Materials (EMR) seal will provide a quality assured system for measuring chemicals and biological element in food and other products. The ERM trademark will help boost public confidence by ensuring European measurements are based on reliable reference materials. Different kinds of metals and alloys will also be introduced as certified reference materials. Two of the newest materials that fulfil the ERM quality criteria are based on the alloys used for the protection of the new Euro coins. Compliance with the legal specifications for these alloys is essential for the detection of counterfeit coins and the identification of coins in vending machines. The reference materials are thus important instruments for coin producers to ensure the quality of their products and the accuracy of their specifications.\n\nWhat is the overall purpose of the ERM initiative?",
      options: {
        a: "To diversify European and international systems of measurement.",
        b: "To apply uniform and standard norms regarding quality throughout Europe.",
        c: "To allow only the use of the most precious metals in the Member States and to prohibit others.",
        d: "To replace notes by coins in vending machines."
      },
      correct: "b",
      explanation: "The ERM seal provides a quality-assured system for measuring elements in food and other products, boosting confidence through reliable, standardised reference materials."
    },
    {
      number: 26,
      type: "verbal",
      text: "The European Reference Materials (EMR) seal will provide a quality assured system for measuring chemicals and biological element in food and other products. The ERM trademark will help boost public confidence by ensuring European measurements are based on reliable reference materials. Different kinds of metals and alloys will also be introduced as certified reference materials. Two of the newest materials that fulfil the ERM quality criteria are based on the alloys used for the protection of the new Euro coins. Compliance with the legal specifications for these alloys is essential for the detection of counterfeit coins and the identification of coins in vending machines. The reference materials are thus important instruments for coin producers to ensure the quality of their products and the accuracy of their specifications.\n\nWhat potential purpose could the ERM seal serve?",
      options: {
        a: "To identify in which State Euro coins are made.",
        b: "To recognise counterfeit Euro coins from the quality of minting.",
        c: "To distinguish counterfeit Euro coins from genuine coins by examining the elements from which they are made.",
        d: "To detect Euro coins made from alloys specific to certain countries."
      },
      correct: "c",
      explanation: "Compliance with the alloy specifications is essential for the detection of counterfeit coins, i.e. distinguishing them by their material composition."
    },
    {
      number: 27,
      type: "verbal",
      text: "120 million people worldwide suffer from depression. A EU-funded research project launched recently will help to uncover the genetic factors linked to depression to develop new drug treatments. The project, named Newmood, has received several million Euros in funding and aims to identify genes involved in triggering depression. The results of the project will help researchers to develop new drugs over the next five years to treat it and improve understanding of the causes. The drugs are set to revolutionise anti depressant drugs, which have not changed much over the past 30 years. Researchers will develop a microchip carrying 800 genes to test which ones are active in healthy and depressed animals and humans.\n\nHow will it be possible to identify the genes involved in triggering depression?",
      options: {
        a: "By means of drugs developed by researchers over the past 30 years.",
        b: "By experimenting with a microchip in healthy and sick subjects.",
        c: "By incorporating a gene-bearing microchip into antidepressant drugs.",
        d: "By artificially triggering depression in healthy and sick test subjects."
      },
      correct: "b",
      explanation: "Researchers will develop a microchip carrying 800 genes to test which ones are active in healthy and depressed animals and humans."
    },
    {
      number: 28,
      type: "verbal",
      text: "120 million people worldwide suffer from depression. A EU-funded research project launched recently will help to uncover the genetic factors linked to depression to develop new drug treatments. The project, named Newmood, has received several million Euros in funding and aims to identify genes involved in triggering depression. The results of the project will help researchers to develop new drugs over the next five years to treat it and improve understanding of the causes. The drugs are set to revolutionise anti depressant drugs, which have not changed much over the past 30 years. Researchers will develop a microchip carrying 800 genes to test which ones are active in healthy and depressed animals and humans.\n\nWhat will be made possible by the Newmood project?",
      options: {
        a: "To identify the genes responsible for depression in order to eliminate them.",
        b: "To eliminate the 800 genes involved in nervous depression.",
        c: "To develop drugs, which will take account of the genes, involved in the origins of depression.",
        d: "To develop microchips which will eliminate depression by attacking its causes."
      },
      correct: "c",
      explanation: "The project's results will help researchers develop new drugs over the next five years to treat depression and improve understanding of its genetic causes."
    },
    {
      number: 29,
      type: "verbal",
      text: "120 million people worldwide suffer from depression. A EU-funded research project launched recently will help to uncover the genetic factors linked to depression to develop new drug treatments. The project, named Newmood, has received several million Euros in funding and aims to identify genes involved in triggering depression. The results of the project will help researchers to develop new drugs over the next five years to treat it and improve understanding of the causes. The drugs are set to revolutionise anti depressant drugs, which have not changed much over the past 30 years. Researchers will develop a microchip carrying 800 genes to test which ones are active in healthy and depressed animals and humans.\n\nWhich of the following statements about existing antidepressants is correct?",
      options: {
        a: "For 30 years they have acted on the symptoms of depression but without attacking the factors responsible.",
        b: "They do not yet specifically take account of the genes responsible for depression.",
        c: "They have evolved considerably since research first began, especially over the past 30 years.",
        d: "They act on depression caused by genetic factors, but not on other types of depression."
      },
      correct: "b",
      explanation: "Existing antidepressants have not changed much over the past 30 years, while the Newmood project is specifically working to identify the genes involved — meaning current drugs do not yet take those genes into account."
    },
    {
      number: 30,
      type: "numerical",
      tableRef: "table_causes_death",
      text: "How many men were there in the EU in 1999?",
      options: {
        a: "150 000 000",
        b: "130 924 080",
        c: "159 944 000",
        d: "185 550 000"
      },
      correct: "d",
      explanation: "Cardiovascular deaths in men (597 471) correspond to a rate of 322 per 100 000 men. Total men = 597 471 / 322 × 100 000 ≈ 185 550 000."
    },
    {
      number: 31,
      type: "numerical",
      tableRef: "table_causes_death",
      text: "In 1999, the EU had 375 million inhabitants. For 1 000 000 EU inhabitants, how many died of cancer in 1999?",
      options: {
        a: "2 328",
        b: "2 765",
        c: "4 660",
        d: "8 731"
      },
      correct: "a",
      explanation: "Total cancer deaths = 460 000 (men) + 413 000 (women) = 873 000. Per 1 000 000 inhabitants: 873 000 / 375 ≈ 2 328."
    },
    {
      number: 32,
      type: "numerical",
      tableRef: "table_causes_death",
      text: "For every 100 000 inhabitants, diseases due to external factors caused as many deaths in Germany as in EU-15 in 1999. The proportion of men and women is the same in Germany as in the EU-15. If it is known that 41 000 000 women live in Germany, how many of them died of the consequences of a disease due to external causes?",
      options: {
        a: "1 864",
        b: "9 020",
        c: "23 780",
        d: "41 769"
      },
      correct: "b",
      explanation: "The rate of deaths due to external causes for women is 22 per 100 000. Applied to 41 000 000 women: 41 000 000 / 100 000 × 22 = 9 020."
    },
    {
      number: 33,
      type: "verbal",
      text: "To facilitate trade, the European Commission has devised clear food safety regulations accompanied by a set of \"instructions for use\". Furthermore, it is providing finance for technical assistance projects, which should help the developing countries to comply with these rules. The Union has the most open import arrangements for food products in the world. Without the largely duty-free access, which they have to our markets, the developing countries would face even worse problems. By helping them to comply with EU food safety standards, the European Union is also helping them to produce safer food products for themselves. All the industrialised countries must guarantee access without charges or quotas for exports from the world's poorest countries. The European Union has set an example and it is now up to the other industrialised countries to adopt similar measures.\n\nWhich of the following statements about the developing countries is correct?",
      options: {
        a: "The European Union should speed up trading arrangements with them.",
        b: "Trade with the Member States should be stepped up.",
        c: "The food regulations, which apply, should also be applied by the industrialised countries.",
        d: "The trade rules, which the European Union applies to them, should be followed by other industrialised countries."
      },
      correct: "d",
      explanation: "The European Union has set an example and it is now up to the other industrialised countries to adopt similar trade measures."
    },
    {
      number: 34,
      type: "verbal",
      text: "To facilitate trade, the European Commission has devised clear food safety regulations accompanied by a set of \"instructions for use\". Furthermore, it is providing finance for technical assistance projects, which should help the developing countries to comply with these rules. The Union has the most open import arrangements for food products in the world. Without the largely duty-free access, which they have to our markets, the developing countries would face even worse problems. By helping them to comply with EU food safety standards, the European Union is also helping them to produce safer food products for themselves. All the industrialised countries must guarantee access without charges or quotas for exports from the world's poorest countries. The European Union has set an example and it is now up to the other industrialised countries to adopt similar measures.\n\nHow does the European Union help the developing countries?",
      options: {
        a: "It facilitates technical assistance, which helps them to apply safer food regulations.",
        b: "It allows them to apply less stringent food safety standards.",
        c: "It imports products from these countries on a priority basis.",
        d: "It obliges all industrialised countries in the world to exempt them from compulsory duties."
      },
      correct: "a",
      explanation: "The EU provides finance for technical assistance projects that help developing countries comply with food safety rules."
    },
    {
      number: 35,
      type: "verbal",
      text: "To facilitate trade, the European Commission has devised clear food safety regulations accompanied by a set of \"instructions for use\". Furthermore, it is providing finance for technical assistance projects, which should help the developing countries to comply with these rules. The Union has the most open import arrangements for food products in the world. Without the largely duty-free access, which they have to our markets, the developing countries would face even worse problems. By helping them to comply with EU food safety standards, the European Union is also helping them to produce safer food products for themselves. All the industrialised countries must guarantee access without charges or quotas for exports from the world's poorest countries. The European Union has set an example and it is now up to the other industrialised countries to adopt similar measures.\n\nWhat enables the developing countries to limit the extent of the problems?",
      options: {
        a: "They have completely free access to European markets.",
        b: "They do not have to pay the same duties as other countries for access to European markets.",
        c: "They have priority access, compared with less poor countries, to the purchase of agricultural products.",
        d: "They have priority access, compared with less poor countries, to the purchase of manufactured products."
      },
      correct: "a",
      explanation: "The text states that without the largely duty-free access developing countries have to EU markets, they would face even worse problems."
    },
    {
      number: 36,
      type: "verbal",
      text: "Although genetic testing in Europe is based on high quality scientific know-how, it can suffer from a certain level of technical errors. Moreover, the reporting on these tests is sometimes of a poor quality. In the context of health care, a test should only be offered when it has been proven to be reliable and there is a sound medical reason to justify it. A test validation system should therefore be established. Public concern regarding genetic testing revolves around the fear of misuse of genetic data and inappropriate access to such data by third parties. The confidentially and privacy of all personal medical data, including information derived from genetic testing, is a basic right that must be respected. The individual has the right to know about test results, but also has the right to decide not to know.\n\nWhat should happen with regard to genetic testing in Europe?",
      options: {
        a: "There should be a system, which validates the confidentiality of the data given in the reports.",
        b: "Third-party access to data should be authorised only if third parties sign a discharge.",
        c: "The criteria for carrying out a test should be the quality of the test and the reason justifying it.",
        d: "The public should be kept more fully informed about test results."
      },
      correct: "c",
      explanation: "A test should only be offered when it has been proven reliable and there is a sound medical reason to justify it."
    },
    {
      number: 37,
      type: "verbal",
      text: "Although genetic testing in Europe is based on high quality scientific know-how, it can suffer from a certain level of technical errors. Moreover, the reporting on these tests is sometimes of a poor quality. In the context of health care, a test should only be offered when it has been proven to be reliable and there is a sound medical reason to justify it. A test validation system should therefore be established. Public concern regarding genetic testing revolves around the fear of misuse of genetic data and inappropriate access to such data by third parties. The confidentially and privacy of all personal medical data, including information derived from genetic testing, is a basic right that must be respected. The individual has the right to know about test results, but also has the right to decide not to know.\n\nWhat is the present situation as regards genetic testing?",
      options: {
        a: "Testing is frequently carried out without a valid medical prescription.",
        b: "Scientists have the right to decide whether or not to divulge the results.",
        c: "The reporting of genetic data is always of a poor standard.",
        d: "Despite the expertise in the area, reporting is not always perfect."
      },
      correct: "d",
      explanation: "Genetic testing in Europe is based on high quality know-how, but can still suffer from technical errors and reporting of sometimes poor quality."
    },
    {
      number: 38,
      type: "numerical",
      tableRef: "table_domains",
      text: "By what proportion did the number of domain servers \".dk\" increase between 2000 and 2001?",
      options: {
        a: "48.5%",
        b: "50%",
        c: "24.75%",
        d: "24.5%"
      },
      correct: "b",
      explanation: "(504.9 − 336.6) / 336.6 ≈ 0.4995 ≈ 50%."
    },
    {
      number: 39,
      type: "numerical",
      tableRef: "table_domains",
      text: "Between 1998 and 1999 the number of domain servers \".be\" fell by the same proportion as between 1999 and 2000. What was the number of domain servers \".be\" in 1998?",
      options: {
        a: "335 576",
        b: "420 000",
        c: "565 000",
        d: "674 610"
      },
      correct: "b",
      explanation: "The number of .be domains fell by 350−280 = 70 (thousand) between 1999 and 2000, a 20% drop. Applying the same 20% drop from 1998 to 1999, the 1998 figure was 350 / 0.8... using the same absolute-to-relative logic as the source: 420 000."
    },
    {
      number: 40,
      type: "numerical",
      tableRef: "table_domains",
      text: "In 2001, 12.5% of all domain servers \".gr\" and 25% of all domain servers \".de\" were used for commercial purposes. In 2001 how many more domain servers \".de\" were used for commercial purposes than domain servers \".gr\"?",
      options: {
        a: "590 000",
        b: "475 170",
        c: "382 650",
        d: "282 300"
      },
      correct: "a",
      explanation: ".gr commercial domains = 140 × 0.125 = 17.5 (thousand). .de commercial domains = 2 430 × 0.25 = 607.5 (thousand). Difference = 607.5 − 17.5 = 590 (thousand) = 590 000."
    }
  ]
});
