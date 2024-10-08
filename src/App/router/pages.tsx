import Chat from "../pages/Chat/Chat";
import DesignSystem from "../pages/DesignSystem/DesignSystem";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import RouteProtector from "./RouteProtector/RouteProtector";

export const CHAT = {
	id: crypto.randomUUID(),
	name: "Chat",
	path: "/",
	element: (
		<RouteProtector>
			<Chat />
		</RouteProtector>
	)
} as const;

export const LOGIN = {
	id: crypto.randomUUID(),
	name: "Login",
	path: "/login",
	element: <Login />
} as const;

export const SIGNUP = {
	id: crypto.randomUUID(),
	name: "Signup",
	path: "/signup",
	element: <Signup />
} as const;

export const DESIGN_SYSTEM = {
	id: crypto.randomUUID(),
	name: "Design System",
	path: "/design-system",
	element: <DesignSystem />
} as const;

export const PAGES = [CHAT, DESIGN_SYSTEM];
