import LinkTo from "../../../../../components/links/LinkTo/LinkTo";
import { useAuth } from "../../../../../state/auth/useAuth";
import { joinClassNames } from "../../../../../utils/joinClassNames";
import { PAGES } from "../../../../router/pages";

import css from "./css.module.css";
import { Props } from "./types";

export default function Nav(props: Props) {
	const { className, isVisible, id, role, onClickLinks } = props;
	const infoToken = useAuth(auth => auth.getInfoToken());
	const logout = useAuth(auth => auth.removeToken);

	const finalClassName = joinClassNames([
		css.nav,
		isVisible && css.expand,
		className
	]);

	const links = PAGES.map(page => {
		if (page.name === "Login" && infoToken && infoToken.name) {
			return (
				<LinkTo key={page.id} to={page.path} onClick={logout}>
					Logout
				</LinkTo>
			);
		}
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
