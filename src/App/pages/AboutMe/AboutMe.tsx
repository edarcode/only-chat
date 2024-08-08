import Banner from "./components/Banner/Banner";
import Experiences from "./components/Experiences/Experiences";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import css from "./css.module.css";

export default function AboutMe() {
	return (
		<section className={css.about}>
			<Banner />
			<Experiences />
			<Projects />
			<Skills />
		</section>
	);
}
