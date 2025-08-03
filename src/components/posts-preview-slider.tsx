import { Swiper, SwiperSlide } from 'swiper/react';
import { HomePostPreview } from './home-post-preview';
import dummyImage1 from '@images/dummy-post-1.png';
import dummyImage2 from '@images/dummy-post-2.png';
import { Navigation, Pagination } from 'swiper/modules';

const dummyPost = {
	id: 1,
	title: 'Dummy Post Title',
	bodyTop: 'This is a dummy post body top text.',
	bodyBottom: 'This is a dummy post body bottom text.',
	date: '2023-10-01',
	image: dummyImage1,
	tag: 'dummy',
};

const dummyPost2 = {
	id: 2,
	title: 'Dummy Post Title',
	bodyTop: 'This is a dummy post body top text.',
	bodyBottom: 'This is a dummy post body bottom text.',
	date: '2023-10-01',
	image: dummyImage2,
	tag: 'dummy',
};

export const PostsPreviewSlider = () => {
	return (
		<Swiper
			modules={[Navigation, Pagination]}
			slidesPerView={'auto'}
			navigation
			pagination={{ clickable: true }}
			className="posts-preview-slider">
			<SwiperSlide>
				<HomePostPreview post={dummyPost} type="large" />
			</SwiperSlide>
			<SwiperSlide>
				<HomePostPreview post={dummyPost2} />
			</SwiperSlide>
			<SwiperSlide>
				<HomePostPreview post={dummyPost2} />
			</SwiperSlide>
			<SwiperSlide>
				<HomePostPreview post={dummyPost2} />
			</SwiperSlide>
			<SwiperSlide>
				<HomePostPreview post={dummyPost2} />
			</SwiperSlide>
		</Swiper>
	);
	// <div className="posts-preview-slider">
	// 	{posts.map((post) => (
	// 		<div key={post.id} className="post-preview">
	// 			<img src={post.image} alt={post.title} className="post-image" />
	// 			<h2 className="post-title">{post.title}</h2>
	// 			<p className="post-excerpt">{post.excerpt}</p>
	// 			<p className="post-date">{new Date(post.date).toLocaleDateString()}</p>
	// 			<button className="btn-read-more">Read More</button>
	// 		</div>
	// 	))}
	// </div>
};
