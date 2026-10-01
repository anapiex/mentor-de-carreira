// Banco de Dados de Perguntas do Teste Vocacional
const questions = [
  {
    id: 1,
    title: "Em um trabalho em grupo, qual papel você costuma assumir com mais facilidade?",
    options: [
      { text: "Lógica & Algoritmos: Analiso dados, crio a estrutura técnica e resolvo problemas complexos.", category: "tecnologia" },
      { text: "Cuidado & Empatia: Preocupo-me com o bem-estar de todos e na mediação de conflitos.", category: "saude" },
      { text: "Cálculos & Estruturas: Organizo orçamentos, números e o planejamento prático.", category: "exatas" },
      { text: "Comunicação & Debates: Defendo ideias, redijo textos e lidero a apresentação oral.", category: "humanas" },
      { text: "Criação Visual & Design: Cuido da parte estética, esquemas visuais e inovação.", category: "criativo" }
    ]
  },
  {
    id: 2,
    title: "Qual tipo de assunto desperta mais o seu interesse fora da escola?",
    options: [
      { text: "Inovações tecnológicas, inteligência artificial e jogos eletrônicos.", category: "tecnologia" },
      { text: "Corpo humano, biologia, nutrição e funcionamento da mente.", category: "saude" },
      { text: "Física, matemática aplicada, construções e mercado financeiro.", category: "exatas" },
      { text: "História, política, psicologia, geopolítica e direitos sociais.", category: "humanas" },
      { text: "Arte, música, produção audiovisual, arquitetura e moda.", category: "criativo" }
    ]
  },
  {
    id: 3,
    title: "Qual ambiente de trabalho você se projeta no futuro?",
    options: [
      { text: "Empresa de tecnologia ou home office trabalhando em equipe remota.", category: "tecnologia" },
      { text: "Hospital, clínica, laboratório ou atendimento direto ao público.", category: "saude" },
      { text: "Escritório corporativo, canteiro de obras ou indústria tecnológica.", category: "exatas" },
      { text: "Tribunal, ONGs, empresas de comunicação ou instituições de ensino.", category: "humanas" },
      { text: "Estúdio criativo, agência de publicidade ou atelier autônomo.", category: "criativo" }
    ]
  },
  {
    id: 4,
    title: "Como você prefere resolver um grande desafio?",
    options: [
      { text: "Testando hipóteses e escrevendo soluções sistemáticas.", category: "tecnologia" },
      { text: "Analisando sintomas/causas para ajudar quem precisa rapidamente.", category: "saude" },
      { text: "Aplicando fórmulas, cálculos e métricas para achar a precisão.", category: "exatas" },
      { text: "Debatendo, pesquisando referências teóricas e dialogando.", category: "humanas" },
      { text: "Pensando fora da caixa com brainstorms visuais e conceitos originais.", category: "criativo" }
    ]
  },
  {
    id: 5,
    title: "Qual o seu principal objetivo de carreira ao sair do 3º ano?",
    options: [
      { text: "Criar softwares, aplicativos ou soluções digitais inovadoras.", category: "tecnologia" },
      { text: "Impactar e melhorar diretamente a qualidade de vida das pessoas.", category: "saude" },
      { text: "Projetar estruturas, sistemas ou gerenciar grandes operações financeiras.", category: "exatas" },
      { text: "Transformar a sociedade por meio do conhecimento, leis ou comunicação.", category: "humanas" },
      { text: "Expressar ideias marcantes e criar experiências visuais únicas.", category: "criativo" }
    ]
  }
];

// Banco de Dados de Carreiras
const careersData = [
  {
    title: "Engenharia de Software",
    category: "tecnologia",
    icon: "fa-code",
    desc: "Desenvolve sistemas, aplicativos e programas. Área em altíssima expansão global.",
    salary: "Média: R$ 4.500 - R$ 15.000+"
  },
  {
    title: "Ciência de Dados / IA",
    category: "tecnologia",
    icon: "fa-brain",
    desc: "Analisa grandes volumes de dados e desenvolve modelos inteligentes para decisões estratégicas.",
    salary: "Média: R$ 5.000 - R$ 16.000+"
  },
  {
    title: "Medicina",
    category: "saude",
    icon: "fa-user-doctor",
    desc: "Diagnostica, trata e previne doenças, focando na manutenção da saúde e vida humana.",
    salary: "Média: R$ 7.000 - R$ 20.000+"
  },
  {
    title: "Psicologia",
    category: "saude",
    icon: "fa-head-side-virus",
    desc: "Estuda o comportamento humano e processos mentais, oferecendo suporte emocional e clínico.",
    salary: "Média: R$ 3.000 - R$ 9.000+"
  },
  {
    title: "Engenharia Civil",
    category: "exatas",
    icon: "fa-building",
    desc: "Projeta, gerencia e fiscaliza construções de infraestrutura, edifícios e grandes obras.",
    salary: "Média: R$ 5.500 - R$ 14.000+"
  },
  {
    title: "Administração & Finanças",
    category: "exatas",
    icon: "fa-chart-line",
    desc: "Gerencia recursos, operações e estratégias de crescimento financeiro em empresas.",
    salary: "Média: R$ 3.500 - R$ 12.000+"
  },
  {
    title: "Direito",
    category: "humanas",
    icon: "fa-gavel",
    desc: "Garante a aplicação das leis, defesa de direitos e mediação de conflitos jurídicos.",
    salary: "Média: R$ 4.000 - R$ 18.000+"
  },
  {
    title: "Jornalismo & Mídias Digitais",
    category: "humanas",
    icon: "fa-newspaper",
    desc: "Investiga fatos, produz conteúdos informativos e gerencia comunicação em canais digitais.",
    salary: "Média: R$ 3.000 - R$ 8.000+"
  },
  {
    title: "Design de UX/UI",
    category: "criativo",
    icon: "fa-pen-ruler",
    desc: "Cria interfaces digitais intuitivas, agradáveis e focadas na experiência do usuário.",
    salary: "Média: R$ 4.000 - R$ 12.000+"
  },
  {
    title: "Arquitetura e Urbanismo",
    category: "criativo",
    icon: "fa-compass-drafting",
    desc: "Planeja e projeta espaços habitáveis, combinando estética, funcionalidade e sustentabilidade.",
    salary: "Média: R$ 4.000 - R$ 11.000+"
  }
];

