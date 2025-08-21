import { FieldPlayer, Keeper } from '@/types/player';
import { API_BASE_URL } from '@/utils/utilities/config';

export async function getPlayersByTeamId(teamId: string): Promise<FieldPlayer[] | Keeper[]> {
	const teamUrl = `${API_BASE_URL}/teams/${teamId}/players`;
	const response = await fetch(teamUrl);

	if (!response.ok) {
		throw new Error(`Failed to fetch players from team ${teamId}: ${response.statusText}`);
	}

	const data = await response.json();
	return data;
}
