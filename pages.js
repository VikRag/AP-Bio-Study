function renderHome() {
  return `
    <div class="hero">
      <div class="hero-label">AP Biology Study Tool</div>
      <h1>Master AP Biology.<br><span>Study with intention.</span></h1>
      <p class="hero-sub">A complete study system aligned to the AP Biology Course and Exam Description. Use the Green Light method to track what you know.</p>
      <div class="hero-cards">
        <div class="hero-card" onclick="navigate('units')">
          <div class="hero-card-icon"></div>
          <h3>Unit Review</h3>
          <p>All 8 units with topics, key concepts, and mastery tracking.</p>
        </div>
        <div class="hero-card" onclick="navigate('exam')">
          <div class="hero-card-icon"></div>
          <h3>Exam Breakdown</h3>
          <p>MCQ/FRQ structure, unit weights, and science skills.</p>
        </div>
        <div class="hero-card" onclick="navigate('mcq')">
          <div class="hero-card-icon"></div>
          <h3>MCQ Practice</h3>
          <p>Timed multiple-choice questions with detailed explanations.</p>
        </div>
        <div class="hero-card" onclick="navigate('frq')">
          <div class="hero-card-icon"></div>
          <h3>FRQ Practice</h3>
          <p>Long and short free-response questions with rubrics.</p>
        </div>
        <div class="hero-card" onclick="navigate('score')">
          <div class="hero-card-icon"></div>
          <h3>Score Calculator</h3>
          <p>Estimate your AP score based on raw section scores.</p>
        </div>
      </div>
    </div>
    <div class="green-light-banner">
      <h2>The Green Light Study System</h2>
      <p>Rate your confidence on each unit using the traffic light system. Green means mastered, amber means review needed, red means start from scratch. Revisit red and amber units before your exam.</p>
      <div class="gl-legend">
        <div class="gl-item"><div class="gl-dot green"></div> Mastered</div>
        <div class="gl-item"><div class="gl-dot amber"></div> Needs Review</div>
        <div class="gl-item"><div class="gl-dot red"></div> Start Over</div>
      </div>
    </div>
  `;
}

