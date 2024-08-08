import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./App/router/router";
import "./main.css";

ReactDOM.createRoot(document.querySelector("#root")!).render(
	<RouterProvider router={router} />
);
