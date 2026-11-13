/* PRISA MEMORY CHALLENGE · DEMO · JavaScript puro, sin almacenamiento ni envío de datos */
(() => {
'use strict';

/* ============ 1. BANCO DE 15 ANUNCIOS ============
   d: E=fácil(100) M=media(200) H=difícil(300) X=experta(500)
   Cada pregunta: q (texto), a (correcta), o (3 distractores). Ampliable libremente. */
const SIM = 'Simulación publicitaria · Demo';
const ADS = [
 { id:1, nombre:'Maluma World Tour 2027 · Loco x Volver', marcas:['Visa'], marcasSecundarias:['Bancolombia','Nequi','Tuboleta','Fenix'],
   tipo:'concierto', colores:['rojo','crema'], obligatorio:true,
   detallesVisibles:['Visa presenta','Loco x Volver','Maluma','World Tour 2027','Bogotá','Viernes 5, Febrero','El Corazón de Bogotá - Arena','Preventa exclusiva Bancolombia · Nequi','Entradas Tuboleta','Fenix Entertainment'],
   arte:{t:'img', src:'assets/maluma-visa.jpg'},
   preguntas:[
    {d:'E', q:'¿Qué artista aparecía en uno de los anuncios?', a:'Maluma', o:['J Balvin','Karol G','Feid']},
    {d:'E', q:'¿En qué ciudad era el concierto de Maluma?', a:'Bogotá', o:['Medellín','Cali','Barranquilla']},
    {d:'M', q:'¿Qué marca presentaba la gira del artista en el afiche?', a:'Visa', o:['Mastercard','American Express','Davivienda']},
    {d:'M', q:'¿Qué color de fondo tenía el afiche de Maluma?', a:'Rojo', o:['Azul','Negro','Verde']},
    {d:'H', q:'¿Qué día figuraba en el afiche de Maluma?', a:'Viernes 5 de febrero', o:['Sábado 6 de febrero','Viernes 12 de febrero','Domingo 7 de febrero']},
    {d:'H', q:'¿Qué nombre aparecía sobre "Maluma" en el afiche?', a:'Loco x Volver', o:['Papi Juancho','Don Juan','Medallo en el mapa']},
    {d:'X', q:'¿Qué escenario figuraba en la publicidad de Maluma?', a:'El Corazón de Bogotá - Arena', o:['Estadio El Campín','Movistar Arena','Coliseo El Pueblo']},
    {d:'X', q:'¿Qué banco tenía la preventa exclusiva en el afiche de Maluma?', a:'Bancolombia', o:['Davivienda','Banco de Bogotá','BBVA']},
    {d:'X', q:'¿Qué marca vendía las entradas del concierto de Maluma?', a:'Tuboleta', o:['Ticketmaster','Eticket','Taquilla Live']}
 ]},
 { id:2, nombre:'Coca-Cola · Sabor bien frío', marcas:['Coca-Cola'], marcasSecundarias:[], tipo:'bebidas', colores:['rojo','blanco'],
   detallesVisibles:['Destapa un sabor bien frío','Edición Verano','Botella de vidrio 350 ml'],
   arte:{t:'single', bg:'radial-gradient(120% 90% at 50% 30%,#ff2d2d,#c4000b 55%,#6d0006)', wm:'Coca-Cola', wc:'script', hl:'Destapa un sabor bien frío', visual:'🥤', badges:['Edición Verano','*Botella de vidrio 350 ml']},
   preguntas:[
    {d:'E', q:'¿Qué marca de gaseosa tenía un anuncio rojo con una botella?', a:'Coca-Cola', o:['Postobón','Big Cola','Colombiana']},
    {d:'M', q:'¿Qué titular tenía el anuncio de Coca-Cola?', a:'Destapa un sabor bien frío', o:['Sabor que une','Siente el sabor clásico','Vive lo refrescante']},
    {d:'H', q:'¿Qué tamaño de botella indicaba el anuncio de Coca-Cola?', a:'350 ml', o:['250 ml','500 ml','1,5 litros']},
    {d:'X', q:'¿Qué etiqueta destacada mostraba el anuncio de Coca-Cola?', a:'Edición Verano', o:['Edición Mundial','Edición Navidad','Edición Limitada']}
 ]},
 { id:3, nombre:'Samsung · Fotos de noche', marcas:['Samsung'], marcasSecundarias:[], tipo:'tecnología', colores:['morado','azul noche'],
   detallesVisibles:['Fotos que brillan de noche','Cámara 200 MP','smartphone'],
   arte:{t:'single', bg:'linear-gradient(160deg,#2a0f6b,#5b2bd6 50%,#120638)', wm:'SAMSUNG', wc:'wide', hl:'Fotos que brillan de noche', visual:'📱', badges:['*Cámara 200 MP','Modo nocturno']},
   preguntas:[
    {d:'E', q:'¿Qué marca anunciaba un smartphone sobre fondo morado?', a:'Samsung', o:['Xiaomi','Motorola','Huawei']},
    {d:'M', q:'¿Qué color predominaba en el anuncio de Samsung?', a:'Morado', o:['Rojo','Verde','Naranja']},
    {d:'H', q:'¿Qué resolución de cámara destacaba el anuncio de Samsung?', a:'200 MP', o:['50 MP','64 MP','108 MP']},
    {d:'X', q:'¿Qué titular tenía el anuncio de Samsung?', a:'Fotos que brillan de noche', o:['La noche es tuya','Captura cada estrella','Más luz, más vida']}
 ]},
 { id:4, nombre:'Spotify · Tu playlist', marcas:['Spotify'], marcasSecundarias:[], tipo:'música', colores:['negro','verde'],
   detallesVisibles:['Tu playlist del día está lista','Mix Bogotá Nocturno','audífonos'],
   arte:{t:'single', bg:'linear-gradient(170deg,#1ed760 0%,#0f7a37 30%,#0b0b0b 62%)', wm:'Spotify', wc:'', hl:'Tu playlist del día está lista', visual:'🎧', badges:['*Mix Bogotá Nocturno','Escucha sin anuncios']},
   preguntas:[
    {d:'E', q:'¿Qué marca de música por streaming apareció en los anuncios?', a:'Spotify', o:['Deezer','YouTube Music','Tidal']},
    {d:'M', q:'¿Qué color de acento predominaba en el anuncio de Spotify?', a:'Verde', o:['Rojo','Azul','Amarillo']},
    {d:'H', q:'¿Qué playlist mostraba el anuncio de Spotify?', a:'Mix Bogotá Nocturno', o:['Mix Medellín Urbano','Top Colombia','Ruta Caribe']},
    {d:'X', q:'¿Qué titular tenía el anuncio de Spotify?', a:'Tu playlist del día está lista', o:['Dale play a tu día','Tu música, tu ritmo','La banda sonora de hoy']}
 ]},
 { id:5, nombre:"McDonald's · Combo de medianoche", marcas:["McDonald's"], marcasSecundarias:[], tipo:'comida rápida', colores:['rojo','amarillo'],
   detallesVisibles:['Combo de medianoche','$19.900','Desde las 10 p.m.','hamburguesa'],
   arte:{t:'single', bg:'linear-gradient(165deg,#ffc72c 0%,#ffb000 38%,#d81e05 39%,#a50f00)', fg:'#fff', wm:"McDonald's", wc:'', hl:'Combo de medianoche', visual:'🍔', badges:['*$19.900','Desde las 10 p.m.']},
   preguntas:[
    {d:'E', q:'¿Qué marca anunciaba una hamburguesa?', a:"McDonald's", o:['Burger King','El Corral','Presto']},
    {d:'M', q:"¿Qué producto principal mostraba el anuncio de McDonald's?", a:'Hamburguesa', o:['Pizza','Pollo frito','Helado']},
    {d:'H', q:"¿Qué precio mostraba el anuncio de McDonald's?", a:'$19.900', o:['$14.900','$24.900','$29.900']},
    {d:'X', q:"¿Desde qué hora aplicaba el combo de McDonald's?", a:'Desde las 10 p.m.', o:['Desde las 8 p.m.','Desde las 11 p.m.','Desde la medianoche']}
 ]},
 { id:6, nombre:'Avianca · Vuela a Cartagena', marcas:['Avianca'], marcasSecundarias:[], tipo:'viajes', colores:['rojo','blanco','azul cielo'],
   detallesVisibles:['Vuela a Cartagena','Bogotá → Cartagena','Salidas diarias','avión'],
   arte:{t:'single', bg:'linear-gradient(180deg,#5ec8ff 0%,#2a8fe0 45%,#e3262e 46%,#a3121a)', wm:'avianca', wc:'', hl:'Vuela a Cartagena', visual:'✈️', badges:['*Bogotá → Cartagena','Salidas diarias']},
   preguntas:[
    {d:'E', q:'¿Qué marca aparecía en el anuncio relacionado con viajes?', a:'Avianca', o:['LATAM','Viva','Copa Airlines']},
    {d:'M', q:'¿A qué destino invitaba a volar el anuncio de Avianca?', a:'Cartagena', o:['San Andrés','Santa Marta','Medellín']},
    {d:'H', q:'¿Desde qué ciudad salía la ruta del anuncio de Avianca?', a:'Bogotá', o:['Cali','Medellín','Barranquilla']},
    {d:'X', q:'¿Qué frecuencia de vuelos anunciaba Avianca?', a:'Salidas diarias', o:['Fines de semana','Dos veces por semana','Solo festivos']}
 ]},
 { id:7, nombre:'Adidas · Corre la ciudad', marcas:['Adidas'], marcasSecundarias:[], tipo:'deporte', colores:['negro','blanco'],
   detallesVisibles:['Corre la ciudad','Bogotá 10K','tres franjas','tenis'],
   arte:{t:'single', bg:'linear-gradient(160deg,#2b2b2b,#000 60%)', wm:'adidas', wc:'stripes', hl:'Corre la ciudad', visual:'👟', badges:['*Bogotá 10K','Running']},
   preguntas:[
    {d:'E', q:'¿Qué producto se anunciaba en la pieza de Adidas?', a:'Tenis', o:['Balón','Gorra','Maleta']},
    {d:'M', q:'¿Qué titular tenía el anuncio de Adidas?', a:'Corre la ciudad', o:['Nada nos detiene','Rompe tus límites','Juega sin miedo']},
    {d:'H', q:'¿Qué carrera mencionaba el anuncio de Adidas?', a:'Bogotá 10K', o:['Medellín 21K','Cali 15K','Bogotá 5K']},
    {d:'X', q:'¿Cuántas franjas aparecían junto a la marca Adidas?', a:'3', o:['2','4','5']}
 ]},
 { id:8, nombre:'Rappi · Antojo en minutos', marcas:['Rappi'], marcasSecundarias:[], tipo:'domicilios', colores:['naranja'],
   detallesVisibles:['Tu antojo llega en minutos','Envío en 15 min','moto'],
   arte:{t:'single', bg:'linear-gradient(160deg,#ff7a45,#ff441f 50%,#c92a0c)', wm:'Rappi', wc:'', hl:'Tu antojo llega en minutos', visual:'🛵', badges:['*Envío en 15 min','24 horas']},
   preguntas:[
    {d:'E', q:'¿Qué marca de domicilios tenía un anuncio con una moto?', a:'Rappi', o:['iFood','DiDi Food','Uber Eats']},
    {d:'M', q:'¿Qué color predominaba en el anuncio de Rappi?', a:'Naranja', o:['Morado','Verde','Azul']},
    {d:'H', q:'¿En cuántos minutos prometía el envío el anuncio de Rappi?', a:'15 minutos', o:['10 minutos','20 minutos','30 minutos']},
    {d:'X', q:'¿Qué titular tenía el anuncio de Rappi?', a:'Tu antojo llega en minutos', o:['Pide y disfruta','Todo llega a tu puerta','Lo quieres, lo tienes']}
 ]},
 { id:9, nombre:'Netflix · Maratón', marcas:['Netflix'], marcasSecundarias:[], tipo:'entretenimiento', colores:['negro','rojo'],
   detallesVisibles:['Maratón de fin de semana','Estrenos cada viernes','crispetas'],
   arte:{t:'single', bg:'radial-gradient(90% 70% at 50% 100%,#6b0008,#141414 60%,#000)', wm:'NETFLIX', wc:'nflx', hl:'Maratón de fin de semana', visual:'🍿', badges:['*Estrenos cada viernes','Top 10 hoy']},
   preguntas:[
    {d:'E', q:'¿Qué plataforma de streaming de series apareció?', a:'Netflix', o:['Disney+','Prime Video','Max']},
    {d:'M', q:'¿Qué snack aparecía en el anuncio de Netflix?', a:'Crispetas', o:['Pizza','Helado','Papas fritas']},
    {d:'H', q:'¿Qué día de estrenos mencionaba el anuncio de Netflix?', a:'Viernes', o:['Lunes','Miércoles','Domingo']},
    {d:'X', q:'¿Qué titular tenía el anuncio de Netflix?', a:'Maratón de fin de semana', o:['Noche de series','Tu próxima obsesión','Una más y a dormir']}
 ]},
 { id:10, nombre:'Alpina · Yogurt de fresa', marcas:['Alpina'], marcasSecundarias:[], tipo:'alimentos', colores:['azul claro','blanco','rosado'],
   detallesVisibles:['Empieza el día con yogurt','Sabor fresa','Sin azúcar añadida'],
   arte:{t:'single', bg:'linear-gradient(170deg,#e9f6ff,#9fd6ff 55%,#ff8fb1)', fg:'#0a2a6b', wm:'Alpina', wc:'script', hl:'Empieza el día con yogurt', visual:'🍓', badges:['*Sabor fresa','Sin azúcar añadida']},
   preguntas:[
    {d:'E', q:'¿Qué marca de lácteos apareció en los anuncios?', a:'Alpina', o:['Colanta','Alquería','Parmalat']},
    {d:'M', q:'¿De qué sabor era el yogurt del anuncio de Alpina?', a:'Fresa', o:['Mora','Melocotón','Vainilla']},
    {d:'H', q:'¿Qué beneficio destacaba el anuncio de Alpina?', a:'Sin azúcar añadida', o:['Con cereal','Extra proteína','Deslactosado']},
    {d:'X', q:'¿Qué titular tenía el anuncio de Alpina?', a:'Empieza el día con yogurt', o:['Nutre tu mañana','Sabor que alimenta','Lo natural primero']}
 ]},
 { id:11, nombre:'Claro · Más gigas', marcas:['Claro'], marcasSecundarias:[], tipo:'telecomunicaciones', colores:['rojo','blanco'],
   detallesVisibles:['Más gigas para tu plan','5G','40 GB'],
   arte:{t:'single', bg:'linear-gradient(160deg,#ff3b30,#da291c 50%,#8f0f07)', wm:'Claro', wc:'', hl:'Más gigas para tu plan', visual:'📶', badges:['*40 GB','Red 5G']},
   preguntas:[
    {d:'E', q:'¿Qué operador de telefonía apareció en los anuncios?', a:'Claro', o:['Movistar','Tigo','WOM']},
    {d:'M', q:'¿Qué tecnología de red mencionaba el anuncio de Claro?', a:'5G', o:['4G','6G','LTE+']},
    {d:'H', q:'¿Cuántas gigas destacaba el anuncio de Claro?', a:'40 GB', o:['20 GB','30 GB','50 GB']},
    {d:'X', q:'¿Qué titular tenía el anuncio de Claro?', a:'Más gigas para tu plan', o:['Conéctate sin límites','Siempre en línea','Navega a toda velocidad']}
 ]},
 { id:12, nombre:'Vitrina running: Nike y Adidas', marcas:['Nike','Adidas'], marcasSecundarias:[], tipo:'deporte · multimarca', colores:['naranja','negro'],
   detallesVisibles:['Vitrina running: elige tu estilo','Nike a la izquierda (naranja)','Adidas a la derecha','Calzado para correr'],
   arte:{t:'split', hdr:'Vitrina running: elige tu estilo', ftr:'Calzado para correr', vs:'VS', sides:[
     {bg:'linear-gradient(160deg,#ff9a3d,#ff6a00)', wm:'NIKE', wc:'swoosh', visual:'👟', small:'Ligereza'},
     {bg:'linear-gradient(160deg,#2a2a2a,#000)', wm:'adidas', wc:'stripes', visual:'👟', small:'Amortiguación'}]},
   preguntas:[
    {d:'E', q:'¿Qué dos marcas deportivas compartían un mismo anuncio?', a:'Nike y Adidas', o:['Puma y Reebok','Nike y Puma','Adidas y Fila']},
    {d:'M', q:'¿Qué categoría comparaba la vitrina de Nike y Adidas?', a:'Calzado para correr', o:['Fútbol','Baloncesto','Tenis de campo']},
    {d:'H', q:'¿Qué marca aparecía a la izquierda en la vitrina running?', a:'Nike', o:['Adidas','Puma','Reebok']},
    {d:'X', q:'¿De qué color era el lado de Nike en la vitrina running?', a:'Naranja', o:['Verde','Rojo','Blanco']}
 ]},
 { id:13, nombre:'Duelo de cámaras: Apple y Samsung', marcas:['Apple','Samsung'], marcasSecundarias:[], tipo:'tecnología · multimarca', colores:['plateado','azul'],
   detallesVisibles:['Duelo de cámaras','Apple a la izquierda','Samsung a la derecha','Smartphones','VS'],
   arte:{t:'split', hdr:'Duelo de cámaras', ftr:'Categoría: smartphones', vs:'VS', sides:[
     {bg:'linear-gradient(160deg,#f5f5f7,#b9bcc4)', fg:'#111', wm:'Apple', wc:'', visual:'📱', small:'Izquierda'},
     {bg:'linear-gradient(160deg,#2b6bff,#0a2a8f)', wm:'SAMSUNG', wc:'wide', visual:'📱', small:'Derecha'}]},
   preguntas:[
    {d:'E', q:'¿Qué tipo de producto comparaba el duelo de Apple y Samsung?', a:'Smartphones', o:['Portátiles','Relojes','Audífonos']},
    {d:'M', q:'¿Qué titular tenía la publicidad de tecnología con dos marcas?', a:'Duelo de cámaras', o:['Batalla de pantallas','Choque de baterías','Reto de velocidad']},
    {d:'H', q:'¿Qué marca aparecía junto a Apple en la publicidad de tecnología?', a:'Samsung', o:['Xiaomi','Huawei','Motorola']},
    {d:'X', q:'¿Qué marca estaba a la derecha en el duelo de cámaras?', a:'Samsung', o:['Apple','Xiaomi','Google']}
 ]},
 { id:14, nombre:'El clásico de las colas: Coca-Cola y Pepsi', marcas:['Coca-Cola','Pepsi'], marcasSecundarias:[], tipo:'bebidas · multimarca', colores:['rojo','azul'],
   detallesVisibles:['El clásico de las colas','Prueba a ciegas','¿Cuál prefieres?','Pepsi lado azul'],
   arte:{t:'split', hdr:'El clásico de las colas', ftr:'Prueba a ciegas · ¿Cuál prefieres?', vs:'VS', sides:[
     {bg:'linear-gradient(160deg,#ff2d2d,#b0000a)', wm:'Coca-Cola', wc:'script', visual:'🥤', small:'Rojo'},
     {bg:'linear-gradient(160deg,#2f7bff,#00248f)', wm:'pepsi', wc:'', visual:'🥤', small:'Azul'}]},
   preguntas:[
    {d:'E', q:'¿Qué dos marcas de gaseosa compartían un anuncio?', a:'Coca-Cola y Pepsi', o:['Coca-Cola y Postobón','Pepsi y Postobón','Pepsi y Big Cola']},
    {d:'M', q:'¿Qué pregunta aparecía en el anuncio de Coca-Cola y Pepsi?', a:'¿Cuál prefieres?', o:['¿Cuál es más fría?','¿Cuál es más dulce?','¿Cuál compartes?']},
    {d:'H', q:'¿De qué color era el lado de Pepsi?', a:'Azul', o:['Rojo','Negro','Verde']},
    {d:'X', q:'¿Qué tipo de prueba proponía el clásico de las colas?', a:'Prueba a ciegas', o:['Prueba de frío','Prueba de burbujas','Prueba de aroma']}
 ]},
 { id:15, nombre:'Compra hoy: Mercado Libre y Rappi', marcas:['Mercado Libre','Rappi'], marcasSecundarias:[], tipo:'comercio · multimarca', colores:['amarillo','naranja'],
   detallesVisibles:['Compra hoy, recibe hoy','Mercado Libre arriba (amarillo)','Rappi abajo','paquete'],
   arte:{t:'split', stack:true, hdr:'Compra hoy, recibe hoy', ftr:'Categoría: entregas', vs:'+', sides:[
     {bg:'linear-gradient(160deg,#fff159,#ffe600)', fg:'#2d3277', wm:'Mercado Libre', wc:'', visual:'📦', small:'Compras en línea'},
     {bg:'linear-gradient(160deg,#ff7a45,#ff441f)', wm:'Rappi', wc:'', visual:'🛵', small:'Domicilios'}]},
   preguntas:[
    {d:'E', q:'¿Qué marca de comercio electrónico aparecía con fondo amarillo?', a:'Mercado Libre', o:['Amazon','Falabella','Linio']},
    {d:'M', q:'¿Qué marca aparecía junto a Mercado Libre?', a:'Rappi', o:['iFood','DiDi Food','Uber Eats']},
    {d:'H', q:'¿Qué titular tenía el anuncio de Mercado Libre y Rappi?', a:'Compra hoy, recibe hoy', o:['Todo en un clic','Pide sin salir','Envíos sin límites']},
    {d:'X', q:'¿Qué marca aparecía en la parte superior de ese anuncio?', a:'Mercado Libre', o:['Rappi','Amazon','Falabella']}
 ]}
];

/* Alias para normalizar respuestas abiertas */
const ALIAS = {
  'Visa':['visa'], 'Coca-Cola':['cocacola','coca','coke','cocacolazero'], 'Samsung':['samsung','samsumg','samgsung','galaxy'],
  'Spotify':['spotify','spotyfi','spoti'], "McDonald's":['mcdonalds','mcdonald','mcdonals','macdonalds','mc','mcd','mcdo','mcdonnalds'],
  'Avianca':['avianca'], 'Adidas':['adidas','addidas'], 'Rappi':['rappi','rapi'], 'Netflix':['netflix','netflis','netflx'],
  'Alpina':['alpina'], 'Claro':['claro'], 'Nike':['nike','naik'], 'Apple':['apple','iphone','aple'], 'Pepsi':['pepsi'],
  'Bancolombia':['bancolombia','bancolombi'], 'Nequi':['nequi','neki'], 'Tuboleta':['tuboleta'], 'Fenix':['fenix','fenixentertainment'],
  'Mercado Libre':['mercadolibre','mercadolibr','meli','mercadolivre']
};
const PTS = {E:100,M:200,H:300,X:500};
const DIFF = {E:'FÁCIL',M:'MEDIA',H:'DIFÍCIL',X:'EXPERTA'};
const PLAN = ['E','M','M','H','H','X']; // 6 retos de precisión: 100+400+600+500 = 1.600
const EXPO = 8000; // ms por anuncio
const MAXSCORE = 300 + 300 + PLAN.reduce((s,d) => s + ({E:100,M:200,H:300,X:500})[d], 0); // 2.200
const RANK = [
  {n:'NeonMemo',c:'Medellín',s:2100,x:1,h:2,t:48.4},{n:'Valen_23',c:'Bogotá',s:1900,x:1,h:2,t:55.2},
  {n:'ElCaleño',c:'Cali',s:1700,x:1,h:1,t:44.9},{n:'Luchito',c:'Barranquilla',s:1700,x:1,h:1,t:51.0},
  {n:'Mafe.Rec',c:'Bucaramanga',s:1500,x:0,h:2,t:58.3},{n:'JuanPa',c:'Pereira',s:1300,x:1,h:0,t:62.1},
  {n:'Sofi',c:'Cartagena',s:1100,x:0,h:1,t:57.7},{n:'DaniGamer',c:'Manizales',s:900,x:0,h:1,t:70.5},
  {n:'Caro',c:'Santa Marta',s:700,x:0,h:0,t:66.2},{n:'Andrés M.',c:'Cúcuta',s:500,x:0,h:0,t:75.0}
];

/* ============ 2. UTILIDADES ============ */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shuffle = a => { a = a.slice(); for (let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]];} return a; };
const norm = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
const fmt = n => n.toLocaleString('es-CO');
const wait = ms => new Promise(r => setTimeout(r, ms));
const ALIAS_MAP = {}; for (const [k,v] of Object.entries(ALIAS)) v.forEach(a => ALIAS_MAP[a]=k);

