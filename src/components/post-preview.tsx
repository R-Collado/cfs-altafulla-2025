import { formatBlogPostDate } from '@/utils/utilities/date';
import { PostTag } from './post-tag';

import { truncateText } from '@/utils/utilities/text';
import { Post } from '@/types/post';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

export interface PostPreviewProps {
	post: Post;
	type: string;
}

export const PostPreview = ({ post, type }: PostPreviewProps) => {
	const { i18n } = useTranslation();
	const lang = i18n.language as 'en' | 'ca' | 'es'; // Adjust based on your supported languages

	const { translations, date, image, tag } = post; // Assuming 'en' is the default language

	return (
		<article className="post-preview | max-w-fit " data-type={type}>
			<Link to={`/blog/${post.id}`}>
				<div className="post-img-wrapper">
					<img className="post-img | pointer" src={image} alt="" />
				</div>
				<div className="post-info | flex space-between">
					<PostTag tag={tag[lang]} />
					<p className="post-date">{formatBlogPostDate(date)}</p>
				</div>
				<h2 className="post-title | uppercase text-left">{translations[lang].title}</h2>
				<p className="post-excerpt | text-left">{truncateText(translations[lang].bodyTop, 100)}</p>
			</Link>
		</article>
	);
};
