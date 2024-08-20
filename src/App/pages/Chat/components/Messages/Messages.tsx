import Btn from "../../../../../components/buttons/Btn/Btn";
import InputText from "../../../../../components/inputs/InputText/InputText";
import { joinClassNames } from "../../../../../utils/joinClassNames";
import css from "./css.module.css";

export default function Messages({ className }: Props) {
	const finalClassName = joinClassNames([css.messages, className]);
	return (
		<section className={finalClassName}>
			<div className={css.visualizer}>visualizer</div>
			<form action="" className={css.form}>
				<InputText autoComplete="off" className={css.input} />
				<Btn>Enviar</Btn>
			</form>
		</section>
	);
}

type Props = {
	className?: string;
};
