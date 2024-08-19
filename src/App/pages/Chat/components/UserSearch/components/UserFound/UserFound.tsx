import { useEffect, useState } from "react";
import Btn from "../../../../../../../components/buttons/Btn/Btn";
import { Person } from "../../hooks/useSearch";
import css from "./css.module.css";
import { followToService } from "./service/followToService";
import { useAuth } from "../../../../../../../state/auth/useAuth";
import { Account } from "../../../../hooks/useAccount";

export default function UserFound({ userFound, account }: Props) {
	const token = useAuth(auth => auth.token);
	const [follow, setFollow] = useState({
		loading: false,
		err: false
	});

	useEffect(() => {
		if (!follow.loading || !token) return;

		const controller = new AbortController();

		setFollow({ ...follow, err: false });
		followToService(controller.signal, token, userFound.id)
			.catch(() => {
				setFollow({ ...follow, err: true });
			})
			.finally(() => {
				setFollow(follow => ({ ...follow, loading: false }));
			});

		return () => controller.abort();
	}, [follow.loading]);

	const isValidUserToFollow =
		account.following.every(userFollowed => userFollowed.id !== userFound.id) &&
		account.id !== userFound.id;

	return (
		<article className={css.user}>
			<span key={userFound.id}> {userFound.username} </span>
			<Btn
				className={css.btn}
				disabled={follow.loading || !isValidUserToFollow}
				err={follow.err}
				loading={follow.loading}
				onClick={() => setFollow({ ...follow, loading: true })}
			>
				Seguir
			</Btn>
		</article>
	);
}

type Props = {
	userFound: Person;
	account: Account;
};
