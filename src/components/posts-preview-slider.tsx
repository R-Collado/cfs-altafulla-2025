import { Swiper, SwiperSlide } from 'swiper/react';
import { HomePostPreview } from './home-post-preview';
import { Navigation, Pagination } from 'swiper/modules';
import { API_BASE_URL } from '@/utils/utilities/config';
import { useEffect, useState } from 'react';
import { Post } from '@/types/post';

export const PostsPreviewSlider = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	const postsUrl = `${API_BASE_URL}/posts`;

	useEffect(() => {
		fetch(postsUrl)
			.then((res) => res.json())
			.then((data) => {
				setPosts(data.posts);
				setLoading(false);
			});
	}, []);

	if (loading) return <p>Loading posts...</p>;

	return (
		<Swiper
			modules={[Navigation, Pagination]}
			slidesPerView={'auto'}
			navigation
			pagination={{ clickable: true }}
			className="posts-preview-slider">
			{posts.map((post: Post, idx) => (
				<SwiperSlide key={post.id}>
					<HomePostPreview post={post} type={idx === 0 ? 'large' : 'small'} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
