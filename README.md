# EPSO AD5 Practice – Verbal and Numerical Reasoning Tests

Static website for practising EPSO AD5 tests. Runs directly from GitHub Pages — no server needed.

## Features

- Select from available tests on the home screen
- Configurable countdown timer (can be disabled)
- Verbal questions displayed as reading passages; numerical questions displayed with data tables
- Auto-scoring on submission
- EPSO scoring: **+1 correct, −0.25 wrong, 0 unanswered**
- Best score and attempt count tracked per test (stored in the browser)
- Review wrong answers with the correct answer and a detailed explanation

## How to use

1. Open `index.html` in a browser (or visit the GitHub Pages URL)
2. Select a test
3. Configure the timer (or disable it)
4. Answer the questions and click **Submit**
5. Review your mistakes with explanations

## File structure

```
/
├── index.html              # Single-page app (all screens)
├── style.css               # Styles
├── app.js                  # App logic
├── data/
│   ├── RVNE1.js            # Test 1 (Verbal + Numerical Reasoning 1)
│   └── ...                 # Add more test files here
├── README.md
└── GEMINI_OCR_PROMPT.md    # Prompts for extracting tests from PDFs with Gemini
```

## How to add a new test

### Option A: with Gemini (recommended for PDF extraction)

1. Open `GEMINI_OCR_PROMPT.md` and choose the prompt for the PDF format
2. Paste the prompt into Gemini Pro together with the PDF
3. Gemini will generate the JS file
4. Save it as `data/RVNE2.js` (or a suitable name)
5. Add a line in `index.html` just before `<script src="app.js">`:
   ```html
   <script src="data/RVNE2.js"></script>
   ```

### Option B: manually

Create `data/RVNE2.js` with this structure. Each file uses `window.TESTS.push()` — call it once per test object (a standard RVNE PDF produces two: one verbal, one numerical).

```javascript
window.TESTS = window.TESTS || [];

window.TESTS.push({
  id: "RVNE2-V",
  title: "RVNE 2 · Razonamiento Verbal",
  // defaultTimer: 20,  // optional — omit to use the default 35 minutes
  sections: [
    {
      title: "Razonamiento Verbal",
      instruction: "...",
      questionRange: [1, 25]
    }
  ],
  tables: {},
  questions: [
    {
      number: 1,
      type: "verbal",       // "verbal" | "numerical" | "knowledge"
      text: "Question text...",
      options: { a: "...", b: "...", c: "...", d: "..." },
      correct: "c",
      explanation: "Why C is correct..."  // optional for knowledge type
    }
  ]
});

window.TESTS.push({
  id: "RVNE2-N",
  title: "RVNE 2 · Razonamiento Numérico",
  sections: [
    {
      title: "Razonamiento Numérico",
      instruction: "...",
      questionRange: [26, 40]
    }
  ],
  tables: {
    table_example: {
      title: "Table title",
      headers: ["Col1", "Col2", "Col3"],
      rows: [
        ["Row 1", "value", "value"],
        ["Row 2", "value", "value"]
      ],
      notes: "Optional note below the table"   // can be omitted
    }
  },
  questions: [
    {
      number: 26,
      type: "numerical",
      tableRef: "table_example",  // must match a key in tables above
      text: "Numerical question?",
      options: { a: "...", b: "...", c: "...", d: "..." },
      correct: "b",
      explanation: "Calculation: ..."
    }
  ]
});
```

## Test formats

| Format | Questions | Timer | Types |
|--------|-----------|-------|-------|
| Standard RVNE | 25 verbal + 15 numerical | 35 min | `verbal`, `numerical` |
| Short RVNE | 10 numerical only | 20 min | `numerical` |
| Knowledge (100Q) | 100 general knowledge | 20 min | `knowledge` |

Set `defaultTimer: 20` on the test object for any test shorter than 35 minutes.

## EPSO scoring formula

```
Score = Correct − (Wrong × 0.25)
```

Unanswered questions carry no penalty. Both the raw correct count and the penalised score are shown on the results screen.
