import { joinClassNames } from "../../../../../utils/joinClassNames";
import css from "./css.module.css";

export default function Following({ className }: Props) {
	const finalClassName = joinClassNames([css.following, className]);
	return <section className={finalClassName}>following</section>;
}

type Props = {
	className?: string;
};
