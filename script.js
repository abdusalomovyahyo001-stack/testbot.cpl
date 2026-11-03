const subjectConfig = {
  math: {
    label: 'Matematika',
    timeLimit: 120,
    questions: [
      { question: '12 × 8 = ?', options: ['84', '96', '102', '108'], answer: '96' },
      { question: '25 + 17 = ?', options: ['32', '38', '42', '40'], answer: '42' },
      { question: 'Yuzdan 1/4 qismi nechaga teng?', options: ['20', '25', '30', '50'], answer: '25' },
      { question: '17² = ?', options: ['289', '279', '289', '271'], answer: '289' },
      { question: '180 ÷ 9 = ?', options: ['15', '18', '20', '22'], answer: '20' },
      { question: '9 × 7 = ?', options: ['61', '63', '65', '67'], answer: '63' },
      { question: '72 ÷ 8 = ?', options: ['7', '8', '9', '10'], answer: '9' },
      { question: '3/5 + 1/5 = ?', options: ['4/5', '2/5', '3/10', '1/5'], answer: '4/5' },
      { question: '45 - 19 = ?', options: ['24', '26', '28', '30'], answer: '26' },
      { question: '14 × 6 = ?', options: ['72', '74', '84', '86'], answer: '84' },
      { question: 'Kattasi 100 dan kichik eng katta toq son qaysi?', options: ['99', '97', '98', '96'], answer: '99' },
      { question: '5² + 3² = ?', options: ['34', '28', '32', '30'], answer: '34' }
    ]
  },
  physics: {
    label: 'Fizika',
    timeLimit: 120,
    questions: [
      { question: 'Tezlik formulasini toping?', options: ['S ÷ t', 't ÷ S', 'm × v', 'F × S'], answer: 'S ÷ t' },
      { question: 'Vaqt birliklari qaysi?', options: ['Kilogram', 'Sekund', 'Newton', 'Joul'], answer: 'Sekund' },
      { question: 'Elektr zaryadning SI birliklari?', options: ['Vatt', 'Kulon', 'Omas', 'Nuton'], answer: 'Kulon' },
      { question: 'Harakatdagi jismlar uchun kuch nima?', options: ['Yengil', 'Olib ketuvchi', 'Tormozlovchi', 'Taʼsir etuvchi'], answer: 'Taʼsir etuvchi' },
      { question: 'Suvning qaynash temperaturasi qanchaga teng?', options: ['90°C', '100°C', '120°C', '80°C'], answer: '100°C' },
      { question: 'Sirt birligi haqida qaysi ifoda to‘g‘ri?', options: ['S = m / v', 'S = v / t', 'S = F / A', 'S = v × t'], answer: 'S = v × t' },
      { question: 'Bosim formulasi qaysi?', options: ['P = F / S', 'P = S / F', 'P = m × g', 'P = v × t'], answer: 'P = F / S' },
      { question: 'Yurak chalinishi qanday fizik hodisa?', options: ['Mekanik', 'Elektr', 'Elektromagnit', 'Termik'], answer: 'Mekanik' },
      { question: 'O‘zgaruvchan tok nima?', options: ['Doimiy yo‘nalish', 'Yo‘nalishi o‘zgaruvchi tok', 'Faol massa', 'Buzilmagan tok'], answer: 'Yo‘nalishi o‘zgaruvchi tok' },
      { question: 'Massa birliklari qaysi?', options: ['Kilogram', 'Volt', 'Metr', 'Pascal'], answer: 'Kilogram' },
      { question: 'Jismning tezlanishi nimaga bog‘liq?', options: ['Maqsadga', 'Kuchga', 'Yoqimli', 'Aylanishga'], answer: 'Kuchga' },
      { question: 'Balandlikdan tushayotgan jism uchun asosiy kuch nima?', options: ['Tortish kuchi', 'Olib ketuvchi kuch', 'Magnetik kuch', 'Elektr kuchi'], answer: 'Tortish kuchi' }
    ]
  },
  informatics: {
    label: 'Informatika',
    timeLimit: 120,
    questions: [
      { question: 'Kompyuterning bosh xotirasi nima deyiladi?', options: ['CPU', 'RAM', 'GPU', 'SSD'], answer: 'RAM' },
      { question: 'HTML nima uchun ishlatiladi?', options: ['Dasturlash tilini', 'Veb-sahifalarni tuzish', 'Rasm ishlash', 'Operatsion tizim'], answer: 'Veb-sahifalarni tuzish' },
      { question: '0 va 1 lar bilan ishlovchi til qanday ataladi?', options: ['Qiyin til', 'Binar kod', 'ASCII', 'Python'], answer: 'Binar kod' },
      { question: 'Faylning kengaytmasi .jpg boʼlsa, bu qanday fayl?', options: ['Video', 'Rasm', 'Audio', 'Matn'], answer: 'Rasm' },
      { question: 'Qaysi buyruq ekranga maʼlumot chiqaradi?', options: ['print()', 'input()', 'len()', 'sum()'], answer: 'print()' },
      { question: 'URL qaysi maʼnoni anglatadi?', options: ['Universal Resource Locator', 'User Reporting Language', 'Unified Robot Logic', 'Undertone Reference Library'], answer: 'Universal Resource Locator' },
      { question: 'USB nima?', options: ['Yadroviy qo‘shimcha', 'Fayl uzatish porti', 'Kompyuterning ichki xotirasi', 'Videokarta'], answer: 'Fayl uzatish porti' },
      { question: 'Internetda sahifani topuvchi dastur nima?', options: ['Brauzer', 'Antivirus', 'Excel', 'Word'], answer: 'Brauzer' },
      { question: 'Faylga nom berishda qaysi belgilar ishlatilmaydi?', options: ['Lotin harflari', 'Raqamlar', 'Tenglik belgisi', 'Yarim nuqta'], answer: 'Tenglik belgisi' },
      { question: 'Qaysi biri hisoblovchi tizimga kiruvchi maʼlumot?', options: ['Input', 'Output', 'Loop', 'Function'], answer: 'Input' },
      { question: 'RAMning qisqartmasi nima?', options: ['Random Access Memory', 'Read And Modify', 'Remote App Memory', 'Run Application Mode'], answer: 'Random Access Memory' },
      { question: 'Qaysi operator taqqoslash uchun ishlatiladi?', options: ['=', '==', '+', ':'], answer: '==' }
    ]
  },
  chemistry: {
    label: 'Kimyo',
    timeLimit: 120,
    questions: [
      { question: 'Suvning kimyoviy formulasi?', options: ['CO2', 'NaCl', 'H2O', 'O2'], answer: 'H2O' },
      { question: 'Tabiatdagi eng yengil element?', options: ['Kislorod', 'Geliy', 'Vodorod', 'Azot'], answer: 'Vodorod' },
      { question: 'NaCl nima?', options: ['Shakar', 'Tuz', 'Kislota', 'Suv'], answer: 'Tuz' },
      { question: 'Kislotalar pH qiymati qaysi oraliqda bo‘ladi?', options: ['7 dan yuqori', '7 dan past', 'faqat 7', '0 dan 10 gacha'], answer: '7 dan past' },
      { question: 'Metallarning umumiy xususiyati?', options: ['Yarimoq', 'Elektr tokini yaxshi o’tkazadi', 'Hech qaysi', 'Sovuk'], answer: 'Elektr tokini yaxshi o’tkazadi' },
      { question: 'CO2 ning nomi?', options: ['Kislorod', 'Karbonat angidrid', 'Azot', 'Suv bug‘i'], answer: 'Karbonat angidrid' },
      { question: 'Tuzlar qaysi xossalarga ega?', options: ['Suvda eriydi', 'Faolroq', 'Yarimoq bo‘ladi', 'Hech narsa'], answer: 'Suvda eriydi' },
      { question: 'Oksidning umumiy xususiyati?', options: ['Kislota hosil qiladi', 'Kimyoviy birikma', 'Atomga boradi', 'Hamma javob'], answer: 'Kimyoviy birikma' },
      { question: 'Qaysi element kislorodda mavjud?', options: ['Fe', 'O', 'Na', 'Cl'], answer: 'O' },
      { question: 'Metall va no-metall chegarasi nima?', options: ['Suv', 'Tabiat', 'Yarim metall', 'Element'], answer: 'Yarim metall' },
      { question: 'Qaysi biri kislota?', options: ['HCl', 'NaCl', 'H2O', 'O2'], answer: 'HCl' },
      { question: 'Aqrosida kimyoviy reaksiya nima?', options: ['Birikmada o‘zgarish', 'Fizik o‘zgarish', 'Massa kamayishi', 'Metr'], answer: 'Birikmada o‘zgarish' }
    ]
  },
  history: {
    label: 'Tarix',
    timeLimit: 120,
    questions: [
      { question: 'Qaysi davlatning poytaxti Toshkent?', options: ['Turkiya', 'O‘zbekiston', 'Qozog‘iston', 'Qirg‘iziston'], answer: 'O‘zbekiston' },
      { question: 'Amir Temur qaysi asarda mashhur?', options: ['Qutadgu Bilig', 'Temuriylar tarixi', 'Boburnoma', 'Farhod va Shirin'], answer: 'Temuriylar tarixi' },
      { question: 'Birinchi kosmonavt kim bo‘ldi?', options: ['Neil Armstrong', 'Yuri Gagarin', 'Valentina Tereshkova', 'Buzz Aldrin'], answer: 'Yuri Gagarin' },
      { question: 'Buyuk Britaniya qaysi kontinental qismda?', options: ['Osiyo', 'Yevropa', 'Afrika', 'Avstraliya'], answer: 'Yevropa' },
      { question: 'O‘zbekiston mustaqillik kunini qachon qabul qildi?', options: ['1990', '1991', '1992', '1989'], answer: '1991' },
      { question: '“Boburnoma” asarini kim yozgan?', options: ['Amir Temur', 'Zahiriddin Muhammad Bobur', 'Ulug‘bek', 'Alisher Navoiy'], answer: 'Zahiriddin Muhammad Bobur' },
      { question: 'Qadimgi Misrning mashhur daryosi qaysi?', options: ['Amudaryo', 'Nil', 'Jaxartes', 'Sirdaryo'], answer: 'Nil' },
      { question: 'Qaysi shahar “Qadimgi dunyo shahri” deb ataladi?', options: ['Buxoro', 'Merv', 'Samarqand', 'Toshkent'], answer: 'Samarqand' },
      { question: 'Birinchi jahon urushi qachon boshlangan?', options: ['1914', '1918', '1920', '1905'], answer: '1914' },
      { question: 'Qaysi sarkarda “Ming yillikdagi eng buyuk qo‘mondon” deb hisoblanadi?', options: ['Alexander', 'Amir Temur', 'Napoleon', 'Genghisxon'], answer: 'Amir Temur' },
      { question: 'O‘zbekiston Respublikasi Konstitutsiyasi qachon qabul qilindi?', options: ['1990', '1991', '1992', '1993'], answer: '1992' },
      { question: '“Siyosiy va iqtisodiy dunyo” deganda qaysi davr tushuniladi?', options: ['Antik davr', 'O‘rta asr', 'Hozirgi zamon', 'Uyg‘onish'], answer: 'O‘rta asr' }
    ]
  }
};

