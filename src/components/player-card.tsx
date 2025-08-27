import { FieldPlayer, isKeeper, Keeper } from '@/types/player';
import { useTranslation } from 'react-i18next';
import playerBg from '/images/player-bg/player-bg-1.svg';

import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { KeeperCardStats } from './keeper-card-stats';
import { PlayerCardStats } from './player-card-stats';
import { Link } from 'react-router';

type PlayerProps = {
	player: FieldPlayer | Keeper;
};

export const PlayerCard = ({ player }: PlayerProps) => {
	const { t } = useTranslation();
	const playerCardRef = useRef(null);
	const tl = gsap.timeline().pause();

	useLayoutEffect(() => {
		if (!playerCardRef.current) return;

		const ctx = gsap.context(() => {
			tl.to(
				'.player-name',
				{
					yPercent: -100,
					duration: 0.45,
				},
				'start',
			);

			tl.to(
				'.player-number',
				{
					yPercent: -35,
					duration: 0.45,
				},
				'start',
			);

			tl.to(
				'.player-stats',
				{
					opacity: 1,
					duration: 0.45,
					y: -20,
				},
				'start',
			);

			tl.to(
				'.player-img',
				{
					scale: 1.05,
					filter: 'brightness(0.5) blur(2px)',
					duration: 0.45,
				},
				'start',
			);
		}, playerCardRef);

		return () => ctx.revert();
	});

	const handleMouseEnter = () => {
		tl.play();
	};

	const handleMouseLeave = () => {
		tl.reverse();
	};

	return (
		<Link to={`/${player.teamId}/players/${player.id}`} className="player-link" ref={playerCardRef}>
			<article
				className="player-card | pointer flex flex-col content-end"
				ref={playerCardRef}
				id={`player-${player.id}`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}>
				<div className="img-wrapper">
					<div className="img-overlay"></div>
					<img className="player-bg" src={playerBg} alt={`${player.firstName} ${player.lastName}`} />
					<img className="player-img" src={player.photoUrl} alt={`${player.firstName} ${player.lastName}`} />
				</div>

				<div className="player-info">
					<p className="player-number">{player.number}</p>
					<div className="player-name">
						<p className="player-first-name">{player.firstName}</p>
						<p className="player-last-name | uppercase">{player.lastName}</p>
					</div>
				</div>

				<section className="player-stats | grid">
					{isKeeper(player) ? <KeeperCardStats player={player} /> : <PlayerCardStats player={player} />}
				</section>

				<p className="player-role | uppercase">{t(`players.roles.${player.role}`)}</p>
			</article>
		</Link>
	);
};
