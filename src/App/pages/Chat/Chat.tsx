import UserProfile from "../../../components/profiles/UserProfile/UserProfile";
import { api } from "../../../constants/api";
import Following from "./components/Following/Following";
import Message from "./components/Message/Message";
import UserSearch from "./components/UserSearch/UserSearch";
import css from "./css.module.css";
import io from "socket.io-client";

const socket = io(api.base);

export default function Chat() {
	return (
		<article className={css.chat}>
			<UserSearch className={css.search} />
			<div className={css.conversation}>
				<UserProfile className={css.profile} />
				<Message className={css.message} />
			</div>
			<Following className={css.following} />
		</article>
	);
}
