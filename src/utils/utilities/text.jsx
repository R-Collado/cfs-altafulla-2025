export const truncateText = (text, maxLength) => {
	return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

export default function paragraphBlock({ text }) {
	return (
		<>
			{text.split(/\n{2,}/).map((paragraph, idx) => (
				<p key={idx} className="text-lg text-gray-800 leading-relaxed mb-6">
					{paragraph.trim()}
				</p>
			))}
		</>
	);
}