function matchBrand(entry){
  const words = String(entry).trim().split(/\s+/).map(norm).filter(Boolean);
  const whole = words.join('');
  if (ALIAS_MAP[whole]) return ALIAS_MAP[whole];
  for (const a in ALIAS_MAP) if (a.length>=5 && whole.startsWith(a)) return ALIAS_MAP[a];
  for (let i=0;i<words.length-1;i++){ const b = words[i]+words[i+1]; if (ALIAS_MAP[b]) return ALIAS_MAP[b]; }
  for (const w of words) if (w.length>=3 && ALIAS_MAP[w]) return ALIAS_MAP[w];
  return null;
}

/* ============ 3. FONDO ESTELAR (canvas) + partículas ============ */
const cv = $('#stars'), cx = cv.getContext('2d');
let W, H, stars = [], speed = .6, target = .6, parts = [];
function resize(){ const d = Math.min(devicePixelRatio||1,1.25); W = cv.width = innerWidth*d; H = cv.height = innerHeight*d; }
addEventListener('resize', resize); resize();
for (let i=0;i<120;i++) stars.push({x:(Math.random()-.5)*2,y:(Math.random()-.5)*2,z:Math.random()});
function warp(ms=900){ target = 26; setTimeout(()=>target=.6, ms); }
function burst(x,y,n=40,cols=['#ffd23f','#3aa0ff','#5ee7ff','#fff']){
  const d = W/innerWidth;
  for (let i=0;i<n;i++){ const a=Math.random()*6.283, v=2+Math.random()*7;
    parts.push({x:x*d,y:y*d,vx:Math.cos(a)*v*d,vy:Math.sin(a)*v*d-3*d,l:1,c:cols[i%cols.length],s:(2+Math.random()*4)*d}); }
}
(function loop(){
  speed += (target-speed)*.06;
  cx.fillStyle = `rgba(3,10,36,${speed>3?.25:.9})`; cx.fillRect(0,0,W,H);
  const cxW=W/2, cyH=H/2, f=Math.min(W,H)*.6;
  for (const s of stars){
    const pz = s.z; s.z -= .0016*speed; if (s.z<=.02){ s.z=1; s.x=(Math.random()-.5)*2; s.y=(Math.random()-.5)*2; continue; }
    const X=cxW+s.x/s.z*f, Y=cyH+s.y/s.z*f, PX=cxW+s.x/pz*f, PY=cyH+s.y/pz*f, b=1-s.z;
    cx.strokeStyle = `rgba(${170+85*b|0},${200+55*b|0},255,${b})`; cx.lineWidth = b*2.2*(W/innerWidth);
    cx.beginPath(); cx.moveTo(PX,PY); cx.lineTo(X,Y); cx.stroke();
  }
  for (let i=parts.length-1;i>=0;i--){ const p=parts[i]; p.x+=p.vx; p.y+=p.vy; p.vy+=.18; p.vx*=.98; p.l-=.016;
    if (p.l<=0){parts.splice(i,1);continue;} cx.globalAlpha=p.l; cx.fillStyle=p.c; cx.fillRect(p.x,p.y,p.s,p.s*1.6); cx.globalAlpha=1; }
  requestAnimationFrame(loop);
})();

