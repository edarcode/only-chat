import { useEffect, useState } from "react";
import Btn from "../../../../../components/buttons/Btn/Btn";
import InputText from "../../../../../components/inputs/InputText/InputText";
import { api } from "../../../../../constants/api";
import { joinClassNames } from "../../../../../utils/joinClassNames";
import css from "./css.module.css";
import io from "socket.io-client";
import { FormEvent } from "../../../../../types";

const socket = io(api.base);
const initChat: string[] = [];

export default function Messages({ className }: Props) {
	const [message, setMessage] = useState("");
	const [chat, setChat] = useState(initChat);

	const finalClassName = joinClassNames([css.messages, className]);

	useEffect(() => {
		socket.on("message", hMsg);

		return () => {
			socket.off("message");
		};
	}, []);

	const hMsg = (msg: string) => {
		setChat(chat => [...chat, msg]);
	};

	const hSubmit = (e: FormEvent) => {
		e.preventDefault();
		setChat(chat => [...chat, message]);
		socket.emit("message", message);
		setMessage("");
	};

	return (
		<section className={finalClassName}>
			<div className={css.visualizer}>
				{chat.map((msg, i) => (
					<div key={i}>{msg}</div>
				))}
			</div>
			<form action="" className={css.form} onSubmit={hSubmit}>
				<InputText
					autoComplete="off"
					className={css.input}
					placeholder="Escribe tu msg"
					value={message}
					onChange={e => setMessage(e.target.value)}
				/>
				<Btn>Enviar</Btn>
			</form>
		</section>
	);
}

type Props = {
	className?: string;
};
