import Btn from "../../../components/buttons/Btn/Btn";
import { useAuth } from "../../../state/auth/useAuth";
import { joinClassNames } from "../../../utils/joinClassNames";
import Networks from "./components/Networks/Networks";
import css from "./css.module.css";
import { Props } from "./types";

export default function Footer({ className }: Props) {
	const token = useAuth(auth => auth.token);
	const logout = useAuth(auth => auth.removeToken);
	const finalClassName = joinClassNames([css.footer, className]);
	return (
		<footer className={finalClassName}>
			<Btn onClick={logout} disabled={!token}>
				logout
			</Btn>
			<Networks />
			<div className={css.gmail}>
				<p>
					edarcode@
					<img
						src="/svg/networks/gmail.svg"
						alt="gmail"
						width="28"
						height="28"
					/>
					.com
				</p>
				<p>© Casi todos los derechos reservados.</p>
			</div>
		</footer>
	);
}
