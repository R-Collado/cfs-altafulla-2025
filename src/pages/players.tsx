import { PlayerCard } from '@/components/player-card';
import { FieldPlayer, Keeper } from '@/types/player';
import { getTeamByUrl } from '@/utils/utilities/url';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { API_BASE_URL } from '@/utils/utilities/config';
import { StaffCard } from '@/components/staff-card';

const availableRoles = ['keeper', 'defender', 'winger', 'pivot'] as const;

export const PlayersPage = () => {
	const { t } = useTranslation();
	const [players, setPlayers] = useState<FieldPlayer[] | Keeper[]>([]);
	const [staff, setStaff] = useState([]);
	const [loading, setLoading] = useState(true);
	const overlayRef = useRef<HTMLDivElement>(null);
	const teamId = getTeamByUrl(window.location.href);

	const teamUrl = `${API_BASE_URL}/teams/${teamId}/players`;
	const staffUrl = `${API_BASE_URL}/staff`;

	useEffect(() => {
		fetch(teamUrl)
			.then((res) => res.json()) // ← return the parsed JSON
			.then((data) => {
				setPlayers(data);
				setLoading(false);
			});

		fetch(staffUrl)
			.then((res) => res.json()) // ← return the parsed JSON
			.then((data) => {
				setStaff(data);
				console.log(data);
			});
	}, []);

	useLayoutEffect(() => {});

	useEffect(() => {
		if (loading) return;

		gsap.to(overlayRef.current, {
			y: '-100%',
			duration: 0.5,
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
							{playersSorted.map((player) => (
								<PlayerCard key={player.id} player={player} />
							))}
						</div>
					</div>
				);
			})}
			<div className="staff-list">
				<div className="staff-grid">
					{staff.map((member, idx) => {
						return <StaffCard key={idx} member={member} />;
					})}
				</div>
			</div>
		</section>
	);
};
