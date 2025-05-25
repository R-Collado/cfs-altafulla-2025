import { gsap } from 'gsap';

export const hideNavBar = () => {
	const navbar = document.querySelector('.primary-header');

	gsap.to(navbar, {
		y: -75,
		duration: 0.5,
	});
};

export const showNavBar = () => {
	const navbar = document.querySelector('.primary-header');
	console.log('showNavBar called');

	gsap.to(navbar, {
		y: 0,
		duration: 0.5,
	});
};

export const animateNavbar = (scroll: number, endScroll: number) => {
	if (scroll < endScroll) {
		console.log('scrolled up');
	} else {
		console.log('scrolled down');
	}
};
