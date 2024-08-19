import UserProfile from "../../../../../components/profiles/UserProfile/UserProfile";
import { joinClassNames } from "../../../../../utils/joinClassNames";
import { User } from "../../hooks/useAccount";
import css from "./css.module.css";

export default function Following({ className, following }: Props) {
	const finalClassName = joinClassNames([css.following, className]);
	return (
		<section className={finalClassName}>
			{following.map(user => (
				<UserProfile key={user.id} username={user.username} img={user.img} />
			))}
		</section>
	);
}

type Props = {
	className?: string;
	following: User[];
};
