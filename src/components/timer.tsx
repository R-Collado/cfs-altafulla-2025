import { useEffect, useRef } from 'react';

const targetDate = new Date('September 7, 2025 03:00:00');

export const Timer = () => {
	const timerRef = useRef<HTMLParagraphElement>(null);

	const starterTime = updateCountdown();

	useEffect(() => {
		setInterval(() => {
			timerRef.current!.innerText = updateCountdown();
		}, 1000);
	}, []);

	const matchDay = targetDate.toLocaleDateString('es', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	return (
		<div className="next-match-timer | text-left">
			<p ref={timerRef} className="time">
				{starterTime}
			</p>
			<p className="date">{matchDay}</p>
		</div>
	);
};

const updateCountdown = () => {
	const now = new Date();
	const diff = targetDate.getTime() - now.getTime();

	const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
	const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
	const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
	const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

	if (days < '01') {
		return `${hours} : ${minutes} : ${seconds}`;
	}

	return `${days} : ${hours} : ${minutes}`;
};
