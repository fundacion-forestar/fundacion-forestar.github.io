"""Genera en/index.html (versión en inglés indexable) a partir de index.html.

Uso, desde la raíz del repositorio:
    python _herramientas/generar_en.py

Toma las traducciones del diccionario `t.en` de js/main.js (vía node) y,
para los textos que no tienen data-i18n, la tabla EXTRA de este archivo.
Volver a ejecutarlo cada vez que cambie index.html o las traducciones.
La carpeta _herramientas no se publica (GitHub Pages ignora carpetas con _).
"""
import html
import json
import os
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8")
RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(RAIZ)

t_en = json.loads(subprocess.run(
    ['node', '_herramientas/extraer_traducciones.js', 'js/main.js'],
    capture_output=True, text=True, encoding='utf-8', check=True).stdout)['en']

s = open('index.html', encoding='utf-8').read()

# 1. Elementos con data-i18n
faltan = []
def tr_i18n(m):
    abre, tag, clave, interior, cierra = m.group(1), m.group(2), m.group(3), m.group(4), m.group(5)
    if clave not in t_en:
        faltan.append(clave)
        return m.group(0)
    if '<' in interior:
        sys.exit(f'data-i18n="{clave}" contiene etiquetas internas; revisar a mano')
    return abre + html.escape(t_en[clave], quote=False) + cierra
s = re.sub(r'(<(\w+)\b[^>]*\bdata-i18n="([^"]+)"[^>]*>)(.*?)(</\2>)', tr_i18n, s, flags=re.S)
if faltan:
    sys.exit('Claves sin traducción: ' + ', '.join(faltan))