const state = {
  subjectKey: 'math',
  questions: [],
  currentIndex: 0,
  score: 0,
  userName: '',
  timeLeft: 0,
  timerId: null,
  answerLocked: false,
  answersLog: [],
};

const els = {
  setupSection: document.getElementById('setupSection'),
  quizSection: document.getElementById('quizSection'),
  resultSection: document.getElementById('resultSection'),
  subjectSelect: document.getElementById('subjectSelect'),
  leaderboardSubject: document.getElementById('leaderboardSubject'),
  startBtn: document.getElementById('startBtn'),
  nextBtn: document.getElementById('nextBtn'),
  playAgainBtn: document.getElementById('playAgainBtn'),
  nameInput: document.getElementById('nameInput'),
  subjectBadge: document.getElementById('subjectBadge'),
  progressText: document.getElementById('progressText'),
  timerText: document.getElementById('timerText'),
  progressFill: document.getElementById('progressFill'),
  questionText: document.getElementById('questionText'),
  answers: document.getElementById('answers'),
  resultTitle: document.getElementById('resultTitle'),
  resultScore: document.getElementById('resultScore'),
  resultPercent: document.getElementById('resultPercent'),
  leaderboardBody: document.getElementById('leaderboardBody'),
  analysisList: document.getElementById('analysisList'),
  analysisSummary: document.getElementById('analysisSummary'),
};