/* ============ 4. NAVEGACIÓN ============ */
function show(id){
  document.querySelectorAll('.screen.active').forEach(s => s.classList.remove('active'));
  const el = $('#'+id); el.classList.add('active'); scrollTo({top:0});
  const f = $('#flash'); f.classList.remove('go'); void f.offsetWidth; f.classList.add('go');
}

/* ============ 5. ESTADO (solo memoria de sesión) ============ */
let player = null, G = null, malumaFails = false;

$('#reg').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target), alias = f.get('alias').trim(), email = f.get('email').trim(), city = f.get('city').trim();
  const err = !alias ? 'Escribe un nombre o alias.' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'Escribe un correo de prueba válido.' : !city ? 'Escribe tu ciudad.' : '';
  $('#reg-err').textContent = err; if (err) return;
  player = {alias, email, city}; // nunca se guarda ni se envía
  const r = e.target.querySelector('button').getBoundingClientRect(); burst(r.left+r.width/2, r.top, 50);
  start();
});
$('#again').addEventListener('click', () => start());

/* ============ 6. ROTACIÓN Y PREGUNTAS ============ */
function pickAds(){
  const fixed = ADS.find(a => a.obligatorio);
  const others = shuffle(ADS.filter(a => !a.obligatorio)).slice(0,4);
  return shuffle([fixed, ...others]); // Maluma en posición aleatoria
}
function pickQuestions(ads){
  // 6 retos: uno por anuncio + uno extra siempre de Maluma (dificultad distinta) → 2 retos de Maluma por partida
  for (let t=0;t<500;t++){
    const s = shuffle(PLAN), out = [], used = new Set(); let ok = true;
    const pairs = ads.map((ad,i) => [ad, s[i]]);
    const extra = ads.find(a => a.obligatorio); if (pairs.find(p => p[0]===extra)[1]===s[5]) continue;
    pairs.push([extra, s[5]]);
    pairs.forEach(([ad,d]) => {
      const q = shuffle(ad.preguntas.filter(p => p.d===d && !used.has(p)))[0];
      if (!q) { ok = false; return; } used.add(q); out.push({...q, ad});
    });
    if (ok) { const order = 'EMHX'; return shuffle(out).sort((a,b) => order.indexOf(a.d)-order.indexOf(b.d)); }
  }
}

