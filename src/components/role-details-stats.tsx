import { FieldPlayer, Keeper } from '@/types/player';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const FieldPlayerDetailsStats = ({ player }: { player: FieldPlayer }) => {
	const { t } = useTranslation();
	const fieldPlayerStatsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.fromTo(
			fieldPlayerStatsRef.current,
			{
				opacity: 0,
				yPercent: 10,
			},
			{
				opacity: 1,
				yPercent: 0,
				duration: 0.5,
				delay: 0.35,
			},
			'1',
		);
	}, []);
	return (
		<div className="player-stats | flex" ref={fieldPlayerStatsRef}>
			<div className="player-stat | flex flex-col align-center">
				<p className="name | uppercase">{t('players.stats.matches')}</p>
				<p className="value">{player?.totalStats.matches}</p>
			</div>
			<div className="player-stat | flex flex-col align-center">
				<p className="name | uppercase">{t('players.stats.goals')}</p>
				<p className="value">{player?.totalStats.goals}</p>
			</div>
			<div className="player-stat | flex flex-col align-center">
				<p className="name | uppercase">{t('players.stats.assists')}</p>
				<p className="value">{player?.totalStats.assists}</p>
			</div>
		</div>
	);
};

export const KeeperDetailsStats = ({ player }: { player: Keeper }) => {
	const { t } = useTranslation();
	const keeperStatsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.fromTo(
			keeperStatsRef.current,
			{
				opacity: 0,
				yPercent: 10,
			},
			{
				opacity: 1,
				yPercent: 0,
				duration: 0.5,
				delay: 0.35,
			},
			'1',
		);
	}, []);

	return (
		<div className="player-stats | flex" ref={keeperStatsRef}>
			<div className="player-stat | flex flex-col align-center">
				<p className="name | uppercase">{t('players.stats.matches')}</p>
				<p className="value">{player?.totalStats.matches}</p>
			</div>
			<div className="player-stat | flex flex-col align-center">
				<p className="name | uppercase">{t('players.stats.saves')}</p>
				<p className="value">{player?.totalStats.saves}</p>
			</div>
			<div className="player-stat | flex flex-col align-center">
				<p className="name | uppercase">{t('players.stats.cleanSheets')}</p>
				<p className="value">{player?.totalStats.cleanSheets}</p>
			</div>
		</div>
	);
};
