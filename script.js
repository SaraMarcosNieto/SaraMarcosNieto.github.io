// ═══════════════════════════════════════════════════════════════
// script.js — EPSO AD5 Quiz App
//
// Expects:
//   - `quizData` global from data.js
//   - `marked` global from marked.js CDN
// ═══════════════════════════════════════════════════════════════

// ── State ────────────────────────────────────────────────────
let state = {
  selectedCat: null,   // category name string
  timerMins: 30,       // default
  questions: [],       // shuffled for current test
  answers: [],         // user picks (null = unanswered)
  currentQ: 0,
  timerInterval: null,
  secondsLeft: 0
};

// ── DOM helpers ──────────────────────────────────────────────
const $ = id => document.getElementById(id);
const screens = { dashboard: $('dashboard'), test: $('test'), results: $('results') };

function showScreen(name) {
  Object.values(screens).forEach(el => el.classList.remove('active'));
  screens[name].classList.add('active');
  window.scrollTo(0, 0);
}

// ── Utils ────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function fmtTime(s) {
  if (s <= 0) return '00:00';
  return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
}

/** Render Markdown string to HTML, wrapping tables for horizontal scroll */
function renderContext(md) {
  if (!md) return '';
  let html = marked.parse(md);
  // Wrap every <table> in a scrollable div
  html = html.replace(/<table>/g, '<div class="table-scroll"><table>').replace(/<\/table>/g, '</table></div>');
  return html;
}

// ── localStorage high scores ─────────────────────────────────
function hsKey(cat) { return 'epso_hs_' + cat; }
function getHSLabel(cat) { return localStorage.getItem(hsKey(cat) + '_l') || '—'; }
function saveHS(cat, score, total) {
  const prev = parseInt(localStorage.getItem(hsKey(cat))) || 0;
  if (score > prev) {
    localStorage.setItem(hsKey(cat), score);
    localStorage.setItem(hsKey(cat) + '_l', `${score}/${total}`);
  }
}

// ── Categories helper ────────────────────────────────────────
function getCategoryNames() { return quizData.categories.map(c => c.name); }
function getCategoryQuestions(name) { return quizData.categories.find(c => c.name === name)?.questions || []; }

// ═══════════════════════════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════════════════════════
function initDashboard() {
  const cats = getCategoryNames();

  // High-score chips
  $('scoresStrip').innerHTML = cats.map(c =>
    `<div class="score-chip"><strong>${getHSLabel(c)}</strong>${c}</div>`
  ).join('');

  // Category cards (dynamic from data.js)
  const grid = $('categoryGrid');
  grid.innerHTML = '';
  cats.forEach(name => {
    const btn = document.createElement('button');
    btn.className = 'cat-card';
    btn.dataset.cat = name;
    btn.innerHTML = `<span class="cat-label">${name}</span><span class="cat-count">${getCategoryQuestions(name).length} preguntas</span>`;
    btn.addEventListener('click', () => {
      grid.querySelectorAll('.cat-card').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.selectedCat = name;
      $('startBtn').disabled = false;
    });
    grid.appendChild(btn);
  });

  // Timer buttons
  document.querySelectorAll('.timer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.timer-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.timerMins = parseInt(btn.dataset.mins);
    });
  });

  // Start
  $('startBtn').onclick = startTest;
  $('backBtn').onclick = () => { initDashboard(); showScreen('dashboard'); };
}

