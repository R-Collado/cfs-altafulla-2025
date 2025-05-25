import { FieldPlayer } from '@/types/player';
import { t } from 'i18next';

export const PlayerCardStats = ({ player }: { player: FieldPlayer }) => {
	return (
		<>
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
		</>
	);
};
