import { useEffect } from "react";
import { useAuth } from "../useAuth";

export const useRefreshToken = () => {
	const refreshToken = useAuth(auth => auth.refreshToken);

	useEffect(() => {
		refreshToken();
	}, []);
};
