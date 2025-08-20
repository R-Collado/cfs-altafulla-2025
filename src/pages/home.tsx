import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

import { LastMatches } from '@/components/last-matches';
import { NextMatch } from '@/components/next-match';
import { PlayerSlider } from '@/components/player-slider';
import { PostsPreviewSlider } from '@/components/posts-preview-slider';

export const HomePage = () => {
	const { t } = useTranslation();
	const overlayRef = useRef<HTMLDivElement>(null);
	const matchesRef = useRef<HTMLDivElement>(null);

	const homeOverlayRef = useRef<HTMLDivElement>(null);
	const pulseRef = useRef<HTMLDivElement>(null);

	gsap.registerPlugin(CustomEase);
	CustomEase.create('easing-animation', '.97,.27,.15,.74');

	useEffect(() => {
		const tl = gsap.timeline({});

		// tl.to(pulseRef.current, {
		// 	scale: 0.5,
		// 	duration: 1,
		// 	// ease: 'easing-animation',
		// 	repeat: 3,
		// 	yoyo: true,
		// });

		tl.to(pulseRef.current, {
			scale: 0.25,
			duration: 1,
			ease: 'easing-animation',
		});

		tl.to(pulseRef.current, {
			scale: 1,
			width: '150vw',
			height: '150vw',
			duration: 0.5,
			delay: 0.5,
		});

		tl.to(homeOverlayRef.current, {
			opacity: 0,
			duration: 0.75,
			delay: 0.5,
			onComplete: () => {
				homeOverlayRef.current!.style.display = 'none';
			},
		});

		tl.fromTo(
			overlayRef.current,
			{
				y: 0,
			},
			{
				yPercent: -100,
				duration: 0.5,
				ease: 'easing-animation',
			},
		);

		tl.fromTo(
			matchesRef.current,
			{
				y: 5,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.5,
				delay: 0.25,
			},
		);

		// tl.to(pulseRef.current, {
		// 	width: '130vw',
		// 	height: '130vw',
		// 	scale: 1,
		// 	duration: 0.75,
		// 	delay: 0.35,
		// 	ease: 'easing-animation',
		// });

		// tl.to(homeOverlayRef.current, {
		// 	display: 'none',
		// 	duration: 0.25,
		// });

		// tl.to(pulseRef.current, {
		// 	opacity: 0,
		// 	display: 'none',
		// });
	}, []);

	return (
		<section className="home-page">
			<div ref={homeOverlayRef} className="home-overlay">
				<div className="home-overlay-circle"></div>
				<div ref={pulseRef} className="home-overlay-pulse"></div>
			</div>
			<section className="hero | flex">
				<div ref={overlayRef} className="hero__slider__overlay" />
				<PostsPreviewSlider />
			</section>
			<section ref={matchesRef} className="matches-section | flex">
				<LastMatches />
				<NextMatch />
			</section>

			<section className="players-section">
				<h2 className="players-section__header | uppercase text-left">{t('players.ourPlayers')}</h2>
				<PlayerSlider />
			</section>
		</section>
	);
};
