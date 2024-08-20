import Following from "./components/Following/Following";
import Messages from "./components/Messages/Messages";
import UserProfile from "./components/UserProfile/UserProfile";
import UserSearch from "./components/UserSearch/UserSearch";
import css from "./css.module.css";
import { useAccount } from "./hooks/useAccount";

export default function Chat() {
	const { account } = useAccount();
	return (
		<article className={css.chat}>
			<UserSearch className={css.search} account={account} />
			<div className={css.conversation}>
				<UserProfile className={css.profile} username={account.username} />
				<Messages className={css.message} />
			</div>
			<Following className={css.following} following={account.following} />
		</article>
	);
}