function shuffleArray(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getLeaderboardKey(subjectKey) {
  return `quizLeaderboard_${subjectKey}`;
}

function getSubjectLabel(subjectKey) {
  return subjectConfig[subjectKey]?.label || 'Fan';
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateTimerDisplay() {
  els.timerText.textContent = formatTime(state.timeLeft);
}

function startTimer() {
  clearInterval(state.timerId);
  state.timeLeft = subjectConfig[state.subjectKey].timeLimit;
  updateTimerDisplay();

  state.timerId = setInterval(() => {
    state.timeLeft = Math.max(0, state.timeLeft - 1);
    updateTimerDisplay();

    if (state.timeLeft <= 0) {
      clearInterval(state.timerId);
      finishQuiz(true);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timerId);
  state.timerId = null;
}

function renderLeaderboard(subjectKey) {
  const raw = localStorage.getItem(getLeaderboardKey(subjectKey));
  const entries = raw ? JSON.parse(raw) : [];

  const sorted = [...entries].sort((a, b) => {
    if (b.correct !== a.correct) return b.correct - a.correct;
    if (b.percentage !== a.percentage) return b.percentage - a.percentage;
    return a.name.localeCompare(b.name);
  }).slice(0, 20);

  if (!sorted.length) {
    els.leaderboardBody.innerHTML = `
      <tr>
        <td colspan="5" class="empty">Bu fan bo‘yicha hali hech kim natija qo‘ymagan.</td>
      </tr>
    `;
    return;
  }

  els.leaderboardBody.innerHTML = sorted.map((entry, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${entry.name}</td>
      <td>${entry.correct}</td>
      <td>${entry.total}</td>
      <td>${entry.percentage}%</td>
    </tr>
  `).join('');
}

function saveResultToLeaderboard(subjectKey, userName, score, total) {
  const leaderboardKey = getLeaderboardKey(subjectKey);
  const current = JSON.parse(localStorage.getItem(leaderboardKey) || '[]');
  const entry = {
    name: userName,
    correct: score,
    total,
    percentage: Math.round((score / total) * 100),
    savedAt: new Date().toISOString()
  };

  current.push(entry);
  const sorted = [...current].sort((a, b) => {
    if (b.correct !== a.correct) return b.correct - a.correct;
    if (b.percentage !== a.percentage) return b.percentage - a.percentage;
    return a.name.localeCompare(b.name);
  }).slice(0, 20);

  localStorage.setItem(leaderboardKey, JSON.stringify(sorted));
  renderLeaderboard(subjectKey);
}

function renderAnalysis() {
  const total = state.questions.length || 0;
  const answered = state.answersLog.length;
  const correctCount = state.answersLog.filter((item) => item.isCorrect).length;

  els.analysisSummary.textContent = `${correctCount}/${total}`;

  if (!answered) {
    els.analysisList.innerHTML = '<li class="analysis-empty">Hali savollar tahlil qilinmadi.</li>';
    return;
  }

  els.analysisList.innerHTML = state.answersLog.map((item, index) => {
    const statusText = item.isCorrect ? 'To\'g\'ri' : 'Xato';
    const statusClass = item.isCorrect ? 'success' : 'error';
    const selectedText = item.selected ? `Tanlangan: ${item.selected}` : 'Tanlanmagan';
    const answerText = `To\'g\'ri javob: ${item.answer}`;

    return `
      <li class="analysis-item ${statusClass}">
        <div>
          <span>Savol ${index + 1}</span>
          <small>${statusText}</small>
          <div>${selectedText}</div>
          <small>${answerText}</small>
        </div>
        <strong>${statusText}</strong>
      </li>
    `;
  }).join('');
}

function beginQuiz() {
  const subjectKey = els.subjectSelect.value;
  const name = els.nameInput.value.trim();

  if (!name) {
    alert('Iltimos, ismingizni kiriting!');
    els.nameInput.focus();
    return;
  }

  state.subjectKey = subjectKey;
  state.userName = name;
  state.currentIndex = 0;
  state.score = 0;
  state.answerLocked = false;
  state.answersLog = [];

  const questions = subjectConfig[subjectKey].questions.map((question) => ({
    ...question,
    options: shuffleArray(question.options)
  }));

  state.questions = shuffleArray(questions);

  els.setupSection.classList.add('hidden');
  els.resultSection.classList.add('hidden');
  els.quizSection.classList.remove('hidden');
  els.nextBtn.hidden = true;

  renderAnalysis();
  startTimer();
  renderQuestion();
}

function renderQuestion() {
  const total = state.questions.length;
  const question = state.questions[state.currentIndex];

  els.subjectBadge.textContent = getSubjectLabel(state.subjectKey);
  els.progressText.textContent = `${state.currentIndex + 1}/${total}`;
  els.progressFill.style.width = `${((state.currentIndex + 1) / total) * 100}%`;
  els.questionText.textContent = `${state.currentIndex + 1}. ${question.question}`;

  els.answers.innerHTML = '';

  question.options.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-btn';
    button.textContent = option;
    button.addEventListener('click', () => handleAnswer(button, option));
    els.answers.appendChild(button);
  });
}

function handleAnswer(button, chosenOption) {
  if (state.answerLocked) return;
  state.answerLocked = true;

  const currentQuestion = state.questions[state.currentIndex];
  const isCorrect = chosenOption === currentQuestion.answer;

  Array.from(els.answers.children).forEach((btn) => {
    const optionValue = btn.textContent;
    btn.disabled = true;

    if (optionValue === currentQuestion.answer) {
      btn.classList.add('correct');
    }

    if (optionValue === chosenOption && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  if (isCorrect) {
    state.score += 1;
  }

  state.answersLog[state.currentIndex] = {
    selected: chosenOption,
    answer: currentQuestion.answer,
    isCorrect
  };

  renderAnalysis();
  els.nextBtn.hidden = false;

  setTimeout(() => {
    if (state.currentIndex < state.questions.length - 1) {
      state.currentIndex += 1;
      state.answerLocked = false;
      els.nextBtn.hidden = true;
      renderQuestion();
      return;
    }

    state.answerLocked = false;
    finishQuiz(false);
  }, 700);
}

function finishQuiz(timeExpired = false) {
  stopTimer();

  const total = state.questions.length;
  const percentage = Math.round((state.score / total) * 100);

  els.quizSection.classList.add('hidden');
  els.resultSection.classList.remove('hidden');
  renderAnalysis();

  if (timeExpired) {
    els.resultTitle.textContent = `${state.userName}, vaqt tugadi!`;
  } else {
    els.resultTitle.textContent = `${state.userName}, natijangiz:`;
  }

  els.resultScore.textContent = `To'g'ri javoblar: ${state.score}/${total}`;
  els.resultPercent.textContent = `Foiz: ${percentage}%`;

  saveResultToLeaderboard(state.subjectKey, state.userName, state.score, total);
  els.leaderboardSubject.value = state.subjectKey;
  renderLeaderboard(state.subjectKey);
}

function nextQuestion() {
  if (state.answerLocked) return;

  if (state.currentIndex < state.questions.length - 1) {
    state.currentIndex += 1;
    els.nextBtn.hidden = true;
    renderQuestion();
    return;
  }

  finishQuiz(false);
}

function init() {
  Object.entries(subjectConfig).forEach(([key, value]) => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = value.label;
    els.subjectSelect.appendChild(option.cloneNode(true));
    els.leaderboardSubject.appendChild(option);
  });

  els.startBtn.addEventListener('click', beginQuiz);
  els.nextBtn.addEventListener('click', nextQuestion);
  els.playAgainBtn.addEventListener('click', () => {
    stopTimer();
    state.answersLog = [];
    renderAnalysis();
    els.resultSection.classList.add('hidden');
    els.setupSection.classList.remove('hidden');
    els.nameInput.value = '';
    els.subjectSelect.value = state.subjectKey;
  });

  els.leaderboardSubject.addEventListener('change', (event) => {
    renderLeaderboard(event.target.value);
  });

  els.subjectSelect.value = 'math';
  els.leaderboardSubject.value = 'math';
  renderLeaderboard('math');
}

init();
