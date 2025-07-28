import { FieldPlayer, Keeper } from '@/types/player';
import { useTranslation } from 'react-i18next';

export const FieldPlayerDetailsStats = ({ player }: { player: FieldPlayer }) => {
	const { t } = useTranslation();
	return (
		<div className="player-stats | flex  ">
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

	return (
		<div className="player-stats | flex">
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
