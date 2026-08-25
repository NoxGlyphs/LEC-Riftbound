import {setupCarrousel} from './carrousel.js';
import {setupViewer} from './viewer.js';

const galeries = document.querySelectorAll('.card-gallery')

galeries.forEach(setupCarrousel);
galeries.forEach(setupViewer);