import 'parsleyjs';
import './parsley-ru';

export default {
	init() {
		window.addEventListener('init.validation', () => {
			const $lang = $('html').attr('lang');
			const $forms = $(
				'[data-parsley-validate]:not([data-parsley-initialized])'
			);
			$forms.each((index, form) => {
				const $form = $(form);
				$form.parsley();
				$form.attr('data-parsley-initialized', '');
				window.Parsley.setLocale(`${$lang}`);
			});
		});
		window.dispatchEvent(new CustomEvent('init.validation'));
	},
};
