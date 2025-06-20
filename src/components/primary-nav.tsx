import { Link } from 'react-router';
import { Dropdown } from './dropdown';
import { s } from 'vitest/dist/reporters-O4LBziQ_.js';

export const PrimaryNav = () => {
	const teamsOptions = [
		{ label: 'Primer Equip Masculí', value: 'male' },
		{ label: 'Primer Equip Femení', value: 'fem' },
		{ label: 'Equip Juvenil Masculí', value: 'mascjuv' },
	];

	return (
		<nav className="primary-nav | flex  content-center align-center">
			<li>
				<Link to="/blog">News</Link>
			</li>
			{/* <li>
				<Link to="/players">Players</Link>
			</li> */}
			<li>
				<Dropdown label={'Teams'} options={teamsOptions} />
			</li>
			<li>
				<Link to="#">Contact</Link>
			</li>
			<li>
				<Link to="#">Partners</Link>
			</li>
		</nav>
	);
};
