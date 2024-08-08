import { joinClassNames } from "../../../utils/joinClassNames";
import css from "./css.module.css";
import Input from "./Input/Input";
import { Props } from "./types";

export default function InputPassword(props: Props) {
	const { className, err, ...extraProps } = props;

	const finalClassName = joinClassNames([css.label, className]);

	return (
		<label className={finalClassName}>
			<Input {...extraProps} err={err} />
			{err && <span className={css.err}>{err}</span>}
		</label>
	);
}
