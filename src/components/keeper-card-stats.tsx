import { Keeper } from '@/types/player';
import { t } from 'i18next';

export const KeeperCardStats = ({ player }: { player: Keeper }) => {
	return (
		<>
			<section className="stat matches">
				<p className="stat-name | uppercase">{t('players.stats.matches')}</p>
				<p className="stat-value">{player.totalStats.matches}</p>
			</section>
			<section className="stat goals-assists">
				<p className="stat-name | uppercase">{t('players.stats.saves')}</p>
				<p className="stat-value">{player.totalStats.saves}</p>
			</section>
			<section className="stat per-match">
				<p className="stat-name | uppercase">{t('players.stats.cleanSheets')}</p>
				<p className="stat-value">{player.totalStats.cleanSheets}</p>
			</section>
		</>
	);
};
