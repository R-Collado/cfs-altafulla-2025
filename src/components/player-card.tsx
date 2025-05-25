import { FieldPlayer, Player } from '@/types/player';
import dummyPlayer from '/images/players/dummy.webp';
import { useTranslation } from 'react-i18next';
import playerBg from '/images/player-bg/player-bg-1.svg';

import { gsap } from 'gsap';
import { useRef } from 'react';

type PlayerProps = {
	player: FieldPlayer;
};

export const PlayerCard = ({ player }: PlayerProps) => {
	const { t } = useTranslation();
	const playerCardRef = useRef(null);

	const tl = gsap.timeline().pause();

	const playerCard = playerCardRef.current;
	const playerName = playerCard?.querySelector('.player-name');
	const playerNumber = playerCard?.querySelector('.player-number');
	const playerRole = playerCard?.querySelector('.player-role');
	const playerStats = playerCard?.querySelector('.player-stats');

	tl.to(
		playerName,
		{
			yPercent: -100,
			duration: 0.45,
			position: 1,
		},
		'start', // start of the timeline (can be any label),
	);

	tl.to(
		playerNumber,
		{
			yPercent: -35,
			duration: 0.45,
		},
		'start',
	);

	tl.to(
		playerStats,
		{
			opacity: 1,
			duration: 0.45,
			y: -20,
		},
		'start',
	);

	const handleMouseEnter = () => {
		tl.play();
	};

	const handleMouseLeave = () => {
		tl.reverse();
	};

	console.log(player.firstName, player.seasonStats);
	return (
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

			<section className="player-stats | grid ">
				<section className="stat matches">
					<p className="stat-name | uppercase">{t('players.stats.matches')}</p>
					<p className="stat-value">{player.seasonStats.matches}</p>
				</section>
				<section className="stat goals-assists">
					<p className="stat-name | uppercase">{t('players.stats.goals')}</p>
					<p className="stat-value">{player.seasonStats.goals}</p>
				</section>
				<section className="stat per-match">
					<p className="stat-name | uppercase">{t('players.stats.assists')}</p>
					<p className="stat-value">1</p>
				</section>
			</section>

			<p className="player-role | uppercase">{t(`players.roles.${player.role}`)}</p>
		</article>
	);
};
