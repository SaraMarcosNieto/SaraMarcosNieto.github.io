'use strict';

// ── State ──────────────────────────────────────────
let state = {
  currentTest: null,
  answers: {},
  timerEnabled: true,
  timerMinutes: 35,
  timeLeft: 0,
  timerInterval: null,
};

// ── localStorage ───────────────────────────────────
const STORAGE_KEY = 'rvne_results';

function loadAllResults() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
  catch { return {}; }
}

function saveResult(testId, { correct, penalized, total }) {
  const all = loadAllResults();
  const prev = all[testId] || { attempts: 0, best: null };
  prev.attempts++;
  if (!prev.best || penalized > prev.best.penalized) {
    prev.best = { correct, penalized, total, date: new Date().toLocaleDateString('en-GB') };
  }
  all[testId] = prev;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

// ── Screens ────────────────────────────────────────
function showScreen(id) {
  ['screen-home', 'screen-test', 'screen-results'].forEach(s => {
    document.getElementById(s).classList.toggle('hidden', s !== id);
  });
}

// ── HOME ───────────────────────────────────────────
function initHome() {
  const tests = window.TESTS || [];
  const list = document.getElementById('test-list');
  const timerSetup = document.getElementById('timer-setup');
  const allResults = loadAllResults();

  list.innerHTML = '';

  if (tests.length === 0) {
    list.innerHTML = '<p style="color:#6b7280;font-style:italic;">No tests available.</p>';
    return;
  }

  tests.forEach(test => {
    const rec = allResults[test.id];
    const card = document.createElement('div');
    card.className = 'test-card';
    card.dataset.id = test.id;

    let resultHtml = '';
    if (rec && rec.best) {
      const pStr = Number.isInteger(rec.best.penalized * 4)
        ? rec.best.penalized % 1 === 0 ? rec.best.penalized.toFixed(0) : rec.best.penalized.toFixed(2)
        : rec.best.penalized.toFixed(2);
      resultHtml = `
        <div class="test-card-result">
          <span class="result-best">Best: ${rec.best.correct}/${rec.best.total} · EPSO ${pStr}</span>
          <span class="result-attempts">${rec.attempts} attempt${rec.attempts !== 1 ? 's' : ''}</span>
        </div>`;
    } else {
      resultHtml = `<div class="test-card-result"><span class="result-new">Not attempted</span></div>`;
    }

    card.innerHTML = `
      <div class="test-card-body">
        <div class="test-card-title">${test.title}</div>
        <div class="test-card-meta">${test.questions.length} questions</div>
        ${resultHtml}
      </div>
      <span class="test-card-arrow">›</span>
    `;
    card.addEventListener('click', () => selectTest(test.id));
    list.appendChild(card);
  });

  timerSetup.style.display = 'none';
  state.currentTest = null;
  state.answers = {};

  const oldToggle = document.getElementById('timer-enabled');
  const newToggle = oldToggle.cloneNode(true);
  oldToggle.parentNode.replaceChild(newToggle, oldToggle);
  newToggle.addEventListener('change', function () {
    document.getElementById('timer-input-row').style.display = this.checked ? 'flex' : 'none';
  });

  document.getElementById('btn-start').onclick = startTest;
}

function selectTest(id) {
  document.querySelectorAll('.test-card').forEach(c => c.classList.remove('selected'));
  const card = document.querySelector(`.test-card[data-id="${id}"]`);
  if (card) card.classList.add('selected');

  state.currentTest = (window.TESTS || []).find(t => t.id === id);

  // Pre-fill timer from test's defaultTimer if set
  const defaultMins = state.currentTest.defaultTimer || 35;
  document.getElementById('timer-minutes').value = defaultMins;

  document.getElementById('timer-setup').style.display = 'block';
  document.getElementById('timer-setup').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ── TEST ───────────────────────────────────────────
function startTest() {
  if (!state.currentTest) return;

  state.answers = {};
  state.timerEnabled = document.getElementById('timer-enabled').checked;
  state.timerMinutes = parseInt(document.getElementById('timer-minutes').value, 10) || 35;

  renderTest();
  showScreen('screen-test');
  window.scrollTo(0, 0);

  if (state.timerEnabled) {
    state.timeLeft = state.timerMinutes * 60;
    updateTimerDisplay();
    state.timerInterval = setInterval(tickTimer, 1000);
  } else {
    document.getElementById('timer-display').textContent = 'No limit';
    document.getElementById('timer-display').className = 'timer-display';
  }
}

function renderTest() {
  const test = state.currentTest;
  const body = document.getElementById('test-body');
  document.getElementById('test-title-bar').textContent = test.title;

  body.innerHTML = '';

  let lastSectionTitle = null;
  let lastTableRef = null;

  test.questions.forEach(q => {
    const section = (test.sections || []).find(
      s => q.number >= s.questionRange[0] && q.number <= s.questionRange[1]
    );
    if (section && section.title !== lastSectionTitle) {
      lastSectionTitle = section.title;
      const hdr = document.createElement('div');
      hdr.className = 'section-header';
      hdr.innerHTML = `<h2>${section.title}</h2>${section.instruction
        ? `<p class="section-instruction">${section.instruction}</p>` : ''}`;
      body.appendChild(hdr);
    }

    if (q.tableRef && q.tableRef !== lastTableRef) {
      lastTableRef = q.tableRef;
      const tableData = (test.tables || {})[q.tableRef];
      if (tableData) body.appendChild(buildTableBlock(tableData));
    }
    if (!q.tableRef) lastTableRef = null;

    body.appendChild(buildQuestionCard(q));
  });

  updateUnansweredBadge();
  document.getElementById('btn-submit').onclick = confirmSubmit;
}

function buildTableBlock(tableData) {
  const div = document.createElement('div');
  div.className = 'table-context';
  let html = `<div class="table-context-title">${tableData.title}</div><table><thead><tr>`;
  tableData.headers.forEach(h => { html += `<th>${h}</th>`; });
  html += '</tr></thead><tbody>';
  tableData.rows.forEach(row => {
    html += '<tr>';
    row.forEach((cell, i) => { html += i === 0 ? `<td><strong>${cell}</strong></td>` : `<td>${cell}</td>`; });
    html += '</tr>';
  });
  html += '</tbody></table>';
  if (tableData.notes) html += `<p class="table-notes">${tableData.notes}</p>`;
  div.innerHTML = html;
  return div;
}

function buildQuestionCard(q) {
  const card = document.createElement('div');
  card.className = 'question-card';
  card.dataset.type = q.type;
  card.dataset.number = q.number;

  let optionsHtml = '';
  Object.keys(q.options).forEach(letter => {
    optionsHtml += `
      <li>
        <label class="option-label">
          <input type="radio" name="q${q.number}" value="${letter}">
          <span class="option-letter">${letter.toUpperCase()}.</span>
          <span class="option-text">${q.options[letter]}</span>
        </label>
      </li>`;
  });

  card.innerHTML = `
    <div class="question-number">Question ${q.number}</div>
    <div class="question-text">${q.text}</div>
    <ul class="options-list">${optionsHtml}</ul>
  `;

  card.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener('change', () => {
      state.answers[q.number] = input.value;
      card.classList.add('answered');
      updateUnansweredBadge();
    });
  });

  return card;
}

