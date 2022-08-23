import Slider from './constructor';

export default {
	init() {
		const slider = new Slider({
			init: true,
			wrap: '[data-slider-events]',
			slider: '[data-slider]',
			prev: '[data-nav-arrow-prev]',
			next: '[data-nav-arrow-next]',
			options: {
				slidesPerView: 1,
				speed: 800,
				a11y: false,
				loop: false,
				observer: true,
				observeParents: true,
				simulateTouch: false,
			},
		});
		const sliderMob = new Slider({
			init: true,
			wrap: '[data-slider-events-mob]',
			slider: '[data-slider]',
			prev: '[data-nav-arrow-prev]',
			next: '[data-nav-arrow-next]',
			paginationSelector: '.swiper-pagination',
			options: {
				slidesPerView: 1,
				speed: 800,
				a11y: false,
				loop: false,
				observer: true,
				observeParents: true,
				simulateTouch: false,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					bulletElement: 'button',
					dynamicBullets: true,
				},
			},
		});
	},
};
