import { hideNavBar } from '@/animations/navbar';
import { useEffect, useRef, useState } from 'react';
import { API_BASE_URL } from './players';
import { useParams } from 'react-router';
import { FieldPlayer, Keeper } from '@/types/player';
import { FieldPlayerDetailsStats, KeeperDetailsStats } from '@/components/role-details-stats';
import ParagraphBlock from '@/utils/utilities/text';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

export const PlayerDetailsPage = () => {
	const { playerId } = useParams();
	const [player, setPlayer] = useState<FieldPlayer | Keeper>();
	const { t } = useTranslation();
	const activeLanguage = localStorage.getItem('currentLanguage') || 'es';

	const playerUrl = `${API_BASE_URL}/players/${playerId}`;

	const imageRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		hideNavBar();

		fetch(playerUrl)
			.then((res) => res.json())
			.then((data) => {
				setPlayer(data);
			});
	}, []);

	const tl = gsap.timeline({ paused: true });

	tl.fromTo(
		'.player-image',
		{
			yPercent: 1.5,
			opacity: 0,
		},
		{
			yPercent: 0,
			opacity: 1,
			duration: 0.5,
		},
		'1',
	);

	tl.fromTo(
		'.player-nickname',
		{
			opacity: 0,
			yPercent: 10,
			xPercent: -50,
		},
		{
			opacity: 1,
			yPercent: 0,
			xPercent: -50,
			duration: 1,
			delay: 0.25,
		},
		'1',
	);

	tl.fromTo(
		'.player-info',
		{
			opacity: 0,
			yPercent: 10,
		},
		{
			opacity: 1,
			yPercent: 0,
			duration: 0.25,
			delay: 0.5,
		},
		'1',
	);

	tl.fromTo(
		'.player-birth-details',
		{
			opacity: 0,
			yPercent: 10,
		},
		{
			opacity: 1,
			yPercent: 0,
			duration: 0.25,
		},
		'1',
	);

	tl.fromTo(
		'.player-stats',
		{
			opacity: 0,
			yPercent: 10,
		},
		{
			opacity: 1,
			yPercent: 0,
			duration: 0.5,
			delay: 0.35,
		},
		'1',
	);

	tl.fromTo(
		'.player-bio',
		{
			opacity: 0,
			yPercent: 10,
		},
		{
			opacity: 1,
			yPercent: 0,
			duration: 0.5,
			delay: 0.45,
		},
		'1',
	);

	setTimeout(() => {
		tl.play();
	}, 100);

	useEffect(() => {}, []);

	if (!player) return <p>Loading...</p>;

	return (
		<section className="player-details">
			<div className="page-container | relative flex">
				<p className="player-nickname | uppercase">{player?.nickname || player.firstName}</p>
				<section className="player-stats_and_bio">
					<div className="player-stats-list | flex  ">
						{player?.role === 'keeper' ? (
							<KeeperDetailsStats player={player as Keeper} />
						) : (
							<FieldPlayerDetailsStats player={player as FieldPlayer} />
						)}
					</div>
					<div className="player-bio | text-left">
						<ParagraphBlock text={player?.bio?.[activeLanguage]} />
					</div>
				</section>
				<section className="player-info-details | flex flex-col align-center">
					<img ref={imageRef} className="player-image" src={player?.photoUrl} alt={player?.firstName} />
					<div className="player-info | flex align-center">
						<p className="player-number">{player?.number}</p>
						<div className="player-name_and_role">
							<p className="player-name">
								{player?.firstName} <span className="player-last-name">{player?.lastName}</span>
							</p>
							<p className="player-role | uppercase">{t(`players.roles.${player?.role}`)}</p>
						</div>
					</div>
					<div className="player-birth-details | flex">
						<p className="player-info-names | flex flex-col text-right">
							<span className="">{t('players.info.birthdate')}: </span>
							<span className="">{t('players.info.birthplace')}: </span>
							<span className="">{t('players.info.nationality')}: </span>
						</p>
						<p className="player-info-values | flex flex-col text-left">
							<span className="">{player.birthDay}</span>
							<span className="">{player.birthPlace}</span>
							<span className="">{t(`common.countries.${player.birthCountry}`)}</span>
						</p>
					</div>
				</section>
			</div>
		</section>
	);
};
