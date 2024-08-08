import { joinClassNames } from "../../../utils/joinClassNames.js";
import css from "./css.module.css";
import Check from "./icons/Check.js";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	title?: string;
}

export default function InputCheckbox(props: Props) {
	const { className, title, ...extraProps } = props;
	const finalClassName = joinClassNames([css.label, className]);
	return (
		<label className={finalClassName}>
			<input {...extraProps} type="checkbox" className={css.checkbox} />
			<span className={css.fakeCheckbox}>
				<Check className={css.icon} />
			</span>
			{title}
		</label>
	);
}
