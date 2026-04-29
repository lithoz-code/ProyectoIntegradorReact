export const categorias = [
  { id: "pinturas", nombre: "1 - Pinturas y accesorios", ruta: "/categoria/pinturas" },
  { id: "construccion", nombre: "2 - Construcción", ruta: "/categoria/construccion" },
  { id: "plomeria", nombre: "3 - Plomería y gas", ruta: "/categoria/plomeria" },
  { id: "electricos", nombre: "4 - Eléctricos", ruta: "/categoria/electricos" },
  { id: "agropecuario", nombre: "5 - Agropecuario", ruta: "/categoria/agropecuario" },
  { id: "herramientas", nombre: "6 - Herramientas", ruta: "/categoria/herramientas" },
  { id: "seguridad", nombre: "7 - Seguridad Industrial", ruta: "/categoria/seguridad" },
  { id: "limpieza", nombre: "8 - Limpieza y accesorios", ruta: "/categoria/limpieza" },
  { id: "adhesivos", nombre: "9 - Adhesivos y empaques", ruta: "/categoria/adhesivos" },
  { id: "tornilleria", nombre: "10 - Tornillería y accesorios", ruta: "/categoria/tornilleria" },
  { id: "abrasivos", nombre: "11 - Abrasivos y químicos", ruta: "/categoria/abrasivos" },
  { id: "herrajes", nombre: "12 - Herrajes y cerrajería", ruta: "/categoria/herrajes" },
];

export const promociones = [
  { id: "navidad", nombre: "Navidad", descuento: 30, ruta: "/promocion/navidad", fechaInicio: "1 dic 2025", fechaFin: "6 ene 2026" },
  { id: "saldos", nombre: "Saldos", descuento: 50, ruta: "/promocion/saldos", fechaInicio: "30 jun 2025", fechaFin: "6 ene 2026" },
  { id: "seguridad", nombre: "Productos Seguridad", descuento: 10, ruta: "/promocion/seguridad", fechaInicio: "15 jun 2025", fechaFin: "6 jul 2025" },
  { id: "sin_promocion", nombre: "Sin promoción", descuento: 0, ruta: "/promocion/sin_promocion", fechaInicio: "1 ene 2025", fechaFin: "31 dic 2025" },
];

