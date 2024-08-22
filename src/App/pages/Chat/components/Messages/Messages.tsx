import { useEffect, useState } from "react";
import Btn from "../../../../../components/buttons/Btn/Btn";
import InputText from "../../../../../components/inputs/InputText/InputText";
import { api } from "../../../../../constants/api";
import { joinClassNames } from "../../../../../utils/joinClassNames";
import css from "./css.module.css";
import io from "socket.io-client";
import { FormEvent } from "../../../../../types";
import { Account, User } from "../../hooks/useAccount";

const socket = io(api.base);
const initChat: Message[] = [];
const initMessage: Message = { issuerId: "", receptorId: "", text: "" };
type Message = {
	issuerId: string;
	receptorId: string;
	text: string;
};

export default function Messages({ className, account, receptor }: Props) {
	const [message, setMessage] = useState(initMessage);
	const [chat, setChat] = useState(initChat);

	const finalClassName = joinClassNames([css.messages, className]);

	useEffect(() => {
		setChat([]);
		socket.emit("joinRoom", { issuerId: account.id, receptorId: receptor.id });
		socket.on("message", hMsg);

		return () => {
			socket.off("message");
		};
	}, [receptor]);

	const hMsg = (msg: Message) => {
		setChat(chat => [...chat, msg]);
	};

	const hSubmit = (e: FormEvent) => {
		e.preventDefault();
		setChat(chat => [...chat, message]);
		socket.emit("message", message);
		setMessage(initMessage);
	};

	return (
		<section className={finalClassName}>
			<div className={css.visualizer}>
				{chat.map((msg, i) => (
					<div
						key={i}
						className={msg.issuerId == account.id ? css.msg : css.msg_friend}
					>
						{msg.text}
					</div>
				))}
			</div>
			<form action="" className={css.form} onSubmit={hSubmit}>
				<InputText
					autoComplete="off"
					className={css.input}
					placeholder="Escribe tu msg"
					value={message.text}
					onChange={e =>
						setMessage({
							issuerId: account.id,
							receptorId: receptor.id,
							text: e.target.value
						})
					}
				/>
				<Btn>Enviar</Btn>
			</form>
		</section>
	);
}

type Props = {
	className?: string;
	account: Account;
	receptor: User;
};