// ═══════════════════════════════════════════════════════════════
// START TEST
// ═══════════════════════════════════════════════════════════════
function startTest() {
  state.questions = shuffle(getCategoryQuestions(state.selectedCat));
  state.answers = new Array(state.questions.length).fill(null);
  state.currentQ = 0;

  $('testCatLabel').textContent = state.selectedCat;

  // Timer
  if (state.timerMins > 0) {
    state.secondsLeft = state.timerMins * 60;
    $('testTimer').textContent = fmtTime(state.secondsLeft);
    $('testTimer').classList.remove('warn');
    clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
      state.secondsLeft--;
      $('testTimer').textContent = fmtTime(state.secondsLeft);
      if (state.secondsLeft <= 60) $('testTimer').classList.add('warn');
      if (state.secondsLeft <= 0) { clearInterval(state.timerInterval); submitTest(); }
    }, 1000);
  } else {
    $('testTimer').textContent = '∞';
  }

  $('prevBtn').onclick = () => navigateQ(-1);
  $('nextBtn').onclick = () => navigateQ(1);
  $('submitBtn').onclick = () => { if (confirm('¿Segura que quieres entregar?')) submitTest(); };

  renderQuestion();
  showScreen('test');
}

// ═══════════════════════════════════════════════════════════════
// RENDER QUESTION
// ═══════════════════════════════════════════════════════════════
function renderQuestion() {
  const q = state.questions[state.currentQ];
  const idx = state.currentQ;
  const total = state.questions.length;

  $('testProgress').textContent = `${idx + 1} / ${total}`;

  // Context (Markdown → HTML)
  const ctxEl = $('contextBlock');
  if (q.context) {
    ctxEl.innerHTML = renderContext(q.context);
    ctxEl.style.display = '';
  } else {
    ctxEl.innerHTML = '';
    ctxEl.style.display = 'none';
  }

  // Question text
  $('questionText').textContent = q.questionText;

  // Options
  const list = $('optionsList');
  list.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn' + (state.answers[idx] === i ? ' selected' : '');
    btn.textContent = opt;
    btn.addEventListener('click', () => { state.answers[idx] = i; renderQuestion(); });
    list.appendChild(btn);
  });

  // Nav
  $('prevBtn').style.visibility = idx === 0 ? 'hidden' : 'visible';
  $('nextBtn').style.display = idx === total - 1 ? 'none' : '';
  $('submitBtn').style.display = idx === total - 1 ? '' : 'none';
}

function navigateQ(dir) {
  state.currentQ = Math.max(0, Math.min(state.questions.length - 1, state.currentQ + dir));
  renderQuestion();
}

// ═══════════════════════════════════════════════════════════════
// SUBMIT & RESULTS
// ═══════════════════════════════════════════════════════════════
function submitTest() {
  clearInterval(state.timerInterval);
  const qs = state.questions;
  const ans = state.answers;
  let correct = 0;
  qs.forEach((q, i) => { if (ans[i] === q.correctAnswerIndex) correct++; });

  saveHS(state.selectedCat, correct, qs.length);

  const pct = Math.round((correct / qs.length) * 100);
  $('scoreRing').style.setProperty('--pct', pct + '%');
  $('scoreNum').textContent = `${correct}/${qs.length}`;
  $('scoreLabel').textContent = pct >= 70 ? '¡Buen resultado!' : pct >= 50 ? 'Sigue practicando' : 'Ánimo, ¡a por ello!';

  // Review
  const reviewEl = $('reviewList');
  reviewEl.innerHTML = '';
  qs.forEach((q, i) => {
    const card = document.createElement('div');
    card.className = 'review-card';
    let h = `<div class="rc-q">${i + 1}. ${q.questionText}</div>`;
    if (q.context) h += `<div class="rc-ctx">${renderContext(q.context)}</div>`;
    q.options.forEach((opt, j) => {
      let cls = '';
      if (j === q.correctAnswerIndex) cls = 'correct';
      else if (j === ans[i] && ans[i] !== q.correctAnswerIndex) cls = 'wrong';
      h += `<div class="rc-opt ${cls}">${opt}</div>`;
    });
    if (ans[i] === null) h += `<div class="rc-opt wrong">Sin respuesta</div>`;
    h += `<div class="rc-explanation"><strong>Explicación:</strong> ${q.explanation}</div>`;
    card.innerHTML = h;
    reviewEl.appendChild(card);
  });

  showScreen('results');
}

// ═══════════════════════════════════════════════════════════════
// BOOT
// ═══════════════════════════════════════════════════════════════
initDashboard();
