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
const langCycle = { es: 'en', en: 'it', it: 'es' };
const langLabel = { es: 'EN', en: 'IT', it: 'ES' };

const t = {
  es: {
    'nav-about':'Quiénes somos','nav-services':'Servicios','nav-species':'Especies','nav-project':'Proyecto',
    'nav-calc':'Calculadora','nav-carbon':'Bonos CO₂','nav-team':'Equipo','nav-contact':'Contacto','nav-cta':'Contáctanos',
    'hero-badge':'🌿 Restauración Ecológica — Orinoquia Colombia',
    'hero-title-1':'Restauramos','hero-title-2':'bosques','hero-title-3':'generamos futuro sostenible',
    'hero-subtitle':'Fundación sin ánimo de lucro líder en restauración ecológica, bonos de carbono certificados y conservación de la biodiversidad en la Orinoquia y Amazonia colombiana.',
    'hero-btn1':'🌱 Ver bonos de carbono','hero-btn2':'Nuestro proyecto',
    'stat1-num':'80.000','stat1-label':'Árboles nativos','stat2-num':'3.151','stat2-label':'tCO₂ certificables',
    'stat3-num':'80 ha','stat3-label':'En restauración','stat4-num':'2018','stat4-label':'Fundada',
    'bstat1-num':'80.000','bstat1-label':'Árboles','bstat2-num':'3.151 tCO₂','bstat2-label':'Certificables','bstat3-num':'€548K','bstat3-label':'Financiación UE',
    'about-label':'Quiénes somos','about-title-1':'Lideramos la restauración de la','about-title-2':'Orinoquia',
    'about-desc':'Desde 2018, Fundación Forestar trabaja en la restauración ecológica de ecosistemas degradados en Colombia, combinando ciencia, tecnología y comunidades locales para crear impacto ambiental duradero.',
    'feat1-title':'Certificación Gold Standard','feat1-desc':'Bonos de carbono verificados con los más altos estándares internacionales',
    'feat2-title':'Cooperación Internacional','feat2-desc':'Proyectos financiados por EUROCLIMA+, GEF/PNUD y Unión Europea',
    'feat3-title':'Biodiversidad y Comunidades','feat3-desc':'400 colmenas de meliponicultura con abejas nativas sin aguijón',
    'feat4-title':'Ciencia e Innovación','feat4-desc':'Monitoreo con metodología IPCC: 39.4 tCO₂/ha en zona virgen',
    'partners-lbl':'Respaldados por',
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
    'map-title':'📍 Ubicación del proyecto',
    'calc-label':'Calculadora Ambiental','calc-title-1':'¿Cuánto CO₂','calc-title-2':'emite tu empresa?',
    'calc-desc':'Calcula tu huella de carbono en menos de un minuto y descubre cuántos bonos Gold Standard necesitas para ser carbono neutro.',
    'calc-emp-label':'Empleados en la empresa','calc-elec-label':'Electricidad mensual (kWh)',
    'calc-estimate':'Estimar','calc-elec-hint':'Si no tienes el dato, haz clic en "Estimar" para usar un promedio por empleado.',
    'calc-int-flights':'Vuelos internacionales/año','calc-nac-flights':'Vuelos nacionales/año','calc-vehicles':'Vehículos empresa',
    'calc-cta-btn':'🌱 Calcular mi huella de carbono',
    'calc-result-lbl':'Tu huella de carbono anual','calc-breakdown':'Desglose de emisiones',
    'calc-b-elec':'Electricidad','calc-b-vuelos':'Vuelos','calc-b-vehs':'Vehículos','calc-b-oficina':'Oficina',
    'calc-rec-title':'Paquete recomendado para compensar','calc-rec-btn':'🌿 Solicitar este paquete',
    'calc-placeholder':'Completa los datos de tu empresa y haz clic en "Calcular" para ver tu huella de carbono y el paquete de bonos recomendado.',
    'carbon-label':'Mercado de Carbono','carbon-title-1':'Bonos de Carbono','carbon-title-2':'Gold Standard',
    'carbon-desc':'Compensaciones verificadas internacionalmente con los más altos estándares de calidad. Zona virgen con 39.4 tCO₂/ha — máximo potencial de captura.',
    'carbon-badge-sub':'Certificación internacional',
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
    'faq-a3':'Una vez confirmado el pago, emitimos el certificado digital en un plazo de 5 días hábiles. Incluye el nombre de tu empresa, número serial Gold Standard, coordenadas GPS del área certificada y fecha de emisión.',
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
    'hero-subtitle':'Non-profit foundation leading ecological restoration, certified carbon bonds, and biodiversity conservation in the Colombian Orinoquía and Amazonia.',
    'hero-btn1':'🌱 View carbon bonds','hero-btn2':'Our project',
    'stat1-num':'80,000','stat1-label':'Native trees','stat2-num':'3,151','stat2-label':'tCO₂ certifiable',
    'stat3-num':'80 ha','stat3-label':'Under restoration','stat4-num':'2018','stat4-label':'Founded',
    'bstat1-num':'80,000','bstat1-label':'Trees','bstat2-num':'3,151 tCO₂','bstat2-label':'Certifiable','bstat3-num':'€548K','bstat3-label':'EU Funding',
    'about-label':'About us','about-title-1':'We lead the restoration of the','about-title-2':'Orinoquía',
    'about-desc':'Since 2018, Fundación Forestar works in the ecological restoration of degraded ecosystems in Colombia, combining science, technology, and local communities to create lasting environmental impact.',
    'feat1-title':'Gold Standard Certification','feat1-desc':'Carbon bonds verified with the highest international standards',
    'feat2-title':'International Cooperation','feat2-desc':'Projects funded by EUROCLIMA+, GEF/UNDP, and the European Union',
    'feat3-title':'Biodiversity & Communities','feat3-desc':'400 stingless native bee hives (meliponiculture)',
    'feat4-title':'Science & Innovation','feat4-desc':'IPCC methodology monitoring: 39.4 tCO₂/ha in virgin zone',
    'partners-lbl':'Supported by',
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
    'map-title':'📍 Project location',
    'calc-label':'Environmental Calculator','calc-title-1':'How much CO₂','calc-title-2':'does your company emit?',
    'calc-desc':'Calculate your carbon footprint in under a minute and find out how many Gold Standard bonds you need to become carbon neutral.',
    'calc-emp-label':'Company employees','calc-elec-label':'Monthly electricity (kWh)',
    'calc-estimate':'Estimate','calc-elec-hint':'If you don\'t have the figure, click "Estimate" to use an average per employee.',
    'calc-int-flights':'International flights/year','calc-nac-flights':'Domestic flights/year','calc-vehicles':'Company vehicles',
    'calc-cta-btn':'🌱 Calculate my carbon footprint',
    'calc-result-lbl':'Your annual carbon footprint','calc-breakdown':'Emissions breakdown',
    'calc-b-elec':'Electricity','calc-b-vuelos':'Flights','calc-b-vehs':'Vehicles','calc-b-oficina':'Office',
    'calc-rec-title':'Recommended package to offset','calc-rec-btn':'🌿 Request this package',
    'calc-placeholder':'Fill in your company data and click "Calculate" to see your carbon footprint and the recommended bonds package.',
    'carbon-label':'Carbon Market','carbon-title-1':'Carbon Bonds','carbon-title-2':'Gold Standard',
    'carbon-desc':'Internationally verified offsets with the highest quality standards. Virgin zone with 39.4 tCO₂/ha — maximum sequestration potential.',
    'carbon-badge-sub':'International certification',
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
    'faq-a3':'Once payment is confirmed, we issue the digital certificate within 5 business days. It includes your company name, Gold Standard serial number, GPS coordinates of the certified area, and date of issue.',
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
    'footer-copy':'© 2026 Fundación Forestar — All rights reserved',
    'cookie-title':'🍪 This site uses cookies',
    'cookie-text':'We use essential cookies for site functionality. We respect your privacy in accordance with GDPR.',
    'cookie-ess':'Essential only','cookie-acc':'Accept all',
    'modal-includes-title':'What does it include?','modal-audience-title':'Aimed at',
    'modal-invest':'Investment','modal-request':'🌿 Request information'
  },
  it: {
    'nav-about':'Chi siamo','nav-services':'Servizi','nav-species':'Specie','nav-project':'Progetto',
    'nav-calc':'Calcolatore','nav-carbon':'Crediti CO₂','nav-team':'Team','nav-contact':'Contatti','nav-cta':'Contattaci',
    'hero-badge':'🌿 Ripristino Ecologico — Orinochia Colombia',
    'hero-title-1':'Ripristiniamo','hero-title-2':'foreste','hero-title-3':'costruiamo un futuro sostenibile',
    'hero-subtitle':'Fondazione no-profit leader nel ripristino ecologico, crediti di carbonio certificati e conservazione della biodiversità nell\'Orinochia e Amazzonia colombiana.',
    'hero-btn1':'🌱 Vedi crediti di carbonio','hero-btn2':'Il nostro progetto',
    'stat1-num':'80.000','stat1-label':'Alberi nativi','stat2-num':'3.151','stat2-label':'tCO₂ certificabili',
    'stat3-num':'80 ha','stat3-label':'In ripristino','stat4-num':'2018','stat4-label':'Fondata',
    'bstat1-num':'80.000','bstat1-label':'Alberi','bstat2-num':'3.151 tCO₂','bstat2-label':'Certificabili','bstat3-num':'€548K','bstat3-label':'Finanziamento UE',
    'about-label':'Chi siamo','about-title-1':'Guidiamo il ripristino dell\'','about-title-2':'Orinochia',
    'about-desc':'Dal 2018, Fundación Forestar lavora nel ripristino ecologico degli ecosistemi degradati in Colombia, combinando scienza, tecnologia e comunità locali per creare un impatto ambientale duraturo.',
    'feat1-title':'Certificazione Gold Standard','feat1-desc':'Crediti di carbonio verificati con i più alti standard internazionali',
    'feat2-title':'Cooperazione Internazionale','feat2-desc':'Progetti finanziati da EUROCLIMA+, GEF/UNDP e Unione Europea',
    'feat3-title':'Biodiversità e Comunità','feat3-desc':'400 arnie di meliponicultura con api native senza pungiglione',
    'feat4-title':'Scienza e Innovazione','feat4-desc':'Monitoraggio con metodologia IPCC: 39,4 tCO₂/ha in zona vergine',
    'partners-lbl':'Con il supporto di',
    'services-label':'Portafoglio Servizi','services-title-1':'Soluzioni ambientali','services-title-2':'integrali',
    'services-desc':'Offriamo servizi specializzati in ripristino ecologico, crediti di carbonio e conservazione della biodiversità per aziende, governi e organismi internazionali.',
    'svc1-name':'Ripristino Ecologico','svc1-desc':'Piantagione di specie native, controllo dell\'erosione e monitoraggio degli ecosistemi degradati.',
    'svc2-name':'Crediti di Carbonio','svc2-desc':'Certificazione e vendita di crediti di carbonio verificati Gold Standard per la compensazione internazionale.',
    'svc3-name':'Compensazione RSI','svc3-desc':'Programmi di responsabilità sociale d\'impresa con adozione di alberi nativi certificati.',
    'svc4-name':'Meliponicultura','svc4-desc':'Istituzione e gestione di arnie di api native senza pungiglione (Melipona eburnea).',
    'svc5-name':'Educazione Ambientale','svc5-desc':'Workshop e programmi formativi su conservazione, biodiversità e cambiamento climatico.',
    'svc6-name':'Ecoturismo Scientifico','svc6-desc':'Tour guidati negli ecosistemi ripristinati dell\'Orinochia con approccio scientifico.',
    'svc7-name':'Consulenza Ambientale','svc7-desc':'Consulenza specializzata in VIA, PGA, licenze ambientali e conformità normativa.',
    'svc8-name':'Ricerca e Monitoraggio','svc8-desc':'Inventari di flora e fauna, monitoraggio della biodiversità e analisi del carbonio nella biomassa.',
    'especies-label':'Flora Nativa','especies-title-1':'Specie che','especies-title-2':'ripristiniamo',
    'especies-desc':'Lavoriamo con 12 specie native dell\'Orinoco, selezionate per il loro valore ecologico, capacità di sequestro del carbonio e resistenza nelle savane allagate di Arauca.',
    'project-label':'Progetto Principale','project-title-1':'Caño Juriepe —','project-title-2':'Vereda La Esperanza',
    'project-desc':'Ripristino ecologico su 80 ettari vergini dell\'Orinochia colombiana, con finanziamento EUROCLIMA+ dell\'Unione Europea. Un progetto modello per la certificazione Gold Standard.',
    'pstat1':'Alberi nativi','pstat2':'Arnie Melipona','pstat3':'tCO₂ netto certificabile','pstat4':'Budget totale',
    'map-title':'📍 Posizione del progetto',
    'calc-label':'Calcolatore Ambientale','calc-title-1':'Quanta CO₂','calc-title-2':'emette la tua azienda?',
    'calc-desc':'Calcola la tua impronta di carbonio in meno di un minuto e scopri quanti crediti Gold Standard ti servono per diventare carbon neutral.',
    'calc-emp-label':'Dipendenti dell\'azienda','calc-elec-label':'Elettricità mensile (kWh)',
    'calc-estimate':'Stima','calc-elec-hint':'Se non hai il dato, clicca su "Stima" per usare una media per dipendente.',
    'calc-int-flights':'Voli internazionali/anno','calc-nac-flights':'Voli nazionali/anno','calc-vehicles':'Veicoli aziendali',
    'calc-cta-btn':'🌱 Calcola la mia impronta di carbonio',
    'calc-result-lbl':'La tua impronta di carbonio annuale','calc-breakdown':'Ripartizione delle emissioni',
    'calc-b-elec':'Elettricità','calc-b-vuelos':'Voli','calc-b-vehs':'Veicoli','calc-b-oficina':'Ufficio',
    'calc-rec-title':'Pacchetto consigliato per compensare','calc-rec-btn':'🌿 Richiedi questo pacchetto',
    'calc-placeholder':'Inserisci i dati della tua azienda e clicca su "Calcola" per vedere la tua impronta di carbonio e il pacchetto crediti consigliato.',
    'carbon-label':'Mercato del Carbonio','carbon-title-1':'Crediti di Carbonio','carbon-title-2':'Gold Standard',
    'carbon-desc':'Compensazioni verificate internazionalmente con i più alti standard di qualità. Zona vergine con 39,4 tCO₂/ha — massimo potenziale di sequestro.',
    'carbon-badge-sub':'Certificazione internazionale',
    'pkg1-name':'Moriche','pkg1-tons':'100 tonnellate CO₂','pkg1-per':'USD 27 / tCO₂',
    'pkg2-name':'Caño','pkg2-tons':'300 tonnellate CO₂','pkg2-per':'USD 23 / tCO₂',
    'pkg3-name':'Sabana','pkg3-tons':'600 tonnellate CO₂','pkg3-per':'USD 20 / tCO₂',
    'pkg4-name':'Orinoquia','pkg4-tons':'3.151 tonnellate CO₂','pkg4-per':'USD 16 / tCO₂',
    'pkg-cta':'Richiedi','pkg-popular':'Popolare',
    'faq-label':'Domande Frequenti','faq-title-1':'Tutto sui','faq-title-2':'crediti di carbonio',
    'faq-q1':'Cos\'è il Gold Standard e perché è importante?',
    'faq-a1':'Il Gold Standard è lo standard di certificazione del carbonio più rigoroso al mondo, creato dal WWF e sostenuto da oltre 100 ONG internazionali. Garantisce che ogni tonnellata di CO₂ acquistata sia verificata da terzi indipendenti e generi benefici reali per le comunità locali e la biodiversità.',
    'faq-q2':'Come viene verificato il sequestro di CO₂?',
    'faq-a2':'Utilizziamo la metodologia IPCC per misurare la biomassa forestale sul campo. Un revisore indipendente accreditato dal Gold Standard verifica i calcoli prima di emettere i certificati. Nell\'Orinochia, la nostra zona vergine di 39,4 tCO₂/ha è tra le più alte della Colombia.',
    'faq-q3':'Quando ricevo il mio certificato?',
    'faq-a3':'Una volta confermato il pagamento, emettiamo il certificato digitale entro 5 giorni lavorativi. Include il nome della tua azienda, il numero seriale Gold Standard, le coordinate GPS dell\'area certificata e la data di emissione.',
    'faq-q4':'Posso visitare il progetto sul campo?',
    'faq-a4':'Sì. Offriamo visite guidate al progetto Caño Juriepe a Cravo Norte, Arauca. Disponiamo di biologi specializzati che accompagnano il percorso. Contattaci per coordinare le date e la logistica del trasferimento.',
    'faq-q5':'Cosa differenzia Forestar da altri progetti?',
    'faq-a5':'Siamo l\'unico progetto di ripristino attivo in zona vergine dell\'Orinochia colombiana con finanziamento dell\'Unione Europea (EUROCLIMA+) e supporto GEF/UNDP. Lavoriamo con 12 specie native dell\'Orinoco, 400 arnie di Melipona eburnea e un team tecnico certificato.',
    'faq-q6':'I crediti sono validi per la compensazione obbligatoria?',
    'faq-a6':'I crediti Gold Standard sono validi per impegni volontari SBTi, report ESG e obiettivi net-zero aziendali. Per le compensazioni obbligatorie presso le autorità colombiane, contattaci — possiamo orientarti sui meccanismi applicabili al tuo caso.',
    'team-label':'Il Nostro Team','team-title-1':'Esperti in','team-title-2':'ecosistemi',
    'team-desc':'Un team multidisciplinare di professionisti impegnati nel ripristino ecologico e nella sostenibilità ambientale.',
    'tm1-role':'Presidente / Rappresentante Legale','tm2-role':'Dir. Relazioni Internazionali',
    'tm2-exp':'Gestione di progetti internazionali, crediti di carbonio e finanziamenti europei',
    'tm3-role':'Vicepresidente e Rapp. Legale Supplente','tm4-role':'Coordinatore di Progetto',
    'tm5-role':'Biologo Specialista','tm6-role':'Ingegnere Ambientale',
    'contact-label':'Contatti','contact-title-1':'Parliamo del','contact-title-2':'futuro',
    'contact-desc':'Che tu voglia compensare la tua impronta di carbonio, investire in crediti certificati o collaborare a progetti di ripristino, siamo pronti a creare una proposta su misura per te.',
    'ci1-title':'Email principale','ci2-title':'Relazioni Internazionali',
    'ci3-title':'Colombia','ci4-title':'Social media','ci5-title':'Dati legali',
    'ci5-founded':'Fondata: 12 ottobre 2018',
    'form-title':'Inviaci un messaggio','form-name':'Nome e cognome','form-org':'Azienda / Organizzazione',
    'form-email':'Indirizzo email','form-phone':'Telefono (opzionale)',
    'form-interest':'Area di interesse','form-message':'Messaggio','form-submit':'🌿 Invia messaggio',
    'int-select':'Seleziona...','int-carbon':'Crediti di carbonio','int-restoration':'Ripristino ecologico',
    'int-rse':'Compensazione RSI','int-bees':'Meliponicultura','int-consulting':'Consulenza ambientale','int-other':'Altro',
    'footer-desc':'Fondazione no-profit dedicata al ripristino ecologico, ai crediti di carbonio e alla conservazione della biodiversità nell\'Orinochia e Amazzonia colombiana.',
    'footer-services':'Servizi','footer-contact':'Contatti',
    'footer-copy':'© 2026 Fundación Forestar — Tutti i diritti riservati',
    'cookie-title':'🍪 Questo sito usa cookie',
    'cookie-text':'Utilizziamo cookie essenziali per il funzionamento del sito. Rispettiamo la tua privacy in conformità con il GDPR.',
    'cookie-ess':'Solo essenziali','cookie-acc':'Accetta tutti',
    'modal-includes-title':'Cosa include?','modal-audience-title':'Rivolto a',
    'modal-invest':'Investimento','modal-request':'🌿 Richiedi informazioni'
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
  langBtn.title = { es:'Cambiar a inglés', en:'Switch to Italian', it:'Passa allo spagnolo' }[l];
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
  btn.textContent = { es:'✅ ¡Mensaje enviado!', en:'✅ Message sent!', it:'✅ Messaggio inviato!' }[lang];
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
  const empleados = parseInt(cEmpSlider.value) || 0;
  const elecMes   = parseFloat(document.getElementById('cElec').value) || (empleados * 180);
  const vInt  = parseInt(document.getElementById('cVInt').textContent)  || 0;
  const vNac  = parseInt(document.getElementById('cVNac').textContent)  || 0;
  const vehs  = parseInt(document.getElementById('cVehs').textContent)  || 0;

  const eElec   = (elecMes * 12 * 0.136) / 1000;
  const eVuelos = vInt * 1.8 + vNac * 0.25;
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
  document.getElementById('rEquiv').textContent = {
    es: `≈ lo que absorben ${arboles.toLocaleString()} árboles en un año`,
    en: `≈ what ${arboles.toLocaleString()} trees absorb in one year`,
    it: `≈ ciò che assorbono ${arboles.toLocaleString()} alberi in un anno`
  }[lang];

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
  else { pkg={es:'Personalizado',en:'Custom',it:'Personalizzato'}[lang]; emoji='🌍'; priceUSD={es:'Consultar',en:'Contact us',it:'Consultare'}[lang]; priceEUR='—'; priceCOP='—'; }

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

/* ===== MODALES DE SERVICIOS — TRILINGUES ===== */
const svcData = {
  es: [
    { label:'Restauración de Ecosistemas', name:'Restauración Ecológica', img:'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=760&h=230&q=80', desc:'Programa completo de restauración ecológica en ecosistemas degradados de la Orinoquia colombiana. Utilizamos 12 especies nativas seleccionadas científicamente para recuperar la cobertura vegetal, el suelo y la biodiversidad.', includes:['Diagnóstico del suelo y estado del ecosistema','Selección de 12+ especies nativas del Orinoco','Siembra directa y transplante de plántulas','Control de erosión y compactación del suelo','Monitoreo de supervivencia y crecimiento','Reportes georeferenciados con coordenadas GPS','Cálculo de CO₂ capturado (metodología IPCC)'], audience:'Propietarios de predios rurales, empresas con obligaciones de compensación ambiental, entidades territoriales y organismos de cooperación internacional como EUROCLIMA+ y GEF/PNUD.', price:'Desde USD 3,200/ha', priceSub:'€3,100 · COP 13.8M por hectárea' },
    { label:'Mercado de Carbono', name:'Bonos de Carbono Gold Standard', img:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=760&h=230&q=80', desc:'Certificación y comercialización de créditos de carbono verificados bajo el estándar Gold Standard. La zona virgen de Caño Juriepe genera 39.4 tCO₂/ha — el máximo potencial de captura certificable en la región.', includes:['Medición de biomasa forestal (metodología IPCC)','Cálculo certificado de toneladas CO₂ equivalente','Proceso de verificación Gold Standard internacional','Emisión de certificados digitales con serial único','Comercialización en mercados europeos y colombianos','Reporte de impacto ambiental y social anual'], audience:'Empresas con compromisos SBTi, corporaciones internacionales con metas net-zero, fondos de inversión ESG y compradores voluntarios de créditos de carbono.', price:'Desde USD 2,700', priceSub:'Paquetes: 100 · 300 · 600 · 3.151 tCO₂' },
    { label:'Responsabilidad Social Empresarial', name:'Compensación RSE', img:'https://images.unsplash.com/photo-1598335624134-5bceb5de202d?auto=format&fit=crop&w=760&h=230&q=80', desc:'Programa corporativo de adopción de árboles nativos certificados en la Orinoquia colombiana. Cada árbol tiene coordenadas GPS, especie botánica registrada y seguimiento anual — con certificado personalizado para su empresa.', includes:['Adopción de árboles nativos con serial único','Certificado digital personalizado con logo corporativo','Coordenadas GPS del árbol en campo real','Fotografía de siembra y seguimiento anual','Reporte de impacto para memorias de sostenibilidad','Placa de reconocimiento en el área del proyecto'], audience:'Empresas con programas de RSE, multinacionales con metas ambientales corporativas y PYMEs que quieren demostrar compromiso ambiental verificable.', price:'Desde USD 33/árbol', priceSub:'€32 · COP 138,000 por árbol certificado' },
    { label:'Apicultura Nativa', name:'Meliponicultura', img:'https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=760&h=230&q=80', desc:'Establecimiento y manejo de colonias de Melipona eburnea, la abeja nativa sin aguijón de los llanos orientales. 400 colmenas en Caño Juriepe para polinización natural, miel medicinal y conservación de polinizadores.', includes:['Instalación de colmenas en madera nativa','Capacitación técnica en manejo de abejas sin aguijón','Seguimiento trimestral de las colonias','Producción de miel medicinal de alta calidad','Servicios de polinización para cultivos aledaños','Rescate y relocalización de colonias silvestres'], audience:'Fincas rurales, proyectos de restauración ecológica, comunidades rurales e indígenas de Arauca y Casanare, investigadores de biodiversidad.', price:'Desde USD 125/colmena', priceSub:'€120 · COP 517,000 por colmena instalada' },
    { label:'Formación y Sensibilización', name:'Educación Ambiental', img:'https://images.unsplash.com/photo-1565792894736-eeced66760d7?auto=format&fit=crop&w=760&h=230&q=80', desc:'Talleres y programas educativos sobre conservación de ecosistemas, biodiversidad del Orinoco y adaptación al cambio climático, con enfoque práctico y vivencial adaptado al contexto llanero.', includes:['Talleres presenciales de 4 a 8 horas en campo','Material didáctico adaptado al contexto llanero','Recorridos de campo por ecosistemas nativos','Certificados de participación individuales','Módulo de identificación de especies nativas','Programas anuales de seguimiento comunitario'], audience:'Colegios y universidades de Arauca, comunidades rurales, empresas con programas de RSE ambiental y entidades gubernamentales.', price:'Desde USD 400/taller', priceSub:'€390 · COP 1.7M por taller de campo' },
    { label:'Turismo de Naturaleza', name:'Ecoturismo Científico', img:'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=760&h=230&q=80', desc:'Recorridos científicos guiados por los ecosistemas de Caño Juriepe y la Orinoquia colombiana. Observación de fauna silvestre, morichales y avifauna del llano con biólogo especialista.', includes:['Guía especializado — biólogo o ingeniero ambiental','Observación de aves, mamíferos y reptiles del llano','Recorrido por morichales y bosques de galería','Visita al proyecto de meliponicultura','Registro fotográfico del ecosistema','Informe de especies de biodiversidad observadas'], audience:'Investigadores, turistas de naturaleza, grupos universitarios, organizaciones ambientales y cooperantes europeos que visitan el proyecto.', price:'Desde USD 48/persona', priceSub:'€47 · COP 207,000 · grupos desde 4 personas' },
    { label:'Asesoría Técnica Ambiental', name:'Consultoría Ambiental', img:'https://images.unsplash.com/photo-1726098206872-e0d859aa1e34?auto=format&fit=crop&w=760&h=230&q=80', desc:'Asesoría técnica especializada para el cumplimiento de la normatividad ambiental colombiana. EIA y PMA con gestión completa ante CORPORINOQUIA y el Ministerio de Ambiente.', includes:['Estudios de Impacto Ambiental (EIA)','Planes de Manejo Ambiental (PMA)','Gestión ante CORPORINOQUIA y MADS','Inventarios de flora y fauna para permisos','Due diligence ambiental para inversiones','Asesoría en compensaciones obligatorias','Monitoreo de cumplimiento normativo'], audience:'Empresas petroleras, proyectos agropecuarios e industriales, constructoras y entidades del Estado en la Orinoquia.', price:'Desde USD 1,350/mes', priceSub:'€1,300 · COP 5.75M — Flórez + Carvajal COPNIA' },
    { label:'Ciencia de Campo', name:'Investigación y Monitoreo', img:'https://images.unsplash.com/photo-1752110382999-15e510962691?auto=format&fit=crop&w=760&h=230&q=80', desc:'Inventarios científicos de flora y fauna, monitoreo de biodiversidad a largo plazo y análisis de carbono en biomasa con metodología IPCC y bases de datos geo-referenciadas.', includes:['Inventarios florísticos y faunísticos completos','Monitoreo de aves, mamíferos, reptiles y anfibios','Análisis de carbono en biomasa aérea y subterránea','Muestreo y análisis físico-químico de suelos','Reportes científicos con mapas SIG','Bases de datos de biodiversidad geo-referenciadas'], audience:'Universidades, institutos de investigación, organismos GEF/PNUD/EUROCLIMA+, entidades ambientales y certificadoras Gold Standard.', price:'Desde USD 2,700/año', priceSub:'€2,600 · COP 11.5M por programa anual' }
  ],
  en: [
    { label:'Ecosystem Restoration', name:'Ecological Restoration', img:'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=760&h=230&q=80', desc:'Complete ecological restoration program in degraded ecosystems of the Colombian Orinoquía. We use 12 scientifically selected native species to recover plant cover, soil, and biodiversity.', includes:['Soil and ecosystem status diagnosis','Selection of 12+ native Orinoco species','Direct seeding and seedling transplanting','Erosion and soil compaction control','Survival and growth monitoring','GPS-georeferenced reports','CO₂ sequestration calculation (IPCC methodology)'], audience:'Rural landowners, companies with environmental compensation obligations, territorial entities, and international cooperation bodies such as EUROCLIMA+ and GEF/UNDP.', price:'From USD 3,200/ha', priceSub:'€3,100 · COP 13.8M per hectare' },
    { label:'Carbon Market', name:'Gold Standard Carbon Bonds', img:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=760&h=230&q=80', desc:'Certification and commercialization of carbon credits verified under the Gold Standard. The virgin zone of Caño Juriepe generates 39.4 tCO₂/ha — the maximum certifiable sequestration potential in the region.', includes:['Forest biomass measurement (IPCC methodology)','Certified calculation of CO₂ equivalent tonnes','International Gold Standard verification process','Digital certificates with unique serial number','Commercialization in European and Colombian markets','Annual environmental and social impact report'], audience:'Companies with SBTi commitments, international corporations with net-zero goals, ESG investment funds, and voluntary carbon credit buyers.', price:'From USD 2,700', priceSub:'Packages: 100 · 300 · 600 · 3,151 tCO₂' },
    { label:'Corporate Social Responsibility', name:'CSR Compensation', img:'https://images.unsplash.com/photo-1598335624134-5bceb5de202d?auto=format&fit=crop&w=760&h=230&q=80', desc:'Corporate program for adopting certified native trees in the Colombian Orinoquía. Each tree has GPS coordinates, registered botanical species, and annual monitoring — with a personalized certificate for your company.', includes:['Native tree adoption with unique serial','Personalized digital certificate with corporate logo','GPS coordinates of the tree in the actual field','Planting photo and annual follow-up','Impact report for sustainability reports','Recognition plaque in the project area'], audience:'Companies with CSR programs, multinationals with corporate environmental goals, and SMEs that want to demonstrate verifiable environmental commitment.', price:'From USD 33/tree', priceSub:'€32 · COP 138,000 per certified tree' },
    { label:'Native Beekeeping', name:'Meliponiculture', img:'https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=760&h=230&q=80', desc:'Establishment and management of Melipona eburnea colonies, the stingless native bee of the eastern plains. 400 hives at Caño Juriepe for natural pollination, medicinal honey, and pollinator conservation.', includes:['Hive installation in native wood','Technical training in stingless bee management','Quarterly colony monitoring','High-quality medicinal honey production','Pollination services for surrounding crops','Rescue and relocation of wild colonies'], audience:'Rural farms, ecological restoration projects, rural and indigenous communities of Arauca and Casanare, and biodiversity researchers.', price:'From USD 125/hive', priceSub:'€120 · COP 517,000 per installed hive' },
    { label:'Training & Awareness', name:'Environmental Education', img:'https://images.unsplash.com/photo-1565792894736-eeced66760d7?auto=format&fit=crop&w=760&h=230&q=80', desc:'Educational workshops and programs on ecosystem conservation, Orinoco biodiversity, and climate change adaptation, with a practical and experiential approach adapted to the plains context.', includes:['4 to 8-hour in-field workshops','Teaching materials adapted to the plains context','Field tours through native ecosystems','Individual participation certificates','Native species identification module','Annual community follow-up programs'], audience:'Schools and universities in Arauca, rural communities, companies with environmental CSR programs, and government entities.', price:'From USD 400/workshop', priceSub:'€390 · COP 1.7M per field workshop' },
    { label:'Nature Tourism', name:'Scientific Ecotourism', img:'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=760&h=230&q=80', desc:'Scientific guided tours through the ecosystems of Caño Juriepe and the Colombian Orinoquía. Wildlife observation, morichales and plains birdlife with a specialist biologist.', includes:['Specialist guide — biologist or environmental engineer','Observation of birds, mammals, and reptiles of the plains','Tour through morichales and gallery forests','Visit to the meliponiculture project','Ecosystem photographic record','Biodiversity species observation report'], audience:'Researchers, nature tourists, university groups, environmental organizations, and European cooperants visiting the project.', price:'From USD 48/person', priceSub:'€47 · COP 207,000 · groups from 4 people' },
    { label:'Technical Environmental Advisory', name:'Environmental Consulting', img:'https://images.unsplash.com/photo-1726098206872-e0d859aa1e34?auto=format&fit=crop&w=760&h=230&q=80', desc:'Specialized technical advisory for compliance with Colombian environmental regulations. EIA and EMP with complete management before CORPORINOQUIA and the Ministry of Environment.', includes:['Environmental Impact Studies (EIA)','Environmental Management Plans (EMP)','Management before CORPORINOQUIA and MADS','Flora and fauna inventories for permits','Environmental due diligence for investments','Advisory on mandatory compensations','Regulatory compliance monitoring'], audience:'Oil companies, agricultural and industrial projects, construction companies, and State entities in the Orinoquía.', price:'From USD 1,350/month', priceSub:'€1,300 · COP 5.75M — Flórez + Carvajal COPNIA' },
    { label:'Field Science', name:'Research & Monitoring', img:'https://images.unsplash.com/photo-1752110382999-15e510962691?auto=format&fit=crop&w=760&h=230&q=80', desc:'Scientific flora and fauna inventories, long-term biodiversity monitoring, and biomass carbon analysis using IPCC methodology and geo-referenced databases.', includes:['Complete floristic and faunal inventories','Bird, mammal, reptile, and amphibian monitoring','Aerial and underground biomass carbon analysis','Soil physical-chemical sampling and analysis','Scientific reports with GIS maps','Geo-referenced biodiversity databases'], audience:'Universities, research institutes, GEF/UNDP/EUROCLIMA+ bodies, environmental entities, and Gold Standard certifiers.', price:'From USD 2,700/year', priceSub:'€2,600 · COP 11.5M per annual program' }
  ],
  it: [
    { label:'Ripristino degli Ecosistemi', name:'Ripristino Ecologico', img:'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=760&h=230&q=80', desc:'Programma completo di ripristino ecologico in ecosistemi degradati dell\'Orinochia colombiana. Utilizziamo 12 specie native selezionate scientificamente per recuperare la copertura vegetale, il suolo e la biodiversità.', includes:['Diagnosi del suolo e dello stato dell\'ecosistema','Selezione di 12+ specie native dell\'Orinoco','Semina diretta e trapianto di piantine','Controllo dell\'erosione e della compattazione del suolo','Monitoraggio della sopravvivenza e della crescita','Rapporti georeferenziati con coordinate GPS','Calcolo della CO₂ sequestrata (metodologia IPCC)'], audience:'Proprietari di terreni rurali, aziende con obblighi di compensazione ambientale, enti territoriali e organizzazioni di cooperazione internazionale come EUROCLIMA+ e GEF/UNDP.', price:'Da USD 3.200/ha', priceSub:'€3.100 · COP 13,8M per ettaro' },
    { label:'Mercato del Carbonio', name:'Crediti di Carbonio Gold Standard', img:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=760&h=230&q=80', desc:'Certificazione e commercializzazione di crediti di carbonio verificati con lo standard Gold Standard. La zona vergine di Caño Juriepe genera 39,4 tCO₂/ha — il massimo potenziale di sequestro certificabile nella regione.', includes:['Misurazione della biomassa forestale (metodologia IPCC)','Calcolo certificato di tonnellate di CO₂ equivalente','Processo di verifica Gold Standard internazionale','Certificati digitali con numero seriale unico','Commercializzazione nei mercati europei e colombiani','Rapporto annuale di impatto ambientale e sociale'], audience:'Aziende con impegni SBTi, multinazionali con obiettivi net-zero, fondi di investimento ESG e acquirenti volontari di crediti di carbonio.', price:'Da USD 2.700', priceSub:'Pacchetti: 100 · 300 · 600 · 3.151 tCO₂' },
    { label:'Responsabilità Sociale d\'Impresa', name:'Compensazione RSI', img:'https://images.unsplash.com/photo-1598335624134-5bceb5de202d?auto=format&fit=crop&w=760&h=230&q=80', desc:'Programma aziendale per l\'adozione di alberi nativi certificati nell\'Orinochia colombiana. Ogni albero ha coordinate GPS, specie botanica registrata e monitoraggio annuale — con certificato personalizzato per la tua azienda.', includes:['Adozione di alberi nativi con seriale unico','Certificato digitale personalizzato con logo aziendale','Coordinate GPS dell\'albero nel campo reale','Foto di piantagione e monitoraggio annuale','Rapporto di impatto per report di sostenibilità','Targa di riconoscimento nell\'area del progetto'], audience:'Aziende con programmi RSI, multinazionali con obiettivi ambientali aziendali e PMI che vogliono dimostrare un impegno ambientale verificabile.', price:'Da USD 33/albero', priceSub:'€32 · COP 138.000 per albero certificato' },
    { label:'Apicoltura Nativa', name:'Meliponicultura', img:'https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=760&h=230&q=80', desc:'Istituzione e gestione di colonie di Melipona eburnea, l\'ape nativa senza pungiglione dei llanos orientali. 400 arnie a Caño Juriepe per l\'impollinazione naturale, il miele medicinale e la conservazione degli impollinatori.', includes:['Installazione di arnie in legno nativo','Formazione tecnica nella gestione delle api senza pungiglione','Monitoraggio trimestrale delle colonie','Produzione di miele medicinale di alta qualità','Servizi di impollinazione per le colture vicine','Salvataggio e rilocalizzazione di colonie selvatiche'], audience:'Fattorie rurali, progetti di ripristino ecologico, comunità rurali e indigene di Arauca e Casanare, ricercatori di biodiversità.', price:'Da USD 125/arnia', priceSub:'€120 · COP 517.000 per arnia installata' },
    { label:'Formazione e Sensibilizzazione', name:'Educazione Ambientale', img:'https://images.unsplash.com/photo-1565792894736-eeced66760d7?auto=format&fit=crop&w=760&h=230&q=80', desc:'Workshop e programmi educativi sulla conservazione degli ecosistemi, la biodiversità dell\'Orinoco e l\'adattamento ai cambiamenti climatici, con approccio pratico e esperienziale adattato al contesto llanero.', includes:['Workshop in campo da 4 a 8 ore','Materiale didattico adattato al contesto llanero','Escursioni di campo in ecosistemi nativi','Certificati di partecipazione individuali','Modulo di identificazione delle specie native','Programmi annuali di follow-up comunitario'], audience:'Scuole e università di Arauca, comunità rurali, aziende con programmi RSI ambientali ed enti governativi.', price:'Da USD 400/workshop', priceSub:'€390 · COP 1,7M per workshop di campo' },
    { label:'Turismo Naturalistico', name:'Ecoturismo Scientifico', img:'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=760&h=230&q=80', desc:'Tour scientifici guidati attraverso gli ecosistemi di Caño Juriepe e l\'Orinochia colombiana. Osservazione di fauna selvatica, morichales e avifauna del llano con un biologo specialista.', includes:['Guida specializzata — biologo o ingegnere ambientale','Osservazione di uccelli, mammiferi e rettili del llano','Percorso attraverso morichales e foreste di galleria','Visita al progetto di meliponicultura','Documentazione fotografica dell\'ecosistema','Rapporto sulle specie di biodiversità osservate'], audience:'Ricercatori, turisti naturalistici, gruppi universitari, organizzazioni ambientali e cooperanti europei che visitano il progetto.', price:'Da USD 48/persona', priceSub:'€47 · COP 207.000 · gruppi da 4 persone' },
    { label:'Consulenza Tecnica Ambientale', name:'Consulenza Ambientale', img:'https://images.unsplash.com/photo-1726098206872-e0d859aa1e34?auto=format&fit=crop&w=760&h=230&q=80', desc:'Consulenza tecnica specializzata per la conformità alla normativa ambientale colombiana. VIA e PGA con gestione completa presso CORPORINOQUIA e il Ministero dell\'Ambiente.', includes:['Studi di Impatto Ambientale (VIA)','Piani di Gestione Ambientale (PGA)','Gestione presso CORPORINOQUIA e MADS','Inventari di flora e fauna per permessi','Due diligence ambientale per investimenti','Consulenza su compensazioni obbligatorie','Monitoraggio della conformità normativa'], audience:'Aziende petrolifere, progetti agricoli e industriali, costruttori ed enti dello Stato nell\'Orinochia.', price:'Da USD 1.350/mese', priceSub:'€1.300 · COP 5,75M — Flórez + Carvajal COPNIA' },
    { label:'Scienza di Campo', name:'Ricerca e Monitoraggio', img:'https://images.unsplash.com/photo-1752110382999-15e510962691?auto=format&fit=crop&w=760&h=230&q=80', desc:'Inventari scientifici di flora e fauna, monitoraggio della biodiversità a lungo termine e analisi del carbonio nella biomassa con metodologia IPCC e database georeferenziati.', includes:['Inventari floristici e faunistici completi','Monitoraggio di uccelli, mammiferi, rettili e anfibi','Analisi del carbonio nella biomassa aerea e sotterranea','Campionamento e analisi fisico-chimica del suolo','Rapporti scientifici con mappe GIS','Database di biodiversità georeferenziati'], audience:'Università, istituti di ricerca, organismi GEF/UNDP/EUROCLIMA+, enti ambientali e certificatori Gold Standard.', price:'Da USD 2.700/anno', priceSub:'€2.600 · COP 11,5M per programma annuale' }
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
