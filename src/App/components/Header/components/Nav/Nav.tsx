import LinkTo from "../../../../../components/links/LinkTo/LinkTo";
import { joinClassNames } from "../../../../../utils/joinClassNames";
import { PAGES } from "../../../../router/pages";

import css from "./css.module.css";
import { Props } from "./types";

export default function Nav(props: Props) {
	const { className, isVisible, id, role, onClickLinks } = props;

	const finalClassName = joinClassNames([
		css.nav,
		isVisible && css.expand,
		className
	]);

	const links = PAGES.map(page => {
		return (
			<LinkTo key={page.id} to={page.path} onClick={onClickLinks}>
				{page.name}
			</LinkTo>
		);
	});

	return (
		<nav id={id} role={role} className={finalClassName}>
			{links}
		</nav>
	);
}