// Estado da Aplicação
let currentQuestionIndex = 0;
let scores = { tecnologia: 0, saude: 0, exatas: 0, humanas: 0, criativo: 0 };

// Elementos DOM
const navQuiz = document.getElementById('nav-quiz');
const navExplore = document.getElementById('nav-explore');
const quizSection = document.getElementById('quiz-section');
const exploreSection = document.getElementById('explore-section');

const quizProgressContainer = document.getElementById('quiz-progress-container');
const questionNumber = document.getElementById('question-number');
const progressPercent = document.getElementById('progress-percent');
const progressFill = document.getElementById('progress-fill');

const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultsScreen = document.getElementById('results-screen');
const startQuizBtn = document.getElementById('start-quiz-btn');
const questionTitle = document.getElementById('question-title');
const optionsContainer = document.getElementById('options-container');
const recommendationsList = document.getElementById('recommendations-list');
const restartQuizBtn = document.getElementById('restart-quiz-btn');
const exploreMoreBtn = document.getElementById('explore-more-btn');

const careersGrid = document.getElementById('careers-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const themeToggleBtn = document.getElementById('theme-toggle');

// Navegação entre abas
navQuiz.addEventListener('click', () => {
  navQuiz.classList.add('active');
  navExplore.classList.remove('active');
  quizSection.classList.remove('hidden');
  exploreSection.classList.add('hidden');
});

navExplore.addEventListener('click', () => {
  navExplore.classList.add('active');
  navQuiz.classList.remove('active');
  exploreSection.classList.remove('hidden');
  quizSection.classList.add('hidden');
  renderCareers('all');
});

exploreMoreBtn.addEventListener('click', () => {
  navExplore.click();
});

// Lógica do Quiz
startQuizBtn.addEventListener('click', () => {
  startScreen.classList.add('hidden');
  questionScreen.classList.remove('hidden');
  quizProgressContainer.classList.remove('hidden');
  currentQuestionIndex = 0;
  scores = { tecnologia: 0, saude: 0, exatas: 0, humanas: 0, criativo: 0 };
  loadQuestion();
});

function loadQuestion() {
  const q = questions[currentQuestionIndex];
  questionTitle.textContent = `${q.id}. ${q.title}`;
  
  const total = questions.length;
  const progress = Math.round(((currentQuestionIndex + 1) / total) * 100);
  questionNumber.textContent = `Pergunta ${currentQuestionIndex + 1} de ${total}`;
  progressPercent.textContent = `${progress}%`;
  progressFill.style.width = `${progress}%`;

  optionsContainer.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<i class="fa-regular fa-circle-dot"></i> <span>${opt.text}</span>`;
    btn.addEventListener('click', () => selectOption(opt.category));
    optionsContainer.appendChild(btn);
  });
}

function selectOption(category) {
  scores[category]++;
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  questionScreen.classList.add('hidden');
  quizProgressContainer.classList.add('hidden');
  resultsScreen.classList.remove('hidden');

  const sortedCategories = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  const topCategories = sortedCategories.slice(0, 2);

  recommendationsList.innerHTML = '';

  topCategories.forEach(cat => {
    const matchingCareers = careersData.filter(c => c.category === cat);
    matchingCareers.forEach(career => {
      const card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML = `
        <div class="result-card-header">
          <h4><i class="fa-solid ${career.icon}"></i> ${career.title}</h4>
          <span class="match-tag">Afinidade Alta</span>
        </div>
        <p>${career.desc}</p>
        <div class="result-meta">
          <span><i class="fa-solid fa-money-bill-wave"></i> ${career.salary}</span>
        </div>
      `;
      recommendationsList.appendChild(card);
    });
  });
}

restartQuizBtn.addEventListener('click', () => {
  resultsScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
});

// Renderizar Galeria de Carreiras
function renderCareers(filterCategory = 'all') {
  careersGrid.innerHTML = '';
  const filtered = filterCategory === 'all' 
    ? careersData 
    : careersData.filter(c => c.category === filterCategory);

  filtered.forEach(career => {
    const card = document.createElement('div');
    card.className = 'career-card';
    card.innerHTML = `
      <div class="career-card-top">
        <div class="career-icon"><i class="fa-solid ${career.icon}"></i></div>
        <h3>${career.title}</h3>
        <p>${career.desc}</p>
      </div>
      <div class="career-card-bottom">
        <span>${career.salary}</span>
      </div>
    `;
    careersGrid.appendChild(card);
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCareers(btn.dataset.category);
  });
});

// Tema Claro / Escuro
themeToggleBtn.addEventListener('click', () => {
  const isDark = document.body.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.body.removeAttribute('data-theme');
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem('futuro360_theme', 'light');
  } else {
    document.body.setAttribute('data-theme', 'dark');
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem('futuro360_theme', 'dark');
  }
});

if (localStorage.getItem('futuro360_theme') === 'dark') {
  document.body.setAttribute('data-theme', 'dark');
  themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}
