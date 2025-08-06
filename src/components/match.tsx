import { useTranslation } from 'react-i18next';
import { MatchTeam } from './match-team';
import { MatchInterface } from '@/types/match';

interface MatchProps {
	match: MatchInterface;
	isNext?: boolean;
}

export const Match = ({ match, isNext }: MatchProps) => {
	const { t } = useTranslation();
	const { date, type, rival, goals, isAtHome } = match;

	const openLink = () => {
		window.open(
			'https://www.fcf.cat/resultats/2526/futbol-sala/lliga-segona-divisio-catalana-futbol-sala/tgn-gr-11',
			'_blank',
		);
	};

	// Get type "past-match" or "future-match" based on the date. And add it to the className or as data-value to change style.
	return (
		<article className="match | flex">
			<p className="match__date | flex flex-col">
				<span className="match__date__day">{date.day}</span>
				<span className="match__date__month">{date.toFormat('MMM')}</span>
			</p>
			<div className="match__info | flex flex-col">
				<h4 className="match__info__header | uppercase">
					{t(`matches.type.${type}`)}: {date.hour} : {String(date.minute).padStart(2, '0')}
				</h4>
				{isAtHome ? (
					<>
						<MatchTeam teamName="CFS Altafulla" goals={goals.altafulla} className="fw-bold" isNext={isNext} />
						<MatchTeam teamName={rival} goals={goals.rival} isNext={isNext} />
					</>
				) : (
					<>
						<MatchTeam teamName={rival} goals={goals.rival} isNext={isNext} />
						<MatchTeam teamName="CFS Altafulla" goals={goals.altafulla} className="fw-bold" isNext={isNext} />
					</>
				)}
				{isNext && (
					<button className="btn-standings | uppercase pointer" onClick={openLink}>
						{t('matches.standings')}
					</button>
				)}
			</div>
		</article>
	);
};
