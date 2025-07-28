type Props = {
	teamName: string;
	goals: number;
	className?: string;
	isNext?: boolean;
};

export const MatchTeam = ({ teamName, goals, className, isNext = false }: Props) => {
	return (
		<p className={`match__team | flex ${className}`}>
			{teamName} {!isNext && <span className="match__team__altafulla__goals">{goals}</span>}
		</p>
	);
};
