import { useState } from "react";
import Following from "./components/Following/Following";
import Messages from "./components/Messages/Messages";
import UserProfile from "./components/UserProfile/UserProfile";
import UserSearch from "./components/UserSearch/UserSearch";
import css from "./css.module.css";
import { useAccount } from "./hooks/useAccount";

export default function Chat() {
	const { account } = useAccount();
	const [receptor, setReceptor] = useState(0);

	if (!account.id) return null;
	return (
		<article className={css.chat}>
			<UserSearch className={css.search} account={account} />
			<div className={css.conversation}>
				<UserProfile className={css.profile} username={account.username} />

				{account.following.length && (
					<Messages
						className={css.message}
						account={account}
						receptor={account.following[receptor]}
					/>
				)}
			</div>
			<Following
				className={css.following}
				following={account.following}
				receptor={receptor}
				setReceptor={setReceptor}
			/>
		</article>
	);
}
