export interface Player {
	id: number;
	firstName: string;
	lastName: string;
	role: 'keeper' | 'defender' | 'winger' | 'pivot';
	team: string;
	birthDay: string;
	birthPlace: string;
	isCurrentPlayer: boolean;
	number?: number;
	nickname?: string;
	photoUrl?: string;
}

export interface FieldPlayer extends Player {
	seasonStats: FieldPlayerStats;
	careerStats: FieldPlayerStats;
}

export interface Keeper extends Player {
	seasonStats: KeeperStats;
	careerStats: KeeperStats;
}

export interface FieldPlayerStats {
	matches: number;
	goals: number;
	assists?: number;
}

export interface KeeperStats {
	matches: number;
	saves: number;
	cleanSheets?: number;
}

// Type guards
export function isKeeper(player: Player): player is Keeper {
	return player.role === 'keeper';
}

export function isFieldPlayer(player: Player): player is FieldPlayer {
	return player.role !== 'keeper';
}
