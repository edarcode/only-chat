import { api } from "../../../../../../../../constants/api";
import { EdarErr } from "../../../../../../../../error/EdarErr";

export const followToService = async (
	signal: AbortSignal,
	token: string,
	followingId: string
) => {
	const res = await fetch(`${api.follow}/${followingId}`, {
		signal,
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: token
		}
	});

	if (!res.ok) throw new EdarErr({ status: res.status, msg: "Err follow to" });

	return await res.json();
};
