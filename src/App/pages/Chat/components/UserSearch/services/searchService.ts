import { api } from "../../../../../../constants/api";
import { EdarErr } from "../../../../../../error/EdarErr";

export const searchService = async (signal: AbortSignal, username: string) => {
	const res = await fetch(`${api.search}?username=${username}`, {
		signal,
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	});

	if (!res.ok)
		throw new EdarErr({ status: res.status, msg: "Err search user" });

	return await res.json();
};
