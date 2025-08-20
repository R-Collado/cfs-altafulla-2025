// export interface Post {
// 	id: number;
// 	title: string;
// 	bodyTop: string;
// 	bodyBottom: string;
// 	date: string;
// 	image: string;
// 	tag: string;
// }

export interface Post {
	id: number;
	date: string;
	image: string;
	translations: PostTranslations;
	tag: TagTranslation;
}

interface PostTranslations {
	en: PostTranslation;
	ca: PostTranslation;
	es: PostTranslation;
}

export interface PostTranslation {
	title: string;
	bodyTop: string;
	bodyBottom: string;
}

export interface TagTranslation {
	en: string;
	ca: string;
	es: string;
	slug: string;
}