async function start(){
  G = { ads: pickAds(), answers: [], spont: null, presenter: null, score: 0, time: 0 };
  G.malumaPos = G.ads.findIndex(a => a.obligatorio) + 1;
  G.qs = pickQuestions(G.ads);
  const img = new Image(); img.onload = () => malumaFails = false; img.onerror = () => malumaFails = true; img.src = ADS[0].arte.src;
  $('#ready-name').textContent = 'Jugador: ' + player.alias;
  show('s-ready'); warp(1200);
  const bc = $('#big-count');
  for (const n of [3,2,1]){ bc.textContent = n; bc.classList.remove('pop'); void bc.offsetWidth; bc.classList.add('pop'); await wait(900); }
  watch();
}

/* ============ 7. EXPOSICIÓN: 5 × 4 s exactos ============ */
function adEl(ad){
  const el = document.createElement('div'); const a = ad.arte;
  const wm = (txt, wc) => wc==='stripes' ? `<div class="stripes"><i></i><i></i><i></i></div><div class="wm">${txt}</div>`
    : `<div class="wm ${wc==='script'?'script':''} ${wc==='swoosh'?'swoosh':''}" style="${wc==='wide'?'letter-spacing:.18em':''}${wc==='nflx'?'color:#e50914;letter-spacing:.04em;transform:scaleY(1.25)':''}">${txt}</div>`;
  if (a.t==='img'){
    el.className = 'ad';
    el.innerHTML = malumaFails ? posterFallback() : `<img src="${a.src}" alt="" draggable="false">`;
    const i = el.querySelector('img'); if (i) i.onerror = () => { el.innerHTML = posterFallback(); };
  } else if (a.t==='single'){
    el.className = 'ad ad-single'; el.style.background = a.bg; if (a.fg) el.style.color = a.fg;
    el.innerHTML = `<div>${wm(a.wm,a.wc)}</div><div class="visual">${a.visual}</div>
      <div><h3 class="hl">${a.hl}</h3><div class="badges" style="margin-top:3cqw">${a.badges.map(b => b[0]==='*'?`<span class="solid">${b.slice(1)}</span>`:`<span>${b}</span>`).join('')}</div></div>
      <span class="sim-tag">${SIM}</span>`;
  } else {
    el.className = 'ad ad-split' + (a.stack?' stack':'');
    el.innerHTML = `<div class="hdr">${a.hdr}</div>${a.sides.map(s => `<div class="side" style="background:${s.bg};color:${s.fg||'#fff'}">${wm(s.wm,s.wc)}<div class="visual">${s.visual}</div><small>${s.small}</small></div>`).join('')}
      <div class="vs">${a.vs}</div><div class="ftr">${a.ftr}</div><span class="sim-tag">${SIM}</span>`;
  }
  return el;
}
function posterFallback(){
  return `<div class="ad poster" style="position:absolute;inset:0"><div class="pre">VISA PRESENTA</div>
    <div><div class="art">MALUMA</div><div class="tour">WORLD TOUR 2027</div></div>
    <div class="venue">El Corazón de Bogotá - Arena</div><div class="warn">Respaldo visual · falta la imagen original en assets/maluma-visa.jpg</div></div>`;
}

