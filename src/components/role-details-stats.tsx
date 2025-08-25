import { FieldPlayer, Keeper } from '@/types/player';
import { useTranslation } from 'react-i18next';

interface PlayerDetailsStatsProps {
	player: FieldPlayer | Keeper;
	ref: any;
}

export const FieldPlayerDetailsStats = ({ player, ref }: PlayerDetailsStatsProps) => {
	const { t } = useTranslation();

	const playerF = player as FieldPlayer;
	return (
		<div className="player-stats | flex" ref={ref}>
			<div className="player-stat | flex flex-col align-center">
				<p className="name | uppercase">{t('players.stats.matches')}</p>
				<p className="value">{playerF?.totalStats.matches}</p>
			</div>
			<div className="player-stat | flex flex-col align-center">
				<p className="name | uppercase">{t('players.stats.goals')}</p>
				<p className="value">{playerF?.totalStats.goals}</p>
			</div>
			<div className="player-stat | flex flex-col align-center">
				<p className="name | uppercase">{t('players.stats.assists')}</p>
				<p className="value">{playerF?.totalStats.assists}</p>
			</div>
		</div>
	);
};

export const KeeperDetailsStats = ({ player, ref }: PlayerDetailsStatsProps) => {
	const { t } = useTranslation();
	const playerK = player as Keeper;

	return (
		<div className="player-stats | flex" ref={ref}>
			<div className="player-stat | flex flex-col align-center">
				<p className="name | uppercase">{t('players.stats.matches')}</p>
				<p className="value">{playerK?.totalStats.matches}</p>
			</div>
			<div className="player-stat | flex flex-col align-center">
				<p className="name | uppercase">{t('players.stats.saves')}</p>
				<p className="value">{playerK?.totalStats.saves}</p>
			</div>
			<div className="player-stat | flex flex-col align-center">
				<p className="name | uppercase">{t('players.stats.cleanSheets')}</p>
				<p className="value">{playerK?.totalStats.cleanSheets}</p>
			</div>
		</div>
	);
};
