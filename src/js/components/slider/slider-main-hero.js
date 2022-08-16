import Slider from './constructor';

export default {
	init() {
		const slider = new Slider({
			init: true,
			wrap: '[data-slider-main-hero]',
			slider: '[data-slider]',
			paginationSelector: '.swiper-pagination',
			options: {
				slidesPerView: 1,
				speed: 800,
				a11y: false,
				loop: true,
				observer: true,
				observeParents: true,
				effect: 'fade',
				fadeEffect: {
					crossFade: true,
				},
				lazy: {
					loadPrevNext: true,
					checkInView: true,
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					bulletElement: 'button',
				},
			},
		});
	},
};