function watch(){
  show('s-watch');
  const bars = $('#bars'); bars.innerHTML = '<span><i></i></span>'.repeat(5);
  const stage = $('#stage'); stage.innerHTML = '';
  const t0 = performance.now(); let i = -1, secT;
  const block = e => e.preventDefault();
  ['contextmenu','gesturestart','dblclick'].forEach(ev => document.addEventListener(ev, block, {passive:false}));
  const next = () => {
    i++;
    [...bars.children].forEach((b,k) => b.className = k<i ? 'done' : '');
    const old = stage.firstChild; if (old){ old.classList.add('out'); setTimeout(() => old.remove(), 350); }
    if (i>=5){ // ocultar todas las piezas
      ['contextmenu','gesturestart','dblclick'].forEach(ev => document.removeEventListener(ev, block));
      clearInterval(secT); stage.innerHTML = ''; return phase1();
    }
    bars.children[i].className = 'run';
    const ring = $('#ring'); ring.classList.remove('run'); void ring.getBoundingClientRect(); ring.classList.add('run');
    $('#ad-index').textContent = `ANUNCIO ${i+1}/5`;
    stage.appendChild(adEl(G.ads[i]));
    const end = t0 + (i+1)*EXPO; // sin deriva acumulada
    clearInterval(secT);
    const tick = () => $('#ad-sec').textContent = Math.max(1, Math.ceil((end-performance.now())/1000));
    tick(); secT = setInterval(tick, 100);
    setTimeout(next, end - performance.now());
  };
  next();
}

