import { LastMatches } from '@/components/last-matches';
import { NextMatch } from '@/components/next-match';
import { Timer } from '@/components/timer';

export const HomePage = () => {
	return (
		<>
			<h1>Home</h1>;
			<Timer />
			<LastMatches />
			<NextMatch />
		</>
	);
};
