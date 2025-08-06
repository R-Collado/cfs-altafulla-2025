export const truncateText = (text, maxLength) => {
	return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

export default function paragraphBlock({ text, className = '' }) {
	return (
		<>
			{text.split(/\r?\n/).map((paragraph, idx) => (
				<p key={idx} className={className}>
					{paragraph.trim()}
				</p>
			))}
		</>
	);
}
