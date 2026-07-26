const translations = {
  pt: {
    'header-cta': 'Solicitar proposta',
    'hero-tagline': 'Portfólio mobile-first para projetos elétricos',
    'hero-title': 'Projetos elétricos com segurança, inovação e confiança.',
    'hero-description': 'Um portfólio moderno que valoriza seu posicionamento premium e fala diretamente com clientes residenciais, industriais e de energia renovável.',
    'hero-projects': 'Ver projetos',
    'hero-contact': 'Falar com a equipe',
    'projects-label': 'Portfólio deslizante',
    'projects-title': 'Projetos que impressionam clientes e geram confiança.',
    'services-label': 'Como podemos ajudar',
    'services-title': 'Abordagem técnica e entrega objetiva.',
    'services-description': 'Projetos elétricos com qualidade, documentação clara e foco em resultados que o cliente consegue usar na prática.',
    'contact-label': 'Vamos conversar',
    'contact-title': 'Pronto para levar seu projeto elétrico ao próximo nível?',
    'contact-description': 'Entre em contato para discutir sua necessidade e receber uma proposta técnica clara, rápida e sem burocracia.'
  },
  en: {
    'header-cta': 'Request proposal',
    'hero-tagline': 'Mobile-first portfolio for electrical projects',
    'hero-title': 'Electrical projects with safety, innovation and trust.',
    'hero-description': 'A modern portfolio that values your premium positioning and speaks directly to residential, industrial and renewable energy clients.',
    'hero-projects': 'View projects',
    'hero-contact': 'Talk to the team',
    'projects-label': 'Sliding portfolio',
    'projects-title': 'Projects that impress clients and build trust.',
    'services-label': 'How we can help',
    'services-title': 'Technical approach and objective delivery.',
    'services-description': 'Electrical projects with quality, clear documentation and focus on results that the client can use in practice.',
    'contact-label': 'Let’s talk',
    'contact-title': 'Ready to take your electrical project to the next level?',
    'contact-description': 'Contact us to discuss your need and receive a clear, fast and hassle-free technical proposal.'
  }
};

const applyTranslation = (lang) => {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach((element) => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
};

const initLanguageSwitcher = () => {
  const buttons = document.querySelectorAll('[data-lang-btn]');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const lang = button.getAttribute('data-lang-btn');
      localStorage.setItem('site-language', lang);
      applyTranslation(lang);
    });
  });

  const initialLang = localStorage.getItem('site-language') || 'pt';
  applyTranslation(initialLang);
};

export { initLanguageSwitcher };
