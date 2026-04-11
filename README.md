# EPSO AD5 — Quiz Practice App

A static multiple-choice test app for EPSO AD5 exam preparation.  
No build step, no frameworks — just HTML/CSS/JS hosted on GitHub Pages.

## Quick Start

1. Clone the repo
2. Open `index.html` in a browser (or push to GitHub Pages)
3. Done!

## File Structure

```
├── index.html      # App shell (loads marked.js CDN, data.js, script.js)
├── styles.css       # All styles
├── script.js        # App logic (reads quizData, renders UI)
├── data.js          # ★ ALL quiz questions live here
└── README.md
```

## How to Add a New Test Category

Edit **`data.js`**. The structure is:

```js
const quizData = {
  "categories": [
    {
      "name": "Verbal",          // ← shown on the dashboard
      "questions": [ /* ... */ ]
    },
    {
      "name": "Numérico",
      "questions": [ /* ... */ ]
    }
    // ★ ADD A NEW CATEGORY HERE:
    // {
    //   "name": "Abstracto",
    //   "questions": [ ... ]
    // }
  ]
};
```

The dashboard auto-generates a card for each category in the array.

## Question Schema

Each question object must have these fields:

| Field               | Type     | Description |
|---------------------|----------|-------------|
| `id`                | number   | Unique ID across all categories |
| `context`           | string   | Text passage or Markdown table shown above the question. Use `""` if none. |
| `questionText`      | string   | The question itself |
| `options`           | string[] | Array of answer strings, e.g. `["A) ...", "B) ...", "C) ...", "D) ..."]` |
| `correctAnswerIndex`| number   | 0-based index of the correct option (0 = first) |
| `explanation`       | string   | Explanation shown in the review screen |

### Example — Text question (Verbal)

```json
{
  "id": 1,
  "context": "La UE es un ente multicultural que aspira a liderar el mundo...",
  "questionText": "Indicar cuál de las cuatro afirmaciones es la que mejor responde al texto dado:",
  "options": [
    "A) La crisis económica pasará pronto...",
    "B) La crisis económica terminará pronto.",
    "C) Para superar la crisis económica es conveniente...",
    "D) La UE lidera el mundo..."
  ],
  "correctAnswerIndex": 2,
  "explanation": "La respuesta correcta es la C porque..."
}
```

### Example — Table question (Numérico)

Use Markdown table syntax inside `context`. The app renders it with [marked.js](https://marked.js.org/):

```json
{
  "id": 26,
  "context": "| Año | Francia | España |\n| :--- | :--- | :--- |\n| 1999 | 500 | 400 |\n| 2000 | 800 | 750 |",
  "questionText": "¿En qué año se produjo más?",
  "options": ["A) 1999", "B) 2000"],
  "correctAnswerIndex": 1,
  "explanation": "2000 total is higher."
}
```

**Tip:** Use `\n` for newlines inside JSON strings. Each table row needs its own line.

### Markdown table format reminder

```
| Header 1 | Header 2 |
| :--- | :--- |
| cell | cell |
```

The `:---` alignment row is required by Markdown.

## Adding Abstracto (Image-Based) Questions

For diagram/shape questions, take a screenshot of each question and save in an `images/` folder. You can show images by embedding an `<img>` tag inside the `context` field:

```json
{
  "id": 101,
  "context": "<img src='./images/abs_q1.png' alt='Diagrama' style='max-width:100%'>",
  "questionText": "¿Cuál es el siguiente diagrama de la serie?",
  "options": ["A", "B", "C", "D", "E"],
  "correctAnswerIndex": 1,
  "explanation": "A cada figura blanca le sigue la misma en negro..."
}
```

`marked.js` passes through raw HTML, so `<img>` tags work inside `context`.

## Features

- **Timer** — auto-submits when time runs out
- **Question shuffle** — randomized order each attempt (options stay in A/B/C/D order)
- **High scores** — best score per category saved in localStorage
- **Review mode** — see correct/wrong answers + explanations after submitting
- **Responsive** — works on mobile; tables scroll horizontally

## Deploying to GitHub Pages

1. Push all files to a GitHub repo
2. Go to **Settings → Pages → Source → Deploy from branch → main / root**
3. Your app will be live at `https://yourusername.github.io/repo-name/`
