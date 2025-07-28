import { DateTime } from 'luxon';
import { Match } from './match';
import { useTranslation } from 'react-i18next';

const dummymatch = {
	date: DateTime.local(2025, 7, 25, 16, 0),
	type: 'friendly',
	rival: 'FC Barcelona',
	goals: {
		altafulla: 2,
		rival: 3,
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
				<Match match={dummymatch} />
			</div>
		</div>
	);
};
