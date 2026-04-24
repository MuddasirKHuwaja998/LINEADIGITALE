/* =========================================================
   LINEA DIGITALE — V5
   Preloader · Lenis · nav · reveals · i18n (EN/IT) · chatbot.
========================================================= */
(function () {
  'use strict';

  /* =========================================================
     I18N — English default, Italian on demand
  ========================================================= */
  const I18N = {
    en: {
      'nav.home':'Home','nav.about':'About','nav.services':'Services','nav.work':'Our Work',
      'nav.why':'Why Us','nav.process':'How It Works','nav.cta':'Get A Quote',
      'preloader.tag':'AI · Web · Automation','preloader.meta':'We make digital work for you',
      'hero.kicker':'AI · Web · Automation Agency',
      'hero.title.1':"We don't just",'hero.title.2':'build <em>digital.</em>',
      'hero.sub':'AI automation, smart websites, and intelligent systems for businesses ready to grow.',
      'hero.cta1':'Book A Call','hero.cta2':'Explore Services',
      'hero.m1':'AI uptime','hero.m2':'AI-native','hero.m3':'Faster','hero.scroll':'Scroll',
      'about.eyebrow':'About Linea Digitale',
      'about.title':'We build digital<br/>that <em>works.</em>',
      'about.p1':'Linea Digitale is a digital agency specializing in AI-powered web solutions for small and medium businesses. We build websites that work, chatbots that answer, and automation systems that save time — so you can focus on running your business.',
      'about.p2':'From first-click to final conversion, every line of code and every trained model is shipped to do one thing: make your business easier to run and easier to grow.',
      'about.vision.t':'Our Vision',
      'about.vision.p':'Make AI practical — so small and medium businesses get the same leverage that enterprises take for granted.',
      'about.values.t':'Our Values',
      'about.values.p':'Clarity. Craft. Automation. We ship things that actually work — and keep working.',
      'about.watch':'Watch intro',
      'svc.eyebrow':'What We Do',
      'svc.title':'Six services.<br/><em>One outcome.</em>',
      'svc.sub':'Digital that actually works for your business.',
      'svc.hint':'Hover or tap any card to reveal what’s inside.',
      'svc.cue1':'Reveal details →','svc.cue2':'Reveal details →','svc.cue3':'Reveal details →',
      'svc.cue4':'Reveal details →','svc.cue5':'Reveal details →','svc.cue6':'Reveal details →',
      'svc.head1':'What you get','svc.head2':'What you get','svc.head3':'What you get',
      'svc.head4':'What you get','svc.head5':'What you get','svc.head6':'What you get',
      'svc1.t':'Business Website','svc1.d':'Fast, modern, multi-page websites with smooth transitions and mobile-first design. Built to convert visitors into clients.',
      'svc2.t':'Website + AI Chatbot','svc2.d':'Everything in a business website, plus a custom AI assistant trained on your business that answers client questions 24/7.',
      'svc3.t':'AI Document Brain','svc3.d':'Upload your invoices, contracts, or reports and get clean, structured data automatically. Eliminate manual data entry forever.',
      'svc4.t':'AI Customer Assistant','svc4.d':'A standalone intelligent chatbot for your website or WhatsApp, trained on your products, services, and FAQs.',
      'svc5.t':'AI Internal RAG System','svc5.d':'Your staff can search and query all your internal documents, manuals, and knowledge instantly using natural language.',
      'svc6.t':'Machine Learning & Data Models','svc6.d':'Custom ML models for prediction, classification, or automation — deployed with a clean UI interface for your team.',
      'work.eyebrow':'Our Work',
      'work.title':'Recent <em>projects.</em><br/>Real outcomes.',
      'work.note':'Looking for tailored demos of our <em>RAG systems</em>, <em>custom AI chatbots</em>, or <em>bespoke ML models</em>? Drop a line at <a href="mailto:lineadigitale8@gmail.com">lineadigitale8@gmail.com</a> — we’ll walk you through builds closest to your use case.',
      'work.demo':'View demo','work.private':'Enterprise deployment',
      'work.n1':'Business Website + WhatsApp','work.tag1':'Web · WhatsApp integration','work.b1':'Fast, conversion-focused multi-page site with a floating WhatsApp button for direct client enquiries — live and in production.',
      'work.n2':'Website + AI Chatbot','work.tag2':'Web · Custom AI assistant','work.b2':'Multi-page clinic site with a private AI assistant trained on services and FAQs — answering patient questions 24/7 with a human-handoff path.',
      'work.n3':'Otofarma AI RAG System','work.tag3':'AI · Private RAG pipeline','work.b3':'Internal AI assistant for a pharmaceutical manufacturer. Staff query production documents and reports in natural language — powered by Google Gemini 2.5.',
      'why.eyebrow':'Why Linea Digitale',
      'why.title':'AI-native. Human-built.<br/><em>Ruthlessly practical.</em>',
      'why.sub':'Six reasons SMBs choose us over big agencies.',
      'why.t1':'AI Built-In, Not Bolted On','why.d1':'Every site, every tool, every system is designed with automation in mind from day one — not retrofitted afterwards.',
      'why.t2':'Real Ownership','why.d2':'You own the code, the models, the data. No vendor lock-in, no mystery hosting, no surprise price hikes.',
      'why.t3':'Tailored to Your Business','why.d3':"We don’t resell templates. Every project is scoped to your industry, your clients, and the work you actually do.",
      'why.t4':'Ship, Then Improve','why.d4':'Weeks, not quarters. We get a working version live fast, then iterate with you based on real usage.',
      'why.t5':'One Partner, Full Stack','why.d5':'Website, chatbot, document AI, ML models — all from one team. No handoffs, no integration gaps.',
      'why.t6':'SMB-Sized Budgets','why.d6':'Enterprise-grade tech, priced for small and medium businesses. Transparent quotes, no surprise add-ons.',
      'prc.eyebrow':'How It Works',
      'prc.title':'Four moves.<br/><em>No templates.</em>',
      'prc.hint':'Tap the + on any step to see what’s inside.',
      'prc.s1.t':'Discovery & Scope','prc.s1.d':'We learn your business, your clients, and where automation will actually save you time.',
      'prc.s1.l1':'60-minute call with the founder / operations lead to map your daily workflow',
      'prc.s1.l2':'Clear scope document: what we build, what you own, what it costs',
      'prc.s1.l3':'Timeline agreed upfront — weeks, not quarters',
      'prc.s2.t':'Design & Training','prc.s2.d':'We build the UI, prepare your data, and train the AI on your actual business content.',
      'prc.s2.l1':'Design mockups shared for approval before any coding starts',
      'prc.s2.l2':'We gather your documents, FAQs, and product info for training',
      'prc.s2.l3':'Models fine-tuned on your content — not generic internet data',
      'prc.s3.t':'Launch & Integrate','prc.s3.d':'We ship it live, connect it to your existing tools, and train your team to use it.',
      'prc.s3.l1':'Deployed on your domain or ours — you decide',
      'prc.s3.l2':'Connected to WhatsApp, email, CRM, or whatever tools you already use',
      'prc.s3.l3':'Team walkthrough + written handover so nothing is a black box',
      'prc.s4.t':'Support & Improve','prc.s4.d':'We watch how it performs in the real world and refine the model and UI based on real usage.',
      'prc.s4.l1':'Monthly check-ins to review usage, errors, and user feedback',
      'prc.s4.l2':'Model retraining as your content grows and your business evolves',
      'prc.s4.l3':'Direct line to us — no tickets, no bots, just WhatsApp or email',
      'cn.eyebrow':'Let’s Talk',
      'cn.title':'Your next <em>smart</em> workflow<br/>is one call away.',
      'cn.sub':"Tell us what’s slowing you down. We’ll show you the fastest way to automate it.",
      'cn.cta1':'Book A Call','cn.cta2':'Send a Project Brief',
      'cn.emailH':'Email','cn.phoneH':'Phone','cn.hqH':'Headquarters',
      'ft.tag':'<em>We don’t just build digital — we make it work for you.</em>',
      'ft.about':'AI-powered web solutions for small and medium businesses. Websites that work, chatbots that answer, automation that saves time.',
      'ft.quickH':'Quick Access','ft.svcH':'Services','ft.visitH':'Visit Us','ft.contact':'Contact',
      'ft.copy':'© 2026 Linea Digitale · All rights reserved','ft.stamp':'AI Powered · Web Crafted · Made in Napoli',
      'bot.title':'Linea Digitale Assistant','bot.status':'Online · Replies instantly','bot.speaking':'Speaking…',
      'bot.placeholder':'Type your question — or tap the mic…','bot.footer':'Powered by Linea Digitale AI',
      'bot.welcome':"Hi — I'm the Linea Digitale Assistant. Ask me about our services, our projects, pricing, or how to get started. Tap the mic to talk — I'll reply by voice.",

      'qm.eyebrow':'Get a Quote',
      'qm.title':"Let’s start something <em>useful.</em>",
      'qm.sub':"Tell us a little about your project — we'll come back within 24 hours.",
      'qm.first':'First Name *','qm.last':'Last Name *','qm.email':'Email *',
      'qm.phone':'Phone <em>(optional)</em>',
      'qm.service':'Service *',
      'qm.svc.pick':'Choose a service…',
      'qm.svc.1':'Business Website','qm.svc.2':'Website + AI Chatbot','qm.svc.3':'AI Document Brain',
      'qm.svc.4':'AI Customer Assistant','qm.svc.5':'AI Internal RAG System','qm.svc.6':'Machine Learning Models',
      'qm.svc.other':'Other',
      'qm.details':'Optional Details <em>(max 200 characters)</em>',
      'qm.details.ph':'A line or two about your goal, timeline, or budget…',
      'qm.send':'Send Request',
      'qm.ok.t':'Thanks!','qm.ok.p':"We'll be in touch within 24 hours.",'qm.ok.close':'Close',
    },
    it: {
      'nav.home':'Home','nav.about':'Chi Siamo','nav.services':'Servizi','nav.work':'I Nostri Lavori',
      'nav.why':'Perché Noi','nav.process':'Come Lavoriamo','nav.cta':'Richiedi Preventivo',
      'preloader.tag':'AI · Web · Automazione','preloader.meta':'Facciamo funzionare il digitale per te',
      'hero.kicker':'Agenzia AI · Web · Automazione',
      'hero.title.1':'Non costruiamo','hero.title.2':'solo <em>digitale.</em>',
      'hero.sub':'Automazione AI, siti intelligenti e sistemi pensati per far crescere le aziende che vogliono davvero svoltare.',
      'hero.cta1':'Prenota una Call','hero.cta2':'Esplora i Servizi',
      'hero.m1':'AI attiva','hero.m2':'AI-native','hero.m3':'Più veloce','hero.scroll':'Scorri',
      'about.eyebrow':'Chi è Linea Digitale',
      'about.title':'Costruiamo digitale<br/>che <em>funziona.</em>',
      'about.p1':'Linea Digitale è un’agenzia digitale specializzata in soluzioni web basate sull’AI per piccole e medie imprese. Costruiamo siti che funzionano, chatbot che rispondono e sistemi di automazione che ti fanno guadagnare tempo — così tu puoi concentrarti sul far crescere la tua attività.',
      'about.p2':'Dal primo click alla conversione finale, ogni riga di codice e ogni modello AI ha un unico obiettivo: rendere la tua azienda più semplice da gestire e più facile da far crescere.',
      'about.vision.t':'La Nostra Visione',
      'about.vision.p':'Rendere l’AI concreta — perché anche PMI e piccole imprese abbiano la stessa leva che le grandi aziende danno per scontata.',
      'about.values.t':'I Nostri Valori',
      'about.values.p':'Chiarezza. Artigianalità. Automazione. Spediamo cose che funzionano davvero — e continuano a funzionare.',
      'about.watch':'Guarda il video',
      'svc.eyebrow':'Cosa Facciamo',
      'svc.title':'Sei servizi.<br/><em>Un solo risultato.</em>',
      'svc.sub':'Digitale che lavora davvero per la tua azienda.',
      'svc.hint':'Passa sopra o tocca una card per scoprire cosa contiene.',
      'svc.cue1':'Scopri i dettagli →','svc.cue2':'Scopri i dettagli →','svc.cue3':'Scopri i dettagli →',
      'svc.cue4':'Scopri i dettagli →','svc.cue5':'Scopri i dettagli →','svc.cue6':'Scopri i dettagli →',
      'svc.head1':'Cosa ricevi','svc.head2':'Cosa ricevi','svc.head3':'Cosa ricevi',
      'svc.head4':'Cosa ricevi','svc.head5':'Cosa ricevi','svc.head6':'Cosa ricevi',
      'svc1.t':'Sito Web Aziendale','svc1.d':'Siti moderni e veloci, multi-pagina, con transizioni fluide e design mobile-first. Costruiti per convertire i visitatori in clienti.',
      'svc2.t':'Sito + Chatbot AI','svc2.d':'Tutto il sito aziendale, più un assistente AI personalizzato addestrato sulla tua attività che risponde ai clienti 24/7.',
      'svc3.t':'AI Document Brain','svc3.d':'Carichi fatture, contratti o report e ricevi dati puliti e strutturati in automatico. Elimina per sempre l’inserimento manuale.',
      'svc4.t':'Assistente AI Clienti','svc4.d':'Un chatbot intelligente standalone per sito web o WhatsApp, addestrato sui tuoi prodotti, servizi e FAQ.',
      'svc5.t':'Sistema RAG Interno','svc5.d':'Il tuo staff può cercare e interrogare documenti, manuali e conoscenza interna in tempo reale con linguaggio naturale.',
      'svc6.t':'Machine Learning & Modelli','svc6.d':'Modelli ML personalizzati per previsione, classificazione o automazione — consegnati con un’interfaccia pulita per il tuo team.',
      'work.eyebrow':'I Nostri Lavori',
      'work.title':'Progetti <em>recenti.</em><br/>Risultati reali.',
      'work.note':'Cerchi demo su misura dei nostri <em>sistemi RAG</em>, <em>chatbot AI personalizzati</em> o <em>modelli ML dedicati</em>? Scrivi a <a href="mailto:lineadigitale8@gmail.com">lineadigitale8@gmail.com</a> — ti mostriamo i progetti più vicini al tuo caso d’uso.',
      'work.demo':'Vedi la demo','work.private':'Deployment enterprise',
      'work.n1':'Sito Web + WhatsApp','work.tag1':'Web · Integrazione WhatsApp','work.b1':'Sito multi-pagina veloce e orientato alla conversione, con pulsante WhatsApp fluttuante per richieste dirette dai clienti — live e in produzione.',
      'work.n2':'Sito + Chatbot AI','work.tag2':'Web · Assistente AI dedicato','work.b2':'Sito multi-pagina per una clinica con assistente AI privato addestrato su servizi e FAQ — risponde ai pazienti 24/7 con passaggio a un umano.',
      'work.n3':'Sistema RAG AI Otofarma','work.tag3':'AI · Pipeline RAG privata','work.b3':'Assistente AI interno per un’azienda farmaceutica. Lo staff interroga documenti di produzione e report in linguaggio naturale — powered by Google Gemini 2.5.',
      'why.eyebrow':'Perché Linea Digitale',
      'why.title':'AI nativa. Costruita a mano.<br/><em>Spietatamente pratica.</em>',
      'why.sub':'Sei motivi per cui le PMI scelgono noi invece delle grandi agenzie.',
      'why.t1':'AI nel DNA, non Aggiunta','why.d1':'Ogni sito, ogni tool, ogni sistema nasce già con l’automazione in mente — non viene incollato dopo.',
      'why.t2':'Proprietà Reale','why.d2':'Il codice, i modelli e i dati sono tuoi. Niente vendor lock-in, niente hosting misterioso, niente aumenti a sorpresa.',
      'why.t3':'Su Misura per Te','why.d3':'Non rivendiamo template. Ogni progetto è calibrato sul tuo settore, i tuoi clienti e il lavoro che fai davvero.',
      'why.t4':'Prima Spediamo, Poi Affiniamo','why.d4':'Settimane, non trimestri. Mandiamo live una versione funzionante in fretta, poi iteriamo con te sull’uso reale.',
      'why.t5':'Un Solo Partner, Stack Completo','why.d5':'Sito, chatbot, AI sui documenti, modelli ML — tutto da un team unico. Zero passaggi di consegna, zero buchi d’integrazione.',
      'why.t6':'Budget da PMI','why.d6':'Tecnologia enterprise a prezzi pensati per piccole e medie imprese. Preventivi trasparenti, senza sorprese.',
      'prc.eyebrow':'Come Lavoriamo',
      'prc.title':'Quattro mosse.<br/><em>Nessun template.</em>',
      'prc.hint':'Tocca il + su ogni step per vedere cosa contiene.',
      'prc.s1.t':'Discovery & Scoping','prc.s1.d':'Capiamo la tua attività, i tuoi clienti e dove l’automazione ti farà davvero risparmiare tempo.',
      'prc.s1.l1':'Call di 60 minuti con il founder / responsabile operativo per mappare i flussi quotidiani',
      'prc.s1.l2':'Documento di scope chiaro: cosa costruiamo, cosa possiedi, quanto costa',
      'prc.s1.l3':'Tempistiche concordate in anticipo — settimane, non trimestri',
      'prc.s2.t':'Design & Training','prc.s2.d':'Progettiamo la UI, prepariamo i tuoi dati e addestriamo l’AI sui contenuti reali della tua azienda.',
      'prc.s2.l1':'Mockup di design condivisi per approvazione prima di scrivere una riga di codice',
      'prc.s2.l2':'Raccogliamo documenti, FAQ e info prodotto per l’addestramento',
      'prc.s2.l3':'Modelli fine-tuned sui tuoi contenuti — non su dati generici di internet',
      'prc.s3.t':'Lancio & Integrazione','prc.s3.d':'Mandiamo tutto live, lo colleghiamo ai tuoi tool esistenti e formiamo il tuo team a usarlo.',
      'prc.s3.l1':'Deploy sul tuo dominio o sul nostro — decidi tu',
      'prc.s3.l2':'Collegato a WhatsApp, email, CRM o qualsiasi tool tu stia già usando',
      'prc.s3.l3':'Walkthrough col team + documentazione scritta, così niente resta una black box',
      'prc.s4.t':'Supporto & Miglioramento','prc.s4.d':'Monitoriamo le performance sul campo e affiniamo modello e UI in base all’uso reale.',
      'prc.s4.l1':'Check-in mensili su utilizzo, errori e feedback degli utenti',
      'prc.s4.l2':'Retraining dei modelli man mano che i contenuti crescono e l’azienda evolve',
      'prc.s4.l3':'Linea diretta con noi — niente ticket, niente bot, solo WhatsApp o email',
      'cn.eyebrow':'Parliamo',
      'cn.title':'Il tuo prossimo workflow<br/><em>intelligente</em> è a una call di distanza.',
      'cn.sub':'Raccontaci cosa ti rallenta. Ti mostriamo la strada più veloce per automatizzarlo.',
      'cn.cta1':'Prenota una Call','cn.cta2':'Invia un Brief di Progetto',
      'cn.emailH':'Email','cn.phoneH':'Telefono','cn.hqH':'Sede',
      'ft.tag':'<em>Non costruiamo solo digitale — lo facciamo funzionare per te.</em>',
      'ft.about':'Soluzioni web basate sull’AI per piccole e medie imprese. Siti che funzionano, chatbot che rispondono, automazione che fa risparmiare tempo.',
      'ft.quickH':'Accesso Rapido','ft.svcH':'Servizi','ft.visitH':'Vieni a Trovarci','ft.contact':'Contatti',
      'ft.copy':'© 2026 Linea Digitale · Tutti i diritti riservati','ft.stamp':'AI Powered · Web Crafted · Made in Napoli',
      'bot.title':'Linea Digitale Assistant','bot.status':'Online · Risponde subito','bot.speaking':'Sto parlando…',
      'bot.placeholder':'Scrivi la tua domanda — o tocca il microfono…','bot.footer':'Powered by Linea Digitale AI',
      'bot.welcome':"Ciao! Sono l'assistente di Linea Digitale. Chiedimi dei servizi, dei progetti, dei prezzi o di come iniziare. Tocca il microfono per parlarmi — ti rispondo a voce.",

      'qm.eyebrow':'Richiedi un Preventivo',
      'qm.title':"Iniziamo qualcosa di <em>utile.</em>",
      'qm.sub':"Raccontaci qualcosa del tuo progetto — ti rispondiamo entro 24 ore.",
      'qm.first':'Nome *','qm.last':'Cognome *','qm.email':'Email *',
      'qm.phone':'Telefono <em>(opzionale)</em>',
      'qm.service':'Servizio *',
      'qm.svc.pick':'Scegli un servizio…',
      'qm.svc.1':'Sito Web Aziendale','qm.svc.2':'Sito + Chatbot AI','qm.svc.3':'AI Document Brain',
      'qm.svc.4':'Assistente AI Clienti','qm.svc.5':'Sistema RAG Interno','qm.svc.6':'Modelli Machine Learning',
      'qm.svc.other':'Altro',
      'qm.details':'Dettagli <em>(opzionale, max 200 caratteri)</em>',
      'qm.details.ph':'Una o due righe sull’obiettivo, le tempistiche o il budget…',
      'qm.send':'Invia Richiesta',
      'qm.ok.t':'Grazie!','qm.ok.p':"Ti contattiamo entro 24 ore.",'qm.ok.close':'Chiudi',
    },
  };

  const LANG_KEY = 'linea_lang';
  let currentLang = (localStorage.getItem(LANG_KEY) === 'it') ? 'it' : 'en';

  const applyLang = (lang) => {
    currentLang = (lang === 'it') ? 'it' : 'en';
    localStorage.setItem(LANG_KEY, currentLang);
    const dict = I18N[currentLang];
    document.documentElement.setAttribute('lang', currentLang);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    const sw = document.getElementById('langSwitch');
    if (sw) {
      sw.setAttribute('data-lang', currentLang);
      sw.querySelectorAll('.lang-switch__btn').forEach((b) => {
        const active = b.getAttribute('data-lang') === currentLang;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    }

    // Refresh bot quick chips + placeholder + TTS voice
    if (typeof buildQuickChips === 'function') buildQuickChips();
    if (typeof loadVoices === 'function') loadVoices();
  };

  // Wire language toggle
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-switch__btn');
    if (!btn) return;
    applyLang(btn.getAttribute('data-lang'));
  });

  // Apply on load
  document.addEventListener('DOMContentLoaded', () => applyLang(currentLang));

  /* ---------- PRELOADER ---------- */
  const preloader = document.getElementById('preloader');
  const bar = document.getElementById('preloaderBar');
  const pct = document.getElementById('preloaderPct');

  let progress = 0;
  const tick = () => {
    progress += Math.random() * 9 + 3;
    if (progress > 100) progress = 100;
    if (bar) bar.style.right = (100 - progress) + '%';
    if (pct) pct.textContent = Math.floor(progress).toString().padStart(2, '0');
    if (progress < 100) {
      setTimeout(tick, 90);
    } else {
      setTimeout(() => {
        if (preloader) preloader.classList.add('is-done');
        document.body.classList.add('is-loaded');
        startHeroAnim();
      }, 300);
    }
  };
  setTimeout(tick, 200);

  /* ---------- COUNTERS ---------- */
  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-count') || '0', 10);
    if (!target) return;
    const duration = 1800;
    const start = performance.now();
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const step = (now) => {
      const p = Math.min(1, (now - start) / duration);
      el.textContent = Math.round(target * easeOut(p));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const runCounters = () => {
    document.querySelectorAll('.count').forEach(animateCounter);
  };

  const initCounterObserver = () => {
    const targets = document.querySelectorAll('.count');
    if (!targets.length) return;
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) animateCounter(entry.target);
      });
    }, { threshold: 0.5 });
    targets.forEach((el) => cio.observe(el));
  };

  /* ---------- LENIS SMOOTH SCROLL ---------- */
  let lenis = null;
  const initLenis = () => {
    if (typeof Lenis === 'undefined') return;
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (!id || id === '#') return;
        const t = document.querySelector(id);
        if (!t) return;
        e.preventDefault();
        lenis.scrollTo(t, { offset: -40, duration: 1.3 });
        document.getElementById('navLinks')?.classList.remove('is-open');
        document.getElementById('navToggle')?.classList.remove('is-open');
      });
    });
  };

  /* ---------- NAV SCROLLED STATE ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 40) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- MOBILE NAV TOGGLE ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---------- REVEAL ON SCROLL ---------- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  const addReveals = () => {
    document.querySelectorAll('.sec-head, .about__body, .about__intro, .pillar, .mbr, .why-card, .prc-step, .cn-grid > *')
      .forEach((el) => { el.classList.add('reveal'); io.observe(el); });
  };

  /* ---------- HERO INTRO ---------- */
  function startHeroAnim() {
    const items = document.querySelectorAll('.c-hero [data-anim]');
    items.forEach((el, i) => {
      setTimeout(() => el.classList.add('is-in'), 120 * i);
    });
    initLenis();
    addReveals();
    runCounters();
    initCounterObserver();
  }

  /* =========================================================
     CHATBOT
  ========================================================= */
  const bot = document.getElementById('bot');
  const botToggle = document.getElementById('botToggle');
  const botClose = document.getElementById('botClose');
  const botPanel = document.getElementById('botPanel');
  const botMessages = document.getElementById('botMessages');
  const botQuick = document.getElementById('botQuick');

  const FAQS = [
    // --- Greetings & smalltalk ---
    { q: 'Hi there',
      k: ['hi','hello','hey','yo','hola','greetings','sup','howdy','hii','heya','hiii'],
      a: "Hello! I'm the Linea Digitale Assistant. I can walk you through our services, show you past projects, explain how we work, or help you book a call. What's on your mind?" },
    { q: 'Good morning',
      k: ['good morning','good afternoon','good evening','morning','evening','good day','buongiorno'],
      a: "A very good day to you! Thanks for stopping by. How can I help — services, recent projects, pricing, or booking a call?" },
    { q: 'How are you?',
      k: ['how are you','how r u','hows it going','how is it going','how are things','you doing','how you doing','all good'],
      a: "I'm great — running at 100% uptime and ready to help. More importantly, how can I help you today?" },
    { q: 'Who are you?',
      k: ['who are you','what are you','your name','introduce yourself','are you human','are you a bot','are you ai','what is this bot','who am i talking to'],
      a: "I'm the Linea Digitale Assistant — the AI concierge for our agency. I can answer questions about our six services, past projects, process, pricing, and how to get started." },
    { q: 'Thanks / thank you',
      k: ['thanks','thank you','thx','thankyou','appreciate','cheers','much obliged','ty','thank u'],
      a: "You're very welcome. If anything else comes to mind — services, pricing, or a quick intro call — I'm right here." },
    { q: 'Bye',
      k: ['bye','goodbye','see you','later','farewell','cya','take care','talk soon','catch you later'],
      a: "Take care! Whenever you're ready to talk websites, chatbots, or AI automation — email lineadigitale8@gmail.com or tap Book A Call." },
    { q: 'Tell me a joke',
      k: ['joke','funny','make me laugh','pun','humor','humour'],
      a: "Why did the AI go to therapy? Too many unresolved queries. Now, back to yours — which of our services can I unpack for you?" },
    { q: 'You are smart',
      k: ['you are smart','you are cool','you are good','you are nice','smart bot','good bot','nice bot','i like you','impressive'],
      a: "That's kind of you — I'm just a careful assistant with a decent knowledge base. Speaking of which, want me to show you around our services or projects?" },
    { q: 'Can you help me?',
      k: ['can you help','help me','need help','need assistance','assistance','support me','i need help'],
      a: "Absolutely. I can help with: understanding our services, seeing past projects, getting a rough timeline, explaining the process, or handing you off to a human at lineadigitale8@gmail.com." },

    // --- Company / identity ---
    { q: 'What is Linea Digitale?',
      k: ['what is linea','who is linea','about linea','tell me about linea','what is this company','about the company','about you guys','linea digitale'],
      a: "Linea Digitale is a digital agency based in Napoli, Italy. We specialize in AI-powered web solutions for small and medium businesses — websites that work, chatbots that answer, and automation systems that save time. Made in Italy, delivered across Europe." },
    { q: 'Who founded Linea Digitale?',
      k: ['founder','founded','who started','who runs','ceo','owner','team behind','who is behind'],
      a: "Linea Digitale is a small, focused team based in Napoli. We prefer letting the work speak — head over to our Work section to see recent projects. For a quick intro to the team, email lineadigitale8@gmail.com." },
    { q: 'Where are you based?',
      k: ['where','location','located','based','headquarter','headquarters','office','address','hq','napoli','naples','italy','italia'],
      a: "Napoli, Italy — Via Benedetto Brin N.67. We work remote-friendly and ship projects for clients across Italy and Europe." },
    { q: 'What languages do you speak?',
      k: ['language','languages','english','italian','speak english','speak italian','parli','lingua'],
      a: "Italian and English. Client-facing work, documents, and support are available in both. Chatbots and RAG systems we build can also be trained multilingual." },
    { q: 'Who do you work with?',
      k: ['who do you work with','clients','customers','smb','small business','medium business','industry','industries','verticals','sectors','who are your clients'],
      a: "Small and medium businesses across any sector — clinics, manufacturers, retailers, professional services, and more. If you have documents, clients, and repetitive workflows, we can help." },

    // --- Services overview ---
    { q: 'What services do you offer?',
      k: ['services','service','offer','offerings','disciplines','capabilities','solutions','what can you do','what do you do','packages'],
      a: "Six services: 1) Business Website, 2) Website + AI Chatbot, 3) AI Document Brain, 4) AI Customer Assistant, 5) AI Internal RAG System, 6) Machine Learning & Data Models. Ask me about any of them." },

    // --- Service 1: Business Website ---
    { q: 'Tell me about your Business Website service',
      k: ['business website','website','websites','web site','build site','build website','multi-page','multi page','business site','website package','site package'],
      a: "Fast, modern, multi-page websites with smooth transitions and mobile-first design. Typical scope: home, services, about, projects, contact, plus any custom pages. Conversion-focused with WhatsApp integration, contact forms, and booking UIs when needed." },
    { q: 'What tech stack do websites use?',
      k: ['tech','tech stack','stack','technologies','framework','html','css','javascript','react','next','nextjs','wordpress','cms'],
      a: "Our sites are built in vanilla HTML/CSS/JS for speed and portability, or React/Next.js when you need a CMS or interactive app. We host on fast CDN providers — you can bring your domain or we set one up." },
    { q: 'Are websites mobile friendly?',
      k: ['mobile','mobile friendly','responsive','phone','tablet','mobile design','ios','android'],
      a: "Yes — every site is mobile-first and tested down to 320px width on real devices. Navigation, forms, animations — all fine-tuned for touch." },
    { q: 'Do you do SEO?',
      k: ['seo','search engine','google ranking','rank','google search','visibility','search visibility'],
      a: "Every site ships SEO-clean: semantic HTML, meta tags, Open Graph previews, sitemap, robots, and fast load speeds. For content-led SEO (articles, keyword strategy) we can scope that separately." },

    // --- Service 2: Website + AI Chatbot ---
    { q: 'What is Website + AI Chatbot?',
      k: ['website chatbot','website + chatbot','site chatbot','chatbot website','site with chatbot','site ai','website ai','pacchetto chatbot'],
      a: "Everything in a business website, plus a custom AI assistant trained on your business content — services, FAQs, pricing, policies. It answers visitors 24/7 and captures qualified leads straight to your inbox." },
    { q: 'How is the chatbot trained?',
      k: ['train chatbot','training','train','how trained','learn','knowledge base','data used','model training'],
      a: "We gather your existing material — site pages, FAQs, PDFs, pricing sheets, policies — and build a private knowledge base the chatbot retrieves from. It answers in your brand voice and cites only your content, never makes things up." },
    { q: 'Can the chatbot hand off to a human?',
      k: ['handoff','hand off','human','live agent','escalate','escalation','take over','transfer'],
      a: "Yes. When the chatbot can't confidently answer — or the user requests a human — it collects name, email, and the conversation summary and sends it to whichever inbox or WhatsApp you pick." },

    // --- Service 3: AI Document Brain ---
    { q: 'What is AI Document Brain?',
      k: ['document brain','document','documents','invoices','contracts','reports','extract','extraction','data entry','ocr','parse','pdf extraction'],
      a: "Upload invoices, contracts, or reports and receive clean structured data automatically — JSON, CSV, or straight into your database. Eliminates manual data entry forever. Works on PDFs, scans, Word, and Excel." },
    { q: 'Which document formats are supported?',
      k: ['formats','file formats','pdf','scan','scanned','word','excel','image','jpg','png','docx','xlsx'],
      a: "PDF (digital and scanned), Word, Excel, and image files (JPG, PNG, TIFF). Handwritten forms can also be extracted with reasonable accuracy — we tune the model on your specific template." },
    { q: 'How accurate is document extraction?',
      k: ['accuracy','accurate','how accurate','precision','error rate','reliability','reliable'],
      a: "Typically 95–99% on clean digital documents and 88–95% on scans, depending on quality. We deliver with a quick review UI so your team can spot-check low-confidence fields before they hit the DB." },

    // --- Service 4: AI Customer Assistant ---
    { q: 'What is the AI Customer Assistant?',
      k: ['customer assistant','standalone chatbot','whatsapp bot','whatsapp chatbot','whatsapp','support bot','customer chatbot','facebook messenger','messenger bot'],
      a: "A standalone intelligent chatbot for your website or WhatsApp, trained on your products, services, and FAQs. Understands natural language and hands off to a human when it matters — same tech as our Website + Chatbot package, deployed standalone." },
    { q: 'Does the customer assistant work on WhatsApp?',
      k: ['whatsapp','whatsapp business','whatsapp api','wa','integration whatsapp','chat whatsapp'],
      a: "Yes — we connect through WhatsApp Business API so customers can chat with your AI assistant directly in WhatsApp. Works alongside or instead of a website chatbot." },

    // --- Service 5: AI Internal RAG System ---
    { q: 'What is the Internal RAG System?',
      k: ['rag','internal rag','knowledge base','internal knowledge','staff search','query documents','internal docs','manuals','sop','retrieval augmented','retrieval'],
      a: "A private AI search tool where your staff query all internal documents, manuals, and knowledge in natural language — with cited sources and role-based access. Like the Otofarma project we built on Google Gemini 2.5." },
    { q: 'Is the RAG system secure and private?',
      k: ['secure','security','private','privacy','confidential','data leak','gdpr','compliance','on premise','on-prem','self hosted'],
      a: "Your documents stay private. We can deploy on your infrastructure, a private cloud, or a VPC — and role-based access means staff see only what they're cleared for. GDPR-compliant by design." },
    { q: 'Does it cite sources?',
      k: ['cite','citation','citations','sources','source','references','where from','reference'],
      a: "Every answer carries a citation to the source document and section — so staff can verify, not blindly trust. No source-less hallucinations." },

    // --- Service 6: ML & Data Models ---
    { q: 'Do you build ML models?',
      k: ['ml','machine learning','model','models','prediction','classification','custom model','ai model','data model','forecast','forecasting','regression','clustering'],
      a: "Yes — custom ML models for prediction, classification, clustering, or automation. Trained on your historical data and delivered with a clean UI your team can actually use — not a raw notebook." },
    { q: 'Do you deploy and host ML models?',
      k: ['deploy','deployment','host','hosting','serve','api','inference','monitoring','retrain','retraining'],
      a: "Yes — we deploy, host, and monitor the model, with automatic retraining as your data grows. You get a clean UI or API endpoint, we handle the infra." },

    // --- Projects ---
    { q: 'Show me your work',
      k: ['work','your work','projects','portfolio','past work','examples','case study','case studies','previous work','show projects'],
      a: "Three recent projects: 1) Ozlay — full website redesign for a B2B lead gen company. 2) A multi-page Italian dental clinic site with video hero and booking. 3) Otofarma — internal RAG AI assistant for a pharmaceutical manufacturer, on Google Gemini 2.5." },
    { q: 'Tell me about Otofarma',
      k: ['otofarma','pharma','pharmaceutical','gemini','rag project','rag system project','manufacturing ai','pharmaceutical project'],
      a: "Otofarma is a pharmaceutical manufacturing company. We built them an internal AI assistant where staff query production documents and reports in natural language — powered by Google Gemini 2.5 with a private RAG pipeline and role-based access." },
    { q: 'Tell me about the dental clinic project',
      k: ['dental','dentist','clinic','dental clinic','dentist website','clinic website','appointment','italian clinic','dentista'],
      a: "A multi-page Italian dental clinic site with video hero, floating WhatsApp button, and appointment booking UI — built for clinics that want a premium feel and easy patient booking." },
    { q: 'Tell me about Ozlay',
      k: ['ozlay','ozley','b2b lead','b2b lead platform','lead gen site','lead generation site'],
      a: "Ozlay is a B2B lead generation company. We delivered a full website rebuild — dark modern theme, smooth scroll animations, mobile responsive, multi-language." },

    // --- Process ---
    { q: 'How does it work?',
      k: ['how it works','process','steps','how do you work','how do we start','how does it work','workflow','phases','methodology'],
      a: "Four moves: 1) Discovery & Scope — we learn your business. 2) Design & Training — we build the UI and train the AI on your content. 3) Launch & Integrate — ship live, connect your tools, train your team. 4) Support & Improve — monthly check-ins and model retraining." },
    { q: 'How does discovery work?',
      k: ['discovery','first call','kickoff','first meeting','first step','starting','initial call'],
      a: "A 60-minute call with the founder or operations lead to map your daily workflow. From that call we write a clear scope document: what we build, what you own, what it costs, and when it lands." },
    { q: 'How long does a project take?',
      k: ['how long','timeline','time to deliver','turnaround','delivery','how soon','when','duration','delivery time','how many weeks'],
      a: "Weeks, not quarters. Business website: 2–3 weeks. Website + chatbot: 3–4 weeks. Document / RAG / ML projects: usually 4–8 weeks depending on data and scope. Timelines are agreed upfront." },

    // --- Pricing & commercial ---
    { q: 'What does it cost?',
      k: ['cost','costs','price','pricing','quote','budget','fee','fees','rate','rates','how much','charge','expensive','preventivo','estimate'],
      a: "Pricing depends on scope. Every project is quoted custom and transparent — no surprise add-ons. Email lineadigitale8@gmail.com or tap Book A Call and we'll share a proposal within 24 hours." },
    { q: 'Do you offer discounts?',
      k: ['discount','discounts','promo','promotion','deal','cheaper','reduce price','negotiate','negotiation'],
      a: "We quote fairly from day one — so no need for negotiation theatre. If scope can flex, we'll gladly suggest lighter options that hit your budget without cutting corners." },
    { q: 'How does payment work?',
      k: ['payment','payment terms','invoice','invoicing','pay','deposit','upfront','milestone','installment'],
      a: "Standard split: 50% on kickoff, 50% on launch. Larger projects run on 30/40/30 milestones. We invoice in EUR and accept bank transfer or Stripe." },
    { q: 'Do you sign NDAs?',
      k: ['nda','non disclosure','confidentiality','confidential','contract','agreement','privacy agreement'],
      a: "Yes — happy to sign a mutual NDA before you share anything sensitive. We also operate under a DPA for any personal data processed on your behalf." },
    { q: 'Who owns the code and data?',
      k: ['ownership','own','code ownership','data ownership','vendor lock','lock-in','lock in','license','who owns','intellectual property','ip'],
      a: "You own everything — code, models, and data. No vendor lock-in, no mystery hosting, no surprise price hikes. You can move it whenever you want." },
    { q: 'Do you offer a free trial?',
      k: ['free','free trial','trial','try first','demo','test','sample','proof of concept','poc'],
      a: "We don't do free pilots, but we often run a short paid proof-of-concept (1–2 weeks) for AI projects so you can validate the idea before committing to the full build." },

    // --- Support ---
    { q: 'Do you offer support after launch?',
      k: ['support','maintenance','after launch','post launch','aftercare','ongoing','retainer','help after','account manager','monthly support'],
      a: "Yes — monthly check-ins on usage and errors, model retraining as your content grows, and a direct line via WhatsApp or email. No tickets, no chat-maze." },
    { q: 'What if something breaks?',
      k: ['broken','bug','issue','problem','down','crash','emergency','urgent','critical'],
      a: "WhatsApp us or email lineadigitale8@gmail.com. We respond same-day on working hours. Critical issues on active projects are covered without extra cost." },

    // --- Differentiators ---
    { q: 'What makes you different?',
      k: ['different','unique','why choose','why you','competitor','compare','vs','advantage','stand out','better than','why linea'],
      a: "Three things: AI built-in from day one (not bolted on later), full-stack under one roof (website + chatbot + document AI + ML), and SMB-sized budgets with transparent quotes — no enterprise-style surprise invoices." },
    { q: 'Why not hire a freelancer?',
      k: ['freelancer','freelance','individual','solo','single developer','versus freelancer','cheaper freelancer'],
      a: "Freelancers are great for single-discipline work. We're the better fit when a project spans web + AI + data + support — one team, one contract, and nobody ghosting mid-project." },
    { q: 'Why not a big agency?',
      k: ['big agency','large agency','enterprise agency','corporate','big firm','vs big agency'],
      a: "Big agencies price for enterprises and route you through junior account managers. We stay small on purpose — you talk to the people actually building your project, and budgets are sized for SMBs." },

    // --- Contact & booking ---
    { q: 'How can I book a call?',
      k: ['book','book a call','call','meeting','schedule','talk','reach you','get in touch','contact you','prenota'],
      a: "Easiest path: tap the Book A Call button — it opens WhatsApp straight to +39 344 521 7995 (web WhatsApp on desktop, the app on mobile). You can also email lineadigitale8@gmail.com or fill the Get A Quote form at the top. We reply within 24 hours." },
    { q: 'How do I get a quote?',
      k: ['quote','get a quote','estimate','request quote','project brief','proposal','send brief','inquiry','enquire'],
      a: "Tap the Get A Quote button at the top-right of the page. You'll see a short form — first name, email, the service you want, and any details. It lands in our inbox and we reply within 24 hours with a tailored proposal." },
    { q: 'Do you use WhatsApp?',
      k: ['whatsapp','wa','whats app','whatsapp number','wa business','chat whatsapp'],
      a: "Yes — WhatsApp is the quickest way to reach us. Tap Book A Call, or message us directly at +39 344 521 7995. On desktop it opens web.whatsapp.com, on mobile it opens the app with a pre-filled greeting." },
    { q: 'What is your email?',
      k: ['email','email address','mail','e-mail','contact email'],
      a: "lineadigitale8@gmail.com — we reply within 24 hours on working days." },
    { q: 'What is your phone number?',
      k: ['phone','phone number','telephone','mobile number','whatsapp number','call you','chiamare'],
      a: "+39 344 521 7995 — available on call and on WhatsApp. Tap Book A Call on the site for a one-tap WhatsApp shortcut." },
    { q: 'Can I message on WhatsApp?',
      k: ['message whatsapp','wa message','text you','text whatsapp','send message'],
      a: "Absolutely — the fastest path. Tap Book A Call on the site and WhatsApp opens with a pre-written greeting, or message +39 344 521 7995 directly." },
  ];

  /* Italian parallel FAQs */
  const FAQS_IT = [
    // --- Smalltalk ---
    { q: 'Ciao',
      k: ['ciao','salve','buongiorno','buonasera','buon giorno','buona sera','hey','ehi','olà'],
      a: "Ciao! Sono l'assistente di Linea Digitale. Posso raccontarti i nostri servizi, mostrarti progetti passati, spiegarti come lavoriamo o aiutarti a prenotare una call. Di cosa hai bisogno?" },
    { q: 'Come stai?',
      k: ['come stai','come va','tutto bene','come ti senti','stai bene'],
      a: "Sto benissimo — operativo al 100% e pronto ad aiutare. Piuttosto: come posso esserti utile oggi?" },
    { q: 'Chi sei?',
      k: ['chi sei','chi siete','cosa sei','presentati','sei umano','sei un bot','sei un\'ai','sei una ai','sei un robot'],
      a: "Sono l'assistente AI di Linea Digitale — il concierge digitale dell'agenzia. Posso parlarti dei sei servizi, mostrarti i progetti, spiegarti il processo o aiutarti a iniziare." },
    { q: 'Grazie',
      k: ['grazie','ti ringrazio','molto gentile','grazie mille'],
      a: "Prego, figurati! Se ti serve altro — servizi, progetti o una call conoscitiva — sono qui." },
    { q: 'Arrivederci',
      k: ['arrivederci','ciao ciao','addio','a presto','a dopo','a piu tardi','ci sentiamo'],
      a: "A presto! Quando vuoi parlare di siti, chatbot o automazione AI — scrivi a lineadigitale8@gmail.com o clicca \"Prenota una Call\"." },
    { q: 'Raccontami una barzelletta',
      k: ['barzelletta','battuta','ridere','divertente','umorismo'],
      a: "Perché l'AI è andata in terapia? Troppe query irrisolte. Ora, torniamo alle tue — di quale servizio ti parlo?" },
    { q: 'Sei bravo',
      k: ['sei bravo','sei intelligente','sei simpatico','mi piaci','carino','gentile'],
      a: "Troppo buono — sono solo un assistente attento con una buona base di conoscenza. Vuoi che ti guidi tra i servizi o i progetti?" },
    { q: 'Mi puoi aiutare?',
      k: ['mi aiuti','puoi aiutarmi','ho bisogno','assistenza','aiuto','aiutami'],
      a: "Assolutamente. Posso spiegarti i servizi, mostrarti progetti passati, darti tempistiche e processo, o passarti a un umano scrivendo a lineadigitale8@gmail.com." },

    // --- Identità / azienda ---
    { q: 'Cos\'è Linea Digitale?',
      k: ['cos\'è linea','cosa è linea','chi è linea','di cosa','cosa fate','agenzia','azienda','parlami di voi','di cosa vi occupate','linea digitale'],
      a: "Linea Digitale è un'agenzia digitale con sede a Napoli. Siamo specializzati in soluzioni web basate sull'AI per piccole e medie imprese — siti che funzionano, chatbot che rispondono e automazione che fa risparmiare tempo. Made in Italy, consegnato in tutta Europa." },
    { q: 'Chi ha fondato Linea Digitale?',
      k: ['fondatore','fondato','chi ha creato','chi la guida','ceo','proprietario','team dietro','chi c\'è dietro'],
      a: "Siamo un team piccolo e focalizzato con sede a Napoli. Preferiamo far parlare il lavoro — dai un'occhiata alla sezione Lavori per vedere i progetti recenti. Per un'introduzione al team, scrivi a lineadigitale8@gmail.com." },
    { q: 'Dove avete sede?',
      k: ['dove','sede','con sede','ufficio','indirizzo','dove siete','dov\'è','napoli','napoli italia','italia'],
      a: "Napoli, Italia — Via Benedetto Brin N.67. Lavoriamo in modalità remota-friendly e consegniamo progetti per clienti in tutta Italia ed Europa." },
    { q: 'Che lingue parlate?',
      k: ['lingue','lingua','inglese','italiano','parlate inglese','parlate italiano','english','italian'],
      a: "Italiano e inglese. Lavoro con i clienti, documenti e supporto sono disponibili in entrambe. I chatbot e i sistemi RAG che costruiamo possono essere addestrati multilingua." },
    { q: 'Con chi lavorate?',
      k: ['con chi lavorate','clienti','settori','verticali','industrie','pmi','piccola impresa','media impresa','i vostri clienti'],
      a: "Lavoriamo con piccole e medie imprese in qualsiasi settore — studi medici, manifatturiero, retail, servizi professionali e altro. Se hai documenti, clienti e attività ripetitive, possiamo aiutarti." },

    // --- Servizi ---
    { q: 'Quali servizi offrite?',
      k: ['servizi','servizio','offrite','offerta','cosa offrite','discipline','soluzioni','cosa sapete fare','pacchetti'],
      a: "Sei servizi: 1) Sito Web Aziendale, 2) Sito + Chatbot AI, 3) AI Document Brain, 4) Assistente AI Clienti, 5) Sistema RAG Interno, 6) Machine Learning & Modelli. Chiedimi di qualsiasi di questi." },

    // Servizio 1
    { q: 'Parlami del Sito Web Aziendale',
      k: ['sito','siti','sito web','fate siti','costruite siti','sito multipagina','mobile first','mobile-first','site responsive','pacchetto sito'],
      a: "Siti moderni e veloci, multi-pagina, con transizioni fluide e design mobile-first. Scope tipico: home, servizi, chi siamo, progetti, contatti e pagine custom. Orientati alla conversione, con integrazione WhatsApp, form di contatto e UI di prenotazione quando servono." },
    { q: 'Che tecnologie usate per i siti?',
      k: ['tecnologia','stack','tecnologie','framework','html','css','javascript','react','next','nextjs','wordpress','cms'],
      a: "Costruiamo in HTML/CSS/JS vanilla per velocità e portabilità, oppure React/Next.js quando serve un CMS o un'app interattiva. Hostiamo su CDN veloci — puoi portare il tuo dominio o ne configuriamo uno nuovo." },
    { q: 'I siti sono mobile friendly?',
      k: ['mobile','responsive','telefono','tablet','design mobile','ios','android'],
      a: "Sì — ogni sito è mobile-first e testato fino a 320px di larghezza su dispositivi reali. Navigazione, form, animazioni — tutto calibrato per il touch." },
    { q: 'Fate SEO?',
      k: ['seo','motore di ricerca','google','ranking','visibilità','posizionamento'],
      a: "Ogni sito è SEO-clean: HTML semantico, meta tag, Open Graph, sitemap, robots e caricamenti veloci. Per SEO content-led (articoli, keyword strategy) possiamo preventivare a parte." },

    // Servizio 2
    { q: 'Cos\'è Sito + Chatbot AI?',
      k: ['sito chatbot','sito + chatbot','sito con chatbot','sito ai','pacchetto chatbot'],
      a: "Tutto il sito aziendale, più un assistente AI personalizzato addestrato sui tuoi contenuti — servizi, FAQ, prezzi, policy. Risponde ai visitatori 24/7 e ti manda i lead qualificati in email." },
    { q: 'Come viene addestrato il chatbot?',
      k: ['addestramento','addestrato','training','come impara','base di conoscenza','dati','training modello'],
      a: "Raccogliamo il tuo materiale esistente — pagine del sito, FAQ, PDF, listini, policy — e costruiamo una knowledge base privata da cui il chatbot pesca. Risponde con la tua voce aziendale e cita solo i tuoi contenuti, senza inventarsi nulla." },
    { q: 'Il chatbot può passare a un umano?',
      k: ['handoff','umano','agente','passa a umano','trasferimento','escalation','live chat'],
      a: "Sì. Quando il chatbot non è sicuro — o l'utente lo chiede — raccoglie nome, email e sommario della conversazione e lo manda sulla casella o sul numero WhatsApp che scegli." },

    // Servizio 3
    { q: 'Cos\'è l\'AI Document Brain?',
      k: ['document brain','documenti','fatture','contratti','report','estrazione','estrae','data entry','ocr','leggere pdf','estrai pdf'],
      a: "Carichi fatture, contratti o report e ricevi dati puliti e strutturati in automatico — JSON, CSV o direttamente nel tuo DB. Elimina per sempre l'inserimento manuale. Funziona con PDF, scansioni, Word ed Excel." },
    { q: 'Quali formati supporta?',
      k: ['formati','formato file','pdf','scansione','scansionato','word','excel','immagine','jpg','png'],
      a: "PDF (digitale e scansionato), Word, Excel e immagini (JPG, PNG, TIFF). Anche form scritti a mano possono essere estratti con buona accuratezza — calibriamo il modello sul tuo template specifico." },
    { q: 'Quanto è accurata l\'estrazione?',
      k: ['accurato','accuratezza','precisione','tasso di errore','affidabile','affidabilità'],
      a: "Tipicamente 95–99% su documenti digitali puliti e 88–95% su scansioni, in base alla qualità. Consegniamo con una UI di review dove il tuo team può controllare i campi a bassa confidenza prima che finiscano nel DB." },

    // Servizio 4
    { q: 'Cos\'è l\'Assistente AI Clienti?',
      k: ['assistente clienti','chatbot clienti','chatbot whatsapp','whatsapp','bot supporto','bot standalone','messenger'],
      a: "Un chatbot intelligente standalone per sito o WhatsApp, addestrato sui tuoi prodotti, servizi e FAQ. Capisce linguaggio naturale e passa la conversazione a un umano quando serve — stessa tecnologia del pacchetto Sito + Chatbot, ma deployato standalone." },
    { q: 'Funziona su WhatsApp?',
      k: ['whatsapp','whatsapp business','wa','integrazione whatsapp','chat whatsapp'],
      a: "Sì — ci colleghiamo tramite WhatsApp Business API, così i clienti chattano col tuo assistente AI direttamente in WhatsApp. Funziona in parallelo o al posto di un chatbot sul sito." },

    // Servizio 5
    { q: 'Cos\'è il Sistema RAG Interno?',
      k: ['rag','sistema rag','rag interno','knowledge base','conoscenza interna','interrogare documenti','manuali','sop','retrieval','ricerca interna'],
      a: "Uno strumento di ricerca AI privato dove il tuo staff interroga tutti i documenti, manuali e conoscenza interna in linguaggio naturale — con fonti citate e accessi per ruolo. Come il progetto Otofarma su Google Gemini 2.5." },
    { q: 'È sicuro e privato?',
      k: ['sicuro','sicurezza','privato','privacy','confidenziale','gdpr','conformità','on premise','self hosted'],
      a: "I tuoi documenti restano privati. Possiamo fare deploy sulla tua infrastruttura, un cloud privato o una VPC — e gli accessi per ruolo fanno sì che lo staff veda solo ciò che è autorizzato a vedere. GDPR-compliant by design." },
    { q: 'Cita le fonti?',
      k: ['cita','citazione','citazioni','fonti','fonte','riferimenti'],
      a: "Ogni risposta porta una citazione al documento e alla sezione sorgente — così lo staff può verificare, non fidarsi ciecamente. Niente allucinazioni senza fonte." },

    // Servizio 6
    { q: 'Costruite modelli ML?',
      k: ['ml','machine learning','modello','modelli','previsione','classificazione','modello custom','ai custom','data model','regressione','clustering'],
      a: "Sì — modelli ML personalizzati per previsione, classificazione, clustering o automazione. Addestrati sui tuoi dati storici e consegnati con un'interfaccia pulita che il tuo team può davvero usare — non un notebook grezzo." },
    { q: 'Ospitate i modelli ML?',
      k: ['deploy','deployment','host','hosting','serve','api','inferenza','monitoraggio','retraining'],
      a: "Sì — deployiamo, ospitiamo e monitoriamo il modello, con retraining automatico man mano che i dati crescono. Tu ricevi UI o endpoint API, all'infrastruttura pensiamo noi." },

    // Progetti
    { q: 'Mostrami i vostri lavori',
      k: ['lavori','vostri lavori','progetti','portfolio','case study','esempi','lavoro passato','mostrami progetti'],
      a: "Tre progetti recenti: 1) Ozlay — redesign completo del sito per un'azienda di lead gen B2B. 2) Sito multi-pagina per uno studio dentistico italiano con hero video e booking. 3) Otofarma — assistente RAG interno per un'azienda farmaceutica, su Google Gemini 2.5." },
    { q: 'Parlami di Otofarma',
      k: ['otofarma','farmaceutico','pharma','gemini','progetto rag','progetto farmaceutico'],
      a: "Otofarma è un'azienda farmaceutica. Abbiamo costruito un assistente AI interno dove lo staff interroga documenti di produzione e report in linguaggio naturale — powered by Google Gemini 2.5 con pipeline RAG privata e accessi per ruolo." },
    { q: 'Parlami dello studio dentistico',
      k: ['dentistico','dentista','clinica dentale','clinica','studio dentistico','appuntamenti','sito medico'],
      a: "Sito multi-pagina per uno studio dentistico italiano con hero video, pulsante WhatsApp fluttuante e UI di prenotazione appuntamenti — costruito per cliniche che vogliono un'estetica premium e un modo semplice per far prenotare i pazienti." },
    { q: 'Parlami di Ozlay',
      k: ['ozlay','ozley','b2b lead','sito lead gen','lead generation sito'],
      a: "Ozlay è un'azienda di lead gen B2B. Abbiamo fatto il redesign completo del sito — tema dark moderno, animazioni fluide, mobile responsive, multi-lingua." },

    // Processo
    { q: 'Come funziona?',
      k: ['come funziona','processo','procedimento','come lavorate','come iniziare','come si inizia','workflow','passi','metodologia','fasi'],
      a: "Quattro mosse: 1) Discovery & Scoping — capiamo la tua attività. 2) Design & Training — costruiamo la UI e addestriamo l'AI sui tuoi contenuti. 3) Lancio & Integrazione — mandiamo live, colleghiamo i tuoi tool, formiamo il team. 4) Supporto & Miglioramento — check-in mensili e retraining." },
    { q: 'Come funziona la discovery?',
      k: ['discovery','prima call','kickoff','primo incontro','primo passo','inizio','call iniziale'],
      a: "Una call di 60 minuti col founder o il responsabile operativo per mappare i flussi quotidiani. Da quella call scriviamo un documento di scope chiaro: cosa costruiamo, cosa possiedi, quanto costa e quando lo riceverai." },
    { q: 'Quanto dura un progetto?',
      k: ['quanto dura','quanto tempo','tempi','tempistiche','tempo consegna','delivery','consegna','durata','settimane'],
      a: "Settimane, non trimestri. Sito aziendale: 2–3 settimane. Sito + chatbot: 3–4 settimane. Progetti documentali / RAG / ML: tipicamente 4–8 settimane in base a dati e scope. Tempistiche concordate in anticipo." },

    // Prezzi
    { q: 'Quanto costa?',
      k: ['costo','costi','prezzo','prezzi','preventivo','budget','tariffa','tariffe','quanto costa','spesa','stima'],
      a: "Il prezzo dipende dallo scope. Ogni progetto è preventivato su misura e in modo trasparente — senza costi nascosti. Scrivi a lineadigitale8@gmail.com o clicca Prenota una Call — ti mandiamo una proposta entro 24 ore." },
    { q: 'Fate sconti?',
      k: ['sconto','sconti','promo','promozione','offerta','più economico','negoziare'],
      a: "Preventiviamo onestamente dal primo giorno — quindi non servono giri di negoziazione. Se lo scope può flettersi, ti proponiamo volentieri opzioni più leggere che rispettano il budget senza compromessi." },
    { q: 'Come funziona il pagamento?',
      k: ['pagamento','fattura','fatturazione','anticipo','deposit','milestone','rata'],
      a: "Split standard: 50% al kickoff, 50% al lancio. Progetti più grandi vanno su milestone 30/40/30. Fatturiamo in EUR e accettiamo bonifico o Stripe." },
    { q: 'Firmate NDA?',
      k: ['nda','riservatezza','confidenziale','accordo','contratto','dpa'],
      a: "Sì — firmiamo volentieri un NDA reciproco prima che tu condivida informazioni sensibili. Operiamo anche sotto DPA per qualsiasi dato personale trattato per tuo conto." },
    { q: 'Di chi è il codice e i dati?',
      k: ['proprietà','possiedo','codice','di chi è','vendor lock','lock-in','lock in','licenza','proprietà intellettuale','ip'],
      a: "È tutto tuo — codice, modelli e dati. Nessun vendor lock-in, niente hosting misterioso, nessun aumento a sorpresa. Puoi spostare tutto quando vuoi." },
    { q: 'Fate una prova gratuita?',
      k: ['gratis','gratuito','prova gratuita','trial','proof of concept','poc','pilot'],
      a: "Non facciamo pilot gratuiti, ma spesso proponiamo un proof-of-concept breve a pagamento (1–2 settimane) sui progetti AI, così puoi validare l'idea prima di impegnarti sul progetto completo." },

    // Supporto
    { q: 'Offrite supporto dopo il lancio?',
      k: ['supporto','manutenzione','dopo lancio','post lancio','aftercare','retainer','aiuto dopo','supporto mensile'],
      a: "Sì — check-in mensili su utilizzo ed errori, retraining dei modelli man mano che i contenuti crescono, e linea diretta via WhatsApp o email. Niente ticket, niente labirinti di chat." },
    { q: 'Se qualcosa si rompe?',
      k: ['rotto','bug','problema','down','crash','emergenza','urgente','critico'],
      a: "Scrivici su WhatsApp o a lineadigitale8@gmail.com. Rispondiamo in giornata negli orari lavorativi. I problemi critici su progetti attivi sono coperti senza costi extra." },

    // Differenziatori
    { q: 'Cosa vi rende diversi?',
      k: ['diversi','unico','perché scegliere','perché voi','competitor','vantaggio','vs','confronto','perché linea'],
      a: "Tre cose: AI già nel DNA dal primo giorno (non aggiunta dopo), stack completo sotto lo stesso tetto (sito + chatbot + AI documentale + ML) e budget da PMI con preventivi trasparenti — niente fatture a sorpresa da grande agenzia." },
    { q: 'Perché non un freelance?',
      k: ['freelance','freelancer','singolo','individuale','solo developer','contro freelance'],
      a: "I freelance sono perfetti per lavori mono-disciplina. Noi siamo la scelta giusta quando il progetto tocca web + AI + dati + supporto — un solo team, un solo contratto, nessuno sparisce a metà strada." },
    { q: 'Perché non una grande agenzia?',
      k: ['grande agenzia','agenzia grande','corporate','grande studio','vs grande agenzia'],
      a: "Le grandi agenzie fanno prezzi da enterprise e ti smistano tra account junior. Noi restiamo piccoli di proposito — parli con chi costruisce davvero, e i budget sono tarati per le PMI." },

    // Contatti & prenotazione
    { q: 'Come prenoto una call?',
      k: ['prenota','prenotare','call','riunione','meeting','parlare','contattarvi','mettermi in contatto'],
      a: "Il modo più veloce: clicca Prenota una Call — si apre WhatsApp direttamente sul +39 344 521 7995 (web WhatsApp su desktop, app su mobile). Puoi anche scrivere a lineadigitale8@gmail.com o compilare il form Richiedi Preventivo in alto. Ti rispondiamo entro 24 ore." },
    { q: 'Come richiedo un preventivo?',
      k: ['preventivo','richiedi preventivo','quote','stima','proposta','richiesta','brief progetto','richiedere preventivo'],
      a: "Clicca Richiedi Preventivo in alto a destra. Si apre un modulo breve — nome, email, il servizio che ti interessa ed eventuali dettagli. Arriva direttamente a noi e ti rispondiamo entro 24 ore con una proposta su misura." },
    { q: 'Usate WhatsApp?',
      k: ['whatsapp','wa','whats app','numero whatsapp','wa business','chat whatsapp'],
      a: "Sì — WhatsApp è il modo più veloce per raggiungerci. Clicca Prenota una Call, oppure scrivici direttamente al +39 344 521 7995. Su desktop si apre web.whatsapp.com, su mobile si apre l'app con un saluto già pronto." },
    { q: 'Qual è la vostra email?',
      k: ['email','indirizzo email','mail','e-mail','email contatto'],
      a: "lineadigitale8@gmail.com — rispondiamo entro 24 ore nei giorni lavorativi." },
    { q: 'Qual è il vostro telefono?',
      k: ['telefono','numero','numero di telefono','cellulare','chiamare'],
      a: "+39 344 521 7995 — disponibile per chiamata e su WhatsApp. Clicca Prenota una Call sul sito per una scorciatoia WhatsApp con un tocco." },
    { q: 'Posso scrivere su WhatsApp?',
      k: ['messaggio whatsapp','wa messaggio','scrivere whatsapp','mandare messaggio','contattare whatsapp'],
      a: "Certo — è il modo più rapido. Clicca Prenota una Call sul sito e WhatsApp si apre con un saluto già scritto, oppure scrivi direttamente al +39 344 521 7995." },
  ];

  // Italian signal words
  const IT_SIGNALS = new Set([
    'ciao','salve','buongiorno','buonasera','grazie','prego','come','cosa','chi','dove','quando','perché','perche',
    'servizi','servizio','prezzo','prezzi','costo','costi','preventivo','contatto','contatti','lavori','progetti',
    'siete','siamo','voi','sono','sei','ho','hai','posso','puoi','vorrei','mi','ti','si','no','con','per','una',
    'fate','offrite','avete','parlami','dimmi','quali','quanto','dove','vostri','vostra','lavorate','azienda',
    'chatbot','sito','siti','documenti','rag','ml','modello','assistente','automazione','agenzia','clienti',
  ]);
  const detectItalian = (text) => {
    const t = text.toLowerCase();
    let hits = 0;
    IT_SIGNALS.forEach((w) => { if (t.includes(w)) hits++; });
    return hits >= 2;
  };

  // Stop words
  const STOP = new Set(['the','a','an','is','are','am','was','were','be','being','been','do','does','did','doing','have','has','had','having','i','me','my','we','us','our','you','your','he','she','they','them','their','it','its','this','that','these','those','to','of','in','on','at','for','from','with','by','and','or','but','if','so','as','than','then','can','could','would','should','will','shall','may','might','what','which','who','whom','whose','when','where','why','how','yes','no','not','please','just','only','also','too','very','really','kindly','hey','hi','hello','some','any','il','la','lo','gli','le','un','una','di','del','della','dei','delle','che','per','con','su','tra','fra','e','ed','o','ma','se','come','cosa','dove','quando','sono','siamo','siete','ho','hai','ha','abbiamo','avete','hanno','mi','ti','ci','vi','si']);

  const tokenize = (s) => s.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu,' ').split(/\s+/).filter(Boolean);

  // Bounded Levenshtein — returns max+1 early when exceeded
  const editDist = (a, b, max) => {
    const m = a.length, n = b.length;
    if (Math.abs(m - n) > max) return max + 1;
    if (!m) return n; if (!n) return m;
    let prev = new Array(n + 1);
    let curr = new Array(n + 1);
    for (let j = 0; j <= n; j++) prev[j] = j;
    for (let i = 1; i <= m; i++) {
      curr[0] = i;
      let rowMin = i;
      for (let j = 1; j <= n; j++) {
        const cost = a.charCodeAt(i - 1) === b.charCodeAt(j - 1) ? 0 : 1;
        curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
        if (curr[j] < rowMin) rowMin = curr[j];
      }
      if (rowMin > max) return max + 1;
      const tmp = prev; prev = curr; curr = tmp;
    }
    return prev[n];
  };

  // How well does `term` appear in `text`? 1 = exact, 0 = not at all.
  // Handles misspellings up to 2 edits on longer words, 1 on short ones.
  const fuzzyContains = (text, term) => {
    if (!term) return 0;
    if (text.includes(term)) return 1;
    if (term.length < 4) return 0; // too short to safely fuzzy
    const tokens = text.split(/\s+/);
    const tol = term.length <= 5 ? 1 : 2;
    let bestDist = tol + 1;
    for (const t of tokens) {
      if (!t) continue;
      if (Math.abs(t.length - term.length) > tol) continue;
      const d = editDist(t, term, tol);
      if (d < bestDist) bestDist = d;
      if (bestDist === 0) return 1;
    }
    if (bestDist > tol) return 0;
    return Math.max(0.55, 1 - bestDist / term.length);
  };

  const addMsg = (text, who = 'bot') => {
    const el = document.createElement('div');
    el.className = 'bot__msg bot__msg--' + who;
    el.textContent = text;
    botMessages.appendChild(el);
    botMessages.scrollTop = botMessages.scrollHeight;
    return el;
  };
  const addTyping = () => {
    const el = document.createElement('div');
    el.className = 'bot__typing';
    el.innerHTML = '<span></span><span></span><span></span>';
    botMessages.appendChild(el);
    botMessages.scrollTop = botMessages.scrollHeight;
    return el;
  };

  const scorePool = (low, pool) => {
    const tokens = tokenize(low).filter((t) => !STOP.has(t));
    let best = null, bestScore = 0;
    pool.forEach((f) => {
      let s = 0;
      f.k.forEach((kw) => {
        const match = fuzzyContains(low, kw);
        if (match > 0) {
          s += match * Math.max(3, kw.length / 2.5);
          if (kw.indexOf(' ') !== -1) s += match * 3;
        }
      });
      const qTokens = tokenize(f.q).filter((t) => !STOP.has(t));
      tokens.forEach((t) => {
        if (t.length < 3) return;
        if (qTokens.includes(t)) { s += 1.5; return; }
        // fuzzy token match against canonical question tokens
        for (const qt of qTokens) {
          if (qt.length < 4) continue;
          if (Math.abs(qt.length - t.length) > 1) continue;
          if (editDist(t, qt, 1) <= 1) { s += 0.7; break; }
        }
      });
      if (f.q.toLowerCase() === low) s += 50;
      if (s > bestScore) { bestScore = s; best = f; }
    });
    return { best, bestScore };
  };

  // Rotating professional fallbacks — different response each time
  const FALLBACKS_EN = [
    "That's a good one — I don't want to guess. What I can speak to confidently: our six services, past projects (Ozlay, a dental clinic, Otofarma), process, pricing, timelines, and how to get started. Point me to any of those.",
    "I want to be honest — I'm not fully sure on that. The fastest path: email lineadigitale8@gmail.com and a human replies within 24 hours. Or ask me about a specific service, project, or pricing and I'll give you a clean answer.",
    "Hmm, that's slightly outside what I'm trained on. I can go deep on: any of the six services, the Otofarma / dental clinic / Ozlay projects, cost, timelines, support, or ownership. Which one?",
    "I might be missing context on that — try rephrasing, or pick a topic: services, our work, process, pricing, support, location. For anything complex, the team is one email away: lineadigitale8@gmail.com.",
    "Honest answer: I don't have that one nailed down. But I can tell you everything about what we build (websites, chatbots, document AI, customer assistants, internal RAG, ML models), who we build it for, and how the process runs.",
  ];
  const FALLBACKS_IT = [
    "Buona domanda — preferisco non inventarmi la risposta. So bene invece: i nostri sei servizi, i progetti passati (Ozlay, clinica dentistica, Otofarma), processo, prezzi, tempistiche e come iniziare. Fammi una domanda su uno di questi.",
    "Onestamente non sono sicuro su quello. Il modo più veloce è scrivere a lineadigitale8@gmail.com — un umano risponde entro 24 ore. Oppure chiedimi di un servizio specifico, di un progetto o dei prezzi.",
    "Mi manca un po' di contesto. Posso andare in profondità su: i sei servizi, i progetti (Otofarma, clinica dentistica, Ozlay), costi, tempistiche, supporto o proprietà del codice. Quale ti interessa?",
    "Potrei non avere questa info. Prova a riformulare o scegli: servizi, lavori, processo, prezzi, supporto, sede. Per cose più complesse: lineadigitale8@gmail.com.",
    "Risposta onesta: su questo non sono preparato al 100%. Ma su cosa costruiamo (siti, chatbot, AI sui documenti, assistenti clienti, RAG interno, modelli ML), per chi lavoriamo e come funziona il processo — chiedimi tutto.",
  ];
  let fallbackIdx = Math.floor(Math.random() * FALLBACKS_EN.length);
  const pickFallback = (isIT) => {
    const arr = isIT ? FALLBACKS_IT : FALLBACKS_EN;
    const out = arr[fallbackIdx % arr.length];
    fallbackIdx++;
    return out;
  };

  const answer = (text) => {
    const low = text.toLowerCase().trim();
    const italianish = detectItalian(low);

    if (!low) {
      return italianish
        ? "Chiedimi qualsiasi cosa — servizi, progetti, prezzi o come iniziare."
        : "Ask me anything — services, projects, pricing, or how to get started.";
    }

    const en = scorePool(low, FAQS);
    const it = scorePool(low, FAQS_IT);

    const useIT =
      (italianish && it.bestScore >= 2.5) ||
      (it.bestScore > en.bestScore && it.bestScore >= 2.5);

    const chosen = useIT ? it : en;

    if (chosen.best && chosen.bestScore >= 2.5) return chosen.best.a;

    return pickFallback(useIT || italianish);
  };

  // Track how the last question came in — voice mic or text form.
  // Only voice-in triggers voice-out; text stays silent.
  let lastFromVoice = false;

  const ask = (question, fromVoice = false) => {
    lastFromVoice = !!fromVoice;
    stopSpeaking();
    addMsg(question, 'user');
    const t = addTyping();
    setTimeout(() => {
      t.remove();
      const reply = answer(question);
      addMsg(reply, 'bot');
      if (lastFromVoice) speak(reply);
    }, 650 + Math.random() * 400);
  };

  /* ---------- SPEECH SYNTHESIS (voice out) ---------- */
  // Classic female voice when available; fall back to best-available for lang.
  let ttsVoices = [];
  let chosenVoice = null;

  const loadVoices = () => {
    if (!window.speechSynthesis) return;
    ttsVoices = window.speechSynthesis.getVoices() || [];
    const wantLang = currentLang === 'it' ? 'it' : 'en';
    const prefsEN = ['Samantha','Microsoft Zira','Google UK English Female','Karen','Serena','Victoria','Tessa','Moira','Microsoft Aria'];
    const prefsIT = ['Alice','Elsa','Federica','Paola','Luca','Microsoft Elsa','Google italiano'];
    const prefs = wantLang === 'it' ? prefsIT : prefsEN;

    chosenVoice = null;
    for (const name of prefs) {
      const v = ttsVoices.find((vv) => vv.name && vv.name.toLowerCase().includes(name.toLowerCase()));
      if (v) { chosenVoice = v; break; }
    }
    if (!chosenVoice) {
      chosenVoice =
        ttsVoices.find((v) => v.lang && v.lang.toLowerCase().startsWith(wantLang) && /female|zira|samantha|alice|elsa|karen|serena/i.test(v.name || '')) ||
        ttsVoices.find((v) => v.lang && v.lang.toLowerCase().startsWith(wantLang)) ||
        ttsVoices[0] || null;
    }
  };

  if (window.speechSynthesis) {
    loadVoices();
    // Chrome fires this async; Safari populates immediately but doesn't fire it.
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  // Strip URLs, markdown marks, and over-long whitespace — nicer aloud.
  const sanitizeForSpeech = (text) => {
    return String(text)
      .replace(/https?:\/\/\S+/g, '')
      .replace(/[•*_`~]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const setSpeakingState = (on) => {
    if (!bot) return;
    bot.classList.toggle('is-speaking', !!on);
  };

  /* Prime the speech synthesizer inside a user gesture so subsequent
     calls work on iOS Safari + some Chrome/Edge builds. Calling speak()
     with a silent utterance unlocks the audio context. */
  let synthPrimed = false;
  const primeSynth = () => {
    if (synthPrimed || !window.speechSynthesis) return;
    try {
      const u = new SpeechSynthesisUtterance(' ');
      u.volume = 0; u.rate = 1; u.pitch = 1;
      window.speechSynthesis.speak(u);
      synthPrimed = true;
    } catch (_) { /* no-op */ }
  };

  const speak = (text) => {
    if (!window.speechSynthesis) return;
    const synth = window.speechSynthesis;
    const cleaned = sanitizeForSpeech(text);
    if (!cleaned) return;

    // Voices may not have loaded yet on first open — force a reload
    if (!chosenVoice) loadVoices();

    // Stop anything currently queued/speaking
    try { synth.cancel(); } catch (_) {}
    setSpeakingState(false);

    // Chrome drops utterances that are speak()'d in the same tick as
    // cancel(). A short defer lets cancel() settle cleanly before we
    // queue the new one.
    setTimeout(() => {
      try {
        const utter = new SpeechSynthesisUtterance(cleaned);
        if (chosenVoice) utter.voice = chosenVoice;
        utter.lang   = (chosenVoice && chosenVoice.lang) || (currentLang === 'it' ? 'it-IT' : 'en-US');
        utter.rate   = 1.0;
        utter.pitch  = 1.02;
        utter.volume = 1.0;

        // Chrome pauses speechSynthesis after ~15s unless nudged.
        let keepAlive;
        const clearKeepAlive = () => { if (keepAlive) { clearInterval(keepAlive); keepAlive = null; } };

        utter.onstart = () => {
          setSpeakingState(true);
          clearKeepAlive();
          keepAlive = setInterval(() => {
            if (synth.speaking && !synth.paused) {
              synth.pause();
              synth.resume();
            }
          }, 12000);
        };
        utter.onend    = () => { clearKeepAlive(); setSpeakingState(false); };
        utter.onerror  = () => { clearKeepAlive(); setSpeakingState(false); };
        utter.oncancel = () => { clearKeepAlive(); setSpeakingState(false); };

        synth.speak(utter);
      } catch (_) {
        setSpeakingState(false);
      }
    }, 80);
  };

  const stopSpeaking = () => {
    try {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    } catch (_) {}
    setSpeakingState(false);
  };

  function buildQuickChips() {
    if (!botQuick) return;
    botQuick.innerHTML = '';
    const picksEN = [
      'What services do you offer?',
      'Show me your work',
      'How does it work?',
      'How long does a project take?',
      'What does it cost?',
      'Where are you based?',
      'What makes you different?',
      'How can I book a call?',
    ];
    const picksIT = [
      'Quali servizi offrite?',
      'Mostrami i vostri lavori',
      'Come funziona?',
      'Quanto dura un progetto?',
      'Quanto costa?',
      'Dove avete sede?',
      'Cosa vi rende diversi?',
      'Come prenoto una call?',
    ];
    const pool = currentLang === 'it' ? FAQS_IT : FAQS;
    const picks = currentLang === 'it' ? picksIT : picksEN;
    picks.forEach((q) => {
      const f = pool.find((x) => x.q === q);
      if (!f) return;
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = f.q;
      b.addEventListener('click', () => ask(f.q, false));
      botQuick.appendChild(b);
    });
  }

  const openBot = () => {
    if (!bot) return;
    bot.classList.add('is-open');
    botPanel?.setAttribute('aria-hidden', 'false');
    if (botMessages && botMessages.childElementCount === 0) {
      addMsg(I18N[currentLang]['bot.welcome'], 'bot');
    }
    buildQuickChips();
  };
  const closeBot = () => {
    if (!bot) return;
    bot.classList.remove('is-open');
    botPanel?.setAttribute('aria-hidden', 'true');
    stopSpeaking();
  };

  botToggle?.addEventListener('click', () => {
    // Prime TTS on first open so voice replies work later on iOS Safari
    // and some Chrome builds that require a user-gesture unlock.
    primeSynth();
    bot?.classList.contains('is-open') ? closeBot() : openBot();
  });
  botClose?.addEventListener('click', closeBot);

  // Tap the messages area (or the avatar) to stop the bot mid-sentence
  botMessages?.addEventListener('click', () => {
    if (bot?.classList.contains('is-speaking')) stopSpeaking();
  });
  document.querySelector('.bot__avatar')?.addEventListener('click', () => {
    if (bot?.classList.contains('is-speaking')) stopSpeaking();
  });

  /* ---------- PROCESS STEP EXPAND ---------- */
  document.querySelectorAll('.prc-step__toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const step = btn.closest('.prc-step');
      if (!step) return;
      const open = step.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      const detail = step.querySelector('.prc-step__detail');
      if (detail) detail.setAttribute('aria-hidden', open ? 'false' : 'true');
    });
  });

  /* ---------- SERVICE CARD FLIP ---------- */
  document.querySelectorAll('.svc').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (window.matchMedia('(hover: none)').matches) {
        e.preventDefault();
        document.querySelectorAll('.svc.is-flipped').forEach((other) => {
          if (other !== card) other.classList.remove('is-flipped');
        });
        card.classList.toggle('is-flipped');
      }
    });
  });

  /* ---------- TYPED INPUT (text → silent reply) ---------- */
  const botForm = document.getElementById('botForm');
  const botInput = document.getElementById('botInput');
  botForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const v = (botInput?.value || '').trim();
    if (!v) return;
    ask(v, false);
    if (botInput) botInput.value = '';
  });

  /* ---------- VOICE INPUT (mic → spoken reply) ---------- */
  const botMic = document.getElementById('botMic');
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (botMic && botInput) {
    if (!SR) {
      botMic.style.display = 'none';
    } else {
      const rec = new SR();
      rec.interimResults = false;
      rec.maxAlternatives = 1;
      let listening = false;

      botMic.addEventListener('click', () => {
        // Unlock speech synthesis inside the user-gesture tick —
        // required by iOS Safari + some Chrome builds before TTS will
        // play later.
        primeSynth();
        // Tap to stop the bot mid-sentence, or interrupt a running
        // recognition session to retry.
        stopSpeaking();
        if (listening) { try { rec.stop(); } catch (_) {} return; }
        rec.lang = currentLang === 'it' ? 'it-IT' : 'en-US';
        try { rec.start(); }
        catch (_) { /* already started — ignore */ }
      });

      rec.addEventListener('start', () => {
        listening = true;
        botMic.classList.add('is-listening');
        botInput.placeholder = currentLang === 'it' ? 'Ti ascolto…' : 'Listening…';
      });
      const resetMic = () => {
        listening = false;
        botMic.classList.remove('is-listening');
        botInput.placeholder = I18N[currentLang]['bot.placeholder'];
      };
      rec.addEventListener('end', resetMic);
      rec.addEventListener('error', (e) => {
        resetMic();
        // Surface a friendly message in the chat only for real problems,
        // not for everyday "no-speech" timeouts or manual aborts.
        const err = e?.error || '';
        if (err === 'no-speech' || err === 'aborted') return;
        const msgs = {
          'not-allowed':   currentLang === 'it'
            ? "Non ho il permesso del microfono — attivalo dalle impostazioni del browser e riprova."
            : "I don't have microphone permission — enable it in your browser settings and try again.",
          'service-not-allowed': currentLang === 'it'
            ? "Il microfono non è disponibile su questo dispositivo/browser. Puoi sempre scrivere qui sotto."
            : "Mic isn't available on this device/browser. You can still type below.",
          'network': currentLang === 'it'
            ? "Problema di rete col servizio vocale. Riprova, o scrivimi qui sotto."
            : "Voice service network issue. Try again, or type below.",
        };
        addMsg(msgs[err] || (currentLang === 'it'
          ? "Non sono riuscito a sentirti. Riprova o scrivi qui sotto."
          : "I couldn't hear you. Try again, or type below."), 'bot');
      });
      rec.addEventListener('result', (e) => {
        const transcript = e.results?.[0]?.[0]?.transcript || '';
        if (transcript) {
          botInput.value = '';
          ask(transcript, true); // fromVoice = true → bot speaks back
        }
      });
    }
  }

  /* ---------- QUOTE / BOOKING MODAL ---------- */
  /*
    EMAIL DELIVERY — the form is already wired to the live Formspree
    endpoint below (xbdqqvvl). Submissions go silently to
    lineadigitale8@gmail.com on every device — desktop, tablet, phone.

    If Formspree is ever unreachable (network blip, service down), the
    form falls back to opening the user's email client with the message
    pre-filled so no request is ever lost.

    To swap services later:
      · Formspree:   change FORMSPREE_ENDPOINT below to a new /f/... URL
      · EmailJS:     replace the fetch() block with emailjs.send(...)
  */
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbdqqvvl';
  const CONTACT_EMAIL      = 'lineadigitale8@gmail.com';

  const quoteModal    = document.getElementById('quoteModal');
  const quoteBackdrop = document.getElementById('quoteBackdrop');
  const quoteClose    = document.getElementById('quoteClose');
  const quoteForm     = document.getElementById('quoteForm');
  const quoteSubmit   = document.getElementById('quoteSubmit');
  const quoteSuccess  = document.getElementById('quoteSuccess');
  const quoteSuccessClose = document.getElementById('quoteSuccessClose');
  const quoteCharCount    = document.getElementById('quoteCharCount');
  const quoteGlobalErr    = document.getElementById('quoteGlobalErr');

  const openQuote = () => {
    if (!quoteModal) return;
    // Stop any bot speech so the form area is calm
    if (typeof stopSpeaking === 'function') stopSpeaking();
    quoteModal.classList.add('is-open');
    quoteModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Reset any stale success state and focus the first input
    quoteSuccess?.classList.remove('is-shown');
    quoteSuccess?.setAttribute('aria-hidden', 'true');
    quoteForm?.classList.remove('is-hidden', 'is-sending');
    setTimeout(() => {
      quoteForm?.querySelector('input[name="firstName"]')?.focus();
    }, 300);
  };
  const closeQuote = () => {
    if (!quoteModal) return;
    quoteModal.classList.remove('is-open');
    quoteModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Hook any element marked [data-quote] — nav + connect form CTAs
  document.querySelectorAll('[data-quote]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openQuote();
    });
  });

  /* ---------- ROTATING TOP NUDGE (mini CTA pill) ----------
     Small floating pill just below the nav that cycles a rotating
     bilingual mix of short, punchy CTAs every 2 seconds. Each
     message is tagged with a type — clicking the pill triggers
     the matching action (WhatsApp or quote form). */
  const topNudge      = document.getElementById('topNudge');
  const topNudgeText  = document.getElementById('topNudgeText');
  const topNudgeIcon  = document.getElementById('topNudgeIcon');
  const topNudgeClose = document.getElementById('topNudgeClose');

  const NUDGE_ICONS = {
    wa:    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.46 0 .11 5.35.11 11.93a11.88 11.88 0 0 0 1.6 5.96L0 24l6.27-1.64a11.93 11.93 0 0 0 5.77 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.18-1.24-6.17-3.46-8.42zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.72.97.99-3.62-.23-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89a9.85 9.85 0 0 1 9.88 9.9c0 5.46-4.44 9.86-9.91 9.86zm5.4-7.38c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.76.97-.93 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47a9 9 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.04 1.02-1.04 2.5 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.22 5.1 4.52.71.3 1.27.49 1.7.62.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg>',
    quote: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M9 13h6M9 17h4"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l2.4 5.6L20 8.4l-4 4.2.9 5.4L12 15.8 7.1 18l.9-5.4-4-4.2 5.6-.8z"/></svg>',
  };

  // Mixed EN + IT messages — each one tells the user exactly what to
  // CLICK. `type` picks which action fires on tap.
  const NUDGE_MESSAGES = [
    // English — call-to-click
    { type: 'wa',    text: "Tap Book A Call · chat on WhatsApp" },
    { type: 'wa',    text: "Click Book A Call → reply in minutes" },
    { type: 'wa',    text: "Press Book A Call — one tap, done" },
    { type: 'quote', text: "Click Get A Quote · reply in 24h" },
    { type: 'quote', text: "Try Get A Quote · 2 min, free" },
    { type: 'quote', text: "Tap Get A Quote — no strings attached" },
    { type: 'quote', text: "Click the quote button → tailored reply" },
    // Italian — call-to-click
    { type: 'wa',    text: "Clicca Prenota Call · scrivici su WhatsApp" },
    { type: 'wa',    text: "Tocca Prenota Call → risposta in minuti" },
    { type: 'wa',    text: "Premi Prenota Call — un tocco e via" },
    { type: 'quote', text: "Clicca Richiedi Preventivo · 24h di risposta" },
    { type: 'quote', text: "Prova Richiedi Preventivo · 2 min, gratis" },
    { type: 'quote', text: "Tocca Richiedi Preventivo — senza impegno" },
    { type: 'quote', text: "Clicca il pulsante preventivo → proposta su misura" },
  ];

  let tnudgeDismissed = (() => {
    try { return sessionStorage.getItem('ld_tnudge_dismissed') === '1'; } catch (_) { return false; }
  })();
  let tnudgeCurrent = null;
  let tnudgeTimer  = null;

  const pickNextNudge = () => {
    if (NUDGE_MESSAGES.length <= 1) return NUDGE_MESSAGES[0];
    let next;
    let tries = 0;
    do {
      next = NUDGE_MESSAGES[Math.floor(Math.random() * NUDGE_MESSAGES.length)];
      tries++;
    } while (tnudgeCurrent && next === tnudgeCurrent && tries < 6);
    return next;
  };

  const renderNudge = () => {
    if (!topNudge || !topNudgeText || tnudgeDismissed) return;
    const next = pickNextNudge();
    topNudge.classList.add('is-swapping');
    setTimeout(() => {
      tnudgeCurrent = next;
      topNudgeText.textContent = next.text;
      topNudge.dataset.type = next.type;
      if (topNudgeIcon && NUDGE_ICONS[next.type]) {
        topNudgeIcon.innerHTML = NUDGE_ICONS[next.type];
      }
      topNudge.classList.remove('is-swapping');
    }, 500); // half the CSS fade so the text fully clears before the swap
  };

  const startNudgeRotation = () => {
    if (tnudgeDismissed || !topNudge) return;
    renderNudge();                               // show first message immediately
    setTimeout(() => topNudge.classList.add('is-shown'), 120);
    clearInterval(tnudgeTimer);
    // 5.5 s between messages — long enough to read, short enough to stay fresh
    tnudgeTimer = setInterval(() => {
      if (!document.hidden && !tnudgeDismissed) renderNudge();
    }, 5500);
  };

  const dismissNudge = () => {
    tnudgeDismissed = true;
    try { sessionStorage.setItem('ld_tnudge_dismissed', '1'); } catch (_) {}
    topNudge?.classList.remove('is-shown');
    clearInterval(tnudgeTimer);
    setTimeout(() => topNudge?.classList.add('is-dismissed'), 500);
  };

  topNudgeClose?.addEventListener('click', (e) => {
    e.stopPropagation();
    dismissNudge();
  });
  topNudgeClose?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); dismissNudge(); }
  });

  topNudge?.addEventListener('click', (e) => {
    // If user clicked the × explicitly, the close handler above stops
    // propagation — so this fires only for the pill body itself.
    if (tnudgeDismissed || !tnudgeCurrent) return;
    if (tnudgeCurrent.type === 'wa') {
      const msg = currentLang === 'it'
        ? "Ciao! Vorrei prenotare una call con Linea Digitale."
        : "Hi! I'd like to book a call with Linea Digitale.";
      window.open(`https://wa.me/393445217995?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    } else if (tnudgeCurrent.type === 'quote') {
      if (typeof openQuote === 'function') openQuote();
    }
  });

  // Kick off a few seconds after load so it doesn't collide with the
  // preloader / hero intro animations.
  setTimeout(startNudgeRotation, 3200);

  /* ---------- WHATSAPP CTA (Book A Call buttons) ----------
     wa.me/{number} is the universal WhatsApp link — it auto-routes
     to the native WhatsApp app on iOS/Android and to web.whatsapp.com
     on desktop. We intercept the click to inject a language-aware
     pre-filled greeting that matches the current site language. */
  const WHATSAPP_NUMBER = '393445217995'; // +39 344 521 7995 — no "+" or spaces
  document.querySelectorAll('[data-whatsapp]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const msg = currentLang === 'it'
        ? "Ciao! Vorrei prenotare una call con Linea Digitale."
        : "Hi! I'd like to book a call with Linea Digitale.";
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
      // Open in a new tab so the current site stays in place
      window.open(url, '_blank', 'noopener');
    });
  });
  quoteClose?.addEventListener('click', closeQuote);
  quoteBackdrop?.addEventListener('click', closeQuote);
  quoteSuccessClose?.addEventListener('click', closeQuote);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && quoteModal?.classList.contains('is-open')) closeQuote();
  });

  /* ---- Validation helpers ---- */
  const showFieldError = (name, msg) => {
    const field = quoteForm?.querySelector(`[name="${name}"]`)?.closest('.qform__field');
    const errEl = quoteForm?.querySelector(`.qform__err[data-err="${name}"]`);
    if (field) field.classList.add('has-error');
    if (errEl) {
      errEl.textContent = msg;
      errEl.classList.add('is-shown');
    }
  };
  const clearFieldError = (name) => {
    const field = quoteForm?.querySelector(`[name="${name}"]`)?.closest('.qform__field');
    const errEl = quoteForm?.querySelector(`.qform__err[data-err="${name}"]`);
    if (field) field.classList.remove('has-error');
    if (errEl) {
      errEl.textContent = '';
      errEl.classList.remove('is-shown');
    }
  };
  const clearAllErrors = () => {
    ['firstName', 'lastName', 'email', 'service'].forEach(clearFieldError);
    if (quoteGlobalErr) {
      quoteGlobalErr.textContent = '';
      quoteGlobalErr.classList.remove('is-shown');
    }
  };

  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

  const validateQuote = (data) => {
    clearAllErrors();
    const isIT = (currentLang === 'it');
    const L = {
      req:    isIT ? 'Campo obbligatorio'          : 'This field is required',
      email:  isIT ? 'Inserisci un’email valida'   : 'Please enter a valid email',
      svc:    isIT ? 'Seleziona un servizio'       : 'Please select a service',
    };
    let ok = true;
    if (!data.firstName || !data.firstName.trim()) { showFieldError('firstName', L.req); ok = false; }
    if (!data.lastName  || !data.lastName.trim())  { showFieldError('lastName',  L.req); ok = false; }
    if (!data.email     || !data.email.trim())     { showFieldError('email',     L.req); ok = false; }
    else if (!isEmail(data.email.trim()))          { showFieldError('email',     L.email); ok = false; }
    if (!data.service)                             { showFieldError('service',   L.svc); ok = false; }
    return ok;
  };

  // Clear each field's error as the user types / changes
  quoteForm?.addEventListener('input', (e) => {
    const name = e.target?.name;
    if (name) clearFieldError(name);
  });
  quoteForm?.addEventListener('change', (e) => {
    const name = e.target?.name;
    if (name) clearFieldError(name);
  });

  /* ---- Character counter on details textarea ---- */
  const detailsTextarea = quoteForm?.querySelector('textarea[name="details"]');
  const updateCharCount = () => {
    if (!detailsTextarea || !quoteCharCount) return;
    const n = detailsTextarea.value.length;
    quoteCharCount.textContent = n;
    const wrap = quoteCharCount.parentElement;
    wrap?.classList.toggle('is-near', n >= 160 && n < 200);
    wrap?.classList.toggle('is-max',  n >= 200);
  };
  detailsTextarea?.addEventListener('input', updateCharCount);

  /* ---- Build the pre-filled email body for mailto fallback ---- */
  const buildEmailBody = (d, isIT) => {
    const L = isIT
      ? { intro:'Nuova richiesta di preventivo dal sito:', first:'Nome', last:'Cognome', email:'Email', phone:'Telefono', service:'Servizio', details:'Dettagli', none:'(non indicato)' }
      : { intro:'New quote request from the website:', first:'First Name', last:'Last Name', email:'Email', phone:'Phone', service:'Service', details:'Details', none:'(not provided)' };
    return [
      L.intro,
      '',
      `${L.first}: ${d.firstName}`,
      `${L.last}:  ${d.lastName}`,
      `${L.email}: ${d.email}`,
      `${L.phone}: ${d.phone || L.none}`,
      `${L.service}: ${d.service}`,
      '',
      `${L.details}:`,
      d.details || L.none,
    ].join('\n');
  };

  const openMailtoFallback = (d, isIT) => {
    const subject = `Quote request — ${d.firstName} ${d.lastName} · ${d.service}`;
    const body = buildEmailBody(d, isIT);
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Use a hidden link click rather than window.location so it's clean on iOS
    const a = document.createElement('a');
    a.href = href;
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  /* ---- Submit handler ---- */
  quoteForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!quoteForm) return;

    const fd = new FormData(quoteForm);
    const data = {
      firstName: (fd.get('firstName') || '').toString().trim(),
      lastName:  (fd.get('lastName')  || '').toString().trim(),
      email:     (fd.get('email')     || '').toString().trim(),
      phone:     (fd.get('phone')     || '').toString().trim(),
      service:   (fd.get('service')   || '').toString(),
      details:   (fd.get('details')   || '').toString().trim().slice(0, 200),
    };

    if (!validateQuote(data)) return;

    const isIT = (currentLang === 'it');
    quoteForm.classList.add('is-sending');
    if (quoteSubmit) quoteSubmit.disabled = true;

    const finishSuccess = () => {
      quoteForm.reset();
      updateCharCount();
      quoteForm.classList.add('is-hidden');
      quoteSuccess?.classList.add('is-shown');
      quoteSuccess?.setAttribute('aria-hidden', 'false');
    };

    /* PRIMARY: Formspree background submit — works on every device,
       silent for the visitor, email lands in lineadigitale8@gmail.com. */
    try {
      const payload = {
        'First Name': data.firstName,
        'Last Name':  data.lastName,
        'Email':      data.email,
        'Phone':      data.phone || '(not provided)',
        'Service':    data.service,
        'Details':    data.details || '(none)',
        _subject:     `New quote request — ${data.firstName} ${data.lastName} · ${data.service}`,
        _replyto:     data.email,
      };

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        // Pull Formspree's error message if present, for clearer diagnostics
        let msg = '';
        try { const j = await res.json(); msg = j?.error || j?.errors?.[0]?.message || ''; } catch (_) {}
        throw new Error(msg || `HTTP ${res.status}`);
      }

      finishSuccess();
      return;
    } catch (err) {
      console.warn('Formspree failed, falling back to mailto:', err);
      /* SAFETY NET: mailto fallback — opens user's email client with
         everything pre-filled. Used only if Formspree is unreachable. */
      try {
        openMailtoFallback(data, isIT);
        finishSuccess();
      } catch (err2) {
        if (quoteGlobalErr) {
          quoteGlobalErr.textContent = isIT
            ? `Qualcosa è andato storto. Scrivi direttamente a ${CONTACT_EMAIL}.`
            : `Something went wrong. Please email ${CONTACT_EMAIL} directly.`;
          quoteGlobalErr.classList.add('is-shown');
        }
      }
    } finally {
      quoteForm.classList.remove('is-sending');
      if (quoteSubmit) quoteSubmit.disabled = false;
    }
  });

  /* ---------- ABOUT VIDEO MODAL ---------- */
  const aboutTrigger = document.getElementById('aboutVideoTrigger');
  const videoModal = document.getElementById('videoModal');
  const videoModalBackdrop = document.getElementById('videoModalBackdrop');
  const videoModalClose = document.getElementById('videoModalClose');
  const videoModalVideo = document.getElementById('videoModalVideo');

  const openVideoModal = () => {
    if (!videoModal || !videoModalVideo) return;
    videoModal.classList.add('is-open');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Pause any bot speech so the video audio is clean
    stopSpeaking();
    try {
      videoModalVideo.currentTime = 0;
      const p = videoModalVideo.play();
      if (p && typeof p.catch === 'function') p.catch(() => { /* autoplay blocked — user can hit play */ });
    } catch (_) { /* no-op */ }
  };
  const closeVideoModal = () => {
    if (!videoModal || !videoModalVideo) return;
    videoModal.classList.remove('is-open');
    videoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    try { videoModalVideo.pause(); } catch (_) {}
  };

  aboutTrigger?.addEventListener('click', openVideoModal);
  videoModalClose?.addEventListener('click', closeVideoModal);
  videoModalBackdrop?.addEventListener('click', closeVideoModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal?.classList.contains('is-open')) closeVideoModal();
  });

  /* ---------- ROTATING NUDGE NOTIFICATIONS ---------- */
  const botNudge = document.getElementById('botNudge');
  const botNudgeText = document.getElementById('botNudgeText');
  const botNudgeClose = document.getElementById('botNudgeClose');

  const NUDGES_EN = [
    'Need help?','Want to talk?','Got a question?',"Let's chat",
    'Looking to automate?','Ready to grow?','Curious about pricing?','Book a quick call?',
  ];
  const NUDGES_IT = [
    'Ti serve aiuto?','Vuoi parlarne?','Una domanda?','Chiacchieriamo?',
    'Vuoi automatizzare?','Pronto a crescere?','Curioso dei prezzi?','Prenoti una call?',
  ];
  let nudgeIdx = 0;
  let nudgeDismissedUntil = 0;

  const showNudge = () => {
    if (!bot || !botNudgeText) return;
    if (bot.classList.contains('is-open')) return;
    if (Date.now() < nudgeDismissedUntil) return;
    const arr = currentLang === 'it' ? NUDGES_IT : NUDGES_EN;
    botNudgeText.textContent = arr[nudgeIdx % arr.length];
    nudgeIdx++;
    bot.classList.add('has-nudge');
    setTimeout(() => bot.classList.remove('has-nudge'), 3800);
  };

  setTimeout(showNudge, 4500);
  setInterval(showNudge, 7000);

  botNudgeClose?.addEventListener('click', (e) => {
    e.stopPropagation();
    bot?.classList.remove('has-nudge');
    nudgeDismissedUntil = Date.now() + 30000;
  });

  botNudge?.addEventListener('click', (e) => {
    if (e.target === botNudgeClose) return;
    openBot();
  });
})();
