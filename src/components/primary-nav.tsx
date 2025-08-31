import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

export const PrimaryNav = () => {
	const { t } = useTranslation();

	return (
		<nav className="primary-nav | flex  content-center align-center">
			<li>
				<Link to="/blog">{t('common.nav.blog')}</Link>
			</li>
			{/* <li>
				<Dropdown label={'Teams'} options={teamsOptions} />
			</li> */}
			<li>
				<Link to="/male/players">{t('common.nav.players')}</Link>
			</li>
			<li>
				<Link to="/contact">{t('common.nav.contact')}</Link>
			</li>
			<li>
				<Link to="#">{t('common.nav.partners')}</Link>
			</li>
		</nav>
	);
};
