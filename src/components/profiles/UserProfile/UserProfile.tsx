import { joinClassNames } from "../../../utils/joinClassNames";
import css from "./css.module.css";

export default function UserProfile({ className }: Props) {
	const finalClassName = joinClassNames([css.profile, className]);
	return <article className={finalClassName}>user profile</article>;
}

type Props = {
	className?: string;
};
