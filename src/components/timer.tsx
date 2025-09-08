import { API_BASE_URL } from '@/utils/utilities/config';
import { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';

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
	console.log(matchDay, nextMatch?.rival);

	return (
		<div className="next-match-timer | text-left">
			<p ref={timerRef} className="time"></p>
			<p className="date">{matchDay.format('DD [de] MMMM [de] YYYY')}</p>
		</div>
	);
};

const updateCountdown = (targetDate: any) => {
	const now = dayjs();
	const diff = dayjs(targetDate).diff(now);
	const date = dayjs(targetDate).toString();
	console.log(date);

	const days = dayjs(diff).date() + 1;
	const minutes = dayjs(diff).minute();
	const hours = dayjs(diff).hour();
	const seconds = dayjs(diff).second();

	if (days < 1) {
		return `${hours} : ${minutes} : ${seconds}`;
	}

	return `${days} : ${hours} : ${minutes}`;
};
