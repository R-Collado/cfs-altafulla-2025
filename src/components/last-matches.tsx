import { DateTime } from 'luxon';
import { Match } from './match';
import { useTranslation } from 'react-i18next';

const dummymatch = {
	date: DateTime.local(2025, 5, 31, 16, 15, { zone: 'Europe/Madrid' }),
	type: 'cup',
	rival: 'El Catllar Atletic',
	goals: {
		altafulla: 9,
		rival: 3,
	},
	isAtHome: true,
} as const;

const dummymatch2 = {
	date: DateTime.local(2025, 5, 15, 21, 0, { zone: 'Europe/Madrid' }),
	type: 'league',
	rival: 'Vila-Rodona B',
	goals: {
		altafulla: 6,
		rival: 2,
	},
	isAtHome: true,
} as const;

export const LastMatches = () => {
	const { t } = useTranslation();

	return (
		<div className="match-section last-matches">
			<h3 className="match-section__header | uppercase">{t('matches.lastMatches')}:</h3>
			<div className="match-section__match-list | flex">
				<Match match={dummymatch} />
				<Match match={dummymatch2} />
			</div>
		</div>
	);
};