/* ============ 8. TEMPORIZADOR GENÉRICO ============ */
function timer(sec, onEnd){
  const bar = $('#timer-bar'), num = $('#timer-num'), box = bar.parentElement, t0 = performance.now(); let raf, done = false;
  box.classList.remove('warn');
  const f = () => { if (done) return;
    const left = Math.max(0, sec - (performance.now()-t0)/1000);
    bar.style.transform = `scaleX(${left/sec})`; num.textContent = Math.ceil(left)+'s';
    box.classList.toggle('warn', left <= Math.min(5, sec*.3));
    if (left<=0){ done = true; onEnd(sec); } else raf = requestAnimationFrame(f); };
  f();
  return () => { done = true; cancelAnimationFrame(raf); return Math.min(sec, (performance.now()-t0)/1000); };
}
const TOTAL_Q = 2 + PLAN.length;
function header(n, d, pts){
  $('#q-num').textContent = `RETO ${n}/${TOTAL_Q}`;
  const qd = $('#q-diff'); qd.textContent = DIFF[d] || 'ESPONTÁNEA'; qd.dataset.d = d;
  $('#q-pts').textContent = '+' + fmt(pts);
  $('#q-progress').style.width = ((n-1)/TOTAL_Q*100) + '%';
}
async function locked(){
  const l = $('#locked'); l.classList.add('show'); await wait(800); l.classList.remove('show'); await wait(150);
}
async function phaseCard(icon, eyebrow, title, text, ms=2200){
  $('#phase-icon').textContent = icon; $('#phase-eyebrow').textContent = eyebrow;
  $('#phase-title').textContent = title; $('#phase-text').textContent = text;
  show('s-phase'); warp(800); await wait(ms);
}

