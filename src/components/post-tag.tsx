interface PostTagProps {
	tag: string;
}

export const PostTag = ({ tag }: PostTagProps) => {
	const onTagClick = () => {};

	return (
		<button className="post-tag | uppercase br-pill pointer" onClick={onTagClick}>
			{tag}
		</button>
	);
};