function updateUnansweredBadge() {
  const total = state.currentTest.questions.length;
  const answered = Object.keys(state.answers).length;
  const remaining = total - answered;
  document.getElementById('unanswered-badge').textContent =
    remaining > 0 ? `${remaining} unanswered` : 'All answered';
}

// ── TIMER ──────────────────────────────────────────
function tickTimer() {
  state.timeLeft--;
  updateTimerDisplay();
  if (state.timeLeft <= 0) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
    submitTest();
  }
}

function updateTimerDisplay() {
  const el = document.getElementById('timer-display');
  const m = Math.floor(state.timeLeft / 60);
  const s = state.timeLeft % 60;
  el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  el.className = 'timer-display' +
    (state.timeLeft <= 60 ? ' urgent' : state.timeLeft <= 300 ? ' warning' : '');
}

// ── SUBMIT ─────────────────────────────────────────
function confirmSubmit() {
  const total = state.currentTest.questions.length;
  const remaining = total - Object.keys(state.answers).length;
  if (remaining > 0) {
    const msg = remaining === 1
      ? 'You have 1 unanswered question. Submit anyway?'
      : `You have ${remaining} unanswered questions. Submit anyway?`;
    showDialog(msg, submitTest);
  } else {
    submitTest();
  }
}

function submitTest() {
  if (state.timerInterval) { clearInterval(state.timerInterval); state.timerInterval = null; }
  renderResults();
  showScreen('screen-results');
  window.scrollTo(0, 0);
}

