import { PlayerCard } from '@/components/player-card';
import { FieldPlayer, Keeper } from '@/types/player';
import { getTeamByUrl } from '@/utils/utilities/url';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';

const USE_LOCAL = true;

export const API_BASE_URL = USE_LOCAL ? 'http://localhost:3001' : 'https://cfs-altafulla-backend.onrender.com';

const availableRoles = ['keeper', 'defender', 'winger', 'pivot'] as const;

export const PlayersPage = () => {
	const { t } = useTranslation();
	const location = useLocation();

	const [players, setPlayers] = useState<FieldPlayer[] | Keeper[]>([]);
	const [loading, setLoading] = useState(true);
	const teamId = getTeamByUrl(window.location.href);

	const teamUrl = `${API_BASE_URL}/teams/${teamId}/players`;

	useEffect(() => {
		fetch(teamUrl)
			.then((res) => res.json()) // ← return the parsed JSON
			.then((data) => {
				setPlayers(data);
				setLoading(false);
			});
	}, [location]);

	if (loading) return <p>Loading players...</p>;
	if (!players || players.length === 0) return <p>No players found.</p>;

	return (
		<section className="page-container players">
			{availableRoles.map((role) => {
				const playersByRole = players.filter((player) => player.role === role);
				if (playersByRole.length === 0) return null;

				return (
					<div key={role} className="players-by-role">
						<h2 className="players-role | uppercase">{t(`players.roles.plural.${role}`)}</h2>
						<div className="players-list | grid">
							{playersByRole.map((player) => (
								<PlayerCard key={player.id} player={player} />
							))}
						</div>
					</div>
				);
			})}
		</section>
	);
};
