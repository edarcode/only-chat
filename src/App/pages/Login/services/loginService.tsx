import { BASE_URL } from "../../../../edarcode-api/urls";
import { EdarErr } from "../../../../error/EdarErr";

export const loginService = async (signal: AbortSignal, params: Params) => {
	const res = await fetch(URL, {
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

const URL = `${BASE_URL}/user/client/auth/login`;

type Params = {
	email: string;
	password: string;
};
