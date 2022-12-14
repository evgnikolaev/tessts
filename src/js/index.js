import './polyfills';
import './utils/throttle';
import './utils/slideToggle';
import './utils/scroll';
import './utils/userAgent';

import './libs';
import SlidersInit from './components/slider';

import {devices} from './utils/breakpoints';

window.UPB = window.UPB || {};
window.breakpoints = devices;

__webpack_public_path__ = window.__webpack_public_path__ || '';

window.breakpoints = devices;

document.addEventListener('DOMContentLoaded', () => {
	SlidersInit.init();
});


window.addEventListener('load', () => {
	document.documentElement.classList.add('is-loaded');
});

window.addEventListener('reinit', () => {
	window.dispatchEvent(new CustomEvent('init.lazyload'));
	window.dispatchEvent(new CustomEvent('init.validation'));
	window.dispatchEvent(new CustomEvent('init.mask'));
	window.dispatchEvent(new CustomEvent('init.scrollAnimation'));
});
