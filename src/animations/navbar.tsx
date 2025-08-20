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

	gsap.to(navbar, {
		y: 0,
		duration: 0.5,
	});
};

export const hideLanguageSelector = () => {
	const languageList = document.querySelector('.language-list');
	languageList?.classList.remove('open');
};
