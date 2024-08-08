import css from "./css.module.css";

export default function Banner() {
	return (
		<article className={css.banner}>
			<div className={css.description}>
				<h1>Edwin Ortiz</h1>
				<h2>Full Stack Developer</h2>
				<p>
					Siempre dispuesto a aprender y compartir conocimientos. Creo en el
					trabajo duro y el compromiso.
				</p>
			</div>
		</article>
	);
}
