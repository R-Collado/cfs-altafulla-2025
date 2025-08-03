import { FieldPlayer, Keeper } from '@/types/player';

const USE_LOCAL = true;

export const API_BASE_URL = USE_LOCAL ? 'http://localhost:3001' : 'https://cfs-altafulla-backend.onrender.com';

export async function getPlayersByTeamId(teamId: string): Promise<FieldPlayer[] | Keeper[]> {
	const teamUrl = `${API_BASE_URL}/teams/${teamId}/players`;
	const response = await fetch(teamUrl);

	if (!response.ok) {
		throw new Error(`Failed to fetch players from team ${teamId}: ${response.statusText}`);
	}

	const data = await response.json();
	return data;
}
