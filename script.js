// Ayudita tomada de: https://github.com/russellsamora/scrollama/blob/main/src/scroll.js

const textos = ["texto1", "texto2", "texto3", "texto4", "texto5", "texto6"];

let scrollYPrevio;
let scrollYActual;
let comparacionScrollY;
let direccion;

const texto = document.createElement('div');
texto.id = "texto";
texto.classList.add('textoDer');

const alturaVentana  = window.innerHeight;
const paso = alturaVentana / textos.length - 1;

function onScroll(container) {
const contenedor = document.getElementById("contenedor");
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
    if(textos[Math.floor(scrollYActual/paso)]) {
  texto.innerText = textos[Math.floor(scrollYActual/paso)];
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