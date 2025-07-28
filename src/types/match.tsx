import { DateTime } from 'luxon';

export interface MatchInterface {
	rival: string;
	date: DateTime;
	type: 'friendly' | 'league' | 'cup' | 'tournament';
	goals: Goals;
	isAtHome: boolean;
}

interface Goals {
	altafulla: number;
	rival: number;
}
