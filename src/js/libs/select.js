import 'select2';

export default {
	init() {
		this.initSelect();
		window.addEventListener('init.select', () => {
			this.initSelect();
		});
	},
	initSelect() {
		$('[data-select]').each(function () {
			const settings = {
				allowClear: false,
				width: 'style',
				minimumResultsForSearch: Infinity,
			};

			// light-theme
			if ($(this).hasClass('select--light')) {
				settings.selectionCssClass = 'select2-selection--light';
				settings.dropdownCssClass = 'select2-dropdown--light';
			}

			$(this).select2(settings);
		});
	},
};
