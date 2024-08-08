import { useState } from "react";
import { joinClassNames } from "../../../utils/joinClassNames";
import BtnNav from "./components/BtnNav/BtnNav";
import Nav from "./components/Nav/Nav";
import Networks from "./components/Networks/Networks";
import css from "./css.module.css";
import { Props } from "./types";

export default function Header({ className }: Props) {
	const [isVisible, setIsVisible] = useState(false); // hace ref al nav

	const finalClassName = joinClassNames([css.header, className]);
	const finalClassNameNav = joinClassNames([css.nav, isVisible && css.expand]);
	const finalClassNameBtn = joinClassNames([css.btn, isVisible && css.cross]);

	const hVisible = () => setIsVisible(!isVisible);

	return (
		<header className={finalClassName}>
			<Networks className={css.networks} />
			<BtnNav
				className={finalClassNameBtn}
				isCross={isVisible}
				onClick={hVisible}
				id="btn-nav"
				aria-controls="menu"
				aria-label="Despliega menú principal"
				aria-haspopup={isVisible ? "true" : "false"}
			/>
			<Nav
				className={finalClassNameNav}
				isVisible={isVisible}
				onClickLinks={hVisible}
				id="menu"
				aria-labelledby="btn-nav"
				role="menu"
			/>
		</header>
	);
}
