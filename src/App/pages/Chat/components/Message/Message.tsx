import { joinClassNames } from "../../../../../utils/joinClassNames";
import css from "./css.module.css";

export default function Message({ className }: Props) {
	const finalClassName = joinClassNames([css.message, className]);
	return <section className={finalClassName}>message</section>;
}

type Props = {
	className?: string;
};
