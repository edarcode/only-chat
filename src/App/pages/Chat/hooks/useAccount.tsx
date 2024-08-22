import { useEffect, useState } from "react";
import { useAuth } from "../../../../state/auth/useAuth";
import { accountService } from "../services/accountService";

const initialAccount: Account = {
	createdAt: "",
	followers: [],
	following: [],
	id: "",
	img: null,
	username: ""
};

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
			.then((account: Account) => {
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

export type User = {
	id: string;
	username: string;
	img: string | null;
};

export type Account = {
	id: string;
	username: string;
	img: string | null;
	createdAt: string;
	followers: User[];
	following: User[];
};
