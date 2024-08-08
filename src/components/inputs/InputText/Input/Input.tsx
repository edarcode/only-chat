import { joinClassNames } from "../../../../utils/joinClassNames";
import State from "./State/State";
import css from "./css.module.css";

interface Props {
	err?: string;
	async?: boolean;
	loading?: boolean;
	success?: boolean;
}

export default function Input(props: Props) {
	const { err, async, loading, success, ...extraProps } = props;

	const finalClassInput = joinClassNames([css.input, err && css.input__err]);

	return (
		<label className={css.label}>
			<input
				placeholder="edarcode"
				{...extraProps}
				type="text"
				name="email"
				className={finalClassInput}
			></input>
			<State async={async} err={err} loading={loading} success={success} />
		</label>
	);
}
