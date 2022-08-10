import Lazyload from './lazyload';
import Validation from './validation';
import Mask from './mask';
import Sal from './sal';

document.addEventListener('DOMContentLoaded', () => {
	Lazyload.init();
	Validation.init();
	Mask.init();
	Sal.init();
});

window.addEventListener('init.lazyload', () => {
	Lazyload.init();
});

window.addEventListener('init.mask', () => {
	Mask.init();
});
