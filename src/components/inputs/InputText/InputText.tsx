import { joinClassNames } from "../../../utils/joinClassNames";
import css from "./css.module.css";
import Input from "./Input/Input";
import { Props } from "./types";

export default function InputText(props: Props) {
	const { className, title, err, loading, success, async, ...extraProps } =
		props;

	const finalClassName = joinClassNames([css.label, className]);

	return (
		<label className={finalClassName}>
			{title && <span className={css.title}>{title}</span>}

			<Input
				{...extraProps}
				err={err}
				async={async}
				loading={loading}
				success={success}
			/>

			{err && <span className={css.err}>{err}</span>}
		</label>
	);
}
