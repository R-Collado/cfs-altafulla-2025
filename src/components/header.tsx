import { Link } from 'react-router';
import { PrimaryNav } from './primary-nav';
import { useNavbarScrollAnimation } from '@/utils/utilities/scroll';
// import { hideNavBar, showNavBar } from '@/animations/navbar';

export const PrimaryHeader = () => {
	// const [actualScroll, setActualScroll] = useState(0);

	useNavbarScrollAnimation(); // 👈 apply the custom hook

	return (
		<header className="primary-header | flex space-between fixed">
			<div className="flex align-center">
				<Link to="/">Club Futsal Altafulla</Link>
			</div>
			<PrimaryNav />
			<ul className="language-selector | flex">
				<li>es</li>
				<li>ca</li>
				<li>en</li>
			</ul>
		</header>
	);
};
