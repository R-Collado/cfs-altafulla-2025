import { useTranslation } from 'react-i18next';

import { useRef } from 'react';
import { LanguageIcon } from './language-icon';

export const LanguageSelector = () => {
	const { i18n } = useTranslation();
	const activeLanguage = i18n.language;
	const languages = ['en', 'es', 'ca']; // List of supported languages
	const languageListRef = useRef<HTMLDivElement | null>(null);

	const sortedLanguages = [activeLanguage, ...languages.filter((l) => l !== activeLanguage)];

	const handleLanguageChange = (lang: string) => {
		i18n.changeLanguage(lang);
		localStorage.setItem('currentLanguage', lang);
		languageListRef.current?.classList.remove('open');
	};

	const toggleLanguageList = () => {
		languageListRef.current?.classList.toggle('open');
	};

	return (
		<div className="language-selector">
			<button className="active-language | uppercase pointer" onClick={toggleLanguageList}>
				<LanguageIcon lang={sortedLanguages[0]} />
				<span>{activeLanguage}</span>
			</button>

			<div className="language-list" ref={languageListRef}>
				{sortedLanguages
					.filter((lang) => lang !== activeLanguage)
					.map((lang) => (
						<button
							key={lang}
							className="language-option | uppercase pointer"
							onClick={() => handleLanguageChange(lang)}>
							<LanguageIcon lang={lang} />
							<span>{lang}</span>
						</button>
					))}
			</div>
		</div>
	);
};
