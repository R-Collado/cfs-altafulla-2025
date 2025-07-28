import ParagraphBlock from '@/utils/utilities/text';
import dummyImg from '/images/ekko_balcony.jpg';
import { RelatedArticle } from '@/components/related-article';
import { useTranslation } from 'react-i18next';

const dummyPost = {
	title: 'El equipo vuelve a ganar en casa tras una una mala racha',
	excerpt:
		'El equipo ha conseguido una victoria importante tras varias derrotas consecutivas, lo que les permite seguir luchando por el título.',
	image:
		'https://images.unsplash.com/photo-1601280932729-b43b8ea0f738?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	tag: 'primer equipo',
	date: new Date('2025-06-24'),
};

const formatted = dummyPost.date.toLocaleDateString('es', {
	day: 'numeric',
	month: 'long',
	year: 'numeric',
});

const dummyAuthor = {
	name: 'Roger Collado',
	image: dummyImg,
};

const text1 = `Después de varias jornadas difíciles, de esas en las que los resultados no acompañan y las dudas se hacen más grandes que el balón, el equipo volvió a celebrar una victoria en casa. Y no fue una cualquiera. Fue una de esas que se sienten más allá del marcador: por cómo se jugó, por cómo se luchó, y por cómo respondió la afición.\n\nDesde el primer minuto se notó otra actitud. Nada de salir a ver qué pasaba. Hoy se salió a por todas. Presión alta, intensidad en cada disputa, concentración defensiva, y una idea clara: recuperar la identidad que tantos partidos pareció desdibujada. El primer gol llegó tras una jugada colectiva que arrancó desde atrás, con paciencia pero también con intención. Tres toques bien dados, un desmarque a tiempo y una definición que rompió el silencio del pabellón. Fue como un suspiro colectivo. Como si todos entendieran que el equipo estaba de vuelta.\n\nPocos minutos después llegó el segundo, fruto de la insistencia y de esa energía que se contagia cuando todo empieza a salir bien. El rival reaccionó, como era de esperar, pero esta vez la respuesta fue sólida. Se defendió bien, se cerraron espacios y se evitó la desconexión que tantas veces había costado puntos. Cada jugador entendió su rol y lo cumplió con compromiso. Hubo ayudas defensivas, coberturas, bloqueos, y sobre todo, una actitud colectiva que no se veía desde hacía semanas. El equipo no solo ganó. El equipo convenció.
`;

const text2 = `
Volver a ganar en casa es más que sumar tres puntos. Es volver a creer. En el plan, en el entrenador, en los compañeros, y en uno mismo. Porque cuando vienes de una mala racha, lo más difícil no es mejorar tácticamente, sino recuperar la confianza. Y hoy eso se notó. En los gestos, en las miradas, en los abrazos tras cada gol.\n\nLa afición también jugó su partido. No dejó de cantar, incluso cuando el equipo pasaba por momentos de apuro. Se notó que había ganas de celebrar, pero también de acompañar. Ese apoyo constante, incluso en los errores, fue clave para sostener la moral en los minutos más tensos. Y cuando el árbitro pitó el final, la ovación fue tan merecida como necesaria.\n\nEn el vestuario se celebró con alivio y orgullo. Porque no fue fácil. Porque venían golpes. Pero esta vez, el golpe lo dimos nosotros. Ahora el reto es mantener esta energía. No relajarse. Seguir trabajando con humildad y hambre. Este partido puede ser un punto de inflexión, pero solo si se aprovecha como tal.\n\nQuedan muchas jornadas por delante. No hay margen para confiarse, pero sí motivos para ilusionarse. El equipo ha demostrado que, cuando se conecta con su esencia, es capaz de competir con cualquiera. Y si algo quedó claro hoy, es que este grupo no ha dicho su última palabra.\n\nGanar en casa siempre sabe bien. Pero después de caer tantas veces, sabe aún mejor.
`;

export const PostPage = () => {
	const { t } = useTranslation();

	return (
		<section className="page-container post-page">
			<header className="post-header | flex">
				<div className="author-info | flex">
					<div className="details | flex ">
						<p className="author-name">{dummyAuthor.name}</p>
						<p className="post-date">{formatted}</p>
					</div>
					<img src={dummyAuthor.image} alt={dummyAuthor.name} className="author-image" />
				</div>
				<div>
					<h2 className="post-title">{dummyPost.title}.</h2>
					<p className="post-tag">{dummyPost.tag}</p>
				</div>
			</header>
			<main className="post">
				<header>
					<ParagraphBlock text={text1} />
					<img src={dummyPost.image} alt={dummyPost.title} className="post-image" />
					<ParagraphBlock text={text2} />
				</header>
			</main>
			<footer className="post-footer | text-center">
				<h3>{t('blog.relatedPosts')}</h3>
				<div className="related-posts | flex">
					<RelatedArticle title={dummyPost.title} image={dummyPost.image} date={dummyPost.date.toISOString()} />
					<RelatedArticle title={dummyPost.title} image={dummyPost.image} date={dummyPost.date.toISOString()} />
					<RelatedArticle title={dummyPost.title} image={dummyPost.image} date={dummyPost.date.toISOString()} />
				</div>
			</footer>
		</section>
	);
};
