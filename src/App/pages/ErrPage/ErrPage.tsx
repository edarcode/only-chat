import { Link } from "react-router-dom";

export default function ErrPage() {
	return (
		<div>
			<h1>Oops!</h1>
			<p>Ha ocurrido un error 😬</p>
			<Link to="/">Ir a página principal</Link>
		</div>
	);
}
