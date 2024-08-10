import css from "./css.module.css";

export default function Users({ users }: Props) {
	if (!users.length) return null;

	return (
		<section className={css.users}>
			{users.map(user => (
				<span key={user.id}> {user.username} </span>
			))}
		</section>
	);
}

type Props = {
	users: User[] | [];
};

type User = {
	id: string;
	img: string | null;
	username: string;
};
