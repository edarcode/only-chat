import { BTN__KIND } from "./kinds";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	kind?: keyof typeof BTN__KIND;
	isVisible?: boolean;
	loading?: boolean;
	err?: boolean;
}
