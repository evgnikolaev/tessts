import Lazyload from './lazyload';
import Validation from './validation';
import Mask from './mask';
import Sal from './sal';
import Select2 from './select';

document.addEventListener('DOMContentLoaded', () => {
	Lazyload.init();
	Validation.init();
	Mask.init();
	Sal.init();
	Select2.init();
});

window.addEventListener('init.lazyload', () => {
	Lazyload.init();
});

window.addEventListener('init.mask', () => {
	Mask.init();
});
