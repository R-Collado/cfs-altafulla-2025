export interface Player {
	firstName: string;
	lastName: string;
	number: number;
	role: 'keeper' | 'defender' | 'winger' | 'pivot';
	team: string;
	birthDay: string;
	birthPlace: string;
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
