export interface Player {
	id: number;
	firstName: string;
	lastName: string;
	role: 'keeper' | 'defender' | 'winger' | 'pivot';
	teamId: string;
	birthDay: string;
	birthPlace: string;
	isCurrentPlayer: boolean;
	number?: number;
	nickname?: string;
	photoUrl?: string;
	bio: PlayerBio;
}

export interface FieldPlayer extends Player {
	seasonStats: FieldPlayerStats;
	totalStats: FieldPlayerStats;
}

export interface Keeper extends Player {
	seasonStats: KeeperStats;
	totalStats: KeeperStats;
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

export interface PlayerBio {
	ca: string;
	en: string;
	es: string;
}

// Type guards
export function isKeeper(player: Player): player is Keeper {
	return player.role === 'keeper';
}

export function isFieldPlayer(player: Player): player is FieldPlayer {
	return player.role !== 'keeper';
}
