import { passwordSchema } from "../zod-schemas/passwordSchema";

export const hPassword = (newValue: string, password: Password) => {
	let newPassword = { ...password };
	newPassword = { value: newValue, err: "" };

	if (!newValue) return newPassword;

	const { success, error } = passwordSchema.safeParse(newValue);
	if (!success) {
		const msgErr = error.errors[0].message;
		newPassword.err = msgErr;
	}

	return newPassword;
};

type Password = {
	value: string;
	err: string;
};
