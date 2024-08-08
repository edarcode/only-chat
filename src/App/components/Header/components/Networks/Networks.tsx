import LinkTo from "../../../../../components/links/LinkTo/LinkTo";
import { EDARCODE } from "../../../../../constants/edarcode";
import { joinClassNames } from "../../../../../utils/joinClassNames";

import css from "./css.module.css";

type Props = {
	className?: string;
};

export default function Networks({ className }: Props) {
	const finalClassName = joinClassNames([css.networks, className]);
	const networks = EDARCODE.networks.map(network => (
		<LinkTo
			key={network.name}
			icon={network}
			target="_blank"
			rel="noopener noreferrer"
		></LinkTo>
	));

	return <article className={finalClassName}>{networks}</article>;
}
