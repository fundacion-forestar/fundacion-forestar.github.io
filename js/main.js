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
const langCycle = { es: 'en', en: 'es' };
const langLabel = { es: 'EN', en: 'ES' };

const t = {
  es: {
    'nav-about':'Quiénes somos','nav-services':'Servicios','nav-species':'Especies','nav-project':'Proyecto',
    'nav-calc':'Calculadora','nav-carbon':'Bonos CO₂','nav-team':'Equipo','nav-contact':'Contacto','nav-cta':'Contáctanos',
    'hero-badge':'🌿 Restauración Ecológica — Orinoquia Colombia',
    'hero-title-1':'Restauramos','hero-title-2':'bosques','hero-title-3':'generamos futuro sostenible',
    'hero-subtitle':'Fundación sin ánimo de lucro líder en restauración ecológica, bonos de carbono en proceso de certificación Gold Standard y conservación de la biodiversidad en la Orinoquia y Amazonia colombiana.',
    'hero-btn1':'🌱 Ver bonos de carbono','hero-btn2':'Nuestro proyecto',
    'stat1-num':'80.000','stat1-label':'Árboles nativos','stat2-num':'3.151','stat2-label':'tCO₂ certificables',
    'stat3-num':'80 ha','stat3-label':'En restauración','stat4-num':'2018','stat4-label':'Fundada',
    'bstat1-num':'80.000','bstat1-label':'Árboles','bstat2-num':'3.151 tCO₂','bstat2-label':'Certificables','bstat3-num':'€548K','bstat3-label':'Financiación UE',
    'about-label':'Quiénes somos','about-title-1':'Lideramos la restauración de la','about-title-2':'Orinoquia',
    'about-desc':'Desde 2018, Fundación Forestar trabaja en la restauración ecológica de ecosistemas degradados en Colombia, combinando ciencia, tecnología y comunidades locales para crear impacto ambiental duradero.',
    'feat1-title':'En proceso de certificación Gold Standard','feat1-desc':'Bonos de carbono estructurados conforme a los más altos estándares internacionales de medición y verificación',
    'feat2-title':'Cooperación Internacional','feat2-desc':'Proyectos financiados por EUROCLIMA+, GEF/PNUD y Unión Europea',
    'feat3-title':'Biodiversidad y Comunidades','feat3-desc':'400 colmenas de meliponicultura con abejas nativas sin aguijón',
    'feat4-title':'Ciencia e Innovación','feat4-desc':'Monitoreo con metodología IPCC: 39.4 tCO₂/ha en zona virgen',
    'partners-lbl':'Respaldados por',
    'services-label':'Portafolio de Servicios','services-title-1':'Soluciones ambientales','services-title-2':'integrales',
    'services-desc':'Ofrecemos servicios especializados en restauración ecológica, bonos de carbono y conservación de la biodiversidad para empresas, gobiernos y organismos internacionales.',
    'svc1-name':'Restauración Ecológica','svc1-desc':'Siembra de especies nativas, control de erosión y monitoreo de ecosistemas degradados.',
    'svc2-name':'Bonos de Carbono','svc2-desc':'Estructuración y comercialización de créditos de carbono en proceso de certificación bajo el estándar Gold Standard, para compensación internacional.',
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
    'map-title':'📍 Ubicación del proyecto',
    'calc-label':'Calculadora Ambiental','calc-title-1':'¿Cuánto CO₂','calc-title-2':'emite tu empresa?',
    'calc-desc':'Calcula tu huella de carbono en menos de un minuto y descubre cuántos bonos Gold Standard necesitas para ser carbono neutro.',
    'calc-emp-label':'Empleados en la empresa','calc-elec-label':'Electricidad mensual (kWh)',
    'calc-estimate':'Estimar','calc-elec-hint':'Si no tienes el dato, haz clic en "Estimar" para usar un promedio por empleado.',
    'calc-grid-label':'Red eléctrica de tu país','calc-grid-hint':'Factores de intensidad de red según la European Environment Agency (EEA) — selecciona el país donde tu empresa consume electricidad para un cálculo más preciso.',
    'grid-eu':'Promedio Unión Europea — EEA (0.23 kg CO₂/kWh)','grid-co':'Colombia — SIN (0.164 kg CO₂/kWh)','grid-fr':'Francia (0.06 kg CO₂/kWh)','grid-es':'España (0.17 kg CO₂/kWh)','grid-it':'Italia (0.23 kg CO₂/kWh)','grid-de':'Alemania (0.38 kg CO₂/kWh)','grid-pl':'Polonia (0.64 kg CO₂/kWh)',
    'calc-flights-short':'Vuelos de corta distancia/año (<1.500 km)','calc-flights-long':'Vuelos de larga distancia/año (>1.500 km)','calc-vehicles':'Vehículos empresa',
    'calc-source-note':'Cálculo basado en factores de emisión de la European Environment Agency (EEA) y el GHG Protocol — referencia útil para reportes CSRD/ESRS E1 y compromisos SBTi.',
    'calc-cta-btn':'🌱 Calcular mi huella de carbono',
    'calc-result-lbl':'Tu huella de carbono anual','calc-breakdown':'Desglose de emisiones',
    'calc-b-elec':'Electricidad','calc-b-vuelos':'Vuelos','calc-b-vehs':'Vehículos','calc-b-oficina':'Oficina',
    'calc-rec-title':'Paquete recomendado para compensar','calc-rec-btn':'🌿 Solicitar este paquete',
    'calc-placeholder':'Completa los datos de tu empresa y haz clic en "Calcular" para ver tu huella de carbono y el paquete de bonos recomendado.',
    'carbon-label':'Mercado de Carbono','carbon-title-1':'Bonos de Carbono','carbon-title-2':'Gold Standard',
    'carbon-desc':'Proyecto en proceso de certificación bajo el estándar internacional Gold Standard, con metodología de medición IPCC. Zona virgen con 39.4 tCO₂/ha — máximo potencial de captura.',
    'carbon-badge-sub':'En proceso de certificación internacional',
    'pkg1-name':'Moriche','pkg1-tons':'100 toneladas CO₂','pkg1-per':'USD 27 / tCO₂',
    'pkg2-name':'Caño','pkg2-tons':'300 toneladas CO₂','pkg2-per':'USD 23 / tCO₂',
    'pkg3-name':'Sabana','pkg3-tons':'600 toneladas CO₂','pkg3-per':'USD 20 / tCO₂',
    'pkg4-name':'Orinoquia','pkg4-tons':'3.151 toneladas CO₂','pkg4-per':'USD 16 / tCO₂',
    'pkg-cta':'Solicitar','pkg-popular':'Popular',
    'faq-label':'Preguntas Frecuentes','faq-title-1':'Todo sobre los','faq-title-2':'bonos de carbono',
    'faq-q1':'¿Qué es Gold Standard y por qué es importante?',
    'faq-a1':'Gold Standard es el estándar de certificación de carbono más riguroso del mundo, creado por WWF y respaldado por más de 100 ONG internacionales. Garantiza que cada tonelada de CO₂ que compras está verificada por terceros independientes y genera beneficios reales para las comunidades locales y la biodiversidad.',
    'faq-q2':'¿Cómo se verifica la captura de CO₂?',
    'faq-a2':'Usamos la metodología IPCC para medir la biomasa forestal en campo. Un auditor independiente acreditado por Gold Standard verifica los cálculos antes de emitir los certificados. En la Orinoquia, nuestra zona virgen de 39.4 tCO₂/ha es de las más altas de Colombia.',
    'faq-q3':'¿Cuándo recibo mi certificado?',
    'faq-a3':'Una vez confirmada tu reserva, te enviamos de inmediato la confirmación con el detalle de tu paquete. El certificado oficial Gold Standard -- con número serial, coordenadas GPS del área y fecha de emisión -- se expide cuando el proyecto complete su proceso de registro y verificación ante Gold Standard. Te mantenemos informado del avance en cada etapa.',
    'faq-q4':'¿Puedo visitar el proyecto en campo?',
    'faq-a4':'Sí. Ofrecemos visitas guiadas al proyecto Caño Juriepe en Cravo Norte, Arauca. Contamos con biólogos especializados que acompañan el recorrido. Contáctanos para coordinar fechas y logística de traslado.',
    'faq-q5':'¿Qué diferencia a Forestar de otros proyectos?',
    'faq-a5':'Somos el único proyecto de restauración activo en zona virgen de la Orinoquia colombiana con financiación de la Unión Europea (EUROCLIMA+) y respaldo de GEF/PNUD. Trabajamos con 12 especies nativas del Orinoco, 400 colmenas de Melipona eburnea y un equipo técnico certificado.',
    'faq-q6':'¿Los bonos sirven para compensación obligatoria?',
    'faq-a6':'Los bonos Gold Standard son válidos para compromisos voluntarios SBTi, reportes ESG y metas net-zero corporativas. Para compensaciones obligatorias ante autoridades colombianas, contáctanos — podemos orientarte sobre los mecanismos que aplican en tu caso.',
    'team-label':'Nuestro Equipo','team-title-1':'Expertos en','team-title-2':'ecosistemas',
    'team-desc':'Un equipo multidisciplinario de profesionales comprometidos con la restauración ecológica y la sostenibilidad ambiental.',
    'tm1-role':'Presidenta / Rep. Legal','tm2-role':'Dir. Relaciones Internacionales',
    'tm2-exp':'Gestión de proyectos internacionales, bonos de carbono y financiación europea',
    'tm3-role':'Vicepresidenta y Rep. Legal Suplente','tm4-role':'Coordinador de Proyectos',
    'tm5-role':'Biólogo Especialista','tm6-role':'Ingeniero Ambiental',
    'contact-label':'Contacto','contact-title-1':'Hablemos sobre el','contact-title-2':'futuro',
    'contact-desc':'Ya sea que busques compensar tu huella de carbono, invertir en bonos en proceso de certificación Gold Standard o colaborar en proyectos de restauración, estamos listos para crear una propuesta a tu medida.',
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
    'footer-copy':'© 2026 Fundación Forestar — Todos los derechos reservados',
    'cookie-title':'🍪 Este sitio usa cookies',
    'cookie-text':'Usamos cookies esenciales para el funcionamiento del sitio. Respetamos tu privacidad conforme al RGPD/GDPR.',
    'cookie-ess':'Solo esenciales','cookie-acc':'Aceptar todas',
    'modal-includes-title':'¿Qué incluye?','modal-audience-title':'Dirigido a',
    'modal-invest':'Inversión','modal-request':'🌿 Solicitar información'
  },
  en: {
    'nav-about':'About us','nav-services':'Services','nav-species':'Species','nav-project':'Project',
    'nav-calc':'Calculator','nav-carbon':'Carbon Bonds','nav-team':'Team','nav-contact':'Contact','nav-cta':'Contact us',
    'hero-badge':'🌿 Ecological Restoration — Orinoquía Colombia',
    'hero-title-1':'We restore','hero-title-2':'forests','hero-title-3':'building a sustainable future',
    'hero-subtitle':'Non-profit foundation leading ecological restoration, carbon bonds currently undergoing Gold Standard certification, and biodiversity conservation in the Colombian Orinoquía and Amazonia.',
    'hero-btn1':'🌱 View carbon bonds','hero-btn2':'Our project',
    'stat1-num':'80,000','stat1-label':'Native trees','stat2-num':'3,151','stat2-label':'tCO₂ certifiable',
    'stat3-num':'80 ha','stat3-label':'Under restoration','stat4-num':'2018','stat4-label':'Founded',
    'bstat1-num':'80,000','bstat1-label':'Trees','bstat2-num':'3,151 tCO₂','bstat2-label':'Certifiable','bstat3-num':'€548K','bstat3-label':'EU Funding',
    'about-label':'About us','about-title-1':'We lead the restoration of the','about-title-2':'Orinoquía',
    'about-desc':'Since 2018, Fundación Forestar works in the ecological restoration of degraded ecosystems in Colombia, combining science, technology, and local communities to create lasting environmental impact.',
    'feat1-title':'Gold Standard Certification In Progress','feat1-desc':'Carbon bonds structured under the highest international measurement and verification standards',
    'feat2-title':'International Cooperation','feat2-desc':'Projects funded by EUROCLIMA+, GEF/UNDP, and the European Union',
    'feat3-title':'Biodiversity & Communities','feat3-desc':'400 stingless native bee hives (meliponiculture)',
    'feat4-title':'Science & Innovation','feat4-desc':'IPCC methodology monitoring: 39.4 tCO₂/ha in virgin zone',
    'partners-lbl':'Supported by',
    'services-label':'Services Portfolio','services-title-1':'Comprehensive environmental','services-title-2':'solutions',
    'services-desc':'We offer specialized services in ecological restoration, carbon bonds, and biodiversity conservation for companies, governments, and international organizations.',
    'svc1-name':'Ecological Restoration','svc1-desc':'Native species planting, erosion control, and degraded ecosystem monitoring.',
    'svc2-name':'Carbon Bonds','svc2-desc':'Structuring and commercialization of carbon credits currently undergoing certification under the Gold Standard, for international offsetting.',
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
    'map-title':'📍 Project location',
    'calc-label':'Environmental Calculator','calc-title-1':'How much CO₂','calc-title-2':'does your company emit?',
    'calc-desc':'Calculate your carbon footprint in under a minute and find out how many Gold Standard bonds you need to become carbon neutral.',
    'calc-emp-label':'Company employees','calc-elec-label':'Monthly electricity (kWh)',
    'calc-estimate':'Estimate','calc-elec-hint':'If you don\'t have the figure, click "Estimate" to use an average per employee.',
    'calc-grid-label':'Your country\'s electricity grid','calc-grid-hint':'Grid intensity factors from the European Environment Agency (EEA) — select the country where your company consumes electricity for a more precise calculation.',
    'grid-eu':'European Union average — EEA (0.23 kg CO₂/kWh)','grid-co':'Colombia — SIN (0.164 kg CO₂/kWh)','grid-fr':'France (0.06 kg CO₂/kWh)','grid-es':'Spain (0.17 kg CO₂/kWh)','grid-it':'Italy (0.23 kg CO₂/kWh)','grid-de':'Germany (0.38 kg CO₂/kWh)','grid-pl':'Poland (0.64 kg CO₂/kWh)',
    'calc-flights-short':'Short-haul flights/year (<1,500 km)','calc-flights-long':'Long-haul flights/year (>1,500 km)','calc-vehicles':'Company vehicles',
    'calc-source-note':'Calculation based on emission factors from the European Environment Agency (EEA) and the GHG Protocol — a useful reference for CSRD/ESRS E1 reporting and SBTi commitments.',
    'calc-cta-btn':'🌱 Calculate my carbon footprint',
    'calc-result-lbl':'Your annual carbon footprint','calc-breakdown':'Emissions breakdown',
    'calc-b-elec':'Electricity','calc-b-vuelos':'Flights','calc-b-vehs':'Vehicles','calc-b-oficina':'Office',
    'calc-rec-title':'Recommended package to offset','calc-rec-btn':'🌿 Request this package',
    'calc-placeholder':'Fill in your company data and click "Calculate" to see your carbon footprint and the recommended bonds package.',
    'carbon-label':'Carbon Market','carbon-title-1':'Carbon Bonds','carbon-title-2':'Gold Standard',
    'carbon-desc':'Project currently undergoing certification under the international Gold Standard, using IPCC measurement methodology. Virgin zone with 39.4 tCO₂/ha — maximum sequestration potential.',
    'carbon-badge-sub':'International certification in progress',
    'pkg1-name':'Moriche','pkg1-tons':'100 tonnes CO₂','pkg1-per':'USD 27 / tCO₂',
    'pkg2-name':'Caño','pkg2-tons':'300 tonnes CO₂','pkg2-per':'USD 23 / tCO₂',
    'pkg3-name':'Sabana','pkg3-tons':'600 tonnes CO₂','pkg3-per':'USD 20 / tCO₂',
    'pkg4-name':'Orinoquia','pkg4-tons':'3,151 tonnes CO₂','pkg4-per':'USD 16 / tCO₂',
    'pkg-cta':'Request','pkg-popular':'Popular',
    'faq-label':'Frequently Asked Questions','faq-title-1':'All about','faq-title-2':'carbon bonds',
    'faq-q1':'What is Gold Standard and why is it important?',
    'faq-a1':'Gold Standard is the world\'s most rigorous carbon certification standard, created by WWF and backed by over 100 international NGOs. It guarantees that every tonne of CO₂ you purchase is verified by independent third parties and generates real benefits for local communities and biodiversity.',
    'faq-q2':'How is CO₂ sequestration verified?',
    'faq-a2':'We use IPCC methodology to measure forest biomass in the field. An independent auditor accredited by Gold Standard verifies the calculations before issuing certificates. In the Orinoquía, our virgin zone of 39.4 tCO₂/ha is among the highest in Colombia.',
    'faq-q3':'When do I receive my certificate?',
    'faq-a3':'Once your reservation is confirmed, we immediately send you confirmation with your package details. The official Gold Standard certificate — including serial number, GPS coordinates of the area, and issue date — is issued once the project completes its registration and verification process with Gold Standard. We keep you informed of progress at every stage.',
    'faq-q4':'Can I visit the project in the field?',
    'faq-a4':'Yes. We offer guided visits to the Caño Juriepe project in Cravo Norte, Arauca. We have specialized biologists to accompany the tour. Contact us to coordinate dates and transfer logistics.',
    'faq-q5':'What differentiates Forestar from other projects?',
    'faq-a5':'We are the only active restoration project in a virgin zone of the Colombian Orinoquía with European Union funding (EUROCLIMA+) and GEF/UNDP support. We work with 12 native Orinoco species, 400 Melipona eburnea hives, and a certified technical team.',
    'faq-q6':'Are the bonds valid for mandatory compensation?',
    'faq-a6':'Gold Standard bonds are valid for voluntary SBTi commitments, ESG reports, and corporate net-zero goals. For mandatory compensations before Colombian authorities, contact us — we can advise you on the mechanisms applicable to your case.',
    'team-label':'Our Team','team-title-1':'Experts in','team-title-2':'ecosystems',
    'team-desc':'A multidisciplinary team of professionals committed to ecological restoration and environmental sustainability.',
    'tm1-role':'President / Legal Representative','tm2-role':'Dir. International Relations',
    'tm2-exp':'International project management, carbon bonds, and European funding',
    'tm3-role':'Vice-President & Deputy Legal Representative','tm4-role':'Project Coordinator',
    'tm5-role':'Specialist Biologist','tm6-role':'Environmental Engineer',
    'contact-label':'Contact','contact-title-1':"Let's talk about the",'contact-title-2':'future',
    'contact-desc':"Whether you want to offset your carbon footprint, invest in bonds currently undergoing Gold Standard certification, or collaborate in restoration projects, we're ready to create a proposal tailored to your needs.",
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
    'footer-copy':'© 2026 Fundación Forestar — All rights reserved',
    'cookie-title':'🍪 This site uses cookies',
    'cookie-text':'We use essential cookies for site functionality. We respect your privacy in accordance with GDPR.',
    'cookie-ess':'Essential only','cookie-acc':'Accept all',
    'modal-includes-title':'What does it include?','modal-audience-title':'Aimed at',
    'modal-invest':'Investment','modal-request':'🌿 Request information'
  }
};

