import { useState } from "react";
import { joinClassNames } from "../../../../utils/joinClassNames";
import css from "./css.module.css";
import EyeIcon from "./EyeIcon/EyeIcon";

interface Props {
	err?: string;
}

export default function Input(props: Props) {
	const { err, ...extraProps } = props;
	const [isVisiblePass, setIsVisiblePass] = useState(false);

	const finalClassNameInput = joinClassNames([
		css.input,
		err && css.input__err
	]);

	const hVisiblePass = () => setIsVisiblePass(!isVisiblePass);
	return (
		<label className={css.label}>
			<input
				placeholder="password"
				{...extraProps}
				type={!isVisiblePass ? "password" : "text"}
				className={finalClassNameInput}
			></input>
			<EyeIcon isVisiblePass={isVisiblePass} hVisiblePass={hVisiblePass} />
		</label>
	);
}
