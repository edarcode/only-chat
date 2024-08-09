import InputText from "../../../../../components/inputs/InputText/InputText";
import { joinClassNames } from "../../../../../utils/joinClassNames";
import css from "./css.module.css";

export default function UserSearch({ className }: Props) {
	const finalClassName = joinClassNames([css.search, className]);
	return (
		<section className={finalClassName}>
			<InputText async />
		</section>
	);
}

type Props = {
	className?: string;
};
