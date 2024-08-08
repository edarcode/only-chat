import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import css from "./css.module.css";
import { useRefreshToken } from "../state/auth/hooks/useRefreshToken";

export default function App() {
	useRefreshToken();

	return (
		<div className={css.app}>
			<Header className={css.header} />
			<main className={css.main}>
				<Outlet />
			</main>
			<Footer className={css.footer} />
		</div>
	);
}
