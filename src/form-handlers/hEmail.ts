import { emailSchema } from "../zod-schemas/emailSchema";

export const hEmail = (newValue: string, email: Email) => {
	let newEmail = { ...email };
	newEmail = { value: newValue, err: "" };

	if (!newValue) return newEmail;

	const { success, error } = emailSchema.safeParse(newValue);
	if (!success) {
		const msgErr = error.errors[0].message;
		newEmail.err = msgErr;
	}

	return newEmail;
};

type Email = {
	value: string;
	err: string;
};
