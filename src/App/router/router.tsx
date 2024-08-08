import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrPage from "../pages/ErrPage/ErrPage";
import { PAGES } from "./pages";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrPage />,
		children: PAGES
	}
]);
