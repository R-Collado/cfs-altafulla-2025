import { Suspense, useEffect, useRef, useState } from 'react';
import './App.css';

import { FieldPlayer } from './types/player';
import { PrimaryNav } from './components/primary-nav';

import { showNavBar, hideNavBar } from './animations/navbar';
import { PrimaryHeader } from './components/header';
import { useScrollDirection } from './utils/utilities/scroll';
import { PlayerCard } from './components/player-card';
import { useTranslation } from 'react-i18next';

const baseUrl = 'https://cfs-altafulla-backend.onrender.com/players';
// const dummyPost: PostPreviewProps = {
// 	title: 'El equipo ha vuelto a ganar en casa después de una mala racha colectiva',
// 	excerpt: 'Discover the top 5 futsal techniques that every player needs to know to dominate the court.',
// 	image: '/images/blog/dummy-post.png',
// 	tag: 'Training',
// 	date: '2025-02-10T14:30:00Z', // ISO 8601 format
// 	type: 'home',
// };

const dummyPlayer: FieldPlayer = {
	id: 2,
	firstName: 'Alejandro',
	lastName: 'Balde',
	role: 'keeper',
	team: 'FC Barcelona',
	birthDay: '2004-10-18',
	birthPlace: 'Barcelona',
	isCurrentPlayer: true,
	number: 3,
	nickname: 'Ale',
	careerStats: {
		matches: 100,
		goals: 20,
		saves: 10,
	},
	seasonStats: {
		matches: 20,
		goals: 5,
		saves: 5,
	},
};

function App() {
	const { t } = useTranslation();
	// const playersLink = `${baseUrl}players`;

	const [players, setPlayers] = useState<FieldPlayer[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(baseUrl)
			.then((res) => res.json()) // ← return the parsed JSON
			.then((data) => {
				setPlayers(data);
				setLoading(false);
				console.log(data);
			});
	}, []);

	if (loading) return <p>Loading players...</p>;
	if (!players || players.length === 0) return <p>No players found.</p>;

	return (
		<Suspense fallback={<div>hello world</div>}>
			<PrimaryHeader />
			<section className="players | flex flex-col align-center">
				<PlayerCard player={dummyPlayer} />
				{players.map((player) => (
					<PlayerCard key={player.id} player={player} />
				))}
			</section>

			{/* <PlayerCard player={dummyPlayer}></PlayerCard> */}
			{/* <PlayerCard player={dummyPost}></
			}
			{/* <PlayerCard player={players[0]}></PlayerCard> */}
		</Suspense>
	);
}

export default App;
