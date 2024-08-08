import { useEffect } from "react";
import { loginService } from "../services/loginService";
import { Login, SetLogin } from "./useLogin";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../state/auth/useAuth";

export function useLoginService(params: Params) {
	const { login, setLogin } = params;
	const updateToken = useAuth(auth => auth.updateToken);
	const { form, state } = login;
	const navigate = useNavigate();

	useEffect(() => {
		if (!login.state.loading) return;

		const controller = new AbortController();
		const body = { email: form.email.value, password: form.password.value };
		loginService(controller.signal, body)
			.then(res => {
				const token = res.token as string;
				updateToken(token);
				navigate("/");
			})
			.catch(() => {
				setLogin({ ...login, state: { loading: false, err: true } });
			});

		return () => controller.abort();
	}, [state.loading]);
}

type Params = {
	login: Login;
	setLogin: SetLogin;
};
