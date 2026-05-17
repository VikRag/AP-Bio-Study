let currentPage = 'home';
let mcqSession = [];
let mcqIndex = 0;
let mcqAnswered = false;
let mcqScore = 0;

const pages = {
  home: renderHome,
  units: renderUnits,
  exam: renderExam,
  mcq: renderMCQ,
  frq: renderFRQ,
  score: renderScore
};

function navigate(page) {
  currentPage = page;
  document.querySelectorAll('.nav-link').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page);
  });
  const app = document.getElementById('app');
  app.innerHTML = `<div class="page active">${pages[page]()}</div>`;
  window.scrollTo(0, 0);
  if (page === 'score') setTimeout(calcScore, 50);
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.classList.contains('open')) navLinks.classList.remove('open');
    navigate(link.dataset.page);
  });
});

document.getElementById('navToggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

function openUnit(id) {
  const unit = UNITS.find(u => u.id === id);
  if (!unit) return;

  const glState = JSON.parse(localStorage.getItem('gl_state') || '{}');
  const current = glState[id] || null;

  const topicItems = unit.topics.map(t => `<li>${t}</li>`).join('');
  const conceptItems = unit.keyConcepts.map(c => `<div class="key-concept">${c}</div>`).join('');

  const modal = document.getElementById('modal-content');
  modal.innerHTML = `
    <div class="modal-top">
      <div>
        <div style="font-size:0.68rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--green-mid);font-weight:600;margin-bottom:0.3rem;">Unit ${unit.id} &mdash; ${unit.weight} of exam</div>
        <h2>${unit.title}</h2>
      </div>
      <button class="modal-close" onclick="closeUnit()">Close</button>
    </div>
    <div class="modal-body">
      <div class="modal-section">
        <h4>Topics</h4>
        <ul class="topic-list">${topicItems}</ul>
      </div>
      <div class="modal-section">
        <h4>Key Concepts</h4>
        ${conceptItems}
      </div>
      <div class="modal-section">
        <h4>Green Light Rating</h4>
        <div style="font-size:0.82rem;color:var(--text-muted);margin-bottom:0.5rem;">How well do you know this unit?</div>
        <div class="gl-set-row">
          <button class="gl-set-btn green ${current === 'green' ? 'selected' : ''}" onclick="setGL(${id}, 'green', this)">Mastered</button>
          <button class="gl-set-btn amber ${current === 'amber' ? 'selected' : ''}" onclick="setGL(${id}, 'amber', this)">Needs Review</button>
          <button class="gl-set-btn red ${current === 'red' ? 'selected' : ''}" onclick="setGL(${id}, 'red', this)">Start Over</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('unit-modal').classList.add('open');
}

function closeUnit() {
  document.getElementById('unit-modal').classList.remove('open');
  navigate('units');
}

function handleModalClick(e) {
  if (e.target === document.getElementById('unit-modal')) closeUnit();
}

function setGL(unitId, level, btn) {
  const glState = JSON.parse(localStorage.getItem('gl_state') || '{}');
  glState[unitId] = level;
  localStorage.setItem('gl_state', JSON.stringify(glState));

  btn.closest('.gl-set-row').querySelectorAll('.gl-set-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function startMCQ() {
  const filter = document.getElementById('mcq-unit-filter').value;
  let pool = filter === 'all' ? MCQ_QUESTIONS : MCQ_QUESTIONS.filter(q => q.unit == filter);

  if (pool.length === 0) {
    document.getElementById('mcq-content').innerHTML = `<div style="color:var(--text-muted);font-size:0.88rem;">No questions available for this unit yet.</div>`;
    return;
  }

  mcqSession = shuffle(pool);
  mcqIndex = 0;
  mcqScore = 0;
  mcqAnswered = false;
  renderMCQQuestion();
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderMCQQuestion() {
  const q = mcqSession[mcqIndex];
  const pct = Math.round((mcqIndex / mcqSession.length) * 100);
  const letters = ['A', 'B', 'C', 'D'];

  const options = q.options.map((opt, i) => `
    <li class="option-item" id="opt-${i}" onclick="selectMCQ(${i}, ${q.answer})">
      <span class="option-letter">${letters[i]}</span>
      <span>${opt}</span>
    </li>
  `).join('');

  document.getElementById('mcq-content').innerHTML = `
    <div class="progress-indicator">
      <span>Question ${mcqIndex + 1} of ${mcqSession.length}</span>
      <span>Score: ${mcqScore}/${mcqIndex}</span>
    </div>
    <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
    <div class="question-card">
      <div class="question-meta">Unit ${q.unit} &mdash; Question ${mcqIndex + 1}</div>
      <div class="question-text">${q.question}</div>
      <ul class="options-list">${options}</ul>
      <div class="explanation-box" id="explanation">${q.explanation}</div>
      <div class="question-actions">
        <button class="btn btn-secondary" id="btn-next" style="display:none" onclick="nextMCQ()">
          ${mcqIndex + 1 < mcqSession.length ? 'Next Question' : 'See Results'}
        </button>
      </div>
    </div>
  `;
}

function selectMCQ(selected, correct) {
  if (mcqAnswered) return;
  mcqAnswered = true;

  document.querySelectorAll('.option-item').forEach((el, i) => {
    el.classList.add('disabled');
    if (i === correct) el.classList.add('correct');
    else if (i === selected) el.classList.add('wrong');
  });

  if (selected === correct) mcqScore++;

  document.getElementById('explanation').classList.add('show');
  document.getElementById('btn-next').style.display = 'inline-block';
}

function nextMCQ() {
  mcqIndex++;
  mcqAnswered = false;

  if (mcqIndex >= mcqSession.length) {
    showMCQResults();
  } else {
    renderMCQQuestion();
  }
}

function showMCQResults() {
  const pct = Math.round((mcqScore / mcqSession.length) * 100);
  document.getElementById('mcq-content').innerHTML = `
    <div class="score-summary">
      <h3>Practice Complete</h3>
      <div class="score-big">${pct}%</div>
      <div style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem;">${mcqScore} correct out of ${mcqSession.length}</div>
      <div class="score-breakdown">
        <div class="score-breakdown-item">
          <span class="score-breakdown-num" style="color:var(--green)">${mcqScore}</span>
          <span class="score-breakdown-label">Correct</span>
        </div>
        <div class="score-breakdown-item">
          <span class="score-breakdown-num" style="color:var(--red)">${mcqSession.length - mcqScore}</span>
          <span class="score-breakdown-label">Incorrect</span>
        </div>
        <div class="score-breakdown-item">
          <span class="score-breakdown-num" style="color:var(--amber)">${mcqSession.length}</span>
          <span class="score-breakdown-label">Total</span>
        </div>
      </div>
      <div style="display:flex;gap:0.75rem;justify-content:center;">
        <button class="btn btn-primary" onclick="startMCQ()">Retry</button>
        <button class="btn btn-secondary" onclick="navigate('units')">Review Units</button>
      </div>
    </div>
  `;
}

function toggleRubric(id) {
  const rubric = document.getElementById(`rubric-${id}`);
  const btn = rubric.closest('.frq-card').querySelector('.frq-actions .btn-secondary');
  const isShown = rubric.classList.contains('show');
  rubric.classList.toggle('show');
  btn.textContent = isShown ? 'Show Rubric' : 'Hide Rubric';
}

function calcScore() {
  const mcqCorrect = parseInt(document.getElementById('mcq-correct')?.value || 0);
  const frq1 = parseInt(document.getElementById('frq1')?.value || 0);
  const frq2 = parseInt(document.getElementById('frq2')?.value || 0);
  const frq3 = parseInt(document.getElementById('frq3')?.value || 0);
  const frq4 = parseInt(document.getElementById('frq4')?.value || 0);
  const frq5 = parseInt(document.getElementById('frq5')?.value || 0);
  const frq6 = parseInt(document.getElementById('frq6')?.value || 0);

  const mcqMax = 60;
  const frqMax = 10 + 10 + 4 + 4 + 4 + 4;

  const mcqRaw = Math.min(mcqCorrect, mcqMax);
  const frqRaw = Math.min(frq1 + frq2 + frq3 + frq4 + frq5 + frq6, frqMax);

  const mcqWeighted = (mcqRaw / mcqMax) * 50;
  const frqWeighted = (frqRaw / frqMax) * 50;
  const composite = mcqWeighted + frqWeighted;

  let apScore = 1;
  if (composite >= 75) apScore = 5;
  else if (composite >= 60) apScore = 4;
  else if (composite >= 45) apScore = 3;
  else if (composite >= 30) apScore = 2;

  const scoreEl = document.getElementById('ap-score');
  if (scoreEl) scoreEl.textContent = apScore;

  const colors = { 5: '#166534', 4: '#16A34A', 3: '#D97706', 2: '#EA580C', 1: '#DC2626' };
  if (scoreEl) scoreEl.style.color = colors[apScore];

  const noteEl = document.getElementById('score-note');
  const notes = {
    5: 'Excellent work. A score of 5 is typically awarded to the top ~14% of test takers.',
    4: 'Strong performance. A 4 often earns college credit at many universities.',
    3: 'Qualified. A 3 demonstrates adequate mastery of AP Biology content.',
    2: 'You have foundational knowledge but need more preparation before the exam.',
    1: 'More preparation needed. Focus on red-light units and practice daily.'
  };
  if (noteEl) noteEl.textContent = notes[apScore];

  AP_SCORE_THRESHOLDS.forEach(t => {
    const bar = document.getElementById(`bar-${t.score}`);
    if (bar) {
      const isCurrent = t.score === apScore;
      bar.style.width = isCurrent ? '100%' : (t.score > apScore ? '15%' : '60%');
      bar.style.opacity = isCurrent ? '1' : '0.35';
    }
  });
}

navigate('home');