// ── RESULTS ────────────────────────────────────────
function renderResults() {
  const test = state.currentTest;
  const answers = state.answers;
  const total = test.questions.length;

  let correct = 0, wrong = 0, skipped = 0;
  const wrongQuestions = [];

  test.questions.forEach(q => {
    const given = answers[q.number];
    if (!given) { skipped++; }
    else if (given === q.correct) { correct++; }
    else { wrong++; wrongQuestions.push({ q, given }); }
  });

  const penalized = correct - wrong * 0.25;
  saveResult(test.id, { correct, penalized, total });

  const pStr = penalized % 1 === 0 ? penalized.toFixed(0) : penalized.toFixed(2);
  document.getElementById('score-card').innerHTML = `
    <div class="score-main">${correct} / ${total} correct</div>
    <div class="score-penalized">EPSO score: <strong>${pStr}</strong> / ${total}</div>
    <div class="score-formula">(Correct − Wrong × 0.25) · Unanswered questions carry no penalty.</div>
    <div class="score-breakdown">
      <div class="score-breakdown-item">
        <span class="score-breakdown-value correct-color">${correct}</span>
        <span class="score-breakdown-label">Correct</span>
      </div>
      <div class="score-breakdown-item">
        <span class="score-breakdown-value wrong-color">${wrong}</span>
        <span class="score-breakdown-label">Wrong</span>
      </div>
      <div class="score-breakdown-item">
        <span class="score-breakdown-value skip-color">${skipped}</span>
        <span class="score-breakdown-label">Skipped</span>
      </div>
    </div>
  `;

  const reviewSection = document.getElementById('review-section');
  if (wrongQuestions.length === 0) {
    reviewSection.innerHTML = `<div class="all-correct-msg">Congratulations! No mistakes.</div>`;
  } else {
    const label = (q, l) => `${l.toUpperCase()}. ${q.options[l]}`;
    let html = `<h2>Wrong answers (${wrongQuestions.length})</h2>`;
    wrongQuestions.forEach(({ q, given }) => {
      const explanationHtml = q.explanation
        ? `<div class="review-explanation-label">Explanation</div>
           <div class="review-explanation">${q.explanation}</div>`
        : '';
      // For verbal questions show text in a passage box; for knowledge/numerical show inline
      const textClass = q.type === 'verbal' ? 'review-qtext' : 'review-qtext review-qtext--plain';
      html += `
        <div class="review-card">
          <div class="review-qnum">Question ${q.number}</div>
          <div class="${textClass}">${q.text}</div>
          <div class="review-answers">
            <div class="review-wrong-answer">✗ Your answer: ${label(q, given)}</div>
            <div class="review-correct-answer">✓ Correct answer: ${label(q, q.correct)}</div>
          </div>
          ${explanationHtml}
        </div>`;
    });
    reviewSection.innerHTML = html;
  }

  document.getElementById('btn-home').onclick = () => { initHome(); showScreen('screen-home'); };
}

// ── DIALOG ─────────────────────────────────────────
function showDialog(message, onConfirm) {
  document.getElementById('dialog-message').textContent = message;
  document.getElementById('overlay').classList.remove('hidden');
  const close = () => document.getElementById('overlay').classList.add('hidden');
  document.getElementById('dialog-confirm').onclick = () => { close(); onConfirm(); };
  document.getElementById('dialog-cancel').onclick = close;
}

// ── INIT ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => { initHome(); showScreen('screen-home'); });
