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

const USE_LOCAL = true;

export const API_BASE_URL = USE_LOCAL ? 'http://localhost:3001' : 'https://cfs-altafulla-backend.onrender.com';

export const PlayerSlider = () => {
	const [players, setPlayers] = useState<(FieldPlayer | Keeper)[]>([]);

	useEffect(() => {
		getPlayersByTeamId('male')
			.then(setPlayers)
			.catch((error) => console.error('Error fetching players:', error));
	}, []);

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
