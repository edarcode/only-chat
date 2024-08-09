import UserProfile from "../../../components/profiles/UserProfile/UserProfile";
import Following from "./components/Following/Following";
import Message from "./components/Message/Message";
import UserSearch from "./components/UserSearch/UserSearch";
import css from "./css.module.css";

export default function Chat() {
	return (
		<article className={css.chat}>
			<UserSearch className={css.search} />
			<Following className={css.following} />
			<UserProfile className={css.profile} />
			<Message className={css.message} />
		</article>
	);
}
