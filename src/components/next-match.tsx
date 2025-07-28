import { useTranslation } from 'react-i18next';
import { Match } from './match';
import { DateTime } from 'luxon';

export const NextMatch = () => {
	const { t } = useTranslation();

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

	return (
		<div className="match-section next-match">
			<h3 className="match-section__header | uppercase">{t('matches.nextMatch')}:</h3>
			<Match match={dummymatch} isNext={true} />
		</div>
	);
};
