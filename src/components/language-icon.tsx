import CatalanIcon from '@assets/icons/ca.svg';
import SpanishIcon from '@assets/icons/es.svg';
import EnglishIcon from '@assets/icons/en.svg';

export const LanguageIcon = ({ lang }: { lang: string }) => {
	switch (lang) {
		case 'ca':
			return <img className="language-icon" src={CatalanIcon} alt="Catalan" />;
		case 'es':
			return <img className="language-icon" src={SpanishIcon} alt="Spanish" />;
		case 'en':
			return <img className="language-icon" src={EnglishIcon} alt="English" />;
		default:
			return null;
	}
};
