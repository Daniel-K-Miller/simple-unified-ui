import React, { FunctionComponent } from "react";

import { IBlock } from "./props";

const Block: FunctionComponent<IBlock> = ({
	className,
	type,
	children,
	heading,
}) => {
	const Element = type;

	const handleHeading = () => {
		if (heading === undefined) return undefined;

		if (heading?.size === undefined) {
			console.error(
				`on block element - headingSize is 'undefined' where includeHeading equals 'true'`
			);
			return undefined;
		}

		if (heading?.text === undefined) {
			console.error(
				`on block element - headingText is 'undefined' where includeHeading equals 'true'`
			);
			return undefined;
		}

		return <heading.size>{heading.text}</heading.size>;
	};

	return (
		<Element className={className}>
			{handleHeading()}
			{children}
		</Element>
	);
};

export { Block };