/* ============ 9. MEMORIA ESPONTÁNEA ============ */
function openQuestion({n, text, hint, sec, max, placeholder, multi}){
  return new Promise(resolve => {
    header(n, 'S', max); $('#q-text').textContent = text; $('#q-hint').textContent = hint;
    const body = $('#q-body'), items = [];
    body.innerHTML = multi
      ? `<div class="open-wrap"><input id="open-in" placeholder="${placeholder}" autocomplete="off" autocapitalize="words" enterkeyhint="enter"><button class="btn add" id="open-add" type="button"><span>＋ AGREGAR</span></button></div>
         <div class="chips" id="chips"></div><button class="btn primary" id="open-go" type="button"><span>LISTO</span></button>`
      : `<div class="open-wrap"><input id="open-in" placeholder="${placeholder}" autocomplete="off" autocapitalize="words" enterkeyhint="send"><button class="btn primary" id="open-go" type="button"><span>LISTO</span></button></div>`;
    show('s-q');
    const inp = $('#open-in'), chips = $('#chips'); setTimeout(() => inp.focus(), 450);
    const draw = () => {
      chips.innerHTML = items.map((x,i) => `<span class="${i===draw.fresh?'new':''}">${esc(x)}<button type="button" class="chip-x" data-i="${i}" aria-label="Quitar">✕</button></span>`).join('')
        + `<small>${items.length ? items.length+'/5 marcas' : 'Escribe una marca y pulsa Agregar'}</small>`;
      const full = items.length >= 5; inp.disabled = full; $('#open-add').disabled = full;
      inp.placeholder = full ? 'Máximo 5 marcas' : placeholder;
    };
    const add = () => { const v = inp.value.trim(); if (!v || items.length >= 5) { inp.focus(); return; }
      draw.fresh = -1; if (!items.some(x => norm(x) === norm(v))) { items.push(v); draw.fresh = items.length-1; }
      inp.value = ''; draw(); if (items.length < 5) inp.focus();
      const r = $('#open-add').getBoundingClientRect(); burst(r.left+r.width/2, r.top+r.height/2, 14); };
    if (multi) {
      draw(); $('#open-add').onclick = add;
      chips.addEventListener('click', e => { const x = e.target.closest('.chip-x'); if (!x || finish.done) return; items.splice(+x.dataset.i, 1); draw.fresh = -1; draw(); });
    }
    let finish;
    const stop = timer(sec, () => finish(sec));
    finish = async t => { if (finish.done) return; finish.done = true; const used = stop();
      if (multi && inp.value.trim() && items.length < 5) items.push(inp.value.trim()); // lo escrito sin agregar también cuenta
      inp.blur(); inp.disabled = true; body.querySelectorAll('button').forEach(b => b.disabled = true);
      const r = $('#open-go').getBoundingClientRect(); burst(r.left+r.width/2, r.top+r.height/2, 30);
      const list = multi ? items.slice(0,5) : (inp.value.trim() ? [inp.value.trim()] : []);
      await locked(); resolve({raw: multi ? items.join(', ') : inp.value, list, time: t===sec ? sec : used}); };
    $('#open-go').onclick = () => finish();
    inp.addEventListener('keydown', e => { if (e.key==='Enter') { e.preventDefault(); multi ? add() : finish(); } });
  });
}

async function phase1(){
  await phaseCard('🧠','Fase 1 · Memoria espontánea','¡Tiempo de recordar!','Los anuncios desaparecieron. Escribe lo que recuerdes sin ayudas.');
  const present = new Set(G.ads.flatMap(a => [...a.marcas, ...a.marcasSecundarias]));
  // Pregunta 1 — marcas recordadas (máx 5 entradas, 100 c/u, tope 300)
  const r1 = await openQuestion({n:1, text:'¿Qué marcas recuerdas haber visto en los anuncios?', hint:'Agrega hasta 5 marcas, una por una · 100 pts por marca correcta (máx. 300)', sec:25, max:300, placeholder:'Escribe una marca', multi:true});
  const seen = new Set(), hits = [], misses = [];
  r1.list.slice(0,5).forEach(x => { const b = matchBrand(x); const key = b || norm(x); if (!key || seen.has(key)) return; seen.add(key);
    (b && present.has(b) ? hits : misses).push(b || x); });
  const p1 = Math.min(300, hits.length*100);
  G.spont = {raw:r1.raw, hits, misses, visa: hits.includes('Visa'), points:p1, time:r1.time};
  G.answers.push({n:1, tipo:'Espontánea', d:'S', q:'¿Qué marcas recuerdas haber visto en los anuncios?', user:r1.list.slice(0,5).join(', ')||'—', correct:[...present].join(', '), ok:hits.length>0, pts:p1, max:300, time:r1.time});
  // Pregunta 2 — presentador del concierto
  const r2 = await openQuestion({n:2, text:'¿Qué marca recuerdas que presentaba el concierto de Maluma?', hint:'Respuesta abierta · 300 pts', sec:20, max:300, placeholder:'Escribe la marca'});
  const b2 = r2.list.length ? r2.list.map(matchBrand).find(Boolean) : null;
  G.presenter = {raw:r2.raw, brand:b2, ok: b2==='Visa', points: b2==='Visa'?300:0, time:r2.time};
  G.answers.push({n:2, tipo:'Espontánea', d:'S', q:'¿Qué marca recuerdas que presentaba el concierto de Maluma?', user:r2.raw.trim()||'—', correct:'Visa', ok:G.presenter.ok, pts:G.presenter.points, max:300, time:r2.time});
  phase2();
}

/* ============ 10. MEMORIA DE PRECISIÓN ============ */
function mcQuestion(q, n){
  return new Promise(resolve => {
    header(n, q.d, PTS[q.d]); $('#q-text').textContent = q.q; $('#q-hint').textContent = '10 segundos · una sola oportunidad';
    const opts = shuffle([q.a, ...q.o]);
    const body = $('#q-body');
    body.innerHTML = opts.map((o,i) => `<button class="opt" data-k="${'ABCD'[i]}">${esc(o)}</button>`).join('');
    show('s-q');
    let done = false;
    const stop = timer(10, () => end(null, 10));
    const end = async (choice, t) => { if (done) return; done = true; const used = choice===null ? 10 : stop();
      await locked(); resolve({choice, time: used}); };
    body.querySelectorAll('.opt').forEach(b => b.addEventListener('click', e => {
      if (done) return;
      body.querySelectorAll('.opt').forEach(x => x.classList.add(x===b?'picked':'dim'));
      const r = b.getBoundingClientRect(), rp = document.createElement('i'); rp.className = 'ripple';
      const sz = r.width; rp.style.cssText = `width:${sz}px;height:${sz}px;left:${e.clientX-r.left-sz/2}px;top:${e.clientY-r.top-sz/2}px`; b.appendChild(rp);
      burst(e.clientX, e.clientY, 24);
      end(b.textContent);
    }));
  });
}
async function phase2(){
  await phaseCard('🎯','Fase 2 · Memoria de precisión',PLAN.length + ' retos de detalle','Fácil → Media → Difícil → Experta. 10 segundos por reto.');
  for (let i=0;i<G.qs.length;i++){
    const q = G.qs[i], r = await mcQuestion(q, i+3), ok = r.choice === q.a;
    G.answers.push({n:i+3, tipo:'Precisión', d:q.d, q:q.q, ad:q.ad.nombre, user:r.choice ?? 'Tiempo agotado', correct:q.a, ok, pts: ok?PTS[q.d]:0, max:PTS[q.d], time:r.time});
  }
  results();
}

