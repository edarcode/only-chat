import { joinClassNames } from "../../../../../utils/joinClassNames";
import { User } from "../../hooks/useAccount";
import UserProfile from "../UserProfile/UserProfile";
import css from "./css.module.css";

export default function Following({
	className,
	following,
	receptor,
	setReceptor
}: Props) {
	const finalClassName = joinClassNames([css.following, className]);

	return (
		<section className={finalClassName}>
			{following.map((user, index) => (
				<UserProfile
					key={user.id}
					className={index === receptor ? css.receptor : undefined}
					username={user.username}
					img={user.img}
					onClick={() => setReceptor(index)}
				/>
			))}
		</section>
	);
}

type Props = {
	className?: string;
	following: User[];
	receptor: number;
	setReceptor: React.Dispatch<React.SetStateAction<number>>;
};
