import { PlayerCard } from '@/components/player-card';
import { FieldPlayer, Keeper } from '@/types/player';
import { getTeamByUrl } from '@/utils/utilities/url';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { API_BASE_URL } from '@/utils/utilities/config';

const availableRoles = ['keeper', 'defender', 'winger', 'pivot'] as const;

export const PlayersPage = () => {
	const { t } = useTranslation();
	const location = useLocation();

	const [players, setPlayers] = useState<FieldPlayer[] | Keeper[]>([]);
	const [loading, setLoading] = useState(true);
	const overlayRef = useRef<HTMLDivElement>(null);
	const teamId = getTeamByUrl(window.location.href);

	const teamUrl = `${API_BASE_URL}/teams/${teamId}/players`;
	console.log('Fetching players from:', teamUrl);

	gsap.registerPlugin(CustomEase);
	CustomEase.create('easing-animation', '.97,.27,.15,.74');

	useEffect(() => {
		fetch(teamUrl)
			.then((res) => res.json()) // ← return the parsed JSON
			.then((data) => {
				setPlayers(data);
				setLoading(false);
			});
	}, [location]);

	useEffect(() => {
		if (loading) return;

		gsap.to(overlayRef.current, {
			y: '-100%',
			duration: 0.25,
			ease: 'easing-animation',
			delay: 1,
		});
	}, [loading]);

	if (loading) return <p>Loading players...</p>;
	if (!players || players.length === 0) return <p>No players found.</p>;

	return (
		<section className="page-container players">
			<div className="overlay" ref={overlayRef}></div>
			{availableRoles.map((role) => {
				const playersByRole = players.filter((player) => player.role === role);
				if (playersByRole.length === 0) return null;

				const playersSorted = playersByRole.sort((a, b) => {
					if (a.number && b.number) {
						return a.number - b.number;
					}
					if (a.number) return -1; // a has number, b does not
					if (b.number) return 1; // b has number, a does not
					return 0; // neither has number, maintain original order
				});

				return (
					<div key={role} className="players-by-role">
						<h2 className="players-role | uppercase">{t(`players.roles.plural.${role}`)}</h2>
						<div className="players-list">
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
