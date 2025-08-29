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

	const sortedPlayers = sortPlayersByStats(players);

	return (
		<Swiper
			modules={[Navigation, Pagination]}
			spaceBetween={50}
			slidesPerView={'auto'}
			navigation
			pagination={{ clickable: true }}
			className="player-slider">
			{sortedPlayers.map((player: any) => (
				<SwiperSlide key={player.id} className="player-slide">
					<PlayerCard player={player} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

const sortPlayersByStats = (players: any) => {
	const goalsWeight = 3;
	const assistsWeight = 1.5;
	const savesWeight = 0.25;

	const sortedPlayers = players.sort((a: any, b: any) => {
		const isKeeperA = a.role === 'keeper';
		const isKeeperB = b.role === 'keeper';

		const aScore = isKeeperA
			? a.seasonStats.saves * savesWeight + a.seasonStats.cleanSheets / a.seasonStats.matches
			: a.seasonStats.goals * goalsWeight + (a.seasonStats.assists * assistsWeight) / a.seasonStats.matches;

		const bScore = isKeeperB
			? b.seasonStats.saves * savesWeight + b.seasonStats.cleanSheets / b.seasonStats.matches
			: b.seasonStats.goals * goalsWeight + (b.seasonStats.assists * assistsWeight) / b.seasonStats.matches;

		// if (aScore === bScore || Number.isNaN(aScore) || Number.isNaN(bScore)) {
		// 	return a.number - b.number; // Ascending order by number if scores are equal
		// }
		return bScore - aScore;
	});

	return sortedPlayers;
};
