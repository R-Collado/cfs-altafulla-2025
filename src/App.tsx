import { Suspense } from 'react';
import './App.css';

import { PrimaryHeader } from './components/header';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

// const dummyPost: PostPreviewProps = {
// 	title: 'El equipo ha vuelto a ganar en casa después de una mala racha colectiva',
// 	excerpt: 'Discover the top 5 futsal techniques that every player needs to know to dominate the court.',
// 	image: '/images/blog/dummy-post.png',
// 	tag: 'Training',
// 	date: '2025-02-10T14:30:00Z', // ISO 8601 format
// 	type: 'home',
// };

// const dummyPlayer: FieldPlayer = {
// 	id: 2,
// 	firstName: 'Alejandro',
// 	lastName: 'Balde',
// 	role: 'keeper',
// 	team: 'FC Barcelona',
// 	birthDay: '2004-10-18',
// 	birthPlace: 'Barcelona',
// 	isCurrentPlayer: true,
// 	number: 3,
// 	nickname: 'Ale',
// 	careerStats: {
// 		matches: 100,
// 		goals: 20,
// 		saves: 10,
// 	},
// 	seasonStats: {
// 		matches: 20,
// 		goals: 5,
// 		saves: 5,
// 	},
// };

function App() {
	const { t } = useTranslation();
	// const playersLink = `${baseUrl}players`;

	return (
		<Suspense fallback={<div>hello world</div>}>
			<PrimaryHeader />
			<Outlet />

			{/* <PlayerCard player={dummyPlayer}></PlayerCard> */}
			{/* <PlayerCard player={dummyPost}></
		// 	}
		// 	{/* <PlayerCard player={players[0]}></PlayerCard> */}
		</Suspense>
	);
}

export default App;
