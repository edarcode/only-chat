import { useEffect, useState } from "react";
import { usernameSchema } from "../../../../../../zod-schemas/usernameSchema";
import { searchService } from "../services/searchService";
import { useAuth } from "../../../../../../state/auth/useAuth";

const initialSearch: Search = {
	username: { value: "", err: "" },
	loading: false,
	err: "",
	users: []
};

export const useSearch = () => {
	const [search, setSearch] = useState(initialSearch);
	const token = useAuth(auth => auth.token);

	useEffect(() => {
		if (!isValid || !token) return;

		const controller = new AbortController();
		const timeoutId = setTimeout(() => {
			setSearch({ ...search, loading: true, err: "", users: [] });
			searchService(controller.signal, token, search.username.value)
				.then(users => {
					setSearch({ ...search, users });
				})
				.catch(() => setSearch({ ...search, err: "Err al pedir usuarios" }))
				.finally(() => setSearch(search => ({ ...search, loading: false })));
		}, 300);
		return () => {
			clearTimeout(timeoutId);
			controller.abort();
		};
	}, [search.username.value]);

	const isValid = search.username.value && !search.username.err;

	const setUsername = (newValue: string) => {
		const newSearch = {
			...search,
			users: [],
			username: { value: newValue, err: "" }
		};
		const { success, error } = usernameSchema.safeParse(newValue);
		if (!success && newValue) newSearch.username.err = error.errors[0].message;
		setSearch(newSearch);
	};

	return {
		username: search.username,
		loading: search.loading,
		err: search.err,
		users: search.users,
		setUsername
	};
};

type Search = {
	username: { value: string; err: string };
	loading: boolean;
	err: string;
	users: Person[];
};

export type Person = {
	id: string;
	img: string | null;
	username: string;
};
