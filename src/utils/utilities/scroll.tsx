import { hideLanguageSelector, hideNavBar, showNavBar } from '@/animations/navbar';
import { useEffect, useRef } from 'react';

export const useNavbarScrollAnimation = () => {
	const lastScrollY = useRef(window.scrollY);
	const isHidden = useRef(false); // Track current state

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const direction = getScrollDirection(lastScrollY.current, currentScrollY);

			if (direction === 'down' && !isHidden.current) {
				hideNavBar();
				hideLanguageSelector();
				isHidden.current = true;
			} else if (direction === 'up' && isHidden.current) {
				showNavBar();
				isHidden.current = false;
			}

			lastScrollY.current = currentScrollY;
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
};

export const getScrollDirection = (lastY: number, currentY: number) => {
	if (currentY > lastY) return 'down';
	if (currentY < lastY) return 'up';
	return 'none';
};
