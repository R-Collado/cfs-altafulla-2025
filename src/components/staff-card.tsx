import { t } from 'i18next';
import playerBg from '/images/player-bg/player-bg-1.svg';

interface StaffProps {
	member: any;
}

export const StaffCard = ({ member }: StaffProps) => {
	return (
		<article className="staff-card">
			<div className="img-wrapper">
				<div className="img-overlay"></div>
				<img className="staff-bg" src={playerBg} alt={`${member.firstName} ${member.lastName}`} />
				<img className="staff-img" src={member.photoUrl} alt={`${member.firstName} ${member.lastName}`} />
			</div>

			<div className="staff-info">
				<div className="staff-name">
					<p className="staff-first-name">{member.firstName}</p>
					<p className="staff-last-name">{member.lastName}</p>
				</div>
			</div>
			<p className="staff-role | uppercase">{t(`players.staff.${member.role}`)}</p>
		</article>
	);
};
