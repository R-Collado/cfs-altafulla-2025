export const truncateText = (text, maxLength) => {
	return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

export default function paragraphBlock({ text }) {
	console.log('Received text:', text);

	return (
		<>
			{text.split(/\r?\n/).map((paragraph, idx) => (
				<p key={idx}>{paragraph.trim()}</p>
			))}
		</>
	);
}
