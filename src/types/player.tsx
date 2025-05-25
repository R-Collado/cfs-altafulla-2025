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
}

export interface KeeperStats {
	matches: number;
	saves: number;
}
