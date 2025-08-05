import { useTranslation } from 'react-i18next';

import { formatBlogPostDate } from '@/utils/utilities/date';
import { PostTag } from './post-tag';

import { truncateText } from '@/utils/utilities/text';
import { Post } from '@/types/post';

interface Props {
	post: Post;
	type?: 'small' | 'large';
}
export const HomePostPreview = ({ post, type = 'small' }: Props) => {
	const { title, bodyTop, date, image, tag } = post;
	const { t } = useTranslation();

	const onPreviewClick = () => {
		location.href = `/blog/${post.id}`;
	};

	return (
		<article className={`post-preview-home size-${type}`}>
			<div className="post-img-wrapper">
				<img className="post-img | pointer" src={image} alt="" onClick={onPreviewClick} />
			</div>
			<div className="post-info">
				<PostTag tag={tag} />
				<p className="post-date">{formatBlogPostDate(date)}</p>
			</div>
			<h2 className="post-title | text-left">{title}</h2>
			<p className="post-excerpt | text-left">{truncateText(bodyTop, 100)}</p>
			<button className="btn-read-more | uppercase pointer">{t('common.readMore')}</button>
		</article>
	);
};
