import { formatBlogPostDate } from '@/utils/utilities/date';
import { PostTag } from './post-tag';

import { truncateText } from '@/utils/utilities/text';

export interface PostPreviewProps {
	title: string;
	excerpt: string;
	image: string;
	tag: string;
	date: string;
}

export const PostPreview = ({ title, excerpt, image, tag, date }: PostPreviewProps) => {
	const onPreviewClick = () => {
		alert('preview clicked');
	};

	return (
		<article className="post-preview | max-w-fit ">
			<div className="post-img-wrapper">
				<img className="post-img | pointer" src={image} alt="" onClick={onPreviewClick} />
			</div>
			<div className="post-info | flex space-between">
				<PostTag tag={tag} />
				<p className="post-date">{formatBlogPostDate(date)}</p>
			</div>
			<h2 className="post-title | uppercase text-left">{title}</h2>
			<p className="post-excerpt | text-left">{truncateText(excerpt, 100)}</p>
		</article>
	);
};
