import { useAuth } from "../useAuth";

export const useRefreshToken = () => {
	const refreshToken = useAuth(auth => auth.refreshToken);
	refreshToken();

	// useEffect(() => {}, []);
};
