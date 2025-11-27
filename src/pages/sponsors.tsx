import donquijotelogo from '@assets/logos/donquijote.webp';
import ilusionlogo from '@assets/logos/ilusion.webp';
import altafunlogo from '@assets/logos/altafun.png';
import altalegallogo from '@assets/logos/altalegal.png';
import apolologo from '@assets/logos/apolo.webp';
import bruixotlogo from '@assets/logos/bruixot.png';
import correalogo from '@assets/logos/correa.png';
import ferreteriacasaslogo from '@assets/logos/ferreteriacasas.png';
import finquesllevantlogo from '@assets/logos/finquesllevant.png';
import fornnogueslogo from '@assets/logos/fornnogues.png';
import laramonalogo from '@assets/logos/laramona.png';
import leonmechanicslogo from '@assets/logos/leonmechanics.png';
import llenyesgaialogo from '@assets/logos/llenyesgaia.png';
import lolabistrologo from '@assets/logos/lolabistro.png';
import perruqueriacarmelogo from '@assets/logos/perruqueriacarme.png';
import pinturassanchezlogo from '@assets/logos/pinturassanchez.png';
import qiplogo from '@assets/logos/qip.webp';
import siosilogo from '@assets/logos/siosi.png';
import superllunalogo from '@assets/logos/superlluna.png';
import tmaxlogo from '@assets/logos/tmax.png';
import tratorialogo from '@assets/logos/tratoria.png';
import voramarlogo from '@assets/logos/voramar.png';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export const PartnersPage = () => {
	const overlayRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.to(overlayRef.current, {
			y: '-100%',
			duration: 0.5,
			delay: 1,
		});
	}, []);

	return (
		<section className="partners-page page-container">
			<div className="partners | grid">
				<div className="overlay" ref={overlayRef}></div>

				<header className="main-partners | flex">
					<img src={ilusionlogo} alt="Sponsor 1" />
					<img src={donquijotelogo} alt="Sponsor 2" />
				</header>
				<main className="other-partners | grid">
					<img src={altafunlogo} alt="Altafun" />
					<img src={altalegallogo} alt="Altalegal" />
					<img src={apolologo} alt="Apolo" />
					<img src={bruixotlogo} alt="Bruixot" />
					<img src={correalogo} alt="Correa" />
					<img src={ferreteriacasaslogo} alt="Ferreteria Casas" />
					<img src={finquesllevantlogo} alt="Finques Llevant" />
					<img src={fornnogueslogo} alt="Forn Nogues" />
					<img src={laramonalogo} alt="La Ramona" />
					<img src={leonmechanicslogo} alt="Leon Mechanics" />
					<img src={llenyesgaialogo} alt="Llenyes Gaia" />
					<img src={lolabistrologo} alt="Lola Bistro" />
					<img src={perruqueriacarmelogo} alt="Perruqueria Carme" />
					<img src={pinturassanchezlogo} alt="Pinturas Sanchez" />
					<img src={qiplogo} alt="QIP" />
					<img src={siosilogo} alt="Siosi" />
					<img src={superllunalogo} alt="Super Lluna" />
					<img src={tmaxlogo} alt="Tmax" />
					<img src={tratorialogo} alt="Tratoria" />
					<img src={voramarlogo} alt="Voramar" />
				</main>
			</div>
		</section>
	);
};
