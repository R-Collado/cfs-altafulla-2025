import { useTranslation } from 'react-i18next';

export const ContactPage = () => {
	const { t } = useTranslation();

	return (
		<section className="page-container contact-page">
			<header>
				<p className="header-subtitle">{t('contact.contactUs')}</p>
				<h2 className="heading">{t('contact.title')}</h2>
				<div className="line" />
			</header>
			<form className="contact-form | flex flex-col gap-4" action="https://formspree.io/f/xkgvbgvp" method="POST">
				<label htmlFor="name">{t('contact.firstName')}</label>
				<input type="text" id="name" name="name" required />
				<label htmlFor="surname">{t('contact.lastName')}</label>
				<input type="text" id="surname" name="surname" required />
				<label htmlFor="email">{t('contact.email')}</label>
				<input type="email" id="email" name="email" required />
				<label htmlFor="message">{t('contact.message')}</label>
				<textarea id="message" name="message" required />
				<button type="submit" className="uppercase pointer">
					{t('common.send')}
				</button>
			</form>
		</section>
	);
};
