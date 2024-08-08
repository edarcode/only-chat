import DesignSystem from "../pages/DesignSystem/DesignSystem";
import Login from "../pages/Login/Login";

export const PAGES = [
	{
		id: crypto.randomUUID(),
		name: "Login",
		path: "/",
		element: <Login />
	},

	{
		id: crypto.randomUUID(),
		name: "Design System",
		path: "/design-system",
		element: <DesignSystem />
	}
];
