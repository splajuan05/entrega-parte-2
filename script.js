// Ayudita tomada de: https://github.com/russellsamora/scrollama/blob/main/src/scroll.js

//const textos = ["Bienvenidos a un recorrido por el espacio", "A simple vista, desde la Tierra y en una noche oscura sin contaminación lumínica, podemos ver entre 2.000 y 5.000 estrellas en el cielo", " Órbita baja terrestre (200–2.000 km)", "Órbita media y geoestacionaria (2.000–36.000 km)", "La Luna (~384.400 km)", "Marte (54–400 millones km)", "Júpiter y Saturno (588 millones)", "Borde del Sistema Solar (17.950 millones de km.)", "Estrellas cercanas (4,24 años luz = 40 billones de km)", "Escala galáctica ( 2,5 millones de años luz)", "Universo observable (46.500 millones de años luz de radio)"];

//const imagenes = ["https://img.freepik.com/foto-gratis/hermosas-estre…turno_181624-622.jpg?semt=ais_incoming&w=740&q=80"];

const escenas = [
  { 
    texto: "Bienvenidos a un recorrido por el espacio...", 
    img: "https://img.freepik.com/foto-gratis/hermosas-estre…turno_181624-622.jpg?semt=ais_incoming&w=740&q=80" ,
	color: "#07dcf3ff"
  },
  { 
    texto: "A simple vista, desde la Tierra y en una noche oscura sin contaminación lumínica, podemos ver entre 2.000 y 5.000 estrellas en el cielo", 
    img: "https://img.freepik.com/foto-gratis/hermosas-estre…turno_181624-622.jpg?semt=ais_incoming&w=740&q=80",
	color: "#07dcf3ff"
  },
  { 
    texto: "1. Órbita baja terrestre (200–2.000 km)", 
    img: "https://www.internetsociety.org/wp-content/uploads/2022/03/leo-sats-2-min.jpg",
	color: "#ffff00"
  },
  { 
    texto: "2. Órbita media y geoestacionaria (2.000–36.000 km)", 
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Geosynchronous_orbit.gif",
	color: "#125abfff"
  },
  { 
    texto: "La Luna (~384.400 km)", 
    img: "https://content.nationalgeographic.com.es/medio/2022/10/03/luna_eedd0b00_800x533.jpg",
	color: "#ffffffff"
  },
  { 
    texto: "Marte (54–400 millones km))", 
    img: "https://portalhuaraz.com/wp-content/uploads/2020/10/ecoferio-marte-tierra-850x560.jpg.webp",
	color: "#ffff00"
  },
  { 
    texto: "Júpiter y Saturno (588 millones)", 
    img: "https://planetariodemontevideo.wordpress.com/wp-content/uploads/2020/12/10.jpg",
	color: "#ffff00"
  },
  { 
    texto: "Borde del Sistema Solar (17.950 millones de km.)", 
    img: "https://concepto.de/wp-content/uploads/2022/03/planetas-del-sistema-solar-e1646339961456.jpg",
	color: "#ffff00"
  },
   { 
    texto: "Estrellas cercanas (4,24 años luz = 40 billones de km)", 
    img: "https://www.nasa.gov/wp-content/uploads/2023/03/alphacen.jpg",
	color: "#ffff00"
  },
   { 
    texto: "Escala galáctica ( 2,5 millones de años luz)", 
    img: "https://cdn.eso.org/images/newsfeature/eso1536a.jpg",
	color: "#ffff00"
  },
   { 
    texto: "Universo observable (46.500 millones de años luz de radio)", 
    img: "https://astronoo.com/images/articles/univers-observable.webp",
	color: "#ffff00"
  },
  // ... agrega el resto
];



let scrollYPrevio;
let scrollYActual;
let comparacionScrollY;
let direccion;

const texto = document.createElement('div');
texto.id = "texto";
texto.classList.add('textoDer');

// imágenes
const imagen = document.createElement('img');
imagen.id = "imagen";
imagen.classList.add('claseImg');


const alturaVentana  = window.innerHeight;
const paso = alturaVentana / escenas.length - 1;

function onScroll(container) {
const contenedor = document.getElementById("contenedor");
document.body.appendChild(imagen);
document.body.appendChild(texto);

	const scrollTop = container ? container.scrollTop : window.pageYOffset;

	if (scrollYActual === scrollTop) return;

	scrollYPrevio = scrollYActual;
	scrollYActual = scrollTop;
	if (scrollYActual > comparacionScrollY) direccion = "down";
	else if (scrollYActual < comparacionScrollY) direccion = "up";
	comparacionScrollY = scrollYActual;

 // console.log(scrollYActual);

  if(scrollYActual) {
    if(escenas[Math.floor(scrollYActual/paso)]) {
		let indice = Math.floor(scrollYActual/paso)
		console.log(indice)
texto.style.color = `${escenas[Math.floor(scrollYActual/paso)].color}`;
  texto.innerText = escenas[Math.floor(scrollYActual/paso)].texto;
  imagen.src=escenas[Math.floor(scrollYActual/paso)].img;
  }
 // console.log(alturaVentana-scrollYActual);
} 
}

function setupScroll(container) {
	scrollYPrevio = 0;
	scrollYActual = 0;
	comparacionScrollY = 0;
	document.addEventListener("scroll", () => onScroll(container));
}

setupScroll(document.body);