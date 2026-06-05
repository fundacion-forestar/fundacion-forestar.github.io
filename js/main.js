const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.addEventListener('click', () => navMenu.classList.toggle('open'));
navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navMenu.classList.remove('open')));

const langBtn = document.getElementById('langBtn');
let lang = 'es';

const t = {
  es: {
    'nav-about':'Quiénes somos','nav-services':'Servicios','nav-species':'Especies','nav-project':'Proyecto',
    'nav-carbon':'Bonos de Carbono','nav-team':'Equipo','nav-contact':'Contacto','nav-cta':'Contáctanos',
    'hero-badge':'🌿 Restauración Ecológica — Orinoquia Colombia',
    'hero-title-1':'Restauramos','hero-title-2':'bosques','hero-title-3':'generamos futuro sostenible',
    'hero-subtitle':'Fundación sin ánimo de lucro líder en restauración ecológica, bonos de carbono certificados y conservación de la biodiversidad en la Orinoquia y Amazonia colombiana.',
    'hero-btn1':'🌱 Ver bonos de carbono','hero-btn2':'Nuestro proyecto',
    'stat1-num':'80.000','stat1-label':'Árboles nativos','stat2-num':'3.151','stat2-label':'tCO₂ certificables',
    'stat3-num':'80 ha','stat3-label':'En restauración','stat4-num':'2018','stat4-label':'Fundada',
    'about-label':'Quiénes somos','about-title-1':'Lideramos la restauración de la','about-title-2':'Orinoquia',
    'about-desc':'Desde 2018, Fundación Forestar trabaja en la restauración ecológica de ecosistemas degradados en Colombia, combinando ciencia, tecnología y comunidades locales para crear impacto ambiental duradero.',
    'feat1-title':'Certificación Gold Standard','feat1-desc':'Bonos de carbono verificados con los más altos estándares internacionales',
    'feat2-title':'Cooperación Internacional','feat2-desc':'Proyectos financiados por EUROCLIMA+, GEF/PNUD y Unión Europea',
    'feat3-title':'Biodiversidad y Comunidades','feat3-desc':'400 colmenas de meliponicultura con abejas nativas sin aguijón',
    'feat4-title':'Ciencia e Innovación','feat4-desc':'Monitoreo con metodología IPCC: 39.4 tCO₂/ha en zona virgen',
    'services-label':'Portafolio de Servicios','services-title-1':'Soluciones ambientales','services-title-2':'integrales',
    'services-desc':'Ofrecemos servicios especializados en restauración ecológica, bonos de carbono y conservación de la biodiversidad para empresas, gobiernos y organismos internacionales.',
    'svc1-name':'Restauración Ecológica','svc1-desc':'Siembra de especies nativas, control de erosión y monitoreo de ecosistemas degradados.',
    'svc2-name':'Bonos de Carbono','svc2-desc':'Certificación y venta de créditos de carbono verificados Gold Standard para compensación internacional.',
    'svc3-name':'Compensación RSE','svc3-desc':'Programas de responsabilidad social empresarial con adopción de árboles nativos certificados.',
    'svc4-name':'Meliponicultura','svc4-desc':'Establecimiento y manejo de colmenas de abejas nativas sin aguijón (Melipona eburnea).',
    'svc5-name':'Educación Ambiental','svc5-desc':'Talleres y programas formativos sobre conservación, biodiversidad y cambio climático.',
    'svc6-name':'Ecoturismo Científico','svc6-desc':'Recorridos guiados por ecosistemas restaurados de la Orinoquia con enfoque científico.',
    'svc7-name':'Consultoría Ambiental','svc7-desc':'Asesoría especializada en EIA, PMA, licencias ambientales y cumplimiento normativo.',
    'svc8-name':'Investigación y Monitoreo','svc8-desc':'Inventarios de flora y fauna, monitoreo de biodiversidad y análisis de carbono en biomasa.',
    'especies-label':'Flora Nativa','especies-title-1':'Especies que','especies-title-2':'restauramos',
    'especies-desc':'Trabajamos con 12 especies nativas del Orinoco, seleccionadas por su valor ecológico, capacidad de captura de carbono y resistencia en sabanas inundables de Arauca.',
    'project-label':'Proyecto Estrella','project-title-1':'Caño Juriepe —','project-title-2':'Vereda La Esperanza',
    'project-desc':'Restauración ecológica en 80 hectáreas vírgenes de la Orinoquia colombiana, con financiación EUROCLIMA+ de la Unión Europea. Un proyecto modelo para certificación Gold Standard.',
    'pstat1':'Árboles nativos','pstat2':'Colmenas Melipona','pstat3':'tCO₂ neto certificable','pstat4':'Presupuesto total',
    'carbon-label':'Mercado de Carbono','carbon-title-1':'Bonos de Carbono','carbon-title-2':'Gold Standard',
    'carbon-desc':'Compensaciones verificadas internacionalmente con los más altos estándares de calidad. Zona virgen con 39.4 tCO₂/ha — máximo potencial de captura.',
    'carbon-badge-sub':'Certificación internacional',
    'pkg1-name':'Moriche','pkg1-tons':'100 toneladas CO₂','pkg1-per':'USD 27 / tCO₂',
    'pkg2-name':'Caño','pkg2-tons':'300 toneladas CO₂','pkg2-per':'USD 23 / tCO₂',
    'pkg3-name':'Sabana','pkg3-tons':'600 toneladas CO₂','pkg3-per':'USD 20 / tCO₂',
    'pkg4-name':'Orinoquia','pkg4-tons':'3.151 toneladas CO₂','pkg4-per':'USD 16 / tCO₂',
    'pkg-cta':'Solicitar','pkg-popular':'Popular',
    'team-label':'Nuestro Equipo','team-title-1':'Expertos en','team-title-2':'ecosistemas',
    'team-desc':'Un equipo multidisciplinario de profesionales comprometidos con la restauración ecológica y la sostenibilidad ambiental.',
    'tm1-role':'Presidenta / Rep. Legal','tm2-role':'Dir. Relaciones Internacionales',
    'tm2-exp':'Gestión de proyectos internacionales, bonos de carbono y financiación europea',
    'tm3-role':'Gestora de Operaciones','tm4-role':'Coordinador de Proyectos',
    'tm5-role':'Biólogo Especialista','tm6-role':'Ingeniero Ambiental',
    'contact-label':'Contacto','contact-title-1':'Hablemos sobre el','contact-title-2':'futuro',
    'contact-desc':'Ya sea que busques compensar huella de carbono, invertir en bonos certificados o colaborar en proyectos de restauración, estamos listos para crear una propuesta a tu medida.',
    'ci1-title':'Correo principal','ci2-title':'Relaciones Internacionales',
    'ci3-title':'Colombia','ci4-title':'Redes sociales','ci5-title':'Datos legales',
    'ci5-founded':'Fundada: 12 octubre 2018',
    'form-title':'Envíanos un mensaje','form-name':'Nombre completo','form-org':'Empresa / Organización',
    'form-email':'Correo electrónico','form-phone':'Teléfono (opcional)',
    'form-interest':'Área de interés','form-message':'Mensaje','form-submit':'🌿 Enviar mensaje',
    'int-select':'Seleccionar...','int-carbon':'Bonos de carbono','int-restoration':'Restauración ecológica',
    'int-rse':'Compensación RSE','int-bees':'Meliponicultura','int-consulting':'Consultoría ambiental','int-other':'Otro',
    'footer-desc':'Fundación sin ánimo de lucro dedicada a la restauración ecológica, bonos de carbono y conservación de biodiversidad en la Orinoquia y Amazonia colombiana.',
    'footer-services':'Servicios','footer-contact':'Contacto',
    'footer-copy':'© 2026 Fundación Forestar — Todos los derechos reservados'
  },
  en: {
    'nav-about':'About us','nav-services':'Services','nav-species':'Species','nav-project':'Project',
    'nav-carbon':'Carbon Bonds','nav-team':'Team','nav-contact':'Contact','nav-cta':'Contact us',
    'hero-badge':'🌿 Ecological Restoration — Orinoquía Colombia',
    'hero-title-1':'We restore','hero-title-2':'forests','hero-title-3':'building a sustainable future',
    'hero-subtitle':'Non-profit foundation leading ecological restoration, certified carbon bonds, and biodiversity conservation in the Colombian Orinoquía and Amazonia.',
    'hero-btn1':'🌱 View carbon bonds','hero-btn2':'Our project',
    'stat1-num':'80,000','stat1-label':'Native trees','stat2-num':'3,151','stat2-label':'tCO₂ certifiable',
    'stat3-num':'80 ha','stat3-label':'Under restoration','stat4-num':'2018','stat4-label':'Founded',
    'about-label':'About us','about-title-1':'We lead the restoration of the','about-title-2':'Orinoquía',
    'about-desc':'Since 2018, Fundación Forestar works in the ecological restoration of degraded ecosystems in Colombia, combining science, technology, and local communities to create lasting environmental impact.',
    'feat1-title':'Gold Standard Certification','feat1-desc':'Carbon bonds verified with the highest international standards',
    'feat2-title':'International Cooperation','feat2-desc':'Projects funded by EUROCLIMA+, GEF/UNDP, and the European Union',
    'feat3-title':'Biodiversity & Communities','feat3-desc':'400 stingless native bee hives (meliponiculture)',
    'feat4-title':'Science & Innovation','feat4-desc':'IPCC methodology monitoring: 39.4 tCO₂/ha in virgin zone',
    'services-label':'Services Portfolio','services-title-1':'Comprehensive environmental','services-title-2':'solutions',
    'services-desc':'We offer specialized services in ecological restoration, carbon bonds, and biodiversity conservation for companies, governments, and international organizations.',
    'svc1-name':'Ecological Restoration','svc1-desc':'Native species planting, erosion control, and degraded ecosystem monitoring.',
    'svc2-name':'Carbon Bonds','svc2-desc':'Certification and sale of Gold Standard verified carbon credits for international offsetting.',
    'svc3-name':'CSR Compensation','svc3-desc':'Corporate social responsibility programs with certified native tree adoption.',
    'svc4-name':'Meliponiculture','svc4-desc':'Establishment and management of stingless native bee hives (Melipona eburnea).',
    'svc5-name':'Environmental Education','svc5-desc':'Workshops and training programs on conservation, biodiversity, and climate change.',
    'svc6-name':'Scientific Ecotourism','svc6-desc':'Guided tours through restored ecosystems of the Orinoquía with scientific focus.',
    'svc7-name':'Environmental Consulting','svc7-desc':'Specialized advice on EIA, EMP, environmental permits, and regulatory compliance.',
    'svc8-name':'Research & Monitoring','svc8-desc':'Flora and fauna inventories, biodiversity monitoring, and biomass carbon analysis.',
    'especies-label':'Native Flora','especies-title-1':'Species we','especies-title-2':'restore',
    'especies-desc':'We work with 12 native Orinoco species, selected for their ecological value, carbon sequestration capacity, and resilience in the flooded savannas of Arauca.',
    'project-label':'Flagship Project','project-title-1':'Caño Juriepe —','project-title-2':'Vereda La Esperanza',
    'project-desc':'Ecological restoration on 80 virgin hectares of the Colombian Orinoquía, with EUROCLIMA+ funding from the European Union. A model project for Gold Standard certification.',
    'pstat1':'Native trees','pstat2':'Melipona hives','pstat3':'net tCO₂ certifiable','pstat4':'Total budget',
    'carbon-label':'Carbon Market','carbon-title-1':'Carbon Bonds','carbon-title-2':'Gold Standard',
    'carbon-desc':'Internationally verified offsets with the highest quality standards. Virgin zone with 39.4 tCO₂/ha — maximum sequestration potential.',
    'carbon-badge-sub':'International certification',
    'pkg1-name':'Moriche','pkg1-tons':'100 tonnes CO₂','pkg1-per':'USD 27 / tCO₂',
    'pkg2-name':'Caño','pkg2-tons':'300 tonnes CO₂','pkg2-per':'USD 23 / tCO₂',
    'pkg3-name':'Sabana','pkg3-tons':'600 tonnes CO₂','pkg3-per':'USD 20 / tCO₂',
    'pkg4-name':'Orinoquia','pkg4-tons':'3,151 tonnes CO₂','pkg4-per':'USD 16 / tCO₂',
    'pkg-cta':'Request','pkg-popular':'Popular',
    'team-label':'Our Team','team-title-1':'Experts in','team-title-2':'ecosystems',
    'team-desc':'A multidisciplinary team of professionals committed to ecological restoration and environmental sustainability.',
    'tm1-role':'President / Legal Representative','tm2-role':'Dir. International Relations',
    'tm2-exp':'International project management, carbon bonds, and European funding',
    'tm3-role':'Operations Manager','tm4-role':'Project Coordinator',
    'tm5-role':'Specialist Biologist','tm6-role':'Environmental Engineer',
    'contact-label':'Contact','contact-title-1':"Let's talk about the",'contact-title-2':'future',
    'contact-desc':"Whether you want to offset your carbon footprint, invest in certified bonds, or collaborate in restoration projects, we're ready to create a proposal tailored to your needs.",
    'ci1-title':'Main email','ci2-title':'International Relations',
    'ci3-title':'Colombia','ci4-title':'Social media','ci5-title':'Legal info',
    'ci5-founded':'Founded: October 12, 2018',
    'form-title':'Send us a message','form-name':'Full name','form-org':'Company / Organization',
    'form-email':'Email address','form-phone':'Phone (optional)',
    'form-interest':'Area of interest','form-message':'Message','form-submit':'🌿 Send message',
    'int-select':'Select...','int-carbon':'Carbon bonds','int-restoration':'Ecological restoration',
    'int-rse':'CSR compensation','int-bees':'Meliponiculture','int-consulting':'Environmental consulting','int-other':'Other',
    'footer-desc':'Non-profit foundation dedicated to ecological restoration, carbon bonds, and biodiversity conservation in the Colombian Orinoquía and Amazonia.',
    'footer-services':'Services','footer-contact':'Contact',
    'footer-copy':'© 2026 Fundación Forestar — All rights reserved'
  }
};

