import { useTranslation } from 'react-i18next';

import { useEffect, useState, useRef } from 'react';
import { LanguageIcon } from './language-icon';

export const LanguageSelector = () => {
	const { i18n } = useTranslation();
	const [activeLanguage, setActiveLanguage] = useState('');
	const languages = ['en', 'es', 'ca']; // List of supported languages
	const languageListRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const currentLanguage = localStorage.getItem('currentLanguage') || i18n.language || 'es';
		setActiveLanguage(currentLanguage);
	}, []);

	const handleLanguageChange = (lang: string) => {
		i18n.changeLanguage(lang);
		localStorage.setItem('currentLanguage', lang);
		window.location.reload();
	};

	const toggleLanguageList = () => {
		languageListRef.current?.classList.toggle('open');
	};

	return (
		<div className="language-selector">
			<button className="active-language | uppercase pointer" onClick={toggleLanguageList}>
				<LanguageIcon lang={activeLanguage} />
				<span>{activeLanguage}</span>
			</button>

			<div className="language-list" ref={languageListRef}>
				{languages
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
