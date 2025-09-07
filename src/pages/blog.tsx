import { PostPreview } from '@/components/post-preview';
import { Post } from '@/types/post';
import { API_BASE_URL } from '@/utils/utilities/config';
import { useEffect, useRef, useState } from 'react';
import { CustomEase } from 'gsap/CustomEase';
import gsap from 'gsap';

export const BlogPage = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const playersOverlayRef = useRef<HTMLDivElement>(null);

	const postsUrl = `${API_BASE_URL}/posts`;

	gsap.registerPlugin(CustomEase);
	CustomEase.create('easing-animation', '.97,.27,.15,.74');

	useEffect(() => {
		fetch(postsUrl)
			.then((res) => res.json())
			.then((data) => {
				const sortedPosts = data.posts.sort((a: Post, b: Post) => {
					return new Date(b.date).getTime() - new Date(a.date).getTime();
				});

				setPosts(sortedPosts);
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		if (loading) return;

		gsap.to(playersOverlayRef.current, {
			y: '-100%',
			duration: 0.25,
			ease: 'easing-animation',
			delay: 1,
		});
	}, [loading]);

	if (loading) return <p>Loading posts...</p>;
	if (!posts || posts.length === 0) return <p>No posts found.</p>;

	return (
		<>
			<section className="page-container blog">
				<div className="overlay" ref={playersOverlayRef}></div>
				{posts.length === 0 ? (
					<p>No posts available.</p>
				) : (
					posts.map((post: Post) => <PostPreview key={post.id} post={post} type="large" />)
				)}
			</section>
		</>
	);
};
