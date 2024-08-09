import { api } from "../../../../constants/api";
import { EdarErr } from "../../../../error/EdarErr";

export const loginService = async (signal: AbortSignal, params: Params) => {
	const res = await fetch(api.login, {
		signal,
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(params)
	});

	if (!res.ok) throw new EdarErr({ status: res.status, msg: "Err login" });

	return await res.json();
};

type Params = {
	email: string;
	password: string;
};
