import { api } from "../../../../constants/api";
import { EdarErr } from "../../../../error/EdarErr";

export const accountService = async (signal: AbortSignal, token: string) => {
	const res = await fetch(api.getAccount, {
		signal,
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: token
		}
	});

	if (!res.ok) throw new EdarErr({ status: res.status, msg: "Err follow to" });

	return await res.json();
};
