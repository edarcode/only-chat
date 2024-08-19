import { joinClassNames } from "../../../../../utils/joinClassNames";
import css from "./css.module.css";
import defaultImg from "./user-profile.png";

export default function UserProfile({ className, username, img }: Props) {
	const finalClassName = joinClassNames([css.profile, className]);
	return (
		<article className={finalClassName}>
			<img className={css.img} src={img ? img : defaultImg} alt="usuario" />
			<span>{username}</span>
		</article>
	);
}

type Props = {
	className?: string;
	username: string;
	img?: string | null;
};
