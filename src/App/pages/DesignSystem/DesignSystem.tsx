import Btn from "../../../components/buttons/Btn/Btn";
import InputCheckbox from "../../../components/inputs/InputCheckbox/InputCheckbox";
import InputPassword from "../../../components/inputs/InputPassword/InputPassword";
import InputText from "../../../components/inputs/InputText/InputText";
import Select from "../../../components/inputs/Select/Select";
import css from "./css.module.css";

export default function DesignSystem() {
	return (
		<div className={css.design}>
			<section className={css.btns}>
				<Btn>edarcode</Btn>
				<Btn disabled>edarcode</Btn>
			</section>
			<section className={css.inputs}>
				<InputText className={css.inputText} title="Nombre" />
				<Select>
					<option value="css">TypeScript</option>
					<option value="html">Rust</option>
				</Select>
				<InputCheckbox title="¿Activo?" />
				<InputPassword />
			</section>
		</div>
	);
}
