import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { PlayerCard } from './player-card';
import { useEffect, useState } from 'react';
import { FieldPlayer, Keeper } from '@/types/player';
import { getPlayersByTeamId } from '@/api/players';

export const PlayerSlider = () => {
	const [players, setPlayers] = useState<(FieldPlayer | Keeper)[]>([]);

	useEffect(() => {
		getPlayersByTeamId('male')
			.then(setPlayers)
			.catch((error) => console.error('Error fetching players:', error));
	}, []);

	sortPlayersByStats(players);

	return (
		<Swiper
			modules={[Navigation, Pagination]}
			spaceBetween={50}
			slidesPerView={'auto'}
			navigation
			pagination={{ clickable: true }}
			className="player-slider">
			{players.map((player) => (
				<SwiperSlide key={player.id} className="player-slide">
					<PlayerCard player={player} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

const sortPlayersByStats = (players: any) => {
	players.sort((a: any, b: any) => {
		const aScore = a.seasonStats.goals || a.seasonStats.saves + a.seasonStats.assists * 0.5;
		const bScore = b.seasonStats.goals || b.seasonStats.saves + b.seasonStats.assists * 0.5;

		console.log('scores', a.seasonStats.goals, a.seasonStats.assists);
	});

	return players;
};
