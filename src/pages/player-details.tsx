import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { API_BASE_URL } from '@utils/utilities/config';
import { useParams } from 'react-router';
import { FieldPlayer, Keeper } from '@/types/player';
import { FieldPlayerDetailsStats, KeeperDetailsStats } from '@/components/role-details-stats';
import ParagraphBlock from '@/utils/utilities/text';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

export const PlayerDetailsPage = () => {
	const { playerId } = useParams();
	const [player, setPlayer] = useState<FieldPlayer | Keeper>();
	const { i18n, t } = useTranslation();
	const activeLanguage = i18n.language as 'ca' | 'es' | 'en';

	const playerUrl = `${API_BASE_URL}/players/${playerId}`;
	const playerDetailsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		fetch(playerUrl)
			.then((res) => res.json())
			.then((data) => {
				setPlayer(data);
			});
	}, []);

	useLayoutEffect(() => {
		if (!playerDetailsRef.current) return;

		const ctx = gsap.context(() => {
			const tl = gsap.timeline();

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
				},
				{
					opacity: 1,
					yPercent: 0,
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
		}, playerDetailsRef.current);

		return () => ctx.revert();
	}, [player]);

	if (!player) return <p>Loading...</p>;

	return (
		<section className="player-details">
			<div className="page-container | relative flex" ref={playerDetailsRef}>
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
					<img className="player-image" src={player?.photoUrl} alt={player?.firstName} />
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
