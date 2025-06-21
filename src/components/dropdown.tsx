import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';

export const Dropdown = ({ options, label }) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	const menuRef = useRef(null);

	useEffect(() => {
		if (isOpen && menuRef.current) {
			gsap.fromTo(
				menuRef.current,
				{ opacity: 0, scale: 0, y: -4 },
				{ opacity: 1, scale: 1, y: 0, duration: 0.3, ease: 'power2.out' },
			);
		}
	}, [isOpen]);

	const handleMouseLeave = () => {
		menuRef.current &&
			gsap.to(menuRef.current, {
				opacity: 0,
				scale: 0,
				duration: 0.2,
				ease: 'power2.out',
				onComplete: () => setIsOpen(false),
			});
	};
	return (
		<div className="dropdown" ref={dropdownRef} onMouseLeave={handleMouseLeave} onMouseEnter={() => setIsOpen(true)}>
			<p className="dropdown-trigger | pointer">{label}</p>
			{isOpen && (
				<ul className="dropdown-menu" ref={menuRef}>
					{options.map((option, index) => (
						<li key={index}>
							<Link to={`/${option.value}/players`}>{option.label}</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
