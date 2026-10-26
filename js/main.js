const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
function toggleMenu(open) {
  const isOpen = navMenu.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', isOpen);
}
hamburger.addEventListener('click', () => toggleMenu());
hamburger.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleMenu(); } });
navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => toggleMenu(false)));

const langBtn = document.getElementById('langBtn');
let lang = document.documentElement.lang === 'en' ? 'en' : 'es';
const langCycle = { es: 'en', en: 'es' };
const langLabel = { es: 'EN', en: 'ES' };

const t = {
  es: {
    'nav-about':'Quiénes somos','nav-services':'Servicios','nav-species':'Especies','nav-project':'Proyecto','nav-progress':'Avances',
    'nav-calc':'Calculadora','nav-carbon':'Bonos CO₂','nav-team':'Equipo','nav-contact':'Contacto','nav-cta':'Contáctanos',
    'hero-badge':'🌿 Restauración Ecológica — Orinoquia Colombia',
    'hero-title-1':'Restauramos','hero-title-2':'bosques','hero-title-3':'generamos futuro sostenible',
    'hero-subtitle':'Fundación sin ánimo de lucro dedicada a la restauración ecológica, los bonos de carbono en proceso de certificación Gold Standard y la conservación de la biodiversidad en la Orinoquia colombiana.',
    'hero-btn1':'🌱 Ver bonos de carbono','hero-btn2':'Nuestro proyecto',
    'stat1-num':'80.000','stat1-label':'Árboles nativos (fase 1)','stat2-num':'4.728','stat2-label':'tCO₂ estimadas',
    'stat3-num':'150 ha','stat3-label':'En comodato para restauración','stat4-num':'2018','stat4-label':'Fundada',
    'bstat1-num':'80.000','bstat1-label':'Árboles fase 1','bstat2-num':'4.728 tCO₂','bstat2-label':'Estimadas','bstat3-num':'€548K','bstat3-label':'Presupuesto fase 1',
    'about-label':'Quiénes somos','about-title-1':'Restauramos ecosistemas en la','about-title-2':'Orinoquia',
    'about-desc':'Desde 2018, Fundación Forestar trabaja en la restauración ecológica de ecosistemas degradados en Colombia, combinando ciencia, tecnología y comunidades locales para crear impacto ambiental duradero.',
    'feat1-title':'En proceso de certificación Gold Standard','feat1-desc':'Bonos de carbono estructurados según los requisitos de medición y verificación del estándar Gold Standard',
    'feat2-title':'Cooperación Internacional','feat2-desc':'Propuestas presentadas a EUROCLIMA+ (Unión Europea) y al PPD Colombia (GEF/PNUD). Registrados en el portal de la UE (PIC y PADOR)',
    'feat3-title':'Biodiversidad y Comunidades','feat3-desc':'Meta de 400 colmenas de meliponicultura con abejas nativas sin aguijón',
    'feat4-title':'Ciencia e Innovación','feat4-desc':'Estimación con metodología IPCC: 31.5 tCO₂/ha',
    'partners-lbl':'Proyectos presentados ante',
    'services-label':'Portafolio de Servicios','services-title-1':'Soluciones ambientales','services-title-2':'integrales',
    'services-desc':'Ofrecemos servicios especializados en restauración ecológica, bonos de carbono y conservación de la biodiversidad para empresas, gobiernos y organismos internacionales.',
    'svc1-name':'Restauración Ecológica','svc1-desc':'Siembra de especies nativas, control de erosión y monitoreo de ecosistemas degradados.',
    'svc2-name':'Bonos de Carbono','svc2-desc':'Estructuración y comercialización de créditos de carbono en proceso de certificación bajo el estándar Gold Standard, para empresas e instituciones con metas climáticas.',
    'svc3-name':'Compensación RSE','svc3-desc':'Programas de responsabilidad social empresarial con adopción de árboles nativos georreferenciados y con seguimiento.',
    'svc4-name':'Meliponicultura','svc4-desc':'Establecimiento y manejo de colmenas de abejas nativas sin aguijón de la Orinoquia.',
    'svc5-name':'Educación Ambiental','svc5-desc':'Talleres y programas formativos sobre conservación, biodiversidad y cambio climático.',
    'svc6-name':'Ecoturismo Científico','svc6-desc':'Recorridos guiados por ecosistemas restaurados de la Orinoquia con enfoque científico.',
    'svc7-name':'Consultoría Ambiental','svc7-desc':'Asesoría especializada en EIA, PMA, licencias ambientales y cumplimiento normativo.',
    'svc8-name':'Investigación y Monitoreo','svc8-desc':'Inventarios de flora y fauna, monitoreo de biodiversidad y análisis de carbono en biomasa.',
    'especies-label':'Flora Nativa','especies-title-1':'Especies que','especies-title-2':'restauramos',
    'especies-desc':'Trabajamos con 12 especies nativas del Orinoco, seleccionadas por su valor ecológico, capacidad de captura de carbono y resistencia en sabanas inundables de Arauca.',
    'project-label':'Proyecto Estrella','project-title-1':'Caño Juriepe —','project-title-2':'Vereda La Esperanza',
    'project-desc':'Restauración ecológica en 150 hectáreas recibidas en comodato en la Orinoquia colombiana. La primera fase, de 80 hectáreas y 80.000 árboles, fue presentada a EUROCLIMA+ (Unión Europea), y el proyecto está estructurado para certificación Gold Standard.',
    'pstat1':'Árboles fase 1 (meta)','pstat2':'Colmenas nativas (meta)','pstat3':'tCO₂ netas estimadas','pstat4':'Presupuesto fase 1',
    'map-title':'📍 Ubicación del proyecto',
    'progress-label':'Nuestra Trayectoria','progress-title-1':'Avances de','progress-title-2':'Forestar',
    'progress-desc':'Desde la primera siembra hasta el trabajo actual en Caño Juriepe: los pasos concretos que hemos dado para consolidar la fundación y llevar el proyecto hacia la certificación.',
    'proga-date':'Abril 2019','proga-title':'Primera siembra: 2 hectáreas','proga-desc':'A seis meses de fundada la organización, sembramos las primeras 2 hectáreas de restauración — el punto de partida del trabajo de campo de Forestar.',
    'progb-date':'Septiembre 2019','progb-title':'Mesa de Desarrollo Ambiental de Arauca','progb-desc':'Cinco meses después de la primera siembra, nos vinculamos a la Mesa de Desarrollo Ambiental del departamento de Arauca, nuestro primer espacio de articulación institucional.',
    'progc-date':'2021','progc-title':'Fortalecimiento del sector apícola','progc-desc':'Participamos del proyecto departamental de fortalecimiento al sector apícola. Desde entonces trabajamos la reforestación integrando el manejo y mejoramiento de ecosistemas a través de la apicultura.',
    'progd-date':'2023','progd-title':'Mesa Departamental de Ciencia y Tecnología Agroindustrial','progd-desc':'Entramos a hacer parte de la mesa departamental de ciencia y tecnología agroindustrial de Arauca.',
    'prog1-date':'Mayo 2026','prog1-title':'Contrato de comodato firmado','prog1-desc':'Se formalizó el comodato de 150 hectáreas en la Vereda La Esperanza, Cravo Norte, ampliando el área de restauración del proyecto Caño Juriepe.',
    'prog2-date':'Mayo 2026','prog2-title':'Registros legales actualizados','prog2-desc':'Renovamos el RUT y el Certificado de Cámara de Comercio de Arauca, y completamos el registro PADOR ante la Unión Europea para habilitar a la fundación como socia elegible en convocatorias europeas.',
    'prog3-date':'Junio 2026','prog3-title':'Propuesta radicada ante el PPD Colombia (GEF/PNUD)','prog3-desc':'Presentamos la propuesta del proyecto Caño Juriepe al Programa de Pequeñas Donaciones del Fondo para el Medio Ambiente Mundial, en articulación con PNUD Colombia.',
    'prog4-date':'Junio 2026','prog4-title':'Articulación con CORPORINOQUIA','prog4-desc':'La autoridad ambiental regional solicitó el resumen ejecutivo del proyecto como parte del proceso de acompañamiento institucional.',
    'prog5-date':'Septiembre 2026','prog5-title':'Nuevas propuestas a la Secretaría de Desarrollo Agropecuario y Sostenible de Arauca','prog5-desc':'Presentamos tres propuestas para seguridad alimentaria y acceso a agua en siete municipios del departamento de Arauca.',
    'calc-label':'Calculadora Ambiental','calc-title-1':'¿Cuánto CO₂','calc-title-2':'emite tu empresa?',
    'calc-desc':'Calcula tu huella de carbono en menos de un minuto y descubre con cuántas toneladas de nuestro proyecto puedes hacer una contribución climática.',
    'calc-emp-label':'Empleados en la empresa','calc-elec-label':'Electricidad mensual (kWh)',
    'calc-estimate':'Estimar','calc-elec-hint':'Si no tienes el dato, haz clic en "Estimar" para usar un promedio por empleado.',
    'calc-grid-label':'Red eléctrica de tu país','calc-grid-hint':'Factores de intensidad de red según la European Environment Agency (EEA) — selecciona el país donde tu empresa consume electricidad para un cálculo más preciso.',
    'grid-eu':'Promedio Unión Europea — EEA (0.23 kg CO₂/kWh)','grid-co':'Colombia — SIN (0.164 kg CO₂/kWh)','grid-fr':'Francia (0.06 kg CO₂/kWh)','grid-es':'España (0.17 kg CO₂/kWh)','grid-it':'Italia (0.23 kg CO₂/kWh)','grid-de':'Alemania (0.38 kg CO₂/kWh)','grid-pl':'Polonia (0.64 kg CO₂/kWh)',
    'calc-flights-short':'Vuelos de corta distancia/año (<1.500 km)','calc-flights-long':'Vuelos de larga distancia/año (>1.500 km)','calc-vehicles':'Vehículos empresa',
    'calc-source-note':'Cálculo basado en factores de emisión de la European Environment Agency (EEA) y el GHG Protocol — referencia útil para reportes CSRD/ESRS E1 y compromisos SBTi.',
    'calc-cta-btn':'🌱 Calcular mi huella de carbono',
    'calc-result-lbl':'Tu huella de carbono anual','calc-breakdown':'Desglose de emisiones',
    'calc-b-elec':'Electricidad','calc-b-vuelos':'Vuelos','calc-b-vehs':'Vehículos','calc-b-oficina':'Oficina',
    'calc-rec-title':'Paquete sugerido según tu huella','calc-rec-btn':'🌿 Solicitar este paquete',
    'calc-placeholder':'Completa los datos de tu empresa y haz clic en "Calcular" para ver tu huella de carbono y el paquete de bonos recomendado.',
    'carbon-label':'Mercado de Carbono','carbon-title-1':'Bonos de Carbono','carbon-title-2':'en certificación Gold Standard',
    'carbon-desc':'Proyecto en proceso de certificación bajo el estándar internacional Gold Standard, con metodología de medición IPCC y un potencial estimado de 31.5 tCO₂/ha. Los paquetes son reservas sobre créditos futuros: se entregan con su serial una vez Gold Standard los emita.',
    'carbon-badge-sub':'En proceso de certificación internacional',
    'pkg1-name':'Moriche','pkg1-tons':'100 toneladas CO₂','pkg1-per':'USD 27 / tCO₂',
    'pkg2-name':'Caño','pkg2-tons':'300 toneladas CO₂','pkg2-per':'USD 23 / tCO₂',
    'pkg3-name':'Sabana','pkg3-tons':'600 toneladas CO₂','pkg3-per':'USD 20 / tCO₂',
    'pkg4-name':'Orinoquia','pkg4-tons':'3.151 toneladas CO₂','pkg4-per':'USD 16 / tCO₂',
    'pkg5-tag':'Proyecto completo · 150 ha','pkg5-name':'Juriepe','pkg5-tons':'4.728 toneladas CO₂ — todo el potencial estimado del proyecto, para un solo comprador','pkg5-price':'A convenir','pkg5-per':'Precio según plazo y condiciones de la reserva','pkg5-cta':'Solicitar cotización',
    'pkg-cta':'Solicitar','pkg-popular':'Popular','carbon-terms':'Ver condiciones de reserva →','footer-terms':'Condiciones de reserva',
    'faq-label':'Preguntas Frecuentes','faq-title-1':'Todo sobre los','faq-title-2':'bonos de carbono',
    'faq-q1':'¿Qué es Gold Standard y por qué es importante?',
    'faq-a1':'Gold Standard es un estándar internacional de certificación de carbono fundado en 2003 por WWF y otras organizaciones ambientales. Exige que cada tonelada de CO₂ sea verificada por terceros independientes y que el proyecto genere beneficios reales para las comunidades locales y la biodiversidad.',
    'faq-q2':'¿Cómo se verifica la captura de CO₂?',
    'faq-a2':'Usamos la metodología IPCC para medir la biomasa forestal en campo. Antes de que se emita cualquier crédito, un auditor independiente acreditado por Gold Standard debe verificar los cálculos. Nuestra estimación actual es de 31.5 tCO₂/ha.',
    'faq-q3':'¿Cuándo recibo mi certificado?',
    'faq-a3':'Una vez confirmada tu reserva, te enviamos de inmediato la confirmación con el detalle de tu paquete. El certificado oficial Gold Standard -- con número serial, coordenadas GPS del área y fecha de emisión -- se expide cuando el proyecto complete su proceso de registro y verificación ante Gold Standard. Te mantenemos informado del avance en cada etapa.',
    'faq-q4':'¿Puedo visitar el proyecto en campo?',
    'faq-a4':'Sí. Ofrecemos visitas guiadas al proyecto Caño Juriepe en Cravo Norte, Arauca, acompañadas por nuestro equipo técnico. Contáctanos para coordinar fechas y logística de traslado.',
    'faq-q5':'¿Qué diferencia a Forestar de otros proyectos?',
    'faq-a5':'Somos una fundación llanera que trabaja en Cravo Norte desde 2018. El proyecto integra 12 especies nativas del Orinoco, meliponicultura con abejas nativas sin aguijón y un equipo técnico con biólogo e ingeniero ambiental con matrícula profesional. Lo hemos presentado a EUROCLIMA+ (Unión Europea) y al PPD Colombia (GEF/PNUD).',
    'faq-q6':'¿Para qué sirven los bonos?',
    'faq-a6':'Los créditos Gold Standard sirven para metas voluntarias: reportes ESG, contribución climática más allá de la cadena de valor (BVCM de SBTi) y neutralización de emisiones residuales en estrategias net-zero. No reemplazan la reducción de tus propias emisiones, y en la Unión Europea no permiten anunciar un producto como "neutro en carbono" (Directiva 2024/825). Para compensaciones obligatorias ante autoridades colombianas, contáctanos y te orientamos sobre los mecanismos que aplican.',
    'team-label':'Nuestro Equipo','team-title-1':'Expertos en','team-title-2':'ecosistemas',
    'team-desc':'Un equipo multidisciplinario de profesionales comprometidos con la restauración ecológica y la sostenibilidad ambiental.',
    'tm1-role':'Presidenta / Rep. Legal','tm2-role':'Dir. Relaciones Internacionales',
    'tm2-exp':'Gestión de proyectos internacionales, bonos de carbono y financiación europea',
    'tm3-role':'Vicepresidenta y Rep. Legal Suplente','tm4-role':'Coordinador de Proyectos',
    'tm5-role':'Biólogo Especialista','tm6-role':'Ingeniero Ambiental',
    'tm5-exp':'Biólogo — Universidad de Pamplona · Más de 10 años en estudios ambientales en la Orinoquia',
    'tm6-exp':'Ingeniero Ambiental · Especialista en Interventoría · Matrícula COPNIA',
    'contact-label':'Contacto','contact-title-1':'Hablemos sobre el','contact-title-2':'futuro',
    'contact-desc':'Ya sea que busques hacer una contribución climática, reservar bonos en proceso de certificación Gold Standard o colaborar en proyectos de restauración, estamos listos para crear una propuesta a tu medida.',
    'ci1-title':'Correo principal','ci2-title':'Relaciones Internacionales',
    'ci3-title':'Colombia','ci4-title':'Redes sociales','ci5-title':'Datos legales',
    'ci5-founded':'Fundada: 12 octubre 2018',
    'form-title':'Envíanos un mensaje','form-name':'Nombre completo','form-org':'Empresa / Organización',
    'form-email':'Correo electrónico','form-phone':'Teléfono (opcional)',
    'form-interest':'Área de interés','form-message':'Mensaje','form-submit':'🌿 Enviar mensaje',
    'form-consent':'Autorizo a Fundación Forestar a tratar mis datos personales para responder a mi mensaje, según su','form-consent-link':'Política de Tratamiento de Datos',
    'int-select':'Seleccionar...','int-carbon':'Bonos de carbono','int-restoration':'Restauración ecológica',
    'int-rse':'Compensación RSE','int-bees':'Meliponicultura','int-consulting':'Consultoría ambiental','int-other':'Otro',
    'footer-desc':'Fundación sin ánimo de lucro dedicada a la restauración ecológica, bonos de carbono y conservación de biodiversidad en la Orinoquia colombiana.',
    'footer-services':'Servicios','footer-contact':'Contacto','footer-privacy':'Política de privacidad',
    'footer-copy':'© 2026 Fundación Forestar — Todos los derechos reservados',
    'cookie-title':'🍪 Sin cookies de seguimiento',
    'cookie-text':'Este sitio no usa cookies de publicidad ni analítica. Solo recordamos en tu navegador que ya viste este aviso.',
    'cookie-link':'Política de privacidad','cookie-acc':'Entendido',
    'modal-includes-title':'¿Qué incluye?','modal-audience-title':'Dirigido a',
    'modal-invest':'Inversión','modal-request':'🌿 Solicitar información'
  },
  en: {
    'nav-about':'About us','nav-services':'Services','nav-species':'Species','nav-project':'Project','nav-progress':'Progress',
    'nav-calc':'Calculator','nav-carbon':'Carbon Credits','nav-team':'Team','nav-contact':'Contact','nav-cta':'Contact us',
    'hero-badge':'🌿 Ecological Restoration — Orinoquía Colombia',
    'hero-title-1':'We restore','hero-title-2':'forests','hero-title-3':'building a sustainable future',
    'hero-subtitle':'Non-profit foundation dedicated to ecological restoration, carbon credits currently undergoing Gold Standard certification, and biodiversity conservation in the Colombian Orinoquía.',
    'hero-btn1':'🌱 View carbon credits','hero-btn2':'Our project',
    'stat1-num':'80,000','stat1-label':'Native trees (phase 1)','stat2-num':'4,728','stat2-label':'tCO₂ estimated',
    'stat3-num':'150 ha','stat3-label':'Under land-use agreement for restoration','stat4-num':'2018','stat4-label':'Founded',
    'bstat1-num':'80,000','bstat1-label':'Trees phase 1','bstat2-num':'4,728 tCO₂','bstat2-label':'Estimated','bstat3-num':'€548K','bstat3-label':'Phase 1 budget',
    'about-label':'About us','about-title-1':'Restoring ecosystems in the','about-title-2':'Orinoquía',
    'about-desc':'Since 2018, Fundación Forestar works in the ecological restoration of degraded ecosystems in Colombia, combining science, technology, and local communities to create lasting environmental impact.',
    'feat1-title':'Gold Standard Certification In Progress','feat1-desc':'Carbon credits structured to meet Gold Standard measurement and verification requirements',
    'feat2-title':'International Cooperation','feat2-desc':'Proposals submitted to EUROCLIMA+ (European Union) and the GEF/UNDP Small Grants Programme. Registered in the EU portal (PIC and PADOR)',
    'feat3-title':'Biodiversity & Communities','feat3-desc':'Target of 400 stingless native bee hives (meliponiculture)',
    'feat4-title':'Science & Innovation','feat4-desc':'IPCC methodology estimate: 31.5 tCO₂/ha',
    'partners-lbl':'Projects submitted to',
    'services-label':'Services Portfolio','services-title-1':'Comprehensive environmental','services-title-2':'solutions',
    'services-desc':'We offer specialized services in ecological restoration, carbon credits, and biodiversity conservation for companies, governments, and international organizations.',
    'svc1-name':'Ecological Restoration','svc1-desc':'Native species planting, erosion control, and degraded ecosystem monitoring.',
    'svc2-name':'Carbon Credits','svc2-desc':'Structuring and commercialization of carbon credits currently undergoing certification under the Gold Standard, for companies and institutions with climate goals.',
    'svc3-name':'CSR Compensation','svc3-desc':'Corporate social responsibility programs with geo-referenced, monitored native tree adoption.',
    'svc4-name':'Meliponiculture','svc4-desc':'Establishment and management of stingless native bee hives of the Orinoquía.',
    'svc5-name':'Environmental Education','svc5-desc':'Workshops and training programs on conservation, biodiversity, and climate change.',
    'svc6-name':'Scientific Ecotourism','svc6-desc':'Guided tours through restored ecosystems of the Orinoquía with scientific focus.',
    'svc7-name':'Environmental Consulting','svc7-desc':'Specialized advice on EIA, EMP, environmental permits, and regulatory compliance.',
    'svc8-name':'Research & Monitoring','svc8-desc':'Flora and fauna inventories, biodiversity monitoring, and biomass carbon analysis.',
    'especies-label':'Native Flora','especies-title-1':'Species we','especies-title-2':'restore',
    'especies-desc':'We work with 12 native Orinoco species, selected for their ecological value, carbon sequestration capacity, and resilience in the flooded savannas of Arauca.',
    'project-label':'Flagship Project','project-title-1':'Caño Juriepe —','project-title-2':'Vereda La Esperanza',
    'project-desc':'Ecological restoration on 150 hectares held under a land-use agreement in the Colombian Orinoquía. The first phase, covering 80 hectares and 80,000 trees, was submitted to EUROCLIMA+ (European Union), and the project is structured for Gold Standard certification.',
    'pstat1':'Native trees (phase 1 target)','pstat2':'Native bee hives (target)','pstat3':'net tCO₂ estimated','pstat4':'Phase 1 budget',
    'map-title':'📍 Project location',
    'progress-label':'Our Journey','progress-title-1':'Forestar’s','progress-title-2':'progress',
    'progress-desc':'From our first planting to our current work at Caño Juriepe: the concrete steps we took to build the foundation and move the project toward certification.',
    'proga-date':'April 2019','proga-title':'First planting: 2 hectares','proga-desc':'Six months after the organization was founded, we planted the first 2 hectares of restoration — the starting point of Forestar’s field work.',
    'progb-date':'September 2019','progb-title':'Arauca Environmental Development Roundtable','progb-desc':'Five months after our first planting, we joined the Environmental Development Roundtable of the Arauca department, our first institutional coordination space.',
    'progc-date':'2021','progc-title':'Beekeeping Sector Strengthening Project','progc-desc':'We took part in the departmental project to strengthen the beekeeping sector. Since then, we have combined reforestation with ecosystem management and improvement through beekeeping.',
    'progd-date':'2023','progd-title':'Departmental Agro-industrial Science and Technology Roundtable','progd-desc':'We joined the departmental agro-industrial science and technology roundtable of Arauca.',
    'prog1-date':'May 2026','prog1-title':'Land-use agreement signed','prog1-desc':'We formalized the 150-hectare land-use agreement in Vereda La Esperanza, Cravo Norte, expanding the restoration area of the Caño Juriepe project.',
    'prog2-date':'May 2026','prog2-title':'Legal registrations updated','prog2-desc':'We renewed the tax ID (RUT) and the Arauca Chamber of Commerce Certificate, and completed the PADOR registration with the European Union to qualify the foundation as an eligible partner in European calls for proposals.',
    'prog3-date':'June 2026','prog3-title':'Proposal submitted to PPD Colombia (GEF/UNDP)','prog3-desc':'We submitted the Caño Juriepe project proposal to the Global Environment Facility Small Grants Programme, in coordination with UNDP Colombia.',
    'prog4-date':'June 2026','prog4-title':'Coordination with CORPORINOQUIA','prog4-desc':'The regional environmental authority requested the project executive summary as part of the institutional support process.',
    'prog5-date':'September 2026','prog5-title':'New proposals to the Arauca Secretariat for Agricultural and Sustainable Development','prog5-desc':'We submitted three proposals for food security and water access in seven municipalities of the Arauca department.',
    'calc-label':'Environmental Calculator','calc-title-1':'How much CO₂','calc-title-2':'does your company emit?',
    'calc-desc':'Calculate your carbon footprint in under a minute and find out how many tonnes from our project you can support as a climate contribution.',
    'calc-emp-label':'Company employees','calc-elec-label':'Monthly electricity (kWh)',
    'calc-estimate':'Estimate','calc-elec-hint':'If you don\'t have the figure, click "Estimate" to use an average per employee.',
    'calc-grid-label':'Your country\'s electricity grid','calc-grid-hint':'Grid intensity factors from the European Environment Agency (EEA) — select the country where your company consumes electricity for a more precise calculation.',
    'grid-eu':'European Union average — EEA (0.23 kg CO₂/kWh)','grid-co':'Colombia — SIN (0.164 kg CO₂/kWh)','grid-fr':'France (0.06 kg CO₂/kWh)','grid-es':'Spain (0.17 kg CO₂/kWh)','grid-it':'Italy (0.23 kg CO₂/kWh)','grid-de':'Germany (0.38 kg CO₂/kWh)','grid-pl':'Poland (0.64 kg CO₂/kWh)',
    'calc-flights-short':'Short-haul flights/year (<1,500 km)','calc-flights-long':'Long-haul flights/year (>1,500 km)','calc-vehicles':'Company vehicles',
    'calc-source-note':'Calculation based on emission factors from the European Environment Agency (EEA) and the GHG Protocol — a useful reference for CSRD/ESRS E1 reporting and SBTi commitments.',
    'calc-cta-btn':'🌱 Calculate my carbon footprint',
    'calc-result-lbl':'Your annual carbon footprint','calc-breakdown':'Emissions breakdown',
    'calc-b-elec':'Electricity','calc-b-vuelos':'Flights','calc-b-vehs':'Vehicles','calc-b-oficina':'Office',
    'calc-rec-title':'Suggested package for your footprint','calc-rec-btn':'🌿 Request this package',
    'calc-placeholder':'Fill in your company data and click "Calculate" to see your carbon footprint and the recommended credits package.',
    'carbon-label':'Carbon Market','carbon-title-1':'Carbon Credits','carbon-title-2':'pursuing Gold Standard certification',
    'carbon-desc':'Project currently undergoing certification under the international Gold Standard, using IPCC measurement methodology, with an estimated potential of 31.5 tCO₂/ha. Packages are reservations on future credits: they are delivered with their serial number once Gold Standard issues them.',
    'carbon-badge-sub':'International certification in progress',
    'pkg1-name':'Moriche','pkg1-tons':'100 tonnes CO₂','pkg1-per':'USD 27 / tCO₂',
    'pkg2-name':'Caño','pkg2-tons':'300 tonnes CO₂','pkg2-per':'USD 23 / tCO₂',
    'pkg3-name':'Sabana','pkg3-tons':'600 tonnes CO₂','pkg3-per':'USD 20 / tCO₂',
    'pkg4-name':'Orinoquia','pkg4-tons':'3,151 tonnes CO₂','pkg4-per':'USD 16 / tCO₂',
    'pkg5-tag':'Full project · 150 ha','pkg5-name':'Juriepe','pkg5-tons':'4,728 tonnes CO₂ — the full estimated potential of the project, for a single buyer','pkg5-price':'Price on request','pkg5-per':'Price depends on term and reservation conditions','pkg5-cta':'Request a quote',
    'pkg-cta':'Request','pkg-popular':'Popular','carbon-terms':'See reservation terms →','footer-terms':'Reservation terms',
    'faq-label':'Frequently Asked Questions','faq-title-1':'All about','faq-title-2':'carbon credits',
    'faq-q1':'What is Gold Standard and why is it important?',
    'faq-a1':'Gold Standard is an international carbon certification standard founded in 2003 by WWF and other environmental organizations. It requires every tonne of CO₂ to be verified by independent third parties and the project to deliver real benefits for local communities and biodiversity.',
    'faq-q2':'How is CO₂ sequestration verified?',
    'faq-a2':'We use IPCC methodology to measure forest biomass in the field. Before any credit is issued, an independent auditor accredited by Gold Standard must verify the calculations. Our current estimate is 31.5 tCO₂/ha.',
    'faq-q3':'When do I receive my certificate?',
    'faq-a3':'Once your reservation is confirmed, we immediately send you confirmation with your package details. The official Gold Standard certificate — including serial number, GPS coordinates of the area, and issue date — is issued once the project completes its registration and verification process with Gold Standard. We keep you informed of progress at every stage.',
    'faq-q4':'Can I visit the project in the field?',
    'faq-a4':'Yes. We offer guided visits to the Caño Juriepe project in Cravo Norte, Arauca, accompanied by our technical team. Contact us to coordinate dates and transfer logistics.',
    'faq-q5':'What differentiates Forestar from other projects?',
    'faq-a5':'We are a foundation from the Llanos working in Cravo Norte since 2018. The project combines 12 native Orinoco species, meliponiculture with stingless native bees, and a technical team with a biologist and a licensed environmental engineer. We have submitted it to EUROCLIMA+ (European Union) and the GEF/UNDP Small Grants Programme.',
    'faq-q6':'What can the credits be used for?',
    'faq-a6':'Gold Standard credits serve voluntary goals: ESG reporting, beyond value chain mitigation (SBTi BVCM) and neutralization of residual emissions in net-zero strategies. They do not replace reducing your own emissions, and in the European Union they cannot be used to market a product as "carbon neutral" (Directive 2024/825). For mandatory compensation before Colombian authorities, contact us and we will advise you on the applicable mechanisms.',
    'team-label':'Our Team','team-title-1':'Experts in','team-title-2':'ecosystems',
    'team-desc':'A multidisciplinary team of professionals committed to ecological restoration and environmental sustainability.',
    'tm1-role':'President / Legal Representative','tm2-role':'Dir. International Relations',
    'tm2-exp':'International project management, carbon credits, and European funding',
    'tm3-role':'Vice-President & Deputy Legal Representative','tm4-role':'Project Coordinator',
    'tm5-role':'Specialist Biologist','tm6-role':'Environmental Engineer',
    'tm5-exp':'Biologist — Universidad de Pamplona · 10+ years in environmental studies in the Orinoquía',
    'tm6-exp':'Environmental Engineer · Specialist in Project Supervision · COPNIA licensed',
    'contact-label':'Contact','contact-title-1':"Let's talk about the",'contact-title-2':'future',
    'contact-desc':"Whether you want to make a climate contribution, reserve credits currently undergoing Gold Standard certification, or collaborate in restoration projects, we're ready to create a proposal tailored to your needs.",
    'ci1-title':'Main email','ci2-title':'International Relations',
    'ci3-title':'Colombia','ci4-title':'Social media','ci5-title':'Legal info',
    'ci5-founded':'Founded: October 12, 2018',
    'form-title':'Send us a message','form-name':'Full name','form-org':'Company / Organization',
    'form-email':'Email address','form-phone':'Phone (optional)',
    'form-interest':'Area of interest','form-message':'Message','form-submit':'🌿 Send message',
    'form-consent':'I authorize Fundación Forestar to process my personal data to answer my message, under its','form-consent-link':'Personal Data Policy',
    'int-select':'Select...','int-carbon':'Carbon credits','int-restoration':'Ecological restoration',
    'int-rse':'CSR compensation','int-bees':'Meliponiculture','int-consulting':'Environmental consulting','int-other':'Other',
    'footer-desc':'Non-profit foundation dedicated to ecological restoration, carbon credits, and biodiversity conservation in the Colombian Orinoquía.',
    'footer-services':'Services','footer-contact':'Contact','footer-privacy':'Privacy policy',
    'footer-copy':'© 2026 Fundación Forestar — All rights reserved',
    'cookie-title':'🍪 No tracking cookies',
    'cookie-text':'This site uses no advertising or analytics cookies. We only remember in your browser that you have seen this notice.',
    'cookie-link':'Privacy policy','cookie-acc':'Got it',
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


const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

document.getElementById('contactForm').addEventListener('submit', async e => {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('.btn-submit');
  const status = document.getElementById('formStatus');
  const orig = btn.textContent;
  btn.disabled = true;
  btn.textContent = lang === 'es' ? 'Enviando…' : 'Sending…';
  if (status) { status.textContent = ''; status.style.color = ''; }
  try {
    const data = new FormData(form);
    // Copia de las consultas de bonos de carbono a Relaciones Internacionales
    if (data.get('interes') === 'carbon') {
      data.append('_cc', 'camilomagurno12@gmail.com');
      data.set('_subject', '[BONOS] Consulta de bonos de carbono desde fundacionforestar.org');
    }
    const res = await fetch(form.action, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data
    });
    if (!res.ok) throw new Error('bad status: ' + res.status);
    btn.textContent = lang === 'es' ? '✅ ¡Mensaje enviado!' : '✅ Message sent!';
    btn.style.background = '#4a8c4a';
    setTimeout(() => { form.reset(); btn.textContent = orig; btn.style.background = ''; btn.disabled = false; }, 3500);
  } catch (err) {
    btn.textContent = orig;
    btn.style.background = '';
    btn.disabled = false;
    if (status) {
      status.style.color = '#c0392b';
      status.textContent = lang === 'es'
        ? '⚠️ No se pudo enviar. Escríbenos directo a contacto@fundacionforestar.org o por WhatsApp.'
        : '⚠️ Could not send. Please email contacto@fundacionforestar.org or WhatsApp us directly.';
    }
  }
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
  else if (tons <= 4728) { pkg='Juriepe'; emoji='🏞️'; priceUSD = lang === 'es' ? 'A convenir' : 'Price on request'; priceEUR='—'; priceCOP='—'; }
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
    { label:'Restauración de Ecosistemas', name:'Restauración Ecológica', img:'/img/fotos/servicio-restauracion.jpg', desc:'Programa completo de restauración ecológica en ecosistemas degradados de la Orinoquia colombiana. Utilizamos 12 especies nativas seleccionadas científicamente para recuperar la cobertura vegetal, el suelo y la biodiversidad.', includes:['Diagnóstico del suelo y estado del ecosistema','Selección de 12+ especies nativas del Orinoco','Siembra directa y transplante de plántulas','Control de erosión y compactación del suelo','Monitoreo de supervivencia y crecimiento','Reportes georeferenciados con coordenadas GPS','Cálculo de CO₂ capturado (metodología IPCC)'], audience:'Propietarios de predios rurales, empresas con obligaciones de compensación ambiental, entidades territoriales y organismos de cooperación internacional como EUROCLIMA+ y GEF/PNUD.', price:'Desde USD 4,200/ha', priceSub:'€4,070 · COP 18.1M por hectárea' },
    { label:'Mercado de Carbono', name:'Bonos de Carbono Gold Standard', img:'/img/fotos/servicio-bonos.jpg', desc:'Estructuración y comercialización de créditos de carbono en proceso de certificación bajo el estándar Gold Standard. Caño Juriepe tiene un potencial estimado de 31.5 tCO₂/ha, que será verificado por un auditor independiente.', includes:['Medición de biomasa forestal (metodología IPCC)','Cálculo de toneladas de CO₂ equivalente para verificación','Proceso de verificación Gold Standard internacional','Gestión del registro y expedición del certificado oficial al completar la verificación','Comercialización en mercados europeos y colombianos','Reporte de impacto ambiental y social anual'], audience:'Empresas con compromisos SBTi, corporaciones internacionales con metas net-zero, fondos de inversión ESG y compradores voluntarios de créditos de carbono.', price:'Desde USD 2,700', priceSub:'Paquetes: 100 · 300 · 600 · 3.151 tCO₂' },
    { label:'Responsabilidad Social Empresarial', name:'Compensación RSE', img:'/img/fotos/servicio-rse.jpg', desc:'Programa corporativo de adopción de árboles nativos en la Orinoquia colombiana. Cada árbol tiene coordenadas GPS, especie botánica registrada y seguimiento anual — con certificado personalizado para su empresa.', includes:['Adopción de árboles nativos con serial único','Certificado digital personalizado con logo corporativo','Coordenadas GPS del árbol en campo real','Fotografía de siembra y seguimiento anual','Reporte de impacto para memorias de sostenibilidad','Placa de reconocimiento en el área del proyecto'], audience:'Empresas con programas de RSE, multinacionales con metas ambientales corporativas y PYMEs que quieren demostrar compromiso ambiental verificable.', price:'Desde USD 45/árbol', priceSub:'€44 · COP 188,000 por árbol' },
    { label:'Apicultura Nativa', name:'Meliponicultura', img:'/img/fotos/servicio-meliponicultura.jpg', desc:'Establecimiento y manejo de colonias de abejas nativas sin aguijón de los llanos orientales. Meta de 400 colmenas en Caño Juriepe para polinización natural, miel y conservación de polinizadores.', includes:['Instalación de colmenas en madera nativa','Capacitación técnica en manejo de abejas sin aguijón','Seguimiento trimestral de las colonias','Producción de miel de abejas nativas','Servicios de polinización para cultivos aledaños','Rescate y relocalización de colonias silvestres'], audience:'Fincas rurales, proyectos de restauración ecológica, comunidades rurales e indígenas de Arauca y Casanare, investigadores de biodiversidad.', price:'Desde USD 255/colmena', priceSub:'€245 · COP 1,055,000 por colmena instalada' },
    { label:'Formación y Sensibilización', name:'Educación Ambiental', img:'/img/fotos/servicio-educacion.jpg', desc:'Talleres y programas educativos sobre conservación de ecosistemas, biodiversidad del Orinoco y adaptación al cambio climático, con enfoque práctico y vivencial adaptado al contexto llanero.', includes:['Talleres presenciales de 4 a 8 horas en campo','Material didáctico adaptado al contexto llanero','Recorridos de campo por ecosistemas nativos','Certificados de participación individuales','Módulo de identificación de especies nativas','Programas anuales de seguimiento comunitario'], audience:'Colegios y universidades de Arauca, comunidades rurales, empresas con programas de RSE ambiental y entidades gubernamentales.', price:'Desde USD 600/taller', priceSub:'€585 · COP 2.55M por taller de campo' },
    { label:'Turismo de Naturaleza', name:'Ecoturismo Científico', img:'/img/fotos/servicio-ecoturismo.jpg', desc:'Recorridos científicos guiados por los ecosistemas de Caño Juriepe y la Orinoquia colombiana. Observación de fauna silvestre, morichales y avifauna del llano con biólogo especialista.', includes:['Guía especializado — biólogo o ingeniero ambiental','Observación de aves, mamíferos y reptiles del llano','Recorrido por morichales y bosques de galería','Visita al proyecto de meliponicultura','Registro fotográfico del ecosistema','Informe de especies de biodiversidad observadas'], audience:'Investigadores, turistas de naturaleza, grupos universitarios, organizaciones ambientales y cooperantes europeos que visitan el proyecto.', price:'Desde USD 120/persona', priceSub:'€118 · COP 518,000 · grupos desde 4 personas' },
    { label:'Asesoría Técnica Ambiental', name:'Consultoría Ambiental', img:'/img/fotos/servicio-consultoria.jpg', desc:'Asesoría técnica especializada para el cumplimiento de la normatividad ambiental colombiana. EIA y PMA con gestión completa ante CORPORINOQUIA y el Ministerio de Ambiente.', includes:['Estudios de Impacto Ambiental (EIA)','Planes de Manejo Ambiental (PMA)','Gestión ante CORPORINOQUIA y MADS','Inventarios de flora y fauna para permisos','Due diligence ambiental para inversiones','Asesoría en compensaciones obligatorias','Monitoreo de cumplimiento normativo'], audience:'Empresas petroleras, proyectos agropecuarios e industriales, constructoras y entidades del Estado en la Orinoquia.', price:'Desde USD 1,650/mes', priceSub:'€1,590 · COP 7.03M — equipo con matrícula profesional' },
    { label:'Ciencia de Campo', name:'Investigación y Monitoreo', img:'/img/fotos/servicio-investigacion.jpg', desc:'Inventarios científicos de flora y fauna, monitoreo de biodiversidad a largo plazo y análisis de carbono en biomasa con metodología IPCC y bases de datos geo-referenciadas.', includes:['Inventarios florísticos y faunísticos completos','Monitoreo de aves, mamíferos, reptiles y anfibios','Análisis de carbono en biomasa aérea y subterránea','Muestreo y análisis físico-químico de suelos','Reportes científicos con mapas SIG','Bases de datos de biodiversidad geo-referenciadas'], audience:'Universidades, institutos de investigación, organismos GEF/PNUD/EUROCLIMA+, entidades ambientales y certificadoras Gold Standard.', price:'Desde USD 2,700/año', priceSub:'€2,600 · COP 11.5M por programa anual' }
  ],
  en: [
    { label:'Ecosystem Restoration', name:'Ecological Restoration', img:'/img/fotos/servicio-restauracion.jpg', desc:'Complete ecological restoration program in degraded ecosystems of the Colombian Orinoquía. We use 12 scientifically selected native species to recover plant cover, soil, and biodiversity.', includes:['Soil and ecosystem status diagnosis','Selection of 12+ native Orinoco species','Direct seeding and seedling transplanting','Erosion and soil compaction control','Survival and growth monitoring','GPS-georeferenced reports','CO₂ sequestration calculation (IPCC methodology)'], audience:'Rural landowners, companies with environmental compensation obligations, territorial entities, and international cooperation bodies such as EUROCLIMA+ and GEF/UNDP.', price:'From USD 4,200/ha', priceSub:'€4,070 · COP 18.1M per hectare' },
    { label:'Carbon Market', name:'Gold Standard Carbon Credits', img:'/img/fotos/servicio-bonos.jpg', desc:'Structuring and commercialization of carbon credits currently undergoing certification under the Gold Standard. Caño Juriepe has an estimated potential of 31.5 tCO₂/ha, to be verified by an independent auditor.', includes:['Forest biomass measurement (IPCC methodology)','Calculation of CO₂ equivalent tonnes for verification','International Gold Standard verification process','Management of registration and issuance of the official certificate once verification is complete','Commercialization in European and Colombian markets','Annual environmental and social impact report'], audience:'Companies with SBTi commitments, international corporations with net-zero goals, ESG investment funds, and voluntary carbon credit buyers.', price:'From USD 2,700', priceSub:'Packages: 100 · 300 · 600 · 3,151 tCO₂' },
    { label:'Corporate Social Responsibility', name:'CSR Compensation', img:'/img/fotos/servicio-rse.jpg', desc:'Corporate program for adopting native trees in the Colombian Orinoquía. Each tree has GPS coordinates, registered botanical species, and annual monitoring — with a personalized certificate for your company.', includes:['Native tree adoption with unique serial','Personalized digital certificate with corporate logo','GPS coordinates of the tree in the actual field','Planting photo and annual follow-up','Impact report for sustainability reports','Recognition plaque in the project area'], audience:'Companies with CSR programs, multinationals with corporate environmental goals, and SMEs that want to demonstrate verifiable environmental commitment.', price:'From USD 45/tree', priceSub:'€44 · COP 188,000 per tree' },
    { label:'Native Beekeeping', name:'Meliponiculture', img:'/img/fotos/servicio-meliponicultura.jpg', desc:'Establishment and management of stingless native bee colonies of the eastern plains. Target of 400 hives at Caño Juriepe for natural pollination, honey, and pollinator conservation.', includes:['Hive installation in native wood','Technical training in stingless bee management','Quarterly colony monitoring','Native bee honey production','Pollination services for surrounding crops','Rescue and relocation of wild colonies'], audience:'Rural farms, ecological restoration projects, rural and indigenous communities of Arauca and Casanare, and biodiversity researchers.', price:'From USD 255/hive', priceSub:'€245 · COP 1,055,000 per installed hive' },
    { label:'Training & Awareness', name:'Environmental Education', img:'/img/fotos/servicio-educacion.jpg', desc:'Educational workshops and programs on ecosystem conservation, Orinoco biodiversity, and climate change adaptation, with a practical and experiential approach adapted to the plains context.', includes:['4 to 8-hour in-field workshops','Teaching materials adapted to the plains context','Field tours through native ecosystems','Individual participation certificates','Native species identification module','Annual community follow-up programs'], audience:'Schools and universities in Arauca, rural communities, companies with environmental CSR programs, and government entities.', price:'From USD 600/workshop', priceSub:'€585 · COP 2.55M per field workshop' },
    { label:'Nature Tourism', name:'Scientific Ecotourism', img:'/img/fotos/servicio-ecoturismo.jpg', desc:'Scientific guided tours through the ecosystems of Caño Juriepe and the Colombian Orinoquía. Wildlife observation, morichales and plains birdlife with a specialist biologist.', includes:['Specialist guide — biologist or environmental engineer','Observation of birds, mammals, and reptiles of the plains','Tour through morichales and gallery forests','Visit to the meliponiculture project','Ecosystem photographic record','Biodiversity species observation report'], audience:'Researchers, nature tourists, university groups, environmental organizations, and European cooperants visiting the project.', price:'From USD 120/person', priceSub:'€118 · COP 518,000 · groups from 4 people' },
    { label:'Technical Environmental Advisory', name:'Environmental Consulting', img:'/img/fotos/servicio-consultoria.jpg', desc:'Specialized technical advisory for compliance with Colombian environmental regulations. EIA and EMP with complete management before CORPORINOQUIA and the Ministry of Environment.', includes:['Environmental Impact Studies (EIA)','Environmental Management Plans (EMP)','Management before CORPORINOQUIA and MADS','Flora and fauna inventories for permits','Environmental due diligence for investments','Advisory on mandatory compensations','Regulatory compliance monitoring'], audience:'Oil companies, agricultural and industrial projects, construction companies, and State entities in the Orinoquía.', price:'From USD 1,650/month', priceSub:'€1,590 · COP 7.03M — professionally licensed team' },
    { label:'Field Science', name:'Research & Monitoring', img:'/img/fotos/servicio-investigacion.jpg', desc:'Scientific flora and fauna inventories, long-term biodiversity monitoring, and biomass carbon analysis using IPCC methodology and geo-referenced databases.', includes:['Complete floristic and faunal inventories','Bird, mammal, reptile, and amphibian monitoring','Aerial and underground biomass carbon analysis','Soil physical-chemical sampling and analysis','Scientific reports with GIS maps','Geo-referenced biodiversity databases'], audience:'Universities, research institutes, GEF/UNDP/EUROCLIMA+ bodies, environmental entities, and Gold Standard certifiers.', price:'From USD 2,700/year', priceSub:'€2,600 · COP 11.5M per annual program' }
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
    localStorage.setItem(KEY, 'seen');
    banner.classList.remove('show');
  });
})();
