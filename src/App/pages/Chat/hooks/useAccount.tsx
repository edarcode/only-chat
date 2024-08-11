import { useEffect, useState } from "react";
import { useAuth } from "../../../../state/auth/useAuth";
import { accountService } from "../services/accountService";

const initialAccount = null;

export const useAccount = () => {
	const [account, setAccount] = useState(initialAccount);
	const [loading, setLoading] = useState(false);
	const [err, setErr] = useState(false);

	const token = useAuth(auth => auth.token);

	useEffect(() => {
		if (!token) return;

		const controller = new AbortController();
		setLoading(true);
		setErr(false);
		accountService(controller.signal, token)
			.then(account => {
				console.log(account);
				setAccount(account);
			})
			.catch(() => {
				setErr(true);
			})
			.finally(() => setLoading(false));

		return () => controller.abort();
	}, []);

	return {
		account,
		loading,
		err
	};
};

// type Account = {
// 	id: string;
// 	name: string;
// 	username: string;
// 	email: string;
// 	img: null | string;
// 	createdAt: string;
// 	following: {
// 		followingId: string;
// 	}[];
// };
