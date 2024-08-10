import { Navigate } from "react-router-dom";
import { useAuth } from "../../../state/auth/useAuth";
import { LOGIN } from "../pages";

type Props = {
	children: React.ReactNode;
};

export default function RouteProtector({ children }: Props) {
	const token = useAuth(auth => auth.token);
	const isAuth = token;

	if (!isAuth) return <Navigate to={LOGIN.path} replace />;

	return children;
}
