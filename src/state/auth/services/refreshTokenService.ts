import { api } from "../../../constants/api";
import { EdarErr } from "../../../error/EdarErr";

export const refreshTokenService = async (token: string) => {
	const res = await fetch(api.refreshToken, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: token
		}
	});

	if (!res.ok)
		throw new EdarErr({ status: res.status, msg: "Err refresh token" });

	return await res.json();
};
