import AboutMe from "../pages/AboutMe/AboutMe";
import DesignSystem from "../pages/DesignSystem/DesignSystem";
import Education from "../pages/Education/Education";
import Login from "../pages/Login/Login";
import Utils from "../pages/Utils/Utils";
import RouteProtector from "./RouteProtector/RouteProtector";

export const PAGES = [
	{
		id: crypto.randomUUID(),
		name: "Sobre mí",
		path: "/",
		element: <AboutMe />
	},
	{
		id: crypto.randomUUID(),
		name: "Educación",
		path: "/education",
		element: (
			<RouteProtector>
				<Education />
			</RouteProtector>
		)
	},
	{
		id: crypto.randomUUID(),
		name: "Utilidades",
		path: "/utils",
		element: <Utils />
	},
	{
		id: crypto.randomUUID(),
		name: "Design System",
		path: "/design-system",
		element: <DesignSystem />
	},
	{
		id: crypto.randomUUID(),
		name: "Login",
		path: "/login",
		element: <Login />
	}
];