# 2. Textos sin data-i18n (texto exacto del nodo o del atributo)
EXTRA = {
    'EUROCLIMA+ · Unión Europea': 'EUROCLIMA+ · European Union',
    'PPD Colombia · GEF / PNUD': 'PPD Colombia · GEF / UNDP',
    'Desde': 'From',
    'Ver detalle': 'See details',
    'USD 4,200/ha': 'USD 4,200/ha',
    'USD 45/árbol': 'USD 45/tree',
    'USD 255/colmena': 'USD 255/hive',
    'USD 600/taller': 'USD 600/workshop',
    'USD 120/persona': 'USD 120/person',
    'USD 1,650/mes': 'USD 1,650/month',
    'USD 2,700/año': 'USD 2,700/year',
    # Especies: nombres comunes
    'Moriche': 'Moriche palm',
    'Palma de vino': 'Wine palm (Palma de vino)',
    'Cedro rosado': 'Spanish cedar (Cedro)',
    'Caoba': 'Big-leaf mahogany (Caoba)',
    'Guayacán amarillo': 'Yellow trumpet tree (Guayacán)',
    'Ocobo / Roble morado': 'Pink trumpet tree (Ocobo)',
    'Aceite de palo / Copaíba': 'Copaiba (Aceite de palo)',
    'Higuerón': 'Wild fig (Higuerón)',
    'Jagua / Guaitoto': 'Genipap (Jagua)',
    'Trébol': 'Trébol',
    'Alcornoque': 'Sucupira (Alcornoque)',
    'Varasanta / Tangaré': 'Ant tree (Varasanta)',
    # Especies: descripciones
    'Palmera emblemática del llano, eje del ecosistema morichal y símbolo de la Orinoquia.':
        'Emblematic palm of the Llanos, backbone of the morichal wetland ecosystem and a symbol of the Orinoquía.',
    'Palmera nativa de sabanas y vegas, fuente esencial de alimento para fauna silvestre.':
        'Native palm of savannas and floodplains, an essential food source for wildlife.',
    'Especie maderable amenazada, clave en restauración por su alto valor ecológico y carbono.':
        'Threatened timber species, key to restoration for its high ecological and carbon value.',
    'La madera más valiosa del bosque tropical. En peligro de extinción. Alta prioridad de conservación.':
        'The most prized timber of the tropical forest. Endangered. High conservation priority.',
    'Árbol ornamental de flores amarillas espectaculares, madera muy dura y néctar para polinizadores.':
        'Ornamental tree with spectacular yellow flowers, very hard wood and nectar for pollinators.',
    'Árbol ornamental de flores rosas y madera apreciada. Especie de ribera y galería.':
        'Ornamental tree with pink flowers and prized wood. A riparian and gallery-forest species.',
    'Árbol medicinal cuya resina es usada en apicultura y medicina tradicional llanera.':
        'Medicinal tree whose resin is used in beekeeping and traditional Llanos medicine.',
    'Árbol de ribera fundamental para restaurar caños y ríos. Alimento clave para fauna.':
        'Riparian tree essential for restoring streams and rivers. A key food source for wildlife.',
    'Frutal nativo multipropósito: colorante natural, medicinal y alimento para fauna silvestre.':
        'Multipurpose native fruit tree: natural dye, medicine and food for wildlife.',
    'Maderable fino nativo apreciado en artesanía y construcción. Alta densidad de madera.':
        'Fine native timber valued in crafts and construction. High wood density.',
    'Árbol resistente a incendios y sabanas inundables. Especie pionera ideal en restauración.':
        'Tree resistant to fire and to flooded savannas. A pioneer species ideal for restoration.',
    'Árbol de ribera de crecimiento rápido, flores blancas y alta producción de néctar.':
        'Fast-growing riparian tree with white flowers and high nectar production.',
    # Especies: etiquetas
    'Morichal': 'Morichal', 'Fauna': 'Wildlife', 'Carbono': 'Carbon', 'Restauración': 'Restoration',
    'Sombra': 'Shade', 'Maderable': 'Timber', 'Amenazada': 'Threatened', 'Néctar': 'Nectar',
    'Ribera': 'Riparian', 'Apicultura': 'Beekeeping', 'Frutal': 'Fruit tree', 'Nativa': 'Native',
    'Pionera': 'Pioneer',
    # Proyecto
    'Propuesta EUROCLIMA+ (UE)': 'EUROCLIMA+ proposal (EU)',
    'Gold Standard (en certificación)': 'Gold Standard (certification in progress)',
    'Propuesta PPD Colombia — GEF / PNUD': 'PPD Colombia proposal — GEF / UNDP',
    'tCO₂/año': 'tCO₂/year',
    # Equipo
    'Ingeniera Agrónoma — Universidad de los Llanos': 'Agronomist — Universidad de los Llanos',
    'Administradora · Magíster UNIR Madrid': "Business administrator · Master's degree, UNIR Madrid",
    'Ingeniero Civil · Especialista Gerencia Estratégica': 'Civil engineer · Specialist in strategic management',
    # Contacto
    'PIC UE: 864005482': 'EU PIC: 864005482',
    '¡Escríbenos ahora!': 'Write to us now!',
    # Atributos (alt, placeholder, aria-label)
    'Abrir menú': 'Open menu',
    'Apiario de Fundación Forestar en la Orinoquia colombiana': 'Fundación Forestar apiary in the Colombian Orinoquía',
    'Restauración Ecológica': 'Ecological restoration',
    'Bonos de Carbono': 'Carbon credits',
    'Compensación RSE': 'CSR offsetting',
    'Meliponicultura': 'Meliponiculture',
    'Educación Ambiental': 'Environmental education',
    'Ecoturismo Científico': 'Scientific ecotourism',
    'Consultoría Ambiental': 'Environmental consulting',
    'Investigación y Monitoreo': 'Research and monitoring',
    'Proyecto Caño Juriepe': 'Caño Juriepe project',
    'Proyecto Caño Juriepe — Cravo Norte, Arauca, Colombia': 'Caño Juriepe project — Cravo Norte, Arauca, Colombia',
    'ej. 3.500': 'e.g. 3,500',
    'Tu nombre': 'Your name',
    'Tu empresa': 'Your company',
    'tu@correo.com': 'you@company.com',
    '+57 o +39': '+57 or +39',
    'Cuéntanos sobre tu proyecto...': 'Tell us about your project...',
    'Cerrar': 'Close',
    'Contactar por WhatsApp': 'Contact us on WhatsApp',
    'Aviso de cookies': 'Cookie notice',
}

cuerpo_i = s.find('<body')
cab, cuerpo = s[:cuerpo_i], s[cuerpo_i:]

def tr_texto(m):
    crudo = m.group(1)
    limpio = html.unescape(crudo.strip())
    if limpio in EXTRA:
        return '>' + crudo.replace(crudo.strip(), html.escape(EXTRA[limpio], quote=False)) + '<'
    return m.group(0)
# no tocar scripts ni svg
partes = re.split(r'(<script.*?</script>|<svg.*?</svg>)', cuerpo, flags=re.S)
for i in range(0, len(partes), 2):
    partes[i] = re.sub(r'>([^<]+)<', tr_texto, partes[i])
    partes[i] = re.sub(r'\b(alt|placeholder|aria-label)="([^"]+)"',
                       lambda m: f'{m.group(1)}="{html.escape(EXTRA.get(html.unescape(m.group(2)), html.unescape(m.group(2))))}"',
                       partes[i])
