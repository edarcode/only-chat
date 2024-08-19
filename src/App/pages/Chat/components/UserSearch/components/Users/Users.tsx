import { Account } from "../../../../hooks/useAccount";
import { Person } from "../../hooks/useSearch";
import UserFound from "../UserFound/UserFound";

import css from "./css.module.css";

export default function Users({ users, account }: Props) {
	if (!users || !users.length) return null;

	return (
		<section className={css.users}>
			{users.map(user => (
				<UserFound key={user.id} userFound={user} account={account} />
			))}
		</section>
	);
}

type Props = {
	users: Person[];
	account: Account;
};
