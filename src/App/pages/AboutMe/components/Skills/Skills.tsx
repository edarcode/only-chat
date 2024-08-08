import { EDARCODE } from "../../../../../constants/edarcode";
import css from "./css.module.css";

export default function Skills() {
	const logos = EDARCODE.Skills.map(skill => (
		<img
			width="28"
			height="28"
			key={skill.name}
			className={css.logo}
			src={skill.logo}
			alt={skill.name}
			title={skill.name}
		/>
	));

	return (
		<article className={css.skills}>
			<h3>Habilidades</h3>
			<div className={css.logos}>{logos}</div>
		</article>
	);
}