cuerpo = ''.join(partes)

# 3. Selector de idioma: en la versión inglesa lleva a la española
cuerpo = cuerpo.replace(
    '<a class="btn-lang" id="langBtn" href="/en/" hreflang="en" lang="en" title="Switch to English">EN</a>',
    '<a class="btn-lang" id="langBtn" href="/" hreflang="es" lang="es" title="Ver en español">ES</a>')

# 4. WhatsApp con mensaje en inglés
cuerpo = re.sub(r'(wa\.me/\d+\?text=)[^"]+',
                lambda m: m.group(1) + 'Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Fundaci%C3%B3n%20Forestar%27s%20services.%20Could%20you%20send%20me%20information%3F',
                cuerpo)

# 5. Cabecera: idioma, metadatos y datos estructurados
def meta(attr, nombre, valor):
    global cab
    patron = re.compile(r'(<meta\s+' + attr + r'="' + re.escape(nombre) + r'"\s+content=")[^"]*(")')
    cab, n = patron.subn(lambda m: m.group(1) + html.escape(valor) + m.group(2), cab)
    if n != 1:
        sys.exit(f'meta {nombre}: {n} coincidencias')

cab = cab.replace('<html lang="es">', '<html lang="en">', 1)
cab = re.sub(r'<title>.*?</title>',
             '<title>Fundación Forestar — Ecological Restoration & Carbon Credits pursuing Gold Standard | Colombia</title>', cab, count=1)
meta('name', 'description', 'Fundación Forestar: ecological restoration and carbon credits pursuing Gold Standard certification, biodiversity conservation in the Colombian Orinoquía. 150 hectares under a loan-for-use agreement for restoration and 4,728 tCO₂ estimated.')
meta('name', 'keywords', 'carbon credits Colombia, ecological restoration Orinoquia, Gold Standard carbon credits, nature-based carbon removal, SBTi BVCM, biodiversity conservation Colombia')
meta('property', 'og:title', 'Fundación Forestar — Ecological Restoration & Carbon Credits | Colombia')
meta('property', 'og:description', '150 hectares under restoration and 4,728 tCO₂ estimated — project pursuing Gold Standard certification. Colombian Orinoquía. Climate action with real nature.')
meta('property', 'og:image:alt', 'Fundación Forestar apiary in the Colombian Orinoquía')
meta('property', 'og:url', 'https://fundacionforestar.org/en/')
meta('property', 'og:locale', 'en_US')
meta('property', 'og:locale:alternate', 'es_CO')
meta('name', 'twitter:title', 'Fundación Forestar — Carbon Credits pursuing Gold Standard, Colombia')
meta('name', 'twitter:description', '150 ha under restoration · 4,728 tCO₂ estimated · Colombian Orinoquía')
cab = cab.replace('<link rel="canonical" href="https://fundacionforestar.org/">',
                  '<link rel="canonical" href="https://fundacionforestar.org/en/">', 1)
cab = re.sub(r'"description": "[^"]*"',
             '"description": "Non-profit foundation dedicated to ecological restoration, carbon credits pursuing Gold Standard certification and biodiversity conservation in the Colombian Orinoquía since 2018."',
             cab, count=1)
cab = cab.replace('"url": "https://fundacionforestar.org",', '"url": "https://fundacionforestar.org/en/",', 1)

s = cab + cuerpo

# 6. Rutas: la página vive en /en/, todo pasa a rutas absolutas
s = re.sub(r'(href|src)="(css/|js/|img/|favicon\.svg)', r'\1="/\2', s)
s = s.replace('href="privacidad.html"', 'href="/privacidad.html#en"')
s = s.replace('href="condiciones-reserva.html"', 'href="/condiciones-reserva.html#en"')

os.makedirs('en', exist_ok=True)
open('en/index.html', 'w', encoding='utf-8', newline='\n').write(s)

# Control: textos españoles que quedaron sin traducir
visibles = re.sub(r'<script.*?</script>|<svg.*?</svg>|<head>.*?</head>', '', s, flags=re.S)
sospechosos = sorted({html.unescape(x.strip()) for x in re.findall(r'>([^<]+)<', visibles)
                      if re.search(r'[áéíóúñ¿¡]|\b(de|del|los|las|para|con|nuestro|nuestra)\b', x)})
print('en/index.html generado.')
if sospechosos:
    print('Revisar (posible español sin traducir):')
    for x in sospechosos:
        print('  -', x[:100])
