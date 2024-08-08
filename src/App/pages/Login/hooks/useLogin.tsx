import { useState } from "react";
import { hEmail } from "../../../../form-handlers/hEmail";
import { hPassword } from "../../../../form-handlers/hPassword";
import { useLoginService } from "./useLoginService";

const initLogin: Login = {
	form: {
		email: { value: "", err: "" },
		password: { value: "", err: "" }
	},
	state: { loading: false, err: false }
};

export const useLogin = () => {
	const [login, setLogin] = useState(initLogin);
	const form = login.form;
	const state = login.state;

	useLoginService({ login, setLogin });

	const isValidLogin =
		!form.email.err &&
		!!form.email.value &&
		!form.password.err &&
		!!form.password.value &&
		!state.loading;

	const setEmail = (newValue: string) => {
		const newEmail = hEmail(newValue, form.email);
		const newLogin = { ...login };
		newLogin.form.email = newEmail;
		setLogin(newLogin);
	};

	const setPassword = (newValue: string) => {
		const newPassword = hPassword(newValue, form.password);
		const newLogin = { ...login };
		newLogin.form.password = newPassword;
		setLogin(newLogin);
	};

	const auth = () => {
		const newLogin = { ...login };
		newLogin.state = { loading: true, err: false };
		setLogin(newLogin);
	};

	return {
		form: {
			email: form.email,
			password: form.password
		},
		set: { email: setEmail, password: setPassword },
		state: { loading: state.loading, err: state.err },
		isValid: isValidLogin,
		auth
	};
};

export type Login = {
	form: {
		email: {
			value: string;
			err: string;
		};
		password: {
			value: string;
			err: string;
		};
	};
	state: {
		loading: boolean;
		err: boolean;
	};
};

export type SetLogin = React.Dispatch<React.SetStateAction<Login>>;
