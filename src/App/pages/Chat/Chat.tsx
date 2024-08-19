import UserProfile from "../../../components/profiles/UserProfile/UserProfile";
import Following from "./components/Following/Following";
import Message from "./components/Message/Message";
import UserSearch from "./components/UserSearch/UserSearch";
import css from "./css.module.css";
import { useAccount } from "./hooks/useAccount";

export default function Chat() {
	const { account } = useAccount();
	return (
		<article className={css.chat}>
			<UserSearch className={css.search} />
			<div className={css.conversation}>
				<UserProfile className={css.profile} username={account.username} />
				<Message className={css.message} />
			</div>
			<Following className={css.following} following={account.following} />
		</article>
	);
}