function applyLang(l) {
  lang = l;
  const tr = t[l];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (tr[key] !== undefined) el.textContent = tr[key];
  });
  langBtn.textContent = langLabel[l];
  langBtn.title = { es:'Switch to English', en:'Cambiar a español' }[l];
  document.documentElement.lang = l;
  if (activeModalIdx >= 0) refreshModalContent();
}

langBtn.addEventListener('click', () => applyLang(langCycle[lang]));

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

/* ===== CALCULADORA DE HUELLA DE CARBONO ===== */
const cEmpSlider = document.getElementById('cEmp');
const cEmpValEl  = document.getElementById('cEmpVal');
cEmpSlider.addEventListener('input', () => { cEmpValEl.textContent = cEmpSlider.value; });

document.getElementById('cElecEstBtn').addEventListener('click', () => {
  const emp = parseInt(cEmpSlider.value) || 25;
  document.getElementById('cElec').value = emp * 180;
});

function changeCount(id, delta) {
  const el = document.getElementById(id);
  el.textContent = Math.max(0, parseInt(el.textContent) + delta);
}

function calcularHuella() {
  const empleados  = parseInt(cEmpSlider.value) || 0;
  const elecMes    = parseFloat(document.getElementById('cElec').value) || (empleados * 180);
  const gridFactor = parseFloat(document.getElementById('cGrid').value) || 0.23;
  const vShort = parseInt(document.getElementById('cVShort').textContent) || 0;
  const vLong  = parseInt(document.getElementById('cVLong').textContent)  || 0;
  const vehs   = parseInt(document.getElementById('cVehs').textContent)   || 0;

  // Factores de emisión: red eléctrica (EEA, seleccionable por país) y vuelos por banda de distancia (EEA/GHG Protocol)
  const eElec   = (elecMes * 12 * gridFactor) / 1000;
  const eVuelos = vShort * 0.20 + vLong * 1.5;
  const eVehs   = vehs * 3.5;
  const eOfic   = empleados * 0.5;
  const total   = eElec + eVuelos + eVehs + eOfic;

  const fmt = n => n.toFixed(1);
  const pct = n => (total > 0 ? Math.round((n / total) * 100) : 0) + '%';

  document.getElementById('rTotal').textContent    = fmt(total);
  document.getElementById('rElec').textContent     = fmt(eElec) + ' t';
  document.getElementById('rVuelos').textContent   = fmt(eVuelos) + ' t';
  document.getElementById('rVehs').textContent     = fmt(eVehs) + ' t';
  document.getElementById('rOficina').textContent  = fmt(eOfic) + ' t';

  const arboles = Math.round(total * 50);
  document.getElementById('rEquiv').textContent = lang === 'es'
    ? `≈ lo que absorben ${arboles.toLocaleString()} árboles en un año`
    : `≈ what ${arboles.toLocaleString()} trees absorb in one year`;

  setTimeout(() => {
    document.getElementById('rElecBar').style.width   = pct(eElec);
    document.getElementById('rVuelosBar').style.width = pct(eVuelos);
    document.getElementById('rVehsBar').style.width   = pct(eVehs);
    document.getElementById('rOficinaBar').style.width = pct(eOfic);
  }, 80);

  const tons = Math.ceil(total);
  let pkg, emoji, priceUSD, priceEUR, priceCOP;
  if      (tons <= 100)  { pkg='Moriche';   emoji='🌿'; priceUSD='USD 2,700';  priceEUR='€2,600';  priceCOP='COP 11.5M'; }
  else if (tons <= 300)  { pkg='Caño';      emoji='🌊'; priceUSD='USD 6,900';  priceEUR='€6,650';  priceCOP='COP 29.5M'; }
  else if (tons <= 600)  { pkg='Sabana';    emoji='🌾'; priceUSD='USD 12,000'; priceEUR='€11,580'; priceCOP='COP 51M'; }
  else if (tons <= 3151) { pkg='Orinoquia'; emoji='🦅'; priceUSD='USD 50,416'; priceEUR='€48,700'; priceCOP='COP 215M'; }
  else { pkg = lang === 'es' ? 'Personalizado' : 'Custom'; emoji='🌍'; priceUSD = lang === 'es' ? 'Consultar' : 'Contact us'; priceEUR='—'; priceCOP='—'; }

  document.getElementById('rPkgEmoji').textContent = emoji;
  document.getElementById('rPkgName').textContent  = pkg;
  document.getElementById('rPkgPrice').textContent = priceUSD;
  document.getElementById('rPkgSub').textContent   = `${priceEUR} · ${priceCOP} · ${tons} tCO₂`;

  document.getElementById('calcPlaceholder').style.display = 'none';
  const result = document.getElementById('calcResult');
  result.classList.remove('hidden');
  result.classList.add('visible');
  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ===== MODALES DE SERVICIOS — BILINGUES ES/EN ===== */
const svcData = {
  es: [
    { label:'Restauración de Ecosistemas', name:'Restauración Ecológica', img:'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=760&h=230&q=80', desc:'Programa completo de restauración ecológica en ecosistemas degradados de la Orinoquia colombiana. Utilizamos 12 especies nativas seleccionadas científicamente para recuperar la cobertura vegetal, el suelo y la biodiversidad.', includes:['Diagnóstico del suelo y estado del ecosistema','Selección de 12+ especies nativas del Orinoco','Siembra directa y transplante de plántulas','Control de erosión y compactación del suelo','Monitoreo de supervivencia y crecimiento','Reportes georeferenciados con coordenadas GPS','Cálculo de CO₂ capturado (metodología IPCC)'], audience:'Propietarios de predios rurales, empresas con obligaciones de compensación ambiental, entidades territoriales y organismos de cooperación internacional como EUROCLIMA+ y GEF/PNUD.', price:'Desde USD 3,200/ha', priceSub:'€3,100 · COP 13.8M por hectárea' },
    { label:'Mercado de Carbono', name:'Bonos de Carbono Gold Standard', img:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=760&h=230&q=80', desc:'Estructuración y comercialización de créditos de carbono en proceso de certificación bajo el estándar Gold Standard. La zona virgen de Caño Juriepe genera 39.4 tCO₂/ha — el máximo potencial de captura certificable en la región.', includes:['Medición de biomasa forestal (metodología IPCC)','Cálculo certificado de toneladas CO₂ equivalente','Proceso de verificación Gold Standard internacional','Gestión del registro y expedición del certificado oficial al completar la verificación','Comercialización en mercados europeos y colombianos','Reporte de impacto ambiental y social anual'], audience:'Empresas con compromisos SBTi, corporaciones internacionales con metas net-zero, fondos de inversión ESG y compradores voluntarios de créditos de carbono.', price:'Desde USD 2,700', priceSub:'Paquetes: 100 · 300 · 600 · 3.151 tCO₂' },
    { label:'Responsabilidad Social Empresarial', name:'Compensación RSE', img:'https://images.unsplash.com/photo-1598335624134-5bceb5de202d?auto=format&fit=crop&w=760&h=230&q=80', desc:'Programa corporativo de adopción de árboles nativos certificados en la Orinoquia colombiana. Cada árbol tiene coordenadas GPS, especie botánica registrada y seguimiento anual — con certificado personalizado para su empresa.', includes:['Adopción de árboles nativos con serial único','Certificado digital personalizado con logo corporativo','Coordenadas GPS del árbol en campo real','Fotografía de siembra y seguimiento anual','Reporte de impacto para memorias de sostenibilidad','Placa de reconocimiento en el área del proyecto'], audience:'Empresas con programas de RSE, multinacionales con metas ambientales corporativas y PYMEs que quieren demostrar compromiso ambiental verificable.', price:'Desde USD 33/árbol', priceSub:'€32 · COP 138,000 por árbol certificado' },
    { label:'Apicultura Nativa', name:'Meliponicultura', img:'https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=760&h=230&q=80', desc:'Establecimiento y manejo de colonias de Melipona eburnea, la abeja nativa sin aguijón de los llanos orientales. 400 colmenas en Caño Juriepe para polinización natural, miel medicinal y conservación de polinizadores.', includes:['Instalación de colmenas en madera nativa','Capacitación técnica en manejo de abejas sin aguijón','Seguimiento trimestral de las colonias','Producción de miel medicinal de alta calidad','Servicios de polinización para cultivos aledaños','Rescate y relocalización de colonias silvestres'], audience:'Fincas rurales, proyectos de restauración ecológica, comunidades rurales e indígenas de Arauca y Casanare, investigadores de biodiversidad.', price:'Desde USD 125/colmena', priceSub:'€120 · COP 517,000 por colmena instalada' },
    { label:'Formación y Sensibilización', name:'Educación Ambiental', img:'https://images.unsplash.com/photo-1565792894736-eeced66760d7?auto=format&fit=crop&w=760&h=230&q=80', desc:'Talleres y programas educativos sobre conservación de ecosistemas, biodiversidad del Orinoco y adaptación al cambio climático, con enfoque práctico y vivencial adaptado al contexto llanero.', includes:['Talleres presenciales de 4 a 8 horas en campo','Material didáctico adaptado al contexto llanero','Recorridos de campo por ecosistemas nativos','Certificados de participación individuales','Módulo de identificación de especies nativas','Programas anuales de seguimiento comunitario'], audience:'Colegios y universidades de Arauca, comunidades rurales, empresas con programas de RSE ambiental y entidades gubernamentales.', price:'Desde USD 400/taller', priceSub:'€390 · COP 1.7M por taller de campo' },
    { label:'Turismo de Naturaleza', name:'Ecoturismo Científico', img:'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=760&h=230&q=80', desc:'Recorridos científicos guiados por los ecosistemas de Caño Juriepe y la Orinoquia colombiana. Observación de fauna silvestre, morichales y avifauna del llano con biólogo especialista.', includes:['Guía especializado — biólogo o ingeniero ambiental','Observación de aves, mamíferos y reptiles del llano','Recorrido por morichales y bosques de galería','Visita al proyecto de meliponicultura','Registro fotográfico del ecosistema','Informe de especies de biodiversidad observadas'], audience:'Investigadores, turistas de naturaleza, grupos universitarios, organizaciones ambientales y cooperantes europeos que visitan el proyecto.', price:'Desde USD 48/persona', priceSub:'€47 · COP 207,000 · grupos desde 4 personas' },
    { label:'Asesoría Técnica Ambiental', name:'Consultoría Ambiental', img:'https://images.unsplash.com/photo-1726098206872-e0d859aa1e34?auto=format&fit=crop&w=760&h=230&q=80', desc:'Asesoría técnica especializada para el cumplimiento de la normatividad ambiental colombiana. EIA y PMA con gestión completa ante CORPORINOQUIA y el Ministerio de Ambiente.', includes:['Estudios de Impacto Ambiental (EIA)','Planes de Manejo Ambiental (PMA)','Gestión ante CORPORINOQUIA y MADS','Inventarios de flora y fauna para permisos','Due diligence ambiental para inversiones','Asesoría en compensaciones obligatorias','Monitoreo de cumplimiento normativo'], audience:'Empresas petroleras, proyectos agropecuarios e industriales, constructoras y entidades del Estado en la Orinoquia.', price:'Desde USD 1,350/mes', priceSub:'€1,300 · COP 5.75M — Flórez + Carvajal COPNIA' },
    { label:'Ciencia de Campo', name:'Investigación y Monitoreo', img:'https://images.unsplash.com/photo-1752110382999-15e510962691?auto=format&fit=crop&w=760&h=230&q=80', desc:'Inventarios científicos de flora y fauna, monitoreo de biodiversidad a largo plazo y análisis de carbono en biomasa con metodología IPCC y bases de datos geo-referenciadas.', includes:['Inventarios florísticos y faunísticos completos','Monitoreo de aves, mamíferos, reptiles y anfibios','Análisis de carbono en biomasa aérea y subterránea','Muestreo y análisis físico-químico de suelos','Reportes científicos con mapas SIG','Bases de datos de biodiversidad geo-referenciadas'], audience:'Universidades, institutos de investigación, organismos GEF/PNUD/EUROCLIMA+, entidades ambientales y certificadoras Gold Standard.', price:'Desde USD 2,700/año', priceSub:'€2,600 · COP 11.5M por programa anual' }
  ],
  en: [
    { label:'Ecosystem Restoration', name:'Ecological Restoration', img:'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=760&h=230&q=80', desc:'Complete ecological restoration program in degraded ecosystems of the Colombian Orinoquía. We use 12 scientifically selected native species to recover plant cover, soil, and biodiversity.', includes:['Soil and ecosystem status diagnosis','Selection of 12+ native Orinoco species','Direct seeding and seedling transplanting','Erosion and soil compaction control','Survival and growth monitoring','GPS-georeferenced reports','CO₂ sequestration calculation (IPCC methodology)'], audience:'Rural landowners, companies with environmental compensation obligations, territorial entities, and international cooperation bodies such as EUROCLIMA+ and GEF/UNDP.', price:'From USD 3,200/ha', priceSub:'€3,100 · COP 13.8M per hectare' },
    { label:'Carbon Market', name:'Gold Standard Carbon Bonds', img:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=760&h=230&q=80', desc:'Structuring and commercialization of carbon credits currently undergoing certification under the Gold Standard. The virgin zone of Caño Juriepe generates 39.4 tCO₂/ha — the maximum certifiable sequestration potential in the region.', includes:['Forest biomass measurement (IPCC methodology)','Certified calculation of CO₂ equivalent tonnes','International Gold Standard verification process','Management of registration and issuance of the official certificate once verification is complete','Commercialization in European and Colombian markets','Annual environmental and social impact report'], audience:'Companies with SBTi commitments, international corporations with net-zero goals, ESG investment funds, and voluntary carbon credit buyers.', price:'From USD 2,700', priceSub:'Packages: 100 · 300 · 600 · 3,151 tCO₂' },
    { label:'Corporate Social Responsibility', name:'CSR Compensation', img:'https://images.unsplash.com/photo-1598335624134-5bceb5de202d?auto=format&fit=crop&w=760&h=230&q=80', desc:'Corporate program for adopting certified native trees in the Colombian Orinoquía. Each tree has GPS coordinates, registered botanical species, and annual monitoring — with a personalized certificate for your company.', includes:['Native tree adoption with unique serial','Personalized digital certificate with corporate logo','GPS coordinates of the tree in the actual field','Planting photo and annual follow-up','Impact report for sustainability reports','Recognition plaque in the project area'], audience:'Companies with CSR programs, multinationals with corporate environmental goals, and SMEs that want to demonstrate verifiable environmental commitment.', price:'From USD 33/tree', priceSub:'€32 · COP 138,000 per certified tree' },
    { label:'Native Beekeeping', name:'Meliponiculture', img:'https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=760&h=230&q=80', desc:'Establishment and management of Melipona eburnea colonies, the stingless native bee of the eastern plains. 400 hives at Caño Juriepe for natural pollination, medicinal honey, and pollinator conservation.', includes:['Hive installation in native wood','Technical training in stingless bee management','Quarterly colony monitoring','High-quality medicinal honey production','Pollination services for surrounding crops','Rescue and relocation of wild colonies'], audience:'Rural farms, ecological restoration projects, rural and indigenous communities of Arauca and Casanare, and biodiversity researchers.', price:'From USD 125/hive', priceSub:'€120 · COP 517,000 per installed hive' },
    { label:'Training & Awareness', name:'Environmental Education', img:'https://images.unsplash.com/photo-1565792894736-eeced66760d7?auto=format&fit=crop&w=760&h=230&q=80', desc:'Educational workshops and programs on ecosystem conservation, Orinoco biodiversity, and climate change adaptation, with a practical and experiential approach adapted to the plains context.', includes:['4 to 8-hour in-field workshops','Teaching materials adapted to the plains context','Field tours through native ecosystems','Individual participation certificates','Native species identification module','Annual community follow-up programs'], audience:'Schools and universities in Arauca, rural communities, companies with environmental CSR programs, and government entities.', price:'From USD 400/workshop', priceSub:'€390 · COP 1.7M per field workshop' },
    { label:'Nature Tourism', name:'Scientific Ecotourism', img:'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=760&h=230&q=80', desc:'Scientific guided tours through the ecosystems of Caño Juriepe and the Colombian Orinoquía. Wildlife observation, morichales and plains birdlife with a specialist biologist.', includes:['Specialist guide — biologist or environmental engineer','Observation of birds, mammals, and reptiles of the plains','Tour through morichales and gallery forests','Visit to the meliponiculture project','Ecosystem photographic record','Biodiversity species observation report'], audience:'Researchers, nature tourists, university groups, environmental organizations, and European cooperants visiting the project.', price:'From USD 48/person', priceSub:'€47 · COP 207,000 · groups from 4 people' },
    { label:'Technical Environmental Advisory', name:'Environmental Consulting', img:'https://images.unsplash.com/photo-1726098206872-e0d859aa1e34?auto=format&fit=crop&w=760&h=230&q=80', desc:'Specialized technical advisory for compliance with Colombian environmental regulations. EIA and EMP with complete management before CORPORINOQUIA and the Ministry of Environment.', includes:['Environmental Impact Studies (EIA)','Environmental Management Plans (EMP)','Management before CORPORINOQUIA and MADS','Flora and fauna inventories for permits','Environmental due diligence for investments','Advisory on mandatory compensations','Regulatory compliance monitoring'], audience:'Oil companies, agricultural and industrial projects, construction companies, and State entities in the Orinoquía.', price:'From USD 1,350/month', priceSub:'€1,300 · COP 5.75M — Flórez + Carvajal COPNIA' },
    { label:'Field Science', name:'Research & Monitoring', img:'https://images.unsplash.com/photo-1752110382999-15e510962691?auto=format&fit=crop&w=760&h=230&q=80', desc:'Scientific flora and fauna inventories, long-term biodiversity monitoring, and biomass carbon analysis using IPCC methodology and geo-referenced databases.', includes:['Complete floristic and faunal inventories','Bird, mammal, reptile, and amphibian monitoring','Aerial and underground biomass carbon analysis','Soil physical-chemical sampling and analysis','Scientific reports with GIS maps','Geo-referenced biodiversity databases'], audience:'Universities, research institutes, GEF/UNDP/EUROCLIMA+ bodies, environmental entities, and Gold Standard certifiers.', price:'From USD 2,700/year', priceSub:'€2,600 · COP 11.5M per annual program' }
  ]
};

const modalOverlay  = document.getElementById('svcModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalCtaBtn   = document.getElementById('modalCtaBtn');
let activeModalIdx  = -1;

function refreshModalContent() {
  const d = svcData[lang][activeModalIdx];
  document.getElementById('modalImg').alt               = d.name;
  document.getElementById('modalHeroLabel').textContent = d.label;
  document.getElementById('modalTitle').textContent     = d.name;
  document.getElementById('modalDesc').textContent      = d.desc;
  document.getElementById('modalIncludes').innerHTML    = d.includes.map(i => `<li>${i}</li>`).join('');
  document.getElementById('modalAudience').textContent  = d.audience;
  document.getElementById('modalPriceVal').textContent  = d.price;
  document.getElementById('modalPriceSub').textContent  = d.priceSub;
}

function openModal(idx) {
  activeModalIdx = idx;
  const d = svcData[lang][idx];
  document.getElementById('modalImg').src               = d.img;
  document.getElementById('modalImg').alt               = d.name;
  document.getElementById('modalHeroLabel').textContent = d.label;
  document.getElementById('modalTitle').textContent     = d.name;
  document.getElementById('modalDesc').textContent      = d.desc;
  document.getElementById('modalIncludes').innerHTML    = d.includes.map(i => `<li>${i}</li>`).join('');
  document.getElementById('modalAudience').textContent  = d.audience;
  document.getElementById('modalPriceVal').textContent  = d.price;
  document.getElementById('modalPriceSub').textContent  = d.priceSub;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  activeModalIdx = -1;
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.service-card').forEach((card, idx) => {
  card.addEventListener('click', e => { if (e.target.closest('a[href]')) return; openModal(idx); });
});
modalCloseBtn.addEventListener('click', closeModal);
modalCtaBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ===== FAQ ACCORDION ===== */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ===== BANNER DE COOKIES GDPR ===== */
(function () {
  const banner = document.getElementById('cookieBanner');
  if (!banner) return;
  const KEY = 'fg_cookie_v1';
  if (!localStorage.getItem(KEY)) {
    setTimeout(() => banner.classList.add('show'), 1800);
  }
  document.getElementById('cookieAccept').addEventListener('click', () => {
    localStorage.setItem(KEY, 'all');
    banner.classList.remove('show');
  });
  document.getElementById('cookieEssential').addEventListener('click', () => {
    localStorage.setItem(KEY, 'essential');
    banner.classList.remove('show');
  });
})();
