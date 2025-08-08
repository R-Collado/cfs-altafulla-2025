import { Link } from 'react-router';
import { PrimaryNav } from './primary-nav';
import { useNavbarScrollAnimation } from '@/utils/utilities/scroll';
import { LanguageSelector } from './language-selector';
import LogoIcon from '@/assets/logos/team-logo.svg?react';
// import { hideNavBar, showNavBar } from '@/animations/navbar';

export const PrimaryHeader = () => {
	// const [actualScroll, setActualScroll] = useState(0);

	useNavbarScrollAnimation(); // 👈 apply the custom hook

	return (
		<header className="primary-header | flex space-between align-center fixed">
			<div className="flex align-center">
				<Link to="/">
					<LogoIcon className="team-logo" />
				</Link>
			</div>
			<PrimaryNav />
			<LanguageSelector />
		</header>
	);
};
