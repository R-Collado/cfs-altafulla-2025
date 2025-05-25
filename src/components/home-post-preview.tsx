import { formatBlogPostDate } from '@/utils/utilities/date';
import { PostTag } from './post-tag';

import { truncateText } from '@/utils/utilities/text';

interface Props {
	title: string;
	excerpt: string;
	image: string;
	tag: string;
	date: string;
}

export const HomePostPreview = ({ title, excerpt, image, tag, date }: Props) => {
	const onPreviewClick = () => {
		console.log('preview clicked');
	};

	return (
		<article className="post-preview-home | max-w-fit ">
			<div className="post-img-wrapper">
				<img className="post-img | pointer" src={image} alt="" onClick={onPreviewClick} />
			</div>
			<div className="post-info">
				<PostTag tag={tag} />
				<p className="post-date">{formatBlogPostDate(date)}</p>
			</div>
			<h2 className="post-title | text-left">{title}</h2>
			<p className="post-excerpt | text-left">{truncateText(excerpt, 100)}</p>
			<button className="btn-read-more | uppercase pointer">read more</button>
		</article>
	);
};