function renderUnits() {
  const glState = JSON.parse(localStorage.getItem('gl_state') || '{}');

  const cards = UNITS.map(unit => {
    const gl = glState[unit.id] || null;
    const topicsPreview = unit.topics.slice(0, 3).map(t => `<li>${t}</li>`).join('');
    const badgeText = gl === 'green' ? 'Mastered' : gl === 'amber' ? 'Needs Review' : gl === 'red' ? 'Start Over' : 'Not Rated';
    const badgeClass = gl || 'amber';
    const progress = gl === 'green' ? 100 : gl === 'amber' ? 50 : gl === 'red' ? 10 : 0;

    return `
      <div class="unit-card" onclick="openUnit(${unit.id})">
        <div class="unit-card-header">
          <div>
            <div class="unit-number">Unit ${unit.id}</div>
            <h3>${unit.title}</h3>
          </div>
          <div class="unit-weight">${unit.weight}</div>
        </div>
        <div class="unit-card-body">
          <ul class="unit-topics-preview">${topicsPreview}</ul>
          <div class="unit-progress-bar"><div class="unit-progress-fill" style="width:${progress}%"></div></div>
          <div class="unit-status-row">
            <span class="unit-status-label">${unit.topics.length} topics</span>
            <span class="gl-badge ${badgeClass}">${badgeText}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="page-header">
      <h2>Unit Review</h2>
      <p>8 units aligned to the AP Biology Course and Exam Description. Click any unit for full detail.</p>
    </div>
    <div class="units-grid">${cards}</div>
    <div id="unit-modal" class="modal-overlay" onclick="handleModalClick(event)">
      <div class="modal" id="modal-content"></div>
    </div>
  `;
}

function renderExam() {
  const unitWeights = [
    { name: "Unit 1", pct: 9 },
    { name: "Unit 2", pct: 11 },
    { name: "Unit 3", pct: 14 },
    { name: "Unit 4", pct: 12 },
    { name: "Unit 5", pct: 9 },
    { name: "Unit 6", pct: 14 },
    { name: "Unit 7", pct: 16 },
    { name: "Unit 8", pct: 12 }
  ];

  const weightBars = unitWeights.map(u => `
    <div class="unit-weight-bar">
      <div class="unit-weight-bar-label">${u.name}</div>
      <div class="unit-weight-bar-track"><div class="unit-weight-bar-fill" style="width:${u.pct * 4}%"></div></div>
      <div class="unit-weight-bar-pct">${u.pct}%</div>
    </div>
  `).join('');

  const skillCards = EXAM_SKILLS.map(s => `
    <div class="skill-card">
      <div class="skill-card-num">${s.num}</div>
      <h4>${s.title}</h4>
      <p>${s.desc}</p>
    </div>
  `).join('');

  return `
    <div class="page-header">
      <h2>Exam Breakdown</h2>
      <p>3 hours 15 minutes. Two sections: Multiple Choice and Free Response.</p>
    </div>
    <div class="exam-layout">
      <div class="exam-section">
        <h3>Section I — MCQ</h3>
        <div class="exam-section-sub">Multiple Choice Questions</div>
        <div class="exam-row"><span class="exam-row-label">Questions</span><span class="exam-row-val">60</span></div>
        <div class="exam-row"><span class="exam-row-label">Time</span><span class="exam-row-val">90 minutes</span></div>
        <div class="exam-row"><span class="exam-row-label">Weight</span><span class="exam-row-val">50% of score</span></div>
        <div class="exam-row"><span class="exam-row-label">Format</span><span class="exam-row-val">Individual + Sets</span></div>
        <div class="exam-row"><span class="exam-row-label">Negative marking</span><span class="exam-row-val">No</span></div>
      </div>
      <div class="exam-section">
        <h3>Section II — FRQ</h3>
        <div class="exam-section-sub">Free Response Questions</div>
        <div class="exam-row"><span class="exam-row-label">Questions</span><span class="exam-row-val">6</span></div>
        <div class="exam-row"><span class="exam-row-label">Time</span><span class="exam-row-val">90 minutes</span></div>
        <div class="exam-row"><span class="exam-row-label">Weight</span><span class="exam-row-val">50% of score</span></div>
        <div class="exam-row"><span class="exam-row-label">Long FRQ</span><span class="exam-row-val">2 questions</span></div>
        <div class="exam-row"><span class="exam-row-label">Short FRQ</span><span class="exam-row-val">4 questions</span></div>
      </div>
      <div class="exam-section">
        <h3>AP Score Distribution</h3>
        <div class="exam-section-sub">Approximate score thresholds</div>
        <div class="exam-row"><span class="exam-row-label">Score 5</span><span class="exam-row-val">~75%+ composite</span></div>
        <div class="exam-row"><span class="exam-row-label">Score 4</span><span class="exam-row-val">~60-74%</span></div>
        <div class="exam-row"><span class="exam-row-label">Score 3</span><span class="exam-row-val">~45-59%</span></div>
        <div class="exam-row"><span class="exam-row-label">Score 2</span><span class="exam-row-val">~30-44%</span></div>
        <div class="exam-row"><span class="exam-row-label">Score 1</span><span class="exam-row-val">Below 30%</span></div>
      </div>
      <div class="exam-section">
        <h3>Unit Exam Weights</h3>
        <div class="exam-section-sub">Approximate % of total exam</div>
        ${weightBars}
      </div>
      <div class="exam-section exam-skills">
        <h3>Science Practices (Exam Skills)</h3>
        <div class="exam-section-sub">All questions are mapped to one of these six science practices</div>
        <div class="skills-grid">${skillCards}</div>
      </div>
    </div>
  `;
}

function renderMCQ() {
  return `
    <div class="page-header">
      <h2>MCQ Practice</h2>
      <p>Select a unit and start a timed practice session.</p>
    </div>
    <div class="mcq-container">
      <div class="quiz-controls">
        <select id="mcq-unit-filter">
          <option value="all">All Units</option>
          ${UNITS.map(u => `<option value="${u.id}">Unit ${u.id}: ${u.title}</option>`).join('')}
        </select>
        <button class="btn btn-primary" onclick="startMCQ()">Start Practice</button>
      </div>
      <div id="mcq-content">
        <div style="color:var(--text-muted);font-size:0.88rem;padding:2rem 0;">Select a unit filter and click Start Practice to begin.</div>
      </div>
    </div>
  `;
}

function renderFRQ() {
  const cards = FRQ_QUESTIONS.map(q => {
    const parts = q.parts.map(p => `
      <div class="frq-part">
        <div class="frq-part-label">${p.label} (${p.points} pts)</div>
        <div class="frq-part-q">${p.question}</div>
        <textarea class="frq-textarea" placeholder="Write your response here..." id="frq-${q.id}-${p.label.replace(' ','')}"></textarea>
      </div>
    `).join('');

    const rubricItems = q.rubric.map(r => `<li>${r}</li>`).join('');
    const typeLabel = q.type === 'long' ? 'Long FRQ' : 'Short FRQ';
    const unitLabel = `Unit ${q.unit}`;

    return `
      <div class="frq-card">
        <div class="frq-card-header">
          <div>
            <div style="font-size:0.68rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--green-mid);font-weight:600;margin-bottom:0.25rem;">${unitLabel}</div>
            <h3>${q.title}</h3>
          </div>
          <span class="frq-type-badge ${q.type}">${typeLabel}</span>
        </div>
        <div class="frq-card-body">
          <div class="frq-parts">${parts}</div>
          <div class="frq-rubric" id="rubric-${q.id}">
            <div class="frq-rubric-title">Scoring Rubric</div>
            <ul>${rubricItems}</ul>
          </div>
        </div>
        <div class="frq-actions">
          <button class="btn btn-secondary" onclick="toggleRubric(${q.id})">Show Rubric</button>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="page-header">
      <h2>FRQ Practice</h2>
      <p>2 long FRQs and 4 short FRQs modeled after the AP Biology exam. Write your response, then reveal the rubric.</p>
    </div>
    <div class="frq-container">${cards}</div>
  `;
}

function renderScore() {
  return `
    <div class="page-header">
      <h2>AP Score Calculator</h2>
      <p>Enter your raw section scores to estimate your composite AP score.</p>
    </div>
    <div class="score-container">
      <div class="score-grid">
        <div class="score-panel">
          <h3>Section I — MCQ</h3>
          <div class="score-panel-sub">60 questions, each worth 1 point</div>
          <div class="score-input-row">
            <span class="score-input-label">Number correct (0-60)</span>
            <input type="number" id="mcq-correct" min="0" max="60" value="0" oninput="calcScore()">
          </div>
        </div>
        <div class="score-panel">
          <h3>Section II — FRQ</h3>
          <div class="score-panel-sub">Long FRQs = 8-10 pts each, Short = 4 pts each</div>
          <div class="score-input-row">
            <span class="score-input-label">Long FRQ 1 (0-10)</span>
            <input type="number" id="frq1" min="0" max="10" value="0" oninput="calcScore()">
          </div>
          <div class="score-input-row">
            <span class="score-input-label">Long FRQ 2 (0-10)</span>
            <input type="number" id="frq2" min="0" max="10" value="0" oninput="calcScore()">
          </div>
          <div class="score-input-row">
            <span class="score-input-label">Short FRQ 1 (0-4)</span>
            <input type="number" id="frq3" min="0" max="4" value="0" oninput="calcScore()">
          </div>
          <div class="score-input-row">
            <span class="score-input-label">Short FRQ 2 (0-4)</span>
            <input type="number" id="frq4" min="0" max="4" value="0" oninput="calcScore()">
          </div>
          <div class="score-input-row">
            <span class="score-input-label">Short FRQ 3 (0-4)</span>
            <input type="number" id="frq5" min="0" max="4" value="0" oninput="calcScore()">
          </div>
          <div class="score-input-row">
            <span class="score-input-label">Short FRQ 4 (0-4)</span>
            <input type="number" id="frq6" min="0" max="4" value="0" oninput="calcScore()">
          </div>
        </div>
      </div>
      <div class="score-result">
        <span class="score-result-num" id="ap-score">1</span>
        <div class="score-result-label">Estimated AP Score</div>
        <div class="score-bars">
          ${AP_SCORE_THRESHOLDS.map(t => `
            <div class="score-bar-row">
              <div class="score-bar-label">${t.label}</div>
              <div class="score-bar-track"><div class="score-bar-fill ${t.color}" id="bar-${t.score}" style="width:0%"></div></div>
              <div class="score-bar-pct" id="pct-${t.score}">${t.min}%+</div>
            </div>
          `).join('')}
        </div>
        <div class="score-note" id="score-note">Enter your scores above to see your estimated AP score (1-5).</div>
      </div>
    </div>
  `;
}
