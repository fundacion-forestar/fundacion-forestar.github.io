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
