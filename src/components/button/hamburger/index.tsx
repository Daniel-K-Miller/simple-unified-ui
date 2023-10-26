import React, { FunctionComponent } from "react";

import { IHamburgerButton } from "./props";

const HamburgerButton: FunctionComponent<IHamburgerButton> = ({
	className,
	onClick,
}) => {
	return (
		<button className={className} onClick={onClick}>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
};

export { HamburgerButton };
