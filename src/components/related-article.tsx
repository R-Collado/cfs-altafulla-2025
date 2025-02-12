import { formatBlogPostDate } from '@/utils/utilities/date';

interface RelatedArticleProps {
	title: string;
	image: string;
	date: string;
}

export const RelatedArticle = ({ title, image, date }: RelatedArticleProps) => {
	return (
		<article className="related-article | flex">
			<img className="img" src={image} alt="" />
			<div className="text | text-left flex flex-col space-between">
				<p className="title | uppercase">{title}</p>
				<p className="date">{formatBlogPostDate(date)}</p>
			</div>
		</article>
	);
};