export const productos = {
  pinturas: [
    { id: 1, nombre: "Rodillo Epóxico Goya 9", precio: 14339.50, imagen: "/img/1.jpg", link: "https://www.casaferretera.com/rodillo_epoxico_goya_9_ref010118/p" },
    { id: 2, nombre: "Cinta enmascarar 1×40 mts", precio: 6961.50, imagen: "/img/2.jpg", link: "https://www.casaferretera.com/cinta_enmascarar_ferretera_tesa1_x_40mts_72/p" },
    { id: 3, nombre: "Aerocolor Anticorrosivo Negro", precio: 15470.00, imagen: "/img/3.jpg", link: "https://www.casaferretera.com/aerocolor_anticorrosivo_negro_300ml12/p" },
    { id: 4, nombre: "Brocha popular mona 1/2 Goya", precio: 6842.00, imagen: "/img/4.jpg", link: "https://www.casaferretera.com/brocha-popular-mona-c-negro_goya_1-2-12/p" },
    { id: 5, nombre: "Pintura Galón Blanco 5 galones", precio: 447321.00, imagen: "/img/5.jpg", link: "https://mitiendacoval.com/paredes-pintura/pintura-viniltex-advanced-blanco-caneca-5-galones-pintuco" },
  ],
  construccion: [
    { id: 6, nombre: "Cemento Gris de uso General 50 Kg", precio: 43836.72, imagen: "/img/6.jpeg", link: "https://www.casaferretera.com/cemento-gris-de-uso-general-50-kg-11717/p" },
    { id: 7, nombre: "Balde plástico para la construcción", precio: 7378.00, imagen: "/img/7.png", link: "https://casaandina.com.co/balde-plastico-para-construccionicaccao.html" },
    { id: 8, nombre: "Cerradura dos botones Yale", precio: 98413.00, imagen: "/img/8.webp", link: "https://tiendaonline.yalecolombia.com/products/kit-cerradura-electrica-izquierda-con-control-remoto" },
    { id: 9, nombre: "Alambre de Púa Calibre 12.5 Rollo × 350 Metros", precio: 427757.40, imagen: "/img/9.webp", link: "https://www.casaferretera.com/alambre_pua_multimarcas_c-12_5rollox_350mts/p" },
    { id: 10, nombre: "Ducha Eléctrica 110 V Kontiki", precio: 80265.50, imagen: "/img/10.webp", link: "https://www.casaferretera.com/ducha-electrica-automatica-110v-kontiki-k104/p" },
  ],
  plomeria: [
    { id: 11, nombre: "Bomba de agua Periférica 1/2 hp", precio: 162911.00, imagen: "/img/11.jpg", link: "https://casaandina.com.co" },
    { id: 12, nombre: 'Llave de Cañería Hierro 48"', precio: 205751.00, imagen: "/img/12.webp", link: "https://www.homecenter.com.co/homecenter-co/product/655931" },
    { id: 13, nombre: "Electrobomba Periférica 110v (1/2 hp)", precio: 575841.00, imagen: "/img/13.jpg", link: "https://www.comaderas.com/electrobomba-periferica-12-hp-automatica" },
    { id: 14, nombre: "Electrobomba Periférica 110v (industrial)", precio: 2213281.40, imagen: "/img/14.webp", link: "https://www.homecenter.com.co/homecenter-co/product/547569" },
    { id: 15, nombre: "Estufa de piso 4 puestos Gas Natural Haceb", precio: 829891.00, imagen: "/img/15.webp", link: "https://homecenter.falabella.com.co/homecenter-co/product/118656904" },
  ],
  electricos: [
    { id: 16, nombre: "Cautín Eléctrico 60 W", precio: 59381.00, imagen: "/img/16.webp", link: "https://www.homecenter.com.co/homecenter-co/product/379829" },
    { id: 17, nombre: "Multímetro Automático", precio: 118881.00, imagen: "/img/17.webp", link: "https://www.homecenter.com.co/homecenter-co/product/320613" },
    { id: 18, nombre: "Cortadora Inalámbrica de Quijada Cerrada", precio: 15922081.00, imagen: "/img/18.webp", link: "https://www.homecenter.com.co/homecenter-co/product/557945" },
    { id: 19, nombre: "Termómetro Laser Infrarrojo Dual", precio: 297381.00, imagen: "/img/19.webp", link: "https://www.homecenter.com.co/homecenter-co/product/877233" },
    { id: 20, nombre: "Probador de cables", precio: 535381.00, imagen: "/img/20.webp", link: "https://homecenter.falabella.com.co/homecenter-co/product/118843368" },
  ],
  agropecuario: [
    { id: 21, nombre: "Pala Jardinera Cuadrada Herragro", precio: 33389.00, imagen: "/img/21.webp", link: "https://www.tierragro.com/products/pala-jardinera-cuadrada-cabo-plastico-herragro" },
    { id: 22, nombre: "Rastrillo Polipropileno", precio: 27846.00, imagen: "/img/22.webp", link: "https://www.tierragro.com/collections/rastrillos/products/rastrillo-colona-12-dientes-fercon-herramientas-jardineria" },
    { id: 23, nombre: "Machete Barrigón Pulido 20 pulgadas", precio: 19922.00, imagen: "/img/23.webp", link: "https://www.tierragro.com/products/machete-barrigon-pulido-20-pulgadas" },
    { id: 24, nombre: "Lima Triangular Regular 6 pulgadas", precio: 11305.00, imagen: "/img/24.jpg", link: "https://www.tierragro.com/collections/nicholson" },
    { id: 25, nombre: "Polisombra 50% Ancho 4 Mts × 1 Metro", precio: 12733.00, imagen: "/img/25.webp", link: "https://www.tierragro.com/collections/agro-ferreteria-polisombra" },
  ],
  herramientas: [
    { id: 26, nombre: "Taladro Percutor 1/2 - 1050 Wt Vvr Covo", precio: 367591.00, imagen: "/img/26.webp", link: "https://www.homecenter.com.co/homecenter-co/product/773978" },
    { id: 27, nombre: "Sierra Circular 7-1/4pg 1500w", precio: 593691.00, imagen: "/img/27.webp", link: "https://www.homecenter.com.co/homecenter-co/product/630030" },
    { id: 28, nombre: "Pulidora 7 Pulgadas 22000W 8500Rpm", precio: 843591.00, imagen: "/img/28.webp", link: "https://www.homecenter.com.co/homecenter-co/product/82054" },
    { id: 29, nombre: "Hidrolavadora Eléctrica Karcher", precio: 904281.00, imagen: "/img/29.webp", link: "https://www.homecenter.com.co/homecenter-co/product/559012" },
    { id: 30, nombre: "Set Atornillador Inalámbrico 3,6V IL 86", precio: 428281.00, imagen: "/img/30.webp", link: "https://www.homecenter.com.co/homecenter-co/product/343551" },
  ],
  seguridad: [
    { id: 31, nombre: "Botas de seguridad punta de acero", precio: 187425.00, imagen: "/img/31.webp", link: "https://articulo.mercadolibre.com.co/MCO-1503085442" },
    { id: 32, nombre: "Careta para esmerilar", precio: 51765.00, imagen: "/img/32.jpg", link: "https://www.electromanferonline.com/proteccion-facial/218-careta-de-esmerilar-visor-con-ribete-steelpro.html" },
    { id: 33, nombre: "Casco de seguridad verde", precio: 18742.50, imagen: "/img/33.png", link: "https://www.cedicol.com.co/producto/casco-de-seguridad-dielectrico-tipo-i-armour-con-ratchet-verde-10-p03r-epi/" },
    { id: 34, nombre: "Gafa de soldadura inteligente", precio: 67830.00, imagen: "/img/34.webp", link: "https://totalherramientas.com/products/gafas-monogafa-p-soldar-inteligente-2-sensores" },
    { id: 35, nombre: "Guante XL de látex anticorte", precio: 23205.00, imagen: "/img/35.webp", link: "https://articulo.mercadolibre.com.co/MCO-2719786158" },
  ],
  limpieza: [
    { id: 36, nombre: "Aspiradora Inalámbrica 20V", precio: 427507.50, imagen: "/img/36.webp", link: "https://www.casaferretera.com/aspiradora-inalambrica-black-and-decker-bchv001de/p" },
    { id: 37, nombre: "Detergente industrial", precio: 12316.50, imagen: "/img/37.webp", link: "https://www.easy.com.co/detergente-liquido-industrial-x-3750-cc/p" },
    { id: 38, nombre: "Trapeadora", precio: 9936.50, imagen: "/img/38.webp", link: "https://www.homecenter.com.co/homecenter-co/product/59305" },
    { id: 39, nombre: "Escoba plástica de 30 dientes", precio: 76933.50, imagen: "/img/39.webp", link: "https://www.casaferretera.com/escoba_plastica-truper-c-mango30_dientesvpag/p" },
    { id: 40, nombre: "Recogedor plástico", precio: 5474.00, imagen: "/img/40.webp", link: "https://oneclover.com.co/producto/recogedor-4-con-banda-fucsia/4" },
  ],
  adhesivos: [
    { id: 41, nombre: "Pegante para madera 20kg", precio: 333319.00, imagen: "/img/41.webp", link: "https://www.casaferretera.com/carpincol-para-madera-caneca/p" },
    { id: 42, nombre: "Silicona gris Loctite", precio: 27846.00, imagen: "/img/42.webp", link: "https://www.casaferretera.com/silicona-gris-loctite-si5699/p" },
    { id: 43, nombre: "Adhesivo Loctite 435", precio: 41114.50, imagen: "/img/43.webp", link: "https://www.casaferretera.com/adhesivo-instantaneo-loctite-435/p" },
    { id: 44, nombre: "Fijador de roscas rojo", precio: 100257.50, imagen: "/img/44.webp", link: "https://www.casaferretera.com/fijador-piezas-cilindricas-loctite-648-/p" },
    { id: 45, nombre: "Zuncho Plástico 1/2 Rollo 1000 mts", precio: 58488.50, imagen: "/img/45.webp", link: "https://www.casaferretera.com/zuncho_plastico_1-2_rollo_x_1000mts38kls/p" },
  ],
  tornilleria: [
    { id: 46, nombre: "Tornillo Autoperforante Hexagonal de metal", precio: 83181.00, imagen: "/img/46.webp", link: "https://www.homecenter.com.co/homecenter-co/product/633072" },
    { id: 47, nombre: "Ángulo de refuerzo galvanizado", precio: 29631.00, imagen: "/img/47.webp", link: "https://www.homecenter.com.co/homecenter-co/product/335161" },
    { id: 48, nombre: "Base empotrada poste", precio: 106981.00, imagen: "/img/48.webp", link: "https://www.homecenter.com.co/homecenter-co/product/390426" },
    { id: 49, nombre: "Tuerca Apriete Estrella M6 20 unidades", precio: 16303.00, imagen: "/img/49.webp", link: "https://sodimac.falabella.com/sodimac-cl/product/113269259" },
    { id: 50, nombre: "Tubería de Drenaje", precio: 154581.00, imagen: "/img/50.webp", link: "https://www.homecenter.com.co/homecenter-co/product/459060" },
  ],
  abrasivos: [
    { id: 51, nombre: "Aditivo Impermeabilizante 25 kg Caneca", precio: 989961.00, imagen: "/img/51.webp", link: "https://www.homecenter.com.co/homecenter-co/product/22679" },
    { id: 52, nombre: "Bloqueador Humedad 1 galón", precio: 261681.00, imagen: "/img/52.webp", link: "https://www.homecenter.com.co/homecenter-co/product/719123" },
    { id: 53, nombre: "Repelente ecológico para plantas", precio: 26061.00, imagen: "/img/53.webp", link: "https://confiabonos.co/product/insecticida-organico/" },
    { id: 54, nombre: "Insecticida Aerosol matatodo 400 Ml", precio: 16541.00, imagen: "/img/54.webp", link: "https://www.homecenter.com.co/homecenter-co/product/189104" },
    { id: 55, nombre: "Herbicida Panzer 480 Ml", precio: 17731.00, imagen: "/img/55.png", link: "https://www.invesa.com/product/panzer-480-sl/" },
  ],
  herrajes: [
    { id: 56, nombre: "Cerradura alcoba satinada", precio: 20111.00, imagen: "/img/56.webp", link: "https://segurex.com/producto/cerradura-cilindrica-de-manija-jupiter-alcoba-a50ws-anticado/" },
    { id: 57, nombre: "Riel aluminio con freno", precio: 95081.00, imagen: "/img/57.webp", link: "https://www.homecenter.com.co/homecenter-co/product/76181" },
    { id: 58, nombre: "Corredera puerta corrediza", precio: 65331.00, imagen: "/img/58.webp", link: "https://www.mercadolibre.com.co/-herrajes-for-puertas-corredizas-de-granero-sistema-de-riel/p/MCO2005896853" },
    { id: 59, nombre: "Candado tipo alemán 40mm Yale", precio: 732921.00, imagen: "/img/59.webp", link: "https://www.homecenter.com.co/homecenter-co/product/07162" },
    { id: 60, nombre: "Caja Fuerte clave Fixser", precio: 65331.00, imagen: "/img/60.webp", link: "https://www.homecenter.com.co/homecenter-co/product/213866" },
  ],
};

// Productos por promoción
export const productosPromocion = {
  navidad: [1, 2, 3, 4, 5, 6, 12, 19, 23, 28, 40, 44, 49, 52, 54, 59],
  saldos: [7, 8, 11, 16, 24, 29, 30, 37, 41, 46],
  seguridad: [9, 15, 17, 20, 22, 27, 31, 32, 33, 34, 35, 38, 43, 48, 53, 58],
  sin_promocion: [10, 13, 14, 18, 21, 25, 26, 36, 39, 42, 45, 47, 50, 51, 55, 56, 57, 60],
};

export const todosLosProductos = Object.values(productos).flat();

export const formatPrecio = (precio) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(precio);
