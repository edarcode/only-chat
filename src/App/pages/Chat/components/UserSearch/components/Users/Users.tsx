import { UserType } from "../../hooks/useSearch";
import User from "../User/User";

import css from "./css.module.css";

export default function Users({ users }: Props) {
	if (!users.length) return null;

	return (
		<section className={css.users}>
			{users.map(user => (
				<User key={user.id} user={user} />
			))}
		</section>
	);
}

type Props = {
	users: UserType[];
};