function applyLang(l) {
  lang = l;
  const tr = t[l];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (tr[key] !== undefined) el.textContent = tr[key];
  });
  langBtn.textContent = l === 'es' ? 'EN' : 'ES';
  document.documentElement.lang = l;
}

langBtn.addEventListener('click', () => applyLang(lang === 'es' ? 'en' : 'es'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  const orig = btn.textContent;
  btn.textContent = lang === 'es' ? '✅ ¡Mensaje enviado!' : '✅ Message sent!';
  btn.style.background = '#4a8c4a';
  btn.disabled = true;
  setTimeout(() => { e.target.reset(); btn.textContent = orig; btn.style.background = ''; btn.disabled = false; }, 3500);
});

/* ===== MODALES DE SERVICIOS ===== */
const svcData = [
  {
    label: 'Restauración de Ecosistemas',
    name: 'Restauración Ecológica',
    img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=760&h=230&q=80',
    desc: 'Programa completo de restauración ecológica en ecosistemas degradados de la Orinoquia colombiana. Utilizamos 12 especies nativas seleccionadas científicamente para recuperar la cobertura vegetal, el suelo y la biodiversidad en áreas intervenidas.',
    includes: [
      'Diagnóstico del suelo y estado del ecosistema',
      'Selección de 12+ especies nativas del Orinoco',
      'Siembra directa y transplante de plántulas',
      'Control de erosión y compactación del suelo',
      'Monitoreo de supervivencia y crecimiento',
      'Reportes georeferenciados con coordenadas GPS',
      'Cálculo de CO₂ capturado (metodología IPCC)'
    ],
    audience: 'Propietarios de predios rurales, empresas con obligaciones de compensación ambiental, entidades territoriales y organismos de cooperación internacional como EUROCLIMA+ y GEF/PNUD.',
    price: 'Desde USD 3,200/ha',
    priceSub: '€3,100 · COP 13.8M por hectárea'
  },
  {
    label: 'Mercado de Carbono',
    name: 'Bonos de Carbono Gold Standard',
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=760&h=230&q=80',
    desc: 'Certificación y comercialización de créditos de carbono verificados bajo el estándar Gold Standard. La zona virgen de Caño Juriepe genera 39.4 tCO₂/ha — el máximo potencial de captura certificable en la región Orinoquia-Amazonia.',
    includes: [
      'Medición de biomasa forestal (metodología IPCC)',
      'Cálculo certificado de toneladas CO₂ equivalente',
      'Proceso de verificación Gold Standard internacional',
      'Emisión de certificados digitales con serial único',
      'Comercialización en mercados europeos y colombianos',
      'Reporte de impacto ambiental y social anual'
    ],
    audience: 'Empresas con compromisos SBTi, corporaciones internacionales con metas net-zero, fondos de inversión ESG, y compradores voluntarios de créditos de carbono en Europa, Asia y Norteamérica.',
    price: 'Desde USD 2,700',
    priceSub: 'Paquetes: 100 · 300 · 600 · 3.151 tCO₂'
  },
  {
    label: 'Responsabilidad Social Empresarial',
    name: 'Compensación RSE',
    img: 'https://images.unsplash.com/photo-1598335624134-5bceb5de202d?auto=format&fit=crop&w=760&h=230&q=80',
    desc: 'Programa corporativo de adopción de árboles nativos certificados en la Orinoquia colombiana. Cada árbol tiene coordenadas GPS, especie botánica registrada y seguimiento anual — con certificado personalizado con el logo de su empresa para informes de sostenibilidad.',
    includes: [
      'Adopción de árboles nativos con serial único',
      'Certificado digital personalizado con logo corporativo',
      'Coordenadas GPS del árbol en campo real',
      'Fotografía de siembra y seguimiento anual',
      'Reporte de impacto para memorias de sostenibilidad',
      'Placa de reconocimiento en el área del proyecto'
    ],
    audience: 'Empresas de cualquier sector con programas de RSE, multinacionales con metas ambientales corporativas, PYMEs que quieren demostrar compromiso ambiental verificable ante sus clientes.',
    price: 'Desde USD 33/árbol',
    priceSub: '€32 · COP 138,000 por árbol certificado'
  },
  {
    label: 'Apicultura Nativa',
    name: 'Meliponicultura',
    img: 'https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=760&h=230&q=80',
    desc: 'Establecimiento y manejo de colonias de Melipona eburnea, la abeja nativa sin aguijón de los llanos orientales. Nuestro programa de 400 colmenas en Caño Juriepe integra polinización natural, producción de miel medicinal y conservación de la biodiversidad polinizadora de la Orinoquia.',
    includes: [
      'Instalación de colmenas tradicionales en madera nativa',
      'Capacitación técnica en manejo de abejas sin aguijón',
      'Seguimiento trimestral del estado de las colonias',
      'Producción de miel medicinal de alta calidad',
      'Servicios de polinización para cultivos aledaños',
      'Rescate y relocalización de colonias silvestres'
    ],
    audience: 'Fincas y predios rurales en la Orinoquia, proyectos de restauración ecológica, comunidades rurales e indígenas de Arauca y Casanare, investigadores de biodiversidad y polinizadores.',
    price: 'Desde USD 125/colmena',
    priceSub: '€120 · COP 517,000 por colmena instalada'
  },
  {
    label: 'Formación y Sensibilización',
    name: 'Educación Ambiental',
    img: 'https://images.unsplash.com/photo-1565792894736-eeced66760d7?auto=format&fit=crop&w=760&h=230&q=80',
    desc: 'Talleres y programas educativos sobre conservación de ecosistemas, biodiversidad del Orinoco y adaptación al cambio climático. Diseñados para comunidades rurales, estudiantes y equipos corporativos con enfoque práctico, vivencial y adaptado al contexto llanero.',
    includes: [
      'Talleres presenciales de 4 a 8 horas en campo',
      'Material didáctico visual adaptado al contexto llanero',
      'Recorridos de campo por ecosistemas nativos',
      'Certificados de participación individuales',
      'Módulo de identificación de especies nativas del Orinoco',
      'Programas anuales de seguimiento comunitario'
    ],
    audience: 'Colegios y universidades de Arauca, comunidades rurales y campesinas, empresas con programas de RSE ambiental, entidades gubernamentales y alcaldías municipales.',
    price: 'Desde USD 400/taller',
    priceSub: '€390 · COP 1.7M por taller de campo'
  },
  {
    label: 'Turismo de Naturaleza',
    name: 'Ecoturismo Científico',
    img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=760&h=230&q=80',
    desc: 'Recorridos científicos guiados por los ecosistemas restaurados de Caño Juriepe y la Orinoquia colombiana. Observación de fauna silvestre, flora nativa, morichales y avifauna del llano con biólogo especialista y enfoque de conservación.',
    includes: [
      'Guía especializado — biólogo o ingeniero ambiental',
      'Observación de aves, mamíferos y reptiles del llano',
      'Recorrido por morichales y bosques de galería',
      'Visita al proyecto de meliponicultura en campo',
      'Registro fotográfico del ecosistema visitado',
      'Informe de especies de biodiversidad observadas'
    ],
    audience: 'Investigadores y académicos nacionales e internacionales, turistas de naturaleza, grupos universitarios, organizaciones ambientales y cooperantes europeos que visitan el proyecto Caño Juriepe.',
    price: 'Desde USD 48/persona',
    priceSub: '€47 · COP 207,000 por persona · grupos desde 4'
  },
  {
    label: 'Asesoría Técnica Ambiental',
    name: 'Consultoría Ambiental',
    img: 'https://images.unsplash.com/photo-1726098206872-e0d859aa1e34?auto=format&fit=crop&w=760&h=230&q=80',
    desc: 'Asesoría técnica especializada para el cumplimiento de la normatividad ambiental colombiana. Elaboración de Estudios de Impacto Ambiental (EIA) y Planes de Manejo Ambiental (PMA) con gestión completa ante CORPORINOQUIA y el Ministerio de Ambiente y Desarrollo Sostenible.',
    includes: [
      'Estudios de Impacto Ambiental (EIA) completos',
      'Planes de Manejo Ambiental (PMA) operativos',
      'Gestión de licencias ante CORPORINOQUIA y MADS',
      'Inventarios de flora y fauna para permisos ambientales',
      'Due diligence ambiental para proyectos de inversión',
      'Asesoría en compensaciones ambientales obligatorias',
      'Monitoreo de cumplimiento normativo continuo'
    ],
    audience: 'Empresas petroleras y gasíferas, proyectos agropecuarios e industriales, constructoras y desarrolladores, y entidades del Estado que operan en la Orinoquia colombiana.',
    price: 'Desde USD 1,350/mes',
    priceSub: '€1,300 · COP 5.75M — Flórez + Carvajal COPNIA'
  },
  {
    label: 'Ciencia de Campo',
    name: 'Investigación y Monitoreo de Biodiversidad',
    img: 'https://images.unsplash.com/photo-1752110382999-15e510962691?auto=format&fit=crop&w=760&h=230&q=80',
    desc: 'Inventarios científicos de flora y fauna, monitoreo de biodiversidad a largo plazo y análisis de carbono en biomasa. Aplicamos metodología IPCC con transectos de vegetación, puntos de conteo de aves, cámaras trampa y muestreo de suelos en la Orinoquia.',
    includes: [
      'Inventarios florísticos y faunísticos completos',
      'Monitoreo de aves, mamíferos, reptiles y anfibios',
      'Análisis de carbono en biomasa aérea y subterránea',
      'Muestreo y análisis físico-químico de suelos',
      'Reportes científicos con mapas SIG e infografías',
      'Bases de datos de biodiversidad geo-referenciadas'
    ],
    audience: 'Universidades e institutos de investigación, organismos GEF/PNUD/EUROCLIMA+, entidades ambientales del Estado colombiano, certificadoras Gold Standard e instituciones científicas internacionales.',
    price: 'Desde USD 2,700/año',
    priceSub: '€2,600 · COP 11.5M por programa anual'
  }
];

const modalOverlay = document.getElementById('svcModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalCtaBtn = document.getElementById('modalCtaBtn');

function openModal(idx) {
  const d = svcData[idx];
  document.getElementById('modalImg').src = d.img;
  document.getElementById('modalImg').alt = d.name;
  document.getElementById('modalHeroLabel').textContent = d.label;
  document.getElementById('modalTitle').textContent = d.name;
  document.getElementById('modalDesc').textContent = d.desc;
  document.getElementById('modalIncludes').innerHTML = d.includes.map(i => `<li>${i}</li>`).join('');
  document.getElementById('modalAudience').textContent = d.audience;
  document.getElementById('modalPriceVal').textContent = d.price;
  document.getElementById('modalPriceSub').textContent = d.priceSub;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.service-card').forEach((card, idx) => {
  card.addEventListener('click', (e) => {
    if (e.target.closest('a[href]')) return;
    openModal(idx);
  });
});

modalCloseBtn.addEventListener('click', closeModal);
modalCtaBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
