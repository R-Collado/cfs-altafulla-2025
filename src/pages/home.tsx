import { LastMatches } from '@/components/last-matches';
import { NextMatch } from '@/components/next-match';
import { PlayerSlider } from '@/components/player-slider';
import { PostsPreviewSlider } from '@/components/posts-preview-slider';

export const HomePage = () => {
	return (
		<section className="home-page">
			<section className="hero | flex">
				<PostsPreviewSlider />
			</section>
			<section className="matches-section | flex">
				<LastMatches />
				<NextMatch />
			</section>

			<section className="players-section">
				<h2 className="players-section__header | uppercase text-left">Our players</h2>
				<PlayerSlider />
			</section>
		</section>
	);
};
