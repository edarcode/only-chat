import { Navigate } from "react-router-dom";
import { useAuth } from "../../../state/auth/useAuth";
import { ROLE } from "../../../constants/roles";
import { LOGIN } from "../pages";

type Props = {
	children: React.ReactNode;
};

export default function RouteProtector({ children }: Props) {
	const token = useAuth(auth => auth.token);
	const role = useAuth(auth => auth.getInfoToken()?.role);

	const isAuth = token && role && role === ROLE.BOSS;

	if (!isAuth) return <Navigate to={LOGIN.path} replace />;

	return children;
}
