import Err from "../../../icons/Err";
import Loading from "../../../icons/Loading";
import { joinClassNames } from "../../../utils/joinClassNames";

import css from "./css.module.css";

import { BTN__KIND } from "./kinds";
import { Props } from "./types";

export default function Btn(props: Props) {
	const {
		isVisible = true,
		kind,
		className,
		loading,
		err,
		children,
		...extraProps
	} = props;

	const finalClassNameBtn = joinClassNames([
		css.btn,
		BTN__KIND[kind ?? "primary"],
		err && css.btn__err,
		className
	]);

	if (!isVisible) return null;
	return (
		<button {...extraProps} className={finalClassNameBtn}>
			{loading ? "Cargando..." : children}

			{loading && <Loading className={css.loading} />}
			{err && <Err className={css.err} />}
		</button>
	);
}
