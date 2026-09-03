import {setupCarrousel} from './carrousel.js';
import {setupViewer} from './viewer.js';
import Lenis from './vendor/lenis.mjs';

// Inicialización de Lenis (smooth scroll)
const lenis = new Lenis({ duration: 1.2, smooth: true });
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const galeries = document.querySelectorAll('.card-gallery');

galeries.forEach(setupCarrousel);
setupViewer(galeries);