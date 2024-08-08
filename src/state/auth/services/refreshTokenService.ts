import { API } from "../../../constants/api";
import { EdarErr } from "../../../error/EdarErr";

export const refreshTokenService = async (token: string) => {
	const res = await fetch(URL, {
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

const URL = `${API.baseUrl}/user/client/auth/refresh-token`;
