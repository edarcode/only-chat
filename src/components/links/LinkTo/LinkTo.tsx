import { NavLink } from "react-router-dom";
import css from "./css.module.css";
import { Props } from "./types";

export default function LinkTo({
	to,
	children,
	icon,
	target,
	rel,
	onClick,
	...props
}: Props) {
	return (
		<NavLink
			{...props}
			to={(icon && icon.url) || to || ""}
			target={target}
			rel={rel}
			className={({ isActive }) => (isActive ? css.active : css.link)}
			onClick={onClick}
		>
			{icon && <img className={css.icon} src={icon.logo} alt={icon.name} />}
			{children}
		</NavLink>
	);
}
