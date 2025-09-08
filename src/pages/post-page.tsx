import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import dummyImage1 from '@images/dummy-picture.webp';

import ParagraphBlock from '@/utils/utilities/text';
import { useTranslation } from 'react-i18next';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { API_BASE_URL } from '@/utils/utilities/config';
import { useParams } from 'react-router';
import { Post } from '@/types/post';

export const PostPage = () => {
	const { i18n } = useTranslation();

	const { postId } = useParams();
	const [post, setPost] = useState<Post>();
	const activeLanguage = i18n.language as 'en' | 'ca' | 'es'; // Adjust based on your supported languages

	const postUrl = `${API_BASE_URL}/posts/${postId}`;
	const postRef = useRef<HTMLElement>(null);

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		fetch(postUrl)
			.then((res) => res.json())
			.then((data) => {
				setPost(data);
			});
	}, []);

	useLayoutEffect(() => {
		if (!postRef.current) return;

		const ctx = gsap.context(() => {
			gsap.utils.toArray<HTMLElement>('.post .fade-in:not(:first-child)').forEach((el) => {
				gsap.from(el, {
					opacity: 0,
					y: 30,
					duration: 0.8,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: el,
						start: 'top 50%', // tweak as needed
						toggleActions: 'play none none none',
						onEnter: () => {
							gsap.to(el, { opacity: 1, y: 0, duration: 0.8 });
						},
					},
				});
			});

			gsap.fromTo(
				'.post-title',
				{
					opacity: 0,
					y: 50,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.75,
					delay: 0.2,
					ease: 'power2.out',
				},
			);

			gsap.fromTo(
				'.post-tag',
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					delay: 0.4,
					ease: 'power2.out',
				},
			);

			gsap.fromTo(
				'.author-name',
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					delay: 0.6,
					ease: 'power2.out',
				},
			);

			gsap.fromTo(
				'.post-date',
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					delay: 0.8,
					ease: 'power2.out',
				},
			);

			gsap.fromTo(
				'.author-image',
				{ opacity: 0 },
				{
					opacity: 1,
					duration: 0.75,
					delay: 1,
					ease: 'power2.out',
				},
			);

			gsap.fromTo(
				'.line',
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: 0.75,
					delay: 1.2,
					ease: 'power2.out',
				},
			);

			gsap.fromTo(
				'p.fade-in:first-of-type',
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: 'power2.out',
					delay: 1.4,
				},
			);
		}, postRef);

		return () => ctx.revert();
	});

	if (!post) return <p>Loading...</p>;

	return (
		<section className="page-container post-page" ref={postRef}>
			<header className="post-header | flex">
				<div className="author-info | flex">
					<div className="details | flex ">
						<p className="author-name">Juan Alonso</p>
						<p className="post-date">{post.date}</p>
					</div>
					<img src={dummyImage1} alt="autor" className="author-image" />
				</div>
				<div className="post-info">
					<h2 className="post-title">{post.translations[activeLanguage].title}.</h2>
					<p className="post-tag">{post.tag[activeLanguage]}</p>
				</div>
				<div className="line"></div>
			</header>
			<main className="post">
				<ParagraphBlock text={post.translations[activeLanguage].bodyTop} className="fade-in" />
				<img src={post.image} alt={post.translations[activeLanguage].title} className="post-image fade-in" />
				<ParagraphBlock text={post.translations[activeLanguage].bodyBottom} className="fade-in" />
			</main>
		</section>
	);
};
