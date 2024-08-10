import InputText from "../../../../../components/inputs/InputText/InputText";
import { joinClassNames } from "../../../../../utils/joinClassNames";
import Users from "./components/Users/Users";
import css from "./css.module.css";
import { useSearch } from "./hooks/useSearch";

export default function UserSearch({ className }: Props) {
	const { setUsername, username, loading, users } = useSearch();
	const finalClassName = joinClassNames([css.search, className]);

	return (
		<form className={finalClassName} onSubmit={e => e.preventDefault()}>
			<InputText
				async
				className={css.input}
				autoComplete="off"
				placeholder="Buscar"
				loading={loading}
				err={username.err}
				value={username.value}
				onChange={e => setUsername(e.target.value)}
			/>
			<Users users={users} />
		</form>
	);
}

type Props = {
	className?: string;
};
