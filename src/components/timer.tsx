import { API_BASE_URL } from '@/utils/utilities/config';
import { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import i18n from '@/18n';
import localeData from 'dayjs/plugin/localeData'; // ES 2015
import 'dayjs/locale/ca';
import 'dayjs/locale/es';

dayjs.extend(localeData);

const matchesUrl = API_BASE_URL + '/matches';

export const Timer = () => {
	const [nextMatch, setNextMatch] = useState(null);

	const timerRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		fetch(matchesUrl + '/next')
			.then((res) => res.json()) // ← return the parsed JSON
			.then((data) => {
				setNextMatch(data);
				setInterval(() => {
					const matchDate = dayjs(data.date + ' ' + data.time);
					timerRef.current!.innerText = updateCountdown(matchDate);
				}, 1000);
			});
	}, []);

	const matchDay = dayjs(nextMatch?.date + ' ' + nextMatch?.time);
	dayjs.locale(i18n.language);

	return (
		<div className="next-match-timer | text-left">
			<p ref={timerRef} className="time"></p>
			<p className="date">{matchDay.format('DD MMMM YYYY')}</p>
		</div>
	);
};

const updateCountdown = (targetDate: any) => {
	const now = dayjs();
	const diff = dayjs(targetDate).diff(now);

	const days = String(dayjs(diff).date() + 1).padStart(2, '0');
	const hours = String(dayjs(diff).hour()).padStart(2, '0');
	const minutes = String(dayjs(diff).minute()).padStart(2, '0');
	const seconds = String(dayjs(diff).second()).padStart(2, '0');

	if (days < '01') {
		return `${hours} : ${minutes} : ${seconds}`;
	}

	return `${days} : ${hours} : ${minutes}`;
};
