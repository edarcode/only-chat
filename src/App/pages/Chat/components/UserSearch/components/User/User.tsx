import { useEffect, useState } from "react";
import Btn from "../../../../../../../components/buttons/Btn/Btn";
import { UserType } from "../../hooks/useSearch";
import css from "./css.module.css";
import { followToService } from "./service/followToService";
import { useAuth } from "../../../../../../../state/auth/useAuth";

export default function User({ user }: Props) {
	const token = useAuth(auth => auth.token);
	const [follow, setFollow] = useState({
		loading: false,
		err: false
	});

	useEffect(() => {
		if (!follow.loading || !token) return;

		const controller = new AbortController();

		setFollow({ ...follow, err: false });
		followToService(controller.signal, token, user.id)
			.catch(() => {
				setFollow({ ...follow, err: true });
			})
			.finally(() => {
				setFollow(follow => ({ ...follow, loading: false }));
			});

		return () => controller.abort();
	}, [follow.loading]);

	return (
		<article className={css.user}>
			<span key={user.id}> {user.username} </span>
			<Btn
				className={css.btn}
				disabled={follow.loading}
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
	user: UserType;
};
