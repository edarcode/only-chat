import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";
import { refreshTokenService } from "./services/refreshTokenService";

type Auth = {
	token: null | string;
	getInfoToken: () => InfoToken | void;
	removeToken: () => void;
	updateToken: (token: string) => void;
	refreshToken: () => void;
};

export const useAuth = create<Auth>()(
	devtools(
		(set, get) => ({
			token: null,
			removeToken: () => {
				set({ token: null });
				localStorage.removeItem("token");
			},
			updateToken: token => {
				set({ token });
				localStorage.setItem("token", token);
			},
			getInfoToken() {
				const { token } = get();
				if (!token) return;
				const infoToken = jwtDecode(token) as InfoToken;
				return infoToken;
			},
			refreshToken: async () => {
				const token = localStorage.getItem("token");
				if (!token) return;

				const infoToken = jwtDecode(token) as InfoToken;
				const currentTime = Math.floor(Date.now() / 1000);
				const daysInSeconds = 3 * 24 * 60 * 60;
				const isTimeToRefresh = currentTime - infoToken.iat > daysInSeconds;

				const { updateToken } = get();
				if (!isTimeToRefresh) return updateToken(token);

				try {
					const res = await refreshTokenService(token);
					const newToken = res.token as string;
					updateToken(newToken);
				} catch (error) {
					const { removeToken } = get();
					removeToken();
				}
			}
		}),
		{ name: "auth" }
	)
);

type InfoToken = { name: string; role: Role; iat: number };
type Role = "ADMIN" | "BOSS" | "CLIENT";