/* ============ 11. RESULTADOS Y RANKING ============ */
function results(){
  const A = G.answers;
  G.score = A.reduce((s,a) => s+a.pts, 0);
  G.time = A.reduce((s,a) => s+a.time, 0);
  const by = {S:[0,2],E:[0,0],M:[0,0],H:[0,0],X:[0,0]};
  A.forEach(a => { if (a.d!=='S'){ by[a.d][1]++; if (a.ok) by[a.d][0]++; } else if (a.ok) by.S[0]++; });
  G.by = by;
  const ok = A.filter(a => a.ok).length;
  show('s-result'); warp(1400);
  $('#res-name').textContent = player.alias;
  $('#st-ok').textContent = ok; $('#st-ko').textContent = A.length-ok; $('#st-time').textContent = G.time.toFixed(1)+'s';
  const tier = G.score>=1900?'LEYENDA DE LA MEMORIA':G.score>=1400?'MEMORIA DE ÉLITE':G.score>=800?'BUENA MEMORIA':'EN ENTRENAMIENTO';
  $('#res-tier').textContent = '★ ' + tier;
  // contador animado
  const el = $('#res-score'), t0 = performance.now(), D = 2200;
  (function c(){ const p = Math.min(1,(performance.now()-t0)/D), e = 1-Math.pow(1-p,4); el.textContent = fmt(Math.round(G.score*e)); if (p<1) requestAnimationFrame(c); })();
  setTimeout(() => $('#orb').style.strokeDashoffset = 553*(1-G.score/MAXSCORE), 80);
  setTimeout(() => { for (let k=0;k<4;k++) setTimeout(() => burst(innerWidth*(.2+.6*Math.random()), innerHeight*.3, 35), k*300); }, 900);
  const rows = [['Espontánea','S','#5ee7ff'],['Fácil','E','#3aa0ff'],['Media','M','#7dff9a'],['Difícil','H','#ff9f43'],['Experta','X','#ff4fd8']];
  $('#diff-grid').innerHTML = rows.map(([l,k,c]) => `<div class="diff-row"><span>${l}</span><div class="bar"><i style="background:${c};box-shadow:0 0 12px ${c}" data-w="${by[k][1]?by[k][0]/by[k][1]*100:0}"></i></div><b>${by[k][0]}/${by[k][1]}</b></div>`).join('');
  setTimeout(() => document.querySelectorAll('.diff-row i').forEach(i => i.style.width = i.dataset.w+'%'), 300);
  // ranking: puntaje, expertas, difíciles, menor tiempo; empate se conserva
  const me = {n:player.alias, c:player.city, s:G.score, x:by.X[0], h:by.H[0], t:+G.time.toFixed(1), me:true};
  const list = [...RANK, me].sort((a,b) => b.s-a.s || b.x-a.x || b.h-a.h || a.t-b.t);
  let pos = 0;
  $('#rank').innerHTML = list.map((r,i) => { const p = list[i-1];
    if (!p || p.s!==r.s || p.x!==r.x || p.h!==r.h || p.t!==r.t) pos = i+1;
    return `<li class="${r.me?'me':''}" style="animation-delay:${.6+i*.06}s"><span class="p">#${pos}</span><span>${esc(r.n)}${r.me?' (tú)':''}<small>${esc(r.c)} · ${r.x} exp · ${r.h} dif · ${r.t}s</small></span><span class="s">${fmt(r.s)}</span></li>`; }).join('');
}

/* ============ 12. DIAGNÓSTICO PARA PRISA ============ */
$('#diag-btn').addEventListener('click', () => {
  const s = G.spont, others = s.hits.filter(b => b!=='Visa');
  const yn = v => v ? '<b class="yes">Sí</b>' : '<b class="no">No</b>';
  $('#diag-body').innerHTML = `
    <div class="kpis">
      <div><small>Posición de Maluma</small><b>${G.malumaPos} de 5</b></div>
      <div><small>Puntuación final</small><b>${fmt(G.score)} / ${fmt(MAXSCORE)}</b></div>
      <div><small>Mencionó Visa espontáneamente</small>${yn(s.visa)}</div>
      <div><small>Recordó Visa como presentador</small>${yn(G.presenter.ok)}</div>
    </div>
    <p class="dsec">Anuncios expuestos (8 s c/u)</p>
    <ul class="dlist">${G.ads.map((a,i) => `<li class="${a.obligatorio?'hl':''}">${i+1}. ${esc(a.nombre)}<em>Marcas: ${a.marcas.concat(a.marcasSecundarias).join(', ')} · ${a.tipo}</em></li>`).join('')}</ul>
    <p class="dsec">Memoria espontánea</p>
    <ul class="dlist">
      <li>Texto escrito: ${esc(s.raw.trim()||'—')}</li>
      <li>Marcas recordadas de las demás piezas: ${others.length?others.join(', '):'Ninguna'}</li>
      <li>Menciones no presentes en la partida: ${s.misses.length?esc(s.misses.join(', ')):'Ninguna'}</li>
      <li>Presentador del concierto escrito: ${esc(G.presenter.raw.trim()||'—')}</li>
    </ul>
    <p class="dsec">Respuestas</p>
    <ul class="dlist">${G.answers.map(a => `<li>${a.n}. ${esc(a.q)}<em>${DIFF[a.d]||'Espontánea'} · Respuesta: ${esc(a.user)} · Correcta: ${esc(a.correct)} · ${a.ok?'<span class="yes">acierto</span>':'<span class="no">error</span>'} · ${a.pts}/${a.max} pts · ${a.time.toFixed(1)}s</em></li>`).join('')}</ul>
    <p class="fine" style="margin-top:14px">Indicadores calculados solo con las respuestas de esta partida. Se borran al cerrar la pestaña.</p>`;
  $('#diag').classList.add('open');
});
$('#diag-close').addEventListener('click', () => $('#diag').classList.remove('open'));
$('#diag').addEventListener('click', e => { if (e.target.id==='diag') $('#diag').classList.remove('open'); });

// Expuesto para verificación en consola
window.__PRISA = {ADS, pickAds, pickQuestions, matchBrand};
})();
