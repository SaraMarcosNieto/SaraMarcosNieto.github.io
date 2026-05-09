# Preparación EPSO AD5 – Tests de Razonamiento Verbal y Numérico

Sitio web estático para que Sara practique los tests del concurso EPSO AD5. Funciona directamente desde GitHub Pages sin necesidad de servidor.

## Funcionalidades

- Selección de test entre los disponibles
- Temporizador configurable (o desactivable)
- Visualización de preguntas verbales y numéricas con tablas de datos
- Corrección automática al entregar
- Puntuación según el sistema EPSO: **+1 correcta, −0,25 incorrecta, 0 sin responder**
- Revisión de errores con la respuesta correcta y explicación detallada

## Cómo usar

1. Abre `index.html` en el navegador (o visita la URL de GitHub Pages)
2. Selecciona el test que quieres hacer
3. Configura el tiempo (o desactívalo)
4. Responde las preguntas y pulsa **Entregar**
5. Revisa tus errores con las explicaciones

## Estructura de archivos

```
/
├── index.html              # Aplicación de una sola página
├── style.css               # Estilos
├── app.js                  # Lógica de la app
├── data/
│   ├── RVNE1.js            # Test 1 (Razonamiento Verbal y Numérico 1)
│   └── RVNE2.js            # (ejemplo de cómo añadir más tests)
├── README.md
└── GEMINI_OCR_PROMPT.md    # Prompt para extraer tests de PDFs con Gemini
```

## Cómo añadir un nuevo test

### Opción A: con Gemini (recomendado para PDFs escaneados)

1. Abre `GEMINI_OCR_PROMPT.md`
2. Pega el prompt en Gemini Pro junto con el PDF del nuevo test
3. Gemini generará el código JS con los datos del test
4. Guarda el resultado como `data/RVNE2.js` (o el nombre que corresponda)
5. Añade una línea en `index.html` justo antes del `<script src="app.js">`:
   ```html
   <script src="data/RVNE2.js"></script>
   ```

### Opción B: manualmente

Crea `data/RVNE2.js` con esta estructura:

```javascript
window.TESTS = window.TESTS || [];
window.TESTS.push({
  id: "RVNE2",
  title: "Test de Razonamiento Verbal y Numérico 2",
  sections: [
    {
      title: "Razonamiento Verbal",
      instruction: "...",
      questionRange: [1, 25]
    },
    {
      title: "Razonamiento Numérico",
      questionRange: [26, 40]
    }
  ],
  tables: {
    // solo para preguntas numéricas que usen tablas
    tabla_ejemplo: {
      title: "Título de la tabla",
      headers: ["Col1", "Col2", "Col3"],
      rows: [
        ["Fila 1", "valor", "valor"],
        ["Fila 2", "valor", "valor"]
      ],
      notes: "Nota opcional debajo de la tabla"   // puede omitirse
    }
  },
  questions: [
    {
      number: 1,
      type: "verbal",            // "verbal" o "numerical"
      text: "Texto del enunciado...",
      options: {
        a: "Opción A",
        b: "Opción B",
        c: "Opción C",
        d: "Opción D"
      },
      correct: "c",              // letra de la respuesta correcta
      explanation: "Explicación de por qué C es la respuesta correcta..."
    },
    {
      number: 26,
      type: "numerical",
      tableRef: "tabla_ejemplo",  // referencia a la tabla definida arriba
      text: "¿Pregunta numérica?",
      options: { a: "...", b: "...", c: "...", d: "..." },
      correct: "b",
      explanation: "Cálculo: ..."
    }
    // ...
  ]
});
```

Añade `<script src="data/RVNE2.js"></script>` en `index.html` antes de `<script src="app.js">`.

## Puntuación EPSO

La puntuación EPSO AD5 aplica penalización por respuestas incorrectas:

```
Puntuación = Correctas − (Incorrectas × 0,25)
```

El sitio muestra tanto el número de respuestas correctas como la puntuación penalizada.
