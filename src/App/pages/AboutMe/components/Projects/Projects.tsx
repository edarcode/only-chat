import { EDARCODE } from "../../../../../constants/edarcode";
import ProjectCard from "./components/ProjectCard/ProjectCard";

export default function Projects() {
	EDARCODE;
	return (
		<section>
			<h3>Proyectos</h3>
			<ProjectCard project={EDARCODE.projects[0]} />
		</section>
	);
}
