import Lazyload from './lazyload';
import Validation from './validation';
import Mask from './mask';

document.addEventListener('DOMContentLoaded', () => {
	Lazyload.init();
	Validation.init();
	Mask.init();
});

window.addEventListener('init.lazyload', () => {
	Lazyload.init();
});

window.addEventListener('init.mask', () => {
	Mask.init();
});
