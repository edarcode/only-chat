import { joinClassNames } from "../../../utils/joinClassNames";
import css from "./css.module.css";

type Props = {
	className?: string;
	href: string;
	children: string;
	target?: string;
	rel?: string;
};

export default function Hyperlink({
	className,
	href,
	children,
	target = "_blank",
	rel = "noopener noreferrer",
	...props
}: Props) {
	const finalClassName = joinClassNames([css.link, className]);

	return (
		<a
			{...props}
			href={href}
			className={finalClassName}
			target={target}
			rel={rel}
		>
			{children}
		</a>
	);
}
