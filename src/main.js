import { changeTmp } from './view-controller/router.js'; // importamos funcion de controlador
// ---------------------------Funcion que permite hacer cambio de View-----------------------------
const init = () => {
  changeTmp(window.location.hash);
  window.addEventListener('hashchange', () => changeTmp(window.location.hash));
};
window.addEventListener('load', init);// load se dispara cuando un recurso y sus recursos dependientes han terminado de cargar.


