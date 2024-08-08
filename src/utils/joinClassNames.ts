type Items = string | undefined | null | false;
type ClassNames = Items[];

export const joinClassNames = (classNames: ClassNames) => {
	const validClassNames = classNames.filter(Boolean);
	const finalClassName = validClassNames.join(" ");
	return finalClassName;
};
