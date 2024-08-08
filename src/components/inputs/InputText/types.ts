export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	title?: string;
	err?: string;

	async?: boolean;
	loading?: boolean;
	success?: boolean;
}
